"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { SheetMenu } from "./sheet-menu";

const links = [
  { href: "/stores", label: "Stores" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
  { href: "/offers", label: "Offers" },
  { href: "/about-us", label: "About Us" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="border-b-2">
      <header className="mx-auto flex max-w-7xl items-center justify-between p-8">
        <Link href="/">
          <h1 className="min-w-0 text-4xl font-bold text-primary">
            Crystal Mall
          </h1>
        </Link>
        <div className="hidden lg:block">
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
        </div>
        <div className="lg:hidden">
          <SheetMenu />
        </div>
      </header>
    </div>
  );
}
