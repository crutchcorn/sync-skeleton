import { useSkeleton } from "../lib/skeleton";
import styles from "./card.module.css";

export function Card() {
    const image = useSkeleton();
    const lineOne = useSkeleton();
    const lineTwo = useSkeleton();
    const lineThree = useSkeleton();
    const lineFour = useSkeleton();

    return <div className={styles.container}>
        <div ref={image} className={styles.image} />
        <div className={styles.content}>
            <div ref={lineOne} className={`${styles.lineHeight} ${styles.lineOne}`} />
            <div ref={lineTwo} className={`${styles.lineHeight} ${styles.lineTwo}`} />
            <div ref={lineThree} className={`${styles.lineHeight} ${styles.lineThree}`} />
            <div ref={lineFour} className={`${styles.lineHeight} ${styles.lineFour}`} />
        </div>
    </div>
}