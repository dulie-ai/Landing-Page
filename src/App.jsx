import { useEffect, useState } from "react";
import { Brand, Mark } from "./components/Brand.jsx";
import { BuildStory } from "./components/BuildStory.jsx";
import { CommandDeck } from "./components/CommandDeck.jsx";
import { CoreBenefits } from "./components/CoreBenefits.jsx";
import { PageEffects } from "./components/PageEffects.jsx";
import { PhoneDemo } from "./components/PhoneDemo.jsx";
import { ProductShowcase } from "./components/ProductShowcase.jsx";
import { siteConfig } from "./config.js";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Close,
  Menu,
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
          <a href="#commands" onClick={() => setOpen(false)}>
            Quick guide
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
                Your plans, tasks, reminders, and stray thoughts—all in one
                Telegram chat. Send a message. Get on with your day.
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
                  <strong>Already on Telegram? You’re ready.</strong>
                  <span>No new app. Google connection optional.</span>
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
                  <b>REPEAT IT</b>
                  <i>✦</i>
                  <b>CHANGE IT</b>
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

        <CoreBenefits />

        <ProductShowcase />

        <CommandDeck />

        <BuildStory />
      </main>

      <footer>
        <div className="container editorial-privacy" id="privacy">
          <strong>Your data, in plain language.</strong>
          <p>
            Dulie stores your Telegram identifier, conversation context, and
            saved items. Messages are processed with OpenAI to understand
            requests. Google access is optional and used after you connect.
          </p>
        </div>
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
