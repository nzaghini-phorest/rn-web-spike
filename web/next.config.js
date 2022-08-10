/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'lottie-react-native': 'react-native-web-lottie',
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

const {withExpo} = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['solito', 'app']);

const p = withPlugins(
  [withTM, [withExpo, {projectRoot: __dirname}]],
  nextConfig,
);

module.exports = p;
