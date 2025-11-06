"use client";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "PT Puskomedia Indonesia Kreatif",
    period: "2022",
  },
  
];

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Experience</h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <div key={i}>
              <p className="font-medium">
                {exp.role} — {exp.company}
              </p>
              <p className="text-sm text-gray-600">{exp.period}</p>
            </div>
          ))}
        </div>
      </section>

     

      <section>
        <h2 className="font-semibold text-lg mb-2">Contact</h2>
        <p>
          <a
            href="https://www.linkedin.com/in/aldifahrizi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}
