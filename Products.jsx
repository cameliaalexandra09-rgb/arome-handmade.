import React from 'react';
import { Link } from 'react-router-dom';
const items = [
  {id:1, name:{ro:'Parfum de Lavandă',en:'Lavender Perfume'}, price:85, image:'/images/parfum_lavanda.jpg', desc:{ro:'Note proaspete de lavandă.',en:'Fresh lavender notes.'}},
  {id:2, name:{ro:'Săpun cu Miere și Ovăz',en:'Honey & Oat Soap'}, price:25, image:'/images/sapun_miere.jpg', desc:{ro:'Săpun natural, blând cu pielea.',en:'Natural soap, gentle on skin.'}},
  {id:3, name:{ro:'Lumânare din Soia cu Vanilie',en:'Vanilla Soy Candle'}, price:45, image:'/images/lumanare_vanilie.jpg', desc:{ro:'Aromă caldă de vanilie.',en:'Warm vanilla scent.'}},
];
export default function Products({lang='ro'}){
  return (
    <section>
      <h2>{lang==='ro'?'Produse populare':'Popular products'}</h2>
      <div className="grid" style={{marginTop:12}}>
        {items.map(i=>(
          <article key={i.id} className="card">
            <img src={i.image} alt={i.name[lang]} style={{width:'100%',height:180,objectFit:'cover',borderRadius:8}}/>
            <h3>{i.name[lang]}</h3>
            <p>{i.desc[lang]}</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <strong>{i.price} RON</strong>
              <div style={{display:'flex',gap:8}}>
                <Link to={'/produs/'+i.id} className="btn">{lang==='ro'?'Detalii':'Details'}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
