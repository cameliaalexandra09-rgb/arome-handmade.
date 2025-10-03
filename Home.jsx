import React from 'react';
import { Link } from 'react-router-dom';
export default function Home({lang='ro'}){
  const title = lang==='ro' ? 'Parfumuri naturale și produse handmade' : 'Natural perfumes & handmade goods';
  const subtitle = lang==='ro' ? 'Arome curate, create manual din ingrediente naturale.' : 'Clean scents, handmade from natural ingredients.';
  return (
    <section className="hero">
      <img src="/images/banner.jpg" alt="banner" style={{width:'100%',borderRadius:12,marginBottom:12}}/>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div style={{marginTop:12}}><Link to="/produse" className="btn">{lang==='ro'?'Vezi produsele':'See products'}</Link></div>
    </section>
  )
}
