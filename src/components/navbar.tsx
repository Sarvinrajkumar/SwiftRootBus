
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 shadow-lg backdrop-blur-md"
          : "py-5 bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-1">
          <span className="text-sm uppercase tracking-[0.3em] text-brand/80 font-semibold">
            Swift
          </span>
          <span className="text-2xl font-bold text-charcoal">Route</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center">
          {NAV_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-charcoal hover:text-brand transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="brand"
            size="lg"
            className="rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Book a seat
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-charcoal"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden pt-20">
            <nav className="flex flex-col items-center gap-6 p-8">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl text-charcoal hover:text-brand transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}

              <Button
                variant="brand"
                size="lg"
                className="mt-4 w-full max-w-xs rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a seat
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
