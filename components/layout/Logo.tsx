import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-brand-blue";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-bold text-xl tracking-tight ${textColor} ${className}`}
      aria-label="ByteSpace home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-lime-bright text-brand-blue-deep text-sm font-extrabold"
        aria-hidden
      >
        B
      </span>
      ByteSpace
    </Link>
  );
}
