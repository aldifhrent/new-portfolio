import { certificates } from "@/app/lib/const";

export default function CertificatesPage() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-semibold text-lg mb-2">Certificates</h2>

        <ul className="list-disc pl-5 flex flex-col gap-3">
          {certificates.map((cert, i) => (
            <li key={i}>
              <p className="font-medium">{cert.title}</p>
              <p className="text-sm text-gray-600">{cert.org}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-1 block"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
