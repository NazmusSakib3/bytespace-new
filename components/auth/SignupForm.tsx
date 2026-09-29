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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text">Welcome to ByteSpace</h2>
        <p className="mt-1 text-sm text-muted">Create your account and start learning today.</p>
      </div>

      <Input
        id="signup-name"
        label="Full Name"
        type="text"
        autoComplete="name"
        placeholder="Jane Doe"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={errors.fullName}
      />

      <Input
        id="signup-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Input
        id="signup-password"
        label="Password"
        type="password"
        autoComplete="new-password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Sign Up
      </Button>

      <div className="relative py-2 text-center text-sm text-muted">
        <span className="relative z-10 bg-white px-2">or</span>
        <div className="absolute inset-x-0 top-1/2 -z-0 border-t border-border" aria-hidden />
      </div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        fullWidth
        onClick={() => router.push("/")}
        className="gap-2"
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-blue hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 2.9.7 3.6 1.4l2.4-2.4C16.6 3.8 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12S6.9 21.2 12 21.2c5.2 0 8.6-3.6 8.6-8.7 0-.6-.1-1-.2-1.5H12z"
      />
    </svg>
  );
}
