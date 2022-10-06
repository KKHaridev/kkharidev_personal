import { Navbar } from "./";
import style from "../styles/Layout.module.css";
import style1 from "../styles/Home.module.css"


export const Layout = ({ children }) => {
    return (
        <div className={style.layout}>
            <Navbar />
            <div className={style.circle1}></div>
            <div className={style.circle2}></div>
            <div className={style.circle3}></div>
            <div className={style.circle4}></div>
            <div className={style1.home}>{children}</div>
            
        </div>
    )
}