# Certivo Practice

Certivo Practice is a mobile-first bilingual certification practice app. The student-facing app uses plain HTML, CSS, and JavaScript on GitHub Pages. Account login and payment checks use Supabase Auth, Supabase Edge Functions, and Stripe Checkout.

## What Is Included

- 300 paired English/Spanish questions
- Practice Mode with instant explanations
- Exam Mode with grading at the end
- Topic and simulator filters
- Safe answer shuffling scored by stable answer ids
- Score screen with topic breakdown
- Review missed questions
- Saved local progress, history, missed questions, and flags
- Dark mode
- Header navigation
- Certivo logo, favicon, and installable app icons
- Free 10-question trial
- Free Study Guide section with English/Spanish chapters and bilingual key terms
- Supabase login/signup
- Stripe plan buttons for weekly and 90-day access

## Files

- `index.html` - app screens
- `styles.css` - responsive light/dark styling
- `app.js` - quiz behavior, progress, scoring, flags, history, and filters
- `questions.js` - structured bilingual question database
- `study.js` - free bilingual study chapters and glossary terms
- `manifest.webmanifest` - installable app metadata
- `supabase/sql/certivo_access.sql` - database table for paid access
- `supabase/functions/create-checkout-session/` - secure Stripe Checkout function
- `supabase/functions/stripe-webhook/` - Stripe payment confirmation function
- `README.md` - this file

## Supabase And Stripe Setup

The website must never contain private Stripe or Supabase service keys. Store private keys only in Supabase Edge Function secrets.

Supabase secrets needed:

- `STRIPE_SECRET_KEY`
- `SERVICE_ROLE_KEY`
- `STRIPE_WEBHOOK_SECRET` after the Stripe webhook is created

Stripe price ids currently used in `app.js`:

- Weekly access: `price_1TtfWp0TcCPzwDfBL5E60kgn`
- 90-day access: `price_1TtfYz0TcCPzwDfBjIKv18nv`

Before payments unlock access, run the SQL in `supabase/sql/certivo_access.sql` inside the Supabase SQL Editor, then deploy the two Edge Functions.

## Question Format

Add more questions in `questions.js` inside `CERTIVO_QUESTIONS`.

```js
{
  id: "s1q1",
  topic: "annuities",
  simulator: 1,
  en: {
    question: "English question",
    answers: [
      { id: "s1q1-a1", text: "Answer text" }
    ],
    explanation: "English explanation"
  },
  es: {
    question: "Spanish question",
    answers: [
      { id: "s1q1-a1", text: "Texto de respuesta" }
    ],
    explanation: "Spanish explanation"
  },
  correctAnswerId: "s1q1-a1"
}
```

Keep answer ids identical between English and Spanish. The app shuffles answers and scores by `correctAnswerId`, not by visible position.

## GitHub Pages Upload

1. Open the `certivo-practice` repository on GitHub.
2. Replace or upload these files at the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `questions.js`
   - `study.js`
   - `manifest.webmanifest`
   - `favicon.png`
   - `apple-touch-icon.png`
   - `README.md`
3. Keep the Supabase files locally or in GitHub for reference, but deploy Edge Functions from Supabase.
4. Go to **Settings > Pages**.
5. Set the source to the main branch and root folder.
6. Save. The app will be available at:

`https://cruzctrlsam.github.io/certivo-practice/`

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
