import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["images.pexels.com", "api.microlink.io", "i.pravatar.cc"],
	},

	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
