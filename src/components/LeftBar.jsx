import styles from './LeftBar.module.css';
import Logo from './Logo';

export default function LeftBar() {
    return <div className={styles.leftBar}>
        <Logo/>
    </div>
}