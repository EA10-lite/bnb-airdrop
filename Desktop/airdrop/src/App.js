import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import logo from './assets/images/bnb.webp'
import Table from './components/table/table';
import Stats from './components/stats/stats';
import Coin from './components/coin/coin';
import Form from './components/form/form';

function App() {

  const sendEmail = (e)=> {
    e.preventDefault();

  }

  const [ data, setData ] = useState({});
  useEffect(()=> {
    // const abortConst = new AbortController()
    // fetch("https://api.coingecko.com/api/v3/coins/binancecoin?tickers=false&community_data=false&developer_data=false&sparkline=false",{
    //   method:"GET",
    //   headers:{
    //     "content-type":"application/json",
    //   }
    // },{ signal : abortConst.signal })
    // .then(res=> {
    //   return res.json();
    // })
    // .then(res=> {
    //   setData(res);
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log("ERROR")
    // })

    // return abortConst.abort();
  },[])
  
  return (
      <div className="container">
        <div className="stats">
          <Stats />
        </div>
        <div className="formContainer">
          <Form />
        </div>
        <div className="data">
          <Coin />
        </div>
        <div className="transaction">
          <h4> Most Recent Transactions </h4>
          <Table />
        </div>
      </div>
  );
}

export default App;
