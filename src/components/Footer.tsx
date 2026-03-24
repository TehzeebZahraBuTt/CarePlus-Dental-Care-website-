import { Facebook, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center">
                <Logo />
              </div>
              <span className="font-bold text-xl text-white">CarePlus</span>
            </div>
            <p className="text-secondary-foreground/80 max-w-xs">
              Providing healthy teeth and confident smiles with state-of-the-art dental care facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Our Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.facebook.com/share/1CWgPH7GkZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-secondary-foreground/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </div>
                <span>Facebook</span>
              </a>
              <a 
                href="https://wa.me/qr/MDXWFBJR6RXEH1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-secondary-foreground/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/SMGV7DoW27PduFTJ6?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-secondary-foreground/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Location</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-secondary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} CarePlus Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
