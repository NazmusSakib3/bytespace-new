import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Sign up for ByteSpace and start learning.",
};

/** Figma Register 47:351 */
export default function SignupPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <SignupForm />
    </AuthShell>
  );
}
