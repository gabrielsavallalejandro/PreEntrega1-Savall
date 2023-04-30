import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const itemsInCart = []; //Quedo funcionando el contexto.




export const CartProvider = ({children}) => {
  const [itemCart, setItemCart] = useState(itemsInCart)

  return(
    <CartContext.Provider value={{itemCart}}>
      {children}
    </CartContext.Provider>
  )
}





