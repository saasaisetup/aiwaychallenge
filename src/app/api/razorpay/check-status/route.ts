import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_SECRET || "";

    if (!keyId || !keySecret) {
      return NextResponse.json({
        success: false,
        error: "Missing Razorpay credentials on server",
        hasKeyId: !!keyId,
        hasKeySecret: !!keySecret,
      });
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    // Fetch latest payments
    const paymentsRes = await fetch("https://api.razorpay.com/v1/payments?count=5", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "no-store",
    });

    const paymentsData = await paymentsRes.json();

    // Also fetch account details if available
    return NextResponse.json({
      success: true,
      keyIdPrefix: keyId.substring(0, 10),
      paymentsCount: paymentsData.count || 0,
      recentPayments: (paymentsData.items || []).map((p: any) => ({
        id: p.id,
        entity: p.entity,
        amount: p.amount / 100,
        currency: p.currency,
        status: p.status,
        order_id: p.order_id,
        method: p.method,
        description: p.description,
        card_id: p.card_id,
        bank: p.bank,
        wallet: p.wallet,
        vpa: p.vpa,
        email: p.email,
        contact: p.contact,
        error_code: p.error_code,
        error_description: p.error_description,
        error_source: p.error_source,
        error_step: p.error_step,
        error_reason: p.error_reason,
        created_at: new Date(p.created_at * 1000).toISOString(),
      })),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
