import Link from "next/link";
import type { ReactNode } from "react";
import { AuthCollage } from "@/components/auth/AuthCollage";
import { DesignPage } from "@/components/layout/DesignPage";
import { Logo } from "@/components/layout/Logo";

type AuthShellProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
};

/**
 * Figma Login / Register — locked 1440×1024 artboard (same as home DesignPage).
 * https://www.figma.com/design/vIVChSxtAIVN2jOkX7Erp7/…?node-id=49-195
 */
export function AuthShell({ children, title, subtitle }: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen w-full min-w-[1440px] items-center justify-center bg-brand-blue">
      {/*
        Full-bleed grid — Figma Register/Login Group 4 (120px cells).
        Fixed so it covers the entire blue canvas (gutters beyond the 1440 artboard),
        not only the centered DesignPage frame.
        https://www.figma.com/design/vIVChSxtAIVN2jOkX7Erp7/…?node-id=47-351
      */}
      <div className="auth-grid pointer-events-none fixed inset-0 z-0" aria-hidden />

      <div className="relative z-10">
        <DesignPage>
          <div className="relative h-[1024px] w-[1440px] overflow-hidden">
            <div className="relative z-10 h-full w-full">
              {/* Left — Figma text @ 122,120; collage Group 7 @ 97,305 */}
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

              {/* Register_Frame — 579×784 @ left 741 (50%+21), top 120 */}
              <main className="absolute left-[741px] top-[120px] z-20">
                <div className="flex h-[784px] w-[579px] flex-col rounded-3xl bg-white px-[63px] py-[61px]">
                  {children}
                </div>
              </main>
            </div>

            <p className="sr-only">
              <Link href="/">Back to home</Link>
            </p>
          </div>
        </DesignPage>
      </div>
    </div>
  );
}
