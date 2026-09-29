import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

const quickLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#skills", label: "Categories" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

const social = [
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="about" className="bg-brand-blue-deep text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/90">
              ByteSpace helps learners discover their passion and build job-ready digital
              skills through expert-led courses and a supportive community.
            </p>
            <ul className="mt-6 flex gap-4" aria-label="Social links">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-brand-lime-bright hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Contact
            </h3>
            <p className="mt-4 text-sm text-blue-100">hello@bytespace.io</p>
            <p className="mt-1 text-sm text-blue-100">Support available 24/7</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-blue-200/80">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
