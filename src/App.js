// REACT ROUTER DOM

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLE COMPONENTS

import "./App.css";
import "./components/Header/header.css";

// IMPORT PAGES

import Home from "./pages/Home/Home";
import News from "./pages/News/news";
import ConfirmShopCart from "./pages/ConfirmShopCart/confirmShopCart";
import CategoriesItem from "./pages/CategoriesItems/CategoriesItems";

// FUNCTIONAL COMPONENTS

import Header from "./components/Header/header.js";
import Navbar from "./components/Navbar/navbar";
import ItemDetail from "./components/ItemDetail/itemDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

// IMPORT CONTEXT
import { CartProvider } from "./context/CartContext";


// DOM

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header className="resetcss" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/News" element={<News />}></Route>
            <Route path="/item-detail/:id" element={<ItemDetail />}></Route>
            <Route
              path="/item-categorie/:categorie"
              element={<CategoriesItem />}
            ></Route>
            <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
