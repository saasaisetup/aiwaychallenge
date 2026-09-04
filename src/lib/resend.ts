import { Resend } from "resend";
import { getGoogleCalendarUrl, getICSFileContent, CalendarEvent } from "./calendar";

export function getResendClient() {
  const resendApiKey = process.env.RESEND_API_KEY || "";
  return new Resend(resendApiKey);
}

interface EmailAttendeeParams {
  name: string;
  email: string;
  orderId: string;
  paymentId: string;
  amountPaid: number;
}

export async function sendWebinarConfirmationEmail({
  name,
  email,
  orderId,
  paymentId,
  amountPaid,
}: EmailAttendeeParams) {
  const webinarTitle =
    process.env.NEXT_PUBLIC_WEBINAR_TITLE ||
    process.env.WEBINAR_TITLE ||
    "10x Your Career Using AI: Masterclass for Students & Pros";
  const startTime =
    process.env.NEXT_PUBLIC_WEBINAR_DATE ||
    process.env.WEBINAR_DATE ||
    "2026-09-06T11:00:00+05:30";
  const duration = parseInt(
    process.env.NEXT_PUBLIC_WEBINAR_DURATION_MINS ||
    process.env.WEBINAR_DURATION_MINS ||
    "120",
    10
  );
  const meetUrl =
    process.env.NEXT_PUBLIC_WEBINAR_MEET_URL ||
    process.env.WEBINAR_MEET_URL ||
    "https://meet.google.com/abc-defg-hij";

  const event: CalendarEvent = {
    title: webinarTitle,
    description: `Live AI Masterclass: 25+ AI tools to 10x your productivity & career.\n\nJoin Link: ${meetUrl}`,
    location: meetUrl,
    startTime: startTime,
    durationMinutes: duration,
  };

  const googleCalUrl = getGoogleCalendarUrl(event);
  const icsContent = getICSFileContent(event);

  const formattedDate = new Date(startTime).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = new Date(startTime).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You are Confirmed!</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 16px; border: 1px solid #334155; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .badge { display: inline-block; background: #faff69; color: #0a0a0a; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
    h1 { color: #ffffff; font-size: 24px; margin-top: 16px; margin-bottom: 8px; }
    p { color: #cccccc; font-size: 15px; line-height: 1.6; }
    .details-box { background: #0a0a0a; border-radius: 12px; border: 1px solid #2a2a2a; padding: 20px; margin: 24px 0; }
    .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
    .detail-label { color: #888888; font-weight: 600; }
    .detail-val { color: #ffffff; font-weight: 700; }
    .btn { display: inline-block; padding: 14px 24px; border-radius: 10px; font-size: 15px; font-weight: 800; text-decoration: none; text-align: center; margin-right: 10px; margin-bottom: 10px; }
    .btn-primary { background: #faff69; color: #0a0a0a !important; }
    .btn-secondary { background: #161616; color: #ffffff !important; border: 1px solid #2a2a2a; }
    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #888888; }
  </style>
</head>
<body>
  <div class="card" style="max-width: 600px; margin: 0 auto; background: #121212; border-radius: 16px; border: 1px solid #2a2a2a; padding: 32px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
    <div class="badge">Registration Confirmed</div>
    <h1>You're In, ${name}! 🚀</h1>
    <p>Your seat for <strong>${webinarTitle}</strong> is locked. Get ready to save 15+ hours weekly and learn 25+ game-changing AI tools.</p>
    
    <div class="details-box">
      <div class="detail-row"><span class="detail-label">📅 Date:</span> <span class="detail-val">${formattedDate}</span></div>
      <div class="detail-row"><span class="detail-label">⏰ Time:</span> <span class="detail-val">${formattedTime} IST (${duration} Mins)</span></div>
      <div class="detail-row"><span class="detail-label">🎟️ Amount Paid:</span> <span class="detail-val">₹${amountPaid} (Payment ID: ${paymentId})</span></div>
      <div class="detail-row"><span class="detail-label">📍 Platform:</span> <span class="detail-val">Google Meet</span></div>
    </div>

    <div style="margin: 24px 0;">
      <a href="${googleCalUrl}" class="btn btn-primary" target="_blank">📅 Add to Google Calendar</a>
      <a href="${meetUrl}" class="btn btn-secondary" target="_blank">🔗 Join Google Meet Link</a>
    </div>

    <p style="font-size: 13px; color: #888888;">
      💡 <em>Pro Tip: Click <strong>"Add to Google Calendar"</strong> right now so Google automatically reminds you 15 minutes before we go live!</em>
    </p>

    <hr style="border: 0; border-top: 1px solid #2a2a2a; margin: 24px 0;" />

    <h3 style="color: #ffffff; font-size: 16px;">What to prepare before the masterclass:</h3>
    <ul style="color: #cccccc; font-size: 14px; padding-left: 20px;">
      <li>Have a notebook or Notion page open to save copy-paste prompts.</li>
      <li>Join 5 minutes early to test your audio & video connection.</li>
      <li>All bonus cheat sheets & directory will be unlocked live during the call!</li>
    </ul>

    <div class="footer">
      <p>Questions? Reply directly to this email.<br>© 2026 AIWAY CHALLENGE • Mentored by Ankit Singh. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

  try {
    const textContent = `
Your Ticket for ${webinarTitle} is Confirmed!

Hi ${name},
Your seat is locked for the live AI masterclass with Ankit Singh.

Event Details:
- Date: ${formattedDate}
- Time: ${formattedTime} IST (${duration} Mins)
- Amount Paid: ₹${amountPaid} (Payment ID: ${paymentId})
- Platform: Google Meet
- Join Google Meet Link: ${meetUrl}
- Add to Google Calendar: ${googleCalUrl}

What to prepare before the masterclass:
1. Join 5 minutes early to test your audio & video connection.
2. Have a notebook or Notion page open to save copy-paste prompts.
3. All bonus cheat sheets & directory will be unlocked live during the call!

Questions? Reply directly to this email.
© 2026 AIWAY CHALLENGE • Mentored by Ankit Singh. All rights reserved.
    `.trim();

    const resend = getResendClient();
    const sender =
      process.env.SENDER_EMAIL ||
      process.env.RESEND_FROM_EMAIL ||
      "onboarding@resend.dev";
    const fromAddress = sender.includes("<") ? sender : `AI Masterclass <${sender}>`;

    const data = await resend.emails.send({
      from: fromAddress,
      to: [email],
      replyTo: "emdeveloperankit@gmail.com",
      subject: `🎟️ Confirmed: Your Ticket for AI Masterclass + Google Meet Link`,
      text: textContent,
      html: htmlContent,
      attachments: [
        {
          filename: "webinar-invite.ics",
          content: Buffer.from(icsContent).toString("base64"),
        },
      ],
    });

    if (data.error) {
      console.error("Resend delivery failed with error:", data.error);
      return { success: false, error: data.error };
    }

    console.log("Resend email successfully delivered! Email ID:", data.data?.id);
    return { success: true, data: data.data };
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
    return { success: false, error };
  }
}
