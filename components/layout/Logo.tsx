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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A0A0A" className="ml-0.5">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      ByteSpace
    </Link>
  );
}
