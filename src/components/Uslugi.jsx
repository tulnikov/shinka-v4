import styles from "./Uslugi.module.css";
import Card from "./Card";
import {useState} from "react";

export default function Uslugi({uslugi, onDeleteUsluga}) {

    let totalPrice = 0



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
                onDeleteUsluga={onDeleteUsluga}

            />
        ))}
        <span style={{color: "green"}}>🤑 Total price: {0}</span>
    </Card>
}

function Usluga({item, onDeleteUsluga}) {
    const [value, setValue] = useState(1);

    const [itemTotal, setItemTotal] = useState(item.price);

    function handleChangeQty(e) {
        setValue(e.target.value)
        setItemTotal(e.target.value * item.price);

    }


    return <div className={styles.item}>
        <span className={styles.title}>{item.title}</span>
        <span>
            <input type='number'
                   min={1} value={value}
                   onChange={handleChangeQty}
                   className={styles.inputQty}
            /></span>
        <span>{itemTotal}</span>
        <span
            className={styles.closeBtn}
            onClick={() => onDeleteUsluga(item)}>❌</span>
    </div>
}