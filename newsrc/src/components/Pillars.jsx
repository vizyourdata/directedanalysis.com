import { pillars } from "../content";

function Marker() {
  return (
    <svg className="pillar-mk" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 1 L10 8 L8 15 L6 8 Z" fill="#A9772A" />
    </svg>
  );
}

export default function Pillars() {
  return (
    <section className="pillars wrap">
      <h2 className="section-h">{pillars.heading}</h2>
      {pillars.items.map((text, i) => (
        <div className="pillar" key={i}>
          <Marker />
          <p className="pillar-t">{text}</p>
        </div>
      ))}
    </section>
  );
}
