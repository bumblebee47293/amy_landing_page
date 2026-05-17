"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen } from "lucide-react";

/*
  StarField — purely decorative, positioned absolutely.
  Each star has a slightly different delay so they twinkle
  out of phase, creating an organic celestial feel.
*/
const stars = [
  { top: "12%", left: "8%", size: 2, delay: 0, duration: 3 },
  { top: "18%", left: "22%", size: 1.5, delay: 1.2, duration: 2.5 },
  { top: "8%", left: "38%", size: 2.5, delay: 0.4, duration: 3.5 },
  { top: "15%", left: "55%", size: 1, delay: 2.1, duration: 2 },
  { top: "10%", left: "72%", size: 2, delay: 0.8, duration: 4 },
  { top: "20%", left: "88%", size: 1.5, delay: 1.5, duration: 3 },
  { top: "35%", left: "5%", size: 1, delay: 0.2, duration: 2.5 },
  { top: "42%", left: "95%", size: 2, delay: 1.8, duration: 3.5 },
  { top: "55%", left: "12%", size: 1.5, delay: 0.6, duration: 2 },
  { top: "62%", left: "85%", size: 1, delay: 2.4, duration: 3 },
  { top: "75%", left: "20%", size: 2, delay: 1, duration: 2.5 },
  { top: "80%", left: "70%", size: 1.5, delay: 0.3, duration: 4 },
  { top: "88%", left: "45%", size: 1, delay: 1.7, duration: 3 },
  { top: "65%", left: "50%", size: 2.5, delay: 0.9, duration: 2 },
  { top: "28%", left: "65%", size: 1, delay: 2.2, duration: 3.5 },
  { top: "48%", left: "30%", size: 1.5, delay: 0.5, duration: 2.5 },
];

function StarField() {
  return (
    <>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.2,
          }}
        />
      ))}
    </>
  );
}

/* Soft botanical leaf — decorative SVG overlay */
function BotanicalLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 180C100 180 40 140 40 80C40 40 70 20 100 20C130 20 160 40 160 80C160 140 100 180 100 180Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        fillOpacity="0.03"
      />
      <path
        d="M100 180V20"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.08"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-cream">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-celestial-glow" />

      {/* Large soft glow behind artwork */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gold/6 rounded-full blur-[100px]" />

      {/* Secondary ambient glows */}
      <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-navy/4 rounded-full blur-[80px]" />
      <div className="absolute bottom-[15%] left-[8%] w-64 h-64 bg-gold/4 rounded-full blur-[80px]" />

      {/* Star field */}
      <StarField />

      {/* Botanical decorations */}
      <BotanicalLeaf className="absolute top-[10%] left-[-5%] w-48 h-48 lg:w-72 lg:h-72 text-gold rotate-12 opacity-60 pointer-events-none" />
      <BotanicalLeaf className="absolute bottom-[5%] right-[-3%] w-40 h-40 lg:w-64 lg:h-64 text-gold -rotate-45 opacity-50 pointer-events-none" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />

      {/* 
        Content — optically centered upward.
        Using negative translate to shift the visual mass above geometric center,
        which feels more balanced to the human eye (optical centering).
      */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16 flex flex-col items-center text-center transform -translate-y-6 lg:-translate-y-10">
        
        {/* Large Decorative Brand Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-10 lg:mb-12"
        >
          <div className="relative w-72 sm:w-96 lg:w-[28rem] xl:w-[32rem] aspect-[3/2] animate-float will-change-transform">
            {/* Rectangular glow */}
            <div className="absolute inset-[-16px] lg:inset-[-24px] bg-gold/8 blur-2xl" />
            <div className="absolute inset-[-6px] lg:inset-[-10px] bg-gold/10 blur-xl" />

            <Image
              src="/images/logo.jpg"
              alt="Amy Teaches"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, (max-width: 1280px) 448px, 512px"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-navy tracking-tight leading-[0.95]"
        >
          Amy Teaches
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl text-muted-brown font-light tracking-wide"
        >
          Learn softly. Grow consistently.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/shop/">
            <Button size="lg" className="group bg-navy hover:bg-navy-light text-cream px-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/blog/">
            <Button
              variant="outline"
              size="lg"
              className="border-gold/30 text-navy hover:bg-gold/5 hover:border-gold/50 px-8 transition-all duration-300"
            >
              Read the Blog
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
