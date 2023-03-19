// IMPORT STYLE
import './navbar.css';

// IMPORT COMPONENT

import Shop from '../Shop/shop'

// CREATE YOUR COMPONENT

const Navbar = () => {
    return (
    <div className='bodyNavbar'>
        <li className='styleListNavbar'></li>
            <a href='index.js' className='styleAHrefNavbar'>Home</a> 
        <li className='styleListNavbar'></li>
            <a href='index.js' className='styleAHrefNavbar'>Mates</a> 
        <li className='styleListNavbar'></li>
            <a href='index.js' className='styleAHrefNavbar'>Bombillas</a> 
        <li className='styleListNavbar'></li>
            <a href='index.js' className='styleAHrefNavbar'>Termos</a> 
        <li className='styleListNavbar'></li>
            <a href='index.js' className='styleAHrefNavbar'>Otros</a>  
        <li className='styleListNavbar'>  
            <Shop />
        </li>
    </div>
    );
  };

  export default Navbar;

