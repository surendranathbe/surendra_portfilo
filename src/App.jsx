import { useState, useEffect } from 'react'
import {
  Code2,
  Globe,
  Palette,
  Megaphone,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  RotateCw,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import NavBar from './components/nav-bar'
import HeroBanner from './components/HeroBanner'
import websiteDevImg from './assets/website_developement.png'
import erpSolutionImg from './assets/ERP_soluction.png'
import figmaUiUxImg from './assets/figma_image.png'
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

// ============================================================================
// Official Technology Vector Logos for Technology Expertise Section
// ============================================================================
function ReactTechLogo() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
      <g stroke="#00D8FE" strokeWidth="1.15" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function JavaTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <path d="M12.5 24.5C17.5 24.5 20.5 23.5 20.5 23.5L21.5 22C17 22.8 13 22.8 9.5 22.8C6.5 22.8 9.5 24.5 12.5 24.5Z" fill="#E76F00" />
      <path d="M10 20.5C14.5 20.5 22 19.5 22 19.5L22.8 18C17 19 11 19 7.5 19C4.5 19 7 20.5 10 20.5Z" fill="#E76F00" />
      <path d="M17.5 15.5C19.5 14.2 21 12 18 9.5C16.2 8 17 6.8 17.5 5.5C15.8 7 14.5 8.5 15.2 10.2C16 12 14.5 13.2 13 14.5C15 14.5 16.5 15 17.5 15.5Z" fill="#5382A1" />
      <path d="M12 13.5C13.2 12.2 14 10.5 12 8.5C10.8 7.2 11.5 6.2 12 5C10.5 6.2 9.5 7.5 10 9C10.8 10.5 9.5 11.5 8 12.5C9.5 12.5 11 13 12 13.5Z" fill="#E76F00" />
      <path d="M20.5 27C17 28 10 28 6.5 27C5 26.5 4 25.5 5.5 25.5C8 25.5 18.5 25.5 21.5 25.5C23 25.5 22 26.5 20.5 27Z" fill="#5382A1" />
    </svg>
  )
}

function SpringBootTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <rect width="32" height="32" rx="7" fill="#6DB33F" />
      <path d="M16 6C13.2 9.8 13.6 14.5 17 17.5C20.4 20.5 25 20.5 25 20.5C25 20.5 24.8 15.5 21.5 12.2C18.2 8.9 16 6 16 6Z" fill="#FFFFFF" fillOpacity="0.9" />
      <path d="M7 21C7 21 11.2 21.2 14.5 18.2C17.8 15.2 18.2 10.5 18.2 10.5C18.2 10.5 13.8 11.5 10.8 14.5C7.8 17.5 7 21 7 21Z" fill="#FFFFFF" />
      <path d="M13 19.5L19 13.5" stroke="#6DB33F" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MongoTechLogo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="34" fill="none">
      <path d="M12 2C12 2 6 8.5 6 14C6 17.5 8.5 20.5 12 22C15.5 20.5 18 17.5 18 14C18 8.5 12 2 12 2Z" fill="#13AA52" />
      <path d="M12 2V22C11.6 21.8 11.2 21.6 10.8 21.3C7.8 19.3 6.8 15.8 7.8 12.8C8.5 10.5 10.2 8.5 12 2Z" fill="#00ED64" />
      <path d="M11.8 14.2V21.8C11.8 21.8 11.7 20.5 11.7 18.5C11.7 16.5 11.8 14.2 11.8 14.2Z" fill="#FFFFFF" />
    </svg>
  )
}

function FigmaTechLogo() {
  return (
    <svg viewBox="0 0 38 57" width="22" height="34" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  )
}

function HtmlCssTechLogo() {
  return (
    <svg viewBox="0 0 38 32" width="38" height="32" fill="none">
      <g transform="translate(1, 2) scale(0.85)">
        <path d="M2 2L4.5 26L12 28.5L19.5 26L22 2H2Z" fill="#E44D26" />
        <path d="M12 4.2V26.2L17.8 24.3L19.8 4.2H12Z" fill="#F16529" />
        <path d="M6.5 7H17.5L17.1 11H12V14H16.8L16.2 19.8L12 21.1V18.2L14.2 17.6L14.4 15.5H12V15.5H8L7.2 7H6.5Z" fill="#FFFFFF" />
      </g>
      <g transform="translate(17, 2) scale(0.85)">
        <path d="M2 2L4.5 26L12 28.5L19.5 26L22 2H2Z" fill="#1572B6" />
        <path d="M12 4.2V26.2L17.8 24.3L19.8 4.2H12Z" fill="#33A9DC" />
        <path d="M6.5 7H17.5L17.1 11H12V14H16.8L16.2 19.8L12 21.1V18.2L14.2 17.6L14.4 15.5H12V15.5H8L7.2 7H6.5Z" fill="#FFFFFF" />
      </g>
    </svg>
  )
}

function PhpTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <ellipse cx="16" cy="16" rx="15" ry="10" fill="#777BB4" />
      <path d="M9.5 13H12.5C13.8 13 14.5 13.5 14.2 14.8C13.9 16.1 12.8 16.8 11.5 16.8H10.2L9.5 20H8L9.5 13ZM10.5 15.5H11.8C12.4 15.5 12.8 15.2 13 14.5C13.1 14 12.8 13.8 12.2 13.8H11L10.5 15.5Z" fill="#FFFFFF" />
      <path d="M15 13H16.5L15.8 16H18.2L18.8 13H20.3L18.8 20H17.3L18 17.2H15.6L15 20H13.5L15 13Z" fill="#FFFFFF" />
      <path d="M21 13H24C25.3 13 26 13.5 25.7 14.8C25.4 16.1 24.3 16.8 23 16.8H21.7L21 20H19.5L21 13ZM22 15.5H23.3C23.9 15.5 24.3 15.2 24.5 14.5C24.6 14 24.3 13.8 23.7 13.8H22.5L22 15.5Z" fill="#FFFFFF" />
    </svg>
  )
}

function PhotoshopTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <rect width="32" height="32" rx="7" fill="#001E36" />
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="#31A8FF" strokeWidth="1.5" />
      <path d="M8.5 10H13.2C15.3 10 16.5 11.2 16.5 13.1C16.5 15 15.3 16.2 13.2 16.2H10.7V22H8.5V10ZM10.7 14.3H12.9C13.8 14.3 14.3 13.8 14.3 13.1C14.3 12.4 13.8 11.9 12.9 11.9H10.7V14.3Z" fill="#31A8FF" />
      <path d="M17.5 19.8C18.1 20.3 19 20.7 20 20.7C21.1 20.7 21.6 20.2 21.6 19.6C21.6 17.5 17.2 18.5 17.2 15.1C17.2 13.3 18.7 12 20.8 12C21.8 12 22.7 12.3 23.3 12.8L22.5 14.4C22 14.1 21.4 13.8 20.6 13.8C19.7 13.8 19.2 14.2 19.2 14.8C19.2 16.8 23.6 15.8 23.6 19.3C23.6 21.2 22.1 22.4 19.9 22.4C18.6 22.4 17.6 22 16.8 21.3L17.5 19.8Z" fill="#31A8FF" />
    </svg>
  )
}

function CanvaTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <defs>
        <linearGradient id="canvaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" fill="url(#canvaLogoGrad)" />
      <path d="M21.5 12.5C20.2 10.8 18.2 10 16 10C12.1 10 9 12.8 9 16.8C9 20.6 11.9 23 15.8 23C18.2 23 20.5 21.8 21.8 19.8L20 18.6C19 20 17.5 20.8 15.8 20.8C13.2 20.8 11.2 19 11.2 16.5C11.2 14 13.1 12.2 15.8 12.2C17.4 12.2 18.8 12.8 19.8 14.2L21.5 12.5Z" fill="#FFFFFF" />
    </svg>
  )
}

function UiUxTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <rect width="32" height="32" rx="7" fill="#8B5CF6" fillOpacity="0.12" />
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="#8B5CF6" strokeWidth="1.2" strokeOpacity="0.3" />
      <rect x="6" y="6" width="20" height="14" rx="2" stroke="#8B5CF6" strokeWidth="1.8" fill="none" />
      <line x1="6" y1="10" x2="26" y2="10" stroke="#8B5CF6" strokeWidth="1.4" />
      <line x1="12" y1="10" x2="12" y2="20" stroke="#8B5CF6" strokeWidth="1.4" />
      <circle cx="8.5" cy="8" r="0.9" fill="#EC4899" />
      <circle cx="11" cy="8" r="0.9" fill="#8B5CF6" />
      <path d="M15 23L18 20L22 24L26 20" stroke="#EC4899" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="24" r="1.3" fill="#EC4899" />
    </svg>
  )
}

function MarketingTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <rect width="32" height="32" rx="7" fill="#F59E0B" fillOpacity="0.12" />
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="#F59E0B" strokeWidth="1.2" strokeOpacity="0.3" />
      <path d="M7 13V17H10L16 21V9L10 13H7Z" fill="#F59E0B" />
      <path d="M10 17L11.5 22H13.5L12 17" fill="#F59E0B" />
      <path d="M19 11C20.5 12.2 21.5 13.9 21.5 16C21.5 18.1 20.5 19.8 19 21" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 8C24.5 9.8 26 12.6 26 16C26 19.4 24.5 22.2 22 24" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SeoTechLogo() {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" fill="none">
      <rect width="32" height="32" rx="7" fill="#10B981" fillOpacity="0.12" />
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="#10B981" strokeWidth="1.2" strokeOpacity="0.3" />
      <circle cx="14" cy="14" r="6" stroke="#10B981" strokeWidth="2" fill="none" />
      <line x1="18.5" y1="18.5" x2="24" y2="24" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M11 16V14M14 16V11M17 16V13" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 10L14 7L18 9" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// 6 Important Technologies displayed initially in one row
const initialTechnologies = [
  { name: 'React', icon: ReactTechLogo },
  { name: 'Java', icon: JavaTechLogo },
  { name: 'Spring Boot', icon: SpringBootTechLogo },
  { name: 'MongoDB', icon: MongoTechLogo },
  { name: 'Figma', icon: FigmaTechLogo },
  { name: 'HTML & CSS', icon: HtmlCssTechLogo },
]

// 6 Additional Technologies revealed via "View More Technologies"
const moreTechnologies = [
  { name: 'PHP', icon: PhpTechLogo },
  { name: 'Photoshop', icon: PhotoshopTechLogo },
  { name: 'Canva', icon: CanvaTechLogo },
  { name: 'UI/UX Tools', icon: UiUxTechLogo },
  { name: 'Digital Marketing Tools', icon: MarketingTechLogo },
  { name: 'SEO', icon: SeoTechLogo },
]

// ============================================================================
// Service Cards Visual Artwork (Images & Bespoke Vector Graphics)
// ============================================================================

// 04. Graphic & Poster Design: Professional business posters & promotional banners
function GraphicDesignIllustration() {
  return (
    <svg viewBox="0 0 340 185" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="posterMainGrad" x1="0" y1="0" x2="140" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="60%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="posterSubGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id="studioBgGrad" x1="0" y1="0" x2="340" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF5FF" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
      </defs>
      <rect width="340" height="185" rx="10" fill="url(#studioBgGrad)" />

      {/* Studio Crop Marks & Design Grid Lines */}
      <line x1="20" y1="20" x2="30" y2="20" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="30" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="320" y1="20" x2="310" y2="20" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="320" y1="20" x2="320" y2="30" stroke="#CBD5E1" strokeWidth="1" />

      {/* Layer 1: Background Secondary Creative Banner (Angled/Offset) */}
      <g transform="translate(180, 26) rotate(6)" filter="drop-shadow(0 8px 18px rgba(245, 158, 11, 0.15))">
        <rect width="105" height="135" rx="7" fill="url(#posterSubGrad)" />
        <rect x="8" y="10" width="89" height="115" rx="4" fill="#FFFFFF" fillOpacity="0.95" />
        {/* Banner Graphic Elements */}
        <circle cx="52" cy="46" r="24" fill="#F59E0B" fillOpacity="0.18" />
        <polygon points="52,28 66,42 52,56 38,42" fill="#EF4444" />
        <rect x="22" y="78" width="60" height="7" rx="3.5" fill="#0F172A" />
        <rect x="28" y="88" width="48" height="4" rx="2" fill="#64748B" />
        <rect x="36" y="98" width="32" height="10" rx="5" fill="#EF4444" />
        <text x="40" y="105" fontFamily="'Inter', sans-serif" fontSize="6" fontWeight="700" fill="#FFFFFF">50% OFF</text>
      </g>

      {/* Layer 2: Main Featured Event Poster (Standing Prominent) */}
      <g transform="translate(68, 18)" filter="drop-shadow(0 14px 28px rgba(79, 70, 229, 0.25))">
        <rect width="124" height="152" rx="8" fill="url(#posterMainGrad)" />

        {/* Poster Content */}
        {/* Top Header Tag */}
        <rect x="12" y="14" width="38" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.25" />
        <text x="16" y="19" fontFamily="'Inter', sans-serif" fontSize="5" fontWeight="700" fill="#FFFFFF">ANNUAL FORUM</text>
        <text x="86" y="19" fontFamily="'Inter', sans-serif" fontSize="6" fontWeight="800" fill="#FBCFE8">2026</text>

        {/* Hero Geometric Shape: Intersecting 3D Rings */}
        <ellipse cx="62" cy="62" rx="32" ry="14" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.9" transform="rotate(-25 62 62)" />
        <ellipse cx="62" cy="62" rx="32" ry="14" stroke="#F472B6" strokeWidth="2.5" fill="none" opacity="0.8" transform="rotate(25 62 62)" />
        <circle cx="62" cy="62" r="10" fill="#FFFFFF" />
        <circle cx="62" cy="62" r="5" fill="#7C3AED" />

        {/* Main Poster Typography */}
        <text x="12" y="96" fontFamily="'Playfair Display', Georgia, serif" fontSize="13" fontWeight="800" fill="#FFFFFF" letterSpacing="0.05em">INNOVATE</text>
        <text x="12" y="108" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="700" fill="#FBCFE8" letterSpacing="0.1em">DIGITAL SUMMIT</text>
        <line x1="12" y1="114" x2="112" y2="114" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" />

        {/* Date, Venue & Barcode Stamp */}
        <text x="12" y="124" fontFamily="'Inter', sans-serif" fontSize="5.5" fontWeight="600" fill="#FFFFFF">NOV 24 - 26, 2026</text>
        <text x="12" y="132" fontFamily="'Inter', sans-serif" fontSize="5" fontWeight="500" fill="#E0E7FF">TECH METROPOLIS</text>

        {/* Mini Barcode */}
        <g transform="translate(86, 126)">
          <rect x="0" y="0" width="1.5" height="12" fill="#FFFFFF" />
          <rect x="3" y="0" width="2.5" height="12" fill="#FFFFFF" />
          <rect x="7" y="0" width="1" height="12" fill="#FFFFFF" />
          <rect x="10" y="0" width="3" height="12" fill="#FFFFFF" />
          <rect x="15" y="0" width="1.5" height="12" fill="#FFFFFF" />
          <rect x="18" y="0" width="2" height="12" fill="#FFFFFF" />
        </g>
      </g>

      {/* Floating Color Swatches Palette Badge */}
      <g transform="translate(222, 116)" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.1))">
        <rect width="86" height="34" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="10" y="14" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="700" fill="#0A1128">Brand Palette</text>
        <circle cx="16" cy="24" r="5" fill="#2563EB" />
        <circle cx="30" cy="24" r="5" fill="#7C3AED" />
        <circle cx="44" cy="24" r="5" fill="#EC4899" />
        <circle cx="58" cy="24" r="5" fill="#F59E0B" />
        <circle cx="72" cy="24" r="5" fill="#10B981" />
      </g>
    </svg>
  )
}

