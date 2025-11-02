'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#Features' },
    { name: 'Como Funciona', href: '#how' },
    { name: 'Blog', href: '#blog' },
    { name: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Main Navigation Container - Rounded Pill */}
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-full px-8 py-4 flex items-center justify-between border border-gray-700/50">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-base font-mono font-medium text-white">
              sec2
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons - Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#login"
              className="text-white hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
            >
              Login
            </a>
            <a
              href="#demo"
              className="bg-primary-600 hover:bg-primary-700 px-5 py-2.5 rounded-full text-white font-medium text-sm transition-colors shadow-lg shadow-primary-600/30"
            >
              Começar agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-sm rounded-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-primary-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-2 pt-2">
                <a
                  href="#login"
                  className="flex-1 px-3 py-2 text-white hover:text-primary-400 transition-colors duration-200 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
                <a
                  href="#demo"
                  className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-medium text-center transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Começar agora
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
