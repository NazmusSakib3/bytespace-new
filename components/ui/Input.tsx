import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  id: string;
};

export function Input({ label, error, id, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block text-sm font-medium leading-[1.2] text-text">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={[
          "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-muted",
          "transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20",
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
