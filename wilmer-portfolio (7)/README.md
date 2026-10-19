# Wilmer Tolentino – VA Portfolio

Static site (HTML, CSS, JS). No build step or dependencies.

```
index.html · samples/email-support.html · samples/chat-support.html · samples/digital-va-projects.html
css/style.css · js/main.js · assets/wilmer-tolentino.jpg · assets/projects/ (client previews)
```

## Publish free (easiest: Netlify Drop, ~2 minutes)
1. Unzip this folder.
2. Go to https://app.netlify.com/drop and sign up/log in (free).
3. Drag the whole folder onto the page. You get a public URL like `https://random-name.netlify.app`.
4. Optional: Site settings > Change site name for a cleaner URL.

## Alternative: GitHub Pages
Create a public repo, upload these files, then Settings > Pages > Deploy from branch > `main` / root.

## Adding Additional Work Samples later
1. Copy `samples/email-support.html` to `samples/additional-work.html` and replace the content inside `<main>`.
2. In `index.html`, add a third card in `#samples` linking to it (copy an existing card).
Do not add links until the page exists.

## Notes
- Mail buttons: Let's Talk (Portfolio Inquiry), Let's Collaborate (Virtual Assistant Collaboration), Contact Me (Virtual Assistant Opportunity).
- Email and chat samples are written by Wilmer; all names, companies and personal details are anonymized or removed.
- Phone number is intentionally not published.

## Digital VA Projects page (samples/digital-va-projects.html)
- Emma Landolt: three first-page previews (SIRENS catalogue, Las Sirenas brochure, Sirens Oracle Deck). Ruby Lecot: three previews (grief guide mockup, Teen guide cover, Angel Cards cover).
- No full PDFs are on the site. Visitors request full files using the Request More Samples buttons.
- Katie McDonough: three purple-image samples. Ruby Lecot: grief guide mockup, two pages of the Teen guide PDF, and the Angel Cards deck.
- Each client has a Request More Samples button (mailto with the subject lines you specified and a short prefilled body).
- To change a sample, replace the image in assets/projects/ and edit its card in the HTML.

## To confirm before publishing
- Confirm each client agrees to their work (previews) being shown publicly.
- Emma's catalogue preview is its cover page only; prices appear inside the full files, which are not published.
