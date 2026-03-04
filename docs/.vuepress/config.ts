import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/qa-image-guide/",
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: "일반 사용자용",
        prefix: "/general/",
        link: "/general/",
        children: ["basic.md", "configure.md"],
      },
      {
        text: "관리자용",
        prefix: "/admin/",
        link: "/admin/",
        children: ["user.md", "books.md"],
      },
    ],
  }),

  lang: "ko-KR",
  title: "QA Image 가이드",
  description: "QA Image 사이트 사용을 위한 가이드 문서입니다",
});
