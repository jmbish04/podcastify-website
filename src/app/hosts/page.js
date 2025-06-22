import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Linkedin } from "lucide-react";

export default function HostsPage() {
  const hosts = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Host & Producer",
      bio: "Alex is a former journalist with over a decade of experience in media. After working for major news outlets, Alex launched this podcast to explore deeper conversations with thought leaders and innovators who are making a difference in the world.",
      fullBio:
        "With a passion for storytelling and uncovering hidden narratives, Alex brings a unique perspective to each interview, asking the questions that truly matter and creating a space for authentic dialogue. Alex holds a Master's degree in Journalism from Columbia University and has won several awards for investigative reporting. When not podcasting, Alex enjoys hiking, reading philosophy, and experimenting with new coffee brewing methods.",
      image: "/podcast-host.webp",
      expertise: ["Journalism", "Storytelling", "Interviewing", "Media"],
      episodes: 127,
      social: {
        twitter: "@alexjohnson",
        linkedin: "alexjohnson",
        email: "alex@podcastify.com",
      },
    },
    {
      id: 2,
      name: "Sam Rivera",
      role: "Co-Host & Research Lead",
      bio: "Cultural anthropologist bringing academic insights and global perspectives to every conversation.",
      fullBio:
        "Sam Rivera is a cultural anthropologist with a PhD from Harvard University. With extensive fieldwork experience across five continents, Sam brings a unique global perspective to the podcast. Their research focuses on how technology impacts traditional cultures and communities. Sam is fluent in six languages and has published numerous papers on digital anthropology. Outside of work, Sam is an avid traveler, photographer, and advocate for indigenous rights.",
      image: "/podcast-host.webp",
      expertise: [
        "Anthropology",
        "Research",
        "Global Cultures",
        "Technology Impact",
      ],
      episodes: 89,
      social: {
        twitter: "@samrivera",
        linkedin: "samrivera",
        email: "sam@podcastify.com",
      },
    },
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
                  Meet
                </span>
                <span>Your Hosts</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Get to know the passionate individuals behind the microphones
                who bring you inspiring conversations every week.
              </p>
            </div>
          </div>
        </section>

        {/* Hosts */}
        <section className="py-20">
          <div className="container px-4">
            <div className="space-y-20">
              {hosts.map((host, index) => (
                <div key={host.id} className="mx-auto max-w-6xl">
                  <div
                    className={`grid gap-12 md:grid-cols-2 md:gap-16 ${
                      index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "md:col-start-2" : ""
                      }`}
                    >
                      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-purple-200 dark:bg-purple-900"></div>
                      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-teal-200 dark:bg-teal-900"></div>
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src={host.image || "/placeholder.svg"}
                          alt={host.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={`flex flex-col justify-center space-y-6 ${
                        index % 2 === 1 ? "md:col-start-1" : ""
                      }`}
                    >
                      <div>
                        <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                          {host.role}
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight">
                          {host.name}
                        </h2>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {host.fullBio}
                      </p>

                      {/* Expertise */}
                      <div>
                        <h3 className="mb-3 text-lg font-semibold">
                          Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {host.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6">
                        <div>
                          <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                            {host.episodes}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            Episodes Hosted
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Twitter className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="max-sm:px-5 px-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Behind the Scenes
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Learn about our podcast creation process and what goes into each
                episode
              </p>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Research & Preparation",
                  description:
                    "Each episode begins with extensive research. Our team spends hours preparing thoughtful questions and understanding our guests' backgrounds.",
                  icon: "📚",
                },
                {
                  title: "Recording Process",
                  description:
                    "We record in our professional studio, ensuring high-quality audio. Most episodes are recorded in a single session to maintain natural flow.",
                  icon: "🎙️",
                },
                {
                  title: "Post-Production",
                  description:
                    "Our audio team carefully edits each episode, adding music, removing filler words, and ensuring the best listening experience.",
                  icon: "🎧",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-muted bg-background p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-muted/40"
                >
                  <div className="mb-5 text-5xl transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Hosts */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Want to Connect?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our hosts love hearing from listeners. Reach out with questions,
                feedback, or guest suggestions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/episodes">Listen to Episodes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
