# Personal Portfolio Website

A responsive, single-page portfolio (HTML, CSS, vanilla JS — no build step).

## 1. Personalise it

Open `index.html` and search for every `[square bracket]` placeholder and replace it:

- Name, title, intro, About Me text
- Email, GitHub and LinkedIn links (they appear in the Home and Contact sections)
- Skills (also tweak the percentages, or delete the `.bars` block if you prefer tags only)
- At least 3 projects: description, technologies, code and live-demo links
- Education, certifications, work experience
- In `script.js`, change `your.email@example.com` in the contact form handler

Add your own files to an `assets/` folder:

- `assets/profile.jpg` — a clear, professional headshot (square works best)
- `assets/cv.pdf` — your CV (powers the Download CV buttons)

Also update `<title>` and the meta description at the top of `index.html`.

## 2. Preview locally

Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

## 3. Deploy (GitHub Pages — free)

1. Create a new public repository on GitHub, e.g. `portfolio`.
2. Upload all files in this folder (including `assets/`) to the repo root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<your-username>.github.io/portfolio/`.

Tip: name the repo `<your-username>.github.io` for a cleaner URL.

**Alternatives:** drag the folder onto [Netlify Drop](https://app.netlify.com/drop), or import the repo in Vercel.

## 4. Before you share it

- Click every link and test on your phone.
- Make sure no `[placeholder]` text remains.
- Add the live URL to your CV and LinkedIn.
