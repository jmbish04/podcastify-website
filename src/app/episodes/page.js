import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EpisodeCard } from "@/components/episode-card";
import { Search } from "lucide-react";

export default function EpisodesPage() {
  // Mock episode data
  const episodes = [
    {
      id: 1,
      title: "Reimagining Education for the Digital Age",
      description:
        "A conversation with Dr. Maya Patel on how technology is transforming learning environments and what it means for future generations.",
      date: "May 10, 2023",
      duration: "48 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+1",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Art of Mindful Leadership",
      description:
        "Business leader Sarah Chen shares insights on building compassionate organizations that prioritize employee wellbeing without sacrificing success.",
      date: "April 26, 2023",
      duration: "52 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+2",
      category: "Business",
    },
    {
      id: 3,
      title: "Climate Solutions: Local Actions, Global Impact",
      description:
        "Environmental activist Marcus Green discusses practical approaches to sustainability that communities can implement today.",
      date: "April 12, 2023",
      duration: "45 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+3",
      category: "Environment",
    },
    {
      id: 4,
      title: "The Science of Happiness",
      description:
        "Psychologist Dr. Lisa Wong explores the latest research on what truly makes us happy and how we can apply these findings in our daily lives.",
      date: "March 29, 2023",
      duration: "56 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+4",
      category: "Health",
    },
    {
      id: 5,
      title: "Storytelling in the Digital Era",
      description:
        "Award-winning author James Rivera on how narrative techniques are evolving across different media platforms.",
      date: "March 15, 2023",
      duration: "50 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+5",
      category: "Arts",
    },
    {
      id: 6,
      title: "Rethinking Urban Spaces",
      description:
        "Architect Zoe Chen shares her vision for creating more livable, sustainable, and community-oriented cities.",
      date: "March 1, 2023",
      duration: "47 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+6",
      category: "Society",
    },
    {
      id: 7,
      title: "The Future of Work",
      description:
        "Future of work expert Thomas Lee discusses how AI, remote work, and changing attitudes are reshaping our professional lives.",
      date: "February 15, 2023",
      duration: "54 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+7",
      category: "Technology",
    },
    {
      id: 8,
      title: "Nutrition Myths Debunked",
      description:
        "Nutritionist Dr. Amara Singh separates fact from fiction in the often confusing world of diet and nutrition advice.",
      date: "February 1, 2023",
      duration: "49 min",
      image: "/placeholder.svg?height=400&width=400&text=Ep+8",
      category: "Health",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Business",
    "Health",
    "Environment",
    "Arts",
    "Society",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto  text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  Explore
                </span>
                <span>Our Episodes</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Discover our full library of conversations, stories, and
                insights from thought leaders around the world.
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

        {/* Episodes Grid */}
        <section className="py-12">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-8 sm:grid-cols-2  xl:grid-cols-3">
              {episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950"
              >
                Load More Episodes
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-purple-50 py-16 dark:bg-gray-900">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Never Miss an Episode
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Subscribe to our newsletter and get notified when new episodes
                are released.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Input
                  placeholder="Enter your email"
                  className="sm:w-80 bg-white outline-none focus-visible:ring-0 shadow-none"
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
