import React from 'react'
import { Card1, Card2, Container1, Glass } from '../components'
import bg from "../assets/site.png"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api-ap-south-1.hygraph.com/v2/cl9b3c6ik3i1o01ug0c8l5cbv/master',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
    query Projects {
  projects (orderBy: createdAt_DESC) {
    createdAt
    id
    link
    time
    title
    img {
      url
    }
  }
}
  `
    });
    return {
        props: {
            works:  data.projects
        },
        revalidate: 10,
    }
}

export default function Works({ works }) {
    return (
        <Container1>
            <Glass>

                {works.map((item, index) => {
                    return (
                        index % 2 == 0 ?


                                    <Card1 imgUrl={item.img.url} company={item.title} link={item.link} status={item.time} />
                              
                            :

                                    <Card2 imgUrl={item.img.url} company={item.title} link={item.link} status={item.time} />
                             
                    )
                }
                )}
            </Glass>
        </Container1>
    )
}

