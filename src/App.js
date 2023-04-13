// REACT ROUTER DOM

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


// STYLE COMPONENTS

import './App.css';
import './components/Header/header.css';

// IMPORT PAGES

import Contact from "./pages/Contact/contact";
import Shop from "./pages/Shop/shop";
import Home from "./pages/Home/home";
import ProductDetail from "./pages/ProductDetail/productDetail";

// FUNCTIONAL COMPONENTS

import Header from './components/Header/header.js';
import Navbar from './components/Navbar/navbar';
// DOM

const App = () => {
  return (    
    <Router>
      <div>
        <Header className='resetcss' />
        <Navbar />
          <Routes>
            <Route path="/"element={<Home/>}></Route>
            <Route path="/contact"element={<Contact/>}></Route>
            <Route path="/shop"element={<Shop/>}></Route>
            <Route path="/product-detail/:id" element={<ProductDetail/>}></Route>
          </Routes>
        </div>
    </Router>
    
  );
};

export default App
