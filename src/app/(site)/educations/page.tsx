import { educations } from "@/app/lib/const";

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Education</h2>

        <ul className="list-disc pl-5 flex flex-col gap-4">
          {educations.map((edu, i) => (
            <li key={i}>
              <p className="font-medium">
                {edu.title} - {edu.location}
              </p>
              <p className="text-sm text-gray-600 mt-1">{edu.major}</p>
              <p className="text-sm text-gray-500 mb-1">{edu.year}</p>
              <p className="text-sm">{edu.gpa}</p>
              <p className="text-sm mt-2">
                <span className="font-semibold">Final Project:</span>{" "}
                {edu.finalProject}
              </p>
              {/* {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-1 block"
                >
                  View Project Repository
                </a>
              )} */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
