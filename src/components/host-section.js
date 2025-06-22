import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HostSection() {
  return (
    <section className="py-20">
      <div className="max-sm:px-5 px-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-purple-200 dark:bg-purple-900"></div>
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-teal-200 dark:bg-teal-900"></div>
            <div className="relative  overflow-hidden rounded-2xl">
              <Image
                src="/podcast-host.jpg"
                alt="Podcast Host"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-800 dark:bg-purple-950 dark:text-purple-300">
              Meet Your Host
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Alex Johnson</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Alex is a former journalist with over a decade of experience in
              media. After working for major news outlets, Alex launched this
              podcast to explore deeper conversations with thought leaders and
              innovators who are making a difference in the world.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With a passion for storytelling and uncovering hidden narratives,
              Alex brings a unique perspective to each interview, asking the
              questions that truly matter and creating a space for authentic
              dialogue.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
              >
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950"
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
