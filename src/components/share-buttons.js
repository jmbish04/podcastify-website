"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link, Mail } from "lucide-react";

export function ShareButtons({ episode }) {
  const shareUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/episodes/${episode.id}`;
  const shareText = `Check out this episode: ${episode.title}`;

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      url: `mailto:?subject=${encodeURIComponent(
        episode.title
      )}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      color: "hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // In a real app, you'd show a toast notification here
      console.log("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="sm"
          className={`gap-2 ${link.color}`}
          onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
        >
          {link.icon}
          {link.name}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="gap-2 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800"
        onClick={copyToClipboard}
      >
        <Link className="h-4 w-4" />
        Copy Link
      </Button>
    </div>
  );
}
