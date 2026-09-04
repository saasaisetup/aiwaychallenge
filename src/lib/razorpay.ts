import Razorpay from "razorpay";

let razorpayInstance: Razorpay | null = null;

export function getRazorpayClient(): Razorpay {
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
  const key_secret = process.env.RAZORPAY_KEY_SECRET || "";

  return new Razorpay({
    key_id,
    key_secret,
  });
}
