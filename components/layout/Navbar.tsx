"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#courses", label: "Courses", active: false },
  { href: "#creators", label: "Creators", active: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-transparent">
      <nav
        className="relative mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:h-[88px] sm:px-8 lg:h-[120px] lg:px-[120px]"
        aria-label="Main navigation"
      >
        <Logo variant="light" className="relative z-10 text-2xl font-bold text-[#f5f5f6]" />

        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.active
                    ? "text-base font-medium leading-[1.2] text-[#f5f5f6]"
                    : "text-base font-normal leading-[1.6] text-[#f5f5f6]/95 transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative z-10 ml-auto hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-base leading-6 text-[#f5f5f6] transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-base leading-6 text-[#f5f5f6] transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            type="button"
            className="inline-flex size-6 items-center justify-center text-[#f5f5f6] transition hover:text-white"
            aria-label="Shopping bag"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 8h12l-1 12H7L6 8z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 8V7a3 3 0 016 0v1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
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
        <div
          id="mobile-menu"
          className="border-t border-white/20 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-2">
              <Link
                href="/login"
                className="rounded-full border border-white/40 px-4 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-brand-blue"
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
