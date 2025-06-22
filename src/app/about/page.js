import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mic, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  About
                </span>
                <span>Our Podcast</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Discover the story behind our mission to bring you the most
                inspiring conversations and thought-provoking discussions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-purple-200 dark:bg-purple-900"></div>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-teal-200 dark:bg-teal-900"></div>
                <div className="relative  overflow-hidden rounded-2xl">
                  <Image
                    src="/podcast-story.jpg"
                    alt="Our Story"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2020, our podcast began with a simple mission: to
                  share stories that inspire, educate, and entertain. What
                  started as casual conversations among friends quickly evolved
                  into a platform for amplifying diverse voices and
                  perspectives.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we reach listeners in over 50 countries, creating a
                  global community united by curiosity and a passion for
                  learning. Each episode is crafted with care, bringing you
                  authentic conversations with thought leaders, innovators, and
                  everyday heroes.
                </p>
                <div>
                  <Button className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700">
                    <Link href="/episodes">Explore Our Episodes</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                The principles that guide our content creation and community
                building
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <Mic className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  ),
                  title: "Authentic Voices",
                  description:
                    "We believe in the power of genuine conversations and unfiltered perspectives.",
                },
                {
                  icon: (
                    <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  ),
                  title: "Inclusive Community",
                  description:
                    "Creating a space where diverse voices and experiences are celebrated.",
                },
                {
                  icon: (
                    <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                  ),
                  title: "Quality Content",
                  description:
                    "Committed to producing thoughtful, well-researched, and engaging episodes.",
                },
                {
                  icon: (
                    <Heart className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                  ),
                  title: "Positive Impact",
                  description:
                    "Using our platform to inspire action and create meaningful change.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-sm dark:bg-gray-800"
                >
                  <div className="mb-4 rounded-full bg-purple-50 p-3 dark:bg-purple-950">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Meet the Team
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                The passionate individuals behind the microphones and production
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "Host & Producer",
                  bio: "Former journalist with a passion for storytelling and uncovering hidden narratives.",
                },
                {
                  name: "Sam Rivera",
                  role: "Co-Host & Research Lead",
                  bio: "Cultural anthropologist bringing academic insights and global perspectives.",
                },
                {
                  name: "Taylor Kim",
                  role: "Audio Engineer",
                  bio: "Sound design expert creating immersive audio experiences for our listeners.",
                },
                {
                  name: "Jordan Smith",
                  role: "Content Director",
                  bio: "Curates our episode themes and ensures quality across all our content.",
                },
                {
                  name: "Morgan Lee",
                  role: "Community Manager",
                  bio: "Builds and nurtures our listener community across platforms.",
                },
                {
                  name: "Casey Wong",
                  role: "Marketing Specialist",
                  bio: "Helps new listeners discover our podcast through creative campaigns.",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800"
                >
                  <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={`/avatar1.jpg`}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-purple-600 dark:text-purple-400">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
