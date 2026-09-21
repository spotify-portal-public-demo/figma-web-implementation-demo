# Design-system contract

This demo uses [Backstage UI](https://ui.backstage.io), abbreviated BUI, as its only component system.

## Required workflow

1. Identify the semantic UI element represented by the selected Figma node.
2. Check the [BUI component documentation](https://ui.backstage.io/components).
3. Use the documented BUI API and its tokens where a suitable component exists.
4. Add CSS Modules only for page-specific composition or artwork that BUI does not provide.
5. Validate keyboard behavior, responsive behavior, contrast, and accessible names.

The application imports `@backstage/ui/css/styles.css` once from `src/app/layout.tsx`.

Do not introduce Material UI, Encore, Tailwind, or hand-built replacements for BUI buttons, fields, dialogs, tabs, cards, or navigation components.

## Figma fidelity

Figma geometry describes design intent, but implementation remains responsive and semantic. Prefer a BUI token over a nearly equivalent raw color or spacing value. Exact absolute positioning is appropriate only for genuinely decorative artwork, not for primary page structure.
