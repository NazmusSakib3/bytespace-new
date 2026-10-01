# ByteSpace New

E-learning marketing site for the ByteSpace assessment: landing page plus Login and Signup UI.

**Submission details & description:** see [SUBMISSION.md](./SUBMISSION.md)  
**Live demo:** https://bytespace-new-rho.vercel.app  
**GitHub:** https://github.com/NazmusSakib3/bytespace-new

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route | Page |
| --- | --- |
| `/` | Landing |
| `/login` | Login (UI only) |
| `/signup` | Signup (UI only) |

## Code & Git (assessment)

| Requirement | How this repo meets it |
| --- | --- |
| Public GitHub repository | [NazmusSakib3/bytespace-new](https://github.com/NazmusSakib3/bytespace-new) (public) |
| Work on a separate branch (not `main`) | Feature work landed via `feature/landing-and-auth` |
| Pull Request for the work | [PR #1](https://github.com/NazmusSakib3/bytespace-new/pull/1) · [PR #2](https://github.com/NazmusSakib3/bytespace-new/pull/2) |
| Clean, reusable components | `components/ui/*`, `components/layout/*`, `components/landing/*`, `components/auth/*` |

Workflow used: **feature branch → Pull Request → merge into `main`**. Do not commit assessment work directly on `main`.

## Design

Matches the [ByteSpace New Figma](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website) blue/lime e-learning aesthetic.

**Landing:** Navbar, Hero, Skills grid, Feature highlight (65k+), CTA band, Testimonials, Footer  
**Auth:** Split blue brand panel + white form with client-side validation (no backend)

## Scripts

```bash
npm run build
npm run start
npm run lint
```
