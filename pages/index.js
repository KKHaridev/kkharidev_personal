import Head from 'next/head'
import Image from 'next/image'
import style from "../styles/Hero.module.css";
import { Container1 } from '../components'



export default function Home() {
  return (<>
    

    <Container1>
      <div className={style.hero}>
        <h1 className={style.h1}>K K HARIDEV</h1>
        <h2 className={style.h2}>Front End Developer</h2>
        <p className={style.p}>A young enthusiast pursuing B.Tech in Computer Science and Engineering.</p>
      </div>
    </Container1 >

  </>






  )
}
