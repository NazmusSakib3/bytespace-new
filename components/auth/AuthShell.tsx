import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

export function AuthShell({ children, title, subtitle }: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside
        className="relative flex flex-col justify-between overflow-hidden bg-brand-blue px-8 py-10 text-white lg:w-[45%] lg:px-12 lg:py-14"
        aria-label="Brand"
      >
        <div className="auth-grid pointer-events-none absolute inset-0" aria-hidden />

        <div
          className="pointer-events-none absolute -right-16 top-20 h-40 w-40 rounded-full bg-brand-lime-bright/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-24 left-8 h-16 w-16 rotate-12 bg-brand-yellow"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-10 right-16 h-20 w-20 rounded-full border-[10px] border-brand-yellow/80"
          aria-hidden
        />

        <div className="relative z-10">
          <Logo variant="light" />
        </div>

        <div className="relative z-10 mt-16 max-w-md lg:mt-0">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-lime-bright">
            ByteSpace
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base text-white/85">{subtitle}</p>
        </div>

        <p className="relative z-10 mt-12 text-sm text-white/80">
          <Link href="/" className="underline hover:no-underline">
            ← Back to home
          </Link>
        </p>
      </aside>

      <main className="flex flex-1 items-center justify-center bg-white px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
