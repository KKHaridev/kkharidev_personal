import style from "../styles/Container.module.css";

export const Container = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export const Container1 = ({ children }) => {
    return (
        <div className={style.containerBig}>
            {children}
        </div>
    )
}