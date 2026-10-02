"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { AuthCollage } from "@/components/auth/AuthCollage";
import { Logo } from "@/components/layout/Logo";

const FIGMA_W = 1440;
const FIGMA_H = 1024;

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

/**
 * Figma Login / Register — 1440×1024 artboard scaled to fit any viewport
 * aspect ratio (same idea as hero bleed, but fit-contain + centered).
 * https://www.figma.com/design/vIVChSxtAIVN2jOkX7Erp7/…?node-id=49-195
 */
export function AuthShell({ children, title, subtitle }: AuthShellProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const baseDprRef = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const el = rootRef.current;
      const clientW = el?.clientWidth || document.documentElement.clientWidth || window.innerWidth;
      const clientH = el?.clientHeight || window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      if (baseDprRef.current == null) {
        baseDprRef.current = dpr;
      }

      const zoomRatio = dpr / baseDprRef.current;
      const fit = Math.min(clientW / FIGMA_W, clientH / FIGMA_H);
      setScale(fit * zoomRatio);
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
    "--auth-scale": String(scale),
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      className="auth-bleed"
      style={style}
      data-auth="fit"
    >
      {/*
        Full-bleed grid — Figma Register/Login Group 4 (120px cells).
        https://www.figma.com/design/vIVChSxtAIVN2jOkX7Erp7/…?node-id=47-351
      */}
      <div className="auth-grid pointer-events-none absolute inset-0 z-0" aria-hidden />

      <div className="auth-design relative z-10 overflow-hidden">
        <aside className="absolute inset-0 text-[#F5F5F6]" aria-label="Brand">
          <div className="absolute left-[122px] top-[35px] z-20">
            <Logo variant="light" />
          </div>

          <div className="absolute left-[122px] top-[120px] z-20 flex w-[475px] flex-col gap-4">
            <h1 className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px]">
              {title}
            </h1>
            <p className="font-nav text-lg leading-[1.6]">{subtitle}</p>
          </div>

          <div className="absolute left-[97px] top-[305px] z-10">
            <AuthCollage />
          </div>
        </aside>

        {/* Register_Frame — 579×784 @ left 741, top 120 */}
        <main className="absolute left-[741px] top-[120px] z-20">
          <div className="flex h-[784px] w-[579px] flex-col rounded-3xl bg-white px-[63px] py-[61px]">
            {children}
          </div>
        </main>

        <p className="sr-only">
          <Link href="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}
