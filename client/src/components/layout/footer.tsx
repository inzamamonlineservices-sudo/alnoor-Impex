import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "WhatsApp", icon: "whatsapp", href: "#" },
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo-white-optimized.svg" 
                alt="Al Noor Impex Logo" 
                className="h-[60px] w-auto transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Connecting textile manufacturers and buyers worldwide with three decades of trusted partnership and quality assurance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <span className="text-2xl">
                    {social.icon === "linkedin" && "💼"}
                    {social.icon === "twitter" && "🐦"}
                    {social.icon === "facebook" && "📘"}
                    {social.icon === "whatsapp" && "📱"}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-gray-300 hover:text-accent transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent mr-2" />
                <span data-testid="text-address">H#70, C-Block, Nadeem Park, Kasur City, Punjab 55050, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-2" />
                <span data-testid="text-phone">+92 300 4419797</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-2" />
                <span data-testid="text-email">info@alnoor-impex.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-accent mr-2" />
                <span data-testid="text-hours">Mon-Fri: 9AM-6PM PKT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
             &copy; 2024 Al Noor Impex. All rights reserved. |{" "}
            <a href="#" className="hover:text-accent" data-testid="link-privacy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-accent" data-testid="link-terms">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
