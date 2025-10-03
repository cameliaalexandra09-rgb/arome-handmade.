    import React, {useState} from 'react';
    export default function Contact({lang='ro'}){
  const [sent, setSent] = useState(false);
  const handleSubmit = (e)=>{ e.preventDefault(); setSent(true); };
  const email = "cameliaalexandra09@gmail.com";
  return (
    <section>
      <h2>{lang==='ro'?'Contact':'Contact'}</h2>
      <p>{lang==='ro'?'Ai întrebări sau vrei să comanzi produse personalizate? Ne poți scrie oricând.':'Have questions or want custom orders? You can write to us anytime.'}</p>
      <div style={display:'grid',gridTemplateColumns:'1fr',gap:12,maxWidth:600}>
        <form onSubmit={handleSubmit} className="card">
          <label>Nume</label><input name="name" required />
          <label>Email</label><input name="email" type="email" required />
          <label>Mesaj</label><textarea name="message" required></textarea>
          <div style={marginTop:8}><button className="btn" type="submit">{lang==='ro'?'Trimite':'Send'}</button></div>
        </form>
        <aside className="card">
          <h4>{lang==='ro'?'Contact':'Contact'}</h4>
          <p>email: <a href="mailto:cameliaalexandra09@gmail.com">cameliaalexandra09@gmail.com</a></p>
        </aside>
      </div>
      {sent && <p style={color:'green',marginTop:12}>{lang==='ro'?'Mesaj trimis!':'Message sent!'}</p>}
    </section>
  )
}
