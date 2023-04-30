// REACT ROUTER DOM

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


// STYLE COMPONENTS

import './App.css';
import './components/Header/header.css';

// IMPORT PAGES

import Contact from "./pages/Contact/contact";
import Shop from "./pages/Shop/shop";
import Home from "./pages/Home/home";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import CategoriesItem from "./pages/CategoriesItems/CategoriesItems";

// FUNCTIONAL COMPONENTS

import Header from './components/Header/header.js';
import Navbar from './components/Navbar/navbar';

// IMPORT CONTEXT
import { CartProvider } from "./context/CartContext";
import ItemDetail from "./components/ItemDetail/itemDetail";

// DOM

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header className='resetcss' />
          <Navbar />
            <Routes>
              <Route path="/"element={<Shop/>}></Route>
              <Route path="/contact"element={<Contact/>}></Route>
              <Route path="/home"element={<Home/>}></Route>
              <Route path="/item-detail/:id" element={<ItemDetail/>}></Route>
              <Route path="/item-categorie/:categorie" element={<CategoriesItem/>}/>
              <Route path="/cart" element={<ShoppingCart/>}></Route>
            </Routes>
          </div>
      </Router>
    </CartProvider>

  );
};

export default App
