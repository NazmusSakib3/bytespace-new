"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type FormErrors = {
  email?: string;
  password?: string;
};

const inputClassName =
  "h-[52px] w-full rounded-xl border-[#E5E6E8] px-6 py-3 text-lg leading-[1.6] text-[#242528] placeholder:text-[#82868E]";

/** Login form — fixed design pixels inside the 579×784 auth card. */
export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 6) {
      next.password = "Password must be at least 6 characters";
    }
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex h-full w-[453px] flex-col justify-between gap-10"
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="font-nav text-lg leading-[1.6] text-brand-blue">Sign In</p>
          <h2 className="font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528]">
            Welcome Back
          </h2>
        </div>

        <div className="flex flex-col items-end gap-6">
          <Input
            id="login-email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            className={inputClassName}
          />

          <Input
            id="login-password"
            label="Password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            className={inputClassName}
          />

          <Button
            type="submit"
            variant="lime"
            size="lg"
            className="!rounded-3xl px-6 py-3 text-lg font-medium leading-[1.2] text-[#242528]"
          >
            Sign In
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-[11px]">
          <div className="h-px flex-1 bg-[#D1D1D1]" aria-hidden />
          <span className="font-nav shrink-0 text-lg leading-[1.6] text-[#888]">or</span>
          <div className="h-px flex-1 bg-[#D1D1D1]" aria-hidden />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-[#D1D1D1] transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
            aria-label="Continue with Facebook"
          >
            <Image
              src="/figma/auth/icon-facebook.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
              className="size-10"
            />
          </button>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-[#D1D1D1] transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30"
            aria-label="Continue with Google"
          >
            <Image
              src="/figma/auth/icon-google.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
              className="size-10"
            />
          </button>
        </div>

        <p className="font-nav text-center text-base leading-[1.6] text-[#888]">
          New user?{" "}
          <Link href="/signup" className="text-brand-blue hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </form>
  );
}
