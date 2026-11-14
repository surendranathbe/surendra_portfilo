import { useState, useEffect } from 'react'
import { ArrowUpRight, Code2, Layout, Globe } from 'lucide-react'
import profileImage from '../assets/profile_banner.png'
import bannerBg from '../assets/banner_bg.png'
import styles from '../CSS/HeroBanner.module.css'

// SVGs for the 6 Tech Stack Badges
function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="30">
      <circle cx="0" cy="0" r="2.1" fill="#00D8FE" />
      <g stroke="#00D8FE" strokeWidth="1.2" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="none">
      <path d="M12.5 24.5C17.5 24.5 20.5 23.5 20.5 23.5L21.5 22C17 22.8 13 22.8 9.5 22.8C6.5 22.8 9.5 24.5 12.5 24.5Z" fill="#E76F00" />
      <path d="M10 20.5C14.5 20.5 22 19.5 22 19.5L22.8 18C17 19 11 19 7.5 19C4.5 19 7 20.5 10 20.5Z" fill="#E76F00" />
      <path d="M17.5 15.5C19.5 14.2 21 12 18 9.5C16.2 8 17 6.8 17.5 5.5C15.8 7 14.5 8.5 15.2 10.2C16 12 14.5 13.2 13 14.5C15 14.5 16.5 15 17.5 15.5Z" fill="#5382A1" />
      <path d="M12 13.5C13.2 12.2 14 10.5 12 8.5C10.8 7.2 11.5 6.2 12 5C10.5 6.2 9.5 7.5 10 9C10.8 10.5 9.5 11.5 8 12.5C9.5 12.5 11 13 12 13.5Z" fill="#E76F00" />
      <path d="M20.5 27C17 28 10 28 6.5 27C5 26.5 4 25.5 5.5 25.5C8 25.5 18.5 25.5 21.5 25.5C23 25.5 22 26.5 20.5 27Z" fill="#5382A1" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 28 28" width="30" height="30" fill="none" stroke="#6366F1" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 19 2 14 7 9" />
      <line x1="11" y1="22" x2="17" y2="6" />
      <polyline points="21 9 26 14 21 19" />
    </svg>
  )
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="32" fill="none">
      <path d="M12 2C12 2 6 8.5 6 14C6 17.5 8.5 20.5 12 22C15.5 20.5 18 17.5 18 14C18 8.5 12 2 12 2Z" fill="#13AA52" />
      <path d="M12 2V22C11.6 21.8 11.2 21.6 10.8 21.3C7.8 19.3 6.8 15.8 7.8 12.8C8.5 10.5 10.2 8.5 12 2Z" fill="#00ED64" />
      <path d="M11.8 14.2V21.8C11.8 21.8 11.7 20.5 11.7 18.5C11.7 16.5 11.8 14.2 11.8 14.2Z" fill="#FFFFFF" />
    </svg>
  )
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" width="22" height="32" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

// Flat-Topped Rounded Hexagon Card Component
function HexagonCard({ children, className = '', isDecor = false, title = '' }) {
  return (
    <div
      className={`${styles.hexCard} ${isDecor ? styles.hexDecorCard : ''} ${className}`}
      title={title}
    >
      <svg className={styles.hexSvg} viewBox="0 0 100 88" fill="none">
        <path
          d="M 31, 4 
             L 69, 4 
             Q 74, 4 77, 9 
             L 94, 38 
             Q 98, 44 94, 50 
             L 77, 79 
             Q 74, 84 69, 84 
             L 31, 84 
             Q 26, 84 23, 79 
             L 6, 50 
             Q 2, 44 6, 38 
             L 23, 9 
             Q 26, 4 31, 4 Z"
          className={isDecor ? styles.hexDecorPath : styles.hexPath}
        />
      </svg>
      {!isDecor && <div className={styles.hexIconInner}>{children}</div>}
    </div>
  )
}

const typingRoles = [
  'Full Stack Developer',
  'UI/UX Developer',
  'Website Developer',
  'Software Developer',
]

