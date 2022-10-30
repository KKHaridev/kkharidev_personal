import style from "../styles/Card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export const Card1 = ({ imgUrl, company, link, status }) => {
    const router = useRouter();
    return (
        <div className={style.card} onClick={() => window.open(link, "_blank")}>
            <div className={style.left}>
                <Image src={imgUrl} placeholder="blur" blurDataURL={imgUrl} alt="" layout="fill" />
            </div>
            <div className={style.right}>
                <div className={style.content}>
                    <h2>{company}</h2>
                    <a href={link}>{link}</a>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export const Card2 = ({ imgUrl, company, link, status }) => {
    return (
        <div className={style.card2} onClick={() => window.open(link, "_blank") }>
            <div className={style.left}>
                <Image src={imgUrl} placeholder="blur" blurDataURL={imgUrl} alt="" layout="fill" />
            </div>
            <div className={style.right}>
                <div className={style.content}>
                    <h2>{company}</h2>
                    <a href={link}>{link}</a>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}