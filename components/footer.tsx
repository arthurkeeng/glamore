import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-pink-600">Glamour</span>
              <span className="text-xl font-bold">Salon</span>
            </Link>
            <p className="text-sm text-gray-500">
              Your destination for beauty and relaxation. Professional services tailored just for you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#haircuts" className="text-gray-500 hover:text-pink-600">
                  Haircuts & Styling
                </Link>
              </li>
              <li>
                <Link href="/services#coloring" className="text-gray-500 hover:text-pink-600">
                  Hair Coloring
                </Link>
              </li>
              <li>
                <Link href="/services#treatments" className="text-gray-500 hover:text-pink-600">
                  Hair Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#nails" className="text-gray-500 hover:text-pink-600">
                  Manicure & Pedicure
                </Link>
              </li>
              <li>
                <Link href="/services#facials" className="text-gray-500 hover:text-pink-600">
                  Facials & Skincare
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-500 hover:text-pink-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-pink-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-pink-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-pink-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-500 hover:text-pink-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Glamour Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
