import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Home from '../MainComponent/Home'
import About from '../MainComponent/About'
import Contact from '../MainComponent/Contact'
import Recipes from '../MainComponent/Recipes'
import Spices from '../MainComponent/Spices'
import MasalaMixes from '../MainComponent/MasalaMixes'
import SpecialtyPacks from '../MainComponent/SpecialtyPacks'
import Cart from '../MainComponent/Cart'
import ProductDetail from '../MainComponent/ProductDetail'
import Login from '../MainComponent/Login'
import Register from '../MainComponent/Register'
import { useAuth } from '../context/AuthContext'

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user, logout } = useAuth();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar cart={cart} user={user} onLogout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/collections/spices" element={<Spices cart={cart} setCart={setCart} onProductSelect={setSelectedProduct} />} />
        <Route path="/collections/masala-mixes" element={<MasalaMixes />} />
        <Route path="/collections/specialty-packs" element={<SpecialtyPacks />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetail product={selectedProduct} onAddToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
