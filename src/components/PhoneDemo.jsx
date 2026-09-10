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
          <div className="bubble bubble--outgoing reveal-one">
            Event: coffee with Maya next Friday, 10–11am
            <span>9:40 ✓✓</span>
          </div>
          <div className="bubble bubble--incoming reveal-two">
            <span className="bubble__eyebrow">
              <Telegram size={13} /> Dulie
            </span>
            I’ll keep that on your radar.
            <span>9:40</span>
          </div>
          <div className="event-card reveal-three">
            <div className="event-card__date">
              <b>18</b>
              <span>SEP</span>
            </div>
            <div className="event-card__copy">
              <strong>Coffee with Maya</strong>
              <span>Friday · 10:00 AM</span>
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
        <span className="status-dot" /> Natural language understood
      </div>
      <div className="floating-note floating-note--bottom">
        <Calendar size={17} /> Calendar-ready
      </div>
    </div>
  );
}
