// pages/faq.js
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="block text-purple-700 dark:text-purple-400">
                  Frequently Asked
                </span>
                <span>Questions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about Podcastify.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 dark:bg-background">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
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
