import { Calendar } from "./Icons.jsx";
import { Mark } from "./Brand.jsx";

export function PhoneDemo() {
  return (
    <div
      className="demo-wrap"
      role="img"
      aria-label="Telegram conversation with Dulie"
    >
      <div className="demo-glow" data-parallax="-0.04" />
      <div className="phone-orbit" aria-hidden="true" />
      <span className="phone-caption" aria-hidden="true">
        A SMALL CONVERSATION. A LIGHTER DAY.
      </span>
      <div className="phone" data-parallax="-0.018" aria-hidden="true">
        <div className="phone__topbar">
          <span className="phone__time">9:41</span>
          <span className="phone__island" />
          <span className="phone__signal">● ●●</span>
        </div>

        <div className="chat-head">
          <span className="chat-head__back">‹</span>
          <div className="chat-avatar">
            <Mark size={38} />
          </div>
          <div className="chat-head__identity">
            <strong>Dulie bot</strong>
            <span>bot</span>
          </div>
          <span className="chat-more">•••</span>
        </div>

        <div className="chat-body">
          <p className="chat-date">TODAY</p>

          <div className="chat-thread">
            <div className="chat-exchange">
              <div className="bubble bubble--outgoing">
                <span className="bubble__text">event gym tmr 7-8pm</span>
                <span className="bubble__meta">9:37 ✓✓</span>
              </div>
              <div className="bubble bubble--incoming">
                <span className="bubble__text">
                  <span className="chat-confirm">✓ Event saved</span>
                  <strong>Gym</strong>
                  <br />
                  Tomorrow · 7–8 PM
                </span>
                <span className="bubble__meta">9:37</span>
              </div>
            </div>

            <div className="chat-exchange">
              <div className="bubble bubble--outgoing">
                <span className="bubble__text">task buy milk</span>
                <span className="bubble__meta">9:38 ✓✓</span>
              </div>
              <div className="bubble bubble--incoming">
                <span className="bubble__text">
                  Task saved — <strong>Buy milk</strong>.
                </span>
                <span className="bubble__meta">9:38</span>
              </div>
            </div>

            <div className="chat-exchange">
              <div className="bubble bubble--outgoing">
                <span className="bubble__text">delete event gym</span>
                <span className="bubble__meta">9:40 ✓✓</span>
              </div>
              <div className="bubble bubble--incoming">
                <span className="bubble__text">
                  Deleted <strong>Gym</strong>.
                </span>
                <span className="bubble__meta">9:40</span>
              </div>
              <div className="telegram-action">↩ Undo</div>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <span className="chat-input__attach">＋</span>
          <span>Message</span>
          <span className="chat-input__mic">●</span>
        </div>
        <span className="phone__home" />
      </div>

      <div className="floating-note floating-note--top">
        <span className="status-dot" /> @dulie_bot
      </div>
      <div className="floating-note floating-note--bottom">
        <Calendar size={22} />
        <div>
          <strong>One less thing to remember.</strong>
          <span>Saved in a few words.</span>
        </div>
      </div>
    </div>
  );
}
