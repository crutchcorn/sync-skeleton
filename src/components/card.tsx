import { useSkeleton } from "../lib/react";
import styles from "./card.module.css";

export function Card() {
    const image = useSkeleton();
    const lineOne = useSkeleton();
    const lineTwo = useSkeleton();
    const lineThree = useSkeleton();
    const lineFour = useSkeleton();

    return <div className={styles.container}>
        <div ref={image} className={`loading-skeleton ${styles.image}`} />
        <div className={styles.content}>
            <div ref={lineOne} className={`loading-skeleton ${styles.lineHeight} ${styles.lineOne}`} />
            <div ref={lineTwo} className={`loading-skeleton ${styles.lineHeight} ${styles.lineTwo}`} />
            <div ref={lineThree} className={`loading-skeleton ${styles.lineHeight} ${styles.lineThree}`} />
            <div ref={lineFour} className={`loading-skeleton ${styles.lineHeight} ${styles.lineFour}`} />
        </div>
    </div>
}