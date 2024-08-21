import styles from './Main.module.css';

function Main() {
    return <div className={styles.main}>
        <div className={styles.pageTitle}>Шиномонтаж</div>
        <div>
            <div>left bar</div>
            <div>right bar</div>
        </div>
    </div>
}

export default Main;