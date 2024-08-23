import styles from './SpisokUslug.module.css';
import {useState} from 'react'
import spisokUslug from '../dataPrice'
import Card from './Card'


export default function SpisokUslug({onClickUsluaga}) {

    const [diameter, setDiameter] = useState(16);
    const [typeAuto, setTypeAuto] = useState(1);
    const [query, setQuery] = useState('');

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleClearBtn() {
        setQuery('')
    }

    return <Card>
        <div className={styles.bar}>
            <div className={styles.barItem}>🔍 <input value={query}
                                                     onChange={handleQueryChange}
                                                     type='text'
                                                     placeholder='Услуги'
                                                     style={{width: "350px"}}/>
                {query && <span onClick={handleClearBtn}>❌</span>}
            </div>
            <select defaultValue={typeAuto}
                    onChange={(e) => {
                        setTypeAuto(Number(e.target.value));
                    }}
                    className={styles.barItem}>
                <option value={1}>Седан</option>
                <option value={2}>Кроссовер</option>
                <option value={3}>Коммерческий</option>
            </select>

            <select defaultValue={diameter}
                    onChange={(e) => {
                        setDiameter(Number(e.target.value))
                    }}
                    className={styles.barItem}>
                < option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
            </select>

        </div>

        <div className={styles.list}>
            {spisokUslug.map(item => (
                (item.title.toLowerCase().includes(query.toLowerCase()) && item.diameter === diameter && item.typeAuto === typeAuto) ? (
                    <div
                        className={styles.item}
                        key={item.id}
                        onClick={() => {
                            onClickUsluaga(item)
                        }}>
                        <div className={styles.itemTitle}>{item.title}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                    </div>
                ) : null))
            }
        </div>
    </Card>
}