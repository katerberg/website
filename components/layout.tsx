import * as React from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import creativeCommonsImage from '../images/cc.png';
import Image from 'next/image';

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
        <link rel="icon" href="https://fav.farm/☕️" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="me" href="https://mastodonapp.uk/@katerberg" />
        <title>Mark Katerberg</title>
      </Head>
      <div className="app">
        <Sidebar />
        <main>
          <div className="view-frame">{children}</div>
          <footer>
            <a
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              rel="license"
            >
              <Image
                alt="Creative Commons License"
                src={creativeCommonsImage}
                style={{ borderWidth: 0 }}
              />
            </a>
            <p>
              {'This work is licensed under a '}
              <a
                href="http://creativecommons.org/licenses/by-sa/4.0/"
                rel="license"
              >
                {
                  'Creative Commons Attribution-ShareAlike 4.0 International License'
                }
              </a>
              {'.'}
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
