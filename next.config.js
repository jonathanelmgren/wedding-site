/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: "@import 'styles/_variables.module.scss';",
  },
};

module.exports = nextConfig;
