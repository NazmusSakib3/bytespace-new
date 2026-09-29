import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  panelVariant?: "blue" | "light";
};

export function AuthShell({
  children,
  title,
  subtitle,
  panelVariant = "blue",
}: AuthShellProps) {
  const panelBg =
    panelVariant === "blue"
      ? "bg-brand-blue text-white"
      : "bg-brand-lime/30 text-brand-blue-deep";

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside
        className={`relative flex flex-col justify-between overflow-hidden px-8 py-10 lg:w-[42%] lg:px-12 lg:py-14 ${panelBg}`}
        aria-label="Brand"
      >
        <Logo variant={panelVariant === "blue" ? "light" : "default"} />
        <div className="relative z-10 mt-12 max-w-md lg:mt-0">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-lime-bright">
            ByteSpace
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base opacity-90">{subtitle}</p>
        </div>
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-10 top-1/3 h-24 w-24 rotate-45 bg-brand-yellow/40"
          aria-hidden
        />
        <p className="relative z-10 mt-12 text-sm opacity-80">
          <Link href="/" className="underline hover:no-underline">
            ← Back to home
          </Link>
        </p>
      </aside>

      <main className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-12 sm:px-8">
        <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
