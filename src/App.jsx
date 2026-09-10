import { useEffect, useState } from "react";
import { Brand, Mark } from "./components/Brand.jsx";
import { BuildStory } from "./components/BuildStory.jsx";
import { Faq } from "./components/Faq.jsx";
import { FeatureCard } from "./components/FeatureCard.jsx";
import { PageEffects } from "./components/PageEffects.jsx";
import { PhoneDemo } from "./components/PhoneDemo.jsx";
import { ProductShowcase } from "./components/ProductShowcase.jsx";
import { siteConfig } from "./config.js";
import { features } from "./content.js";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Calendar,
  Check,
  Close,
  Menu,
  Message,
  Spark,
} from "./components/Icons.jsx";

const featureIcons = {
  bell: <Bell />,
  calendar: <Calendar />,
  spark: <Spark />,
};

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

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.toggle("menu-open", open);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`nav-shell ${scrolled ? "nav-shell--scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className={`nav__links ${open ? "nav__links--open" : ""}`}>
          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#product" onClick={() => setOpen(false)}>
            See it in action
          </a>
          <a href="#build" onClick={() => setOpen(false)}>
            Under the hood
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
          <div className="hero__orb hero__orb--one" data-parallax="0.08" />
          <div className="hero__orb hero__orb--two" data-parallax="-0.05" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="eyebrow">
                <span /> Your memory, now on Telegram
              </div>
              <h1>
                Make plans.
                <span>Keep them.</span>
              </h1>
              <p className="hero__lede">
                Turn a quick message into an event, reminder, to-do, or note.
                Dulie understands the details, remembers them, and follows up
                when it matters.
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
                <div className="proof-icon" aria-hidden="true">
                  <Check size={16} />
                </div>
                <p>
                  <strong>Four tools. One conversation.</strong>
                  <span>Events · Reminders · To-dos · Notes</span>
                </p>
              </div>
            </div>
            <PhoneDemo />
          </div>
          <div className="hero__marquee" aria-hidden="true">
            <div>
              {[0, 1].map((group) => (
                <span className="marquee__group" key={group}>
                  <b>TEXT IT</b>
                  <i>✦</i>
                  <b>PLAN IT</b>
                  <i>✦</i>
                  <b>REMEMBER IT</b>
                  <i>✦</i>
                  <b>ASK IT</b>
                  <i>✦</i>
                  <b>UNDO IT</b>
                  <i>✦</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="steps section" id="how-it-works">
          <div className="container">
            <div className="section-heading" data-reveal="left">
              <div>
                <span className="kicker">HOW IT WORKS</span>
                <h2>
                  Planning that feels
                  <br />
                  like a conversation.
                </h2>
              </div>
              <p>
                Skip the forms and tiny date pickers. Tell Dulie what is
                happening the same way you would tell a friend.
              </p>
            </div>

            <div className="step-flow" data-reveal="up">
              <div className="step" style={{ "--delay": "0ms" }}>
                <span className="step__number">01</span>
                <span className="step__icon">
                  <Message />
                </span>
                <h3>Say it naturally</h3>
                <p>
                  Send what is on your mind. “Dentist Tuesday at three” is
                  enough to get started.
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
                  Dulie organizes the details, offers a quick type picker when
                  needed, and asks if anything important is missing.
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
                  Review it in Telegram, receive reminders there, or sync events
                  to Google Calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />

        <section className="features section" id="features">
          <div className="container">
            <div data-reveal>
              <span className="kicker kicker--light">
                A SMALL BOT WITH A BIG MEMORY
              </span>
            </div>
            <div className="features__title-row" data-reveal="left">
              <h2>
                Less organizing.
                <br />
                <em>More living.</em>
              </h2>
              <p>Thoughtful tools that quietly take care of the details.</p>
            </div>
            <div className="feature-grid" data-reveal="up">
              {features.map(({ number, icon, title, description, tone }) => (
                <FeatureCard
                  number={number}
                  icon={featureIcons[icon]}
                  title={title}
                  tone={tone}
                  key={title}
                >
                  {description}
                </FeatureCard>
              ))}
            </div>
          </div>
        </section>

        <BuildStory />

        <section className="manifesto section section-grid" id="about">
          <div className="manifesto__orb" data-parallax="0.07" />
          <div className="container manifesto__inner" data-reveal="scale">
            <span className="kicker">THE IDEA</span>
            <blockquote>
              Your to-do list shouldn’t feel like <span>another task.</span>
            </blockquote>
            <p>
              Dulie lives where your conversations already happen. There is no
              new system to maintain—just a calmer way to capture what matters
              before it slips away.
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

        <Faq />
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
            <p>Send the message. Dulie will take it from there.</p>
            <a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer">
              Open Telegram <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="container footer__bottom">
          <Brand />
          <span>© {new Date().getFullYear()} Dulie</span>
          <div>
            <a href="#privacy">Privacy</a>
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
