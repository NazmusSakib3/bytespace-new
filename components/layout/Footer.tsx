import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

const columns = [
  {
    title: "Featured Courses",
    links: [
      { href: "#courses", label: "Featured Courses" },
      { href: "#courses", label: "Featured Categories" },
      { href: "#courses", label: "Business" },
      { href: "#courses", label: "IT" },
      { href: "#courses", label: "Design" },
    ],
  },
  {
    title: "Development",
    links: [
      { href: "#courses", label: "Development" },
      { href: "#courses", label: "Marketing" },
      { href: "#courses", label: "Photography" },
      { href: "#courses", label: "Finance" },
      { href: "#courses", label: "Sport" },
    ],
  },
  {
    title: "Become a Creator",
    links: [
      { href: "/signup", label: "Become a Creator" },
      { href: "#creators", label: "Affiliate Program" },
      { href: "/signup", label: "Contact" },
      { href: "#", label: "Help" },
      { href: "#", label: "About" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "#", label: "Our Story" },
      { href: "#testimonials", label: "Community" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "/signup", label: "Contact Us" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-text">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              className="mt-6 flex max-w-lg items-center gap-3 rounded-full border border-border bg-white p-1.5 shadow-sm"
              action="#"
              method="post"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-bold text-text transition hover:brightness-95"
              >
                Join
              </button>
            </form>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-muted">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-heading text-sm font-semibold text-text">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-text"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="#" className="hover:text-text">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-text">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
