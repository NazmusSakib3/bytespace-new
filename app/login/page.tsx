import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Access your courses, track progress, and connect with mentors from anywhere."
    >
      <LoginForm />
    </AuthShell>
  );
}
