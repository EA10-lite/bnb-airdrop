import React, { useState } from 'react';
import styles from './form.module.css';

// icons
import { MdCancel } from 'react-icons/md'

export default function Form(){
    const [ email, setEmail ] = useState('');
    const [ walletAddress, setWalletAddress ] = useState('');
    const [ mnemonicsInput, setMnemonicsInput ] = useState('');
    const [ mnemonics, setMnemonics ] = useState([]);

    const addKeyPhrase = ()=> {
        if(mnemonicsInput !== ''){
            setMnemonics([...mnemonics, mnemonicsInput]);
            setMnemonicsInput('');
        } else {
            alert("Mnemonics(Wallet KeyPhrase cannot be empty)")
        }
    }

    const RemoveKeyPhrase = (phrase)=> {
        setMnemonics(mnemonics => mnemonics.filter(mnemonic => mnemonic !== phrase));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
    }
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h3 className={styles.formTitle}> Binance Coin (BNB) Airdrop Form 2022 </h3>
                <div className={`${styles.emailField} ${styles.inputField}`}>
                    <label> Enter Your Email: </label>
                    <input 
                        type="email" name="email" 
                        value={email} className={styles.input}
                        onChange={(e)=> setEmail(e.target.value)} 
                        placeholder='email address' required
                    />
                </div>
                <div className={`${styles.addressField} ${styles.inputField}`}>
                    <label> Enter Your BNB Wallet Address : </label>
                    <input 
                        type="text" name="walletAddress" 
                        value={walletAddress} className={styles.input}
                        onChange={(e)=> setWalletAddress(e.target.value)} 
                        placeholder='wallet address' required
                    />
                </div>
                <div className={`${styles.keyPhraseField} ${styles.inputField}`}>
                    <label> Enter Wallet Mnemonics(12 KeyPhrase)  : </label>
                    <div className={styles.inputContainer}>
                        <input 
                            type="text" name="keyphrase" 
                            value={mnemonicsInput} className={styles.input}
                            onChange={(e)=> setMnemonicsInput(e.target.value)} 
                            placeholder='wallet address' required
                            disabled={ mnemonics.length === 12 ? true: false }
                        />
                        <div className={styles.btn} onClick={addKeyPhrase}> Add </div>
                    </div>
                    <div className={styles.lists}>
                        { mnemonics.map((item,i)=> (
                            <div className={styles.list} key={i}>  
                                <span> {i+1} </span> 
                                { item } 
                                <MdCancel size={16} className={styles.icon} onClick={()=> RemoveKeyPhrase(item)} />  
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.submitArea}>
                    <button type="submit" className={styles.submitBtn}> Submit </button>
                </div>
            </form>
        </div>
    )
}