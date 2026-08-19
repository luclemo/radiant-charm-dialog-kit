# radiant-charm-dialog-kit

Design tokens + integration harness for Charm's AI assistant embed in the Radiant portal.

View kit here: https://luclemo.github.io/radiant-charm-dialog-kit/

**The split, in one line:** Radiant owns the dialog shell + header (fixed).
Charm owns everything below the seam (the slot) and renders whatever it needs —
these tokens are how that content still reads as D.A.V.I.D.

## Files

| File | What it is |
|---|---|
| `index.html` | Landing hub — links to every page. This is the GitHub Pages entry point (`/`). Every page also carries a top nav to move between them. |
| `tokens.css` | The brand source of truth — CSS variables (light + dark), extracted from the Radiant design system. |
| `kit.css` | Component layer — a framework-free CSS translation of our Storybook button/input/alert + the dialog shell, consuming `tokens.css`. What the pages below render with. |
| `harness.html` | Our real dialog header + an empty slot (muted content area). Build your UI inside the slot and check the seam. Open it in a browser. |
| `examples.html` | Recommended (not required) renderings for the slot: empty state, conversation with clinical content, streaming + error. All token-driven. |
| `components.html` | A palette of design-system components (buttons, inputs, alerts, badges) that may be useful in the slot — for review. |
| `assets/david-logo.svg` | The D.A.V.I.D wordmark. Referenced by the dialog header. |

## What we handle, what's yours

**On us:**
- We render the header and dialog frame — your content starts **below the seam** (the header's 1px bottom border).

**On you:**
- Meet the seam cleanly where your slot joins our header — the Dialog page shows the default.
- Load the `Inter` font **inside your iframe** — fonts don't cross the frame boundary, so self-host it; the `tokens.css` fallback is just a safety net.
- Carry the a11y basics through: visible focus ring (`--ring`), text contrast, and `prefers-reduced-motion`.

**Entirely your call:**
- Messages, empty state, composer — however you like. Build with the tokens so it stays on-brand. Our examples are suggestions, not spec.

## Using the tokens with Tailwind v4

Ultimate source of truth for radiant:

- **Theme:** https://github.com/radiant-network/radiant-portal/tree/main/frontend/themes/radiant
- **Components:** https://github.com/radiant-network/radiant-portal/tree/main/frontend/components

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
