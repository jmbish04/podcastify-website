import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EpisodeCard({ episode }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
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
        <div className="mb-2">
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
          >
            {episode.category}
          </Badge>
        </div>
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
  );
}
