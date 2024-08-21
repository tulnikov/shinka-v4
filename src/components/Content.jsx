import styles from './Content.module.css';
import Menu from './Menu';
import Main from './Main';

function Content() {
    return <div className={styles.content}>
        <Menu/>
        <Main/>
    </div>
}

export default Content;