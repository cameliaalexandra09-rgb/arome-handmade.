import React from 'react';
export default function About({lang='ro'}){
  const ro = `Arome Handmade a luat naștere din pasiunea pentru natură și lucruri simple. Fiecare parfum, săpun sau lumânare este realizat manual, cu grijă, din ingrediente naturale, pentru a aduce în casa ta frumusețea autentică a lucrurilor făcute cu suflet.`;
  const en = `Arome Handmade started from a passion for nature and simple things. Every perfume, soap or candle is handmade with care, using natural ingredients, to bring the authentic beauty of handcrafted goods into your home.`;
  return <section><h2>{lang==='ro'?'Despre noi':'About us'}</h2><p>{lang==='ro'?ro:en}</p></section>
}
