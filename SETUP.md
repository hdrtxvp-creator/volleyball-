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

## 5. The link, sent once

Press **Copy the link** and paste it in the WhatsApp group. Pin it. That is the
only message you ever have to send.

The first time anyone opens it they see a name box and three buttons: *That's me
— I'm playing / just watching / I'm out*. They put their name in and tap one.
Their phone remembers them from then on, so every week after that the page opens
straight on their own name and it is a single tap. Tell them to use Share → **Add
to Home Screen** and it sits there like an app.

- Typing a name that is on the roster claims that roster place. Capitals and
  spare spaces do not matter.
- Nobody is ever turned away. If a name is used on a second phone — a new
  handset, a cleared browser, two players sharing one phone — it still works,
  and your app shows a line naming who it happened to. Almost always it is
  innocent. If one looks wrong, tap that name in your app to set it yourself and
  the sheet leaves it alone for the rest of the week.
- Anyone not on the roster just types their name the same way. They appear in
  your app with **add** or **×** beside them.
- Nobody's name is ever listed on that page, so the group does not see the roster.

**Copy a link for each player** is still there if you would rather set someone up
yourself — it gives one link per person, each showing only that name. You do not
need it for the normal flow.

## 6. Every week

1. **Open this week's sheet** — everyone is set to not coming. No links change,
   and nobody has to set their phone up again.
2. Wait. Answers arrive on their own every twenty seconds while the app is open,
   or press **Check answers**.
3. Pick the sides.
4. **Send to the group.**

Anyone who taps nothing is counted as not coming.

## The organiser code

If someone else picks the sides, they need your ratings. Under **Sign-up sheet**
press **Organiser code**, make up a code of six characters or more, and press
**Save the code**. Your roster and every rating are sealed with that code and
kept alongside the sheet — unreadable to anyone without it, including anyone
looking straight at the database.

Then press **Copy the helper's link** and send that to them. Send the code in a
separate message, or say it out loud. Both in one message is the same as no code.

They open the link, type the code once, and their copy has the roster and the
ratings. From then on the two phones stay in step: a rating changed on either one
turns up on the other. **Turn it off** stops further changes reaching them.

## Worth knowing

- Nothing stops someone typing a name that is not theirs. What stops it mattering
  is that you are told: any name answered from two different phones in a week is
  listed in your app. Tapping a name there to set it yourself always wins over
  the sheet.
- Ratings are never in a link and never on the sign-up page. With an organiser
  code set they are in the database, but sealed — without the code they are a
  block of letters.
- A new sheet each week starts a fresh set of answers; last week's stay behind.
  The sheet id does not change, so no link ever breaks.
- Firebase's free tier is far beyond what a weekly game uses, and unlike some
  alternatives the project does not go to sleep when unused.

## If something goes wrong

**"Could not reach the sheet" with 403** — the rules were not published, or the
project ID is wrong. Check the Rules tab says Published.

**"Could not reach the sheet" with 404** — the Firestore database was never
created. Build → Firestore Database → Create database.

**Nothing happens and you are still in practice mode** — press Leave practice mode.
