'use client';
import React from 'react'
import { Card } from '@/components/ui/card'
import { useRouter } from "next/navigation";
import { MessageSquare, ArrowRight, Music, ImageIcon, VideoIcon, Code } from 'lucide-react'
import { cn } from '@/lib/utils'  
import { tools } from '@/constants';



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
        <div className="absolute inset-0 translate-z-0 bg-gradient-to-r from-[#36b49f]/20 to-[#DBFF75]/20 rounded-full blur-[80px]"></div>
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