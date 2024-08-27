import styles from "./Uslugi.module.css";
import Card from "./Card";
import {useState} from "react";

export default function Uslugi({uslugi, onDeleteUsluga}) {


    return <Card>
        <div className={styles.bar}>
            <span className={styles.title}>Выбранные услуги</span>
            <span>кол.во</span>
            <span>сумма</span>
            <span></span>
        </div>
        {uslugi.map(item => (
            <Usluga
                item={item}
                key={item.id}
                onDeleteUsluga={onDeleteUsluga}/>
        ))}
    </Card>
}

function Usluga({
                    item, onDeleteUsluga
                }) {
    const [value, setValue] = useState(1);


    return <div className={styles.item}>
        <span className={styles.title}>{item.title}</span>
        <span>
            <input type='number'
                   min={1} value={value}
                   onChange={(e) => setValue(e.target.value)}
                   className={styles.inputQty}
            /></span>
        <span>{item.price * value}</span>
        <span
            className={styles.closeBtn}
            onClick={() => onDeleteUsluga(item)}>❌</span>
    </div>
}