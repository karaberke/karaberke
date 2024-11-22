import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  basePath: '/karaberke',  // Replace 'your-app-name' with your desired base path
  assetPrefix: '/karaberke',  // Replace 'your-app-name' with your desired base path
};

export default withContentlayer(nextConfig);
