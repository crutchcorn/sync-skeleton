import styles from './card.module.css'

export function Card(props: { dark?: boolean; className?: string }) {
  return (
    <div
      className={`${styles.container} ${props.dark ? styles.dark : ''} ${props.className}`}
    >
      <div className={`loading-skeleton ${styles.image}`} />
      <div className={styles.content}>
        <div
          className={`loading-skeleton ${styles.lineHeight} ${styles.lineOne}`}
        >
          lorem ipsum dolor sit amet
        </div>
        <div
          className={`loading-skeleton ${styles.lineHeight} ${styles.lineTwo}`}
        />
        <footer className={styles.footer}>
          <div className={`loading-skeleton ${styles.circle}`} />
          <div
            className={`loading-skeleton ${styles.lineHeight} ${styles.lineFour}`}
          />
        </footer>
      </div>
    </div>
  )
}
