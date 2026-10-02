"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#courses", label: "Courses", active: false },
  { href: "#creators", label: "Creators", active: false },
] as const;

/** Desktop Header_Frame — sits inside the scaled 1440 Hero_Frame. */
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav
        className="relative flex h-[120px] w-full items-center px-[120px]"
        aria-label="Main navigation"
      >
        <Logo variant="light" className="relative z-10" />

        <ul className="font-nav absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.active
                    ? "text-base font-medium leading-[1.2] text-[#f5f5f6]"
                    : "text-base font-normal leading-[1.6] text-[#f5f5f6] transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="font-nav relative z-10 ml-auto flex items-center gap-6">
          <Link
            href="/login"
            className="text-base font-normal leading-6 text-[#f5f5f6] transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-base font-normal leading-6 text-[#f5f5f6] transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            type="button"
            className="inline-flex size-6 items-center justify-center transition hover:opacity-80"
            aria-label="Shopping bag"
          >
            <Image
              src="/figma/shopping-bag.svg"
              alt=""
              width={24}
              height={24}
              unoptimized
              className="size-6"
              aria-hidden
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
