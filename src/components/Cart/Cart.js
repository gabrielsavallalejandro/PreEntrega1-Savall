import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';

// IMPORT CONTEXT

import { CartContext } from '../../context/CartContext';


const Cart = () => {

  // Trae el itemCart creado en el contexto para poder usarlo.

  const {itemCart} = useContext (CartContext);

  return (
    <div className='styleShop'>
        <ShoppingCartIcon />
        <span>{itemCart.length}</span>
    </div>
  )
}

export default Cart
