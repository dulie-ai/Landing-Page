import { useState } from "react";
import { Mark } from "../../src/components/Brand.jsx";
import { ArrowRight, Check } from "../../src/components/Icons.jsx";

const faqs = [
  [
    "Can I use Dulie now?",
    "Yes. Try the working Telegram prototype to capture events, tasks, reminders and notes, edit or reschedule saved items, use recurring events and undo, and connect Google Calendar and Tasks. Adaptive planning is the next development phase, not a feature of this preview.",
  ],
  [
    "Does Dulie already plan my entire week automatically?",
    "No. The current prototype helps you manage plans through conversation. Breaking down goals, scheduling work sessions and adapting the week to your progress are in development.",
  ],
  [
    "How would Dulie know how long something takes?",
    "The proposed planner would start with rough estimates and your preferences, then refine estimates using progress you confirm. You could correct those estimates. Time on a calendar would not count as proof of completion.",
  ],
  [
    "What if I don’t respond to a progress check?",
    "Progress would remain unknown, not automatically marked done. The planned experience would let you update it later and choose how often to receive check-ins.",
  ],
  [
    "Would it move my meetings?",
    "The proposed planner would respect fixed commitments and the boundaries you set. Flexible work sessions would be managed according to your automation settings, with meaningful changes explained.",
  ],
  [
    "What if there isn’t enough time?",
    "Dulie would explain the shortfall and ask you to choose a trade-off. The proposed planner would not silently move your deadline or use time you have protected.",
  ],
  [
    "Is this only for students?",
    "No. Students are an initial testing audience, but the direction is broader: work, applications, personal projects and everyday commitments. CanvasLink is a separate product and a possible future input, not a requirement.",
  ],
];

