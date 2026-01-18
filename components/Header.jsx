// components/Header.jsx
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
        <div className="relative w-40 md:w-56 lg:w-72 h-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo Dis-moi"
              width={200}
              height={200}
              style={{ width: "auto", height: "auto", maxWidth: "100%", minWidth: "200px" }}
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
          className="p-2 rounded-lg hover:bg-gray-100 transition mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={28} color="var(--color-primary)" />
          ) : (
            <Menu size={28} color="var(--color-primary)" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="bg-white border-t-2 border-[var(--color-mint)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="titre block text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          #desktop-menu {
            display: flex !important;
          }
          #menu-button {
            display: none !important;
          }
          #mobile-menu {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          #desktop-menu {
            display: none !important;
          }
          #menu-button {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}