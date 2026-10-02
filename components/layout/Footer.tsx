"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Logo } from "@/components/layout/Logo";

const FIGMA_W = 1440;

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
 * Figma Footer (34:1256) — 1440×525 artboard scaled to cover full width
 * (same bleed pattern as hero / CTA / partners).
 */
export function Footer() {
  const rootRef = useRef<HTMLElement>(null);
  const baseDprRef = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const client =
        rootRef.current?.clientWidth ||
        document.documentElement.clientWidth ||
        window.innerWidth;
      const dpr = window.devicePixelRatio || 1;

      if (baseDprRef.current == null) {
        baseDprRef.current = dpr;
      }

      const zoomRatio = dpr / baseDprRef.current;
      setScale((client * zoomRatio) / FIGMA_W);
    };

    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  const style = {
    "--footer-scale": String(scale),
  } as CSSProperties;

  return (
    <footer
      ref={rootRef}
      className="footer-bleed"
      style={style}
      data-footer="cover"
    >
      <div className="footer-design">
        <div className="box-border h-full px-[120px] pb-12 pt-[71px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-[130px]">
            <div className="flex flex-row items-start gap-[92px]">
              <div className="flex w-full max-w-[528px] flex-col gap-[45px] shrink-0">
                <div className="flex flex-col gap-4">
                  <Logo />
                  <p className="font-nav max-w-[528px] text-sm leading-[1.6] text-[#242528]">
                    Stay Up to date with our latest features and releases by joining our newsletter.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <form
                    className="flex flex-row items-start gap-6"
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

              <div className="flex w-full max-w-[580px] shrink-0 gap-10">
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

            <div className="flex h-[42px] flex-col justify-between">
              <div className="h-px w-full bg-[#CED0D3]" />
              <div className="flex flex-row items-start justify-between font-nav text-xs leading-[1.6] text-[#242528]">
                <p className="w-[460px]">@ 2023 ByteSpace. All rights reserved.</p>
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
      </div>
    </footer>
  );
}