function PlannerPreview() {
  const [stage, setStage] = useState("initial");
  const suggested = stage === "suggested";
  const applied = stage === "applied";
  return (
    <div className="planner-demo">
      <div className="planner-toolbar">
        <span className="status status--outline">Proposed MVP experience</span>
        <span>LOCAL DEMO · NO CALENDAR CONNECTED</span>
      </div>
      <div className="planner-layout">
        <div className="planner-conversation">
          <div className="planner-identity">
            <Mark size={30} />
            <strong>A plan, in conversation</strong>
          </div>
          <div className="preview-message preview-message--user">
            Finish my portfolio by Friday. Keep evenings free.
          </div>
          <div className="preview-message">
            Here’s a daytime plan to review. Choose your projects, write their
            descriptions, then review and publish.
          </div>
          {stage !== "initial" && (
            <>
              <div className="preview-message preview-message--user">
                The descriptions need another hour.
              </div>
              <div className="preview-message">
                Thursday, 3–4pm is free. Add another writing session? Your
                Friday deadline and evenings stay unchanged.
              </div>
            </>
          )}
          <div className="preview-controls">
            {stage === "initial" && (
              <button className="button" onClick={() => setStage("suggested")}>
                Try “need another hour” <ArrowRight size={16} />
              </button>
            )}
            {suggested && (
              <>
                <button className="button" onClick={() => setStage("applied")}>
                  Add session in demo <Check size={16} />
                </button>
                <button
                  className="text-button"
                  onClick={() => setStage("initial")}
                >
                  Keep original plan
                </button>
              </>
            )}
            {applied && (
              <>
                <p className="demo-confirmation">
                  <Check size={16} /> Added to this demo only.
                </p>
                <button
                  className="text-button"
                  onClick={() => setStage("initial")}
                >
                  Reset demo ↺
                </button>
              </>
            )}
          </div>
        </div>
        <div className="week" aria-label="Illustrative portfolio plan">
          <div className="week-title">
            <div>
              <span className="eyebrow">ONE GOAL. ROOM FOR REAL LIFE.</span>
              <h3>Portfolio week</h3>
            </div>
            <span className="deadline">Due Friday</span>
          </div>
          <div className="week-grid">
            <div className="week-day">
              <h4>
                MON <span>01</span>
              </h4>
              <div className="calendar-slot slot--fixed">
                <small>09:00–10:00 · FIXED</small>Team meeting
              </div>
              <div className="calendar-slot">
                <small>10:00–11:00</small>Choose projects
              </div>
            </div>
            <div className="week-day">
              <h4>
                TUE <span>02</span>
              </h4>
              <div className="calendar-slot slot--writing">
                <small>10:00–12:00</small>Write descriptions
              </div>
            </div>
            <div className="week-day">
              <h4>
                WED <span>03</span>
              </h4>
              <div className="calendar-slot slot--fixed">
                <small>11:00–12:00 · FIXED</small>Appointment
              </div>
              <span className="open-time">Room to breathe</span>
            </div>
            <div className="week-day">
              <h4>
                THU <span>04</span>
              </h4>
              <div
                className={`calendar-slot slot--addition ${stage !== "initial" ? "is-visible" : ""}`}
              >
                <small>15:00–16:00</small>
                {applied ? "Write descriptions" : "Extra writing session"}
                <span className="slot-label">
                  {applied ? "✓ Added in demo" : "Proposed · your approval"}
                </span>
              </div>
              {stage === "initial" && (
                <span className="open-time">An open afternoon</span>
              )}
            </div>
            <div className="week-day">
              <h4>
                FRI <span>05</span>
              </h4>
              <div className="calendar-slot slot--finish">
                <small>10:00–11:00</small>Review & publish
              </div>
              <span className="deadline-marker">⚑ Portfolio due</span>
            </div>
          </div>
          <div className="protected-time">
            <span aria-hidden="true">☾</span>
            <strong>Evenings protected.</strong> Time that stays yours.
          </div>
          <p className="calendar-status" role="status">
            {applied
              ? "Extra writing session added for Thursday, 3–4pm. Friday’s deadline and all evenings stay unchanged."
              : suggested
                ? "Suggested: one extra writing session on Thursday, 3–4pm. Nothing added until you approve."
                : "Original plan: three daytime work sessions. Fixed commitments and evenings protected."}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FutureContent() {
  return (
    <div className="future-roadmap">
      {" "}
      <section className="direction section" id="next">
        <div className="container direction-grid">
          <div>
            <span className="status status--dark">IN DEVELOPMENT</span>
            <h2>
              When plans change,
              <br />
              <em>keeping up takes work.</em>
            </h2>
          </div>
          <div className="direction-copy">
            <p>
              A task takes longer than expected. A new deadline arrives.
              Something you need is still missing. Suddenly, you’re deciding
              what to move and rebuilding the week.
            </p>
            <p>
              We’re developing Dulie to help maintain that plan with you, using
              brief progress updates and the time you actually have.
            </p>
            <strong>Less effort keeping a realistic plan up to date.</strong>
          </div>
        </div>
      </section>
      <section className="how section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE PLANNED APPROACH</span>
              <h2>
                A plan that stays connected
                <br />
                <em>to your progress.</em>
              </h2>
            </div>
            <p>
              A proposed loop, not a one-off schedule.
              <br />
              You set the direction. The plan keeps up.
            </p>
          </div>
          <ol className="planning-steps">
            {[
              [
                "Tell Dulie what you want to accomplish",
                "Share a task, deadline or goal. Dulie would help clarify the outcome and the work involved.",
                "A clear starting point",
              ],
              [
                "Review a realistic plan",
                "Proposed work sessions would fit around your commitments, preferred hours and protected free time.",
                "Time you actually have",
              ],
              [
                "Update your progress",
                "Say ‘done’, ‘need another hour’, ‘didn’t start’ or ‘blocked’.",
                "A quick, honest check-in",
              ],
              [
                "Adjust what comes next",
                "Dulie would revise remaining sessions and explain meaningful changes. If the work cannot fit, it would show the trade-offs.",
                "A plan you can review",
              ],
            ].map(([title, copy, caption], i) => (
              <li key={title}>
                <span className="step-number">0{i + 1}</span>
                <span className="step-caption">{caption}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="preview section" id="preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PREVIEW OF THE PLANNED EXPERIENCE</span>
              <h2>
                An extra hour shouldn’t mean
                <br />
                <em>rebuilding your week.</em>
              </h2>
            </div>
            <p>
              See how one progress update could change the plan—not your entire
              day.
            </p>
          </div>
          <PlannerPreview />
        </div>
      </section>
      <section className="personal section">
        <div className="container personal-grid">
          <div>
            <span className="eyebrow">DESIGNED TO LEARN WITH YOU</span>
            <h2>
              Planning that becomes
              <br />
              <em>more personal.</em>
            </h2>
            <p className="section-lede">
              Over time, confirmed progress could help Dulie improve task
              estimates and suggest sessions that suit how you work.
            </p>
            <p className="control-note">
              You stay in control. Review changes, protect your free time and
              correct learned preferences.
            </p>
          </div>
          <dl className="learning-list">
            <div>
              <dt>Estimates meet experience</dt>
              <dd>
                Estimated versus reported effort could improve future duration
                estimates.
              </dd>
            </div>
            <div>
              <dt>Partial progress still counts</dt>
              <dd>
                A progress update would change the remaining work, not erase
                what you’ve done.
              </dd>
            </div>
            <div>
              <dt>Blocked is a different next step</dt>
              <dd>
                A blocker would change the next action—not just push the same
                task to tomorrow.
              </dd>
            </div>
            <div>
              <dt>Your corrections matter</dt>
              <dd>
                Preferences and corrections would guide future suggestions.
                Scheduled time alone would never prove completion.
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <aside className="canvaslink container">
        <span className="canvas-symbol" aria-hidden="true">
          ↗
        </span>
        <div>
          <span className="eyebrow">
            OPTIONAL CONNECTION · UNDER EXPLORATION
          </span>
          <h3>A starting point for students</h3>
          <p>
            We’re exploring a connection with CanvasLink so academic deadlines
            can feed into Dulie’s planning workflow, reducing manual entry.
            CanvasLink is a separate product; Dulie’s wider direction includes
            work, applications and personal projects too.
          </p>
        </div>
      </aside>
      <section className="faq section container" id="questions">
        <div>
          <span className="eyebrow">A FEW THINGS WORTH KNOWING</span>
          <h2>
            Today, next,
            <br />
            <em>and in between.</em>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">＋</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
