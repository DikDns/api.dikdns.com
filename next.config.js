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
		{
			source: "/users",
			destination: "/api/users",
			permanent: false,
		},
		{
			source: "/users/:path*",
			destination: "/api/users/:path*",
			permanent: false,
		},
	];
};

module.exports = {
	nextConfig,
	redirects,
};
