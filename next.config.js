/** @type {import('next').NextConfig} */
const isWindows = process.platform === "win32";

const nextConfig = {
  // ~1,300 election map PNGs + ~2,400 CSVs — keep dev watcher off heavy folders.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.next/**",
          "**/app/database/maps/**",
          "**/public/db/**",
        ],
        ...(isWindows
          ? {
              poll: 1000,
              aggregateTimeout: 300,
            }
          : {}),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
