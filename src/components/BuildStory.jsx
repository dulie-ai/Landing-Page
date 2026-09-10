import { ArrowRight, Check } from "./Icons.jsx";
import { siteConfig } from "../config.js";

const stack = [
  "Telegram Bot API",
  "Go",
  "PostgreSQL",
  "OpenAI",
  "Google Calendar + Tasks",
];

export function BuildStory() {
  return (
    <section className="build-story section" id="build">
      <div className="container build-story__grid">
        <div className="build-story__copy" data-reveal="left">
          <span className="kicker kicker--light">UNDER THE HOOD</span>
          <h2>
            Simple outside.
            <br />
            <em>Serious inside.</em>
          </h2>
          <p>
            Dulie is a full-stack system, not a scripted demo. A Go service
            orchestrates language understanding, persistent storage, reminders,
            recurring schedules, OAuth, and Google Calendar and Tasks sync
            behind one quiet Telegram conversation.
          </p>
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            Explore the source <ArrowRight size={17} />
          </a>
        </div>

        <div
          className="architecture"
          data-reveal="right"
          aria-label="Dulie system architecture"
        >
          <div className="architecture__label">A MESSAGE THROUGH DULIE</div>
          <div className="architecture__node architecture__node--input">
            <span>01</span>
            <strong>Telegram message</strong>
            <small>Natural language in</small>
          </div>
          <div className="architecture__route">
            <i />
            <span>HTTPS</span>
            <i />
          </div>
          <div className="architecture__core">
            <div>
              <span>02</span>
              <strong>Dulie API</strong>
              <small>Go orchestration</small>
            </div>
            <div className="architecture__core-grid">
              <span>
                <Check size={13} /> Understand
              </span>
              <span>
                <Check size={13} /> Validate
              </span>
              <span>
                <Check size={13} /> Remember
              </span>
              <span>
                <Check size={13} /> Respond
              </span>
            </div>
          </div>
          <div className="architecture__branches">
            <div>
              <strong>PostgreSQL</strong>
              <small>Plans + context</small>
            </div>
            <div>
              <strong>Google Workspace</strong>
              <small>Calendar + Tasks</small>
            </div>
          </div>
        </div>
      </div>
      <div className="container stack-row" data-reveal>
        <span>BUILT WITH</span>
        {stack.map((item) => (
          <strong key={item}>{item}</strong>
        ))}
      </div>
    </section>
  );
}
