"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const links = [
  { href: "/stores", label: "Stores" },
  { href: "/events", label: "Events" },
  { href: "/about-us", label: "About Us" },
  { href: "/visit", label: "Visit" },
  { href: "/offers", label: "Offers" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b-2 p-8">
      <h1 className="min-w-0 text-4xl font-bold">Crystal Mall</h1>
      <nav className="flex items-center justify-center gap-2">
        {links.map((link) => (
          <Link key={link.label} className="w-full" href={link.href}>
            <Button
              variant={pathname === link.href ? "default" : "ghost"}
              className="w-full"
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
