import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /*VitePWA({
      registerType: "",
      manifest: {
        name: "",
        short_name: "",
        description: "",
        theme_color: "",
        icons: [
          {
            src: "",
            sizes: "",
            type: ""
          }
        ]
      }
    })*/
  ],
})