// 05. Video Editing (CapCut): Professional video timeline & preview workstation
function VideoEditingIllustration() {
  return (
    <svg viewBox="0 0 340 185" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="videoBgGrad" x1="0" y1="0" x2="340" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B132B" />
          <stop offset="100%" stopColor="#1C2541" />
        </linearGradient>
        <linearGradient id="videoFrameGrad" x1="0" y1="0" x2="170" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>
      <rect width="340" height="185" rx="10" fill="url(#videoBgGrad)" />

      {/* Top Video Preview & Media Shelf Area */}
      {/* Left Media Tools Bin */}
      <rect x="16" y="16" width="60" height="82" rx="6" fill="#151E38" stroke="#253256" strokeWidth="0.8" />
      <text x="22" y="28" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#64748B">CAPCUT TOOLS</text>
      <rect x="22" y="34" width="22" height="14" rx="3" fill="#2563EB" />
      <path d="M30 38L36 41L30 44V38Z" fill="#FFFFFF" />
      <rect x="48" y="34" width="22" height="14" rx="3" fill="#1E2A4A" />
      <text x="52" y="44" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#94A3B8">FX</text>
      <rect x="22" y="52" width="22" height="14" rx="3" fill="#1E2A4A" />
      <text x="26" y="62" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#94A3B8">✂</text>
      <rect x="48" y="52" width="22" height="14" rx="3" fill="#1E2A4A" />
      <text x="52" y="62" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#94A3B8">♫</text>
      <rect x="22" y="70" width="48" height="18" rx="3" fill="#111A33" />
      <text x="26" y="81" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" fill="#00D8FE">4K HDR 60fps</text>

      {/* Main Video Preview Player Monitor */}
      <g filter="drop-shadow(0 6px 16px rgba(0,0,0,0.4))">
        <rect x="84" y="16" width="168" height="82" rx="6" fill="#000000" stroke="#334155" strokeWidth="1" />
        {/* Simulated Live Video Scene (Cinematic Lighting) */}
        <rect x="86" y="18" width="164" height="78" rx="4" fill="url(#videoFrameGrad)" />
        {/* Stage / Cinematic Silhouette */}
        <circle cx="168" cy="48" r="16" fill="#FFFFFF" fillOpacity="0.25" />
        <ellipse cx="168" cy="80" rx="34" ry="18" fill="#0A1128" />
        <circle cx="168" cy="54" r="8" fill="#0A1128" />

        {/* Overlay Playback Controls */}
        <circle cx="168" cy="54" r="12" fill="#0F172A" fillOpacity="0.7" stroke="#FFFFFF" strokeWidth="1" />
        <polygon points="166,49 173,54 166,59" fill="#FFFFFF" />

        {/* Timecode Badge */}
        <rect x="92" y="76" width="48" height="14" rx="3" fill="#000000" fillOpacity="0.65" />
        <text x="96" y="86" fontFamily="'Inter', monospace" fontSize="7.5" fontWeight="700" fill="#00ED64">00:03:14:22</text>
      </g>

      {/* Right Inspector Panel */}
      <rect x="260" y="16" width="64" height="82" rx="6" fill="#151E38" stroke="#253256" strokeWidth="0.8" />
      <text x="266" y="28" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#64748B">COLOR GRADE</text>
      <rect x="266" y="34" width="52" height="6" rx="2" fill="#2563EB" />
      <circle cx="296" cy="37" r="4" fill="#FFFFFF" />
      <rect x="266" y="46" width="52" height="6" rx="2" fill="#7C3AED" />
      <circle cx="282" cy="49" r="4" fill="#FFFFFF" />
      <rect x="266" y="58" width="52" height="6" rx="2" fill="#EC4899" />
      <circle cx="304" cy="61" r="4" fill="#FFFFFF" />
      <rect x="266" y="72" width="52" height="16" rx="3" fill="#2563EB" />
      <text x="274" y="82" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">EXPORT 4K</text>

      {/* Bottom Multi-Track Timeline Interface */}
      <rect x="16" y="106" width="308" height="66" rx="6" fill="#0F172A" stroke="#253256" strokeWidth="1" />

      {/* Time Ruler */}
      <rect x="16" y="106" width="308" height="12" fill="#151E38" />
      <line x1="30" y1="118" x2="310" y2="118" stroke="#334155" strokeWidth="0.8" />
      <text x="40" y="115" fontFamily="'Inter', monospace" fontSize="6" fill="#64748B">00:00</text>
      <text x="100" y="115" fontFamily="'Inter', monospace" fontSize="6" fill="#64748B">01:00</text>
      <text x="160" y="115" fontFamily="'Inter', monospace" fontSize="6" fill="#64748B">02:00</text>
      <text x="220" y="115" fontFamily="'Inter', monospace" fontSize="6" fill="#64748B">03:00</text>
      <text x="280" y="115" fontFamily="'Inter', monospace" fontSize="6" fill="#64748B">04:00</text>

      {/* Track 1: Video A/V Clips with Transitions */}
      <rect x="36" y="122" width="56" height="14" rx="3" fill="#2563EB" />
      <text x="40" y="132" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" fill="#FFFFFF">Clip_A.mp4</text>
      <polygon points="94,129 97,124 100,129 97,134" fill="#00D8FE" />
      <rect x="102" y="122" width="70" height="14" rx="3" fill="#3B82F6" />
      <text x="106" y="132" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" fill="#FFFFFF">B_Roll_Studio.mov</text>
      <polygon points="174,129 177,124 180,129 177,134" fill="#00D8FE" />
      <rect x="182" y="122" width="68" height="14" rx="3" fill="#2563EB" />
      <text x="186" y="132" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" fill="#FFFFFF">Cinematic_4K.mp4</text>
      <rect x="254" y="122" width="58" height="14" rx="3" fill="#1D4ED8" />

      {/* Track 2: Audio Waveform Track */}
      <rect x="36" y="139" width="276" height="14" rx="3" fill="#064E3B" />
      {/* Audio Waveforms */}
      <g stroke="#10B981" strokeWidth="1.2" strokeLinecap="round">
        <line x1="42" y1="146" x2="42" y2="146" /> <line x1="46" y1="143" x2="46" y2="149" />
        <line x1="50" y1="141" x2="50" y2="151" /> <line x1="54" y1="144" x2="54" y2="148" />
        <line x1="58" y1="140" x2="58" y2="152" /> <line x1="62" y1="143" x2="62" y2="149" />
        <line x1="66" y1="141" x2="66" y2="151" /> <line x1="70" y1="145" x2="70" y2="147" />
        <line x1="74" y1="142" x2="74" y2="150" /> <line x1="78" y1="140" x2="78" y2="152" />
        <line x1="82" y1="144" x2="82" y2="148" /> <line x1="86" y1="141" x2="86" y2="151" />
        <line x1="90" y1="143" x2="90" y2="149" /> <line x1="94" y1="140" x2="94" y2="152" />
        <line x1="98" y1="142" x2="98" y2="150" /> <line x1="102" y1="145" x2="102" y2="147" />
        <line x1="106" y1="141" x2="106" y2="151" /> <line x1="110" y1="139" x2="110" y2="153" />
        <line x1="114" y1="142" x2="114" y2="150" /> <line x1="118" y1="144" x2="118" y2="148" />
        <line x1="122" y1="140" x2="122" y2="152" /> <line x1="126" y1="142" x2="126" y2="150" />
        <line x1="130" y1="145" x2="130" y2="147" /> <line x1="134" y1="141" x2="134" y2="151" />
        <line x1="138" y1="139" x2="138" y2="153" /> <line x1="142" y1="143" x2="142" y2="149" />
        <line x1="146" y1="140" x2="146" y2="152" /> <line x1="150" y1="144" x2="150" y2="148" />
        <line x1="154" y1="142" x2="154" y2="150" /> <line x1="158" y1="141" x2="158" y2="151" />
        <line x1="162" y1="145" x2="162" y2="147" /> <line x1="166" y1="140" x2="166" y2="152" />
        <line x1="170" y1="142" x2="170" y2="150" /> <line x1="174" y1="139" x2="174" y2="153" />
        <line x1="178" y1="143" x2="178" y2="149" /> <line x1="182" y1="141" x2="182" y2="151" />
        <line x1="186" y1="144" x2="186" y2="148" /> <line x1="190" y1="140" x2="190" y2="152" />
        <line x1="194" y1="142" x2="194" y2="150" /> <line x1="198" y1="145" x2="198" y2="147" />
        <line x1="202" y1="141" x2="202" y2="151" /> <line x1="206" y1="139" x2="206" y2="153" />
        <line x1="210" y1="143" x2="210" y2="149" /> <line x1="214" y1="140" x2="214" y2="152" />
        <line x1="218" y1="144" x2="218" y2="148" /> <line x1="222" y1="142" x2="222" y2="150" />
        <line x1="226" y1="141" x2="226" y2="151" /> <line x1="230" y1="145" x2="230" y2="147" />
        <line x1="234" y1="140" x2="234" y2="152" /> <line x1="238" y1="142" x2="238" y2="150" />
        <line x1="242" y1="139" x2="242" y2="153" /> <line x1="246" y1="143" x2="246" y2="149" />
        <line x1="250" y1="141" x2="250" y2="151" /> <line x1="254" y1="144" x2="254" y2="148" />
        <line x1="258" y1="140" x2="258" y2="152" /> <line x1="262" y1="142" x2="262" y2="150" />
        <line x1="266" y1="145" x2="266" y2="147" /> <line x1="270" y1="141" x2="270" y2="151" />
        <line x1="274" y1="139" x2="274" y2="153" /> <line x1="278" y1="143" x2="278" y2="149" />
        <line x1="282" y1="140" x2="282" y2="152" /> <line x1="286" y1="144" x2="286" y2="148" />
        <line x1="290" y1="142" x2="290" y2="150" /> <line x1="294" y1="141" x2="294" y2="151" />
        <line x1="298" y1="145" x2="298" y2="147" /> <line x1="302" y1="140" x2="302" y2="152" />
      </g>

      {/* Track 3: Subtitles / Dynamic Captions */}
      <rect x="52" y="156" width="46" height="8" rx="2" fill="#D97706" fillOpacity="0.85" />
      <rect x="110" y="156" width="58" height="8" rx="2" fill="#D97706" fillOpacity="0.85" />
      <rect x="180" y="156" width="50" height="8" rx="2" fill="#D97706" fillOpacity="0.85" />
      <rect x="242" y="156" width="60" height="8" rx="2" fill="#D97706" fillOpacity="0.85" />

      {/* Vertical Red Playhead Needle */}
      <line x1="168" y1="106" x2="168" y2="172" stroke="#EF4444" strokeWidth="1.8" />
      <polygon points="164,106 172,106 168,112" fill="#EF4444" />
    </svg>
  )
}

