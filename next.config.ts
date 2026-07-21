/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for shared hosting (Hostinger). Produces an `out/` folder
  // of plain HTML/CSS/JS that you upload to public_html.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export: no server to optimize images at runtime.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "citaevcharger.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "citaevcharger.com.pk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "citaevcharger.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
