'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-primary-600">
            Bright & Byrl
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Shop All
            </Link>
            <Link href="/shop?category=rings" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Rings
            </Link>
            <Link href="/shop?category=necklaces" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Necklaces
            </Link>
            <Link href="/shop?category=earrings" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Earrings
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/shop" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Shop All
              </Link>
              <Link href="/shop?category=rings" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Rings
              </Link>
              <Link href="/shop?category=necklaces" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Necklaces
              </Link>
              <Link href="/shop?category=earrings" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Earrings
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                About
              </Link>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