// 5 Services Data for Section 04
const servicesData = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'I create modern, responsive and user-friendly websites tailored to business requirements. From professional business websites to dynamic web applications, I focus on clean design, performance, SEO and seamless user experiences across all devices.',
    image: websiteDevImg,
  },
  {
    number: '02',
    title: 'Custom ERP Solutions',
    description:
      'I develop customized ERP solutions designed to simplify business operations and improve productivity. From management dashboards to database-driven workflows, I focus on building structured, reliable and scalable business applications.',
    image: erpSolutionImg,
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'I design intuitive and visually appealing digital interfaces that make applications easy to understand and use. Using Figma, I create wireframes, prototypes and structured layouts with a strong focus on usability and consistency.',
    image: figmaUiUxImg,
  },
  {
    number: '04',
    title: 'Graphic & Poster Design',
    description:
      'I create attractive and professional graphic designs for businesses and digital brands. From promotional posters to social media creatives, I focus on visual consistency, creative layouts and effective brand communication.',
    illustration: GraphicDesignIllustration,
  },
  {
    number: '05',
    title: 'Video Editing (CapCut)',
    description:
      'I create engaging and visually appealing videos for digital platforms using CapCut. From promotional videos to social media reels, I focus on clean transitions, attractive visuals, timing and storytelling.',
    illustration: VideoEditingIllustration,
  },
]

