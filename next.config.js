/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "pps.whatsapp.net",
      },
      {
        hostname: "media.badgr.com",
      },
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
