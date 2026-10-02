"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type FormErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

const inputClassName =
  "h-[52px] w-full rounded-xl border-[#E5E6E8] px-6 py-3 text-lg leading-[1.6] text-[#242528] placeholder:text-[#82868E]";

/**
 * Register form — Figma Register_Frame 47:362 (fixed design pixels).
 */
export function SignupForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!fullName.trim()) next.fullName = "Full name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 8) {
      next.password = "Password must be at least 8 characters";
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
      className="flex h-full w-[453px] flex-col items-center justify-between gap-[122px]"
    >
      <div className="flex w-full flex-col gap-10">
        <div>
          <p className="font-nav text-lg leading-[1.6] text-brand-blue">Create an Account</p>
          <h2 className="font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528]">
            Welcome to ByteSpace
          </h2>
        </div>

        <div className="flex w-full flex-col items-end gap-6">
          <Input
            id="signup-name"
            label="Full Name"
            type="text"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
            className={inputClassName}
          />

          <Input
            id="signup-email"
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
            id="signup-password"
            label="Password"
            type="password"
            autoComplete="new-password"
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
            Continue
          </Button>
        </div>
      </div>

      <p className="font-nav flex gap-1 text-center text-base leading-[1.6] text-[#4B4C53]">
        <span>Already have an account?</span>
        <Link href="/login" className="text-brand-blue hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
