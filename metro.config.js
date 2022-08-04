/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    nodeModulesPaths: ['./node_modules'],
    blockList: [
      new RegExp('./app/node_modules/.*'),
      new RegExp('./web/node_modules/.*'),
    ],
  },
};
