"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Subtle celestial accents */}
      <div className="absolute top-16 right-[10%] w-1 h-1 bg-gold/50 rounded-full animate-twinkle" />
      <div className="absolute bottom-24 left-[8%] w-1 h-1 bg-gold/30 rounded-full animate-twinkle-slow" />
      <div className="absolute top-1/2 right-[5%] w-1.5 h-1.5 bg-gold/20 rounded-full animate-twinkle-fast" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative w-28 sm:w-32 aspect-[4/3] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.jpg"
                  alt="Amy Teaches"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </Link>
            <p className="mt-5 text-cream/60 text-sm leading-[1.8] max-w-sm">
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
                  className="w-10 h-10 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-cream/20 hover:border-cream/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif text-base font-medium text-cream mb-6 tracking-wide">
              Navigate
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/blog/", label: "Blog" },
                { href: "/shop/", label: "Products" },
                { href: "/about/", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-cream transition-colors duration-300 text-sm flex items-center group"
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
            <h4 className="font-serif text-base font-medium text-cream mb-6 tracking-wide">
              Newsletter
            </h4>
            <p className="text-cream/60 text-sm leading-relaxed">
              Get gentle inspiration and thoughtful lessons delivered to your
              inbox.
            </p>
            <Link
              href="#newsletter"
              className="inline-flex items-center mt-4 text-sm font-medium text-cream hover:text-gold transition-colors group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2 text-gold/70"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              Subscribe now
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            &copy; {currentYear} Amy Teaches. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-cream/50 text-sm">
            <span>Made with care for curious minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
