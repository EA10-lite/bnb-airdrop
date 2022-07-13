import styles from './stats.module.css';
import logo from '../../assets/images/bnb.webp';

import { market } from '../../data/data';

// icons 
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

export default function Stats(){
    const formater = new Intl.NumberFormat('en');
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt='' className={styles.img} />
                <div className={styles.stack}>
                    <h5> BNB </h5>
                    <h6>  price statistics </h6>
                </div>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <h5 className={styles.title}> Price </h5>
                    <h4 className={styles.value}> $ { market[0].market_data.current_price.usd } </h4>
                </div>
                <div className={styles.stat}>
                    <h5 className={styles.title}> High 24h </h5>
                    <h4 className={styles.value}> 
                        <span style={{color:"#16c784"}}>
                            <RiArrowUpSFill size={18}/> 
                            { market[0].market_data.high_24h.usd } 
                        </span>
                    </h4>
                </div>
                <div className={styles.stat}>
                    <h5 className={styles.title}> Low 24h </h5>
                    <h4 className={styles.value}>
                        <span style={{color: "#ea3943"}}>
                            <RiArrowDownSFill size={18} />
                            { market[0].market_data.low_24h.usd } 
                        </span>
                    </h4>
                </div>
                <div className={styles.stat}>
                    <h5 className={styles.title}> 24H % </h5>
                    <h4 className={styles.value}> 
                        <span style={{
                            color: `${market[0].market_data.price_change_percentage_24h}` > 0 ? "#16c784" : "#ea3943" 
                        }}> {
                            market[0].market_data.price_change_percentage_24h > 0 ? <RiArrowUpSFill size={18}/> : <RiArrowDownSFill size={18} />
                        } 
                        { market[0].market_data.price_change_percentage_24h } 
                        </span>
                    </h4>
                </div>
                <div className={styles.stat}>
                    <h5 className={styles.title}> Market Cap </h5>
                    <h4 className={styles.value}> ${ formater.format(market[0].market_data.market_cap.usd) } </h4>
                </div>
                <div className={styles.stat}>
                    <h5 className={styles.title}> Market Cap Rank </h5>
                    <h4 className={styles.value}> #{ market[0].market_data.market_cap_rank } </h4>
                </div>
                <div className={`${styles.stat} ${styles.last}`}>
                    <h5 className={styles.title}> Volume </h5>
                    <h4 className={styles.value}> $ { formater.format(market[0].market_data.total_volume.usd) }  </h4>
                </div>
            </div>
        </div>
    )
}