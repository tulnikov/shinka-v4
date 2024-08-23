import styles from './TitlePage.module.css';

export default function TitlePage({children}) {
    return <div className={styles.titlePage}>
        {children}
    </div>
}