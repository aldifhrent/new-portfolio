export default function Skills() {
    return (
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
    )
}