/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: ["raw.githubusercontent.com"],
    },
};

const withMDX = require("@next/mdx")({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});
module.exports = withMDX(nextConfig);
