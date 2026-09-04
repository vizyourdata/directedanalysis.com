import { wordmark } from "../content";

export default function Header() {
  return (
    <header>
      <div className="wrap topbar">
        <a className="wordmark" href="#top">
          <svg className="bearing" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="14.5" stroke="#16202B" strokeWidth="1.5" />
            <path d="M16 4 L20 16 L16 28 L12 16 Z" fill="#A9772A" />
            <circle cx="16" cy="16" r="1.6" fill="#16202B" />
          </svg>
          {wordmark}
        </a>
        <a className="nav-cta" href="#subscribe">
          Subscribe
        </a>
      </div>
    </header>
  );
}
