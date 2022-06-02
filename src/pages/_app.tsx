import '../css/main.css';
import type { AppProps } from 'next/app';

function RootApplication({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApplication;
