import '../styles/globals.css'
import { Layout } from '../components'
import { useState,useEffect } from 'react';
import Head from 'next/head';

const MyApp=({ Component, pageProps })=> {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
    return <>
      <Head>
        <title>K K HARIDEV</title>
        <meta name="description" content="Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {domLoaded && (<Component {...pageProps} />)}
      </Layout>
    </>
}

export default MyApp
