import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82",
        destination: "/politismos",
        permanent: true,
      },
      {
        source: "/fr/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CE%BC%CF%8C%CF%82",
        destination: "/fr/culture",
        permanent: true,
      },
      {
        source: "/en/%CE%B5%CF%80%CE%B9%CE%BA%CE%BF%CE%B9%CE%BD%CF%89%CE%BD%CE%AF%CE%B1",
        destination: "/en/contact",
        permanent: true,
      },
      {
        source: "/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CE%AE-cookies",
        destination: "/politiki-aporritou",
        permanent: true,
      },
      {
        source: "/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CE%AE-%CF%87%CF%81%CE%AE%CF%83%CE%B7%CF%82",
        destination: "/politiki-chrisis",
        permanent: true,
      },
      {
        source: "/fr/%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CE%AE-cookies",
        destination: "/fr/politique-de-confidentialite",
        permanent: true,
      },
      {
        source: "/fr/%CF%84%CE%BF-%CF%87%CF%89%CF%81%CE%B9%CF%8C-%CE%BC%CE%B1%CF%82",
        destination: "/fr",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
