import Link from "next/link";

const projects = [
  {
    title: "QA-PWDK-Playwright",
    desc: "Automation testing suite for the Simple POS PWDK web application using Playwright. Implemented Page Object Model (POM), fixtures, CI/CD pipelines, and comprehensive test coverage for login, product search, cart, and checkout workflows.",
    href: "https://github.com/aldifhrent/simple-pwdk", 
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Projects</h2>
        <div className="flex flex-col gap-3">
          {projects.map((p, i) => (
            <div key={i}>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <p className="mt-1">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Repository
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-2">Contact</h2>
        <p>
          <Link
            href="https://www.linkedin.com/in/aldifahrizi"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </Link>
        </p>
      </section>
    </div>
  );
}
