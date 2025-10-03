import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const items = {
  1:{id:1, name:{ro:'Parfum de Lavandă',en:'Lavender Perfume'}, price:85, image:'/images/parfum_lavanda.jpg', desc:{ro:'Note proaspete de lavandă.',en:'Fresh lavender notes.'}},
  2:{id:2, name:{ro:'Săpun cu Miere și Ovăz',en:'Honey & Oat Soap'}, price:25, image:'/images/sapun_miere.jpg', desc:{ro:'Săpun natural, blând cu pielea.',en:'Natural soap, gentle on skin.'}},
  3:{id:3, name:{ro:'Lumânare din Soia cu Vanilie',en:'Vanilla Soy Candle'}, price:45, image:'/images/lumanare_vanilie.jpg', desc:{ro:'Aromă caldă de vanilie.',en:'Warm vanilla scent.'}},
};
export default function ProductPage({lang='ro'}){
  const { id } = useParams();
  const product = items[id];
  const { addToCart } = useCart();
  if(!product) return <div>Produs inexistent</div>;
  return (
    <section style={{display:'grid',gridTemplateColumns:'1fr',gap:16}}>
      <img src={product.image} alt={product.name[lang]} style={{width:'100%',borderRadius:8}}/>
      <h1>{product.name[lang]}</h1>
      <p>{product.desc[lang]}</p>
      <p style={{fontWeight:700}}>{product.price} RON</p>
      <button className="btn" onClick={()=>addToCart({id:product.id,name:product.name[lang],price:product.price,image:product.image})}>{lang==='ro'?'Adaugă în coș':'Add to cart'}</button>
    </section>
  )
}
