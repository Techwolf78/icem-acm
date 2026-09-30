/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === "1" || Boolean(process.env.NEXT_PUBLIC_VERCEL_ENV);
const basePath = isVercel ? "" : (process.env.NEXT_PUBLIC_BASE_PATH || "/icem-acm");

const nextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

