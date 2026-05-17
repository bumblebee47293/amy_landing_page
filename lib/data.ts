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
    slug: "how-to-build-a-consistent-language-learning-habit",
    title: "How to Build a Consistent Language Learning Habit",
    excerpt:
      "Discover the gentle, sustainable approach to language learning that focuses on small daily actions rather than overwhelming intensity.",
    content: `
## The Power of Small Steps

Learning a language doesn't have to feel overwhelming. In fact, the most successful language learners I know take a gentle, consistent approach rather than trying to cram everything at once.

## Start With Just 15 Minutes

The key to building any habit is starting small. Fifteen minutes of focused practice every day will take you further than two hours once a week. Your brain needs time to process and consolidate what you're learning.

## Create a Ritual Around Learning

When you attach language learning to an existing habit, it becomes automatic. Study while you drink your morning coffee, or review vocabulary during your commute. These small moments add up to significant progress.

## Embrace the Mistakes

Language learning is inherently messy. You'll mispronounce words, forget grammar rules, and struggle to express yourself. This isn't failure—it's the process of rewiring your brain to think in a new way.

## Find Joy in the Journey

Choose content that genuinely interests you. Watch shows you enjoy, read books you love, listen to music that moves you. When learning feels like a treat rather than a chore, consistency becomes natural.
    `,
    category: "Language Learning",
    date: "2026-05-10",
    coverImage: "/images/blog-language.jpg",
    tags: ["habits", "language learning", "consistency"],
  },
  {
    slug: "the-art-of-slow-productivity",
    title: "The Art of Slow Productivity",
    excerpt:
      "Why doing less can actually help you achieve more. A gentle reframe of productivity that prioritizes depth over speed and quality over quantity.",
    content: `
## Redefining Productivity

We've been sold a myth that productivity means doing more, faster. But the most meaningful work comes from depth, not speed. Slow productivity is about doing fewer things, but doing them better.

## The Cost of Constant Busyness

When you're always rushing from one task to the next, you never give yourself the space to think creatively. Your best ideas often come in the quiet moments between activities.

## Working in Seasons

Instead of trying to maintain peak performance year-round, consider working in seasons. Some months are for deep creative work, others for planning and reflection. This rhythm prevents burnout.

## Protecting Your Attention

Your attention is your most valuable resource. Guard it fiercely. Turn off notifications, create boundaries around your work time, and give yourself permission to be fully present with one task at a time.
    `,
    category: "Productivity",
    date: "2026-05-05",
    coverImage: "/images/blog-productivity.jpg",
    tags: ["productivity", "mindfulness", "slow living"],
  },
  {
    slug: "journaling-prompts-for-self-growth",
    title: "Journaling Prompts for Self-Growth",
    excerpt:
      "Thoughtful prompts to help you reflect, process, and grow. Use these questions to deepen your self-awareness and move forward with clarity.",
    content: `
## Why Journaling Works

Writing slows down your thinking. It creates a space between your thoughts and your reactions, allowing you to process emotions and gain perspective on your experiences.

## Prompts for Self-Reflection

- What am I avoiding, and why?
- What would I do if I knew I couldn't fail?
- What values am I living by right now?
- When do I feel most like myself?
- What am I grateful for that I usually take for granted?

## Prompts for Growth

- What skill would I learn if I had unlimited time?
- Who do I want to become in the next year?
- What boundaries do I need to set?
- How do I want to feel, and what's one small step toward that?
    `,
    category: "Self-Growth",
    date: "2026-04-28",
    coverImage: "/images/blog-journaling.jpg",
    tags: ["journaling", "self-growth", "reflection"],
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

A good morning begins the evening before. Prepare what you can: lay out clothes, prep breakfast, review your priorities. This removes decision fatigue when you wake up.

## The First Hour Matters

Try to spend the first hour of your day without checking your phone. This protects your mind from external demands and lets you set your own intentions for the day.

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
