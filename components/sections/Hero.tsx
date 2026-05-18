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
            opacity: 0.15,
          }}
        />
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-cream">
      {/* Atmospheric background layers */}
      <div className="absolute inset-0 bg-celestial-glow" />

      {/* Soft radial gradient corners */}
      <div className="absolute top-0 left-0 w-[60%] h-[60%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(11,21,48,0.03) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(11,21,48,0.02) 0%, transparent 60%)' }} />

      {/* Large soft glow behind artwork — very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gold/[0.04] rounded-full blur-[120px]" />

      {/* Secondary ambient glows */}
      <div className="absolute top-[20%] right-[5%] w-72 h-72 bg-navy/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-[15%] left-[8%] w-64 h-64 bg-gold/[0.03] rounded-full blur-[100px]" />

      {/* Star field */}
      <StarField />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-20 flex flex-col items-center text-center">

        {/* Large Decorative Brand Illustration — subtle and blurred */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-12 lg:mb-16"
        >
          <div className="relative w-64 sm:w-80 lg:w-96 aspect-[3/2] animate-float will-change-transform opacity-[0.6]">
            <Image
              src="/images/logo.jpg"
              alt="Amy Teaches"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-[42px] sm:text-5xl lg:text-[64px] font-semibold text-navy tracking-tight leading-[1.1] max-w-3xl"
        >
          Soft learning, thoughtful growth, and digital tools for a calmer life.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 lg:mt-10 text-lg sm:text-xl text-muted-brown font-light tracking-wide max-w-2xl leading-[1.7]"
        >
          Digital products, blog posts, and resources designed to help you grow consistently without overwhelm.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 lg:mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/shop/">
            <Button size="lg" className="group bg-navy hover:bg-navy-light text-cream px-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/blog/">
            <Button
              variant="outline"
              size="lg"
              className="border-navy text-navy hover:bg-navy/[0.03] hover:border-navy/70 px-8 transition-all duration-300"
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
