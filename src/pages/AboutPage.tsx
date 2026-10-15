import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <main id="main" className="wrap">
      <div className="pagehead photo-header training-header">
        <Link className="back" to="/">← Back to home</Link>
        <p className="eyebrow">ABOUT THE COMMITTEE</p>
        <h1>Sharing the OA’s story.</h1>
        <p className="lede">
          The committee is part of the OA’s National Committee. It shares the story and spirit of the OA, amplifies national subcommittees, and communicates the OA’s programs.
        </p>
        <a className="header-credit" href="https://oa-scouting.org/training/training-events" target="_blank" rel="noreferrer">
          Photo: Order of the Arrow
        </a>
      </div>

      <div className="standards-layout">
        <section className="policy-block">
          <h2>Working with national subcommittees</h2>
          <p>
            The committee develops, creates, manages, and publishes official OA content. Its Partner Pillar works with teams on communications goals and guides content from the initial idea through publication.
          </p>
          <Link className="text-link" to="/services/">
            Explore what we do →
          </Link>
        </section>

        <section className="policy-block">
          <p className="eyebrow">2025–2027 STRATEGIC FRAMEWORK</p>
          <h2>Four goals for the committee</h2>
          <p>These are the core strategic priorities established in the National Committee strategic framework.</p>
          <ol className="strategy-goals">
            <li>
              <h3>Broaden awareness of the OA.</h3>
              <p>
                Help parents, unit leaders, Scouts, and non-members understand the OA’s program and value through clear messages, the website, and communication with Scouting America.
              </p>
            </li>
            <li>
              <h3>Lead national marketing and communications.</h3>
              <p>
                Partner with national subcommittees on communications plans, program promotion, and clear processes for tracking agreed projects and timelines.
              </p>
            </li>
            <li>
              <h3>Build belonging and engagement within the committee.</h3>
              <p>
                Support members through development opportunities, recognition, onboarding, and consistent leadership transitions.
              </p>
            </li>
            <li>
              <h3>Equip lodges to tell the OA’s story.</h3>
              <p>
                Develop resources, tools, and webinars that help lodges communicate with their members, councils, local press, and non-members.
              </p>
            </li>
          </ol>
        </section>

        <section className="policy-block">
          <p className="eyebrow">2025–2027 BUSINESS PLAN / D5</p>
          <h2>Connect with younger OA members.</h2>
          <p>
            Invest in communications content and digital platforms for the next generation, with a more sustainable committee structure and stronger systems for capturing the OA through video and photography.
          </p>
        </section>
      </div>
    </main>
  );
}
