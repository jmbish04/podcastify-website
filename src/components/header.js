"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Headphones, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Episodes", path: "/episodes" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className=" flex h-16 items-center justify-between max-sm:px-5 px-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-white dark:bg-purple-600">
            <Headphones className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold">Podcastify</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-base font-medium transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${
                  pathname === item.path
                    ? "text-purple-700 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isMobile && (
            <Button
              asChild
              className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 border-b bg-white px-4 py-6 shadow-lg dark:border-gray-800 dark:bg-gray-950">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-purple-700 dark:hover:text-purple-400 ${
                  pathname === item.path
                    ? "text-purple-700 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
