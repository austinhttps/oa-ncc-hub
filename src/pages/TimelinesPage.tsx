import { Link } from 'react-router-dom';

export function TimelinesPage() {
  return (
    <main id="main" className="wrap">
      <div className="pagehead">
        <Link className="back" to="/">← Back to home</Link>
        <p className="eyebrow">TIMELINES</p>
        <h1>Timelines by type of work</h1>
        <p className="lede">
          Find the planning guidance for your request. Confirm timing with your strategist; content delivery, approvals, and standards compliance can affect the schedule.
        </p>
      </div>

      <nav className="page-jumps" aria-label="On this page">
        <strong>Find your request:</strong>
        <a href="#website-updates">Website updates</a>
        <a href="#enews">eNews, articles &amp; emails</a>
        <a href="#social-media">Social media</a>
        <a href="#video">Video &amp; photography</a>
        <a href="#special-projects">Campaigns &amp; special projects</a>
        <a href="#external-review">Content review</a>
      </nav>

      <div className="standards-layout">
        <section className="content-section" id="website-updates">
          <h2>Website updates (oa-scouting.org)</h2>
          <div className="table-scroll">
            <table>
              <caption className="sr-only">Website turnaround timelines</caption>
              <thead>
                <tr>
                  <th scope="col">Project Tier</th>
                  <th scope="col">Production SLA</th>
                  <th scope="col">Scope &amp; Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">🟢 Quick turnaround</th>
                  <td><strong>48 hours–1 week</strong></td>
                  <td>Simple content updates, basic new pages, and policy PDF uploads.</td>
                </tr>
                <tr>
                  <th scope="row">🟡 Moderate projects</th>
                  <td><strong>2+ weeks</strong></td>
                  <td>Large update batches, custom layouts within an existing page structure, and duplication of existing web features.</td>
                </tr>
                <tr>
                  <th scope="row">🔴 Complex projects</th>
                  <td><strong>2+ months</strong></td>
                  <td>Custom web tools, interactive directories, or features not already built into the platform frameworks.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="callout">
            <strong>Note on Turnarounds:</strong> Quick-turnaround timing assumes submitted content strictly meets OA and Scouting America web and brand standards. Revisions may extend the timeline.
          </p>
        </section>

        <section className="content-section channel-section" id="enews">
          <div className="channel-heading">
            <p className="eyebrow">WRITTEN CONTENT</p>
            <h2>eNews, articles &amp; emails</h2>
          </div>
          <div className="channel-guidance">
            <p>
              The committee can write from an idea, develop a partial draft, or edit existing content for publication. Standard content follows the 4-phase production milestone pipeline shown below:
            </p>
            <div className="planning-milestones">
              <div>
                <strong>3 months before</strong>
                <span>1. Ideation &amp; scoping</span>
              </div>
              <div>
                <strong>2 months before</strong>
                <span>2. Plan review</span>
              </div>
              <div>
                <strong>1 month before</strong>
                <span>3. Content development</span>
              </div>
              <div>
                <strong>Final month</strong>
                <span>4. Review final drafts</span>
              </div>
            </div>
            <p className="timing-footnote">
              For materials your team has already prepared, see the external content review process.
            </p>
            <a className="text-link" href="#external-review">
              Review of existing materials →
            </a>
          </div>
        </section>

        <section className="content-section channel-section" id="social-media">
          <div className="channel-heading">
            <p className="eyebrow">POSTS &amp; STORIES</p>
            <h2>Social media</h2>
          </div>
          <div className="channel-guidance">
            <div className="timing-definitions">
              <div>
                <dt>New content campaigns</dt>
                <dd>
                  Follows the general content planning schedule: ideation 3 months before publication, plan review 2 months before, development 1 month before, followed by final draft review.
                </dd>
              </div>
              <div>
                <dt>One-off posts or pre-made content</dt>
                <dd>
                  Short-term marketing can include a single social post or materials that only need review and approval. The committee prioritizes posts based on calendar capacity and strategic alignment.
                </dd>
              </div>
              <div>
                <dt>Posting date &amp; calendar availability</dt>
                <dd>
                  Discuss requested dates with your committee lead. Share the content’s urgency; the committee coordinates the national master calendar to avoid oversaturating channels.
                </dd>
              </div>
            </div>
            <a className="text-link" href="#external-review">
              Review of submitted graphics &amp; content →
            </a>
          </div>
        </section>

        <section className="content-section channel-section" id="video">
          <div className="channel-heading">
            <p className="eyebrow">FILMING &amp; PRODUCTION</p>
            <h2>Video &amp; photography</h2>
          </div>
          <div className="channel-guidance">
            <p>
              The committee coordinates filming, interviews, editing, audio mastering, and animation with the videography team, and provides event or themed photography.
            </p>
            <p className="callout">
              <strong>Confirm production timing with your strategist:</strong> General content milestones apply, but large multi-camera video shoots or complex animations require dedicated scheduling windows.
            </p>
            <div className="planning-milestones">
              <div>
                <strong>3 months before</strong>
                <span>Concept &amp; script</span>
              </div>
              <div>
                <strong>2 months before</strong>
                <span>Pre-production &amp; logistics</span>
              </div>
              <div>
                <strong>1 month before</strong>
                <span>Filming &amp; rough cut</span>
              </div>
              <div>
                <strong>Final month</strong>
                <span>Color, sound &amp; sign-off</span>
              </div>
            </div>
            <Link className="text-link" to="/standards/#safe-scouting">
              Photo &amp; video safety standards →
            </Link>
          </div>
        </section>

        <section className="content-section channel-section" id="special-projects">
          <div className="channel-heading">
            <p className="eyebrow">MULTIPLE PIECES OF CONTENT</p>
            <h2>Campaigns &amp; special projects</h2>
          </div>
          <div className="channel-guidance">
            <p className="deadline">
              <strong>Quarterly SLA: Submit at least one quarter (T-3 Months) before the intended launch quarter.</strong>
            </p>
            <p style={{ marginTop: '14px' }}>
              Special projects combine multiple pieces—such as coordinated posts, segmented emails, custom graphics, and web portal updates—and require close collaboration with a designated strategist.
            </p>
            <p style={{ marginTop: '10px' }}>
              Long-term campaigns usually run for a month or more. That is the campaign’s duration rather than a production turnaround.
            </p>
          </div>
        </section>

        <section className="review-band" id="external-review">
          <div>
            <p className="eyebrow">EXTERNAL GRAPHICS &amp; CONTENT</p>
            <h2>Review takes up to 3 weeks.</h2>
            <p>
              When subcommittees provide pre-designed graphics or self-written drafts, items undergo a mandatory 3-week review cycle. Watch for emails or Asana notifications about its progress.
            </p>
          </div>
          <ol>
            <li>
              <strong>01</strong>
              <span>Team review for LOOA and brand compliance (Week 1)</span>
            </li>
            <li>
              <strong>02</strong>
              <span>Feedback &amp; editorial adjustments (Week 2)</span>
            </li>
            <li>
              <strong>03</strong>
              <span>Leadership review &amp; final sign-off (Week 3)</span>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
