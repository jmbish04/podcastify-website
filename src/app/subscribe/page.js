import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function SubscribePage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic access to our podcast content",
      features: [
        "Access to all public episodes",
        "Regular release schedule",
        "Listen on all major platforms",
        "Subscribe to newsletter",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$5",
      period: "per month",
      description: "Enhanced listening experience with exclusive content",
      features: [
        "Everything in Free",
        "Ad-free episodes",
        "Exclusive bonus content",
        "Early access to new episodes",
        "Full archive access",
      ],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Supporter",
      price: "$10",
      period: "per month",
      description: "Ultimate fan experience with direct engagement",
      features: [
        "Everything in Premium",
        "Monthly Q&A sessions",
        "Behind-the-scenes content",
        "Vote on future topics",
        "Exclusive merchandise discounts",
        "Direct access to hosts",
      ],
      cta: "Become a Supporter",
      popular: false,
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
                  Subscribe
                </span>
                <span>Join Our Community</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that works for you and get access to exclusive
                content, early releases, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-sm:px-5 px-20">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${
                    plan.popular
                      ? "border-purple-400 shadow-lg dark:border-purple-600"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-purple-600 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <CardDescription className="mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
                          : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                What Our Subscribers Say
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Join thousands of satisfied listeners who have enhanced their
                podcast experience
              </p>
            </div>
            <div className="mt-16 grid gap-7 md:grid-cols-3">
              {[
                {
                  quote:
                    "The premium content is absolutely worth it. I love the ad-free experience and the bonus episodes are always insightful.",
                  author: "Jamie T.",
                  title: "Premium Subscriber",
                },
                {
                  quote:
                    "Being a supporter has connected me with an amazing community. The Q&A sessions with the hosts are my favorite part!",
                  author: "Alex M.",
                  title: "Supporter Member",
                },
                {
                  quote:
                    "I've learned so much from the exclusive content. The early access to episodes means I'm always ahead of the conversation.",
                  author: "Sam K.",
                  title: "Premium Subscriber",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-muted bg-background p-6 shadow-sm transition hover:shadow-md dark:border-muted/40"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 shadow-sm group-hover:scale-105 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/40 dark:bg-background">
          <div className="max-sm:px-5 px-20">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to know about our subscription plans.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "How do I access premium content?",
                  answer:
                    "After subscribing, you'll receive login credentials for our website and app where you can access all premium content. You'll also get a special RSS feed for your podcast player.",
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.",
                },
                {
                  question: "Is there a student discount?",
                  answer:
                    "Yes, we offer a 50% discount for students. Please contact our support team with proof of enrollment to receive your discount code.",
                },
                {
                  question: "How do I join the monthly Q&A sessions?",
                  answer:
                    "Supporter members receive calendar invites to all Q&A sessions. You can join via Zoom or submit questions in advance if you can't attend live.",
                },
                {
                  question: "Do you offer group or corporate subscriptions?",
                  answer:
                    "Yes, we offer special rates for groups of 5 or more. Please contact our team at corporate@podcastify.com for details.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and Apple Pay. For annual subscriptions, we also offer bank transfer options.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-muted bg-background p-6 shadow-sm transition hover:shadow-md dark:border-muted/40"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-purple-700 to-purple-800 py-20 text-white dark:from-purple-900 dark:to-purple-950">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to Enhance Your Listening Experience?
              </h2>
              <p className="mt-4 text-purple-100">
                Join our community of passionate listeners and get access to
                exclusive content today.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300 transition-all shadow-md hover:shadow-lg"
                >
                  Subscribe Now
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-white text-white hover:bg-white/10 hover:text-white transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Not Ready to Subscribe?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Stay updated with our free newsletter and be the first to know
                about new episodes and special offers.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Input
                  placeholder="Enter your email"
                  className="sm:w-80 focus-visible:ring-0"
                />
                <Button className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700">
                  Subscribe to Newsletter
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
