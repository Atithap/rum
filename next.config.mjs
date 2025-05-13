/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["plus.unsplash.com", "images.unsplash.com"],
    },
    reactStrictMode: true,
    output: "standalone",
    compiler: {
        styledComponents: true,
    },
};


export default nextConfig;
