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
        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-lime-bright text-lg font-extrabold text-text"
        aria-hidden
      >
        B
      </span>
      ByteSpace
    </Link>
  );
}
