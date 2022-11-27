import * as React from 'react';
import Head from 'next/head';

type LayoutProperties = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProperties) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="me" href="https://mastodonapp.uk/@katerberg" />
        <title>Mark Katerberg</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
