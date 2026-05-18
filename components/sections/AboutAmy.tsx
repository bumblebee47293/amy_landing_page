"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Heart, Moon } from "lucide-react";

export function AboutAmy() {
  return (
    <section className="py-[120px] lg:py-[120px] bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-glow opacity-50 pointer-events-none" />

      {/* Subtle celestial accents */}
      <div className="absolute top-36 right-[12%] w-1 h-1 bg-gold rounded-full animate-twinkle opacity-40" />
      <div className="absolute bottom-28 left-[10%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-twinkle-slow opacity-40" />
      <div className="absolute top-1/2 right-[6%] w-1 h-1 bg-gold/70 rounded-full animate-twinkle-fast opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Asymmetrical layout: image takes 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative bg-gradient-to-br from-beige-light to-sand-light rounded-[24px] overflow-hidden shadow-soft-lg border border-beige/50">
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

          {/* Text takes 6 cols with offset for asymmetry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <span className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase">
              <Heart className="w-3.5 h-3.5" />
              About Amy
              <Heart className="w-3.5 h-3.5" />
            </span>
            <h2 className="font-serif text-[40px] lg:text-[40px] font-medium text-navy mt-4 leading-[1.15] tracking-tight">
              Creating Space for
              <br />
              <span className="text-gold">Gentle Growth</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-brown leading-[1.7] text-lg">
              <p className="max-w-[650px]">
                I created Amy Teaches to make learning and self-growth feel
                simpler, calmer, and more accessible. After years of studying
                languages, exploring productivity systems, and navigating my own
                journey of self-development, I realized that the most sustainable
                progress happens when we give ourselves permission to move at
                our own pace.
              </p>
              <p className="max-w-[650px]">
                Here, you will find resources that honor the process over the
                outcome. Whether you are learning a new language, building
                better habits, or simply seeking more calm in your daily life, I
                hope these tools and insights support you along the way.
              </p>
              <p className="max-w-[650px]">
                My approach is rooted in the belief that small, consistent
                actions create lasting change. You do not need to overhaul your
                entire life overnight. You just need to start, and start gently.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/about/">
                <Button variant="outline" className="group border-navy text-navy hover:bg-navy/[0.03] hover:border-navy/70 px-6">
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
