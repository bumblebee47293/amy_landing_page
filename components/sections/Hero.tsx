"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-celestial noise-texture">
      {/* Celestial Background Elements */}
      <div className="absolute inset-0 bg-celestial-glow" />
      
      {/* Faint moon glow */}
      <div className="absolute top-1/4 right-[15%] w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-navy/5 rounded-full blur-3xl" />

      {/* Tiny gold stars */}
      <div className="absolute top-32 left-[20%] w-1 h-1 bg-gold rounded-full animate-pulse" />
      <div className="absolute top-48 right-[25%] w-1.5 h-1.5 bg-gold-light rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-40 left-[60%] w-1 h-1 bg-gold/60 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-[15%] w-1 h-1 bg-gold/80 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-60 left-[30%] w-1.5 h-1.5 bg-gold/40 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle Logo Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-16 h-16 lg:w-20 lg:h-20">
              <Image
                src="/images/logo.jpg"
                alt="Amy Teaches"
                fill
                className="rounded-full object-cover opacity-80 glow-gold"
                priority
              />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Welcome to Amy Teaches
            <Sparkles className="w-3.5 h-3.5" />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-navy leading-[1.1] tracking-tight"
          >
            Soft learning,
            <br />
            <span className="text-gold">thoughtful growth,</span>
            <br />
            and digital resources
            <br />
            for a calmer life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg lg:text-xl text-muted-brown max-w-2xl mx-auto leading-relaxed"
          >
            Discover celestial-inspired tools and gentle guidance for learning,
            productivity, and self-development at your own pace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/shop/">
              <Button size="lg" className="group bg-navy hover:bg-navy-light text-cream px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/blog/">
              <Button variant="outline" size="lg" className="border-gold/30 text-navy hover:bg-gold/5 hover:border-gold/50 px-8">
                Read the Blog
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
