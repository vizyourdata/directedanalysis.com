import { beats } from "../content";

export default function Beats() {
  return (
    <section className="beats wrap">
      <h2 className="section-h">{beats.heading}</h2>
      {beats.items.map((text, i) => (
        <div className="beat" key={i}>
          <div className="beat-n">{i + 1}</div>
          <p className="beat-t">{text}</p>
        </div>
      ))}
    </section>
  );
}