// ============================================================================
// Ongoing Projects Visual Illustrations & Data
// 1) Sridevi Sarees Collection
// 2) Prime Real Estate
// 3) Event Management
// 4) Enterprise Project (uses erpSolutionImg)
// ============================================================================

// 01. Sridevi Sarees Collection: Luxury boutique storefront & silk drape visualizer
function SrideviSareesIllustration() {
  return (
    <svg viewBox="0 0 340 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="ongoing-illus-svg">
      <defs>
        <linearGradient id="sareeBgGrad" x1="0" y1="0" x2="340" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A0845" />
          <stop offset="50%" stopColor="#4B1248" />
          <stop offset="100%" stopColor="#1E0533" />
        </linearGradient>
        <linearGradient id="goldSilkGrad" x1="0" y1="0" x2="200" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="35%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="palluCrimsonGrad" x1="0" y1="0" x2="160" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E11D48" />
          <stop offset="60%" stopColor="#9F1239" />
          <stop offset="100%" stopColor="#4C0519" />
        </linearGradient>
      </defs>
      <rect width="340" height="165" rx="10" fill="url(#sareeBgGrad)" />

      {/* Decorative Gold Mandala / Motif Accents */}
      <circle cx="280" cy="40" r="45" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35" />
      <circle cx="280" cy="40" r="30" stroke="#FDE68A" strokeWidth="0.8" opacity="0.25" />
      <circle cx="50" cy="130" r="35" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.2" />

      {/* Left Storefront Preview Card */}
      <g filter="drop-shadow(0 4px 14px rgba(0,0,0,0.4))">
        <rect x="20" y="20" width="135" height="125" rx="8" fill="#1C062E" stroke="#701A75" strokeWidth="1" />
        <rect x="20" y="20" width="135" height="26" rx="8" fill="#2E0854" />
        <text x="30" y="37" fontFamily="'Playfair Display', Georgia, serif" fontSize="9" fontWeight="700" fill="#FDE68A" letterSpacing="0.6">
          SRIDEVI SAREES
        </text>
        <path d="M 40 55 Q 60 48 85 58 T 130 52 L 142 120 Q 95 135 32 118 Z" fill="url(#palluCrimsonGrad)" />
        <path d="M 42 58 Q 62 52 87 62 T 132 56" stroke="url(#goldSilkGrad)" strokeWidth="2.5" fill="none" />
        <path d="M 38 72 Q 62 66 90 76 T 136 70" stroke="url(#goldSilkGrad)" strokeWidth="1.8" fill="none" opacity="0.85" />
        <path d="M 34 86 Q 62 80 93 90 T 140 84" stroke="url(#goldSilkGrad)" strokeWidth="1.8" fill="none" opacity="0.7" />
        <rect x="28" y="122" width="60" height="16" rx="3" fill="#0F031A" opacity="0.9" />
        <text x="33" y="133" fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="700" fill="#34D399">₹18,500</text>
        <rect x="94" y="122" width="52" height="16" rx="3" fill="#D97706" />
        <text x="99" y="133" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">★ 4.9 Silk</text>
      </g>

      {/* Right Column: E-Commerce UI Elements */}
      <rect x="170" y="24" width="70" height="18" rx="9" fill="#701A75" />
      <text x="180" y="36" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#FDE68A">Kanchipuram</text>
      <rect x="246" y="24" width="54" height="18" rx="9" fill="#3B0764" stroke="#701A75" strokeWidth="0.8" />
      <text x="254" y="36" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#E9D5FF">Banarasi</text>

      <rect x="170" y="50" width="148" height="38" rx="6" fill="#1E0733" stroke="#4C1D95" strokeWidth="0.8" />
      <rect x="176" y="56" width="28" height="26" rx="4" fill="url(#goldSilkGrad)" />
      <text x="210" y="66" fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="700" fill="#FFFFFF">Pure Royal Zari Silk</text>
      <text x="210" y="78" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#C084FC">Handwoven • Festive Edition</text>

      <rect x="170" y="96" width="148" height="48" rx="6" fill="#2E0854" stroke="#701A75" strokeWidth="0.8" />
      <text x="180" y="112" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="700" fill="#FDE68A">Checkout Ready</text>
      <text x="180" y="124" fontFamily="'Inter', sans-serif" fontSize="7" fill="#E2E8F0">Razorpay Integrated</text>
      <rect x="180" y="130" width="60" height="8" rx="4" fill="#10B981" />
      <text x="252" y="137" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#10B981">Verified 100%</text>
    </svg>
  )
}

