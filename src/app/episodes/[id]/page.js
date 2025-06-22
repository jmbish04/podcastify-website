import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AudioPlayer } from "@/components/audio-player";
import { RelatedEpisodes } from "@/components/related-episodes";
import { EpisodeComments } from "@/components/episode-comments";
import { ShareButtons } from "@/components/share-buttons";
import { Calendar, Clock, Download, Heart, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock episode data - in a real app, this would come from a database
const episodes = {
  1: {
    id: 1,
    title: "Reimagining Education for the Digital Age",
    description:
      "A conversation with Dr. Maya Patel on how technology is transforming learning environments and what it means for future generations.",
    fullDescription:
      "In this thought-provoking episode, we sit down with Dr. Maya Patel, a leading expert in educational technology and digital learning. Dr. Patel shares her insights on how artificial intelligence, virtual reality, and other emerging technologies are revolutionizing the way we learn and teach. We explore the challenges and opportunities that come with digital transformation in education, discuss the importance of maintaining human connection in virtual learning environments, and look ahead to what the classroom of the future might look like. This conversation is essential listening for educators, parents, students, and anyone interested in the future of learning.",
    date: "May 10, 2023",
    duration: "48 min",
    image: "/podcast1.jpg",
    category: "Technology",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Dr. Maya Patel",
      bio: "Dr. Maya Patel is a Professor of Educational Technology at Stanford University and author of 'Learning in the Digital Age'. She has over 15 years of experience in educational research and has consulted for major tech companies on learning platforms.",
      image: "/avatar1.jpg",
    },
    transcript: "Welcome to today's episode. I'm here with Dr. Maya Patel...",
    tags: ["Education", "Technology", "AI", "Future", "Learning"],
    likes: 1247,
    downloads: 15632,
  },
  2: {
    id: 2,
    title: "The Art of Mindful Leadership",
    description:
      "Business leader Sarah Chen shares insights on building compassionate organizations that prioritize employee wellbeing without sacrificing success.",
    fullDescription:
      "Join us for an inspiring conversation with Sarah Chen, CEO of MindfulCorp and advocate for conscious leadership. In this episode, Sarah discusses how mindfulness practices can transform workplace culture, improve employee satisfaction, and drive business results. We explore practical strategies for implementing mindful leadership principles, the importance of emotional intelligence in management, and how to create organizations that truly care for their people while achieving ambitious goals.",
    date: "April 26, 2023",
    duration: "52 min",
    image: "/podcast1.jpg",
    category: "Business",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Sarah Chen",
      bio: "Sarah Chen is the CEO of MindfulCorp and a certified mindfulness instructor. She has led multiple successful companies and is passionate about creating workplaces where people can thrive both personally and professionally.",
      image: "/avatar1.jpg",
    },
    transcript: "Today we're talking about mindful leadership...",
    tags: ["Leadership", "Mindfulness", "Business", "Wellbeing", "Management"],
    likes: 892,
    downloads: 12456,
  },
  3: {
    id: 3,
    title: "Climate Solutions: Local Actions, Global Impact",
    description:
      "Environmental activist Marcus Green discusses practical approaches to sustainability that communities can implement today.",
    fullDescription:
      "In this episode, Marcus Green shares inspiring stories of local communities taking climate action into their own hands. From urban gardens to zero-waste initiatives, learn how small efforts lead to big changes. Marcus highlights how empowering local leaders can be the key to solving global environmental challenges.",
    date: "April 12, 2023",
    duration: "45 min",
    image: "/podcast1.jpg",
    category: "Environment",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Marcus Green",
      bio: "Marcus Green is an environmental activist, founder of 'Green Now', and has been working on climate education and local sustainability for over a decade.",
      image: "/avatar1.jpg",
    },
    transcript: "We begin today's conversation with Marcus Green discussing...",
    tags: ["Climate", "Sustainability", "Environment", "Community", "Action"],
    likes: 1034,
    downloads: 11780,
  },
  4: {
    id: 4,
    title: "The Science of Happiness",
    description:
      "Psychologist Dr. Lisa Wong explores the latest research on what truly makes us happy and how we can apply these findings in our daily lives.",
    fullDescription:
      "What does it mean to be happy? In this episode, Dr. Lisa Wong breaks down the neuroscience and psychology behind happiness. We explore gratitude, social connections, and daily habits that boost well-being—backed by science. A must-listen for anyone seeking a more fulfilled life.",
    date: "March 29, 2023",
    duration: "56 min",
    image: "/podcast1.jpg",
    category: "Health",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Dr. Lisa Wong",
      bio: "Dr. Lisa Wong is a clinical psychologist and author specializing in happiness science and positive psychology.",
      image: "/avatar1.jpg",
    },
    transcript: "Let’s talk about happiness and how we define it...",
    tags: ["Happiness", "Psychology", "Well-being", "Health", "Neuroscience"],
    likes: 1395,
    downloads: 16400,
  },
  5: {
    id: 5,
    title: "Storytelling in the Digital Era",
    description:
      "Award-winning author James Rivera on how narrative techniques are evolving across different media platforms.",
    fullDescription:
      "James Rivera joins us to explore the transformation of storytelling in the digital world. From podcasts and TikToks to interactive narratives, we discuss how the way we tell and consume stories is shifting and what it means for creators and audiences.",
    date: "March 15, 2023",
    duration: "50 min",
    image: "/podcast1.jpg",
    category: "Arts",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "James Rivera",
      bio: "James Rivera is an award-winning novelist and multimedia storyteller with a passion for exploring the intersection of technology and narrative.",
      image: "/avatar1.jpg",
    },
    transcript: "James begins with a reflection on the power of story...",
    tags: ["Storytelling", "Digital Media", "Creativity", "Art", "Narrative"],
    likes: 823,
    downloads: 11327,
  },
  6: {
    id: 6,
    title: "Rethinking Urban Spaces",
    description:
      "Architect Zoe Chen shares her vision for creating more livable, sustainable, and community-oriented cities.",
    fullDescription:
      "What makes a city truly livable? Architect Zoe Chen discusses the importance of inclusive design, green infrastructure, and the role of public spaces in building healthier urban environments. We also look at cities around the world that are getting it right.",
    date: "March 1, 2023",
    duration: "47 min",
    image: "/podcast1.jpg",
    category: "Society",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Zoe Chen",
      bio: "Zoe Chen is an urban designer and sustainability consultant specializing in public space innovation and smart cities.",
      image: "/avatar1.jpg",
    },
    transcript: "Today’s conversation dives into the urban jungle...",
    tags: [
      "Urban Design",
      "Cities",
      "Architecture",
      "Sustainability",
      "Public Space",
    ],
    likes: 947,
    downloads: 12041,
  },
  7: {
    id: 7,
    title: "The Future of Work",
    description:
      "Future of work expert Thomas Lee discusses how AI, remote work, and changing attitudes are reshaping our professional lives.",
    fullDescription:
      "In this future-focused episode, Thomas Lee delves into the evolving landscape of work. We discuss the rise of gig culture, hybrid teams, automation, and how individuals and organizations can adapt. A must-listen for professionals, leaders, and HR teams.",
    date: "February 15, 2023",
    duration: "54 min",
    image: "/podcast1.jpg",
    category: "Technology",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Thomas Lee",
      bio: "Thomas Lee is a workplace futurist and author of 'Tomorrow's Office'. He advises companies on adapting to the new normal of work.",
      image: "/avatar1.jpg",
    },
    transcript: "Let’s talk about the jobs of the future...",
    tags: ["Future of Work", "Remote Work", "AI", "Careers", "Technology"],
    likes: 1194,
    downloads: 14018,
  },
  8: {
    id: 8,
    title: "Nutrition Myths Debunked",
    description:
      "Nutritionist Dr. Amara Singh separates fact from fiction in the often confusing world of diet and nutrition advice.",
    fullDescription:
      "With so many contradictory nutrition trends, how do we know what’s true? Dr. Amara Singh busts popular diet myths and provides clear, science-based advice to help you eat smarter. From carbs to keto, we tackle it all in this nutrition-packed episode.",
    date: "February 1, 2023",
    duration: "49 min",
    image: "/podcast1.jpg",
    category: "Health",
    audioUrl: "/podcast-audio.mp3",
    guest: {
      name: "Dr. Amara Singh",
      bio: "Dr. Amara Singh is a registered dietitian and clinical nutrition expert who aims to simplify nutrition through education and empowerment.",
      image: "/avatar1.jpg",
    },
    transcript:
      "We start today’s discussion with a look at common diet myths...",
    tags: ["Nutrition", "Health", "Diet", "Wellness", "Food"],
    likes: 1012,
    downloads: 13227,
  },
};

