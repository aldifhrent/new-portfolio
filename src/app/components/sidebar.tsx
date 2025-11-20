import { menus } from "../lib/const";
import Link from "next/link";

export default function SideBar() {
  return (
    <nav className="flex flex-wrap flex-row lg:flex-col gap-2" aria-label="Sidebar navigation">
      {menus.map((m) => (
        <Link 
          key={m.href} 
          href={m.href} 
          className="text-black hover:underline hover:text-blue-700 px-3 py-1 rounded"
        >
          {m.name}
        </Link>
      ))}
    </nav>
  );
}
