import React from 'react'
import { Card1, Card2, Container1, Glass } from '../components'
import bg from "../assets/site.png"

const works = [
    {
        imgUrl: bg,
        company: "CMC1",
        link: "cryptomalluclub.com",
        status: "2019 - Present"
    },
    {
        imgUrl: bg,
        company: "CMC2",
        link: "cryptomalluclub.com",
        status: "2019 - Present"

    },
    {
        imgUrl: bg,
        company: "CMC3",
        link: "cryptomalluclub.com",
        status: "2019 - Present"

    },
]

export default function Works() {
    return (
        <Container1>
            <Glass>
                
                {works.map((item,index)=>{
                    const url=`https://${item.link}`
                    return(
                        index % 2 == 0 ?

                            <a href={url} target="blank" key={index}>
                                <Card1 imgUrl={item.imgUrl} company={item.company} link={url} status={item.status} />
                            </a>
                            :
                            <a href={url} target="blank" key={index}>
                                <Card2 imgUrl={item.imgUrl} company={item.company} link={url} status={item.status} />
                            </a>
                    )
                }
                )}
            </Glass>
        </Container1>
    )
}
