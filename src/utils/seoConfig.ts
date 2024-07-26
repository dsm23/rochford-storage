import type { ManifestOptions } from "vite-plugin-pwa";
import colors from "tailwindcss/colors";

export const seoConfig = {
  description: "A site for a storage unit in Rochford",
  type: "website",
  image: {
    url: "/maskable_icon.png",
    alt: "Car in storage unit",
    width: 1024,
    height: 1024,
  },
  siteName: "Rochford Storage",
};

export const manifest: Partial<ManifestOptions> = {
  name: seoConfig.siteName,
  short_name: "Rochford Storage",
  description: seoConfig.description,
  theme_color: colors.blue[800],
  background_color: "#ffffff",
  display: "minimal-ui",
  icons: [
    {
      src: "/maskable_icon_x48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x128.png",
      sizes: "128x128",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};
