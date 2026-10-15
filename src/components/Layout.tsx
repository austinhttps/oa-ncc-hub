import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="utility">
        <div className="wrap">
          <span>ORDER OF THE ARROW <span className="utility-divider">/</span> SCOUTING AMERICA</span>
          <a href="https://oa-scouting.org/" target="_blank" rel="noreferrer">Visit the OA website</a>
        </div>
      </div>
      <header className="wrap header home-header">
        <Link className="brand" to="/">
          <img
            className="committee-logo"
            src="/assets/committee-logo.jpg"
            width="56"
            height="56"
            alt="National Communications Committee logo"
          />
          <span>
            <strong>Communications</strong>
            <small>National Communications Committee</small>
          </span>
        </Link>
        <div className="header-nav-group">
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/services/">Services</NavLink>
            <NavLink to="/timelines/">Timelines</NavLink>
            <NavLink to="/standards/">Standards</NavLink>
            <NavLink to="/request/">Contact</NavLink>
          </nav>
          <a
            className="button header-cta"
            href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
            target="_blank"
            rel="noreferrer"
          >
            Submit Request
          </a>
        </div>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/services/">Services</Link>
            <Link to="/timelines/">Timelines</Link>
            <Link to="/standards/">Standards</Link>
            <Link to="/request/">Contact</Link>
            <a
              href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 'bold', color: 'var(--red)', marginTop: '4px' }}
            >
              Submit Request ↗
            </a>
          </nav>
        </details>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <strong>Order of the Arrow</strong>
          <span>National Communications Committee</span>
        </div>
        <div className="foot-links">
          <a
            href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
            target="_blank"
            rel="noreferrer"
          >
            Communications request
          </a>
          <a
            href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/332"
            target="_blank"
            rel="noreferrer"
          >
            Volunteer Board revision
          </a>
          <a href="mailto:comms-partner@oa-scouting.org">
            Partner Desk
          </a>
        </div>
        <small>© {new Date().getFullYear()} Order of the Arrow, Scouting America</small>
      </div>
    </footer>
  );
}
