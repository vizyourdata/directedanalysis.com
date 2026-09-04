import { subscribe, SUBSCRIBE_URL } from "../content";

export default function Subscribe() {
  return (
    <section className="subscribe wrap" id="subscribe">
      <h2 className="section-h">{subscribe.heading}</h2>
      <p
        className="sub-frame"
        dangerouslySetInnerHTML={{ __html: subscribe.framing }}
      />
      <div className="tiers">
        {subscribe.tiers.map((t) => (
          <a
            className={`tier${t.feature ? " feature" : ""}`}
            key={t.name}
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener"
          >
            <p className="tier-name">{t.name}</p>
            <p className="tier-price">
              {t.price}
              {t.per ? <span className="per">{t.per}</span> : null}
            </p>
            <p className="tier-desc">{t.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
