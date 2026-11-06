/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * Static export: the whole site is rendered at build time and published to
   * GitHub Pages. There is no backend to run.
   */
  output: 'export',
  trailingSlash: true,
  experimental: { globalNotFound: true },
  images: {
    /* The next/image optimizer does not run under `output: 'export'`. */
    unoptimized: true,
  },
};

export default nextConfig;
