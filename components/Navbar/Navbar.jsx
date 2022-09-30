import style from "./Navbar.module.css";
import { useState } from "react";
import { Container } from "../";
import Link from "next/link";

export const Navbar = ({ }) => {
    const [nav, setNav] = useState(false)
    return (
        <header className={style.navbar}>
            <Container>
                <nav>
                    <h1>HARIDEV</h1>
                    <ul className={nav?style.open:style.close} onMouseLeave={()=>setNav(false)}>
                        <li onClick={() => setNav(!nav)}><Link href="/">HOME</Link></li>
                        <li onClick={() => setNav(!nav)}> <Link href="/about">ABOUT</Link> </li>
                        <li onClick={() => setNav(!nav)}><Link href="/works">WORKS</Link></li>
                        <li onClick={() => setNav(!nav)}><Link href="/contact">CONTACT</Link></li>
                    </ul>
                    <div className={style.hamburger} onClick={()=>{setNav(!nav)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </Container>
        </header>
    )
}