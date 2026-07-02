# Certivo Practice

Certivo Practice is a static, mobile-first bilingual Texas Life Insurance practice app for GitHub Pages. It uses plain HTML, CSS, and JavaScript: no backend, build step, package install, or API key.

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
- Mobile bottom navigation

## Files

- `index.html` - app screens
- `styles.css` - responsive light/dark styling
- `app.js` - quiz behavior, progress, scoring, flags, history, and filters
- `questions.js` - structured bilingual question database
- `README.md` - this file

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
   - `README.md`
3. Go to **Settings > Pages**.
4. Set the source to the main branch and root folder.
5. Save. The app will be available at:

`https://cruzctrlsam.github.io/certivo-practice/`

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
