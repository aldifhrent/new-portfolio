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
        Junior QA Engineer skilled in manual & automation testing (Playwright,
        Selenium, Katalon). Experienced in API testing, CI/CD pipelines, and
        Agile collaboration. Strong debugging, analytical, and problem-solving
        skills with solid web development background.
      </p>

      <p className="text-sm text-gray-600 mt-2">
        Open to Work (Hybrid/On-site in Jakarta)
      </p>

      <div>
        <p className="font-semibold mt-3">Skills</p>
        <ul className="mt-2 flex  gap-10 text-sm list-disc pl-5">
          {[
            "Playwright",
            "Postman",
            "TypeScript",
            "GitHub Actions",
            "Jira",
            "TestRail",
          ].map((tool) => (
            <li key={tool} className="text-nowrap">{tool}</li>
          ))}
        </ul>
      </div>

      <Contacts />
    </section>
  );
}
