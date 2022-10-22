import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

type Props = {};

export default function _document({}: Props) {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            if(navigator.userAgent.indexOf("Chrome-Lighthouse") == -1) { 

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PHZ9GGG');
               };
  `,
          }}
        />
      </Head>
      <body id="home">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
