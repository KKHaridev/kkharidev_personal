import '../styles/globals.css'
import { Layout } from '../components'
import { useState, useEffect } from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {

  return <>
    <Head>
      <title>K K HARIDEV</title>
      <meta name="description" content="Portfolio site" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
