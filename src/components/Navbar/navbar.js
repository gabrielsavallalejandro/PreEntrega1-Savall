// IMPORT "LINK" FROM REACT ROUTER DOM

import { Link } from 'react-router-dom';

// IMPORT STYLE
import './navbar.css';

// IMPORT COMPONENT

import Cart from '../Cart/Cart';

// CREATE YOUR COMPONENT

const Navbar = () => {
    return (
    <nav className='bodyNavbar'>
        <Link className='styleListNavbar'to="/">Home</Link>
        <Link className='styleListNavbar'to="/shop">Shop</Link>
        <Link className='styleListNavbar'to="/contact">Contact</Link>
        <li className='styleShopIcon'>  
            <Cart />
        </li>
    </nav>
    );
  };

  export default Navbar;

