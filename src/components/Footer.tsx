import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <img src="/logo.png" alt="Neecop Logo" className="h-8 w-auto object-contain" style={{ filter: 'invert(1) brightness(2)', mixBlendMode: 'screen' }} />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Advancing India's energy and startup ecosystem through data-driven research and policy engagement.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/neecop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                title="Follow Neecop on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Our Story", to: "/about" },
                { label: "Institutional Engagement", to: "/partners" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Impact</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Our Work", to: "/initiatives" },
                { label: "Work In Numbers", to: "/work-in-numbers" },
                { label: "Platforms", to: "/platforms" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-white/50">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>contact@neecop.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Neecop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
