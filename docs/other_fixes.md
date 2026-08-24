2. Mobile Hero Layout

On mobile screens, preserve the existing Hero composition while adapting it intentionally.

Social links

The Hero social links must remain vertically stacked.

Do NOT turn them into a horizontal row on mobile.

Keep:

social
social
social
social

This is intentional because the Hero uses large typography and needs to preserve horizontal space for the main heading.

Make sure the vertical social links:

remain accessible
do not overlap the Hero text
remain within the viewport
do not cause horizontal scrolling
maintain their existing spacing and visual style
Hero typography

The existing large Hero typography is intentional.

Do not remove its visual impact.

Instead, make it responsive using appropriate fluid sizing and/or carefully chosen breakpoints.

Ensure:

text does not overflow horizontally
text does not become clipped
intentional line breaks remain visually strong
spacing remains balanced
the Hero still feels like the same design on mobile

Do not simply shrink everything until it looks like a generic mobile site.

3. Mobile Stats Layout

The stats row currently needs a deliberate mobile layout.

On mobile only, make the stats a strict evenly distributed 2-column grid.

The desired structure is:

┌──────────────────┬──────────────────┐
│ STAT 1 │ STAT 2 │
├──────────────────┼──────────────────┤
│ STAT 3 │ STAT 4 │
└──────────────────┴──────────────────┘

Requirements:

exactly 2 columns on mobile
each column should occupy equal width
rows should remain visually balanced
maintain consistent spacing
preserve existing typography
do not allow one stat to become wider because of its content
avoid horizontal overflow
preserve the existing desktop layout at larger breakpoints

This should be a mobile-specific responsive behavior.

Do not force the desktop stats layout to behave the same way on mobile.

4. Footer Mobile Layout

On mobile, the footer navigation and social-links container should span the available screen width.

The current mobile footer should not feel like a narrow desktop layout squeezed into a phone.

Ensure:

navigation container uses the available width
social links container uses the available width
spacing remains intentional
content remains readable
no horizontal overflow occurs
links remain easy to tap
the footer still follows the existing visual hierarchy

Do not redesign the footer.

Only make the layout responsive and intentional.

5. Project Modal — Reimplement Reliable Outside-Click Behavior

The Project modal currently has an unreliable outside-click interaction.

The existing Thoughts modal works correctly.

IMPORTANT:

Do not invent another completely different modal architecture.

First inspect the Thoughts modal implementation carefully.

Understand:

how it detects backdrop clicks
how it prevents clicks inside the modal from propagating
how it handles close state
how it handles Escape
how it locks body scrolling
how it cleans up effects/listeners
how its Motion animation is structured

Then compare that architecture with the Project modal.

Use the working Thoughts modal as the architectural reference.

Desired Project modal behavior

When a project modal is open:

Clicking inside the modal

Must NOT close it.

This includes:

project text
links
buttons
carousel
carousel navigation
images
metadata
any interactive element
Clicking the backdrop

Must close the modal.

Clicking the explicit close button

Must close the modal.

Pressing Escape

Must close the modal.

Important event behavior

Do not rely on fragile coordinate calculations.

Use proper DOM event propagation behavior.

A typical architecture should conceptually be:

<div
  className="modal-backdrop"
  onClick={handleBackdropClick}
>
  <div
    className="modal-content"
    onClick={(event) => event.stopPropagation()}
  >
    ...
  </div>
</div>

However, do NOT blindly copy this exact implementation without first inspecting the working Thoughts modal.

The final implementation should follow the project's existing architecture.

Carousel interaction

Make absolutely certain that carousel controls do not accidentally trigger the backdrop close handler.

The following should never close the Project modal:

previous button
next button
pagination indicators
image interactions
links inside the modal
Body scroll

When the Project modal opens:

prevent the background page from scrolling where appropriate

When it closes:

restore the previous scrolling behavior

Make sure cleanup happens even if the component unmounts.

6. Feat Modal

The Feats section currently uses cards that visually resemble the Project cards.

Because the cards look like part of the same interaction system, the UX should feel consistent.

Therefore:

Feat cards must open a modal

Clicking a feat card should open a dedicated feat detail modal.

The Feat modal should feel visually and behaviorally similar to the Project modal.

IMPORTANT:

This does NOT mean copying all Project-specific content.

The two modals should share the same modal language and interaction patterns while displaying different information.

Shared UX

Projects and Feats should have:

similar modal positioning
similar backdrop treatment
similar close button
similar animation
similar typography hierarchy
similar spacing philosophy
similar responsive behavior
similar Escape behavior
similar outside-click behavior
similar body-scroll handling
similar accessibility behavior

The user should immediately understand:

"These are two types of detail views from the same portfolio."

Feat-specific content

The Feat modal should expose more context than the card.

For example:

feat title
achievement/position
date if available
event/competition
my role
what I contributed
team/context
outcome
short description
relevant tags
image if available

Use the existing feat data structure where possible.

Do not invent information that does not exist in the data.

If a field is unavailable, omit it gracefully rather than displaying fake content.

Visual relationship

The Project and Feat modals should feel like siblings.

For example:

PROJECT MODAL
────────────────────────────

Project title
status / metadata

[ project imagery ]

Description

Purpose
My role
Team
Outcome

