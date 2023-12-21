import { fileURLToPath, URL } from 'node:url'

import { resolve } from "path";

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const model = env.VITE_APP_MODEL || "admin";
  const pages = (() => {
    const allPages = {
      admin: resolve(__dirname, "src/pages/admin/index.html"),
      merchant: resolve(__dirname, "src/pages/merchant/index.html"),
    };
    if (!model) {
      return allPages;
    }
    return allPages[model];
  })();
  const root = `./src/pages/${model}`;

  return defineConfig({
    plugins: [
      vue(),

      Components({
        extensions: ["vue"],
        deep: true,
        include: [/\.vue$/, /\.vue\?vue/],
        directoryAsNamespace: true,
        dts: resolve(__dirname, "./src/components.d.ts"),
        dirs: [resolve(__dirname, "./src/components"), "components"],
      }),

      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "src/auto-imports.js",
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        "@admin": fileURLToPath(new URL('./src/pages/admin/src', import.meta.url)),
        "@merchant": fileURLToPath(new URL('./src/pages/merchant/src', import.meta.url)),
      }
    },
    root,
    publicDir: "../../../public",
    build: {
      outDir: "dist",
      rollupOptions: {
        input: pages,
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`
        },
      }
    },
  })
}
