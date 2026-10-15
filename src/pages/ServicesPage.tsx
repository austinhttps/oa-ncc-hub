import { Link } from 'react-router-dom';

export function ServicesPage() {
  return (
    <main id="main" className="wrap">
      <div className="pagehead">
        <Link className="back" to="/">← Back to home</Link>
        <p className="eyebrow">WHAT WE DO</p>
        <h1>Sharing the story and spirit of the OA.</h1>
        <p className="lede">
          The committee develops, creates, manages, and publishes official OA content, amplifying national subcommittees and communicating the OA’s programs.
        </p>
      </div>

      <nav className="page-jumps" aria-label="On this page">
        <strong>On this page:</strong>
        <a href="#collaboration">Collaboration</a>
        <a href="#writing">Written content</a>
        <a href="#digital">Social media</a>
        <a href="#website">Website</a>
        <a href="#design">Branding &amp; design</a>
        <a href="#photography">Photo &amp; video</a>
        <a href="#analytics">Analytics</a>
        <a href="#campaigns">Campaigns</a>
        <a href="#audiences">Audiences</a>
      </nav>

      <div className="standards-layout">
        <section className="policy-block" id="collaboration">
          <span className="policy-label">COLLABORATION</span>
          <h2>Working with the committee</h2>
          <p>Your primary contact is a member of the Partner Pillar: an assigned Partner Lead or Brand Lead.</p>
          <ul>
            <li>Develop content that promotes your programs or initiatives.</li>
            <li>Guide the process from the initial idea to publication.</li>
            <li>Define quarterly and annual communications goals with your team.</li>
            <li>Work with internal teams to carry out agreed goals.</li>
            <li>Ensure content reaches the intended audience, follows OA brand standards, and receives structured review.</li>
            <li>Communicate timelines, platform practices, and production capacity.</li>
          </ul>
        </section>

        <section className="policy-block" id="writing">
          <span className="policy-label">01 / CONTENT</span>
          <h2>Written content &amp; copywriting</h2>
          <p>
            The committee can edit existing work for clarity and publication, write from an idea, or develop partial drafts, interviews, transcripts, and notes.
          </p>
          <ul>
            <li>Articles, scripts, promotional materials, executive remarks, and informational guides.</li>
            <li>Website content, program documentation, and eNews campaigns.</li>
            <li>Strict alignment with the <em>Language of the Order of the Arrow (LOOA)</em> style and terminology standards.</li>
          </ul>
        </section>

        <section className="policy-block" id="digital">
          <span className="policy-label">02 / SOCIAL MEDIA</span>
          <h2>Digital &amp; social media</h2>
          <p>Unified management of official OA digital channels across Facebook, Instagram, YouTube, and TikTok.</p>
          <ul>
            <li>Graphics, promotions, photo carousels, and educational spotlights.</li>
            <li>Stories featuring polls, question boxes, reposts, and live event updates.</li>
            <li>Short-form vertical video (Reels, TikTok, YouTube Shorts) and long-form video features.</li>
            <li>High-deliverability eNews deployment via Campaign Monitor targeting specific leadership and member layers.</li>
          </ul>
        </section>

        <section className="policy-block" id="website">
          <span className="policy-label">03 / WEBSITE</span>
          <h2>Website management</h2>
          <p>Maintaining, updating, and architecting the primary public-facing digital flagship at <code>oa-scouting.org</code>.</p>
          <ul>
            <li>Add and update content, upload resource PDFs, and publish national announcements.</li>
            <li>Create homepage banners and dedicated program or subcommittee microsites.</li>
            <li>Train authorized leads to make standard updates in the CMS.</li>
          </ul>
          <p className="callout">
            <strong>Platform Scope Boundary:</strong> The National Communications Committee does not manage ArrowID-gated member platforms, including LodgeMaster and the National Committee Portal.
          </p>
        </section>

        <section className="policy-block" id="design">
          <span className="policy-label">04 / DESIGN</span>
          <h2>Branding, design &amp; multimedia</h2>
          <p>
            Visual identity, custom design assets, brand guideline packages, and standard operating procedures.
          </p>
          <ul>
            <li>Custom graphic design for national campaigns, logos, merchandise, and patches.</li>
            <li>Brand guideline packages, typography systems, and official color palette enforcement.</li>
            <li>Designs must follow established branding guidelines but are otherwise fully customizable for your project.</li>
          </ul>
        </section>

        <section className="policy-block" id="photography">
          <span className="policy-label">05 / PHOTO &amp; VIDEO</span>
          <h2>Photography &amp; videography</h2>
          <p>Event and themed photography, capture of national gatherings, and studio production.</p>
          <ul>
            <li>Professional on-site photography coordination and image asset archiving.</li>
            <li>Filming, interviews, video post-production, motion graphics, audio mastering, and official podcast editing.</li>
          </ul>
        </section>

        <section className="policy-block" id="analytics">
          <span className="policy-label">06 / ANALYTICS</span>
          <h2>Analytics &amp; performance impact</h2>
          <p>
            Data-driven tracking and reporting to measure audience reach, engagement, and conversion for published content.
          </p>
          <ul>
            <li>Performance retrospectives (clicks, engagement rate, open rate, reach).</li>
            <li>Audience demographic and geographic distribution insights.</li>
            <li>Quarterly communication effectiveness reporting for subcommittee leadership.</li>
          </ul>
        </section>

        <section className="policy-block" id="campaigns">
          <span className="policy-label">07 / MARKETING</span>
          <h2>Campaigns &amp; special projects</h2>
          <h3>Short-term marketing</h3>
          <p>
            One-off promotions or simple content with limited development, including pre-made materials for review or a single social post.
          </p>
          <h3>Long-term campaigns</h3>
          <p>
            Usually run for a month or more, with multiple pieces or longer production needs. Examples include a weekly Instagram series for a new training initiative or a multi-phase rollout for a national program launch.
          </p>
          <h3>Special projects</h3>
          <p>
            Initiatives with multiple pieces—such as posts, emails, graphics, and web updates—require close collaboration with a strategist.
          </p>
          <p className="callout">
            <strong>Timing:</strong> Submit special project requests at least one quarter (T-3 Months) before the intended launch quarter.
          </p>
        </section>

        <section className="policy-block" id="audiences">
          <span className="policy-label">08 / AUDIENCES</span>
          <h2>Reaching the right audience</h2>
          <h3>Social media</h3>
          <ul>
            <li><strong>Instagram &amp; TikTok:</strong> Younger audience demographic; interactive content such as polls, reels, questions, and stories.</li>
            <li><strong>Facebook:</strong> Adult leaders, advisers, alumni; longer posts, photo albums, written updates, and clickable caption links.</li>
            <li><strong>YouTube:</strong> Broadcasts, webinars, highlight reels, and training archives.</li>
            <li><strong>Cross-channel:</strong> General OA updates, program announcements, and registration campaigns.</li>
          </ul>

          <h3>Written content &amp; eNews segmentation</h3>
          <ul>
            <li><strong>Organizational level:</strong> Region, section, council, and lodge.</li>
            <li><strong>Membership:</strong> Youth, adult, young adult; Ordeal, Brotherhood, or Vigil Honor.</li>
            <li><strong>Leadership:</strong> Lodge Key 3, section leadership, Scout Executives, and associate advisers.</li>
            <li><strong>Custom lists:</strong> Event participants, trading post customers, and award recipients. All custom lists must be exported directly from the source system (e.g. LodgeMaster, NOAERS) by the stakeholder team and sent directly to your strategist.</li>
          </ul>

          <h3>Data limitations</h3>
          <ul>
            <li>Only general age categories are available; individual birthdates are not stored for privacy reasons.</li>
            <li>Some specific local officer roles may be recorded inconsistently across councils.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
