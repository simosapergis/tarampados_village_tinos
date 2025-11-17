import type { NextConfig } from "next";
import { defaultLocale, locales } from "./src/i18n/config";

const nextConfig: NextConfig = {
  reactCompiler: true,
  i18n: {
    locales: [...locales],
    defaultLocale,
    localeDetection: true,
  },
};

export default nextConfig;
