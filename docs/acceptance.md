# Design implementation acceptance

A completed Figma implementation should satisfy the following checks.

## Fidelity

- Information hierarchy and important content match the selected design.
- Responsive states remain usable rather than preserving fixed canvas coordinates.
- Design-system substitutions are intentional and reported.
- The reference PNG is not embedded as the implementation.

## Accessibility

- One descriptive `h1` and logical heading order.
- Semantic page landmarks.
- All actions are reachable and operable with a keyboard.
- Visible focus indicators remain present.
- Interactive elements have accessible names.
- Text and controls meet WCAG AA contrast.
- The page remains usable at narrow viewport widths and browser zoom.
- Motion respects reduced-motion preferences where motion is present.

## Engineering

- BUI is the only component system.
- TypeScript remains strict.
- Tests cover meaningful user interactions using roles and labels.
- Lint, typecheck, unit tests, production build, and Playwright pass.
- No credentials, provider identifiers, signed URLs, or temporary Figma attachments are committed.
