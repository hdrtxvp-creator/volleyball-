# Sign-up sheet — one-time setup

Fifteen minutes, once. After this, every week is: open the sheet, paste the link in the group,
and the answers land in the app by themselves.

## 1. Put the files online

Drag `volleyball-pwa.zip` onto app.netlify.com (your site is called **weekly-volleyball-picker**).
Both pages go up together: `index.html` is your app, `rsvp.html` is what the group sees.

## 2. Make the Supabase project

1. Go to supabase.com and sign up — free, no card.
2. **New project**. Any name. Pick the region closest to you. Save the database password
   somewhere, though you will not need it for this.
3. Wait for it to finish building, about two minutes.

## 3. Make the two tables

1. In the left sidebar: **SQL Editor** → **New query**.
2. Paste in everything from `supabase-setup.sql` and press **Run**.
3. It should say Success. That is the whole database.

## 4. Tell the app where to find it

1. In Supabase: **Project Settings** (the gear) → **API**.
2. Copy the **Project URL** — it looks like `https://abcdefgh.supabase.co`.
3. Copy the **anon public** key — a long string starting `eyJ...`. This one is meant to be
   public; it is not a password, and it is the only key you should ever copy out of here.
4. Open your app → **Sign-up sheet** → **Sheet settings**. Paste both in and press **Save these**.
   Leave the third box empty if the app and `rsvp.html` sit on the same site.

## 5. Every week

1. Press **Open this week's sheet**. Everyone is set to not coming.
2. Press **Copy the link** and paste it into the WhatsApp group.
3. People tap their name, then Coming or Not coming. They can change their mind any time.
4. Your app checks every twenty seconds while it is open, or press **Check answers**.
5. Pick the sides as usual.

## Sending each player their own link

**Copy a link for each player** gives you one link per person, as a list of
"name then link" pairs. Send each person theirs. That link shows only their own name
and three buttons — no other names, no counts, no ratings, and no way to change the roster.

The group link (**Copy the link**) still works for the whole WhatsApp group, and that one has
the add-yourself box for the people who are not on the roster.

Anyone who taps nothing is counted as not coming. Opening the week's sheet sets everyone to
not coming, so silence never puts someone on a side.

## People who are not on the roster

Your WhatsApp group is far bigger than the roster, so the sign-up page has a box at the bottom:
**Not on the list?** Anyone types their name and picks *Add me — playing* or *Add me — just
watching*. They go straight onto this week's sheet.

In your app they appear under the Sign-up sheet as new names with **add** or **×** beside each.
Adding puts them on the roster at rating 3; × ignores them for good. Nobody can edit your roster
from outside — the sheet only ever suggests.

Watchers are counted and shown, but never picked into a side.

## Worth knowing

- Anyone with the link can answer, and could answer for someone else. It is a volleyball group,
  not a bank, so this is a tradeoff rather than a hole — but do not post the link publicly.
- Nobody sees ratings. The sheet holds names and yes/no, nothing else.
- Opening a new sheet each week starts a fresh set of answers. Last week's are left behind,
  not deleted.
- Free tier: Supabase pauses a project after a week with no activity. A weekly game keeps it
  awake; if it ever sleeps, open the Supabase dashboard and press Restore.
