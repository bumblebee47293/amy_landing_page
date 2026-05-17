"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart, Moon } from "lucide-react";

export function AboutAmy() {
  return (
    <section className="py-32 lg:py-40 bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-glow opacity-50 pointer-events-none" />

      {/* Subtle celestial accents */}
      <div className="absolute top-36 right-[12%] w-1 h-1 bg-gold rounded-full animate-twinkle" />
      <div className="absolute bottom-28 left-[10%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-twinkle-slow" />
      <div className="absolute top-1/2 right-[6%] w-1 h-1 bg-gold/70 rounded-full animate-twinkle-fast" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-beige-light to-sand-light rounded-2xl overflow-hidden shadow-soft-lg border border-beige/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Moon className="w-16 h-16 text-gold/30 mx-auto" />
                    <span className="font-serif text-6xl text-gold/40 font-medium block mt-4">A</span>
                    <p className="mt-4 text-soft-gray text-sm tracking-wide">
                      Portrait placeholder
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase">
              <Heart className="w-3.5 h-3.5" />
              About Amy
              <Heart className="w-3.5 h-3.5" />
            </span>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-navy mt-4 leading-[1.15] tracking-tight">
              Creating Space for
              <br />
              <span className="text-gold">Gentle Growth</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-brown leading-[1.8] text-lg">
              <p>
                I created Amy Teaches to make learning and self-growth feel
                simpler, calmer, and more accessible. After years of studying
                languages, exploring productivity systems, and navigating my own
                journey of self-development, I realized that the most sustainable
                progress happens when we give ourselves permission to move at
                our own pace.
              </p>
              <p>
                Here, you will find resources that honor the process over the
                outcome. Whether you are learning a new language, building
                better habits, or simply seeking more calm in your daily life, I
                hope these tools and insights support you along the way.
              </p>
              <p>
                My approach is rooted in the belief that small, consistent
                actions create lasting change. You do not need to overhaul your
                entire life overnight. You just need to start, and start gently.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/about/">
                <Button variant="outline" className="group border-gold/30 text-navy hover:bg-gold/5 hover:border-gold/50 px-6">
                  Read My Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
