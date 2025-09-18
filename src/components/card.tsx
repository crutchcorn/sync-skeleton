import styles from "./card.module.css";

export function Card() {
    return <div className={styles.container}>
        <div className={styles.image}/>
        <div className={styles.content}>
            <div className={`${styles.lineHeight} ${styles.lineOne}`}/>
            <div className={`${styles.lineHeight} ${styles.lineTwo}`}/>
            <div className={`${styles.lineHeight} ${styles.lineThree}`}/>
            <div className={`${styles.lineHeight} ${styles.lineFour}`}/>
        </div>
    </div>
}