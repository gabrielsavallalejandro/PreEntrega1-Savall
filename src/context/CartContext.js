import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [itemCart, setItemCart] = useState([])

    console.log(itemCart);

  return(
    <CartContext.Provider value={{itemCart}}>{children}</CartContext.Provider>
  )
}





