# Certivo Content Schema

This file documents the content shapes to keep stable as Certivo expands.

## Public Preview Questions

File: `questions.js`

The public file should stay limited to the free preview questions.

```js
{
  id: "s1q1",
  topic: "annuities",
  simulator: 1,
  chapter: 9,
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

Rules:

- Use stable answer ids.
- Keep answer ids identical between English and Spanish.
- Never score by A/B/C/D position.
- Keep `topic`, `simulator`, and `chapter` consistent for filtering and chapter practice.

## Protected Question Bank

Supabase table: `certivo_questions`

The protected bank stores each full question in the `question` JSONB column. The JSON shape should match the public preview question format.

Run private seed files from:

`/Users/samcruz/Documents/Certivo App/SUPABASE_PRIVATE_SETUP/`

Do not upload private seed files to GitHub.

## Study Chapters

File: `study.js`

`CERTIVO_STUDY.chapters[]`:

```js
{
  id: "chapter-1",
  number: 1,
  title: {
    en: "English title",
    es: "Título en español"
  },
  sections: [
    {
      heading: {
        en: "English section heading",
        es: "Título de sección"
      },
      markdown: {
        en: "English markdown content",
        es: "Contenido en markdown"
      }
    }
  ]
}
```

Rules:

- Keep chapter numbers stable.
- Keep section headings short enough for mobile.
- Use plain markdown: headings, bullets, paragraphs, and blockquotes.

## Flashcards

Public preview flashcards currently come from `CERTIVO_STUDY.concepts[]`.

Protected full deck lives in Supabase table: `certivo_flashcards`.

```js
{
  id: "C001",
  term: "Risk transfer",
  topic: "risk_basics",
  chapter: 1,
  definition: {
    en: "English definition",
    es: "Definición en español"
  }
}
```

Rules:

- Keep `chapter` tied to the study chapter.
- Keep `term` stable so Spanish display overrides can work.
- Keep definitions short enough to fit on phone flashcards.

## Topics

Use these topic ids unless the app is intentionally expanded:

- `general`
- `contracts`
- `life insurance`
- `policy provisions`
- `riders`
- `retirement`
- `annuities`
- `taxes`
- `underwriting`
- `texas`
- `ethics`
- `beneficiaries`
- `best interest`
- `calculation`
