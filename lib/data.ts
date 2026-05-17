import { Product, BlogPost, Testimonial, Resource } from "./types";

export const products: Product[] = [
  {
    id: "1",
    title: "The Mindful Study Guide",
    description:
      "A comprehensive e-book filled with evidence-based study techniques, focus strategies, and mindful learning practices to help you retain more and stress less.",
    price: 24.99,
    category: "E-books",
    image: "/images/product-study-guide.jpg",
    slug: "mindful-study-guide",
  },
  {
    id: "2",
    title: "Weekly Study Planner",
    description:
      "A beautifully designed digital planner to organize your study sessions, track progress, and build consistent learning habits with intention.",
    price: 12.99,
    category: "Study Planners",
    image: "/images/product-planner.jpg",
    slug: "weekly-study-planner",
  },
  {
    id: "3",
    title: "Morning Reflection Journal",
    description:
      "A printable journaling PDF with guided prompts for morning reflection, gratitude practice, and setting meaningful daily intentions.",
    price: 9.99,
    category: "Journaling PDFs",
    image: "/images/product-journal.jpg",
    slug: "morning-reflection-journal",
  },
  {
    id: "4",
    title: "Language Learning Hub",
    description:
      "A complete Notion template for organizing vocabulary, tracking grammar progress, and planning immersive language practice routines.",
    price: 18.99,
    category: "Notion Templates",
    image: "/images/product-notion.jpg",
    slug: "language-learning-hub",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-learn-without-burnout",
    title: "How to Learn Without Burnout",
    excerpt:
      "Discover the gentle, sustainable approach to learning that focuses on small daily actions rather than overwhelming intensity. Protect your energy while making real progress.",
    content: `
## The Power of Small Steps

Learning doesn't have to feel overwhelming. In fact, the most successful learners take a gentle, consistent approach rather than trying to cram everything at once.

## Start With Just 15 Minutes

The key to building any habit is starting small. Fifteen minutes of focused practice every day will take you further than two hours once a week.

## Create a Ritual Around Learning

When you attach learning to an existing habit, it becomes automatic. Study while you drink your morning coffee, or review vocabulary during your commute.

## Embrace the Process

Learning is inherently messy. You'll forget things, struggle with concepts, and feel like you're not making progress. This isn't failure—it's the process of growth.
    `,
    category: "Mindful Learning",
    date: "2026-05-15",
    coverImage: "/images/blog-burnout.jpg",
    tags: ["burnout", "mindful learning", "consistency"],
  },
  {
    slug: "romanticizing-slow-growth",
    title: "Romanticizing Slow Growth",
    excerpt:
      "Why embracing the journey of gradual progress can transform your relationship with learning and self-development. Find beauty in the process, not just the outcome.",
    content: `
## Redefining Growth

We've been sold a myth that growth means rapid transformation. But the most meaningful progress comes from depth, not speed.

## The Beauty of Seasons

Instead of trying to maintain peak performance year-round, consider working in seasons. Some months are for deep learning, others for reflection.

## Finding Joy in the Journey

Choose content that genuinely interests you. When learning feels like a treat rather than a chore, consistency becomes natural.
    `,
    category: "Self-Growth",
    date: "2026-05-08",
    coverImage: "/images/blog-slow-growth.jpg",
    tags: ["slow growth", "mindfulness", "joy"],
  },
  {
    slug: "quiet-confidence-habits",
    title: "Quiet Confidence Habits",
    excerpt:
      "Build unshakeable self-assurance through small, consistent practices that honor who you are. No grand gestures needed—just gentle daily commitments to yourself.",
    content: `
## What is Quiet Confidence?

Quiet confidence isn't loud or performative. It's the steady knowing that you are capable, worthy, and enough exactly as you are.

## Daily Practices

- Keep a "wins" journal
- Speak to yourself with kindness
- Set boundaries with grace
- Celebrate small victories

## Building Lasting Change

Your attention is your most valuable resource. Guard it fiercely and invest it in practices that build you up.
    `,
    category: "Confidence",
    date: "2026-04-30",
    coverImage: "/images/blog-confidence.jpg",
    tags: ["confidence", "habits", "self-worth"],
  },
  {
    slug: "creating-a-calm-morning-routine",
    title: "Creating a Calm Morning Routine",
    excerpt:
      "Design a morning that sets the tone for a peaceful, productive day. Simple rituals to start your day with intention rather than urgency.",
    content: `
## The Morning as Foundation

How you start your day influences everything that follows. A calm morning routine isn't about perfection—it's about creating a gentle transition from sleep to wakefulness.

## Start the Night Before

A good morning begins the evening before. Prepare what you can: lay out clothes, prep breakfast, review your priorities.

## Simple Rituals

- Drink a glass of water
- Spend five minutes stretching
- Write down three priorities
- Enjoy your coffee or tea without multitasking
    `,
    category: "Lifestyle",
    date: "2026-04-20",
    coverImage: "/images/blog-morning.jpg",
    tags: ["morning routine", "mindfulness", "lifestyle"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Graduate Student",
    content:
      "Amy's study planner completely transformed how I approach my coursework. I've never felt more organized and less stressed during exam periods.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Language Enthusiast",
    content:
      "The language learning hub is incredibly well-designed. It's helped me stay consistent with my Japanese studies for over six months now.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Working Professional",
    content:
      "I look forward to Amy's newsletter every week. Her insights on slow productivity have genuinely changed how I work and live.",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Lisa Park",
    role: "Creative Writer",
    content:
      "The morning reflection journal has become an essential part of my daily routine. It's beautifully designed and deeply thoughtful.",
    avatar: "/images/avatar-4.jpg",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Essential Vocabulary Sheets",
    description:
      "Curated vocabulary lists for Spanish, French, and Italian learners. Organized by theme and difficulty level.",
    category: "Vocabulary Sheets",
    downloadUrl: "/resources/vocabulary-sheets.pdf",
    icon: "book-open",
  },
  {
    id: "2",
    title: "Monthly Study Tracker",
    description:
      "A printable tracker to monitor your daily study habits, track consistency, and celebrate streaks.",
    category: "Study Trackers",
    downloadUrl: "/resources/study-tracker.pdf",
    icon: "calendar",
  },
  {
    id: "3",
    title: "30 Journaling Prompts",
    description:
      "A collection of thought-provoking prompts designed to spark reflection, creativity, and personal growth.",
    category: "Journaling Prompts",
    downloadUrl: "/resources/journaling-prompts.pdf",
    icon: "pen-tool",
  },
  {
    id: "4",
    title: "Weekly Focus Planner",
    description:
      "A minimalist weekly planner designed for deep work sessions and intentional task prioritization.",
    category: "Study Trackers",
    downloadUrl: "/resources/focus-planner.pdf",
    icon: "target",
  },
];
