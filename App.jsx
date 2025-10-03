import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Success from './pages/Success';
import { CartProvider } from './context/CartContext';
export default function App(){
  const [lang, setLang] = useState('ro');
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="container header">
          <div className="logo">
            <img src="/assets/logo.svg" alt="Arome Handmade" width="220"/>
          </div>
          <nav className="nav">
            <Link to="/">Acasă</Link>
            <Link to="/produse">Produse</Link>
            <Link to="/despre">Despre noi</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Coș</Link>
            <div style={{width:8}}/>
            <div className="lang" onClick={()=>setLang(lang==='ro'?'en':'ro')}>{lang==='ro'?'RO':'EN'}</div>
          </nav>
        </header>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home lang={lang}/>}/>
            <Route path="/produse" element={<Products lang={lang}/>}/>
            <Route path="/produs/:id" element={<ProductPage lang={lang}/>}/>
            <Route path="/despre" element={<About lang={lang}/>}/>
            <Route path="/contact" element={<Contact lang={lang}/>}/>
            <Route path="/cart" element={<CartPage lang={lang}/>}/>
            <Route path="/success" element={<Success lang={lang}/>}/>
          </Routes>
        </main>
        <footer className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>© Arome Handmade</div>
            <div>Contact: cameliaalexandra09@gmail.com</div>
          </div>
        </footer>
      </BrowserRouter>
    </CartProvider>
  )
}