// 02. Prime Real Estate: Luxury modern villa architectural showcase
function PrimeRealEstateIllustration() {
  return (
    <svg viewBox="0 0 340 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="ongoing-illus-svg">
      <defs>
        <linearGradient id="reBgGrad" x1="0" y1="0" x2="340" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B132B" />
          <stop offset="50%" stopColor="#1C2541" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="glassPoolGrad" x1="0" y1="0" x2="180" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="warmLightGrad" x1="0" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="340" height="165" rx="10" fill="url(#reBgGrad)" />

      {/* Modern Luxury Villa Structure */}
      <g filter="drop-shadow(0 6px 16px rgba(0,0,0,0.5))">
        <polygon points="26,125 26,55 120,40 180,40 180,125" fill="#1E293B" stroke="#334155" strokeWidth="1" />
        <rect x="70" y="32" width="115" height="42" rx="3" fill="#0F172A" stroke="#475569" strokeWidth="0.8" />
        <rect x="80" y="38" width="44" height="30" rx="2" fill="url(#warmLightGrad)" opacity="0.9" />
        <line x1="102" y1="38" x2="102" y2="68" stroke="#78350F" strokeWidth="1" />
        <rect x="130" y="38" width="48" height="30" rx="2" fill="url(#warmLightGrad)" opacity="0.85" />
        <line x1="154" y1="38" x2="154" y2="68" stroke="#78350F" strokeWidth="1" />

        <rect x="36" y="78" width="48" height="42" rx="2" fill="url(#warmLightGrad)" opacity="0.75" />
        <rect x="92" y="78" width="35" height="47" rx="1" fill="#0A0F1D" stroke="#64748B" strokeWidth="0.8" />
        <rect x="134" y="78" width="40" height="42" rx="2" fill="url(#warmLightGrad)" opacity="0.65" />

        <polygon points="26,128 180,128 170,152 36,152" fill="url(#glassPoolGrad)" />
        <line x1="42" y1="136" x2="165" y2="136" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 8" opacity="0.7" />
        <line x1="48" y1="144" x2="160" y2="144" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5" />
      </g>

      {/* Floating Property Meta HUD Card on Right */}
      <g filter="drop-shadow(0 4px 16px rgba(0,0,0,0.45))">
        <rect x="195" y="20" width="128" height="125" rx="8" fill="#151F36" stroke="#2563EB" strokeWidth="1" />
        <rect x="204" y="28" width="70" height="16" rx="4" fill="#0284C7" />
        <text x="210" y="39" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">PRIME REALTY</text>
        <circle cx="308" cy="36" r="4" fill="#10B981" />

        <text x="204" y="60" fontFamily="'Playfair Display', Georgia, serif" fontSize="13" fontWeight="800" fill="#FFFFFF">$1,450,000</text>
        <text x="204" y="72" fontFamily="'Inter', sans-serif" fontSize="7" fill="#94A3B8">Beverly Hills & Silicon Oasis</text>

        <rect x="204" y="80" width="110" height="36" rx="4" fill="#0B132B" stroke="#1E293B" strokeWidth="0.6" />
        <text x="210" y="93" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#60A5FA">4 Beds</text>
        <text x="246" y="93" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#60A5FA">3 Baths</text>
        <text x="280" y="93" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#60A5FA">3.8k sqft</text>
        <text x="210" y="106" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#94A3B8">Virtual 3D Tour Ready</text>

        <rect x="204" y="122" width="110" height="15" rx="3" fill="#2563EB" />
        <text x="222" y="132" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">Explore Listings ↗</text>
      </g>
    </svg>
  )
}

