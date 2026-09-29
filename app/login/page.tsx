import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Log in — ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Learn without limits"
      subtitle="Access your courses, track progress, and connect with mentors from anywhere."
      panelVariant="blue"
    >
      <LoginForm />
    </AuthShell>
  );
}
