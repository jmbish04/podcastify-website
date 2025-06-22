import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Podcasting: Trends to Watch in 2024",
      excerpt:
        "Explore the emerging trends that are shaping the podcasting industry, from AI-powered content creation to immersive audio experiences.",
      content: "The podcasting landscape is evolving rapidly...",
      author: "Alex Johnson",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/blog1.webp",
      category: "Industry",
      tags: ["Podcasting", "Technology", "Trends", "AI"],
    },
    {
      id: 2,
      title: "How to Start Your Own Podcast: A Complete Guide",
      excerpt:
        "Everything you need to know about launching your podcast, from equipment selection to distribution strategies.",
      content: "Starting a podcast can seem overwhelming...",
      author: "Sam Rivera",
      date: "May 8, 2023",
      readTime: "8 min read",
      image: "/blog1.webp",
      category: "Tutorial",
      tags: ["Beginner", "Guide", "Equipment", "Tips"],
    },
    {
      id: 3,
      title: "The Psychology of Great Interviews",
      excerpt:
        "Discover the psychological principles that make interviews engaging and how to apply them in your conversations.",
      content: "Great interviews are more than just questions and answers...",
      author: "Alex Johnson",
      date: "April 30, 2023",
      readTime: "6 min read",
      image: "/blog1.webp",
      category: "Skills",
      tags: ["Interviewing", "Psychology", "Communication", "Skills"],
    },
    {
      id: 4,
      title: "Building a Podcast Community: Engagement Strategies",
      excerpt:
        "Learn how to foster a loyal community around your podcast and create meaningful connections with your audience.",
      content: "Community building is essential for podcast success...",
      author: "Sam Rivera",
      date: "April 22, 2023",
      readTime: "7 min read",
      image: "/blog1.webp",
      category: "Marketing",
      tags: ["Community", "Engagement", "Marketing", "Growth"],
    },
    {
      id: 5,
      title: "Audio Quality Matters: Recording Tips for Beginners",
      excerpt:
        "Simple techniques to improve your podcast's audio quality without breaking the bank on expensive equipment.",
      content: "Good audio quality is crucial for podcast success...",
      author: "Taylor Kim",
      date: "April 15, 2023",
      readTime: "4 min read",
      image: "/blog1.webp",
      category: "Technical",
      tags: ["Audio", "Recording", "Equipment", "Quality"],
    },
    {
      id: 6,
      title: "Monetizing Your Podcast: Revenue Strategies That Work",
      excerpt:
        "Explore various monetization methods for podcasters, from sponsorships to premium content and merchandise.",
      content: "Turning your podcast into a revenue stream...",
      author: "Jordan Smith",
      date: "April 8, 2023",
      readTime: "9 min read",
      image: "/blog1.webp",
      category: "Business",
      tags: ["Monetization", "Revenue", "Sponsorship", "Business"],
    },
  ];

  const categories = [
    "All",
    "Industry",
    "Tutorial",
    "Skills",
    "Marketing",
    "Technical",
    "Business",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  Podcast
                </span>
                <span>Insights & Tips</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Discover industry insights, practical tips, and
                behind-the-scenes stories from the world of podcasting.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8">
          <div className="max-sm:px-5 px-20">
            <div className="flex flex-col gap-6 xl:flex-row md:items-center md:justify-between">
              <div className="relative w-full xl:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search blog posts..." className="pl-10" />
              </div>
              <div>
                <Tabs defaultValue="All" className="w-full">
                  <TabsList className="flex flex-wrap sm:grid sm:grid-cols-7 w-full h-full">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="flex-1 text-center"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Featured Post</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Badge className="w-fit bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="text-2xl font-bold">{blogPosts[0].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-fit bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                  >
                    <Link href={`/blog/${blogPosts[0].id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Latest Posts</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-tight">
                        <Link
                          href={`/blog/${post.id}`}
                          className="hover:text-purple-700 dark:hover:text-purple-400"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button variant="outline">Load More Posts</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-purple-50 py-16 dark:bg-gray-900">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Get the latest blog posts and podcast insights delivered to your
                inbox.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Input
                  placeholder="Enter your email"
                  className="sm:w-80 bg-white focus-visible:ring-0"
                />
                <Button className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
