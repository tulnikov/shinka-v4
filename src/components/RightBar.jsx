import styles from './RightBar.module.css';
import TopBar from './TopBar';
import TitlePage from './TitlePage';
import Card from './Card';
import SpisokUslug from './SpisokUslug';
import Uslugi from './Uslugi';
import {useState} from "react";


export default function RightBar() {

    const [uslugi, setUslugi] = useState([]);

    function handleClickUsluga(item) {
        setUslugi(uslugi => [...uslugi, item]);
    }


    return <div className={styles.rightBar}>
        <TopBar/>
        <TitlePage>Шиномонтаж</TitlePage>
        <div className={styles.cards}>
            <SpisokUslug onClickUsluaga={handleClickUsluga}/>
            <Uslugi uslugi={uslugi}/>
        </div>

    </div>
}