import { essay } from "../content";

export default function EssayCard() {
  return (
    <section className="essay wrap">
      <div className="essay-card">
        <div>
          <p className="essay-k">{essay.eyebrow}</p>
          <h3 className="essay-title">{essay.title}</h3>
          <p className="essay-sub">{essay.sub}</p>
        </div>
        {/* essay pending voice pass, do not wire to live URL until cleared */}
        <a
          className="essay-cta"
          href={essay.href || "#"}
          aria-disabled={!essay.href}
          onClick={(e) => {
            if (!essay.href) e.preventDefault();
          }}
        >
          {essay.cta}
        </a>
      </div>
    </section>
  );
}
