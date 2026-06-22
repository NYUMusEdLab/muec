# Music Education Editors' Circle — Website

A static, multi-page public resource for the Circle. No build step, no dependencies —
plain HTML/CSS/JS that runs directly on GitHub Pages.

Target live URL: **https://nyumusedlab.github.io/muec/**
(repository named `muec` under the `nyumusedlab` account).

## Pages

- `index.html` — home (mission, who we are, open-resource overview, join the list)
- `about.html` — purpose, organizational principles, interim steering group, policies; links to Members
- `journals.html` — journals directory (Browse tab) + merged indexing matrix incl. CSSCI/北大核心 (Indexing tab)
- `resources.html` — **two tabs**: Reading & collections (MayDay/ACT + editorials) and Editorial histories (the full editor dataset)
- `integrity.html` — collapsible retractions + flagged-venue tables
- `members.html` — people directory (Current / Past / In memoriam), linked from About; not in the top nav
- `editors.html` — redirect to `resources.html#editorial-histories` (the page moved into Resources)

Nav (all pages): Home · About · Journals · Integrity · Resources · Join the list.

## Where the content lives (edit these, not the HTML)

All content is in plain-text data files under `data/`. The pages read them and build
themselves, so **you never have to touch HTML to update the site** — just edit a data file.

- `data/journals.js` — the journals directory
- `data/resources.js` — featured collection + editorials
- `data/editors.js` — the editorial-history records
- `assets/style.css` — the house style; change the colors in `:root` to retheme everything

### How to add or edit a journal

Open `data/journals.js`. Each journal is one `{ ... }` block. Copy an existing block,
paste it, and edit the values. Keep the field names and the commas. Fields:

```
title, trans (translation/subtitle), publisher, region, country, lang,
issn, scope, website, submission, ethics, editor, editorConf (high|medium|low), indexing [..]
```

- `region` must be one of: International, North America, Europe, Nordic, Latin America,
  China, Asia, Australasia, Africa (this drives the filter dropdown).
- Use `""` for anything unknown. A blank `submission` or `ethics` shows a greyed-out link.
- `editorConf` of `medium`/`low` shows the editor name with an "(unverified)" tag.

### How to add the editorial-history data

`data/editors.js` is currently a placeholder. Add rows in this shape:

```
{ journal:"…", editor:"…", role:"…", term:"…", affiliation:"…", source:"…" }
```

If you have a spreadsheet (`Music_Ed_Journal_Editorial_Histories`), export it to CSV and it
can be converted into these rows. Keep current editors' private contact details OUT of this
file — those belong in the members-only area.

> Tip: keep commas and quotes intact. If a page goes blank after an edit, you likely
> dropped a comma or quote — undo and retry.

## Editing on your own computer

Double-click any `.html` file to preview it in a browser. Because the data is loaded as
plain `.js` files (not `fetch`), preview works offline with no local server.

## Publish / update via GitHub Desktop

1. Point GitHub Desktop at this `website` folder (Add Local Repository → Create a repository).
2. Commit your changes, then **Publish repository** as `muec` under `nyumusedlab`, **public**.
3. On github.com: **Settings → Pages → Deploy from a branch → main / (root) → Save**.
4. Live at **https://nyumusedlab.github.io/muec/** (about a minute after each push).

For later edits: change a `data/` file → commit in GitHub Desktop → push. The site updates itself.

## Live spreadsheet data (continually updatable)

Several pages read Excel files directly in the browser, so you update the **spreadsheet**
and the site refreshes itself — no code changes:

- **Editor History** ← `data/xlsx/editorial_histories.xlsx` + `data/xlsx/board_archive_pointers.xlsx`
- **Journals → Indexing matrix** ← `data/xlsx/journal_indexing.xlsx`
- **Integrity** ← `data/xlsx/research_integrity.xlsx`

### Important: private vs. published spreadsheets

Your **master** spreadsheets live in `Editorial Data (PRIVATE - do not publish)/` at the
project root — OUTSIDE the `website/` folder, so they are never published. Two of them are
private and never go online at all:

- `Music_Ed_Journal_Editors_Contacts.xlsx` (editor emails)
- `ISME_2026_Panel_Responses.xlsx` (internal planning)

Two have sensitive **columns** that must be stripped before publishing:

- Editorial Histories → the `Email` column
- Journal Profiles & Indexing → the `Integrity note` column

So after editing any master, run the sync to regenerate the public copies. The sync
script lives in this repo at `tools/sync_public_data.py`; run it from the project root:

```bash
python3 website/tools/sync_public_data.py
```

This writes sanitized copies into `website/data/xlsx/` (and normalizes Chinese journal
names to `English (简体)`). Then commit & push `website/`.
(If you only edited `research_integrity` or `board_archive_pointers`, those are copied
as-is — still run the script so the published copy matches your master.)

> If you'd rather not run a script, you can edit the files in `website/data/xlsx/` directly —
> but never put editor emails or the integrity-note column into those published copies.

## Notes

- `.nojekyll` tells GitHub Pages to serve files as-is (no Jekyll processing).
- Editor names across the directory are the least-stable field; several come from secondary
  sources and are tagged "(unverified)" — confirm against each journal's live board page.
