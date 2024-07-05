import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",


  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Kirito",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/vi/": {
      lang: "vi-VN",
      title: "Kirito Blog",
      description: "Blog của Kirito Phan",
    },
    "/ja/": {
      lang: "ja-JP",
      title: "キリトのブログ",
      description: "vuepress-theme-hope のブログデモ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "キリト",
      description: "vuepress-themeキリト-hope 的博客演示",
    },

  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
