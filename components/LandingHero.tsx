"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 ">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b49f]/90 to-[#DBFF75]/90 pb-2 tracking-tighter">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-300 tracking-tighter">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold tracking-tight"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
      <Alert>
        <Terminal className="h-4 w-4 text-white" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          <p className="text-center text-sm font-medium">
            Due to OpenAI and Replica API limit being exceeded,{" "}
            <span className="underline">{`You won't be able to generate any content.`}</span>{" "}
            You can still view the website and its features.
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
};
