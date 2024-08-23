import styles from './RightBar.module.css';
import TopBar from './TopBar';
import TitlePage from './TitlePage';
import Card from './Card';
import SpisokUslug from './SpisokUslug';


export default function RightBar() {
    return <div className={styles.rightBar}>
        <TopBar/>
        <TitlePage>Шиномонтаж</TitlePage>
        <div className={styles.cards}>
            <Card>
                <SpisokUslug/>
            </Card>
            <Card>Card-2</Card>
            <Card>Card-3</Card>
            <Card>Card-4</Card>

        </div>

    </div>
}