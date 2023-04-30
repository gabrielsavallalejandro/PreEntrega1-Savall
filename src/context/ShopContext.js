import React from 'react'
import { useState, useEffect } from 'react'

// Import Firebase

export const ShopContext = React.createContext(null)

const ShopContextProvider = ({children}) => {

  const [products, setProducts] = useState([])




 



  return (
    <ShopContext.Provider value={{products, setProducts}}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;


