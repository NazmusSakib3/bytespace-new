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
  confirmPassword?: string;
  terms?: string;
};

export function SignupForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
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
    if (password !== confirmPassword) {
      next.confirmPassword = "Passwords do not match";
    }
    if (!terms) {
      next.terms = "You must accept the terms to continue";
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
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-text">Create your account</h2>
        <p className="mt-1 text-sm text-muted">Join ByteSpace and start learning today.</p>
      </div>

      <Input
        id="signup-name"
        label="Full name"
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

      <Input
        id="signup-confirm"
        label="Confirm password"
        type="password"
        autoComplete="new-password"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
      />

      <div>
        <label className="flex items-start gap-3 text-sm text-text">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-brand-blue focus:ring-brand-blue"
          />
          <span>
            I agree to the{" "}
            <Link href="#" className="text-brand-blue hover:underline" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-brand-blue hover:underline" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.terms ? (
          <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.terms}</p>
        ) : null}
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Create account
      </Button>

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-brand-blue hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
