import { experiences } from "@/app/lib/const";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-4">Experience</h2>

        <ul className="list-disc pl-5 flex flex-col gap-6" aria-label="Work experiences">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.role}-${i}`}>
              <article>
                <p className="font-bold">{exp.company}</p>
                <p className="font-light">{exp.role}</p>
                <p className="text-sm text-gray-600 mb-2">{exp.period}</p>

                {exp.details && (
                  <ul className="list-disc pl-5 text-sm text-gray-700 flex flex-col gap-1" aria-label={`${exp.company} details`}>
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
