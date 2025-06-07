
import './App.css';
import React from 'react'
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
        <Route path='/Writing Instruments' element={<Shopcategory category="Writing Instruments"/>}/>
        <Route path='/Paper Products' element={<Shopcategory category="Paper Products"/>}/>
        <Route path='/Organizational Supplies' element={<Shopcategory category="Organizational Supplies"/>}/>
        <Route path='/Art Supplies' element={<Shopcategory category="Art Supplies"/>}/>
        <Route path='/Adhesives' element={<Shopcategory category="Adhesives"/>}/>
        <Route path='/Desk Accessories' element={<Shopcategory category="Desk Accessories"/>}/>
        <Route path='/Miscellaneous' element={<Shopcategory category="Miscellaneous"/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
       
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/> 
    </Routes>
    <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
