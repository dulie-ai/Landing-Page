# Dulie — next-direction page

Separate React/Vite entry point, published at **https://dulie-ai.github.io/Landing-Page/future/**.
The existing site remains at `/Landing-Page/`; its source, legal pages and metadata are unchanged.

Run from the repository root:

- `npm run dev:future` — work on this page independently (open `/future/`).
- `npm run build` — build the current site, then this page into `dist/future/`.
- `npm run check` — lint, formatting, both builds, and desktop/mobile tests.

This folder copies the current site's branding, logo, icons and bot configuration, but has its own content, styles, metadata and social preview. It shares the root dependency installation and deployment. The second build only clears `dist/future`, never the existing site.

## Product-claim boundaries

Reviewed the current website and published privacy policy, the original bot implementation, and the separate `dulie-development` working tree. The known Telegram destination is `https://t.me/dulie_bot`. Capture, lookup, reminders and optional Google Calendar integration are supported by the inspected implementation and current published product information. The hero is illustrative, not a captured transcript.

Edit/reschedule, undo, recurrence, Google Tasks and morning-summary code in development does not establish public release. These are intentionally not promoted on the new page as available today. No live user account was used to exercise the bot.

Goal breakdown, scheduling, progress-based estimates and adaptive replanning are proposed. The portfolio demo is local state only: it never connects to a calendar or sends user data. Unknown progress is not completion. Calendar dates are illustrative weekdays, not a live schedule.

CanvasLink remains a separate product and a connection under exploration. No verified public product destination or feedback-specific channel was found, so no invented link, waitlist or form was added. Existing privacy and terms link back to the current site's policies.
