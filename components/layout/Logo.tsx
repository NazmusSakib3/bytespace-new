import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-[#f5f5f6]" : "text-text";

  return (
    <Link
      href="/"
      className={`font-logo inline-flex items-center gap-2 text-2xl font-bold leading-none tracking-normal ${textColor} ${className}`}
      aria-label="ByteSpace home"
    >
      <Image
        src="/figma/logo-mark.svg"
        alt=""
        width={29}
        height={32}
        className="h-[31.5px] w-[28.875px] shrink-0"
        priority
        unoptimized
      />
      ByteSpace
    </Link>
  );
}