export default function HeroBanner() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  // Smooth typewriter effect iterating through the roles
  useEffect(() => {
    const currentRole = typingRoles[roleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        setTypingSpeed(90)

        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200)
          return
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        setTypingSpeed(45)

        if (displayedText.length <= 1) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % typingRoles.length)
          setTypingSpeed(220)
          return
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex, typingSpeed])

  const activeRole = typingRoles[roleIndex]

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Banner Graphic */}
      <div className={styles.bgImageContainer}>
        <img
          src={bannerBg}
          alt="Portfolio Banner Background"
          className={styles.bgImage}
        />
      </div>

      <div className={styles.heroContainer}>
        {/* ==================================================================
            Left Column - Introduction & Content
            ================================================================== */}
        <div className={styles.leftColumn}>
          {/* 1. Welcome badge */}
          <div className={styles.welcomeBadge}>
            <span className={styles.welcomeBadgeDot} />
            <span>Welcome to my official portfolio</span>
          </div>

          {/* 2. Heading "Hello, I'm" */}
          <h2 className={styles.greeting}>Hello, I&apos;m</h2>

          {/* 3. Main heading "Bezawada Surendra Nath" */}
          <h1 className={styles.mainHeading}>Bezawada Surendra Nath</h1>

          {/* 4. Animated typing text with purple pipes */}
          <div className={styles.typingContainer}>
            <span className={styles.typingPipe}>|</span>
            <span className={styles.typingText}>{displayedText}</span>
            <span className={styles.typingPipe}>|</span>
          </div>

          {/* 5. Three skill badges */}
          <div className={styles.skillBadgesRow}>
            <div
              className={`${styles.skillBadge} ${
                activeRole === 'Full Stack Developer' ? styles.skillBadgeActive : ''
              }`}
            >
              <Code2 size={15} />
              <span>Full Stack Developer</span>
            </div>

            <div
              className={`${styles.skillBadge} ${
                activeRole === 'UI/UX Developer' ? styles.skillBadgeActive : ''
              }`}
            >
              <Layout size={15} />
              <span>UI/UX Developer</span>
            </div>

            <div
              className={`${styles.skillBadge} ${
                activeRole === 'Website Developer' ? styles.skillBadgeActive : ''
              }`}
            >
              <Globe size={15} />
              <span>Website Developer</span>
            </div>
          </div>

          {/* 6. Description */}
          <p className={styles.description}>
            I specialize in building high-performance, pixel-perfect web applications
            with modern architectures, responsive designs, and seamless user experiences.
          </p>

          {/* 7. CTA buttons */}
          <div className={styles.ctaButtonsGroup}>
            <a href="#projects" className={styles.primaryCta}>
              <span>View My Work</span>
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className={styles.secondaryCta}>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* ==================================================================
            Right Column - Profile & Orbiting Tech Stack
            ================================================================== */}
        <div className={styles.rightColumn}>
          <div className={styles.orbitStage}>
            {/* Connecting Circuit Trace Lines with Junction Nodes */}
            <svg className={styles.circuitLinesSvg} viewBox="0 0 580 520">
              <defs>
                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C7D2FE" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              {/* Node 1: React to Profile Ring */}
              <line x1="97" y1="55" x2="145" y2="115" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="97" cy="55" r="3.5" fill="#818CF8" />

              {/* Node 2: Java to Profile Ring */}
              <line x1="483" y1="55" x2="435" y2="115" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="483" cy="55" r="3.5" fill="#818CF8" />

              {/* Node 3: Code to Profile Ring */}
              <line x1="30" y1="260" x2="80" y2="260" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="30" cy="260" r="3.5" fill="#818CF8" />

              {/* Node 4: MongoDB to Profile Ring */}
              <line x1="550" y1="260" x2="500" y2="260" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="550" cy="260" r="3.5" fill="#818CF8" />

              {/* Node 5: Figma to Profile Ring */}
              <line x1="97" y1="465" x2="145" y2="405" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="97" cy="465" r="3.5" fill="#818CF8" />

              {/* Node 6: Database to Profile Ring */}
              <line x1="483" y1="465" x2="435" y2="405" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="483" cy="465" r="3.5" fill="#818CF8" />
            </svg>

            {/* Central Circular Profile Frame with Glowing Neon Border */}
            <div className={styles.profileRing}>
              <div className={styles.profileAperture}>
                <img
                  src={profileImage}
                  alt="Bezawada Surendra Nath"
                  className={styles.profileImage}
                />
              </div>

              {/* "Available for Projects" Badge */}
              <div className={styles.availableBadge}>
                <span className={styles.availableGreenDot} />
                <span className={styles.availableText}>Available for Projects</span>
              </div>
            </div>

            {/* Six Floating Hexagonal Technology Cards */}
            {/* 1. Top-Left: React */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosReact}`}
              title="React"
            >
              <ReactIcon />
            </HexagonCard>

            {/* 2. Top-Right: Java */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosJava}`}
              title="Java"
            >
              <JavaIcon />
            </HexagonCard>

            {/* 3. Middle-Left: HTML / Code */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosCode}`}
              title="HTML / Code"
            >
              <CodeIcon />
            </HexagonCard>

            {/* 4. Middle-Right: MongoDB */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosMongo}`}
              title="MongoDB"
            >
              <MongoIcon />
            </HexagonCard>

            {/* 5. Bottom-Left: Figma */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosFigma}`}
              title="Figma"
            >
              <FigmaIcon />
            </HexagonCard>

            {/* 6. Bottom-Right: Database */}
            <HexagonCard
              className={`${styles.hexCardPos} ${styles.hexPosDatabase}`}
              title="Database / SQL"
            >
              <DatabaseIcon />
            </HexagonCard>
          </div>
        </div>
      </div>
    </section>
  )
}