// 03. Event Management: Stage coordination & celebration timeline portal
function EventManagementIllustration() {
  return (
    <svg viewBox="0 0 340 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="ongoing-illus-svg">
      <defs>
        <linearGradient id="eventBgGrad" x1="0" y1="0" x2="340" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#120A2A" />
          <stop offset="50%" stopColor="#25124D" />
          <stop offset="100%" stopColor="#0B061A" />
        </linearGradient>
        <linearGradient id="spotlightGrad1" x1="50" y1="10" x2="110" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spotlightGrad2" x1="170" y1="10" x2="170" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="spotlightGrad3" x1="290" y1="10" x2="230" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="340" height="165" rx="10" fill="url(#eventBgGrad)" />

      {/* Stage Spotlights Cones */}
      <polygon points="50,10 10,150 120,150" fill="url(#spotlightGrad1)" />
      <polygon points="170,10 120,150 220,150" fill="url(#spotlightGrad2)" />
      <polygon points="290,10 220,150 330,150" fill="url(#spotlightGrad3)" />

      {/* Overhead Lighting Truss Grid */}
      <line x1="30" y1="14" x2="310" y2="14" stroke="#4C1D95" strokeWidth="2" />
      <circle cx="50" cy="14" r="5" fill="#C084FC" />
      <circle cx="110" cy="14" r="4" fill="#38BDF8" />
      <circle cx="170" cy="14" r="5" fill="#F472B6" />
      <circle cx="230" cy="14" r="4" fill="#38BDF8" />
      <circle cx="290" cy="14" r="5" fill="#C084FC" />

      {/* Confetti / Sparkle Particles */}
      <circle cx="80" cy="50" r="1.5" fill="#FDE047" />
      <circle cx="130" cy="70" r="1.8" fill="#FFFFFF" />
      <circle cx="210" cy="45" r="1.5" fill="#38BDF8" />
      <circle cx="260" cy="75" r="2" fill="#F472B6" />

      {/* Left Event Schedule Card */}
      <g filter="drop-shadow(0 4px 14px rgba(0,0,0,0.5))">
        <rect x="22" y="32" width="140" height="112" rx="8" fill="#1B1038" stroke="#7C3AED" strokeWidth="1" />
        <rect x="22" y="32" width="140" height="24" rx="8" fill="#2E1B5B" />
        <text x="32" y="48" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="700" fill="#E9D5FF">EVENT COORDINATOR</text>
        <rect x="30" y="64" width="34" height="34" rx="4" fill="#7C3AED" />
        <text x="38" y="76" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">NOV</text>
        <text x="37" y="92" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="800" fill="#FFFFFF">24</text>
        <text x="70" y="74" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="700" fill="#FFFFFF">Grand Gala 2026</text>
        <text x="70" y="85" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#C4B5FD">Royal Ballroom & Lawn</text>
        <text x="70" y="96" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#34D399">RSVP: 520 Confirmed</text>
        <rect x="30" y="108" width="124" height="26" rx="4" fill="#120A2A" stroke="#372266" strokeWidth="0.8" />
        <text x="36" y="120" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight="600" fill="#E2E8F0">Catering, Decor & AV Stage</text>
        <text x="36" y="129" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#A78BFA">Vendor Contracts Locked</text>
      </g>

      {/* Right Live Management HUD */}
      <g filter="drop-shadow(0 4px 14px rgba(0,0,0,0.4))">
        <rect x="176" y="38" width="142" height="106" rx="8" fill="#180F33" stroke="#EC4899" strokeWidth="0.8" />
        <rect x="184" y="48" width="60" height="16" rx="4" fill="#DB2777" />
        <text x="190" y="59" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" fill="#FFFFFF">LIVE PORTAL</text>
        <circle cx="304" cy="56" r="4" fill="#10B981" />

        <text x="184" y="80" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="700" fill="#FFFFFF">Interactive Timeline</text>
        <rect x="184" y="88" width="124" height="6" rx="3" fill="#311B61" />
        <rect x="184" y="88" width="85" height="6" rx="3" fill="url(#spotlightGrad1)" />

        <rect x="184" y="102" width="124" height="32" rx="4" fill="#100824" />
        <text x="190" y="114" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="600" fill="#38BDF8">Guest QR Check-in</text>
        <text x="190" y="125" fontFamily="'Inter', sans-serif" fontSize="6.5" fill="#94A3B8">Automated SMS & Email Alerts</text>
      </g>
    </svg>
  )
}

// 4 Ongoing Projects Data for Section 05
const ongoingProjectsData = [
  {
    id: 'sridevi-sarees',
    number: '01',
    title: 'Sridevi Sarees Collection',
    category: 'E-Commerce & Ethnic Fashion',
    illustration: SrideviSareesIllustration,
    status: 'In Progress (85%)',
    progress: 85,
    shortDesc: 'Luxury boutique e-commerce storefront with dynamic silk collections and real-time checkout.',
    fullDesc:
      'An exclusive digital boutique engineered for traditional Indian ethnic wear and designer sarees. Features an interactive saree visualizer, dynamic fabric filtering, fast cart checkout, and mobile-first shopping experience with secure payment gateway integration.',
    tags: ['React 19', 'Tailwind CSS', 'Node.js', 'Razorpay', 'State Management'],
    link: '#contact',
    linkText: 'Explore Storefront',
  },
  {
    id: 'prime-real-estate',
    number: '02',
    title: 'Prime Real Estate',
    category: 'Property Portal & Lead CRM',
    illustration: PrimeRealEstateIllustration,
    status: 'Active Testing (75%)',
    progress: 75,
    shortDesc: 'High-end real estate portal for luxury property listings, virtual tours and client lead capture.',
    fullDesc:
      'A comprehensive modern property marketplace connecting premium buyers with luxury residential and commercial listings. Equipped with interactive property maps, EMI calculators, virtual 3D tour embeds, and automated lead routing for real estate consultants.',
    tags: ['React', 'Spring Boot', 'MongoDB', 'Maps API', 'REST Services'],
    link: '#contact',
    linkText: 'View Property Portal',
  },
  {
    id: 'event-management',
    number: '03',
    title: 'Event Management',
    category: 'Booking & Vendor Ecosystem',
    illustration: EventManagementIllustration,
    status: 'Development (65%)',
    progress: 65,
    shortDesc: 'All-in-one event scheduling, guest RSVP tracking, and catering vendor coordination system.',
    fullDesc:
      'An end-to-end digital event planning and vendor management system. Simplifies banquet reservations, guest RSVP tracking, catering logistics, vendor contracts, and dynamic schedule timelines for corporate and private gatherings.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'Tailwind', 'Cloudinary'],
    link: '#contact',
    linkText: 'View Event Platform',
  },
  {
    id: 'enterprise-project',
    number: '04',
    title: 'Enterprise Project',
    category: 'Custom ERP & Business Operations',
    image: erpSolutionImg,
    status: 'Enterprise Deploy (90%)',
    progress: 90,
    shortDesc: 'Comprehensive cloud ERP suite for departmental analytics, inventory and automated billing.',
    fullDesc:
      'A scalable cloud-native Enterprise Resource Planning (ERP) platform architected for corporate workflows. Unifies multi-department operations, supply chain inventory, real-time fiscal reporting, human resource modules, and strict role-based access control.',
    tags: ['React', 'Java', 'Spring Boot', 'Microservices', 'SQL Server'],
    link: '#contact',
    linkText: 'Open ERP Demo',
  },
]


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
  const [showAllTech, setShowAllTech] = useState(false)
  const [ongoingSlideIndex, setOngoingSlideIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState({})
  const [isOngoingAutoPlay, setIsOngoingAutoPlay] = useState(true)

  const totalOngoingProjects = ongoingProjectsData.length // 4

  const handleNextOngoing = () => {
    setOngoingSlideIndex((prev) => (prev >= totalOngoingProjects - 1 ? 0 : prev + 1))
  }

  const handlePrevOngoing = () => {
    setOngoingSlideIndex((prev) => (prev <= 0 ? totalOngoingProjects - 1 : prev - 1))
  }

  const handleCardHover = (id, isHovered) => {
    if (isHovered) {
      setIsOngoingAutoPlay(false)
    } else {
      setIsOngoingAutoPlay(true)
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: isHovered,
    }))
  }

  const toggleCardFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Auto-play sliding animation with hover pause
  useEffect(() => {
    if (!isOngoingAutoPlay) return
    const timer = setInterval(() => {
      setOngoingSlideIndex((prev) => (prev >= totalOngoingProjects - 1 ? 0 : prev + 1))
    }, 4500)
    return () => clearInterval(timer)
  }, [isOngoingAutoPlay, totalOngoingProjects])

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

        {/* ==================================================================
            Technology Expertise Section – Premium Horizontal Layout
            ================================================================== */}
        <section id="skills" className="technology-section">
          <div className="technology-container">
            {/* 1. Section Header – Single Row */}
            <div className="technology-header">
              <div className="technology-heading">
                <span className="technology-label">MY TECHNICAL EXPERTISE</span>
                <h2 className="technology-title">Technologies I Work With</h2>
              </div>
              <div className="technology-actions">
                <p className="technology-tagline">Tools that power my digital solutions.</p>
                <button
                  type="button"
                  onClick={() => setShowAllTech((prev) => !prev)}
                  className="technology-more-btn"
                  aria-expanded={showAllTech}
                >
                  <span>{showAllTech ? 'Show Less' : 'View More Technologies'}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`technology-btn-icon ${showAllTech ? 'rotated' : ''}`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 2. Initial Row – Exactly Six Important Technologies */}
            <div className="technology-grid">
              {initialTechnologies.map((tech) => {
                const IconComponent = tech.icon
                return (
                  <div key={tech.name} className="technology-card">
                    <div className="technology-icon">
                      <IconComponent />
                    </div>
                    <span className="technology-name">{tech.name}</span>
                  </div>
                )
              })}
            </div>

            {/* 3. Expanded Technologies Grid – Revealed On Click */}
            {showAllTech && (
              <div className="technology-expanded">
                {moreTechnologies.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <div key={tech.name} className="technology-card">
                      <div className="technology-icon">
                        <IconComponent />
                      </div>
                      <span className="technology-name">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* ==================================================================
            Section 04 – Services & Digital Solutions
            Placed immediately after the Technology Expertise section
            ================================================================== */}
        <section id="services" className="services-section">
          <div className="services-container">
            {/* 1. Section Header and Tagline */}
            <div className="services-header">
              <span className="services-label">WHAT I OFFER</span>
              <h2 className="services-title">Services & Digital Solutions</h2>
              <div className="services-accent-line">
                <span className="services-line" />
                <span className="services-dot" />
                <span className="services-line" />
              </div>
              <p className="services-tagline">
                Transforming ideas into powerful digital experiences through technology, creativity and thoughtful design.
              </p>
            </div>
          </div>

          {/* 2. Continuous Right-to-Left Sliding Marquee Track */}
          <div className="services-slider" aria-label="Services showcase">
            <div className="services-track">
              {/* Primary Sequence of 5 Service Cards */}
              <div className="services-group">
                {servicesData.map((service, index) => {
                  const Illustration = service.illustration
                  return (
                    <div key={`srv-1-${index}`} className="service-card">
                      <div className="service-image">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="service-img"
                            loading="lazy"
                          />
                        ) : Illustration ? (
                          <Illustration />
                        ) : null}
                      </div>
                      <div className="service-content">
                        <div className="service-card-top">
                          <span className="service-number">{service.number}</span>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                      </div>
                      <a href="#contact" className="service-link">
                        <span>Explore Service</span>
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  )
                })}
              </div>

              {/* Duplicated Sequence for Continuous Seamless Loop */}
              <div className="services-group" aria-hidden="true">
                {servicesData.map((service, index) => {
                  const Illustration = service.illustration
                  return (
                    <div key={`srv-2-${index}`} className="service-card">
                      <div className="service-image">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="service-img"
                            loading="lazy"
                          />
                        ) : Illustration ? (
                          <Illustration />
                        ) : null}
                      </div>
                      <div className="service-content">
                        <div className="service-card-top">
                          <span className="service-number">{service.number}</span>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                      </div>
                      <a href="#contact" className="service-link" tabIndex={-1}>
                        <span>Explore Service</span>
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            Section 05 – Ongoing Projects
            col-lg-4: Badge, Heading, Tagline, Controls
            col-lg-8: Sliding Part with 3D Backward Flip Cards on Hover
            ================================================================== */}
        <section id="projects" className="ongoing-section">
          <div className="ongoing-container">
            <div className="ongoing-row">
              {/* Left Column: col-lg-4 (Tagline, Heading & Controls) */}
              <div className="ongoing-col-info col-lg-4">
                <div className="ongoing-badge-wrap">
                  <span className="ongoing-badge">
                    <span className="ongoing-badge-dot" />
                    CURRENT WORK IN PROGRESS
                  </span>
                </div>

                <h2 className="ongoing-heading">
                  Ongoing <span className="ongoing-heading-grad">Projects</span>
                </h2>

                <div className="ongoing-accent-bar">
                  <span className="ongoing-bar-line" />
                  <span className="ongoing-bar-dot" />
                  <span className="ongoing-bar-line" />
                </div>

                <p className="ongoing-tagline">
                  A curated preview of dynamic digital solutions, e-commerce boutiques, and enterprise applications currently under active engineering. Hover over any project card to flip it backward, reveal architecture details, and open live previews.
                </p>

                {/* Interactive Project Tracker & Slider Navigation */}
                <div className="ongoing-controls-box">
                  <div className="ongoing-counter-wrap">
                    <span className="ongoing-counter-current">0{ongoingSlideIndex + 1}</span>
                    <span className="ongoing-counter-slash">/</span>
                    <span className="ongoing-counter-total">0{totalOngoingProjects}</span>
                  </div>

                  <div className="ongoing-nav-btns">
                    <button
                      type="button"
                      onClick={handlePrevOngoing}
                      className="ongoing-arrow-btn"
                      aria-label="Previous Project"
                      title="Previous Project"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextOngoing}
                      className="ongoing-arrow-btn"
                      aria-label="Next Project"
                      title="Next Project"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="ongoing-dots">
                    {ongoingProjectsData.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setOngoingSlideIndex(idx)}
                        className={`ongoing-dot ${idx === ongoingSlideIndex ? 'active' : ''}`}
                        aria-label={`Go to project 0${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Highlights Summary Badges */}
                <div className="ongoing-summary-chips">
                  <span className="ongoing-chip">
                    <Sparkles size={14} className="ongoing-chip-icon" />
                    4 Active Builds
                  </span>
                  <span className="ongoing-chip">
                    <RotateCw size={14} className="ongoing-chip-icon" />
                    Hover to Flip Backward 3D
                  </span>
                </div>
              </div>

              {/* Right Column: col-lg-8 (Project Sliding Part) */}
              <div
                className="ongoing-col-slider col-lg-8"
                onMouseEnter={() => setIsOngoingAutoPlay(false)}
                onMouseLeave={() => setIsOngoingAutoPlay(true)}
              >
                <div className="ongoing-slider-window">
                  <div
                    className="ongoing-slider-track"
                    style={{
                      transform: `translateX(calc(-${ongoingSlideIndex} * (var(--ongoing-card-w, 360px) + 20px)))`,
                    }}
                  >
                    {[...ongoingProjectsData, ...ongoingProjectsData].map((project, index) => {
                      const Illustration = project.illustration
                      const isFlipped = flippedCards[project.id]
                      const uniqueKey = `${project.id}-${index}`

                      return (
                        <div
                          key={uniqueKey}
                          className={`ongoing-flip-card ${isFlipped ? 'is-flipped' : ''}`}
                          onMouseEnter={() => handleCardHover(project.id, true)}
                          onMouseLeave={() => handleCardHover(project.id, false)}
                          onClick={() => toggleCardFlip(project.id)}
                          tabIndex={0}
                          role="region"
                          aria-label={`Project: ${project.title}. Hover or click to flip card.`}
                        >
                          <div className="ongoing-card-inner">
                            {/* FRONT FACE OF CARD */}
                            <div className="ongoing-card-front">
                              <div>
                                <div className="ongoing-front-top">
                                  <span className="ongoing-status-badge">
                                    <span className="ongoing-status-pulse" />
                                    {project.status}
                                  </span>
                                  <span className="ongoing-num-badge">{project.number}</span>
                                </div>

                                <div className="ongoing-image-box">
                                  {project.image ? (
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      className="ongoing-project-img"
                                      loading="lazy"
                                    />
                                  ) : Illustration ? (
                                    <Illustration />
                                  ) : null}
                                </div>

                                <div className="ongoing-front-info">
                                  <span className="ongoing-front-cat">{project.category}</span>
                                  <h3 className="ongoing-front-title">{project.title}</h3>
                                  <p className="ongoing-front-desc">{project.shortDesc}</p>
                                </div>
                              </div>

                              <div className="ongoing-flip-hint">
                                <RotateCw size={13} className="ongoing-hint-icon" />
                                <span>Hover to flip backward & explore</span>
                              </div>
                            </div>

                            {/* BACK FACE OF CARD (REVEALED ON 3D BACKWARD FLIP) */}
                            <div className="ongoing-card-back">
                              <div className="ongoing-back-header">
                                <div className="ongoing-back-top">
                                  <span className="ongoing-back-cat">{project.category}</span>
                                  <span className="ongoing-back-status">{project.status}</span>
                                </div>
                                <h3 className="ongoing-back-title">{project.title}</h3>
                                <div className="ongoing-back-divider" />
                                <p className="ongoing-back-desc">{project.fullDesc}</p>
                              </div>

                              <div className="ongoing-back-middle">
                                <span className="ongoing-tech-heading">Technologies Deployed:</span>
                                <div className="ongoing-back-tags">
                                  {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="ongoing-back-tag">
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="ongoing-progress-container">
                                  <div className="ongoing-progress-label">
                                    <span>Milestone Completion</span>
                                    <span>{project.progress}%</span>
                                  </div>
                                  <div className="ongoing-progress-track">
                                    <div
                                      className="ongoing-progress-bar"
                                      style={{ width: `${project.progress}%` }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="ongoing-back-footer">
                                <a
                                  href={project.link}
                                  className="ongoing-back-btn"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    if (project.link === '#contact') {
                                      const contactEl = document.getElementById('contact')
                                      if (contactEl) {
                                        contactEl.scrollIntoView({ behavior: 'smooth' })
                                      }
                                    }
                                  }}
                                >
                                  <span>{project.linkText}</span>
                                  <ArrowUpRight size={16} />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
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
