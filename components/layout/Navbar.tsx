"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#courses", label: "Courses", active: false },
  { href: "#creators", label: "Creators", active: false },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-transparent">
      {/* Figma Header_Frame: 1440×120, side inset 120, item gap 24 */}
      <nav
        className="relative mx-auto flex h-[88px] w-full max-w-[1440px] items-center px-6 sm:h-[100px] sm:px-10 lg:h-[120px] lg:px-[120px]"
        aria-label="Main navigation"
      >
        <Logo variant="light" className="relative z-10" />

        <ul className="font-nav absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex">
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

        <div className="font-nav relative z-10 ml-auto hidden items-center gap-6 md:flex">
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

        <button
          type="button"
          className="relative z-10 ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/20 px-6 py-4 md:hidden">
          <ul className="font-nav flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-base font-medium text-[#f5f5f6]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-2">
              <Link
                href="/login"
                className="rounded-full border border-white/40 px-4 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-brand-blue"
                onClick={() => setOpen(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
