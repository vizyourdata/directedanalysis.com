# directedanalysis.com

Landing page for **Directed Analysis**, the free publication for the working analyst in the AI era.
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
  `https://directedanalysis.substack.com/` and pass the email as `?email=`.
  The nav button and the Issue 01 link go there too (search for `directedanalysis.substack.com`, not the /subscribe path).
- **Copy:** everything is in `index.html`. The visual system matches atalayahealth.com: warm paper with grain, slate and amber, Fraunces headings, Inter body, IBM Plex Mono for numbers and labels, light and dark. Sections: centered hero with the email form, the close week panel, an amber callout, Issue 01, the four steps, upcoming essays, the method, about, a CTA card, and a four-column footer.
- **Audience:** written for accountants and finance analysts without naming them much. The close week, variances, tying out and review notes carry it. Keep new copy in that vocabulary.
- **Subscribe form:** a GET to the Substack base URL with `email` as the field name.

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
