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

        {/* pakai list-disc supaya tiap item ada bullet bundar */}
        <ul className="list-disc pl-5 flex flex-col gap-3">
          {experiences.map((exp, i) => (
            <li key={i}>
              <p className="font-medium">
                {exp.role} — {exp.company}
              </p>
              <p className="text-sm text-gray-600">{exp.period}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
