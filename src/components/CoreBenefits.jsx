import { Calendar, Bell, Undo } from "./Icons.jsx";

export function CoreBenefits() {
  return (
    <section className="core section" id="how-it-works">
      <div className="container">
        <div className="core-heading" data-reveal="up">
          <span className="kicker">LESS ADMIN. MORE HEADSPACE.</span>
          <h2>
            A little help.
            <br />
            <em>Throughout your day.</em>
          </h2>
        </div>
        <div className="core-grid">
          <article className="core-card core-card--morning" data-reveal="up">
            <div className="core-card__label">
              <Bell size={18} /> STAY AHEAD
            </div>
            <div className="morning-visual" aria-hidden="true">
              <span className="morning-sun" />
              <b>08:00</b>
              <span>Good morning. Here’s your day.</span>
              <div>
                <i /> 09:00 <strong>Team standup</strong>
              </div>
              <div>
                <i /> 17:00 <strong>Send the proposal</strong>
              </div>
            </div>
            <h3>
              Remember once.
              <br />
              Let Dulie follow up.
            </h3>
            <p>
              Schedule reminders and recurring events. Your morning brief brings
              today’s events and scheduled tasks back into view, in your local
              timezone.
            </p>
          </article>
          <article className="core-card core-card--sync" data-reveal="up">
            <div className="core-card__label">
              <Calendar size={18} /> KEEP IT TOGETHER
            </div>
            <div className="calendar-visual" aria-hidden="true">
              <div className="calendar-visual__days">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
              </div>
              <div className="calendar-visual__blocks">
                <span>Work</span>
                <span>Gym</span>
                <span>Errands</span>
              </div>
              <small>✓ Calendar & Tasks connected</small>
            </div>
            <h3>
              In your chat.
              <br />
              On your calendar.
            </h3>
            <p>
              Link Google once. Dulie sends events to Calendar and tasks to
              Google Tasks, with automatic event colors and default durations by
              category.
            </p>
          </article>
          <article className="core-card core-card--control" data-reveal="up">
            <div className="core-card__label">
              <Undo size={18} /> CHANGE YOUR MIND
            </div>
            <div className="change-visual" aria-hidden="true">
              <span>move event gym to tue 8pm</span>
              <div>
                <del>Monday · 7 PM</del>
                <b>Tuesday · 8 PM</b>
              </div>
              <small>↩ Undo · available for 10 minutes</small>
            </div>
            <h3>
              Plans change.
              <br />
              Just say so.
            </h3>
            <p>
              Find, edit, or delete saved items—even several at once. Changes
              carry through to Google, with ten-minute Undo for creates, edits,
              deletes, and batches.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
