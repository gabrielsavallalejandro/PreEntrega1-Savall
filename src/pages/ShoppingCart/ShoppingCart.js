import React from 'react'
import { CartContext } from '../../context/CartContext'

//Import Component

import ConfirmShop from '../../components/ConfirmShop/confirmShop'
import ItemCart from '../../components/ItemCart/ItemCart'


const ShoppingCart = () => {
  return (
  <>
    <ItemCart/>
    <ConfirmShop/>
  </>

)
}

export default ShoppingCart;
