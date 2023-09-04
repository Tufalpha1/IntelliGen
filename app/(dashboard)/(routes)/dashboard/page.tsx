'use client';
import React from 'react'
import { Card } from '@/components/ui/card'
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowRight, Music, ImageIcon, VideoIcon, Code } from 'lucide-react'
import { cn } from '@/lib/utils'  


const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

const Dashboard = () => {
  const router = useRouter();
  return (
    <section className="relative text-white">
      <div className="mb-8 space-y-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold pt-12">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg">
          Chat with the smartest AI - Experience the power of AI.
        </p>
      </div>
      <div
        className="absolute top-0 translate-y-1/4 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[100px]">
        </div>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-white/10 text-white backdrop-filter backdrop-blur-lg shadow-lg"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Dashboard