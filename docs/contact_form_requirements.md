# Implement EmailJS Contact Form

You are working on an existing Next.js portfolio project.

The **Reach Out / Contact form is already designed**. Your task is ONLY to implement the email-sending logic and the minimum interaction states needed to make the form feel polished.

## IMPORTANT — PRESERVE THE EXISTING UI

Do NOT redesign the contact section or form.

Do NOT change:

* layout
* spacing
* typography
* colors
* labels
* field arrangement
* button design
* section structure
* responsive behavior
* existing animations
* existing cursor system
* surrounding components

Do not create a modal, toast, popup, redirect, success page, or separate confirmation UI.

The existing portfolio has a deliberate, minimal visual language. The implementation should feel like it was always part of that design.

---

## EMAIL SERVICE

Use **EmailJS** with the already-installed/configured browser SDK.

The EmailJS configuration is already stored in `.env.local`.

The relevant environment variables are:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Use these environment variables.

Do NOT hardcode the values.

Do NOT create a server/API route for EmailJS.

This is intentionally a client-side EmailJS implementation.

---

## TEMPLATE VARIABLES

The existing EmailJS template expects these variables:

```text
{{full_name}}
{{email}}
{{message}}
```

The submitted form data MUST map to those exact names.

Specifically:

```ts
{
  full_name: fullName,
  email: email,
  message: message,
}
```

Do NOT use:

```ts
name
```

Use:

```ts
full_name
```

The visitor's email should be passed to EmailJS exactly as submitted so the email template can identify the sender.

---

## FORM SUBMISSION

Use the existing form and its current fields.

When the user submits:

1. Prevent the browser's default form submission.
2. Validate the required fields.
3. Prevent duplicate submissions.
4. Set a subtle loading state.
5. Send the form through EmailJS.
6. Wait for EmailJS to confirm success.
7. Only then show the success state.
8. Reset the form after successful submission.
9. Return the form to its normal usable state.

Do not reload the page.

Do not navigate anywhere.

Do not redirect the user to EmailJS.

---

## SUCCESS EXPERIENCE

The success feedback should be extremely quiet.

Something like:

```text
Message sent.
```

or another similarly concise phrase that fits the existing UI.

Do NOT:

* open a modal
* show a toast
* create a large success panel
* cover the form
* use confetti
* use flashy animations
* play sounds
* redirect
* replace the entire section

The user should simply know that their message went through.

---

## ERROR EXPERIENCE

If EmailJS fails:

* keep the form populated
* allow the user to submit again
* show a small, subtle error message within the existing form area

For example:

```text
Something went wrong. Try again.
```

Do not expose raw EmailJS errors to the user.

Do not log sensitive information.

---

## MOTION / INTERACTION

Use the project's existing `motion` / Motion library if it is already installed.

Add **subtle, premium interaction feedback**, but keep it restrained.

Good examples:

* a very slight button movement while submitting
* a subtle opacity/position transition for the success message
* a smooth transition when the submit button changes state
* a gentle fade/slide for the inline feedback

The animation should feel:

* deliberate
* smooth
* fast
* premium
* understated

It should NOT feel:

* bouncy
* playful
* exaggerated
* flashy
* slow

Use Motion only where it materially improves the interaction.

Do not introduce another animation library.

Do not interfere with the portfolio's existing cursor/reveal animation system.

---

## SUBMIT BUTTON

While EmailJS is sending:

* disable the submit action
* prevent duplicate submissions
* provide subtle visual feedback that the submission is in progress

Do not redesign the button.

After success:

* show the quiet success state
* reset the form
* return the button to its normal state

After failure:

* restore the button
* keep the user's entered values
* allow another attempt

---

## VALIDATION

At minimum, make sure:

* full name is not empty
* email is not empty
* email has a reasonable valid format
* message is not empty

Use the existing form validation approach if one already exists.

Do not add unnecessary validation libraries.

---

## ARCHITECTURE

Before modifying anything:

1. Inspect the existing Reach Out component.
2. Understand how its state and inputs currently work.
3. Reuse the existing state where possible.
4. Do not rewrite the component unnecessarily.
5. Keep the implementation local to the contact form.

If the component is already a client component, keep it that way.

If it is not, make only the minimum change required for the EmailJS interaction.

Do not modify unrelated components.

---

## IMPORTANT SECURITY NOTE

EmailJS is intentionally being used client-side.

The `NEXT_PUBLIC_` environment variables are therefore expected to be available in the browser.

Do not attempt to hide the EmailJS public key behind a server route.

Do not expose any additional secrets.

---

## FINAL UX GOAL

The entire interaction should feel like this:

```text
User fills form
      ↓
Clicks send
      ↓
Button subtly indicates sending
      ↓
EmailJS sends message
      ↓
Quiet "Message sent." feedback
      ↓
Form resets
```

No noise.

No modal.

No redirect.

No separate success page.

No unnecessary UI.

Just a **quiet, premium contact interaction** that fits seamlessly into the portfolio.

---

## AFTER IMPLEMENTATION

Verify:

* TypeScript has no errors.
* EmailJS is called with the correct Service ID.
* EmailJS is called with the correct Template ID.
* EmailJS uses the public key from the environment.
* `full_name` is used instead of `name`.
* `email` maps correctly.
* `message` maps correctly.
* Duplicate submissions are prevented.
* The form does not reload the page.
* Success only appears after EmailJS confirms success.
* The form resets only after successful sending.
* Failed submissions preserve the user's input.
* Existing styling/layout/animations remain unchanged.
* Existing cursor and reveal systems remain untouched.

Do not make any unrelated changes.
