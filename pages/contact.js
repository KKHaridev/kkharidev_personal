import React from 'react'
import { Container1, Glass } from '../components'
import style from "../styles/Contact.module.css"
import bg from "../assets/Contact.svg"
import Image from "next/image";
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillGitlab, AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"


const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
    };
    const google_script_url = "https://script.google.com/macros/s/AKfycbwWsh4fudu3-t0NbP1b7pwX8HnTwjF1snY3b3mE4dYUjE40ynG2VgOLjfa_Bg8hchs/exec";
    console.log(google_script_url);
    const encodedUrl =
        google_script_url +
        Object.keys(formData).reduce(
            (prev, cur) => prev + `${cur}=${formData[cur]}&`,
            "?"
        );

    try {
        await fetch(encodedUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        alert("msg sent");
        e.target.reset();
    } catch (err) {
        alert("Sending failed.");
        window.location.reload();
    }
};

export default function Contact() {
    return (
        <Container1>
            <Glass>
                <div className={style.about}>
                    <h1 className={style.h1}>CONTACT</h1>
                    <div className={style.holder}>
                        <form className={style.left} onSubmit={(e) => {
                            handleSubmit(e);
                            close();
                        }}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' />
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Email' />
                            <label htmlFor="">Message</label>
                            <textarea rows={4} defaultValue=""></textarea>
                            <input type="submit" value="Send" />
                        </form>
                        <div className={style.right}>
                            <Image src={bg} alt="image" />
                        </div>
                    </div>
                    <div className={style.social}>
                        <a href="https://github.com/KKHaridev" target="blank"><AiFillGithub /></a>
                        <a href="https://www.instagram.com/kkharidev178" target="blank"><AiFillInstagram /></a>
                        <a href="https://in.linkedin.com/in/kkharidev" target="blank"><FaLinkedin /></a>
                    </div>
                </div>
            </Glass>
        </Container1>
    )
}