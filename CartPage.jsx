import React from 'react';
import { useCart } from '../context/CartContext';
export default function CartPage({lang='ro'}){
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);
  const handleCheckout = async ()=>{
    const res = await fetch('/api/checkout', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ items: cart })
    });
    const data = await res.json();
    if(data.url) window.location.href = data.url;
  };
  return (
    <section>
      <h2>{lang==='ro'?'Coșul tău':'Your cart'}</h2>
      {cart.length===0 ? <p>{lang==='ro'?'Coș gol':'Cart is empty'}</p> : (
        <div>
          {cart.map(item=>(
            <div key={item.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:10,borderBottom:'1px solid #eee'}}>
              <div style={{display:'flex',gap:10,alignItems:'center'}}><img src={item.image} style={{width:64,height:64,objectFit:'cover',borderRadius:8}}/><div><strong>{item.name}</strong><div>{item.qty} x {item.price} RON</div></div></div>
              <div><button onClick={()=>removeFromCart(item.id)} style={{background:'transparent',border:'none',color:'#c00'}}>{lang==='ro'?'Șterge':'Remove'}</button></div>
            </div>
          ))}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}><strong>Total: {total} RON</strong><div style={{display:'flex',gap:8}}><button onClick={()=>clearCart()} className="btn" style={{background:'#999'}}>{lang==='ro'?'Goleste':'Clear'}</button><button onClick={handleCheckout} className="btn">{lang==='ro'?'Finalizează comanda':'Checkout'}</button></div></div>
        </div>
      )}
    </section>
  )
}
