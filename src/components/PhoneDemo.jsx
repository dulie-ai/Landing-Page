import { Calendar, Telegram } from "./Icons.jsx";

export function PhoneDemo() {
  return (
    <div
      className="demo-wrap"
      role="img"
      aria-label="Telegram conversation with Dulie"
    >
      <div className="demo-glow" data-parallax="-0.04" />
      <div className="phone" data-parallax="-0.018" aria-hidden="true">
        <div className="phone__topbar">
          <span className="phone__time">9:41</span>
          <span className="phone__island" />
          <span className="phone__signal">● ●●</span>
        </div>

        <div className="chat-head">
          <span className="chat-head__back">‹</span>
          <div className="chat-avatar">
            <Telegram size={19} />
          </div>
          <div className="chat-head__identity">
            <strong>Dulie bot</strong>
            <span>bot</span>
          </div>
          <span className="chat-more">•••</span>
        </div>

        <div className="chat-body">
          <p className="chat-date">TODAY</p>

          <div className="chat-flexibility">
            <p className="chat-flexibility__label">
              <span /> Same event, three ways
            </p>
            <div className="phrase-list">
              <div className="bubble bubble--outgoing phrase-example">
                <span className="bubble__text">event gym tmr 7-8</span>
                <span className="bubble__meta">9:38 ✓✓</span>
              </div>
              <span className="phrase-or">or</span>
              <div className="bubble bubble--outgoing phrase-example">
                <span className="bubble__text">gym tmr 7 to 8 — event</span>
                <span className="bubble__meta">9:39 ✓✓</span>
              </div>
              <span className="phrase-or">or</span>
              <div className="bubble bubble--outgoing phrase-example">
                <span className="bubble__text">
                  add an event for gym tomorrow, 7pm for 1hr
                </span>
                <span className="bubble__meta">9:40 ✓✓</span>
              </div>
            </div>
          </div>

          <div className="same-result">
            <span /> same result <span />
          </div>

          <div className="bubble bubble--incoming">
            <span className="bubble__text">
              Got it — <strong>Gym</strong>, tomorrow 7–8 PM.
            </span>
            <span className="bubble__meta">9:40</span>
          </div>
          <div className="event-card">
            <div className="event-card__date">
              <b>11</b>
              <span>SEP</span>
            </div>
            <div className="event-card__copy">
              <strong>Gym</strong>
              <span>Tomorrow · 7:00–8:00 PM</span>
              <small>
                <Calendar size={13} /> Ready for your calendar
              </small>
            </div>
            <span className="event-card__check">✓</span>
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
        <span className="status-dot" /> Same plan. Any phrasing.
      </div>
      <div className="floating-note floating-note--bottom">
        <Calendar size={17} /> Calendar-ready
      </div>
    </div>
  );
}
