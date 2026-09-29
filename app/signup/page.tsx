import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign up — ByteSpace",
  description: "Create your ByteSpace account and start learning.",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Welcome to ByteSpace"
      subtitle="Join a community of learners building skills for the digital economy."
      panelVariant="blue"
    >
      <SignupForm />
    </AuthShell>
  );
}
