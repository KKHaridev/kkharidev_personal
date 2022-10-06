import style from "../styles/Card.module.css";
import Image from "next/image";

export const Card1 = ({ imgUrl, company, link, status }) => {
    return (
        <div className={style.card}>
            <div className={style.left}>
                <Image src={imgUrl} alt="" />
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
        <div className={style.card2}>
            <div className={style.left}>
                <Image src={imgUrl} alt="" />
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