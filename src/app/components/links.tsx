import Link from "next/link";

export default function Contacts() {
  return (
    <div className="mt-3">
      <p className="font-semibold">Links</p>
      <ul className="mt-2 flex gap-5">
        <li>
          <Link
            href="https://www.linkedin.com/in/aldifahrizi"
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/aldifhrent"
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/aldi.fhrn/"
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/+6282218718161"
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone Number
          </Link>
        </li>
      </ul>
    </div>
  );
}
