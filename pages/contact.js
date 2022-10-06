import React from 'react'
import { Container1, Glass } from '../components'
import style from "../styles/Contact.module.css"
import bg from "../assets/Contact.svg"
import Image from "next/image";
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillGitlab, AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"


export default function Contact() {
    return (
        <Container1>
            <Glass>
                <div className={style.about}>
                    <h1 className={style.h1}>CONTACT</h1>
                    <div className={style.holder}>
                        <form className={style.left}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' />
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Email' />
                            <label htmlFor="">Message</label>
                            <textarea rows={4} defaultValue="hello"></textarea>
                            <input type="submit" value="Send" />
                        </form>
                        <div className={style.right}>
                            <Image src={bg} alt="image" />
                        </div>
                    </div>
                    <div className={style.social}>
                        <a href="https://github.com/KKHaridev" target="_blank"><AiFillGithub /></a>
                        <a href="https://www.instagram.com/kkharidev178" target="_blank"><AiFillInstagram /></a>
                        <a href="http://" target="_blank"><FaLinkedin /></a>
                    </div>
                </div>
            </Glass>
        </Container1>
    )
}