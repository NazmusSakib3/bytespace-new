import type { ReactNode } from "react";

type DesignPageProps = {
  children: ReactNode;
  /** Optional fixed artboard height (Figma frame). */
  height?: number;
  className?: string;
};

/**
 * Locks layout to the 1440px Figma artboard.
 * Do not scale with `100vw` — that cancels browser Ctrl+/- zoom.
 * Native zoom magnifies the whole page uniformly.
 */
export function DesignPage({ children, height, className = "" }: DesignPageProps) {
  return (
    <div
      className={`design-page ${className}`.trim()}
      style={height ? { minHeight: height } : undefined}
    >
      {children}
    </div>
  );
}
