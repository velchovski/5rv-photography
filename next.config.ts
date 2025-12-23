import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Config options here
const nextConfig: NextConfig = {};

// I18n plugin
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

export default withNextIntl(nextConfig);
