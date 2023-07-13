import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MetaTags from '../components/metaTags';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaTags />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  );
}
