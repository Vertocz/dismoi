'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/qui-sommes-nous', label: 'Qui sommes-nous ?' },
    { href: '/ateliers', label: 'Ateliers' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[var(--color-mint)]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative h-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo Dis-moi"
              width={200}
              height={200}
              className="w-32 md:w-56 lg:w-72 h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav id="desktop-menu" className="items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="titre"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="menu-button"
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="mobile-menu">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="titre mobile-menu-link"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          #desktop-menu {
            display: flex !important;
          }
          #menu-button {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          #desktop-menu {
            display: none !important;
          }
          #menu-button {
            display: flex !important;
          }
        }

        .hamburger-button {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--color-mint) 0%, var(--color-pinky) 100%);
          border: none;
          border-radius: 12px;
          padding: 8px;
          cursor: pointer;
          margin-right: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .hamburger-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .hamburger-button:active {
          transform: scale(0.95);
        }

        .hamburger-line {
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .hamburger-line.open:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }

        .hamburger-line.open:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
          animation: fadeIn 0.3s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 88px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 400px;
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: slideDown 0.3s ease;
          border: 3px solid var(--color-mint);
        }

        .mobile-menu-link {
          display: block;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.4s ease backwards;
          margin: 0;
        }

        .mobile-menu-link:hover,
        .mobile-menu-link:active {
          transform: translateX(8px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}