import { experiences } from "@/app/lib/const";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Experience</h2>

        <ul className="list-disc pl-5 flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <li key={i}>
              <p className="font-bold">
                 {exp.company}
              </p>
              <p className="font-light">{exp.role} </p>
              <p className="text-sm text-gray-600 mb-1">{exp.period}</p>

              {/* tampilkan detail poin-poin jika ada */}
              {exp.details && (
                <ul className="list-disc pl-5 text-sm text-gray-700 flex flex-col gap-1">
                  {exp.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
