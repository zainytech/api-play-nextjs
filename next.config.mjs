/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:'images.dog.ceo',
                protocol:'https',
            }
        ]
    }
};

export default nextConfig;