export default function EpisodeDetailPage({ params }) {
  const episode = episodes[Number.parseInt(params.id)];

  if (!episode) {
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
                  href="/episodes"
                  className="text-sm text-purple-700 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  ← Back to Episodes
                </Link>
              </div>
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
                      {episode.category}
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {episode.title}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {episode.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{episode.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>
                        {episode.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{episode.likes.toLocaleString()} likes</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700">
                      <Heart className="mr-2 h-4 w-4" />
                      Like Episode
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Player */}
        <section className="border-y bg-white py-6 dark:border-gray-800 dark:bg-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="">
              <AudioPlayer episode={episode} />
            </div>
          </div>
        </section>

        {/* Episode Content */}
        <section className="py-12">
          <div className="max-sm:px-5 px-20 ">
            <div className="">
              <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    {/* Full Description */}
                    <div>
                      <h2 className="mb-4 text-2xl font-bold">
                        About This Episode
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {episode.fullDescription}
                      </p>
                    </div>

                    {/* Tags */}
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {episode.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Share */}
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">
                        Share This Episode
                      </h3>
                      <ShareButtons episode={episode} />
                    </div>

                    <Separator />

                    {/* Comments */}
                    <EpisodeComments episodeId={episode.id} />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Guest Info */}
                  <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="mb-4 text-lg font-semibold">
                      Featured Guest
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={episode.guest.image || "/placeholder.svg"}
                            alt={episode.guest.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {episode.guest.name}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {episode.guest.bio}
                      </p>
                    </div>
                  </div>

                  {/* Episode Stats */}
                  <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h3 className="mb-4 text-lg font-semibold">
                      Episode Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Duration
                        </span>
                        <span className="font-medium">{episode.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Downloads
                        </span>
                        <span className="font-medium">
                          {episode.downloads.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Likes
                        </span>
                        <span className="font-medium">
                          {episode.likes.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          Published
                        </span>
                        <span className="font-medium">{episode.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subscribe CTA */}
                  <div className="rounded-xl bg-purple-50 p-6 dark:bg-purple-950">
                    <h3 className="mb-2 text-lg font-semibold">
                      Enjoying the show?
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      Subscribe to get notified about new episodes and exclusive
                      content.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                    >
                      <Link href="/subscribe">Subscribe Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Episodes */}
        <RelatedEpisodes
          currentEpisodeId={episode.id}
          category={episode.category}
        />
      </main>
    </div>
  );
}
