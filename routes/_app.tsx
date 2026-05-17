import { define } from "@/utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Basic SEO */}
        <title>Desktop</title>
        <meta name="description" content="Your app description here" />

        {/* Theme / mobile UI */}
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (Facebook, Discord, etc.) */}
        <meta property="og:title" content="Desktop" />
        <meta property="og:description" content="Your app description here" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desktop" />
        <meta name="twitter:description" content="Your app description here" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.png"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
