import styles from './table.module.css';

import { data } from '../../data/data';

// icons
import { MdPending , MdVerifiedUser, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { TiArrowUnsorted } from 'react-icons/ti';

export default function Table(){
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableHeadRow}>
                        <th className={styles.th}> Email Address </th>
                        <th className={styles.th}> BNB Wallet Address</th>
                        <th className={`${styles.th} ${styles.center}`}> Airdrop status </th>
                        <th className={styles.th}> 
                            <span>Amount</span> 
                        </th>
                        <th className={styles.th}> <span>Date</span> </th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    { data.map(item=> (
                        <tr key={item.id} className={styles.tableBodyRow}>
                            <td className={styles.td}> { item.email } </td>
                            <td className={`${styles.td} ${styles.address}`}> { item.address } </td>
                            <td className={`${styles.td} ${styles.center} ${styles.flex}`}> 
                                <div className={styles.status}>{ item.status }</div> 
                                { item.status === "Pending" ? <MdPending size={20} color="grey" /> : <MdVerifiedUser size={18} color="#16c784" /> }
                            </td>
                            <td className={`${styles.td} ${styles.numbers}`}> { item.value } { item.value && <span> bnb </span> }  </td>
                            <td className={`${styles.td} ${styles.date}`}> { item.date } </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}