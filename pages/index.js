import Head from 'next/head'
import Image from 'next/image'
import style from "../styles/Hero.module.css";
import { Container1 } from '../components'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api-ap-south-1.hygraph.com/v2/cl9b3c6ik3i1o01ug0c8l5cbv/master',
    cache: new InMemoryCache()
  });
  const { data } = await client.query({
    query: gql`
    query Homes {
  homes {
    createdAt
    title
    designation
    description
  }
}
  `
  });
  return {
    props: {
      homeData: data.homes
    },
    revalidate: 10,
  }
}
export default function Home({homeData}) {
  return (<>
    

    <Container1>
      <div className={style.hero}>
        <h1 className={style.h1}>{homeData[0].title}</h1>
        <h2 className={style.h2}>{homeData[0].designation}</h2>
        <p className={style.p}>{homeData[0].description}</p>
      </div>
    </Container1 >

  </>






  )
}
