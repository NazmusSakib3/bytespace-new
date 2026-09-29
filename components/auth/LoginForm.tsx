"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type FormErrors = {
  email?: string;
  password?: string;
};

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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-text">Welcome back</h2>
        <p className="mt-1 text-sm text-muted">Sign in to continue your learning journey.</p>
      </div>

      <Input
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <div>
        <Input
          id="login-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <Link
          href="#"
          className="mt-2 inline-block text-sm font-medium text-brand-blue hover:underline"
          onClick={(e) => e.preventDefault()}
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Log in
      </Button>

      <div className="relative py-2 text-center text-sm text-muted">
        <span className="bg-white px-2">or continue with</span>
        <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-border" aria-hidden />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" size="sm" onClick={() => router.push("/")}>
          Google
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => router.push("/")}>
          GitHub
        </Button>
      </div>

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-brand-blue hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
