import './globals.css'
import type { Metadata } from 'next'
import { dark } from "@clerk/themes";
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from '@/components/ModalProvider';
import ToasterProvider from '@/components/ToasterProvider';

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
        elements: {
          formButtonPrimary:
            " bg-[#36b49f] hover:bg-gradient-to-r from-[#36b49f]/90 to-[#DBFF75]/90 text-sm normal-case",
        },
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
