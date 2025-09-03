import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://test-six-rosy-25.vercel.app/api/:path*',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test-six-rosy-25.vercel.app',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;