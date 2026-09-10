export function ProductShowcase() {
  return (
    <section className="showcase section" id="product">
      <div className="container">
        <div className="showcase__heading" data-reveal="left">
          <div>
            <span className="kicker">SAY IT YOUR WAY</span>
            <h2>Your words. Same understanding.</h2>
          </div>
          <p>
            Use shorthand, change the order, or write a full sentence. Missing
            something? Dulie asks a follow-up or offers a type picker.
          </p>
        </div>

        <div className="phrase-proof" data-reveal="up">
          <div className="phrase-proof__intro">
            <span>ONE PLAN · YOUR WORDS</span>
            <strong>Write it however it comes to mind.</strong>
            <p>
              Short, reordered, or fully written out—Dulie keeps the meaning.
            </p>
          </div>
          <div
            className="phrase-proof__examples"
            aria-label="Three ways to describe the same event"
          >
            <code>
              <i>01</i> event gym tmr 7-8
            </code>
            <code>
              <i>02</i> gym tmr 7 to 8pm — event
            </code>
            <code>
              <i>03</i> add an event for gym tomorrow, 7pm for 1hr
            </code>
          </div>
          <div className="phrase-proof__result">
            <span>ALL BECOME</span>
            <strong>Gym</strong>
            <p>Tomorrow · 7–8 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
