# ByteSpace — Submission Details & Description

**GitHub:** https://github.com/NazmusSakib3/bytespace-new  
**Live demo:** https://bytespace-new-rho.vercel.app  
**Feature branch:** `feature/landing-and-auth`  
**Pull requests:** [#1](https://github.com/NazmusSakib3/bytespace-new/pull/1) · [#2](https://github.com/NazmusSakib3/bytespace-new/pull/2) · [#4](https://github.com/NazmusSakib3/bytespace-new/pull/4)

---

## Submission details

| Field | Value |
| --- | --- |
| Project | ByteSpace e-learning marketing site |
| Assessment scope | Landing page (required) + Login / Signup UI (bonus) |
| Repository | Public — [NazmusSakib3/bytespace-new](https://github.com/NazmusSakib3/bytespace-new) |
| Deployment | Vercel — [bytespace-new-rho.vercel.app](https://bytespace-new-rho.vercel.app) |
| Git workflow | Feature branch → Pull Request → merge into `main` |
| Design reference | [ByteSpace New Figma](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website) |

### Routes

| Route | Page |
| --- | --- |
| `/` | Landing |
| `/login` | Sign In (UI only) |
| `/signup` | Join Us / Create Account (UI only) |

---

## Description

### What is built / complete

**Required — Landing page**  
A full Figma-faithful marketing landing page for ByteSpace, including:

- Navbar + brand logo  
- Hero with 3D ornaments and floating info cards  
- Partners logo strip  
- Discover Courses (filters + course cards)  
- Learning Paths  
- Feature highlight (65k+ growth section)  
- Manage Courses  
- CTA band  
- Testimonials  
- Footer  

**Bonus — Auth UI**  
- `/login` — Sign In page  
- `/signup` — Join Us / Create Account page  

Both auth pages use a shared shell: blue brand panel, course collage, and white form card. Forms include client-side validation (email format, required fields, password length). There is no backend — successful submit routes back to home as a UI demo.

**Engineering / process**  
- Public GitHub repository  
- Feature branch workflow (`feature/landing-and-auth`, not direct commits on `main`)  
- Pull requests for reviewable history  
- Deployed on Vercel with a public production URL  

---

### Technologies used

| Layer | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router) |
| UI library | **React 19** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| Assets | Next.js `Image`, Figma-exported SVGs/PNGs |
| Hosting | **Vercel** |
| Tooling | ESLint (`eslint-config-next`) |

Component structure:

- `components/ui` — Button, Input, Container, SectionHeading  
- `components/layout` — Navbar, Footer, Logo, DesignPage / DesignFrame  
- `components/landing` — section-level landing blocks  
- `components/auth` — AuthShell, AuthCollage, LoginForm, SignupForm  

---

### Special instructions to review our work

1. **Open the live site first** — https://bytespace-new-rho.vercel.app — then compare against the Figma file (desktop / 1440-wide artboard).  
2. **View at desktop width** — layouts are locked to the 1440 design canvas so spacing, ornaments, and absolute Figma positions stay accurate. Narrower viewports may show horizontal scroll by design for this assessment.  
3. **Walk these routes:** `/` → `/login` → `/signup` (and logo click back to home).  
4. **Try form validation** on Login/Signup (empty fields, invalid email, short password) before a successful submit.  
5. **Git / PR:** review on branch `feature/landing-and-auth` and the linked pull requests above.  
6. **Animations:** watch the soft float on hero / auth ornaments and cards; they respect `prefers-reduced-motion`.  

---

### Polish & intentional additions (beyond a static slice)

These small choices show product sense, not just pixel dumping:

- **Animated 3D ornaments** on the hero and auth collage (layered float + slight rotate, staggered delays) so the page feels alive without looking noisy.  
- **Animated floating cards** (student / course chips) on hero and login/signup brand panels.  
- **ByteSpace logo kept on Login and Join Us** — light variant, links home — so auth still feels like the same product, not a disconnected form page.  
- **Auth collage motion** — the same ornament language from the landing carries onto Sign In / Sign Up so the brand panel isn’t static.  
- **Reusable `Logo` component** with `default` / `light` variants for navbar, footer, and auth.  
- **Hover micro-interactions** on course cards, learning-path tiles, and buttons (lift / shadow / brightness).  
- **Accessibility-minded motion** — float animations disable under `prefers-reduced-motion`.  
- **Shared auth shell** so Login and Signup stay consistent instead of duplicated layouts.  
- Figma-aligned typography (Clash Display / Satoshi with web font fallbacks) and brand colors.  

---

### Additional notes

- Auth is **UI-only** (no API, no real auth) — scoped for a frontend assessment.  
- Assets are exported from Figma and organized under `public/figma/…`.  
- Landing sections map closely to Figma frames; comments in key components reference node IDs for easier design → code review.  
- Work was shipped through **branch → PR → merge**, which mirrors how junior frontend work is reviewed on a real team.  

---

### Why this stands out for a junior frontend role

- **Design fidelity:** treated Figma as a contract (spacing, type, assets), not a rough mood board.  
- **Component thinking:** shared UI primitives and section components instead of one giant page file.  
- **Beyond the brief:** bonus auth pages, motion polish, and logo continuity on auth — showing initiative without scope creep into backend work.  
- **Professional delivery:** public repo, feature branch, PRs, and a live Vercel URL a reviewer can open in one click.  
- **Frontend craft:** TypeScript, App Router, Tailwind v4, form validation, reduced-motion respect, and clear folder structure.  

Happy to walk through any section, animation decision, or PR diff during review.
