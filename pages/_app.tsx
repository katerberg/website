import Layout from '../components/layout';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script id="moxfield">
        {
          'function moxfieldOnMessage(e){const t=e.data;if("object"==typeof t&&"moxfield"===t.type){const e=document.getElementById(t.id);e&&(e.style.height=t.data+"px")}}function moxfieldOnLoad(e){e.target&&e.target.contentWindow&&e.target.contentWindow.postMessage({type:"moxfield",data:e.target.id},"*")}window.addEventListener("message",moxfieldOnMessage);'
        }
      </Script>
    </Layout>
  );
}
