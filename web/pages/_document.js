import {Children} from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {AppRegistry} from 'react-native';
import config from '../app.json';
import {ServerStyleSheet} from 'styled-components';
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    AppRegistry.registerComponent(config.name, () => Main);
    const {getStyleElement} = AppRegistry.getApplication(config.name);

    const sheet = new ServerStyleSheet();
    const page = await renderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    });

    const styles = [
      <style dangerouslySetInnerHTML={{__html: normalizeNextElements}} />,
      getStyleElement(),
      sheet.getStyleElement(),
    ];
    return {...page, styles: Children.toArray(styles)};
  }

  render() {
    return (
      <Html style={{height: '100%'}}>
        <Head />
        <body style={{height: '100%', overflow: 'hidden'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
