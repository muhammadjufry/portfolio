import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

export default function _document({}: Props) {
  return (
    <Html lang="en">
      <Head />
      <body id="home">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
