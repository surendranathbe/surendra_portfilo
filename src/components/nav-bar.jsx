import { useState, useEffect } from 'react'
import { Send, ArrowUpRight, Menu, X } from 'lucide-react'
import '../CSS/Home.css'

// Premium BS Logo with Blue Gradient & Underline Swoosh
function BSLogo({ className }) {
  return (
    <svg
      viewBox="0 0 54 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BS Logo"
    >
      <defs>
        <linearGradient id="bsBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="45%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="swooshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      {/* BS Monogram Letters in Serif */}
      <text
        x="2"
        y="28"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="29"
        fontWeight="800"
        fill="url(#bsBlueGradient)"
        letterSpacing="-1.5"
      >
        BS
      </text>
      {/* Dynamic Curved Swoosh Underline */}
      <path
        d="M 2 34 C 14 42 36 41 50 25 C 50 25 36 37 17 35 C 8 34 2 34 2 34 Z"
        fill="url(#swooshGradient)"
      />
    </svg>
  )
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // Detect scroll to add slight shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const scrollPos = window.scrollY + 120
      navLinks.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 869) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleLinkClick = (href, id) => {
    setActiveSection(id)
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>
      <div className="container">
        {/* Left Section - Brand Identity */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#home', 'home')
          }}
          className="brandWrapper"
        >
          <div className="logoContainer">
            <BSLogo className="logoSvg" />
          </div>
          <div className="divider" />
          <span className="brandName">Bezawada Surendra Nath</span>
        </a>

        {/* Center Section - Navigation Links */}
        <nav className="navLinks" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.href, link.id)
                }}
                className={`navLink ${isActive ? 'navLinkActive' : ''}`}
              >
                {link.name}
                {isActive && <span className="activeUnderline" />}
              </a>
            )
          })}
        </nav>

        {/* Right Section - CTA Button */}
        <div className="ctaWrapper">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#contact', 'contact')
            }}
            className="ctaButton"
          >
            <Send className="ctaSendIcon" />
            <span>Enquiry Now</span>
            <ArrowUpRight className="ctaArrowIcon" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="mobileMenuToggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Responsive Navigation Dropdown */}
      {isOpen && (
        <div className="mobileDropdown">
          <div className="mobileNavLinks">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href, link.id)
                  }}
                  className={`mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#contact', 'contact')
            }}
            className="mobileCtaButton"
          >
            <Send size={15} style={{ transform: 'rotate(-10deg)' }} />
            <span>Enquiry Now</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  )
}
