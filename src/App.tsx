import React, { useState, useEffect } from 'react';
import {
  FileText,
  Share2,
  Globe,
  Palette,
  BarChart3,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Download,
  ExternalLink,
  ChevronDown,
  Mail,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  BookOpen,
  Info,
  Send,
  HelpCircle,
  FileCode,
  Users
} from 'lucide-react';
import './App.css';

interface ServiceOffering {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  scopeNotice?: string;
  icon: React.ReactNode;
}

export function App() {
  const [activeSection, setActiveSection] = useState<'services' | 'timelines' | 'policies' | 'intake'>('services');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAccordions, setExpandedAccordions] = useState<Record<string, boolean>>({
    'youth-protection': true,
    'ai-policy': true,
    'volunteer-board': false,
    'brand-standards': false
  });

  // Intake Calculator / Interactive Assistant State
  const [projectType, setProjectType] = useState<'quick-web' | 'moderate-web' | 'complex-web' | 'standard-content' | 'campaign' | 'external-review'>('quick-web');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'timelines', 'policies', 'intake'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId as any);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id: string) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesData: ServiceOffering[] = [
    {
      id: 'written-content',
      category: 'editorial',
      title: 'Written Content & Copywriting',
      subtitle: 'LOOA Compliant Editorial & Messaging',
      description: 'End-to-end editorial production, copy refinement, and narrative consulting crafted for Scouts, adult leaders, and national stakeholders.',
      features: [
        'Drafting articles, scripts, executive remarks, and program guides from scratch',
        'Reviewing and refining raw drafts from subcommittees and regions',
        'Strict conformance to the Language of the Order of the Arrow (LOOA) style guide',
        'Targeted messaging frameworks for eNews campaigns and event publications'
      ],
      icon: <FileText size={24} />
    },
    {
      id: 'digital-social',
      category: 'social',
      title: 'Digital & Social Media',
      subtitle: 'Multi-Platform Distribution & Segmented Email',
      description: 'Unified management of official OA digital channels, driving engagement and brand awareness across diverse Arrowmen demographics.',
      features: [
        'Managing posts, stories, and community engagement across Facebook, Instagram, YouTube, and TikTok',
        'Short-form vertical video (Reels, TikTok, Shorts) and cinematic long-form features',
        'High-deliverability eNews deployment via Campaign Monitor',
        'Demographic and role segmentation (Youth Arrowmen, Lodge Key 3, Section Leadership, Advisers)'
      ],
      icon: <Share2 size={24} />
    },
    {
      id: 'website-management',
      category: 'web',
      title: 'Website Management',
      subtitle: 'oa-scouting.org Content & Architecture',
      description: 'Publishing, maintaining, and architecting the primary public-facing digital flagship of the Order of the Arrow.',
      features: [
        'Content updates, article releases, and downloadable resource hosting on oa-scouting.org',
        'Homepage banner takeovers and national initiative priority features',
        'Design and deployment of new subcommittee landing hubs and microsites'
      ],
      scopeNotice: 'The NCC does not manage ArrowID-gated member platforms like LodgeMaster or the National Committee Portal.',
      icon: <Globe size={24} />
    },
    {
      id: 'branding-multimedia',
      category: 'multimedia',
      title: 'Branding, Design & Multimedia',
      subtitle: 'Visual Identity, Assets & Video Production',
      description: 'Creative direction, visual assets, and high-impact media designed to maintain consistent national branding standards.',
      features: [
        'Custom graphic design for national campaigns, logos, merchandise, and patches',
        'Brand guideline packages, typography systems, and official color palette enforcement',
        'Professional on-site and studio photography coordination',
        'Video post-production, motion graphics, audio mastering, and official podcast editing'
      ],
      icon: <Palette size={24} />
    },
    {
      id: 'analytics-impact',
      category: 'editorial',
      title: 'Analytics & Performance Impact',
      subtitle: 'Data-Driven Insights & Reporting',
      description: 'Rigorous tracking and measurement across digital touchpoints to evaluate communication reach, resonance, and stakeholder conversion.',
      features: [
        'Campaign performance retrospectives (clicks, shares, reach, engagement rates)',
        'Audience demographic insights and geographic distribution reports',
        'Quarterly communication effectiveness reporting for subcommittee leadership'
      ],
      icon: <BarChart3 size={24} />
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="ncc-page-container">
      {/* Top Official Government/Org Bar */}
      <header className="top-official-bar">
        <div className="content-max-width top-bar-content">
          <div className="official-tag">
            <span className="arrow-icon">▲</span>
            <span>Official Portal of the National Order of the Arrow Committee</span>
          </div>
          <div className="top-bar-links">
            <a href="https://oa-scouting.org" target="_blank" rel="noreferrer">
              oa-scouting.org <ExternalLink size={12} />
            </a>
            <a href="https://jira.oa-scouting.org" target="_blank" rel="noreferrer">
              Jira Service Desk <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Branding Header */}
      <nav className="site-header" aria-label="Main Navigation">
        <div className="content-max-width header-inner">
          <div className="logo-lockup">
            <div className="oa-brand-badge">
              <span>OA</span>
            </div>
            <div className="brand-text-block">
              <span className="sup-title">Scouting America • National Committee</span>
              <span className="main-title">Communications Subcommittee</span>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="header-action-button"
              onClick={() => scrollToSection('intake')}
            >
              <span>Submit Request</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Trail */}
      <div className="breadcrumb-bar">
        <div className="content-max-width">
          <ul className="breadcrumb-list">
            <li><a href="https://oa-scouting.org">Home</a></li>
            <li>/</li>
            <li><a href="https://oa-scouting.org/resources">Committees</a></li>
            <li>/</li>
            <li aria-current="page"><strong>National Communications (NCC) Hub</strong></li>
          </ul>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-overlay-pattern"></div>
        <div className="content-max-width hero-content">
          <div className="hero-meta-pill">
            <Sparkles size={14} />
            <span>Internal Agency &amp; Stakeholder Portal</span>
          </div>

          <h1 className="hero-title">National Communications Subcommittee (NCC)</h1>

          <p className="hero-subheadline">
            Your strategic marketing and communications partner across the National Order of the Arrow Committee.
          </p>

          <p className="hero-mission">
            As the organization’s marketing committee, the NCC ideates, creates, manages, and publishes all official OA content—amplifying national subcommittees and inspiring Arrowmen nationwide.
          </p>

          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Core Digital Channels</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">LOOA Style Compliance</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number">48 Hr</div>
              <div className="hero-stat-label">Fast-Track Web Turnaround</div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-number">100k+</div>
              <div className="hero-stat-label">Arrowmen Audience Reach</div>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY JUMP-NAVIGATION HERO BAR */}
      <nav className="sticky-jump-nav-wrapper" aria-label="Jump Navigation">
        <div className="content-max-width jump-nav-container">
          <span className="jump-nav-label">
            <Layers size={14} /> Jump To:
          </span>

          <div className="jump-nav-pills" role="tablist">
            <button
              role="tab"
              aria-selected={activeSection === 'services'}
              className={`jump-pill ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              <span className="pill-symbol">✦</span>
              <span>Service Offerings</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSection === 'timelines'}
              className={`jump-pill ${activeSection === 'timelines' ? 'active' : ''}`}
              onClick={() => scrollToSection('timelines')}
            >
              <span className="pill-symbol">➔</span>
              <span>Timelines &amp; SLAs</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSection === 'policies'}
              className={`jump-pill ${activeSection === 'policies' ? 'active' : ''}`}
              onClick={() => scrollToSection('policies')}
            >
              <span className="pill-symbol">▤</span>
              <span>Policies &amp; Standards</span>
            </button>

            <button
              role="tab"
              aria-selected={activeSection === 'intake'}
              className={`jump-pill ${activeSection === 'intake' ? 'active' : ''}`}
              onClick={() => scrollToSection('intake')}
            >
              <span className="pill-symbol">?</span>
              <span>Intake &amp; Contact</span>
            </button>
          </div>

          <div className="jump-nav-quick-action">
            <a
              href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
              target="_blank"
              rel="noreferrer"
              className="jump-nav-quick-btn"
            >
              <Send size={13} />
              <span>Submit Jira Request</span>
            </a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT CONTAINER */}
      <main>
        {/* SECTION 01: SERVICE OFFERINGS CATALOG */}
        <section id="services" className="section-wrapper">
          <div className="content-max-width">
            <div className="section-header-block">
              <div className="section-kicker">
                <span>Section 01</span>
                <span>•</span>
                <span>Capabilities &amp; Scope</span>
              </div>
              <h2 className="section-title">Service Offerings Catalog</h2>
              <p className="section-lead">
                The NCC operates as the internal creative agency for the National Order of the Arrow Committee. Explore our specialized services spanning copywriting, multimedia creation, digital marketing, and web publishing.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="services-catalog-controls" role="tablist" aria-label="Filter Services">
              <button
                className={`catalog-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Capabilities ({servicesData.length})
              </button>
              <button
                className={`catalog-tab-btn ${selectedCategory === 'editorial' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('editorial')}
              >
                Written &amp; Analytics
              </button>
              <button
                className={`catalog-tab-btn ${selectedCategory === 'social' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('social')}
              >
                Digital &amp; Social
              </button>
              <button
                className={`catalog-tab-btn ${selectedCategory === 'web' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('web')}
              >
                Website Management
              </button>
              <button
                className={`catalog-tab-btn ${selectedCategory === 'multimedia' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('multimedia')}
              >
                Branding &amp; Design
              </button>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
              {filteredServices.map(service => (
                <article key={service.id} className="service-card">
                  <div className="service-card-header">
                    <div className="service-card-icon" aria-hidden="true">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="service-card-title">{service.title}</h3>
                      <div className="service-card-subtitle">{service.subtitle}</div>
                    </div>
                  </div>

                  <p className="service-card-body">{service.description}</p>

                  <ul className="service-features-list">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.scopeNotice && (
                    <div className="service-scope-boundary" role="note">
                      <AlertTriangle size={16} />
                      <div>
                        <strong>Platform Scope Boundary:</strong> {service.scopeNotice}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 02: TIMELINES & PRODUCTION SLAS */}
        <section id="timelines" className="section-wrapper">
          <div className="content-max-width">
            <div className="section-header-block">
              <div className="section-kicker">
                <span>Section 02</span>
                <span>•</span>
                <span>Turnaround Commitments</span>
              </div>
              <h2 className="section-title">Project Timelines &amp; Production SLAs</h2>
              <p className="section-lead">
                To maintain high editorial standards, rigorous youth protection adherence, and strategic scheduling, all requests follow structured Service Level Agreements (SLAs).
              </p>
            </div>

            {/* Standard Content Production Milestones Flow */}
            <div className="sla-visual-flow">
              <div className="flow-title-bar">
                <div className="flow-title">
                  <Calendar size={20} />
                  <span>Standard Content Production Milestone Pipeline</span>
                </div>
                <div className="flow-legend">
                  <Clock size={14} />
                  <span>Submission Minimum: T-3 Months</span>
                </div>
              </div>

              <div className="timeline-milestones-row">
                <div className="milestone-step-card">
                  <span className="milestone-badge">T-3 Months</span>
                  <h4 className="milestone-step-title">1. Ideation &amp; Intake</h4>
                  <p className="milestone-step-desc">
                    Concept inception, target audience definition, resource sizing, and assignment of designated strategist or partner lead.
                  </p>
                </div>

                <div className="milestone-step-card">
                  <span className="milestone-badge">T-2 Months</span>
                  <h4 className="milestone-step-title">2. Plan Review</h4>
                  <p className="milestone-step-desc">
                    Comprehensive cross-committee plan review, campaign messaging alignment, asset inventory audit, and approval to develop.
                  </p>
                </div>

                <div className="milestone-step-card">
                  <span className="milestone-badge">T-1 Month</span>
                  <h4 className="milestone-step-title">3. Content Development</h4>
                  <p className="milestone-step-desc">
                    Drafting LOOA-compliant copy, graphic creation, video editing, social asset formatting, and staging across channels.
                  </p>
                </div>

                <div className="milestone-step-card">
                  <span className="milestone-badge">T-1 Mo to T-0 Days</span>
                  <h4 className="milestone-step-title">4. Final Review &amp; Launch</h4>
                  <p className="milestone-step-desc">
                    Final stakeholder sign-off, scheduling in distribution systems, deployment monitoring, and performance tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* SLA Tables Grid */}
            <div className="sla-tables-grid">
              {/* Table 1: Website Turnarounds */}
              <div className="sla-card-panel">
                <div className="sla-panel-header">
                  <h3>
                    <Globe size={18} />
                    <span>Website Update Turnarounds (oa-scouting.org)</span>
                  </h3>
                </div>
                <table className="sla-table-element">
                  <thead>
                    <tr>
                      <th style={{ width: '38%' }}>Project Tier</th>
                      <th style={{ width: '32%' }}>Production SLA</th>
                      <th style={{ width: '30%' }}>Scope &amp; Deliverables</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="sla-badge-indicator sla-badge-green">
                          🟢 Quick Turnaround
                        </span>
                      </td>
                      <td>
                        <strong>48 Hours – 1 Week</strong>
                      </td>
                      <td>
                        Simple text modifications, policy PDF uploads, minor link corrections, and basic page updates.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="sla-badge-indicator sla-badge-amber">
                          🟡 Moderate Projects
                        </span>
                      </td>
                      <td>
                        <strong>2+ Weeks</strong>
                      </td>
                      <td>
                        Large multi-page content batches, custom layout styling within existing CMS frameworks, new subcommittee sub-sections.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="sla-badge-indicator sla-badge-red">
                          🔴 Complex Projects
                        </span>
                      </td>
                      <td>
                        <strong>2+ Months</strong>
                      </td>
                      <td>
                        Custom web tools, interactive directories, data visualizers, or architecture outside current platform frameworks.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Campaign & External Reviews */}
              <div className="sla-card-panel">
                <div className="sla-panel-header">
                  <h3>
                    <Clock size={18} />
                    <span>Campaign &amp; Review Cycles</span>
                  </h3>
                </div>
                <table className="sla-table-element">
                  <thead>
                    <tr>
                      <th style={{ width: '38%' }}>Service Type</th>
                      <th style={{ width: '32%' }}>Production SLA</th>
                      <th style={{ width: '30%' }}>Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Quarterly Special Campaigns</strong>
                      </td>
                      <td>
                        <span className="sla-badge-indicator sla-badge-amber">
                          T-3 Months (1 Quarter)
                        </span>
                      </td>
                      <td>
                        Multi-phase initiatives (e.g. Conclave kits, NOAC promos, recruitment drives) with emails, videos, and collateral.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>External Content Review</strong>
                      </td>
                      <td>
                        <span className="sla-badge-indicator sla-badge-green">
                          Mandatory 3-Week Cycle
                        </span>
                      </td>
                      <td>
                        Subcommittee pre-designed graphics or self-written copy requiring LOOA &amp; brand compliance sign-off.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Volunteer Board Revisions</strong>
                      </td>
                      <td>
                        <span className="sla-badge-indicator sla-badge-green">
                          3 – 5 Business Days
                        </span>
                      </td>
                      <td>
                        Position title adjustments and member updates aligned with Member Experience configuration standards.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* External Review 3-Week Step Workflow */}
            <div className="review-workflow-callout">
              <h4 style={{ color: 'var(--oa-slate)', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                Mandatory External Content Review Protocol (3-Week Cycle)
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--oa-gray-600)' }}>
                When subcommittees or regions create their own materials (flyers, social media graphics, announcements), materials must be submitted at least 3 weeks prior to planned publication.
              </p>
              <div className="workflow-steps-horizontal">
                <div className="workflow-node">
                  <span style={{ color: 'var(--primary-red)' }}>Phase 1</span>
                  <span>NCC Team Review (Days 1–7)</span>
                </div>
                <span className="workflow-arrow-sep">➔</span>
                <div className="workflow-node">
                  <span style={{ color: 'var(--primary-red)' }}>Phase 2</span>
                  <span>Feedback &amp; Editorial Edits (Days 8–14)</span>
                </div>
                <span className="workflow-arrow-sep">➔</span>
                <div className="workflow-node">
                  <span style={{ color: 'var(--primary-red)' }}>Phase 3</span>
                  <span>Leadership Sign-off via Asana (Days 15–21)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: STANDARDS, GOVERNANCE & POLICIES */}
        <section id="policies" className="section-wrapper">
          <div className="content-max-width">
            <div className="section-header-block">
              <div className="section-kicker">
                <span>Section 03</span>
                <span>•</span>
                <span>Brand Governance &amp; Safety</span>
              </div>
              <h2 className="section-title">Standards, Governance &amp; Policies</h2>
              <p className="section-lead">
                Clear guidelines ensure that Order of the Arrow communications protect youth privacy, maintain the integrity of our historical brand, and leverage modern digital tools responsibly.
              </p>
            </div>

            <div className="policies-container">
              {/* Accordion List Column */}
              <div className="accordion-list">
                {/* Policy 1: Youth Protection Mandate */}
                <div className={`accordion-item ${expandedAccordions['youth-protection'] ? 'open' : ''}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion('youth-protection')}
                    aria-expanded={expandedAccordions['youth-protection']}
                  >
                    <div className="trigger-title-wrapper">
                      <ShieldCheck size={20} color="var(--primary-red)" />
                      <span>Youth Protection &amp; Audience Data Mandate</span>
                      <span className="trigger-badge badge-urgent">Mandatory</span>
                    </div>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: expandedAccordions['youth-protection'] ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {expandedAccordions['youth-protection'] && (
                    <div className="accordion-content">
                      <p>
                        In strict compliance with Scouting America Youth Protection and digital privacy directives, <strong>youth contact information (names, emails, phone numbers) cannot be shared freely or transferred through unauthorized channels</strong>.
                      </p>
                      <div className="policy-do-card" style={{ marginTop: '12px' }}>
                        <h5>
                          <CheckCircle2 size={16} /> Data List Transfer Protocol
                        </h5>
                        <p style={{ fontSize: '0.875rem', color: '#166534', marginBottom: '8px' }}>
                          All custom audience contact lists must be exported directly from official source systems (such as LodgeMaster or NOAERS) by authorized stakeholder leads and sent directly to their assigned NCC strategist for secure segmentation in Campaign Monitor. Lists are never stored on unencrypted external services.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Policy 2: AI Usage Policy */}
                <div className={`accordion-item ${expandedAccordions['ai-policy'] ? 'open' : ''}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion('ai-policy')}
                    aria-expanded={expandedAccordions['ai-policy']}
                  >
                    <div className="trigger-title-wrapper">
                      <Sparkles size={20} color="#6366f1" />
                      <span>Generative AI Usage &amp; Creative Policy</span>
                      <span className="trigger-badge badge-governance">Editorial Standards</span>
                    </div>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: expandedAccordions['ai-policy'] ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {expandedAccordions['ai-policy'] && (
                    <div className="accordion-content">
                      <p>
                        The National Communications Subcommittee recognizes the utility of artificial intelligence tools while preserving the genuine voice, historical accuracy, and human judgment essential to the Order of the Arrow.
                      </p>

                      <div className="policy-dos-donts-grid">
                        <div className="policy-do-card">
                          <h5>
                            <CheckCircle2 size={16} /> Permitted AI Uses
                          </h5>
                          <ul className="policy-list-items">
                            <li>• Brainstorming headlines and campaign themes</li>
                            <li>• Research assistance and initial data outlining</li>
                            <li>• Grammar proofreading and structural editing</li>
                            <li>• Meeting notes and transcription summaries</li>
                            <li><em>(All outputs must be thoroughly fact-checked by human editors)</em></li>
                          </ul>
                        </div>

                        <div className="policy-dont-card">
                          <h5>
                            <XCircle size={16} /> Prohibited AI Uses
                          </h5>
                          <ul className="policy-list-items">
                            <li>• Final publication without human review &amp; rewrite</li>
                            <li>• AI image generation for official OA channels</li>
                            <li>• Substituting a creator or author's individual voice</li>
                            <li>• Human judgment decisions (content approvals, personnel matters, policy interpretation)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Policy 3: Volunteer Board Guidelines */}
                <div className={`accordion-item ${expandedAccordions['volunteer-board'] ? 'open' : ''}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion('volunteer-board')}
                    aria-expanded={expandedAccordions['volunteer-board']}
                  >
                    <div className="trigger-title-wrapper">
                      <Users size={20} color="#d97706" />
                      <span>Volunteer Board Position Guidelines</span>
                      <span className="trigger-badge badge-hr">Structure</span>
                    </div>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: expandedAccordions['volunteer-board'] ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {expandedAccordions['volunteer-board'] && (
                    <div className="accordion-content">
                      <p>
                        The OA Volunteer Board showcases leadership and volunteer opportunities nationwide. To ensure uniformity across national and regional displays:
                      </p>
                      <ul style={{ margin: '12px 0 0 20px', fontSize: '0.875rem', lineHeight: '1.7' }}>
                        <li><strong>Standardized Job Titles:</strong> Position titles must accurately and concisely describe the core responsibility of the role.</li>
                        <li><strong>Omission of Internal Committee Tags:</strong> Internal administrative committee acronyms should be omitted from public titles to avoid confusing applicants.</li>
                        <li><strong>Member Experience Coordination:</strong> All postings adhere to schema and configuration standards maintained by the Member Experience team before public listing.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Downloadable Resource Cards Column */}
              <div className="resources-column">
                <div className="resources-card">
                  <div className="resources-card-title">
                    <Download size={20} color="var(--primary-red)" />
                    <span>Downloadable Resources &amp; Templates</span>
                  </div>
                  <p className="resources-card-desc">
                    Access standard templates, brand assets, and style guides to prepare your request before submitting.
                  </p>

                  <div className="resource-download-list">
                    <div className="download-asset-item">
                      <div className="asset-info">
                        <div className="asset-icon-box">
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <div className="asset-name">Language of the Order of the Arrow (LOOA)</div>
                          <div className="asset-meta">PDF • Official Style &amp; Terminology Guide</div>
                        </div>
                      </div>
                      <a
                        href="#looa"
                        onClick={(e) => { e.preventDefault(); alert("Opening Language of the Order of the Arrow (LOOA) Guide Reference."); }}
                        className="asset-action-btn"
                      >
                        <Download size={14} /> Download
                      </a>
                    </div>

                    <div className="download-asset-item">
                      <div className="asset-info">
                        <div className="asset-icon-box">
                          <Palette size={18} />
                        </div>
                        <div>
                          <div className="asset-name">OA Brand Standards &amp; Asset Library</div>
                          <div className="asset-meta">ZIP / Web • Logos, Color Swatches, Fonts</div>
                        </div>
                      </div>
                      <a
                        href="#brand"
                        onClick={(e) => { e.preventDefault(); alert("Opening OA Brand Standards and Vector Asset Library."); }}
                        className="asset-action-btn"
                      >
                        <Download size={14} /> View Assets
                      </a>
                    </div>

                    <div className="download-asset-item">
                      <div className="asset-info">
                        <div className="asset-icon-box">
                          <Calendar size={18} />
                        </div>
                        <div>
                          <div className="asset-name">Quarterly Communication Plan Template</div>
                          <div className="asset-meta">DOCX / Sheets • Campaign Roadmapping</div>
                        </div>
                      </div>
                      <a
                        href="#plan"
                        onClick={(e) => { e.preventDefault(); alert("Downloading Quarterly Communication Plan Template."); }}
                        className="asset-action-btn"
                      >
                        <Download size={14} /> Download
                      </a>
                    </div>

                    <div className="download-asset-item">
                      <div className="asset-info">
                        <div className="asset-icon-box">
                          <FileCode size={18} />
                        </div>
                        <div>
                          <div className="asset-name">Creative Request Brief Form</div>
                          <div className="asset-meta">PDF • Intake Sizing Worksheet</div>
                        </div>
                      </div>
                      <a
                        href="#brief"
                        onClick={(e) => { e.preventDefault(); alert("Downloading Creative Request Brief Form."); }}
                        className="asset-action-btn"
                      >
                        <Download size={14} /> Download
                      </a>
                    </div>
                  </div>
                </div>

                {/* Helpful Tip */}
                <div style={{ background: '#f8fafc', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Info size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: '0.8125rem', color: 'var(--oa-gray-600)' }}>
                    <strong>Pro-Tip for Subcommittees:</strong> Attaching a completed Creative Request Brief to your Jira submission reduces kickoff delay by an average of 4 business days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: INTAKE & CONTACT WORKFLOW */}
        <section id="intake" className="section-wrapper">
          <div className="content-max-width">
            <div className="section-header-block">
              <div className="section-kicker">
                <span>Section 04</span>
                <span>•</span>
                <span>Work Intake &amp; Routing</span>
              </div>
              <h2 className="section-title">Intake &amp; Contact Workflow</h2>
              <p className="section-lead">
                To protect team bandwidth and ensure efficient routing, the NCC utilizes a dual-path intake model. Select the pathway that corresponds to your team’s engagement status.
              </p>
            </div>

            <div className="intake-routing-card">
              <div className="intake-routing-header">
                <h3>Select Your Engagement Pathway</h3>
                <p>
                  Established partners communicate directly with assigned leads; ad-hoc and new requests are submitted via our centralized Jira Service Desk.
                </p>
              </div>

              <div className="dual-path-grid">
                {/* PATH A */}
                <div className="routing-path-panel">
                  <span className="path-badge path-a-badge">
                    Path A • Dedicated Partnership
                  </span>

                  <h4 className="path-title">Established Partners &amp; Subcommittees</h4>

                  <p className="path-desc">
                    For national subcommittees and regional directors that already have an active working relationship and an assigned NCC Brand Lead or Partner Lead.
                  </p>

                  <div className="path-instructions-box">
                    <h5>Routing Instructions</h5>
                    <p style={{ fontSize: '0.875rem', color: 'var(--oa-gray-600)', marginBottom: '14px' }}>
                      Coordinate directly with your strategist via your dedicated project channels or reach our partner desks directly:
                    </p>

                    <div className="contact-email-row">
                      <Mail size={16} color="var(--primary-red)" />
                      <div>
                        <span>Partner Strategy: </span>
                        <code>comms-partner@oa-scouting.org</code>
                      </div>
                    </div>

                    <div className="contact-email-row">
                      <Mail size={16} color="var(--primary-red)" />
                      <div>
                        <span>General Leadership: </span>
                        <code>communications@oa-scouting.org</code>
                      </div>
                    </div>
                  </div>

                  <a
                    href="mailto:comms-partner@oa-scouting.org?subject=NCC%20Partner%20Request%20Follow-up"
                    className="jira-btn-secondary"
                  >
                    <span>Contact Your Assigned Lead</span>
                    <Mail size={16} />
                  </a>
                </div>

                {/* PATH B */}
                <div className="routing-path-panel">
                  <span className="path-badge path-b-badge">
                    Path B • Jira Service Desk
                  </span>

                  <h4 className="path-title">Ad-Hoc Requests &amp; External Teams</h4>

                  <p className="path-desc">
                    For lodge officers, section leadership, ad-hoc committee requests, or teams without an active NCC Brand Lead. All requests are tracked transparently in Jira.
                  </p>

                  <div className="path-instructions-box">
                    <h5>Direct Service Portals</h5>
                    <p style={{ fontSize: '0.875rem', color: 'var(--oa-gray-600)', marginBottom: '14px' }}>
                      Select the appropriate intake queue below. You will be prompted to authenticate with your official <strong>ArrowID</strong>:
                    </p>

                    <div className="jira-cta-stack">
                      <a
                        href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330"
                        target="_blank"
                        rel="noreferrer"
                        className="jira-btn-primary"
                      >
                        <span>Submit an OA Communications Request</span>
                        <ExternalLink size={18} />
                      </a>

                      <a
                        href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/332"
                        target="_blank"
                        rel="noreferrer"
                        className="jira-btn-secondary"
                      >
                        <span>Submit an OA Volunteer Board Revision</span>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="jira-auth-notice">
                    <ShieldCheck size={16} color="var(--success-green)" />
                    <span>Requires active ArrowID credentials for ticket submission and tracking.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive SLA & Pathway Assistant Tool */}
            <div className="simulator-banner" role="region" aria-label="Interactive Request Guidance">
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <HelpCircle size={28} color="#2563eb" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: '#1e3a8a', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
                    Unsure which turnaround SLA applies to your project?
                  </h4>
                  <p style={{ color: '#3b82f6', fontSize: '0.875rem', margin: '2px 0 0 0' }}>
                    Quickly check estimated timelines based on your project requirements.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value as any)}
                  aria-label="Select Project Type"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #bfdbfe',
                    fontSize: '0.875rem',
                    color: '#1e3a8a',
                    fontWeight: 500,
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="quick-web">Simple Web Update (PDF / text)</option>
                  <option value="moderate-web">Moderate Web Page (New Layout)</option>
                  <option value="complex-web">Complex Web Development</option>
                  <option value="standard-content">Standard Content Creation</option>
                  <option value="campaign">Quarterly Campaign (Multi-output)</option>
                  <option value="external-review">External Asset Review</option>
                </select>

                <div style={{
                  background: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--primary-red)',
                  border: '1px solid #bfdbfe'
                }}>
                  {projectType === 'quick-web' && '⏱ SLA: 48 Hours – 1 Week'}
                  {projectType === 'moderate-web' && '⏱ SLA: 2+ Weeks'}
                  {projectType === 'complex-web' && '⏱ SLA: 2+ Months'}
                  {projectType === 'standard-content' && '⏱ SLA: T-3 Months Pipeline'}
                  {projectType === 'campaign' && '⏱ SLA: T-3 Months (Quarterly)'}
                  {projectType === 'external-review' && '⏱ SLA: Mandatory 3-Week Review'}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="content-max-width">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo-lockup" style={{ marginBottom: '16px' }}>
                <div className="oa-brand-badge">
                  <span>OA</span>
                </div>
                <div className="brand-text-block">
                  <span className="sup-title" style={{ color: '#94a3b8' }}>National Committee</span>
                  <span className="main-title" style={{ color: '#ffffff' }}>Communications Subcommittee</span>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#94a3b8' }}>
                The official marketing, digital, and media operations arm of the Order of the Arrow, Scouting America's National Honor Society.
              </p>
            </div>

            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-links-list">
                <li><a href="#services" onClick={() => scrollToSection('services')}>Service Offerings</a></li>
                <li><a href="#timelines" onClick={() => scrollToSection('timelines')}>Timelines &amp; SLAs</a></li>
                <li><a href="#policies" onClick={() => scrollToSection('policies')}>Policies &amp; Standards</a></li>
                <li><a href="#intake" onClick={() => scrollToSection('intake')}>Intake &amp; Routing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Direct Intake Portals</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/330" target="_blank" rel="noreferrer">
                    Communications Request ↗
                  </a>
                </li>
                <li>
                  <a href="https://jira.oa-scouting.org/servicedesk/customer/portal/37/create/332" target="_blank" rel="noreferrer">
                    Volunteer Board Revision ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:comms-partner@oa-scouting.org">
                    Partner Desk Email ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Compliance &amp; Safety</h4>
              <ul className="footer-links-list">
                <li><a href="https://oa-scouting.org" target="_blank" rel="noreferrer">Scouting America Youth Protection</a></li>
                <li><a href="#policies" onClick={() => scrollToSection('policies')}>AI Usage Guidelines</a></li>
                <li><a href="#policies" onClick={() => scrollToSection('policies')}>LOOA Style Guide</a></li>
                <li><a href="https://oa-scouting.org" target="_blank" rel="noreferrer">National Committee Directory</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} Order of the Arrow, Scouting America. All rights reserved.
            </div>
            <div>
              Destination: <code>oa-scouting.org/ncc</code>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
