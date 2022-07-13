import { useEffect } from 'react';
import styles from './coin.module.css';

export default function(){
    const description = "Binance Coin is the cryptocurrency of the <a href=\"https://www.coingecko.com/en/exchanges/binance\">Binance</a> platform. It is a trading platform exclusively for cryptocurrencies. The name \"Binance\" is a combination of binary and finance.\r\n\r\nThus, the startup name shows that only cryptocurrencies can be traded against each other. It is not possible to trade crypto currencies against Fiat. The platform achieved an enormous success within a very short time and is focused on worldwide market with Malta headquarters. The cryptocurrency currently has a daily trading volume of 1.5 billion - 2 billion US dollars and is still increasing.\r\n\r\nIn total, there will only be 200 million BNBs. Binance uses the <a href=\"https://www.coingecko.com/en/coins/all?asset_platform_id=279\">ERC20 token standard</a> from <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> and has distributed it as follow: 50% sold on ICO, 40% to the team and 10% to Angel investors. The coin can be used to pay fees on Binance. These include trading fees, transaction fees, listing fees and others. Binance gives you a huge discount when fees are paid in BNB. \r\n\r\nThe schedule of BNB fees discount is as follow: In the first year, 50% discount on all fees, second year 25% discount, third year 12.5% discount, fourth year 6.75 % discount, and from the fifth year onwards there is no discount. This structure is used to incentivize users to buy BNB and do trades within Binance.\r\n\r\nBinance announced in a buyback plan that it would buy back up to 100 million BNB in Q1 2018. The coins are then burned. This means that they are devaluated to increase the value of the remaining coins. This benefits investors. In the future, the cryptocurrency will remain an asset on the trading platform and will be used as gas.\r\n\r\nOther tokens that are issued by exchanges include <a href=\"https://www.coingecko.com/en/coins/bibox-token\">Bibox Token</a>, <a href=\"https://www.coingecko.com/en/coins/okb\">OKB</a>, <a href=\"https://www.coingecko.com/en/coins/huobi-token\">Huobi Token</a>, and more.".split(". ")

    useEffect(()=>{
        const container = document.querySelector("#content");
        container.innerHTML = description
    },[])
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}> What is Binance Coin (BNB) ?</h1>
            <div id="content" className={styles.content}></div>
        </div>
    )
}