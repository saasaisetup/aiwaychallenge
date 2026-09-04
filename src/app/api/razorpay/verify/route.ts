import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendWebinarConfirmationEmail } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      phone,
      amount,
    } = await req.json();

    const key_secret = process.env.RAZORPAY_KEY_SECRET || "";

    // Verify signature
    const hmac = crypto.createHmac("sha256", key_secret);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    const isSignatureValid = generatedSignature === razorpay_signature;

    if (!isSignatureValid) {
      return NextResponse.json(
        { success: false, message: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Payment is authentic -> Trigger confirmation email with Meet & Calendar link via Resend
    let emailSent = false;
    if (email) {
      const emailResult = await sendWebinarConfirmationEmail({
        name: name || "Attendee",
        email: email,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        amountPaid: amount || 99,
      });
      emailSent = !!emailResult.success;
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully!",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      emailSent,
    });
  } catch (error: any) {
    console.error("Error verifying Razorpay payment:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Verification failed" },
      { status: 500 }
    );
  }
}
