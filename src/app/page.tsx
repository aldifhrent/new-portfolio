"use client";
import Contacts from "./components/links";

export default function Home() {
  return (
    <section className="flex flex-col gap-1">
      <h1 className="font-bold text-lg">Aldi Ahmad Fahrizi Ilmawan</h1> 
     
      <img
        src="profile.png"
        alt="Profile photo"
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
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {[
            "Playwright",
            "Postman",
            "TypeScript",
            "GitHub Actions",
            "Jira",
            "TestRail",
          ].map((tool) => (
            <span key={tool} className="px-2 py-1 bg-gray-100 rounded">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <Contacts />
    </section>
  );
}
