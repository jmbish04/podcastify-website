import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Headphones, Play, Star, ArrowRight } from "lucide-react";
import { FeaturedEpisodes } from "@/components/featured-episodes";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { PodcastStats } from "@/components/podcast-stats";
import { HostSection } from "@/components/host-section";
import { SubscribeSection } from "@/components/subscribe-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
          <div className=" relative max-sm:px-5 px-20 py-20 md:py-32">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block w-fit rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                  <div className="flex items-center gap-1.5">
                    <Headphones className="h-4 w-4" />
                    <span>New episodes every week</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="block text-purple-700 dark:text-purple-400">
                    Discover
                  </span>
                  <span>Inspiring Stories</span>
                </h1>
                <p className="max-w-[600px] text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                  Join us as we explore fascinating conversations with thought
                  leaders, innovators, and everyday heroes who are changing the
                  world.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                  >
                    <Link href="/episodes" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Listen Now
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950"
                  >
                    <Link href="/subscribe" className="flex items-center gap-2">
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-gray-900"
                      >
                        <Image
                          src={`/avatar${i}.jpg`}
                          alt={`Listener ${i}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                    <span className="text-gray-400 dark:text-gray-500">
                      (2.5k+ listeners)
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-teal-300 opacity-20 blur-3xl dark:bg-teal-700"></div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-300 opacity-20 blur-3xl dark:bg-purple-700"></div>
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-purple-100 bg-white p-2 shadow-xl dark:border-purple-900 dark:bg-gray-900">
                  <Image
                    src="/podcast-hero.avif"
                    alt="Podcast Cover"
                    width={500}
                    height={500}
                    className="h-full w-full rounded-xl object-cover"
                    priority
                  />
                  <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full bg-purple-700 p-4 shadow-lg dark:bg-purple-600 cursor-pointer hover:bg-purple-800">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="border-y border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-gray-900">
          <div className="max-sm:px-5 px-20">
            <div className="flex flex-col items-center flex-wrap justify-between gap-6 text-center md:flex-row md:text-left">
              <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                Available on your favorite platforms
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  "Spotify",
                  "Apple Podcasts",
                  "Google Podcasts",
                  "YouTube",
                ].map((platform) => (
                  <div
                    key={platform}
                    className="flex items-center gap-2 text-gray-500 transition-colors hover:text-purple-700 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                    <span className="font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Episodes */}
        <FeaturedEpisodes />

        {/* Podcast Stats */}
        <PodcastStats />

        {/* Host Section */}
        <HostSection />

        {/* Testimonials */}
        <TestimonialSlider />

        {/* Subscribe Section */}
        <SubscribeSection />
      </main>
    </div>
  );
}
