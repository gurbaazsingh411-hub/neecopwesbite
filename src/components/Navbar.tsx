import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Institutional Engagement", to: "/partners" },
    ]
  },
  {
    label: "Impact",
    children: [
      { label: "Work", to: "/initiatives" },
      { label: "Work In Numbers", to: "/work-in-numbers" },
      { label: "Platforms", to: "/platforms" },
    ]
  },
  { label: "Events", to: "/events" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Neecop Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors outline-none ${link.children.some(child => location.pathname === child.to)
                    ? "text-secondary font-semibold"
                    : "text-foreground/70 hover:text-foreground"
                  }`}>
                  {link.label} <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 p-2 bg-card/95 backdrop-blur-md border border-border mt-2">
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.to} asChild>
                      <Link
                        to={child.to}
                        className={`w-full cursor-pointer rounded-sm px-2 py-1.5 text-sm transition-colors ${location.pathname === child.to ? "text-secondary bg-secondary/10 font-medium" : "text-foreground/70"
                          }`}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.to
                  ? "text-secondary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button className="p-2 text-foreground/70 hover:text-secondary transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-y-auto max-h-[calc(100vh-64px)]"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-2">
                  {link.children ? (
                    <>
                      <div className="px-3 text-xs font-bold text-secondary uppercase tracking-widest opacity-70 border-l-2 border-secondary ml-1 py-1">
                        {link.label}
                      </div>
                      <div className="grid grid-cols-2 gap-2 pl-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setMobileOpen(false)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${location.pathname === child.to
                              ? "text-secondary bg-secondary/10 shadow-sm"
                              : "text-foreground/70 bg-muted/30"
                              }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.to!}
                      onClick={() => setMobileOpen(false)}
                      className={`px-3 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${location.pathname === link.to
                        ? "text-secondary bg-secondary/5 border border-secondary/20"
                        : "text-foreground/80 hover:bg-muted"
                        }`}
                    >
                      {link.label}
                      < ChevronDown className="h-4 w-4 opacity-30 -rotate-90" />
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex gap-2 mt-4">
                <Button size="lg" className="flex-1 bg-secondary text-secondary-foreground h-14 rounded-2xl font-bold" asChild>
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
