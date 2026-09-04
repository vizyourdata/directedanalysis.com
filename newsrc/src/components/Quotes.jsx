import { quotes } from "../content";

export default function Quotes() {
  return (
    <section className="quotes wrap">
      <div className="qgrid">
        {quotes.map((q, i) => (
          <div
            key={i}
            className={`q${q.moat ? " moat" : ""}${q.wide ? " wide" : ""}`}
          >
            <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: q.html }} />
          </div>
        ))}
      </div>
    </section>
  );
}
