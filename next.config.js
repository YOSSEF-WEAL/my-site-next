const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["yossef.3a-d.com"],
  },
};

module.exports = withNextIntl(nextConfig);
