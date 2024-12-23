import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Leftsidebar from "@/components/Layout/Leftsidebar";
import TopBar from "@/components/Layout/TopBar";
import type { JSX } from 'react';

const inter = Inter({ subsets: ["latin"], });



export const metadata: Metadata = {
  title: "Guitar Hub - Dashboard",
  description: "Admin dashboard to manage Guitar Hub data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='flex max-1g:flex-col'>
            <Leftsidebar />
            <TopBar />
            <div className='flex-1'>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
