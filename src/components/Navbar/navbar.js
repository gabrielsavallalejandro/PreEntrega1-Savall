// IMPORT "LINK" FROM REACT ROUTER DOM

import { Link } from 'react-router-dom';

// IMPORT STYLE
import './navbar.css';

// IMPORT COMPONENT

import Cart from '../Cart/Cart';
import CategoriesItem from '../Categories/Categories';

// CREATE YOUR COMPONENT

const Navbar = () => {
    return (
    <nav className='bodyNavbar'>
        <Link className='styleListNavbar'to="/">Shop</Link>
        <Link className='StyleListNavbar'to="/item-categorie/:categorie"><CategoriesItem/></Link>
        <Link className='styleListNavbar'to="/Home">Home</Link>
        <Link className='styleListNavbar'to="/contact">Contact</Link>
        <li className='styleShopIcon'>  
         <Link style={{color:'white', textDecoration:'none'}} to="/cart"> <Cart /></Link>  
        </li>
    </nav>
    );
  };

  export default Navbar;

