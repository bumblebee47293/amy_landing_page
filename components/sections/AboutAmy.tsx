"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function AboutAmy() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/5] relative bg-linen rounded-2xl overflow-hidden shadow-soft-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl text-taupe/30">A</span>
                  <p className="mt-4 text-soft-gray text-sm">
                    Portrait placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
              About Amy
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3 leading-snug">
              Creating Space for Gentle Growth
            </h2>
            <div className="mt-6 space-y-4 text-muted-brown leading-relaxed">
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
            <div className="mt-8">
              <Link href="/about/">
                <Button variant="outline" className="group">
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
