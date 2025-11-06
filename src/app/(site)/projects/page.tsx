import { projects } from "@/app/lib/const";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Projects</h2>

        <ul className="list-disc pl-5 flex flex-col gap-3">
          {projects.map((p, i) => (
            <li key={i}>
              <p className="font-medium">{p.title}</p>
              <p className="text-xs text-gray-600 mt-1">{p.desc}</p>
              <p className="mt-1">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Repository
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
