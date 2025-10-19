import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 静的サイトとして出力（export）する設定
  output: "export",

  // 2. GitHub Pages用の設定 (リポジトリ名)
  basePath: "/portfolio-frontend",

  // 3. (重要) 'next/image' を静的サイトで使うための設定
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
