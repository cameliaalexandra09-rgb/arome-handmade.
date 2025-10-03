import React from 'react';
import { Link } from 'react-router-dom';
export default function Success({lang='ro'}){
  return (
    <section style={{textAlign:'center',padding:40}}>
      <img src="/images/success.png" alt="success" style={{width:160,marginBottom:20}}/>
      <h1>{lang==='ro'?'✅ Comanda ta a fost plasată cu succes!':'✅ Your order was successful!'}</h1>
      <p>{lang==='ro'?'Îți mulțumim! Vei primi un email de confirmare.':'Thank you! You will receive a confirmation email.'}</p>
      <Link to="/" className="btn" style={{marginTop:16}}>{lang==='ro'?'Înapoi la magazin':'Back to shop'}</Link>
    </section>
  )
}
