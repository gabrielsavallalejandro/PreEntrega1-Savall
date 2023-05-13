import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';

// IMPORT CONTEXT

import { CartContext } from '../../context/CartContext';


const Cart = () => {

  // Trae el itemCart creado en el contexto para poder usarlo.

  const {itemCart} = useContext (CartContext);
  console.log(itemCart);
    
  return (
    <>
      <ShoppingCartIcon />

      {itemCart.map(data =>{
        return(
          <span>{[data].length}</span>
        )
      })}
    </>
  );
}

export default Cart
