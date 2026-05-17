"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Feather } from "lucide-react";
import { formatDate, calculateReadingTime } from "@/lib/utils";

export function LatestBlog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-32 lg:py-40 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-celestial-glow opacity-50 pointer-events-none" />

      {/* Subtle celestial accents */}
      <div className="absolute top-32 left-[8%] w-1 h-1 bg-gold rounded-full animate-twinkle" />
      <div className="absolute bottom-40 right-[10%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-twinkle-slow" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-gold-muted text-sm font-medium tracking-[0.2em] uppercase">
            <Feather className="w-3.5 h-3.5" />
            From the Blog
            <Feather className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-navy mt-4 tracking-tight">
            Latest Thoughts
          </h2>
          <p className="mt-6 text-muted-brown max-w-2xl mx-auto text-lg leading-relaxed">
            Insights on language learning, productivity, self-growth, and living
            with intention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}/`} className="group block">
                <div className="bg-warm-white rounded-2xl shadow-soft overflow-hidden transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-2 h-full flex flex-col border border-beige/50">
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-beige-light to-sand-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="font-serif text-5xl text-gold/50 font-medium">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors duration-500" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-soft-gray mb-4">
                      <span className="px-3 py-1 bg-beige/50 rounded-full text-gold-muted font-medium tracking-wide uppercase text-[10px]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {calculateReadingTime(post.content)} min read
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-navy mt-1 group-hover:text-gold-muted transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-soft-gray text-sm mt-3 line-clamp-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-beige/30">
                      <span className="text-xs text-soft-gray tracking-wide">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-sm font-medium text-navy group-hover:text-gold-muted transition-colors flex items-center">
                        Read More
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/blog/">
            <Button variant="outline" className="border-gold/30 text-navy hover:bg-gold/5 hover:border-gold/50 px-8">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
