import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import Link from "next/link";

const SocialIcons = (platform) => {
  switch (platform) {
    case "Twitter":
      return <Twitter className="h-5 w-5" />;
    case "Instagram":
      return <Instagram className="h-5 w-5" />;
    case "Facebook":
      return <Facebook className="h-5 w-5" />;
    case "YouTube":
      return <Youtube className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  Get in Touch
                </span>
                <span>We&apos;d Love to Hear From You</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Have questions, feedback, or want to suggest a guest? Reach out
                to our team and we&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  We&apos;re here to help and answer any questions you might
                  have. We look forward to hearing from you.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                      <Mail className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        hello@podcastify.com
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We&apos;ll respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-teal-100 p-3 dark:bg-teal-900">
                      <Phone className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        (555) 123-4567
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mon-Fri from 9am to 5pm EST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-3 dark:bg-amber-900">
                      <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        123 Podcast Lane, Suite 101
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    {["Twitter", "Instagram", "Facebook", "YouTube"].map(
                      (platform) => (
                        <Link
                          key={platform}
                          href="#"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:text-purple-300"
                        >
                          <span className="sr-only">{platform}</span>
                          <div className="h-5 w-5 rounded-full">
                            {SocialIcons(platform)}
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <form className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          First Name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="min-h-32"
                      />
                    </div>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700 py-5">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20 dark:bg-background">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Find answers to common questions about our podcast
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                {
                  question:
                    "How can I suggest a topic or guest for the podcast?",
                  answer:
                    "You can suggest topics or guests by filling out our contact form or sending an email to suggestions@podcastify.com with details about your idea.",
                },
                {
                  question: "Do you offer sponsorship opportunities?",
                  answer:
                    "Yes, we offer various sponsorship packages. Please contact our partnerships team at sponsors@podcastify.com for more information.",
                },
                {
                  question: "How often do you release new episodes?",
                  answer:
                    "We release new episodes every Wednesday, with occasional bonus episodes on Fridays.",
                },
                {
                  question: "Can I download episodes for offline listening?",
                  answer:
                    "Yes, all our episodes are available for download on major podcast platforms including Spotify, Apple Podcasts, and Google Podcasts.",
                },
                {
                  question: "Do you have transcripts available for episodes?",
                  answer:
                    "Yes, we provide transcripts for all episodes. You can find them on each episode's page on our website.",
                },
                {
                  question: "How can I support the podcast?",
                  answer:
                    "You can support us by subscribing, leaving reviews, sharing episodes with friends, or becoming a member through our Patreon page.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md dark:border-muted/40"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
