import { useEffect, useRef, useState } from "react";
import { plotStates } from "../content";

const TICKS = [0, 25, 50, 75, 100];

export default function Plot() {
  const [state, setState] = useState("old");
  const shellRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setState("now");
      return;
    }
    if (!("IntersectionObserver" in window) || !shellRef.current) {
      setState("now");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect();
            setTimeout(() => setState("now"), 900);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(shellRef.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const s = plotStates[state];

  return (
    <div className="plot-shell" id="plot" ref={shellRef}>
      <p className="plot-eyebrow">THE ANALYST&rsquo;S WEEK</p>
      <p
        className="plot-caption"
        dangerouslySetInnerHTML={{ __html: s.caption }}
      />

      {/* the needle is anchored to the bar, not the shell, so it never
          drifts into the caption when the caption wraps on small screens */}
      <div className="bar-stage">
        <div
          className="bar"
          role="img"
          aria-label="A bar showing how the analyst's week splits between assembly and thinking, in the old world versus now."
        >
          {s.segments.map((seg, i) => (
            <div
              key={i}
              className={`seg ${seg.kind}`}
              style={{ width: `${seg.pct}%` }}
            >
              <span
                className="seg-label"
                style={{ opacity: seg.pct < 10 ? 0 : 0.92 }}
              >
                {seg.label}
              </span>
            </div>
          ))}
        </div>

        <div className="needle-wrap">
          <div className="needle" style={{ left: `${s.needle}%` }}>
            <span className="cap">VALUE</span>
          </div>
        </div>
      </div>

      <div className="axis" aria-hidden="true">
        {TICKS.map((t) => (
          <span key={t} className="tick" style={{ left: `${t}%` }}>
            {t === 100 ? "100% of the week" : t}
          </span>
        ))}
      </div>

      <div className="plot-controls">
        <button
          className="toggle"
          aria-pressed={state === "old"}
          onClick={() => setState("old")}
        >
          The old week
        </button>
        <button
          className="toggle"
          aria-pressed={state === "now"}
          onClick={() => setState("now")}
        >
          The week now
        </button>
        <span className="plot-note">Same job. The value moved.</span>
      </div>
    </div>
  );
}
