/**
 * Helper to generate calendar URLs and ICS files
 */

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: string; // ISO 8601 string, e.g. "2026-09-06T11:00:00+05:30"
  durationMinutes: number;
}

export function formatGoogleCalendarDate(date: Date): string {
  return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
}

export function getGoogleCalendarUrl(event: CalendarEvent): string {
  const start = new Date(event.startTime);
  const end = new Date(start.getTime() + event.durationMinutes * 60 * 1000);

  const startFormatted = formatGoogleCalendarDate(start);
  const endFormatted = formatGoogleCalendarDate(end);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${startFormatted}/${endFormatted}`,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getICSFileContent(event: CalendarEvent): string {
  const start = new Date(event.startTime);
  const end = new Date(start.getTime() + event.durationMinutes * 60 * 1000);

  const startFormatted = formatGoogleCalendarDate(start);
  const endFormatted = formatGoogleCalendarDate(end);
  const nowFormatted = formatGoogleCalendarDate(new Date());

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AI Masterclass//Webinar Event//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@aimasterclass.com
DTSTAMP:${nowFormatted}
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, "\\n")}
LOCATION:${event.location}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: AI Masterclass starts in 15 minutes!
END:VALARM
END:VEVENT
END:VCALENDAR`;
}
