import Link from "next/link";
import { Headphones } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";

const SocialIcons = (platform) => {
  switch (platform) {
    case "Twitter":
      return <Twitter className="h-4 w-4" />;
    case "Instagram":
      return <Instagram className="h-4 w-4" />;
    case "Facebook":
      return <Facebook className="h-4 w-4" />;
    case "YouTube":
      return <Youtube className="h-4 w-4" />;
    default:
      return null;
  }
};

export function Footer() {
  return (
    <footer className="border-t bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="px-10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 text-white dark:bg-purple-600">
                <Headphones className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">Podcastify</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Inspiring conversations with thought leaders, innovators, and
              everyday heroes who are changing the world.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "Facebook", "YouTube"].map(
                (platform) => (
                  <Link
                    key={platform}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:text-purple-300"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="h-4 w-4 rounded-full ">
                      {SocialIcons(platform)}
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Episodes", path: "/episodes" },
                { name: "Subscribe", path: "/subscribe" },
                { name: "Contact", path: "/contact" },
                { name: "Hosts", path: "/hosts" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "FAQs", path: "#" },
                { name: "Support", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
                { name: "Accessibility", path: "#" },
                { name: "Guests", path: "/guests" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-600 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Subscribe
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Get notified about new episodes and exclusive content.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-purple-600"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-purple-700 px-3 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-purple-800 dark:hover:bg-purple-700 dark:focus:ring-purple-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Podcastify. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href="#"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="hover:text-purple-700 dark:hover:text-purple-400"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
