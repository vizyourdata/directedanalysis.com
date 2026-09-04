import { hero } from "../content";
import Plot from "./Plot";

export default function Hero() {
  return (
    <section className="hero wrap">
      <h1>
        {hero.line1}
        <br />
        <span className="two">{hero.line2}</span>
      </h1>
      <p className="about">{hero.about}</p>
      <Plot />
    </section>
  );
}
