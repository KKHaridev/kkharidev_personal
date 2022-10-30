import React from 'react'
import { Container1, Glass } from '../components'
import style from "../styles/About.module.css";
import bg from "../assets/right.svg"
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api-ap-south-1.hygraph.com/v2/cl9b3c6ik3i1o01ug0c8l5cbv/master',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
    query About {
        experiences {
            firm,
            time,
            designation
        }
        educations {
            institution,
            time,
            program
        }
    }

  `
    });
    return {
        props: {
            education: data.educations,
            experience: data.experiences,
        },
        revalidate: 1,
    }
}


export default function About({ experience, education }) {
    return (
        <Container1>
            <Glass>
                <div className={style.about}>
                    <h1 className={style.h1}>ABOUT</h1>
                    <div className={style.holder}>
                        <div className={style.left}>

                            <h2 className={style.h2}>
                                Experience
                            </h2>
                            {
                                experience?.map((item, index) =>
                                    <dl key={index}>
                                        <dt><h3 className={style.h3}>{item.firm}</h3></dt>
                                        <dd><h3 className={style.h3}>{item.designation}</h3></dd>
                                        <dd><p className={style.p}>{item.time}</p></dd>
                                    </dl>
                                )
                            }
                            <h2 className={style.h2}>
                                Education
                            </h2>
                            {
                                education?.map((item, index) =>
                                    <dl key={index}>
                                        <dt><h3 className={style.h3}>{item.program}</h3></dt>
                                        <dd><h3 className={style.h3}>{item.institution}</h3></dd>
                                        <dd><p className={style.p}>{item.time}</p></dd>
                                    </dl>
                                )
                            }
                        </div>
                        <div className={style.right}>
                            <Image src={bg} placeholder="blur" blurDataURL={bg} alt="image" />
                        </div>
                    </div>
                </div>
            </Glass>
        </Container1>
    )
}


