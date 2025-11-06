import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { menus } from "./lib/const";
import SideBar from "./components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldi Fahrizi — QA Engineer",
  description:
    "Portfolio of Aldi Ahmad Fahrizi Ilmawan, a QA Engineer and Web Developer focused on Playwright, API testing, and automation projects.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex items-center justify-center min-h-screen w-full p-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 max-w-xl w-full">
            {/* MENU: xs vertikal di kiri, sm+ horizontal di atas */}
            <SideBar />

            <section className="flex flex-col gap-5">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
