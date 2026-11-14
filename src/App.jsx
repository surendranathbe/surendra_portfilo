import { useState } from 'react'
import { Code2, Globe, Palette, Megaphone, CheckCircle2, ChevronRight } from 'lucide-react'
import NavBar from './components/nav-bar'
import HeroBanner from './components/HeroBanner'
import './CSS/Home.css'

// Exact BS Logo with Blue Gradient & Curved Underline Swoosh (as used in NavBar)
function BSLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 54 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BS Logo"
    >
      <defs>
        <linearGradient id="footerBsBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="45%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="footerSwooshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="55%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      {/* BS Monogram Letters in Serif */}
      <text
        x="2"
        y="28"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="29"
        fontWeight="800"
        fill="url(#footerBsBlueGradient)"
        letterSpacing="-1.5"
      >
        BS
      </text>
      {/* Dynamic Curved Swoosh Underline */}
      <path
        d="M 2 34 C 14 42 36 41 50 25 C 50 25 36 37 17 35 C 8 34 2 34 2 34 Z"
        fill="url(#footerSwooshGradient)"
      />
    </svg>
  )
}

// Custom SVGs for WhatsApp, LinkedIn, Gmail, and Diagonal Arrow
function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.33C8.94 7.33 8.67 7.4 8.44 7.64C8.22 7.89 7.59 8.48 7.59 9.69C7.59 10.9 8.47 12.07 8.6 12.24C8.72 12.41 10.31 14.88 12.77 15.93C13.36 16.18 13.81 16.33 14.17 16.45C14.76 16.63 15.3 16.61 15.73 16.54C16.21 16.47 17.2 15.94 17.41 15.36C17.61 14.78 17.61 14.28 17.55 14.18C17.49 14.07 17.33 14.01 17.08 13.88C16.84 13.76 15.63 13.16 15.4 13.08C15.18 13 15.01 12.96 14.85 13.21C14.68 13.46 14.21 14.01 14.07 14.18C13.93 14.34 13.78 14.36 13.54 14.24C13.3 14.12 12.51 13.86 11.58 13.03C10.86 12.39 10.37 11.6 10.23 11.35C10.09 11.11 10.21 10.98 10.34 10.86C10.45 10.75 10.59 10.57 10.71 10.42C10.84 10.27 10.88 10.17 10.96 10C11.04 9.84 11 9.7 10.94 9.58C10.88 9.45 10.41 8.29 10.21 7.82C10.02 7.36 9.83 7.42 9.68 7.41C9.54 7.41 9.38 7.33 9.11 7.33Z" />
    </svg>
  )
}

function LinkedInIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.62 1.62 0 1 0 1.62 1.62c0-.9-.73-1.62-1.62-1.62Z" />
    </svg>
  )
}

function GmailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className={className}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function ArrowDiagonalIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

