import './globals.css'
import type { Metadata } from 'next'
import { dark } from "@clerk/themes";
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "IntelliGen",
  description: "Unlock the Power of AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        // elements: {
        //   formButtonPrimary:
        //     "bg-slate-800 hover:bg-slate-700 text-sm normal-case",
        // },
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
