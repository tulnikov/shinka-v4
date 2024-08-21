import styles from './Menu.module.css';

function Menu() {
    return <menu className={styles.menu}>
        <li>Шиномонтаж</li>
        <li>Сезонная переобувка</li>
        <li>Клиенты</li>
        <li>Хранение колес</li>
        <li>Сотрудники</li>
        <li>График смен</li>
        <li>Касса</li>
        <li>Расходы</li>
    </menu>
}

export default Menu