import { Facebook, Twitter, Linkedin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const quickLinks = [
    { href: "#routes", label: "Popular Routes" },
    { href: "#amenities", label: "Amenities" },
    { href: "#planner", label: "Trip Planner" },
    { href: "#support", label: "Support" },
  ];

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Phone: {COMPANY_INFO.phone}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.support.hotline}</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

