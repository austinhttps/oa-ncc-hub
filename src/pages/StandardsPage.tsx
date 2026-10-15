import { Link } from 'react-router-dom';

export function StandardsPage() {
  return (
    <main id="main" className="wrap">
      <div className="pagehead photo-header safety-header">
        <Link className="back" to="/">← Back to home</Link>
        <p className="eyebrow">STANDARDS &amp; GOVERNANCE</p>
        <h1>Standards &amp; policies</h1>
        <p className="lede">
          National Communications Committee guidance for content creation, publication, ethical AI use, and youth privacy.
        </p>
        <a className="header-credit" href="https://scoutingmagazine.org/2017/08/make-conservation-projects-community/" target="_blank" rel="noreferrer">
          Photo: Scouting magazine
        </a>
      </div>

      <nav className="page-jumps" aria-label="On this page">
        <strong>On this page:</strong>
        <a href="#ai">AI use</a>
        <a href="#privacy">Youth privacy</a>
        <a href="#safe-scouting">Photo &amp; video safety</a>
        <a href="#scheduling">Scheduling calendar</a>
        <a href="#external-content">Content approval</a>
        <a href="#volunteer-board">Volunteer Board</a>
        <a href="#resources">LOOA &amp; brand assets</a>
      </nav>

      <div className="standards-layout">
        {/* Section 01: AI */}
        <section className="policy-block" id="ai">
          <span className="policy-label">01 / ARTIFICIAL INTELLIGENCE</span>
          <h2>Members remain the creators and decision-makers.</h2>
          <p>
            AI may assist the creative process, but committee members must rigorously fact-check its output, and leadership approval remains mandatory.
          </p>
          <div className="ai-columns">
            <div>
              <h3>Permitted assistance</h3>
              <ul>
                <li>Brainstorming headlines, campaign angles, and initial outlining.</li>
                <li>Research assistance and organizing raw reference materials.</li>
                <li>Proofreading, grammar checks, and structural feedback.</li>
                <li>Meeting notes transcription and summary generation.</li>
                <li><em>(All outputs must be carefully verified by human editors)</em></li>
              </ul>
            </div>
            <div>
              <h3>Not permitted</h3>
              <ul>
                <li>Creating final published content or generating synthetic images for official OA channels.</li>
                <li>Substantial edits or rewrites that replace the original creator’s individual voice or authorship.</li>
                <li>Publishing AI-authored content as an official National Committee product.</li>
                <li>Decisions requiring human judgment, including content approvals, personnel matters, disciplinary actions, and policy interpretations.</li>
              </ul>
            </div>
          </div>
          <a
            className="text-link"
            href="https://docs.google.com/document/d/1ebaeam4kIGUM3cwebZi5piVwNhASfh1VYlPLlay-b5M/edit?tab=t.pbal1rkma1ll"
            target="_blank"
            rel="noreferrer"
          >
            Read the full committee AI policy document ↗
          </a>
        </section>

        {/* Section 02: Youth Privacy */}
        <section className="policy-block" id="privacy">
          <span className="policy-label">02 / YOUTH PROTECTION &amp; PRIVACY</span>
          <h2>Protect youth contact information.</h2>
          <p>
            Due to strict privacy and Youth Protection policies, <strong>youth contact information (names, emails, phone numbers) cannot be shared freely or transferred through unsecured channels</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            All custom audience contact lists must be exported directly from official source systems (such as LodgeMaster or NOAERS) by authorized stakeholder leads and sent directly to their assigned strategist for secure segmentation in Campaign Monitor.
          </p>
          <div className="callout">
            <strong>Data Storage Protocol:</strong> Contact lists are never stored on unencrypted external cloud services or distributed to unauthorized third parties.
          </div>
        </section>

        {/* Section 03: Safe Scouting */}
        <section className="policy-block" id="safe-scouting">
          <span className="policy-label">03 / PHOTO &amp; VIDEO SAFETY</span>
          <h2>Follow the Guide to Safe Scouting.</h2>
          <p>
            All photography, video capture, and depictions of Scouting activities must strictly adhere to the <em>Guide to Safe Scouting</em> (including required safety gear, two-deep leadership, youth protection standards, and approved activity guidelines).
          </p>
          <p style={{ marginTop: '10px' }}>
            Content that does not strictly follow these guidelines will not be posted or promoted on any national communication platform.
          </p>
          <a
            className="text-link"
            href="https://www.scouting.org/health-and-safety/gss/toc/"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: '14px' }}
          >
            Scouting America Guide to Safe Scouting ↗
          </a>
        </section>

        {/* Section 04: American Indian Content */}
        <section className="policy-block" id="american-indian-content">
          <span className="policy-label">04 / AMERICAN INDIAN THEMES</span>
          <h2>American Indian activities &amp; related content</h2>
          <p>
            Content featuring regalia or themes from American Indian cultures will not be used except in historical contexts, such as former ceremonies or special archival cases considered individually. OA communications reflect the organization’s ongoing transition away from American Indian themes.
          </p>
        </section>

        {/* Section 05: Social Media Calendar Scheduling */}
        <section className="policy-block" id="scheduling">
          <span className="policy-label">05 / SOCIAL MEDIA CALENDAR</span>
          <h2>Coordinate publication timing.</h2>
          <p>
            The committee maintains a unified national content calendar to prevent overcrowding and ensure posts achieve optimal reach without overshadowing one another.
          </p>
          <p style={{ marginTop: '10px' }}>
            When requesting publication, please indicate your initiative's priority level and deadline constraints. The committee balances multiple national initiatives to preserve audience engagement.
          </p>
        </section>

        {/* Section 06: Content Approval */}
        <section className="policy-block" id="external-content">
          <span className="policy-label">06 / CONTENT APPROVAL</span>
          <h2>Submitting your own graphics or content</h2>
          <p>
            Subcommittees and regional teams providing pre-designed collateral undergo a structured review process to protect brand consistency:
          </p>
          <ul>
            <li><strong>Phase 1:</strong> Initial team review for messaging and visual standards.</li>
            <li><strong>Phase 2:</strong> Editorial feedback and copy refinements if needed.</li>
            <li><strong>Phase 3:</strong> Leadership review and final approval via Asana.</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            This cycle takes up to 3 weeks depending on the complexity of the materials.
          </p>
        </section>

        {/* Section 07: Volunteer Board Guidelines */}
        <section className="policy-block" id="volunteer-board">
          <span className="policy-label">07 / VOLUNTEER BOARD</span>
          <h2>Volunteer Board position guidelines</h2>
          <p>
            To ensure clarity and high response rates for open volunteer leadership opportunities across the country:
          </p>
          <ul>
            <li><strong>Descriptive Titles:</strong> Position titles must accurately and clearly describe the role without using confusing internal committee acronyms.</li>
            <li><strong>Member Experience Coordination:</strong> Postings must align with configuration and taxonomy standards maintained by the Member Experience team.</li>
          </ul>
        </section>

        {/* Section 08: Downloadable Resources & LOOA */}
        <section className="policy-block" id="resources">
          <span className="policy-label">08 / RESOURCES &amp; STYLE</span>
          <h2>Style guides, brand assets &amp; templates</h2>
          <p>
            All official Order of the Arrow communications adhere to the <em>Language of the Order of the Arrow (LOOA)</em> style manual.
          </p>
          <div className="two-links" style={{ marginTop: '22px', marginBottom: '10px' }}>
            <a href="https://oa-scouting.org/resources/looa" target="_blank" rel="noreferrer">
              <strong>Language of the Order of the Arrow (LOOA) ↗</strong>
              <span>Official terminology, grammar, capitalization, and naming standards</span>
            </a>
            <a href="https://oa-scouting.org" target="_blank" rel="noreferrer">
              <strong>OA Brand Standards &amp; Assets ↗</strong>
              <span>Logos, official color codes, typeface pairings, and patch guidelines</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
