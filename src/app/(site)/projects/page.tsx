import { projects } from "@/app/lib/const";

interface Project {
  title: string;
  year: number;
  desc: string;
  href: string;
}

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-4">Projects</h2>

        <ul className="list-disc pl-5 flex flex-col gap-4" aria-label="Projects list">
          {projects.map((p: Project) => (
            <li key={`${p.title}-${p.year}`}>
              <article>
                <p className="font-medium">
                  {p.title} - {p.year}
                </p>
                <p className="text-xs text-gray-600 mt-1">{p.desc}</p>
                <p className="mt-1">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                    aria-label={`View repository for project ${p.title}`}
                  >
                    View Repository
                  </a>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
