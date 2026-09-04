import { thesis } from "../content";

export default function Thesis() {
  return (
    <section className="thesis wrap">
      <p>
        <span className="lead">{thesis.label}</span>
        {thesis.text}
      </p>
    </section>
  );
}
