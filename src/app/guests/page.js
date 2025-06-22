import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GuestsPage() {
  const guests = [
    {
      id: 1,
      name: "Dr. Maya Patel",
      title: "Professor of Educational Technology",
      company: "Stanford University",
      bio: "Leading expert in educational technology and digital learning with over 15 years of research experience.",
      image: "/avatar1.jpg",
      episode: {
        id: 1,
        title: "Reimagining Education for the Digital Age",
        date: "May 10, 2023",
      },
      expertise: ["Education", "Technology", "AI", "Learning"],
      website: "https://example.com",
      social: {
        twitter: "@drmayapatel",
        linkedin: "mayapatel",
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "CEO & Mindfulness Instructor",
      company: "MindfulCorp",
      bio: "Passionate advocate for conscious leadership and creating workplaces where people can thrive.",
      image: "/avatar1.jpg",
      episode: {
        id: 2,
        title: "The Art of Mindful Leadership",
        date: "April 26, 2023",
      },
      expertise: ["Leadership", "Mindfulness", "Business", "Wellbeing"],
      website: "https://example.com",
      social: {
        twitter: "@sarahchen",
        linkedin: "sarahchen",
      },
    },
    {
      id: 3,
      name: "Marcus Green",
      title: "Environmental Activist",
      company: "Green Future Initiative",
      bio: "Environmental activist focused on practical sustainability solutions for communities worldwide.",
      image: "/avatar1.jpg",
      episode: {
        id: 3,
        title: "Climate Solutions: Local Actions, Global Impact",
        date: "April 12, 2023",
      },
      expertise: ["Environment", "Sustainability", "Climate", "Activism"],
      website: "https://example.com",
      social: {
        twitter: "@marcusgreen",
        linkedin: "marcusgreen",
      },
    },
    {
      id: 4,
      name: "Dr. Lisa Wong",
      title: "Clinical Psychologist",
      company: "Happiness Research Institute",
      bio: "Researcher specializing in positive psychology and the science of happiness and wellbeing.",
      image: "/avatar1.jpg",
      episode: {
        id: 4,
        title: "The Science of Happiness",
        date: "March 29, 2023",
      },
      expertise: ["Psychology", "Happiness", "Research", "Wellbeing"],
      website: "https://example.com",
      social: {
        twitter: "@drlisawong",
        linkedin: "lisawong",
      },
    },
    {
      id: 5,
      name: "James Rivera",
      title: "Award-winning Author",
      company: "Independent",
      bio: "Bestselling author exploring how narrative techniques evolve across different media platforms.",
      image: "/avatar1.jpg",
      episode: {
        id: 5,
        title: "Storytelling in the Digital Era",
        date: "March 15, 2023",
      },
      expertise: ["Writing", "Storytelling", "Media", "Literature"],
      website: "https://example.com",
      social: {
        twitter: "@jamesrivera",
        linkedin: "jamesrivera",
      },
    },
    {
      id: 6,
      name: "Zoe Chen",
      title: "Architect & Urban Planner",
      company: "Future Cities Design",
      bio: "Visionary architect creating more livable, sustainable, and community-oriented urban spaces.",
      image: "/avatar1.jpg",
      episode: {
        id: 6,
        title: "Rethinking Urban Spaces",
        date: "March 1, 2023",
      },
      expertise: ["Architecture", "Urban Planning", "Sustainability", "Design"],
      website: "https://example.com",
      social: {
        twitter: "@zoechen",
        linkedin: "zoechen",
      },
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Business",
    "Environment",
    "Psychology",
    "Arts",
    "Design",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  Featured
                </span>
                <span>Guests</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Meet the inspiring individuals who have shared their stories,
                insights, and expertise on our podcast.
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
                <Input placeholder="Search episodes..." className="pl-10" />
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

        {/* Guests Grid */}
        <section className="py-12">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {guests.map((guest) => (
                <div
                  key={guest.id}
                  className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={guest.image || "/placeholder.svg"}
                      alt={guest.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{guest.name}</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-400">
                        {guest.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {guest.company}
                      </p>
                    </div>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      {guest.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-4 flex flex-wrap gap-1">
                      {guest.expertise.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {guest.expertise.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{guest.expertise.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Episode Info */}
                    <div className="mb-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span>{guest.episode.date}</span>
                      </div>
                      <Link
                        href={`/episodes/${guest.episode.id}`}
                        className="text-sm font-medium hover:text-purple-700 dark:hover:text-purple-400"
                      >
                        {guest.episode.title}
                      </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                      >
                        <Link href={`/episodes/${guest.episode.id}`}>
                          Listen
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More Guests</Button>
            </div>
          </div>
        </section>

        {/* Guest Application */}
        <section className="bg-purple-50 py-20 dark:bg-gray-900">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Want to Be a Guest?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We&apos;re always looking for inspiring individuals with unique
                stories and valuable insights to share.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                >
                  <Link href="/contact">Apply to Be a Guest</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">Learn About Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Guest Stats */}
        <section className="py-16">
          <div className="max-sm:px-5 px-20">
            <div className="">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Total Guests", value: "150+" },
                  { label: "Countries Represented", value: "25+" },
                  { label: "Industries Covered", value: "40+" },
                  { label: "Expert Interviews", value: "200+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
