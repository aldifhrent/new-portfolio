import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-start">
       <Image
        src="/profile.png"
        alt="Profile photo"
        width={144}
        height={144}
        className="w-36 h-36 rounded-full object-cover mb-3"
      />

      <header className="mb-3">
        <h1 className="font-bold text-lg">Aldi Ahmad Fahrizi Ilmawan</h1>
        <p className="text-gray-600 text-sm">QA Engineer</p>
      </header>

     
      <p className="text-sm">
        Junior QA Engineer skilled in manual & automation testing (Playwright,
        Selenium, Katalon). Experienced in API testing, CI/CD pipelines, and
        Agile collaboration. Strong debugging, analytical, and problem-solving
        skills with solid web development background.
      </p>

      <p className="text-sm text-gray-600 mt-2">
        Open to Work (On-site/Hybrid in Jakarta)
      </p>
    </div>
  );
}
