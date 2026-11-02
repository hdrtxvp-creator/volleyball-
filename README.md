# Weekly Volleyball

Splits a weekly volleyball group into even sides, keeps the strong players spread out,
rotates who waits, and collects who is coming each week.

- `index.html` — the organiser's app
- `rsvp.html` — the sign-up page players open
- `supabase-setup.sql` — run once in Supabase to create the sign-up sheet
- `SETUP.md` — how to set it up

Everything is plain HTML, CSS and JavaScript. No build step.
Ratings live only in the organiser's own browser; they are never in this repository,
never in the sign-up page, and never in the database.
