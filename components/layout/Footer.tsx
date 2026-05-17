"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linen border-t border-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-stone-text">
                Amy Teaches
              </span>
            </Link>
            <p className="mt-4 text-soft-gray text-sm leading-relaxed">
              A calm space for learning, productivity, and self-development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-stone-text mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/blog/", label: "Blog" },
                { href: "/shop/", label: "Shop" },
                { href: "/resources/", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-soft-gray hover:text-stone-text transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-stone-text mb-4">
              About
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about/", label: "About Amy" },
                { href: "/contact/", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-soft-gray hover:text-stone-text transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-stone-text mb-4">
              Connect
            </h4>
            <div className="flex items-center space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Mail, href: "mailto:hello@amyteaches.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-soft-gray hover:text-stone-text transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sand/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-soft-gray text-sm">
            &copy; {currentYear} Amy Teaches. All rights reserved.
          </p>
          <p className="text-soft-gray text-sm mt-2 md:mt-0">
            Made with care for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
