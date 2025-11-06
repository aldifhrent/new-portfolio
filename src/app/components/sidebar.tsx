'use client'

import { usePathname } from "next/navigation";
import { menus } from "../lib/const";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row lg:flex-col gap-2">
      {menus
        .map((m) => (
          <Link key={m.href} href={m.href} className="hover:underline">
            {m.name}
          </Link>
        ))}
    </nav>
  );
}
