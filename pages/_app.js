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
    <script
			defer
			src="https://umami.algata.in/script.js"
			data-website-id="e4fc31b6-899a-4560-a495-95e20e052f6f"
			data-domains="kkharidev.algata.in"
		></script>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
