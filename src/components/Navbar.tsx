import { Moon, Sun, Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "./ThemeProvider"
import { cn } from "../lib/utils"
import { Logo } from "./Logo"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Section 1: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 flex items-center justify-center">
                <Logo />
              </div>
              <span className="font-bold text-xl text-secondary dark:text-primary">CarePlus</span>
            </Link>
          </div>

          {/* Section 2: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Section 3: CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-secondary" />
              )}
            </button>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-all hover:shadow-lg hover:-translate-y-0.5">
              Get Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-secondary" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors">
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
