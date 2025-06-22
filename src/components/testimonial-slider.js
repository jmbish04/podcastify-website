"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

export function TestimonialSlider() {
  const testimonials = [
    {
      quote:
        "This podcast has completely changed my perspective on so many important issues. The host asks the questions I didn't even know I wanted answers to!",
      author: "Jamie Smith",
      title: "Marketing Director",
      image: "/avatar1.jpg",
    },
    {
      quote:
        "I've been listening since the first episode and the quality of guests and conversations just keeps getting better. It's my go-to recommendation for friends.",
      author: "Taylor Wong",
      title: "Software Engineer",
      image: "/avatar2.jpg",
    },
    {
      quote:
        "The perfect blend of educational and entertaining. I look forward to new episodes every week and always come away with fresh insights.",
      author: "Alex Rivera",
      title: "College Professor",
      image: "/avatar3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="max-sm:px-5 px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Listeners Say
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Join thousands of satisfied listeners who tune in every week
            </p>
          </div>
          <div className="relative rounded-2xl bg-purple-50 p-8 dark:bg-gray-900 md:p-12">
            <div className="absolute left-8 top-8 text-purple-200 dark:text-purple-800">
              <Quote className="h-16 w-16" />
            </div>
            <div className="relative z-10">
              {/* Smooth animation using key change */}
              <div
                key={current}
                className="animate-fadeIn transition-opacity duration-500"
              >
                <blockquote className="mb-8 text-xl font-medium italic md:text-2xl">
                  &quot;{testimonials[current].quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[current].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="h-8 w-8 rounded-full border-purple-200 hover:bg-purple-100 dark:border-purple-800 dark:hover:bg-purple-900"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="h-8 w-8 rounded-full border-purple-200 hover:bg-purple-100 dark:border-purple-800 dark:hover:bg-purple-900"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
