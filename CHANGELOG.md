# Certivo Practice Changelog

## V5.8 - Stabilization

- Added `config.js` for public app settings, version label, Supabase publishable config, free preview limits, and Stripe price ids.
- Added `CHANGELOG.md` so each release has a clear record.
- Added `QA_CHECKLIST.md` for repeatable GitHub/Supabase/mobile checks before uploading.
- Added `CONTENT_SCHEMA.md` to document the question, flashcard, and study chapter data shapes.
- Updated README with the current release workflow and file list.
- Created a clean production-ready release package.

## V5.7 - Study Progress Upgrade

- Made the Study tab easier to read with section guide chips and numbered sections.
- Added chapter progress tracking for studied chapters.
- Improved free-to-paid upgrade messaging in Study and Flashcards.
- Completed phone-width QA in English and Spanish.

## V5.6 - Learning Loop

- Connected Study, Flashcards, Practice, Weakness Review, and Progress into a smoother learning loop.
- Added chapter-filtered flashcards.
- Added chapter-to-practice actions.

## V5.5 - Spanish Term Polish

- Cleaned Spanish coaching language, including replacing awkward English terms such as "hazard" with clearer Spanish wording.

## V5.0 - Protected Content

- Moved the full question bank and full flashcard deck into protected Supabase tables.
- Kept only the free preview content in the public GitHub Pages app.
