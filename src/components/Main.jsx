import styles from './Main.module.css';

function Main() {
    return <div className={styles.main}>
        <span className={styles.pageTitle}>Шиномонтаж</span>
        <div className={styles.cards}>
            <div className={styles.card}>left bar</div>
            <div className={styles.card}>right bar</div>
        </div>
    </div>
}

export default Main;