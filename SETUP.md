# Sign-up sheet — one-time setup (Firebase)

The app keeps your roster and ratings on your own device. The only thing that
goes online is this week's list of names and who tapped yes or no.

## 1. A Firebase project

**Use a new project, not one you already rely on.** The rules below replace the
whole Rules tab, so pointing this at an existing project risks your other data.
A second project is free and takes a minute.

1. console.firebase.google.com → **Add project**. Any name.
2. Google Analytics is not needed — turn it off.
3. When it is ready, left sidebar → **Build → Firestore Database** → **Create database**.
4. Pick a location near you. Start in **production mode** — the rules in the next
   step are what open the two paths the app uses.

## 2. The rules

1. In Firestore Database, open the **Rules** tab.
2. Replace what is there with everything in `firestore-rules.txt`.
3. Press **Publish**.

If you are reusing an existing project against the advice above, paste only the
`match /sheets/{sheet} { ... }` block inside your existing
`match /databases/{database}/documents { ... }` block, and leave the rest alone.

## 3. The two values

1. Gear icon (top left) → **Project settings** → **General**.
2. **Project ID** — something like `volleyball-4f21c`. Not the display name.
3. Scroll to **Your apps**. If there is no web app, press the **</>** icon to add
   one (any nickname, no hosting needed). The config block it shows contains
   **apiKey** — a string starting `AIza`.

The API key is safe in a web page. It identifies the project; the rules above are
what actually control access.

## 4. Tell the app

On the computer that holds your roster, open your site, scroll to **Sign-up
sheet**. If it says **Leave practice mode**, press that first.

Press **Sheet settings**, put the **Project ID** in the first box and the
**apiKey** in the second, leave the third blank, press **Save these**.

## 5. Every week

1. **Open this week's sheet** — everyone is set to not coming.
2. **Copy the link** for one message to the whole group, or **Send one by one**
   for a WhatsApp message per player with only their own name on it.
3. Answers arrive on their own every twenty seconds while the app is open, or
   press **Check answers**.
4. Pick the sides.

Anyone who taps nothing is counted as not coming.

## Worth knowing

- Anyone with the link can answer, and could answer for someone else. It is a
  volleyball group, not a bank — but do not post the link publicly.
- Ratings are never in the database, never in the link, never on the sign-up page.
- A new sheet each week starts a fresh set of answers; last week's stay behind.
- Firebase's free tier is far beyond what a weekly game uses, and unlike some
  alternatives the project does not go to sleep when unused.

## If something goes wrong

**"Could not reach the sheet" with 403** — the rules were not published, or the
project ID is wrong. Check the Rules tab says Published.

**"Could not reach the sheet" with 404** — the Firestore database was never
created. Build → Firestore Database → Create database.

**Nothing happens and you are still in practice mode** — press Leave practice mode.
