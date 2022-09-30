import { Glass } from "../../components";
import style from "./Hero.module.css";

export const Hero = ({}) => {
    return (
        <div className={style.hero}>
            <h1 className={style.h1}>K K HARIDEV</h1>
            <h2 className={style.h2}>Front End Developer</h2>
            <p className={style.p}>A young enthusiast pursuing B.Tech in Computer Science and Engineering.</p>
        </div>
    )
}