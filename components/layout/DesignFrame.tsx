import type { ReactNode } from "react";

type DesignFrameProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fixed 1440px Figma content column. Place inside a full-bleed section
 * so backgrounds span the viewport while layout stays design-accurate.
 */
export function DesignFrame({ children, className = "" }: DesignFrameProps) {
  return <div className={`design-frame ${className}`.trim()}>{children}</div>;
}
