/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

const redirects = async () => {
	return [
		{
			source: "/hello",
			destination: "/api/hello",
			permanent: false,
		},
	];
};

module.exports = {
	nextConfig,
	redirects,
};
