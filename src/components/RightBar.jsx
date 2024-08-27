import styles from './RightBar.module.css';
import TopBar from './TopBar';
import TitlePage from './TitlePage';
import SpisokUslug from './SpisokUslug';
import Uslugi from './Uslugi';
import ToPay from "./ToPay";
import {useState} from "react";


export default function RightBar() {


    const [uslugi, setUslugi] = useState([]);

    function handleClickUsluga(item) {
        setUslugi(uslugi => [...uslugi, item]);
    }

    function handleDeleteUsluga(item) {
        setUslugi(uslugi.filter(usluga => usluga.id !== item.id))
    }

    let totalPrice = uslugi.reduce((acc, cur) => acc + cur.price, 0);



    return <div className={styles.rightBar}>
        <TopBar/>
        <TitlePage>Шиномонтаж</TitlePage>
        <div className={styles.cards}>
            <SpisokUslug onClickUsluaga={handleClickUsluga}/>
            <Uslugi uslugi={uslugi} onDeleteUsluga={handleDeleteUsluga}/>
            <ToPay totalPrice={totalPrice}/>
        </div>

    </div>
}