import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // nested: resolve(__dirname, 'nested/secondpage.html'),
      },
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          // images
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "img/[name]-[hash][extname]";
          }

          // css
          if (/\.css$/.test(name ?? "")) {
            return "css/[name]-[hash][extname]";
          }

          // fonts
          if (/\.(woff|woff2)$/.test(name ?? "")) {
            return "fonts/[name]-[hash][extname]";
          }

          // audios
          if (/\.mp3$/.test(name ?? "")) {
            return "audios/[name]-[hash][extname]";
          }

          // default value
          return "extra/[name]-[hash][extname]";
        },
      },
    },
  },
});
