# Final UX, Responsive Layout & Interaction Pass

We are doing a focused final polish pass on the existing portfolio.

The site already has an established visual identity, layout, animations, project cards, feat cards, Thoughts feed, project modal, Thoughts modal, custom cursor/reveal interactions, and contact functionality.

## IMPORTANT: DO NOT REDESIGN THE SITE

Do not redesign, restructure, or replace the existing visual language.

Do not:
- introduce a new design system
- replace existing components unnecessarily
- change typography choices
- change the established spacing system without a concrete responsive reason
- change project/feat card designs
- replace existing animations
- introduce a new UI library
- introduce unnecessary dependencies
- rewrite unrelated components
- create duplicate implementations of functionality that already exists

The goal is to make the existing portfolio feel complete, reliable, responsive, and intentional.

Before making changes, inspect the existing architecture and determine which components currently control each behavior.

Reuse existing CSS variables, Tailwind classes, Motion setup, modal architecture, data structures, and shared components wherever possible.

---

# 1. Theme Toggle

The existing light/dark theme toggle currently exists visually but is not fully functional.

Implement it properly using the site's existing theme architecture.

## Design constraint

There is currently no separate custom light-mode design.

Therefore, do NOT invent a new light-mode color palette.

The portfolio already uses the CSS variables:

- `--background`
- `--foreground`

Use those as the foundation of the theme.

The basic theme relationship should remain:

### Dark mode
- background = existing dark background
- foreground = existing light foreground

### Light mode
- background = existing light/white background
- foreground = existing dark foreground

The goal is essentially to invert the existing foreground/background relationship while preserving the site's visual identity.

## Best-practice requirements

Do not implement the theme toggle as a simple component-level `useState` that disappears on refresh.

The selected theme should persist across page reloads.

Use the project's existing theme infrastructure if one already exists.

If the project is already using a theme library such as `next-themes`, use it correctly rather than creating a second theme system.

If there is no theme library, implement a lightweight theme solution using the existing CSS variable architecture and a persisted preference.

The implementation should:

- respect the user's saved preference
- respect the system preference when no explicit preference has been selected
- persist the user's chosen theme
- avoid a visible flash of the wrong theme during page load where reasonably possible
- work correctly with Next.js client/server rendering
- avoid hydration mismatches
- use the existing CSS variables as the source of truth
- avoid hardcoded colors inside components wherever a theme-aware variable already exists

Use a semantic theme state such as:

- `light`
- `dark`
- optionally `system` if the existing architecture supports it

Do not create unnecessary complexity.

## Toggle interaction

The existing theme toggle should:

- actually change the theme
- provide a subtle visual transition
- remain accessible
- have an appropriate accessible label
- be keyboard accessible
- not cause layout shifts
- not interfere with the custom cursor

Use a subtle Motion animation if appropriate.

Do not create a flashy theme transition.

## Important

Audit the entire site for places where hardcoded colors would prevent the theme from working.

Where appropriate, replace hardcoded background/foreground values with:

```css
var(--background)
var(--foreground)