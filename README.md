# Music Education Editors' Circle — Website

A single-page static site for the Circle. Hosts the public landing page with an
overview, a "join the announcements list" link to https://groups.io/g/muec,
the message archive link, and contact info.

## Files

- `index.html` — the entire site (HTML + CSS in one file, no build step, no dependencies).

## Edit

Open `index.html` in any text editor. Common edits:

- **Main website link:** find `Main website` in the Archive section and replace the
  `href="#"` placeholder with your primary site URL (or delete that list item).
- **Tagline / about text:** edit the `<header class="hero">` and `#about` section.
- **Colors:** change the `--accent` values in the `:root` CSS block.

To preview locally, just double-click `index.html` — it opens in a browser.

## Publish to GitHub Pages

Target live URL: **https://nyumusedlab.github.io/muec/**
This requires a repository named **`muec`** under the **`nyumusedlab`** account.

1. Create a new repository on GitHub named exactly **`muec`** under `nyumusedlab`,
   set to **Public** (Pages needs public on free plans). Don't add a README — these files supply one.
2. From this `website/` folder, push the files to the repo root:
   ```
   git init
   git add index.html README.md
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/nyumusedlab/muec.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set branch to **main** and folder to **/ (root)**, then **Save**.
6. Wait ~1 minute. Your site goes live at **https://nyumusedlab.github.io/muec/**.

> Note: `index.html` must sit at the repo root (not inside a subfolder) for the
> URL above to work.

### Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and follow GitHub's
DNS instructions. A `CNAME` file will be added automatically.
