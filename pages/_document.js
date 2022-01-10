import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="icon" type="image/png" href="/favicon-196x196.png" />
          <link rel="apple-touch-icon" href="/touch-icon-iphone.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@studymono" />
          <meta name="twitter:creator" content="@OkezieChiedozie" />
          <script
            async
            defer
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            data-host-url={process.env.NEXT_PUBLIC_UMAMI_DATA_HOST}
            data-domains="www.studymono.com"
            src="/umami.js"
          />
        </Head>
        <body>
          <div class="font-body">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