// 4 Tabs Data for the About Section
const aboutTabsData = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    subtitle: 'Frontend & Backend Architecture',
    icon: Code2,
    badge: 'Core Expertise',
    heading: 'Full Stack Web Engineering',
    tagline: 'Architecting Scalable, Secure & Modern Web Solutions',
    description:
      'I specialize in building scalable, secure, and robust full-stack web applications from database modeling to responsive frontend interfaces. With extensive hands-on expertise in React, Node.js, Express, Java, and modern database systems, I engineer clean, maintainable codebases that solve real-world problems with high performance and reliability.',
    highlights: [
      'Modern Reactive Frontends with React, Vite & Component-Driven Architecture',
      'Scalable Backend Systems, Microservices & RESTful API Architecture',
      'Database Modeling & Schema Optimization (MongoDB, SQL & PostgreSQL)',
      'State Management, Security Best Practices & Fast Load Times',
      'Clean Code, Testable Modules & Git Version Controlled Workflows',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Java', 'REST APIs', 'Tailwind CSS'],
  },
  {
    id: 'website-designer',
    title: 'Website Designer',
    subtitle: 'Responsive & SEO-Optimized Sites',
    icon: Globe,
    badge: 'Hands-on Specialty',
    heading: 'Website Design & Development',
    tagline: 'Neat, Friendly, 100% Responsive Websites with SEO Built-In',
    description:
      'I have proven hands-on experience in designing and developing neat, user-friendly, and mobile-responsive websites with search engine optimization (SEO) built directly into the foundation. I focus on fast load speeds, pixel-perfect responsiveness across all screen sizes, clean semantic markup, and strategic on-page SEO that helps businesses rank higher on search engines and convert visitors into loyal clients.',
    highlights: [
      'Hands-on Experience in Creating Neat, Friendly & Mobile-First Websites',
      'Search Engine Optimization (On-Page SEO, Semantic Markup, Meta Tags & Sitemaps)',
      'High Core Web Vitals, Fast Loading Speeds & Asset Optimization',
      'Cross-Browser & Cross-Device Compatibility for Seamless Navigation',
      'Conversion-Optimized Layouts, Clear CTAs & Smooth User Journeys',
    ],
    tags: ['Responsive Web', 'On-Page SEO', 'Page Speed', 'Mobile Friendly', 'Semantic HTML', 'Performance'],
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    subtitle: 'Figma & Intuitive Interfaces',
    icon: Palette,
    badge: 'Design Craftsmanship',
    heading: 'UI/UX Interface & Experience Design',
    tagline: 'Human-Centered Digital Interfaces Built in Figma',
    description:
      'I craft visually captivating, intuitive, and modern user experiences using industry-standard tools like Figma. From wireframing initial concepts to building interactive high-fidelity clickable prototypes, design systems, and reusable component libraries, I ensure every interface feels effortless to navigate, aesthetically engaging, and tailored to user psychology.',
    highlights: [
      'Advanced Figma UI/UX Design, Auto-Layouts & Interactive Prototypes',
      'Wireframing, Information Architecture & User Flow Mapping',
      'Comprehensive Design Systems, Color Palettes & Typography Standards',
      'User-Centric Research, Usability Testing & Iterative Enhancements',
      'Pixel-Perfect Developer Handoffs with Complete Design Specs',
    ],
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    id: 'other-things',
    title: 'Other Things',
    subtitle: 'Poster Design & Digital Marketing',
    icon: Megaphone,
    badge: 'Creative & Marketing',
    heading: 'Poster Design & Digital Marketing',
    tagline: 'Compelling Visual Branding & Strategic Digital Marketing',
    description:
      'Beyond software engineering, I bring strong creative and marketing versatility as a skilled poster designer and digital marketer. I craft eye-catching promotional posters, social media banners, event flyers, and brand graphics that capture attention. Combined with strategic digital marketing insights, content positioning, and social campaign execution, I help brands amplify their reach and make a memorable visual impact.',
    highlights: [
      'Eye-Catching Promotional Poster Design & Event Graphics',
      'Social Media Creatives, Marketing Banners & Visual Storytelling',
      'Digital Marketing Strategy, Audience Targeting & Growth Tactics',
      'Brand Identity Assets, Cohesive Color Schemes & Typography',
      'Campaign Analytics, Engagement Optimization & Conversion Creatives',
    ],
    tags: ['Poster Design', 'Digital Marketing', 'Social Media Creatives', 'Graphic Design', 'Brand Strategy'],
  },
]

