import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://hack-arena.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hackarena" />
          <meta
            property="og:description"
            content="One stop solution for managing your hackathons"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dapafwlvo/image/upload/v1654017579/start_1200_630_px_kf4ihl.png"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="hack-arena.vercel.app" />
          <meta
            property="twitter:url"
            content="https://hack-arena.vercel.app/"
          />
          <meta name="twitter:title" content="Hackarena" />
          <meta
            name="twitter:description"
            content="One stop solution for managing your hackathons"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dapafwlvo/image/upload/v1654017579/start_1200_630_px_kf4ihl.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
