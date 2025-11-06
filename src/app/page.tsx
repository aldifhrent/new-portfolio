"use client";
import Image from "next/image";
import Contacts from "./components/links";

export default function Home() {
  return (
    <section className="flex flex-col gap-1">
      <h1 className="font-bold text-lg">Aldi Ahmad Fahrizi Ilmawan</h1>
      <p className="text-gray-600 text-sm">QA Engineer</p>

      <Image
        src="/profile.png"
        alt="Profile photo"
        width={144}
        height={144}
        className="w-36 h-36 rounded-full object-cover mt-3 mb-3"
      />

      <p className="text-sm">
        Web developer turned QA enthusiast with a strong foundation in
        JavaScript and React.js. Bringing technical insight and attention to
        detail to design effective test cases and automation scripts.
      </p>

      <p className="text-sm text-gray-600 mt-2">
        Open to Work (Hybrid/On-site in Jakarta)
      </p>

      <div>
        <p className="font-semibold mt-3">Skills</p>
        <ul className="mt-2 flex flex-col gap-2 text-sm list-disc pl-5">
          {[
            "Playwright",
            "Postman",
            "TypeScript",
            "GitHub Actions",
            "Jira",
            "TestRail",
          ].map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <Contacts />
    </section>
  );
}