Links

Close


FEAT MODAL
────────────────────────────

Feat title
achievement / metadata

[ feat imagery ]

Description

What happened
My role
Contribution
Outcome

Tags

Close

Do not create an entirely different modal design for Feats.

7. Reuse Modal Architecture Where Appropriate

After inspecting the existing Thoughts and Project modals, determine whether a shared modal shell/component would improve the architecture.

For example:

<ModalShell>
  ...
</ModalShell>

could potentially provide:

backdrop
close behavior
Escape handling
body scroll locking
animation
accessibility

while Projects and Feats provide their own content.

However:

DO NOT introduce a shared abstraction merely for the sake of abstraction.

If the existing architecture is already clean, make the smallest appropriate change.

Avoid over-engineering.

8. Responsive Project and Feat Modals

Both Project and Feat modals must work across:

small phones
large phones
tablets
laptops
desktop
large desktop

On small screens:

modal must fit within viewport
modal must not cause horizontal scrolling
content should remain readable
long content should scroll appropriately
close button must remain accessible
images must scale correctly
carousel controls must remain usable
buttons must remain tappable

Do not allow the modal to become wider than the viewport.

Do not create a modal that requires horizontal scrolling.

9. Preserve Existing Animations

The portfolio already uses Motion.

Continue using the existing Motion setup.

Do not replace it with another animation library.

Keep interactions:

subtle
smooth
responsive
premium

Avoid excessive:

bouncing
scaling
overshooting
springiness
large transitions
unnecessary delays

The animations should support the UX rather than become the UX.

10. Accessibility

Audit the modified interactions for accessibility.

Ensure:

buttons are actual <button> elements
links remain actual <a>/Next.js <Link> elements
icon-only buttons have accessible labels
modal close button has an appropriate aria-label
keyboard navigation works
Escape closes open modals
focus behavior is reasonable
interactive elements have visible focus states
touch targets are large enough
hover-only interactions are not required for mobile

Do not sacrifice accessibility for visual effects.

11. Custom Cursor and Touch Devices

The custom cursor should remain a desktop enhancement.

On touch devices:

do not require cursor behavior for navigation
do not allow cursor/reveal logic to interfere with touch
hide/disable cursor-specific effects where appropriate
preserve all normal touch interaction

The site must remain fully usable without a mouse.

Do not redesign the custom cursor.

12. Final Responsive Audit

After implementation, inspect the site at multiple viewport sizes.

At minimum, test conceptually around:

320px
375px
390px
430px
768px
1024px
1280px
1440px+

Look specifically for:

horizontal overflow
clipped text
overlapping elements
broken absolute positioning
broken modals
carousel overflow
footer overflow
navigation overflow
inconsistent spacing
unusable buttons
oversized typography
awkward whitespace
elements extending beyond the viewport

Do not solve every difference by adding another media query.

Prefer robust responsive layout techniques.

13. Code Quality and Linting

After implementation:

Run the project's linting and type-checking commands.

Fix all issues introduced by this work.

Pay particular attention to:

React hook dependencies
unused imports
unused variables
incorrect event types
invalid JSX
accessibility warnings
hydration problems
client/server component boundaries
Motion usage
effect cleanup
event listener cleanup

Do not solve errors with:

// eslint-disable

or:

any

unless there is a legitimate, unavoidable reason.

Fix the underlying problem.

Do not leave warnings behind simply because the site still runs.

14. Final Verification

Before considering the task complete, verify all of the following:

Theme
 Theme toggle actually works
 Theme persists after refresh
 System preference is respected when no explicit preference exists
 No obvious theme flash/hydration issue
 Existing brand/accent colors remain intact
 No unnecessary new color system was introduced
Hero
 Social links remain vertical on mobile
 Large Hero typography remains visually strong
 No horizontal overflow
Stats
 Exactly 2 columns on mobile
 Equal column widths
 Balanced 2 × 2 layout
Footer
 Navigation spans available mobile width
 Social links span available mobile width
 No overflow
Projects
 Project modal opens
 Project modal closes with close button
 Project modal closes with Escape
 Project modal closes by clicking backdrop
 Clicking inside does not close modal
 Carousel controls do not close modal
 Body scroll is correctly handled
 Modal works on mobile
Feats
 Feat cards open a modal
 Feat modal visually belongs to the same modal family as Projects
 Feat modal contains feat-specific information
 Feat modal closes correctly
 Feat modal is responsive
General
 Existing Thoughts modal remains functional
 Existing custom cursor remains functional
 Existing animations remain functional
 No new dependencies were unnecessarily added
 No unrelated layout changes were made
 No lint errors
 No TypeScript errors
 No obvious console errors
 No horizontal page overflow
Final instruction

This is a polish and reliability pass.

The portfolio's existing visual identity is already established.

Your job is to make it:

more reliable, more responsive, more consistent, and more complete — not different.

When deciding between a clever new implementation and a simple implementation that follows an existing working pattern, choose the existing working pattern.

In particular:

Use the working Thoughts modal as the reference for Project and Feat modal behavior.

Projects and Feats should feel like two siblings in the same interaction system.

Do not change the existing desktop composition unless required to fix an actual issue.

Make the smallest clean implementation that satisfies all of the requirements above.