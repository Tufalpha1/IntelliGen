"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeroPattern } from "./HeroPattern";


const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
    <HeroPattern />
      <Link href="/" className="flex items-center">
        <h1 className={cn("text-2xl font-medium text-white", font.className)}>
          IntelliGen
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
