import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";

const company = [
  { href: "#courses", label: "About Us" },
  { href: "#creators", label: "Careers" },
  { href: "#testimonials", label: "Press" },
  { href: "/signup", label: "Contact" },
];

const community = [
  { href: "#creators", label: "Creators" },
  { href: "#testimonials", label: "Learners" },
  { href: "#courses", label: "Events" },
  { href: "#courses", label: "Blog" },
];

const resources = [
  { href: "#courses", label: "Help Center" },
  { href: "/login", label: "Sign In" },
  { href: "/signup", label: "Join Us" },
  { href: "#courses", label: "Pricing" },
];

const social = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <path
        d="M18 7c-1 .5-2 .8-3 1a3.5 3.5 0 00-6 3v1A8 8 0 014 8s-3 7 4 10a9 9 0 01-5 1c7 4 15 0 15-9v-.5A5.5 5.5 0 0020 6a5 5 0 01-2 1z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <>
        <rect x="4" y="9" width="4" height="11" stroke="currentColor" strokeWidth="1.75" fill="none" />
        <circle cx="6" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.75" fill="none" />
        <path
          d="M14 20v-6a3 3 0 016 0v6M14 12v8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.75" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" fill="none" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </>
    ),
  },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-lime-bright">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              ByteSpace helps creators discover their passion and build job-ready digital
              skills through expert-led courses.
            </p>
            <ul className="mt-6 flex gap-3" aria-label="Social links">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-lime-bright transition hover:bg-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      {item.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <LinkColumn title="Company" links={company} />
          <LinkColumn title="Community" links={community} />
          <LinkColumn title="Resources" links={resources} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
