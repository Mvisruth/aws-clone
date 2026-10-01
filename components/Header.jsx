export default function Header() {
  return (
    <header className="page-header">
      {/* Top right utility links */}
      <div className="top-right-nav">
        <a href="#feedback" className="header-link">
          Provide feedback
        </a>
        <div className="dropdown-link-wrapper">
          <button type="button" className="header-link dropdown-toggle">
            Multi-session disabled <span className="dropdown-caret">▼</span>
          </button>
        </div>
        <div className="dropdown-link-wrapper">
          <button type="button" className="header-link dropdown-toggle">
            English <span className="dropdown-caret">▼</span>
          </button>
        </div>
      </div>

      {/* Centered AWS Logo */}
      <div className="header-logo-container">
        <a href="#aws-home" className="logo-link" aria-label="Amazon Web Services">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/aws-logo.png"
            alt="Amazon Web Services"
            className="aws-header-logo"
            width={84}
            height={51}
          />
        </a>
      </div>
    </header>
  );
}
