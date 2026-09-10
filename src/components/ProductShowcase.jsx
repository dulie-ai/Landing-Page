import { useState } from "react";
import { useCases } from "../content.js";
import { Calendar, Check, Message, Undo } from "./Icons.jsx";

export function ProductShowcase() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const active = useCases.find(({ id }) => id === activeId) ?? useCases[0];

  return (
    <section className="showcase section" id="product">
      <div className="container">
        <div className="showcase__heading" data-reveal>
          <div>
            <span className="kicker">ONE CHAT, FOUR WAYS TO REMEMBER</span>
            <h2>Whatever it is, just say it.</h2>
          </div>
          <p>
            Plans don’t always look the same. Dulie extracts the useful details
            and keeps each thought in the right shape.
          </p>
        </div>

        <div className="showcase__stage" data-reveal>
          <div
            className="showcase__tabs"
            role="tablist"
            aria-label="Dulie examples"
          >
            {useCases.map((item) => (
              <button
                className={item.id === active.id ? "is-active" : ""}
                type="button"
                role="tab"
                id={`use-case-${item.id}`}
                aria-selected={item.id === active.id}
                aria-controls="use-case-panel"
                key={item.id}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className="showcase__conversation"
            id="use-case-panel"
            role="tabpanel"
            aria-labelledby={`use-case-${active.id}`}
            aria-live="polite"
          >
            <div className="showcase__message" key={`${active.id}-message`}>
              <span>You</span>
              <p>{active.prompt}</p>
            </div>
            <div className="showcase__connector" aria-hidden="true">
              <span>
                <Message size={15} />
              </span>
              <i />
              <span>
                <Check size={15} />
              </span>
            </div>
            <div className="showcase__result" key={`${active.id}-result`}>
              <div className="showcase__result-icon">
                <Calendar />
              </div>
              <div>
                <span>DULIE ORGANIZED IT</span>
                <h3>{active.title}</h3>
                <p>{active.detail}</p>
              </div>
              <small>
                <Check size={13} /> {active.response}
              </small>
            </div>
          </div>
        </div>

        <div className="micro-features" data-reveal>
          <article>
            <strong>Ask what’s ahead</strong>
            <p>“What do I have next week?”</p>
          </article>
          <article>
            <Undo />
            <strong>Mistake? Undo it.</strong>
            <p>Reverse a create or delete for ten minutes.</p>
          </article>
          <article>
            <strong>Made for your timezone</strong>
            <p>Set it using your city or an IANA timezone.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
