import { useEffect, useRef, useState } from "react";
import { commandGroups } from "../content.js";
import { Check, Copy } from "./Icons.jsx";

export function CommandDeck() {
  const [activeId, setActiveId] = useState(commandGroups[0].id);
  const [copied, setCopied] = useState("");
  const resetTimer = useRef();
  const active =
    commandGroups.find(({ id }) => id === activeId) ?? commandGroups[0];

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyCommand = async (command) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(command);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(""), 1600);
    } catch {
      setCopied("");
    }
  };

  return (
    <section className="commands section" id="commands">
      <div className="container">
        <div className="commands__heading" data-reveal="left">
          <div>
            <span className="kicker kicker--light">KEEP THIS HANDY</span>
            <h2>
              Try a message.
              <br />
              <em>Make it yours.</em>
            </h2>
          </div>
          <p>
            A few starting points for the things you’ll do most. Choose a
            category and copy an example into Telegram.
          </p>
        </div>

        <div className="command-console" data-reveal="scale">
          <div className="command-console__bar">
            <span />
            <span />
            <span />
            <strong>DULIE QUICK GUIDE</strong>
            <small>tap any example to copy</small>
          </div>
          <div
            className="command-console__tabs"
            role="tablist"
            aria-label="Command categories"
          >
            {commandGroups.map((group) => (
              <button
                type="button"
                role="tab"
                id={`command-tab-${group.id}`}
                aria-selected={group.id === active.id}
                aria-controls="command-panel"
                className={group.id === active.id ? "is-active" : ""}
                key={group.id}
                onClick={() => setActiveId(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div
            className="command-console__panel"
            id="command-panel"
            role="tabpanel"
            aria-labelledby={`command-tab-${active.id}`}
            key={active.id}
          >
            <div className="command-console__intro">
              <span>{active.eyebrow}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
            <div className="command-list">
              {active.commands.map(({ command, result }) => (
                <button
                  type="button"
                  key={command}
                  onClick={() => copyCommand(command)}
                >
                  <code>
                    <i>›</i> {command}
                  </code>
                  <span>{result}</span>
                  {copied === command ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              ))}
            </div>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? `${copied} copied` : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
