import { Link } from 'react-router-dom';

export function RequestPage() {
  return (
    <main id="main" className="wrap">
      <div className="pagehead">
        <Link className="back" to="/">← Back to home</Link>
        <p className="eyebrow">REQUESTS &amp; CONTACT</p>
        <h1>Requests &amp; contact</h1>
        <p className="lede">
          Your primary contact is a Partner Lead or Brand Lead in the committee’s Partner Pillar. Explore our dual-path intake system below.
        </p>
      </div>

      <div className="contact-grid">
        {/* Option 1: Jira */}
        <section className="contact-option primary">
          <span className="small-label">NEW &amp; AD-HOC REQUESTS</span>
          <h2>Start with Jira.</h2>
          <p>
            For teams without an assigned committee lead, including lodge officers, section leadership, and general committee requests.
          </p>
          <a
            className="button"
            href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
            target="_blank"
            rel="noreferrer"
            style={{ width: '100%', marginBottom: '12px' }}
          >
            Submit an OA Communications Request ↗
          </a>
          <a
            className="text-link"
            href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/332"
            target="_blank"
            rel="noreferrer"
          >
            Submit an OA Volunteer Board Revision ↗
          </a>
          <small>Sign in with your official ArrowID to submit, monitor, and track tickets.</small>
        </section>

        {/* Option 2: Partner Lead */}
        <section className="contact-option">
          <span className="small-label">ESTABLISHED PARTNERS</span>
          <h2>Contact your assigned lead.</h2>
          <p>
            For national subcommittees and regional directors that already have an active working relationship with a designated strategist.
          </p>
          <div className="contact-line">
            <span>Partner Pillar Leadership</span>
            <a href="mailto:comms-partner@oa-scouting.org">comms-partner@oa-scouting.org</a>
          </div>
          <div className="contact-line">
            <span>Committee Leadership (Key 4)</span>
            <a href="mailto:communications@oa-scouting.org">communications@oa-scouting.org</a>
          </div>
          <small>
            For requests outside regular project syncs or when your assigned lead is unavailable.
          </small>
        </section>
      </div>

      <div className="two-links">
        <Link to="/timelines/">
          <strong>Project timelines →</strong>
          <span>Content development, web updates, and 3-week review cycles</span>
        </Link>
        <Link to="/standards/">
          <strong>Review the standards →</strong>
          <span>Youth protection mandates, AI guidelines, and brand compliance</span>
        </Link>
      </div>
    </main>
  );
}
