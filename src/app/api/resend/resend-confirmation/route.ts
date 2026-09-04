import { NextResponse } from "next/server";
import { sendWebinarConfirmationEmail } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, paymentId, amount } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required" },
        { status: 400 }
      );
    }

    const emailResult = await sendWebinarConfirmationEmail({
      name: name || "Attendee",
      email: email.trim(),
      orderId: `order_resend_${Date.now()}`,
      paymentId: paymentId || `pay_resend_${Date.now()}`,
      amountPaid: amount || 99,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: (emailResult.error as any)?.message || "Failed to dispatch email",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Ticket confirmation email resent successfully!",
      data: emailResult.data,
    });
  } catch (error: any) {
    console.error("Error in resend confirmation:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
