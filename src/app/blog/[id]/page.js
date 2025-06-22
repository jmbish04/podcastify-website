import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShareButtons } from "@/components/share-buttons";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Mock blog post data
const blogPosts = {
  1: {
    id: 1,
    title: "The Future of Podcasting: Trends to Watch in 2024",
    excerpt:
      "Explore the emerging trends that are shaping the podcasting industry, from AI-powered content creation to immersive audio experiences.",
    content: `
      <p>The podcasting landscape is evolving rapidly, with new technologies and changing listener behaviors driving innovation across the industry. As we look ahead to 2024, several key trends are emerging that will shape the future of audio content creation and consumption.</p>

      <h2>AI-Powered Content Creation</h2>
      <p>Artificial intelligence is revolutionizing how podcasts are created, edited, and distributed. From automated transcription services to AI-generated show notes, creators are finding new ways to streamline their workflow and focus on what matters most: creating compelling content.</p>

      <p>Some podcasters are even experimenting with AI-generated voices for certain segments, though the human element remains crucial for authentic storytelling and genuine connection with audiences.</p>

      <h2>Interactive Audio Experiences</h2>
      <p>The line between podcasts and interactive media is blurring. New platforms are enabling listeners to participate in real-time polls, ask questions during live recordings, and even influence the direction of ongoing series.</p>

      <p>This shift toward interactivity is creating more engaged communities around podcast content and opening up new possibilities for audience participation.</p>

      <h2>Spatial Audio and Immersive Sound</h2>
      <p>With the rise of spatial audio technology, podcasters are beginning to experiment with three-dimensional soundscapes that create more immersive listening experiences. This technology allows for more nuanced storytelling and can transport listeners directly into the scenes being described.</p>

      <h2>Micro-Podcasting and Short-Form Content</h2>
      <p>As attention spans continue to fragment, many creators are finding success with shorter, more focused podcast episodes. These "micro-podcasts" typically run 5-15 minutes and deliver concentrated value to busy listeners.</p>

      <p>This trend is particularly popular among business and educational podcasters who want to provide actionable insights without requiring a significant time commitment from their audience.</p>

      <h2>Conclusion</h2>
      <p>The future of podcasting is bright, with technology enabling new forms of creativity and audience engagement. While the core principles of good storytelling and authentic connection remain unchanged, the tools and platforms available to creators continue to evolve rapidly.</p>

      <p>As we move forward, the most successful podcasters will be those who embrace these new technologies while staying true to their unique voice and perspective.</p>
    `,
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/blog1.webp",
    category: "Industry",
    tags: ["Podcasting", "Technology", "Trends", "AI"],
  },
};

export default function BlogPostPage({ params }) {
  const post = blogPosts[Number.parseInt(params.id)];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="">
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-purple-700 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800 ">
                    {post.category}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-sm:px-5 px-20">
            <div className="">
              <div className="grid gap-12 lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <article className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>

                  <Separator className="my-8" />

                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="mb-3 text-lg font-semibold">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">
                      Share This Post
                    </h3>
                    <ShareButtons episode={post} />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Author */}
                  <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="mb-4 text-lg font-semibold">
                      About the Author
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src="/avatar1.jpg"
                            alt={post.author}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{post.author}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Host & Producer
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Alex is a former journalist with over a decade of
                        experience in media and storytelling.
                      </p>
                    </div>
                  </div>

                  {/* Related Posts */}
                  <div className="rounded-2xl border bg-background p-6 shadow-sm dark:border-muted/40">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">
                      Related Posts
                    </h3>
                    <ul className="space-y-3">
                      {[
                        { title: "How to Start Your Own Podcast", id: 2 },
                        { title: "The Psychology of Great Interviews", id: 3 },
                        { title: "Building a Podcast Community", id: 4 },
                      ].map((relatedPost, index, arr) => (
                        <li key={relatedPost.id} className="relative group">
                          <Link
                            href={`/blog/${relatedPost.id}`}
                            className="flex items-center justify-between text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary"
                          >
                            {relatedPost.title}
                            <span className="ml-2 text-xs text-muted-foreground group-hover:text-primary">
                              →
                            </span>
                          </Link>
                          {index !== arr.length - 1 && (
                            <div className="mt-3 border-b border-muted" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-950">
                    <h3 className="mb-2 text-lg font-semibold">Stay Updated</h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      Get the latest blog posts delivered to your inbox.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                    >
                      <Link href="/subscribe">Subscribe</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
