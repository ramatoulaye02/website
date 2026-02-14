
# pinkteletubbi — portfolio

personal portfolio built with React + TypeScript + Vite.

## tech

- React
- TypeScript
- Vite
- Tailwind (via CDN in `index.html`)
- React Router

## run locally

```bash
npm install
npm run dev
```

build for production:

```bash
npm run build
```

preview the production build:

```bash
npm run preview
```

## customize

### about me photos

`About Me` pulls images from the `media/` folder using this pattern:

- `media/about-*.png`
- `media/about-*.jpg`
- `media/about-*.jpeg`
- `media/about-*.webp`

Add/replace files like `media/about-me1.png`, `media/about-me2.png`, etc.

### contact image

The `Contact Me` page uses:

- `media/contact-me.png`

### logo

Navbar logo asset:

- `media/PTlogo.png`

## project structure

```text
components/    pages + UI components
media/         images used by the site
App.tsx        routes
index.tsx      app entry
index.html     tailwind CDN + global styles
```

## notes

- This repo uses hash routing (`HashRouter`) so it works well on static hosting.


