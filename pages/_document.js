import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />

          <meta
            name="description"
            content="Get better search results from Google by limiting sites, file extensions, dates and more"
          />
          <meta
            name="keywords"
            content="Google search, Advanced Search, Accurate Search, Easy Search, Advanced Google Search, Search Google by sites, Search Google by file extension"
          />
          <meta name="author" content="Rohit Kashyap" />

          {/* Android */}
          <meta name="theme-color" content="red" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* IOS */}
          <meta name="apple-mobile-web-app-title" content="Easy Search" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          {/* <!-- Windows  --> */}
          <meta name="msapplication-navbutton-color" content="#5900d1" />
          <meta name="msapplication-TileColor" content="#5900d1" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />

          {/* <!-- Pinned Sites  --> */}
          <meta name="application-name" content="Easy Search" />
          <meta
            name="msapplication-tooltip"
            content="Get better search results from Google by limiting sites, file extensions, dates and more"
          />
          <meta name="msapplication-starturl" content="/" />

          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/icons/favicon-96x96.png"
            rel="icon"
            type="image/png"
            sizes="96x96"
          />

          {/* <!-- iOS  --/> */}
          <link href="/icons/apple-icon.png" rel="apple-touch-icon" />
          <link
            href="/icons/apple-icon-76x76.png"
            rel="apple-touch-icon"
            sizes="76x76"
          />
          <link
            href="/icons/apple-icon-120x120.png"
            rel="apple-touch-icon"
            sizes="120x120"
          />
          <link
            href="/icons/apple-icon-152x152.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />

          {/* <!-- Startup Image  --/> */}
          <link
            href="/icons/ms-icon-310x310.png"
            rel="apple-touch-startup-image"
          />

          {/* <!-- Pinned Tab  --/> */}
          <link
            href="path/to/icon.svg"
            rel="mask-icon"
            size="any"
            color="red"
          />

          {/* <!-- Android  --/> */}
          <link
            href="/icons/android-icon-192x192.png"
            rel="icon"
            sizes="192x192"
          />
          <link href="/icons/android-icon-144x144" rel="icon" sizes="144x144" />
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
