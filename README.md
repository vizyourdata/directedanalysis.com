# directedanalysis.com

Landing page for **Directing Analysis**, the free publication for the working analyst in the AI era.
Tagline: *We used to direct the tools. Now we direct the analysis.*

Static site, no build step. Hosted on GitHub Pages with a custom domain (same pattern as ericsummers.io).

```
index.html              the landing page (all CSS inline)
404.html                on-brand not-found
CNAME                   directedanalysis.com
.nojekyll               serve files as-is
assets/img/favicon.svg
```

## Editing

- **Subscribe form target:** both `<form class="sub">` elements point at
  `https://directinganalysis.substack.com/subscribe` and pass the email as `?email=`.
  Change that URL once the Substack subdomain is final (search for `substack.com/subscribe`).
- **Copy:** everything is in `index.html`. Sections in order: hero, thesis + ledger, pillars, issue 01, about, closing subscribe.

## Deploy

Push to `main`. GitHub Pages serves the root of the branch.

## DNS (at the registrar)

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
CNAME www  vizyourdata.github.io
```

Then in the repo: Settings → Pages → confirm custom domain `directedanalysis.com` and tick **Enforce HTTPS** once the certificate issues.

## Not yet done

- No OG image (social previews fall back to text). Add `assets/img/og.png` at 1200×630 and set `og:image`.
- The session log named `directinganalysis.com` as the intended domain; this repo is on `directedanalysis.com`. Reconcile and 301 whichever is secondary.
