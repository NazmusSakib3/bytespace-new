import Image from "next/image";
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
      className={`inline-flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight ${textColor} ${className}`}
      aria-label="ByteSpace home"
    >
      <Image
        src="/figma/logo-mark.svg"
        alt=""
        width={29}
        height={32}
        className="h-8 w-auto"
        priority
      />
      ByteSpace
    </Link>
  );
}
