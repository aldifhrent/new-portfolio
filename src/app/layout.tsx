import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldi Ahmad Fahrizi Ilmawan",
  description:
    "Portfolio of Aldi Ahmad Fahrizi Ilmawan, a QA Engineer and Web Developer specializing in automation testing with Playwright, API testing using Postman, and modern frontend development using Next.js and Tailwind CSS.",
  keywords: [
    "Aldi Ahmad Fahrizi Ilmawan",
    "QA Engineer",
    "Quality Assurance",
    "Software Tester",
    "Automation Testing",
    "Playwright",
    "Postman",
    "Next.js",
    "Tailwind CSS",
    "Web Developer",
    "Indonesia QA",
    "Purwadhika QA Engineer",
  ],
  authors: [{ name: "Aldi Ahmad Fahrizi Ilmawan", url: "https://aldifhr.fun" }],
  creator: "Aldi Ahmad Fahrizi Ilmawan",
  publisher: "Aldi Ahmad Fahrizi Ilmawan",

  openGraph: {
    title: "Aldi Ahmad Fahrizi Ilmawan",
    description:
      "Explore the portfolio of Aldi Ahmad Fahrizi Ilmawan, showcasing QA automation, API testing, and web development projects.",
    url: "https://aldifhrent.tech",
    siteName: "Aldi Ahmad Fahrizi Ilmawan",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  metadataBase: new URL("https://aldifhr.fun"),
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <main className="flex items-center justify-center min-h-screen w-full p-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 max-w-2xl w-full">
            <SideBar />
            <section className="flex flex-col gap-5">{children}<SpeedInsights/></section>
            
          </div>
        </main>
      </body>
      
    </html>
  );
}
