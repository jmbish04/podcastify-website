import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SubscribeSection() {
  return (
    <section className="bg-purple-700 py-20 text-white dark:bg-purple-900">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Never Miss an Episode
          </h2>
          <p className="mt-4 text-purple-100">
            Subscribe to our newsletter and be the first to know about new
            episodes, exclusive content, and special offers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Input
              placeholder="Enter your email"
              className="border-purple-500 bg-white/10 text-white placeholder:text-purple-200 focus-visible:ring-0 sm:w-80 outline-none shadow-none"
            />
            <Button className="bg-white text-purple-700 hover:bg-purple-50 dark:bg-white dark:text-purple-700 dark:hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm text-purple-200">
            By subscribing, you agree to our{" "}
            <Link href="#" className="underline hover:text-white">
              Privacy Policy
            </Link>
            . You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
