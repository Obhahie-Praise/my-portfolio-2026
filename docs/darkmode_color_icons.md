# Final Theme-Aware Icon & Logo Switching Pass

We are doing the final implementation piece for the portfolio's theme system.

The site already has a functioning light/dark theme toggle.

The remaining issue is that the portfolio's icons and logo currently do not switch their assets when the theme changes.

## Goal

Every theme-aware icon and logo throughout the portfolio should automatically display the correct asset for the current theme.

For every applicable icon, there are two image assets:

### Light theme
The normal filename.

Example:

```text
/menu.svg
Dark theme

The same filename with -alt before the extension.

Example:

/menu-alt.svg

Therefore:

Light → /menu.svg
Dark  → /menu-alt.svg

The same convention applies to the logo and all other theme-specific image assets.

IMPORTANT

Do NOT redesign any icons.

Do NOT recolor the SVGs with CSS filters.

Do NOT invert images using:

filter: invert(...)

Do NOT create duplicate icon components for light and dark mode.

The alternate assets already exist specifically for this purpose.

Use the provided assets.

1. Audit Existing Icons

First inspect the entire portfolio and identify every image/icon that has a corresponding -alt asset.

This includes, but is not limited to:

logo
menu icon
social icons
navigation icons
project-related icons
modal icons
carousel controls
close icons
theme toggle icons if applicable
footer icons
decorative icons that are explicitly theme-specific

Do not assume every image needs an alternate.

Some images are content/brand imagery and should remain unchanged.

Only switch assets where a corresponding alternate asset exists or where the icon is clearly part of the site's theme system.

2. Use the Existing Theme State

The icon switching must respond to the same theme state used by the theme toggle.

Do NOT create another theme state.

Do NOT duplicate local useState logic such as:

const [dark, setDark] = useState(...)

inside individual components.

There should be one source of truth for the site's theme.

If the project already uses next-themes, use its existing theme state.

If the project uses a custom theme context, use that.

The icon components should simply consume the existing theme state.

3. Create a Reusable Theme-Aware Image/Icon Pattern

Where practical, create one small reusable abstraction for theme-aware assets rather than repeating logic throughout the portfolio.

For example, conceptually:

<ThemeIcon
  light="/icons/menu.svg"
  dark="/icons/menu-alt.svg"
  alt="Menu"
/>

The implementation can use the project's existing architecture.

The important requirement is that the component:

displays the light asset in light mode
displays the dark alternate asset in dark mode
responds immediately when the theme changes
preserves the existing dimensions
preserves the existing styling
does not introduce layout shifts
remains accessible

Do not over-engineer this.

A small reusable component is preferable to having theme logic repeated across dozens of components.

4. Logo

The logo must participate in theme switching.

Example:

Light:
 /logo.svg

Dark:
 /logo-alt.svg

or whatever the project's actual logo filenames are.

The logo should switch automatically when the theme changes.

Do not change:

logo size
positioning
spacing
animation
navbar layout

Only change the asset according to the active theme.

5. Menu Icon

The mobile navigation menu uses the existing:

/menu.svg

asset.

Its dark-mode counterpart follows the same convention:

/menu-alt.svg

Make sure the menu icon switches when the theme changes.

The mobile menu must continue to function exactly as it does currently.

Do not modify the menu interaction.

6. Social Icons

Audit all social icons.

For example:

/icons/github.svg
/icons/github-alt.svg

/icons/linkedin.svg
/icons/linkedin-alt.svg

/icons/twitter.svg
/icons/twitter-alt.svg

/icons/tiktok.svg
/icons/tiktok-alt.svg

Use the appropriate alternate asset in dark mode.

Do not change the social link destinations.

Do not change their hover animations.

Do not change their layout.

Only make the asset theme-aware.

7. Modal & Carousel Icons

Make sure theme-aware icons inside:

Project modal
Feat modal
Thoughts modal
image carousel
close buttons
navigation controls

also switch correctly.

For example:

/arrow-left.svg
/arrow-left-alt.svg

and:

/close.svg
/close-alt.svg

Do not replace existing carousel behavior.

Do not change the carousel animation.

Do not change modal architecture.

This is strictly an asset/theme integration task.

8. Avoid Flashing or Layout Shifts

When switching themes, icons should change cleanly.

Avoid implementations that temporarily render:

light icon
→ blank
→ dark icon

or:

dark icon
→ light icon
→ dark icon

during normal theme changes.

The icon should transition as cleanly as the rest of the theme.

If the implementation requires both assets to be rendered and one hidden, make sure this does not cause:

layout shifts
accessibility problems
duplicate accessible labels
unnecessary network/layout work

Choose the simplest reliable implementation.

9. Next.js / SSR Considerations

Pay attention to hydration.

If the theme is unavailable during server rendering, do not create hydration mismatch errors.

Use the existing theme architecture correctly.

Do not blindly read:

window.localStorage

during render.

Do not access browser-only APIs during server rendering.

If the existing theme system already handles this, integrate with it rather than creating another solution.

10. Accessibility

Theme-aware icons must remain accessible.

For meaningful icons:

alt="..."

should remain appropriate.

For decorative icons:

alt=""

may be appropriate.

For icon-only buttons:

use an accessible button label
do not rely on the image itself to communicate the action

For example:

<button aria-label="Open menu">
  <ThemeIcon ... />
</button>

The theme swap must never remove the button's accessibility.

11. Asset Naming

Follow the existing naming convention exactly.

Light:

icon.svg

Dark:

icon-alt.svg

Do not rename existing assets.

Do not create unnecessary copies.

Do not create:

icon-dark.svg
icon-light.svg
icon-white.svg

if the project already uses the -alt convention.

12. Handle Missing Alternate Assets Gracefully

Not every image in the portfolio necessarily needs an alternate.

If a theme-aware image does not have a corresponding -alt asset:

do not invent a filename and break the image
do not automatically apply a CSS filter
do not modify the original asset
leave it unchanged unless it is clearly intended to be theme-aware

The implementation should not produce broken image paths.

13. Keep Content Images Unchanged

Do NOT automatically theme-switch:

project screenshots
project artwork
photographs
portfolio imagery
decorative illustrations
competition images
thumbnails

unless an explicit -alt version exists and the image is intentionally theme-dependent.

Theme-aware switching is primarily for UI icons and branding assets.

14. Preserve Existing Design

Do not modify:

spacing
typography
component hierarchy
responsive behavior
animations
modal layouts
project cards
feat cards
Thoughts feed
custom cursor
reveal animation
footer structure
navigation structure

The only purpose of this task is to ensure theme-aware assets respond to the existing theme.

15. Final Audit

After implementation, manually audit the entire site.

Switch:

Light → Dark
Dark → Light

while checking:

Navbar
 Logo changes
 Menu icon changes
 Navigation icons change
Hero
 Social icons change
 Other theme-aware icons change
Projects
 Project UI icons change
 Modal icons change
 Carousel controls change
 Close icon changes
Feats
 Feat modal icons change
 Close icon changes
Thoughts
 Thoughts modal icons change
 Close/navigation icons change
Footer
 Social icons change
 Other UI icons change
General
 No broken image paths
 No console errors
 No hydration warnings
 No layout shifts
 No duplicate theme state
 No CSS image inversion
 No unnecessary dependencies
 Existing interactions still work
16. Code Quality

After completing the implementation:

run the project's lint command
run the project's type checker if available
fix any errors introduced by this work
remove unused imports
remove duplicate theme logic
ensure reusable components are properly typed

Do not silence lint errors just to make the build pass.

Fix the underlying issue.

Final instruction

This is the final implementation piece of the portfolio's theme system.

The visual design is already established.

Do not redesign anything.

Do not add unnecessary features.

Do not touch unrelated functionality.

Simply make every appropriate UI icon and logo use:

light → normal asset
dark  → -alt asset

using the site's existing theme state.

After this is complete, the portfolio should be ready for the final manual pass where we will inspect:

links
colors
copy/content
remaining responsive issues
accessibility
anything else discovered through actual use.

Keep the implementation small, clean, reusable, and production-safe.