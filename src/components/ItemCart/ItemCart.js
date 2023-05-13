import React from 'react'
import { useContext } from 'react';

// IMPORT CONTEXT

import { CartContext } from '../../context/CartContext';

const ItemCart = () => {

  // Trae el itemCart creado en el contexto para poder usarlo.

  const {itemCart} = useContext (CartContext);

  // Funcion quita del carrito

  const removeToCart = () => {
    console.log(itemCart);
  }











  return (
    <>
      <h1 style={{textAlign:'center', marginTop:'20px', marginBottom:'20px', fontSize:'55px'}}>Esta es tu compra</h1>

      {itemCart.map(data =>{
        return(
            <div key={data.id}>
              <p style={{marginLeft:'5px',marginTop:'10px' ,color:'green', fontWeight:'bold'}}> {data.name} | ${data.price} 
                <button onClick={removeToCart} style={{marginBottom:'25px' ,marginLeft:'10px', height:'20px', width:'55px',background:'red',color:'white'}}>Quitar</button>             
               </p> 
              

           </div>
        )
      })}
    </>
  )
}

export default ItemCart;
