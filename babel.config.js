module.exports = babelConfig;

function babelConfig(api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'app',
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
}
