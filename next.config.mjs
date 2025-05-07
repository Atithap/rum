/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["plus.unsplash.com", "images.unsplash.com"],
    },
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
