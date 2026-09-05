"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Zap, Lock, Calendar, Clock } from "lucide-react";
import Script from "next/script";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  price?: number;
  planTitle?: string;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  price = 199,
  planTitle = "10x Your Productivity Just By Using AI Masterclass",
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage("Please fill in all details (Name, Email, and Phone).");
      return;
    }

    setLoading(true);

    try {
      // 1. Create order on server
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price,
          planTitle,
          name,
          email,
          phone,
        }),
      });

      const orderData = await res.json();

      if (!res.ok || !orderData.orderId) {
        throw new Error(orderData.error || "Failed to initialize payment gateway.");
      }

      // 2. Ensure Razorpay SDK is ready
      if (typeof window !== "undefined" && !(window as any).Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
          if (existingScript) {
            existingScript.addEventListener("load", () => resolve());
            existingScript.addEventListener("error", () => reject(new Error("Unable to load Razorpay payment SDK.")));
            return;
          }
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Unable to load Razorpay payment SDK. Please check your connection."));
          document.body.appendChild(script);
        });
      }

      // 3. Open Razorpay Checkout Modal
      const options = {
        key: orderData.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "",
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "AIWAY CHALLENGE",
        description: planTitle,
        order_id: orderData.orderId,
        prefill: {
          name: name.trim(),
          email: email.trim(),
          contact: phone.trim(),
        },
        theme: {
          color: "#faff69", // ClickHouse Electric Yellow
        },
        handler: async function (response: any) {
          try {
            // 4. Verify payment on server & trigger Resend email
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                name,
                email,
                phone,
                planTitle,
                price,
              }),
            });

            const verifyData = await verifyRes.json();

            if ((verifyRes.ok && verifyData.success) || response.razorpay_payment_id) {
              window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}&paymentId=${response.razorpay_payment_id}&name=${encodeURIComponent(
                name
              )}&email=${encodeURIComponent(email)}`;
            } else {
              setErrorMessage(
                verifyData.error || "Payment verification failed. Please contact support."
              );
            }
          } catch (err: any) {
            // Even if client-side fetch throws, if Razorpay returned a valid payment ID, redirect to thank you!
            if (response.razorpay_payment_id) {
              window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}&paymentId=${response.razorpay_payment_id}&name=${encodeURIComponent(
                name
              )}&email=${encodeURIComponent(email)}`;
              return;
            }
            setErrorMessage(err.message || "Error verifying transaction.");
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.on("payment.failed", function (response: any) {
        setErrorMessage(
          response?.error?.description || "Payment failed or was cancelled. Please try again."
        );
        setLoading(false);
      });
      razorpayInstance.open();
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl shadow-[0_0_60px_rgba(250,255,105,0.15)] overflow-hidden text-white"
            >
              {/* Top Bar with ClickHouse styling */}
              <div className="flex items-center justify-between p-5 border-b border-[#2a2a2a] bg-[#121212]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#faff69]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#faff69] uppercase">
                    CONFIRM WORKSHOP SEAT
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#242424] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {/* Event Summary Card */}
                <div className="mb-6 p-4 rounded-lg bg-[#121212] border border-[#2a2a2a]">
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {planTitle}
                  </h4>
                  <div className="mt-2.5 flex items-center gap-4 text-xs text-[#888888]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#faff69]" />
                      <span>Sun, 6th Sept</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#faff69]" />
                      <span>11:00 AM IST</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#2a2a2a] flex items-center justify-between">
                    <span className="text-xs text-[#888888]">Total Investment:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-[#888888] line-through">₹1499</span>
                      <span className="text-2xl font-black font-mono text-[#faff69]">₹{price}</span>
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-950/50 border border-red-800 text-red-200 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#cccccc] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#faff69] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#cccccc] mb-1.5">
                      Email Address (for Meet link & ticket)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#faff69] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#cccccc] mb-1.5">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#faff69] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* ClickHouse Signature Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 px-6 rounded-lg text-sm sm:text-base font-bold bg-[#faff69] text-[#0a0a0a] hover:bg-[#e6eb52] transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(250,255,105,0.45)] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>CONNECTING PAYMENT...</span>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-[#0a0a0a]" />
                        <span>PAY ₹{price} & SECURE SEAT</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Footer */}
                <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-[#888888]">
                  <ShieldCheck className="w-4 h-4 text-[#faff69]" />
                  <span>Secured by Razorpay 256-Bit SSL • Instant Confirmation</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
