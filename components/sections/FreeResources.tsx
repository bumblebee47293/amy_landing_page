"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resources } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Download, BookOpen, Calendar, PenTool, Target } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "book-open": BookOpen,
  calendar: Calendar,
  "pen-tool": PenTool,
  target: Target,
};

export function FreeResources() {
  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
            Free Downloads
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3">
            Resources to Get Started
          </h2>
          <p className="mt-4 text-muted-brown max-w-2xl mx-auto">
            Free tools and templates to support your learning journey. No
            strings attached.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="bg-warm-white rounded-2xl shadow-soft p-6 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blush rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-taupe-dark" />
                  </div>
                  <span className="text-xs font-medium text-taupe-dark tracking-wide uppercase">
                    {resource.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-stone-text mt-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-soft-gray mt-2 flex-1">
                    {resource.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 text-stone-text hover:text-muted-brown self-start"
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
          className="text-center mt-12"
        >
          <Link href="/resources/">
            <Button>
              <Download className="mr-2 h-5 w-5" />
              Download Freebies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
