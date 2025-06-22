import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";

export function FeaturedEpisodes() {
  // Mock episode data
  const featuredEpisodes = [
    {
      id: 1,
      title: "Reimagining Education for the Digital Age",
      description:
        "A conversation with Dr. Maya Patel on how technology is transforming learning environments and what it means for future generations.",
      date: "May 10, 2023",
      duration: "48 min",
    },
    {
      id: 2,
      title: "The Art of Mindful Leadership",
      description:
        "Business leader Sarah Chen shares insights on building compassionate organizations that prioritize employee wellbeing without sacrificing success.",
      date: "April 26, 2023",
      duration: "52 min",
    },
    {
      id: 3,
      title: "Climate Solutions: Local Actions, Global Impact",
      description:
        "Environmental activist Marcus Green discusses practical approaches to sustainability that communities can implement today.",
      date: "April 12, 2023",
      duration: "45 min",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-sm:px-5 px-20">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Episodes
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Listen to our most popular conversations
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950"
          >
            <Link href="/episodes">View All Episodes</Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <Image
                  src={"/podcast1.jpg"}
                  alt={episode.title}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="icon"
                    className="h-12 w-12 rounded-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                  >
                    <Link href={`/episodes/${episode.id}`}>
                      <Play className="h-6 w-6 fill-white" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{episode.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{episode.duration}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight">
                  {episode.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {episode.description}
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 text-purple-700 dark:text-purple-400"
                >
                  <Link href={`/episodes/${episode.id}`}>Listen Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
