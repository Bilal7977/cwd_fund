import React from 'react'
// import { useState, useEffect } from 'react';

const Transaction = ()=> {

    const form = new FormData();
// form.append('allowPlatformToOperateToken', 'true');
form.append('chain', 'goerli');
form.append('walletAddress', process.env.WALLET_ADDRESS);

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    APIKey: process.env.API_KEY,
  },
  
};

options.body = form;

fetch('https://api.verbwire.com/v1/nft/data/transactions?chain=goerli', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
   
    // const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');

    // sdk.auth(process.env.API_KEY);
    // sdk.get('/nft/data/transactions',
    //     {
    //         walletAddress: process.env.WALLET_ADDRESS,
    //         chain: 'goerli'
    //     })
    //     .then(res => console.log(`${JSON.stringify(res)}`))
    //     .catch(err => console.error(err));
    
    async function sendTransaction(){
   let   param = [{
      
        from: "0x7a9916Dbdf2E17C36FB730553D5299C0671E3431",
        to: "0x29c3E0628a41A2D211BADa1F0dD25dE791193c96",
        gas: Number(21000).toString(16),
        gasPrice:Number(250000).toString(16),
        value: Number(1000000).toString(16),
        
      
     }]
     let result =   await window.etherium.request({
       
        method:"eth_sendTransaction",
        param
      }).catch((err)=>{
        console.log(err)
      })
    }
    return (
        <div>Transaction
        <div>
      <button onClick={()=>sendTransaction()}>Send Transaction</button>
      </div>
        </div>
    )
}

export default Transaction;