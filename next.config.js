/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.imgur.com",
        }
      ]
    },
    env: {
      NEXT_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
};
