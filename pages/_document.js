import Document, { Head, Main, NextScript } from "next/document";

import { extractCritical } from "emotion-server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `*{font-family: 'Rubik', sans-serif;} ${this.props.css}`
            }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,400i"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
