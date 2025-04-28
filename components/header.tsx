"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar } from "lucide-react"
import { usePathname } from "next/navigation"
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isSignedIn, user } = useUser()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="text-xl font-bold text-pink-600">Glamour</span>
            <span className="text-xl font-bold">Salon</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive("/") ? "text-pink-600" : "text-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive("/services") ? "text-pink-600" : "text-foreground"}`}
          >
            Services
          </Link>
          <Link
            href="/booking"
            className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive("/booking") ? "text-pink-600" : "text-foreground"}`}
          >
            Book Now
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive("/about") ? "text-pink-600" : "text-foreground"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive("/contact") ? "text-pink-600" : "text-foreground"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isSignedIn ? (
            <div className="flex items-center gap-4">
              <Link href="/my-bookings">
                <Button variant="ghost" size="icon" aria-label="My Bookings">
                  <Calendar className="h-5 w-5 text-pink-600" />
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col gap-6 p-6">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors hover:text-pink-600 ${isActive("/") ? "text-pink-600" : "text-foreground"}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium transition-colors hover:text-pink-600 ${isActive("/services") ? "text-pink-600" : "text-foreground"}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/booking"
              className={`text-lg font-medium transition-colors hover:text-pink-600 ${isActive("/booking") ? "text-pink-600" : "text-foreground"}`}
              onClick={closeMenu}
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium transition-colors hover:text-pink-600 ${isActive("/about") ? "text-pink-600" : "text-foreground"}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors hover:text-pink-600 ${isActive("/contact") ? "text-pink-600" : "text-foreground"}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {isSignedIn ? (
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/my-bookings" onClick={closeMenu}>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    My Bookings
                  </Button>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm">
                    Signed in as {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                  </span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-4">
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Sign Up</Button>
                </SignUpButton>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
