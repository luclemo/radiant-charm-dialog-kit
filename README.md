# Radiant Charm Dialog Kit

Design tokens + integration harness for Charm's AI assistant embed in the Radiant portal.

[View kit as web page](https://luclemo.github.io/radiant-charm-dialog-kit/)

## What we handle, what's yours

**On us:**
- We render the header and dialog frame — your content starts **below the seam** (the header's 1px bottom border).

**On you:**
- Meet the seam cleanly where your slot joins our header — the Dialog page shows the default.
- Load the `Inter` font **inside your iframe** — fonts don't cross the frame boundary, so self-host it; the `tokens.css` fallback is just a safety net.
- Carry the a11y basics through: visible focus ring (`--ring`), text contrast, and `prefers-reduced-motion`.

**Entirely your call:**
- Messages, empty state, composer — however you like. Build with the tokens so it stays on-brand. Our examples are suggestions, not spec.

## Sources of truth for Radiant design and theming

- [Storybook (components)](https://radiant-network.github.io/radiant-portal/storybook/)
- [Theme](https://github.com/radiant-network/radiant-portal/tree/main/frontend/themes/radiant)
- [Components](https://github.com/radiant-network/radiant-portal/tree/main/frontend/components)

## Using the tokens with Tailwind v4

Radiant is on Tailwind v4. Suggestion: import the tokens, then map them to utilities with
`@theme inline` so `bg-primary`, `text-muted-foreground`, `rounded-[--radius]`,
etc. resolve to our values:

```css
@import "tailwindcss";
@import "./tokens.css";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-destructive: var(--destructive);
  --radius: var(--radius);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}
```

> Note: `tokens.css` is a hand-maintained extract of the Radiant design system.
> If a value ever disagrees with the live portal, the portal wins — flag it and
> we'll sync.
