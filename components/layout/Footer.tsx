"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, Mail, ArrowUpRight, Star, Moon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark border-t border-gold/10 relative overflow-hidden">
      {/* Subtle celestial accents */}
      <div className="absolute top-12 right-[10%] w-1 h-1 bg-gold/50 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-[8%] w-1 h-1 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-[5%] w-1.5 h-1.5 bg-gold/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.jpg"
                  alt="Amy Teaches"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-medium text-navy group-hover:text-gold-muted transition-colors">
                Amy Teaches
              </span>
            </Link>
            <p className="mt-5 text-soft-gray text-sm leading-[1.8] max-w-sm">
              A calm space for learning, productivity, and self-development.
              Soft learning, thoughtful growth, and digital resources for a
              calmer life.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center space-x-5">
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
                  className="w-10 h-10 rounded-full bg-beige-light border border-beige/50 flex items-center justify-center text-soft-gray hover:text-navy hover:bg-gold/10 hover:border-gold/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif text-base font-medium text-navy mb-6 tracking-wide">
              Navigate
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/blog/", label: "Blog" },
                { href: "/shop/", label: "Shop" },
                { href: "/about/", label: "About" },
                { href: "/resources/", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-soft-gray hover:text-navy transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-medium text-navy mb-6 tracking-wide">
              Newsletter
            </h4>
            <p className="text-soft-gray text-sm leading-relaxed">
              Get gentle inspiration and thoughtful lessons delivered to your
              inbox.
            </p>
            <Link
              href="#newsletter"
              className="inline-flex items-center mt-4 text-sm font-medium text-navy hover:text-gold-muted transition-colors group"
            >
              <Moon className="w-4 h-4 mr-2 text-gold-muted" />
              Subscribe now
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-beige/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-soft-gray text-sm">
            &copy; {currentYear} Amy Teaches. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-soft-gray text-sm">
            <Star className="w-3 h-3 text-gold/50" />
            <span>Made with care for curious minds</span>
            <Star className="w-3 h-3 text-gold/50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
