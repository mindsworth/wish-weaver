## Widgets (Embeddable Header/Footer)

Two widgets are provided that embed the app's Header and Footer into any site via an iframe to avoid framework/CSS conflicts.

### 1) Include the script

Header:

```html
<script src="/widgets/header.js"></script>
```

Footer:

```html
<script src="/widgets/footer.js"></script>
```

Optionally set a base origin if serving the widget JS from a CDN:

```html
<script>
  window.WISHWEAVER_WIDGET_ORIGIN = 'https://mywishweaver.com'
</script>
```

### 2) Mount into a container

```html
<div id="ww-header"></div>
<div id="ww-footer"></div>

<script>
  // Header (height can be adjusted)
  WishWeaverHeaderWidget.mount('#ww-header', { height: 80 })

  // Footer
  WishWeaverFooterWidget.mount('#ww-footer', { height: 360 })
  // You may adjust heights to fit the content you render
  // or use CSS to constrain the mounting container.
</script>
```

The widgets render isolated iframes that load `/embed/header` and `/embed/footer` pages.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
