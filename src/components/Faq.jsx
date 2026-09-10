import { Lock } from "./Icons.jsx";
import { faqs } from "../content.js";

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro" data-reveal="left">
          <span className="kicker">GOOD TO KNOW</span>
          <h2>
            Questions,
            <br />
            answered.
          </h2>
          <p>No jargon. Just the useful details before you start.</p>
        </div>
        <div className="faq__list" data-reveal="right">
          {faqs.map(({ question, answer }, index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>{question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="container privacy-note" id="privacy" data-reveal>
        <span className="privacy-note__icon">
          <Lock />
        </span>
        <div>
          <strong>A straightforward privacy note</strong>
          <p>
            Dulie stores your Telegram account identifier, recent conversation
            context, and the items you ask it to remember. Google Calendar and
            Tasks access is optional and is used only after you connect it.
          </p>
        </div>
      </div>
    </section>
  );
}
