"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Subtle background accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blush rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sand rounded-full opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block text-taupe-dark text-sm font-medium tracking-widest uppercase mb-6"
          >
            Welcome to Amy Teaches
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-stone-text leading-tight tracking-tight"
          >
            Learn softly.
            <br />
            Grow consistently.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg lg:text-xl text-muted-brown max-w-2xl mx-auto leading-relaxed"
          >
            A calm space for learning, productivity, language growth, and
            self-development. Discover thoughtful resources designed to help
            you grow at your own pace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/resources/">
              <Button size="lg" className="group">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/blog/">
              <Button variant="outline" size="lg">
                Read the Blog
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
