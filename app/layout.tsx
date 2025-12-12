import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Big Ass Calendar - Yearly Calendar Planner for Goals & Inspiration",
  description: "Create and print your perfect yearly calendar. The Big Ass Calendar helps you plan goals, track inspiration, and organize your entire year at a glance. Customizable themes, bilingual support, and print-ready format.",
  keywords: [
    "yearly calendar",
    "big ass calendar",
    "goals calendar",
    "inspiration calendar",
    "annual calendar planner",
    "year planner",
    "printable calendar",
    "wall calendar",
    "goal tracking calendar",
    "yearly planner",
    "calendar 2026",
    "calendar 2025",
    "large format calendar",
    "custom calendar",
    "motivational calendar"
  ],
  authors: [{ name: "Big Ass Calendar" }],
  creator: "Big Ass Calendar",
  publisher: "Big Ass Calendar",
  openGraph: {
    title: "Big Ass Calendar - Yearly Calendar for Goals & Inspiration",
    description: "Plan your entire year with the Big Ass Calendar. Perfect for tracking goals, staying inspired, and organizing your life. Customize, print, and achieve more.",
    type: "website",
    locale: "en_US",
    siteName: "Big Ass Calendar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Ass Calendar - Yearly Calendar Planner",
    description: "Create your perfect yearly calendar for goals and inspiration. Customize, print, and plan your best year yet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
