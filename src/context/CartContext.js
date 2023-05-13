import { useState, createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [itemCart, setItemCart] = useState([])

    
    console.log(itemCart);

  return(
    <CartContext.Provider value={{itemCart}}>{[itemCart,setItemCart]}
      {children}
    </CartContext.Provider>
  )
}





