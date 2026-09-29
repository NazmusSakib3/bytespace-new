type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  maxWidth?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  id,
  maxWidth = "max-w-3xl",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${maxWidth} ${alignClass} ${className}`}>
      <h2
        id={id}
        className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
