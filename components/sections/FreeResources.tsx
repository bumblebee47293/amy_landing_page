"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resources } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Download, BookOpen, Calendar, PenTool, Target, ArrowRight, Gift } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "book-open": BookOpen,
  calendar: Calendar,
  "pen-tool": PenTool,
  target: Target,
};

export function FreeResources() {
  return (
    <section className="py-28 lg:py-36 bg-cream-dark relative overflow-hidden">
      {/* Subtle celestial accents */}
      <div className="absolute top-24 right-[18%] w-1 h-1 bg-gold rounded-full animate-pulse" />
      <div className="absolute bottom-28 left-[15%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase">
            <Gift className="w-3.5 h-3.5" />
            Free Downloads
            <Gift className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-navy mt-4 tracking-tight">
            Resources to Get Started
          </h2>
          <p className="mt-6 text-muted-brown max-w-2xl mx-auto text-lg leading-relaxed">
            Free tools and templates to support your learning journey. No
            strings attached.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => {
            const Icon = iconMap[resource.icon] || BookOpen;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-warm-white rounded-2xl shadow-soft p-7 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 h-full flex flex-col border border-beige/50">
                  <div className="w-12 h-12 bg-beige-light rounded-xl flex items-center justify-center mb-5 border border-beige/50">
                    <Icon className="h-5 w-5 text-gold-muted" />
                  </div>
                  <span className="text-[11px] font-medium text-gold-muted tracking-[0.15em] uppercase">
                    {resource.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-navy mt-2 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-soft-gray mt-3 flex-1 leading-relaxed">
                    {resource.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-5 text-navy hover:text-gold-muted hover:bg-gold/5 self-start transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/resources/">
            <Button className="bg-navy hover:bg-navy-light text-cream px-6">
              <Download className="mr-2 h-5 w-5" />
              Download Freebies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
