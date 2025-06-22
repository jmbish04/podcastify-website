import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";

export function RelatedEpisodes({ currentEpisodeId, category }) {
  // Mock related episodes data
  const relatedEpisodes = [
    {
      id: 3,
      title: "Climate Solutions: Local Actions, Global Impact",
      description:
        "Environmental activist Marcus Green discusses practical approaches to sustainability.",
      date: "April 12, 2023",
      duration: "45 min",
      image: "/podcast1.jpg",
    },
    {
      id: 4,
      title: "The Science of Happiness",
      description:
        "Psychologist Dr. Lisa Wong explores the latest research on what truly makes us happy.",
      date: "March 29, 2023",
      duration: "56 min",
      image: "/podcast1.jpg",
    },
    {
      id: 5,
      title: "Storytelling in the Digital Era",
      description:
        "Award-winning author James Rivera on how narrative techniques are evolving.",
      date: "March 15, 2023",
      duration: "50 min",
      image: "/podcast1.jpg",
    },
  ].filter((episode) => episode.id !== currentEpisodeId);

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="max-sm:px-5 px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              You Might Also Like
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              More episodes from the {category.toLowerCase()} category
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedEpisodes.slice(0, 3).map((episode) => (
              <div
                key={episode.id}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={episode.image || "/placeholder.svg"}
                    alt={episode.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <h3 className="mb-2 text-lg font-bold leading-tight">
                    {episode.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
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
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/episodes">View All Episodes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
