import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";


const pwaConfigs = {
  injectRegister: "inline",
  workbox: {
    skipWaiting: true
  },
  manifest: {
    name: "Educate",
    short_name: "Educate",
    description: "The Future of Learning is Online",
    theme_color: "#121212",
    background_color: "white",
    display: "standalone",
    dir: "rtl",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        "src": "/images/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
      },
      {
        "src": "/images/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "/images/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
      },
      {
        "src": "/images/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
      },
    ],
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfigs)],
})
