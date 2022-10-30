import style from "../styles/Navbar.module.css";
import { useState } from "react";
import { Container } from ".";
import Link from "next/link";
import { useRouter } from "next/router";


export const Navbar = ({ }) => {
    const [nav, setNav] = useState(false)
    const router = useRouter();
    return (
        <header className={style.navbar}>
            <Container>
                <nav>
                    <h1><Link href="/">HARIDEV</Link></h1>
                    <ul className={nav ? style.open : style.close} onMouseLeave={() => setNav(false)}>
                        <li className={router.asPath == "/" ? style.active : ""} onClick={() => setNav(!nav)}>
                            <Link href="/">HOME</Link>
                        </li>
                        <li className={router.asPath == "/about" ? style.active : ""} onClick={() => setNav(!nav)}>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li className={router.asPath == "/works" ? style.active : ""} onClick={() => setNav(!nav)}>
                            <Link href="/works">WORKS</Link>
                        </li>
                        <li className={router.asPath == "/contact" ? style.active : ""} onClick={() => setNav(!nav)}>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                    <div className={style.hamburger} onClick={() => { setNav(!nav) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

