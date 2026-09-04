import { footer } from "../content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <p className="who">
          {footer.who} <span>&middot; {footer.role}</span>
        </p>
        <p className="tag">{footer.tag}</p>
      </div>
    </footer>
  );
}
