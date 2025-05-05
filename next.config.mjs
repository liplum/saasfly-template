import withMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [],
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: {},
  experimental: {
    mdxRs: true,
    // serverActions: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
};

export default withMDX()(config);