export default function App() {
  const [activeTabId, setActiveTabId] = useState('fullstack')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeTabData = aboutTabsData.find((tab) => tab.id === activeTabId) || aboutTabsData[0]

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Premium Navigation Bar */}
      <NavBar />

      <main className="pt-20">
        {/* Banner Section */}
        <HeroBanner />

        {/* ==================================================================
            About Section - 4 Interactive Tabs with Synchronized Right Content
            ================================================================== */}
        <section id="about" className="aboutSection">
          <div className="aboutContainer">
            {/* Section Header - Clean, Premium Minimalist "About Me" */}
            <div className="aboutSectionHeader">
              <h2 className="aboutMainTitle">
                <span className="aboutTitleDark">About </span>
                <span className="aboutTitleGrad">Me</span>
              </h2>
              <div className="aboutTitleBar">
                <span className="aboutTitleLine" />
                <span className="aboutTitleDot" />
                <span className="aboutTitleLine" />
              </div>
            </div>

            {/* Two-Column Tabs & Content Layout */}
            <div className="aboutLayoutGrid">
              {/* Left Column: 4 Tabs One by One */}
              <div className="aboutTabsList" role="tablist" aria-label="About tabs">
                {aboutTabsData.map((tab) => {
                  const IconComponent = tab.icon
                  const isActive = tab.id === activeTabId

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`aboutTabBtn ${isActive ? 'aboutTabBtnActive' : ''}`}
                    >
                      <div className="aboutTabIconBox">
                        <IconComponent size={20} />
                      </div>
                      <div className="aboutTabInfo">
                        <span className="aboutTabTitle">{tab.title}</span>
                        <span className="aboutTabSubtitle">{tab.subtitle}</span>
                      </div>
                      <ChevronRight className="aboutTabArrow" size={18} />
                    </button>
                  )
                })}
              </div>

              {/* Right Column: Dynamic Content Card */}
              <div className="aboutContentWrapper">
                <div key={activeTabData.id} className="aboutContentCard">
                  <div className="aboutCardTop">
                    <div className="aboutCardBadgeRow">
                      <div className="aboutCardActiveIndicator">
                        <span className="aboutCardActiveDot" />
                        <span className="aboutCardActiveTitle">{activeTabData.title}</span>
                      </div>
                      <span className="aboutCardBadge">{activeTabData.badge}</span>
                    </div>

                    <h3 className="aboutCardMainHeading">{activeTabData.heading}</h3>
                    <h4 className="aboutCardTagline">{activeTabData.tagline}</h4>
                    <p className="aboutCardDescription">{activeTabData.description}</p>

                    <div className="aboutHighlightsSection">
                      <h5 className="aboutHighlightsTitle">Key Capabilities & Expertise</h5>
                      <div className="aboutHighlightsList">
                        {activeTabData.highlights.map((item, idx) => (
                          <div key={idx} className="aboutHighlightItem">
                            <CheckCircle2 className="aboutCheckIcon" size={17} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="aboutCardFooter">
                    <span className="aboutTagsLabel">Technologies & Skills:</span>
                    <div className="aboutTagsRow">
                      {activeTabData.tags.map((tag, idx) => (
                        <span key={idx} className="aboutSkillPill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          Single Premium Footer Section
          ================================================================== */}
      <footer className="footerSection">
        <div className="footerTopContainer">
          <div className="footerGrid">
            {/* Column 1: Left Side - Brand Logo, Name & 5-Line Justified Content */}
            <div className="footerBrandCol">
              <div className="footerBrandHeader">
                <div className="footerLogoContainer">
                  <BSLogo className="footerLogoSvg" />
                </div>
                <div className="footerBrandDivider" />
                <h3 className="footerBrandName">Bezawada Surendra Nath</h3>
              </div>
              <p className="footerBioContent">
                A dedicated Full Stack Developer specializing in crafting high-performance,
                pixel-perfect web applications and seamless digital experiences.
                Passionate about modern software architectures, clean code standards,
                intuitive UI/UX design, and scalable backend solutions tailored to
                real-world business needs. Delivering complete end-to-end web engineering with precision.
              </p>
              <div className="footerStatusBadge">
                <span className="footerStatusDot" />
                <span>Available for Projects & Collaborations</span>
              </div>
            </div>

            {/* Column 2: Navigation Tabs */}
            <div className="footerLinksCol">
              <h4 className="footerColTitle">Navigation</h4>
              <ul className="footerNavList">
                <li><a href="#home" className="footerNavLink">Home</a></li>
                <li><a href="#about" className="footerNavLink">About</a></li>
                <li><a href="#projects" className="footerNavLink">Projects</a></li>
                <li><a href="#services" className="footerNavLink">Services</a></li>
                <li><a href="#contact" className="footerNavLink">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footerLinksCol">
              <h4 className="footerColTitle">Services</h4>
              <ul className="footerNavList">
                <li><span className="footerServiceItem">Full Stack Development</span></li>
                <li><span className="footerServiceItem">UI/UX & Web Design</span></li>
                <li><span className="footerServiceItem">Website Development</span></li>
                <li><span className="footerServiceItem">Database Architecture</span></li>
                <li><span className="footerServiceItem">API Integration & Cloud</span></li>
              </ul>
            </div>

            {/* Column 4: Contact Details (Clickable links with hover redirects) */}
            <div className="footerContactCol">
              <h4 className="footerColTitle">Contact Details</h4>
              <div className="footerContactList">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/918688119095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerContactCard footerWhatsappCard"
                  title="Direct Message on WhatsApp"
                >
                  <div className="footerContactIconBox whatsappIconBox">
                    <WhatsAppIcon />
                  </div>
                  <div className="footerContactInfo">
                    <span className="footerContactType">WhatsApp Number</span>
                    <span className="footerContactValue">+91 8688119095</span>
                  </div>
                  <ArrowDiagonalIcon className="footerCardArrow" />
                </a>

                {/* Gmail Link */}
                <a
                  href="mailto:surendranathbezawada@gmail.com"
                  className="footerContactCard footerGmailCard"
                  title="Send Direct Email"
                >
                  <div className="footerContactIconBox gmailIconBox">
                    <GmailIcon />
                  </div>
                  <div className="footerContactInfo">
                    <span className="footerContactType">Gmail Address</span>
                    <span className="footerContactValue">surendranathbezawada@gmail.com</span>
                  </div>
                  <ArrowDiagonalIcon className="footerCardArrow" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/surendra-nath-bezawada-627437277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerContactCard footerLinkedinCard"
                  title="Connect on LinkedIn"
                >
                  <div className="footerContactIconBox linkedinIconBox">
                    <LinkedInIcon />
                  </div>
                  <div className="footerContactInfo">
                    <span className="footerContactType">LinkedIn Profile</span>
                    <span className="footerContactValue">surendra-nath-bezawada</span>
                  </div>
                  <ArrowDiagonalIcon className="footerCardArrow" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar: Copyright & Back to Top */}
        <div className="footerBottomBar">
          <div className="footerBottomContainer">
            <p className="footerCopyright">
              © {new Date().getFullYear()} Bezawada Surendra Nath. All rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="footerBackToTop"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
