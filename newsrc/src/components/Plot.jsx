import { useEffect, useRef, useState } from "react";
import { plotStates } from "../content";

const TICKS = [0, 25, 50, 75, 100];

// cumulative [start, end] in percent for each segment
function spans(segments) {
  let x = 0;
  return segments.map((s) => {
    const span = [x, x + s.pct];
    x += s.pct;
    return span;
  });
}

// ribbon between the old bar (top edge y=0) and the now bar (y=100),
// drawn in a 100x100 box that is stretched to the gap between the bars
function ribbonPath([a0, a1], [b0, b1]) {
  const c = 45; // curve tension
  return [
    `M${a0},0`,
    `L${a1},0`,
    `C${a1},${c} ${b1},${100 - c} ${b1},100`,
    `L${b0},100`,
    `C${b0},${100 - c} ${a0},${c} ${a0},0`,
    "Z",
  ].join(" ");
}

function Bar({ state, id }) {
  return (
    <div className="bar" role="img" aria-label={`${state.label}: ${state.segments.map((s) => `${s.label} ${s.pct}%`).join(", ")}. Value sits at ${state.needle}%.`}>
      {state.segments.map((seg, i) => (
        <div
          key={i}
          className={`seg ${seg.kind}`}
          style={{ width: `${seg.pct}%`, "--i": i }}
        >
          <span className="seg-label">{seg.label}</span>
        </div>
      ))}
      <span className="mark" style={{ left: `${state.needle}%` }} aria-hidden="true">
        <i className="cap">VALUE</i>
      </span>
      <span className="sr-only" id={`bar-${id}`}>{state.caption.replace(/<[^>]+>/g, "")}</span>
    </div>
  );
}

export default function Plot() {
  // reduced motion (or no IntersectionObserver): render the finished state
  const [play, setPlay] = useState(
    () =>
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window))
  );
  const shellRef = useRef(null);
  const { old, now } = plotStates;

  useEffect(() => {
    const el = shellRef.current;
    if (!el || play) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          setPlay(true);
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  const oldSpans = spans(old.segments);
  const nowSpans = spans(now.segments);

  return (
    <div className={`plot-shell${play ? " play" : ""}`} id="plot" ref={shellRef}>
      <p className="plot-eyebrow">THE ANALYST&rsquo;S WEEK</p>

      <div className="plot-grid">
        {/* old week */}
        <div className="row row-old">
          <div className="row-text">
            <span className="row-label">{old.label}</span>
            <p className="row-cap" dangerouslySetInnerHTML={{ __html: old.caption }} />
          </div>
          <Bar state={old} id="old" />
        </div>

        {/* ribbons: where each slice of the week went */}
        <div className="row row-ribbons" aria-hidden="true">
          <div className="row-text" />
          <svg className="ribbons" viewBox="0 0 100 100" preserveAspectRatio="none">
            {old.segments.map((seg, i) => (
              <path
                key={i}
                className={`ribbon ${seg.kind}`}
                d={ribbonPath(oldSpans[i], nowSpans[i])}
                style={{ "--i": i }}
              />
            ))}
            <line
              className="trace"
              x1={old.needle}
              y1="0"
              x2={now.needle}
              y2="100"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* the week now */}
        <div className="row row-now">
          <div className="row-text">
            <span className="row-label">{now.label}</span>
            <p className="row-cap" dangerouslySetInnerHTML={{ __html: now.caption }} />
          </div>
          <Bar state={now} id="now" />
        </div>

        <div className="row row-axis" aria-hidden="true">
          <div className="row-text" />
          <div className="axis">
            {TICKS.map((t) => (
              <span key={t} className="tick" style={{ left: `${t}%` }}>
                {t === 100 ? (
                  <>
                    100%<span className="tick-rest"> of the week</span>
                  </>
                ) : (
                  t
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="plot-note">Same job. The value moved.</p>
    </div>
  );
}
