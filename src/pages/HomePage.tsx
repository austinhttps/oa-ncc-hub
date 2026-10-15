import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <main id="main" className="wrap home-balanced">
      <section className="intro">
        <div>
          <p className="eyebrow">NATIONAL COMMUNICATIONS COMMITTEE</p>
          <h1>National Communications<br />Committee</h1>
          <p className="lede">
            The committee shares the story and spirit of the OA through official content, amplifying national subcommittees and inspiring Arrowmen.
          </p>
          <figure className="story-photo">
            <img
              src="/assets/oa-campfire.svg"
              width="700"
              height="400"
              alt="Order of the Arrow members gathered around a campfire"
            />
            <figcaption>
              Photo: <a href="https://scoutlife.org/about-scouts/182263/what-is-the-order-of-the-arrow/" target="_blank" rel="noreferrer">Scout Life</a>
            </figcaption>
          </figure>
          <Link className="text-link" to="/about/">
            About the committee &amp; its goals
          </Link>
        </div>

        <aside className="request-panel">
          <span className="small-label">COMMUNICATIONS REQUESTS</span>
          <h2>Requests &amp; contact</h2>
          <p>Contact your Partner Lead or Brand Lead, or submit ad-hoc requests via our intake portal.</p>
          <Link className="button white" to="/request/">
            Contact us
          </Link>
          <a className="panel-link" href="mailto:comms-partner@oa-scouting.org">
            Email the Partner Pillar ↗
          </a>
        </aside>
      </section>

      <section className="find-info" aria-labelledby="find-title">
        <h2 id="find-title">Find information</h2>
        <div className="find-grid">
          <Link to="/services/">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h7a3 3 0 0 1 3 3v12a4 4 0 0 0-3-2H4zM14 8a3 3 0 0 1 3-3h5v13h-5a4 4 0 0 0-3 2" />
            </svg>
            <strong>What we do</strong>
            <span>Written content, digital &amp; social, website, design, and analytics</span>
          </Link>

          <Link to="/timelines/">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2" />
            </svg>
            <strong>Timelines</strong>
            <span>Content production, website updates, and special projects</span>
          </Link>

          <Link to="/standards/">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6" />
            </svg>
            <strong>Policies &amp; standards</strong>
            <span>AI use, photo safety, content approval, scheduling, and youth privacy</span>
          </Link>

          <Link to="/request/">
            <svg className="nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 6 9 7 9-7" />
            </svg>
            <strong>Contact &amp; requests</strong>
            <span>Assigned leads, communications requests, and Volunteer Board revisions</span>
          </Link>
        </div>
      </section>

      <section className="timing-summary" aria-labelledby="timing-title">
        <div>
          <p className="eyebrow">TIMELINES</p>
          <h2 id="timing-title">Project timelines</h2>
          <Link className="text-link" to="/timelines/">
            Full timelines
          </Link>
        </div>
        <div className="timing-items">
          <div>
            <strong>3 months ahead</strong>
            <span>Content &amp; campaigns</span>
          </div>
          <div>
            <strong>Up to 3 weeks</strong>
            <span>Review of submitted content</span>
          </div>
          <div>
            <strong>48 hours–1 week</strong>
            <span>Simple website updates</span>
          </div>
        </div>
      </section>
    </main>
  );
}
