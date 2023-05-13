// IMPORT "LINK" FROM REACT ROUTER DOM

import { Link } from 'react-router-dom';

// IMPORT STYLE
import './navbar.css';

// IMPORT COMPONENT

import Cart from '../Cart/Cart';
import CategoriesItem from '../Categories/Categories';
import { ShoppingCart } from '@mui/icons-material';

// CREATE YOUR COMPONENT

const Navbar = () => {
    return (
    <nav className='bodyNavbar'>
        <Link className='StyleListNavbar'to="/item-categorie/:categorie"><CategoriesItem/></Link>
        <Link className='styleListNavbar'to="/News">Novedades</Link>
        <Link className='styleShopIcon' style={{color:'white', textDecoration:'none'}} to="/ShoppingCart"> <Cart/></Link>  
    </nav>
    );
  };

export default Navbar;

