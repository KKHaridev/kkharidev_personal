import React from 'react'
import { Container1, Glass } from '../components'
import style from "../styles/About.module.css";
import bg from "../assets/right.svg"
import Image from "next/image";

const experience = [
    {
        firm: "Algata Creative Studio",
        designation: "Front End Developer",
        from: "Aug 2020 - Present"
    }
];
const education = [
    {
        firm: "B.Tech Computer Science",
        designation: "Adi Shankara Institute Of Engineering and Technology",
        from: "2020 - 2024"
    },
    {
        firm: "XII ",
        designation: "Sacred Heart English Medium School,Mookkannur",
        from: "2018 - 2020"
    },
    {
        firm: "X",
        designation: "Sacred Heart English Medium School,Mookkannur",
        from: "2017 - 2018"
    }
];

export default function About() {
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
                              experience.map((item,index) =>
                                  <dl key={index}>
                                      <dt><h3 className={style.h3}>{item.firm}</h3></dt>
                                      <dd><h3 className={style.h3}>{item.designation}</h3></dd>
                                      <dd><p className={style.p}>{item.from}</p></dd>
                                  </dl>
                              )
                          }
                          <h2 className={style.h2}>
                              Education
                          </h2>
                          {
                              education.map((item,index) =>
                                  <dl key={index}>
                                      <dt><h3 className={style.h3}>{item.firm}</h3></dt>
                                      <dd><h3 className={style.h3}>{item.designation}</h3></dd>
                                      <dd><p className={style.p}>{item.from}</p></dd>
                                  </dl>
                              )
                          }
                      </div>
                      <div className={style.right}>
                          <Image src={bg} alt="image" />
                      </div>
                  </div>
              </div>
          </Glass>
      </Container1>
  )
}


