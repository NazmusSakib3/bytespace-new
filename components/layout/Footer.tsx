import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const browseLinks = [
  { href: "#courses", label: "Featured Courses" },
  { href: "#courses", label: "Featured Categories" },
  { href: "#courses", label: "Business" },
  { href: "#courses", label: "IT" },
  { href: "#courses", label: "Design" },
];

const categoryLinks = [
  { href: "#courses", label: "Development" },
  { href: "#courses", label: "Marketing" },
  { href: "#courses", label: "Photography" },
  { href: "#courses", label: "Finance" },
  { href: "#courses", label: "Sport" },
];

const platformLinks = [
  { href: "/signup", label: "Become a Creator" },
  { href: "#creators", label: "Affiliate Program" },
  { href: "/signup", label: "Contact" },
  { href: "#", label: "Help" },
  { href: "#", label: "About" },
];

/**
 * Figma Footer (34:1256) — 1440×525.
 * Content @ 120,71 / 1200×406; nav gap 92; link cols gap 40 items-end;
 * Browse/Platform labels are transparent in Figma (hidden).
 */
export function Footer() {
  return (
    <footer className="border-t border-[#CED0D3] bg-white text-[#242528]">
      <div className="mx-auto w-full max-w-[1440px] px-[120px] pb-12 pt-[71px]">
        {/* Content column — Figma gap 130 between nav and copyright */}
        <div className="flex w-full max-w-[1200px] flex-col gap-[130px]">
          <div className="flex flex-row items-start gap-[92px]">
            {/* Brand + newsletter — 528 */}
            <div className="flex w-full max-w-[528px] flex-col gap-[45px] lg:shrink-0">
              <div className="flex flex-col gap-4">
                <Logo />
                <p className="font-nav max-w-[528px] text-sm leading-[1.6] text-[#242528]">
                  Stay Up to date with our latest features and releases by joining our newsletter.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <form
                  className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
                  action="#"
                  method="post"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="h-[52px] w-full max-w-[376px] rounded-full border border-[#CED0D3] bg-white px-6 font-nav text-base leading-[1.6] text-[#242528] placeholder:text-[#242528]/60 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[46px] shrink-0 items-center justify-center rounded-3xl bg-brand-lime px-6 font-nav text-lg font-medium leading-[1.2] text-[#242528] transition hover:brightness-95"
                  >
                    Search
                  </button>
                </form>
                <p className="font-nav max-w-[504px] text-xs leading-[1.6] text-[#242528]">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates
                  from our company.
                </p>
              </div>
            </div>

            {/* Link columns — 580 wide, gap 40, items-end (middle col has no heading) */}
            <div className="flex w-full max-w-[580px] flex-wrap gap-8 sm:gap-10 lg:shrink-0 lg:gap-10">
              <ul className="flex min-w-[120px] flex-1 flex-col gap-4">
                {browseLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-nav text-sm leading-[1.6] text-[#242528] transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex min-w-[120px] flex-1 flex-col gap-4">
                {categoryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-nav text-sm leading-[1.6] text-[#242528] transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex min-w-[120px] flex-1 flex-col gap-4">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-nav text-sm leading-[1.6] text-[#242528] transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright_Text — 1200×42 */}
          <div className="flex h-[42px] flex-col justify-between">
            <div className="h-px w-full bg-[#CED0D3]" />
            <div className="flex flex-col gap-4 font-nav text-xs leading-[1.6] text-[#242528] sm:flex-row sm:items-start sm:justify-between">
              <p className="sm:w-[460px]">@ 2023 ByteSpace. All rights reserved.</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link href="#" className="hover:opacity-70">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-70">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:opacity-70">
                    Cookies Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
