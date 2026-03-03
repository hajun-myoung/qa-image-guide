import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: "ko-KR",
  title: "QA Image 가이드",
  description: "QA Image 사이트 사용을 위한 가이드 문서입니다",
});
