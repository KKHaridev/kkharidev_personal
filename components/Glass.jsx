import style from "../styles/Glass.module.css";

export const Glass = ({ children }) => {
    return (
        <div className={style.glass}>
            {children}
        </div>
    )
}