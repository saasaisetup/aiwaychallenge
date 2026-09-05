import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const amount = body.amount ? Number(body.amount) : 199;
    const planTitle = body.planTitle || body.planName || "10x Career AI Masterclass";
    const name = body.name || body.attendeeName || "Valued Attendee";
    const email = body.email || body.attendeeEmail || "";
    const phone = body.phone || body.attendeePhone || "";

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_SECRET || "";

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { success: false, error: "Razorpay credentials not configured" },
        { status: 500 }
      );
    }

    const amountInPaise = Math.round(amount * 100);
    const receipt = `rcpt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const authHeader = "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const payload = {
      amount: amountInPaise,
      currency: "INR",
      receipt,
      notes: {
        planTitle,
        name,
        email,
        phone,
      },
    };

    // Make direct API call to Razorpay with retry
    let response: Response | null = null;
    let attempts = 0;
    let lastError: any = null;

    while (attempts < 2) {
      attempts++;
      try {
        response = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader,
          },
          body: JSON.stringify(payload),
          cache: "no-store",
        });
        if (response.ok) break;
      } catch (err) {
        lastError = err;
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    if (!response || !response.ok) {
      const errorData = response ? await response.json().catch(() => ({})) : null;
      const errorMsg =
        errorData?.error?.description ||
        lastError?.message ||
        "Failed to initiate order with payment gateway.";
      console.error("Razorpay order creation error:", errorData || lastError);
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: 500 }
      );
    }

    const order = await response.json();

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to create payment order. Please try again.",
      },
      { status: 500 }
    );
  }
}
