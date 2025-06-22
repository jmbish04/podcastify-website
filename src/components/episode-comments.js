"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Reply, MoreHorizontal } from "lucide-react";

export function EpisodeComments({ episodeId }) {
  const [newComment, setNewComment] = useState("");

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "/avatar1.jpg",
      content:
        "This was such an insightful episode! Dr. Patel's perspective on AI in education really opened my eyes to the possibilities.",
      timestamp: "2 hours ago",
      likes: 12,
      replies: [
        {
          id: 2,
          author: "Alex Johnson",
          avatar: "/avatar1.jpg",
          content:
            "Thanks Sarah! We're so glad you found it valuable. Dr. Patel had so many great insights to share.",
          timestamp: "1 hour ago",
          likes: 5,
          isHost: true,
        },
      ],
    },
    {
      id: 3,
      author: "Mike Chen",
      avatar: "/avatar1.jpg",
      content:
        "I've been following Dr. Patel's work for years. It's amazing to hear her thoughts on the future of learning. Great questions from the hosts too!",
      timestamp: "4 hours ago",
      likes: 8,
      replies: [],
    },
    {
      id: 4,
      author: "Emma Rodriguez",
      avatar: "/avatar1.jpg",
      content:
        "As a teacher, this episode gave me so many ideas for incorporating technology in my classroom. Thank you for this content!",
      timestamp: "6 hours ago",
      likes: 15,
      replies: [],
    },
  ];

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In a real app, this would submit to an API
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>

      {/* Add Comment */}
      <div className="space-y-4">
        <Textarea
          placeholder="Share your thoughts about this episode..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-24"
        />
        <div className="flex justify-end">
          <Button
            onClick={handleSubmitComment}
            disabled={!newComment.trim()}
            className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-800 dark:hover:bg-purple-700"
          >
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={comment.avatar || "/placeholder.svg"}
                  alt={comment.author}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{comment.author}</span>
                  {comment.isHost && (
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                      Host
                    </span>
                  )}
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.content}
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-14 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <div className="h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={reply.avatar || "/placeholder.svg"}
                        alt={reply.author}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{reply.author}</span>
                        {reply.isHost && (
                          <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            Host
                          </span>
                        )}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {reply.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {reply.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1 px-2"
                        >
                          <Heart className="h-4 w-4" />
                          <span>{reply.likes}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1 px-2"
                        >
                          <Reply className="h-4 w-4" />
                          <span>Reply</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">Load More Comments</Button>
      </div>
    </div>
  );
}
