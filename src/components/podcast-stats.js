import { Users, Headphones, Star, Globe } from "lucide-react";

export function PodcastStats() {
  const stats = [
    {
      icon: (
        <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />
      ),
      value: "250+",
      label: "Episodes",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      value: "2.5M+",
      label: "Listeners",
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      value: "4.9",
      label: "Average Rating",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      value: "50+",
      label: "Countries",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 dark:from-gray-900 dark:to-gray-950">
      <div className="max-sm:px-5 px-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border bg-background p-8 shadow-sm transition hover:shadow-md dark:border-muted/40"
            >
              <div className="mb-4 rounded-full bg-muted p-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-neutral-700">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
