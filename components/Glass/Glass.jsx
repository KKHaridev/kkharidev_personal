import style from "./Glass.module.css";

export const Glass = ({ children }) => {
    return (
        <div className={style.glass}>
            {children}
        </div>
    )
}