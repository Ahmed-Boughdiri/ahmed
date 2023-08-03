/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "images.pexels.com"
        ]
    },
    trailingSlash: true,
    output: "export"
}

module.exports = nextConfig
