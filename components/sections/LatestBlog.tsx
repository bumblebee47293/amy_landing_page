"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate, calculateReadingTime } from "@/lib/utils";

export function LatestBlog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-taupe-dark text-sm font-medium tracking-widest uppercase">
            From the Blog
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-text mt-3">
            Latest Thoughts
          </h2>
          <p className="mt-4 text-muted-brown max-w-2xl mx-auto">
            Insights on language learning, productivity, self-growth, and living
            with intention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}/`} className="group block">
                <div className="bg-warm-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="aspect-[16/10] relative bg-linen overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-4xl text-taupe/40">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-soft-gray">
                      <span className="px-2 py-1 bg-sand/50 rounded-full text-taupe-dark font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {calculateReadingTime(post.content)} min read
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-stone-text mt-3 group-hover:text-muted-brown transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-soft-gray text-sm mt-3 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-soft-gray">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-sm font-medium text-stone-text group-hover:text-muted-brown transition-colors flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          className="text-center mt-12"
        >
          <Link href="/blog/">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
