# Figma Web Implementation Demo

A small, local-only Next.js application used to demonstrate Portal's Figma-to-XIRP implementation flow.

The repository intentionally contains a restrained baseline rather than a finished product. A design implementation session receives immutable semantic Figma context and a reference PNG, then implements the selected design in `DesignImplementationCanvas` using Backstage UI.

## Stack

- Next.js 16
- React 18
- TypeScript in strict mode
- [`@backstage/ui`](https://ui.backstage.io)
- Vitest and Testing Library
- Playwright

React 18 is intentional because it is the supported peer version of the current BUI package.

## Local development

Use Node.js 22 or newer:

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Install the Playwright browser once if needed:

```bash
npx playwright install chromium
```

## Implementation boundary

Start with:

- `src/components/DesignImplementationCanvas.tsx`
- `src/components/DesignImplementationCanvas.module.css`

Read [`AGENTS.md`](./AGENTS.md) before changing the implementation. It defines design-system, accessibility, security, and verification requirements.

## Deliberate omissions

This repository has no backend, secrets, deployment manifests, analytics, or production environment. The demonstration ends with a locally runnable and tested website.
