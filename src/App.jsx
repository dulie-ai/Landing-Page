import { useEffect, useState } from "react";
import { Brand, Mark } from "./components/Brand.jsx";
import { FeatureCard } from "./components/FeatureCard.jsx";
import { PhoneDemo } from "./components/PhoneDemo.jsx";
import { PageEffects } from "./components/PageEffects.jsx";
import { siteConfig } from "./config.js";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Calendar,
  Close,
  Menu,
  Message,
  Spark,
} from "./components/Icons.jsx";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    const updateNav = () => setScrolled(window.scrollY > 24);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "nav-shell--scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className={`nav__links ${open ? "nav__links--open" : ""}`}>
          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a
            className="button button--small"
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Telegram <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PageEffects />
      <Nav />
      <main id="main-content">
        <section className="hero section-grid">
          <div className="hero__noise" />
          <div className="hero__orb hero__orb--one" />
          <div className="hero__orb hero__orb--two" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="eyebrow">
                <span /> Your day, finally in sync
              </div>
              <h1>
                Make plans.
                <span>Keep them.</span>
              </h1>
              <p className="hero__lede">
                Dulie turns everyday messages into organized plans, timely
                reminders, and calendar events—without another app to manage.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--primary"
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Dulie on Telegram <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#how-it-works">
                  See how it works <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero__proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>J</span>
                  <span>M</span>
                  <span>A</span>
                </div>
                <p>
                  <strong>Built for real life</strong>
                  <span>No forms. No friction. Just text.</span>
                </p>
              </div>
            </div>
            <PhoneDemo />
          </div>
          <div className="hero__marquee" aria-hidden="true">
            <div>
              <span>TEXT IT</span>
              <i>✦</i>
              <span>PLAN IT</span>
              <i>✦</i>
              <span>REMEMBER IT</span>
              <i>✦</i>
              <span>TEXT IT</span>
              <i>✦</i>
              <span>PLAN IT</span>
              <i>✦</i>
              <span>REMEMBER IT</span>
              <i>✦</i>
            </div>
          </div>
        </section>

        <section className="steps section" id="how-it-works">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <span className="kicker">HOW IT WORKS</span>
                <h2>
                  Planning that feels
                  <br />
                  like a conversation.
                </h2>
              </div>
              <p>
                Skip the menus, forms, and fiddly date pickers. Tell Dulie
                what’s happening the same way you’d tell a friend.
              </p>
            </div>

            <div className="step-flow" data-reveal>
              <div className="step" style={{ "--delay": "0ms" }}>
                <span className="step__number">01</span>
                <span className="step__icon">
                  <Message />
                </span>
                <h3>Say it naturally</h3>
                <p>
                  Send a quick message. Short, messy, and human is perfectly
                  fine.
                </p>
              </div>
              <span className="step-flow__line" />
              <div className="step" style={{ "--delay": "100ms" }}>
                <span className="step__number">02</span>
                <span className="step__icon">
                  <Spark />
                </span>
                <h3>Dulie gets it</h3>
                <p>
                  Dates, times, and intent are understood and shaped into a
                  clear plan.
                </p>
              </div>
              <span className="step-flow__line" />
              <div className="step" style={{ "--delay": "200ms" }}>
                <span className="step__number">03</span>
                <span className="step__icon">
                  <Bell />
                </span>
                <h3>Stay on track</h3>
                <p>
                  Get the reminder you need, right where the conversation
                  started.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features section" id="features">
          <div className="container">
            <div data-reveal>
              <span className="kicker kicker--light">
                A SMALL BOT WITH A BIG MEMORY
              </span>
            </div>
            <div className="features__title-row" data-reveal>
              <h2>
                Less organizing.
                <br />
                <em>More living.</em>
              </h2>
              <p>Thoughtful tools that quietly take care of the details.</p>
            </div>
            <div className="feature-grid" data-reveal>
              <FeatureCard
                number="01"
                icon={<Spark />}
                title="Understands you"
                tone="violet"
              >
                Speak naturally. Dulie finds the plan inside your message
                without rigid commands.
              </FeatureCard>
              <FeatureCard
                number="02"
                icon={<Bell />}
                title="Reminds you"
                tone="lime"
              >
                Timely nudges arrive in Telegram, so important moments don’t
                drift away.
              </FeatureCard>
              <FeatureCard
                number="03"
                icon={<Calendar />}
                title="Fits your calendar"
                tone="cream"
              >
                Turn conversations into structured events and keep your day
                connected.
              </FeatureCard>
            </div>
          </div>
        </section>

        <section className="manifesto section section-grid" id="about">
          <div className="manifesto__orb" />
          <div className="container manifesto__inner" data-reveal>
            <span className="kicker">THE IDEA</span>
            <blockquote>
              Your to-do list shouldn’t feel like <span>another task.</span>
            </blockquote>
            <p>
              Dulie lives where conversations already happen. No new habit to
              learn—just a calmer way to remember what matters.
            </p>
            <a
              className="button button--dark"
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer__top">
          <div className="footer__brand">
            <Mark size={48} />
            <h2>
              Ready when
              <br />
              you are.
            </h2>
          </div>
          <div className="footer__action">
            <p>Your plans are one message away.</p>
            <a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer">
              Open Telegram <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="container footer__bottom">
          <Brand />
          <span>© {new Date().getFullYear()} Dulie</span>
          <div>
            <span
              className="footer__placeholder"
              title="Add a privacy page before launch"
            >
              Privacy
            </span>
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
