import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-text";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold text-xl tracking-tight ${textColor} ${className}`}
      aria-label="ByteSpace home"
    >
      <span
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-lime-bright"
        aria-hidden
      >
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M2 1.5v13l11-6.5L2 1.5z" fill="#0A0A0A" />
        </svg>
      </span>
      ByteSpace
    </Link>
  );
}
