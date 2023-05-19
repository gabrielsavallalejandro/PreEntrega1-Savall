import React from 'react'
import { useContext, useEffect, useState } from 'react';

// Import Firebase

import { db } from '../../firebaseConfig/firebaseConfig';
import { collection, query, getDocs} from "firebase/firestore";

// IMPORT CONTEXT

import { CartContext } from '../../context/CartContext';

const ItemCart = () => {
    
    //Trae los items del firebase
    const q = query(collection(db,"items"));
    const [item, setItem] = useState([]);

    useEffect(()=> {
      const getItems = async() => {
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        });
        setItem(docs)
       
      };
  
      getItems()
  
    }, [])

  // Trae el itemCart creado en el contexto para poder usarlo.

  const {itemCart} = useContext (CartContext);

  // Funcion quita del carrito


  const removeToCart = () => {

    const foundId = itemCart.find((element) => element.id === item.id);

    console.log(foundId);
  



    /* for(const producto of itemCart){
      console.log(producto.name);

    }

    console.log(itemCart); */
  }



  return (
    <>
      <h1 style={{textAlign:'center', marginTop:'20px', marginBottom:'20px', fontSize:'55px'}}>Esta es tu compra</h1>

      {itemCart.map(data =>{
        return(
            <div key={data.id} style={{display:'flex', justifyContent:'center', marginBottom:'20px'}}>
              <table>
                <tr>
                  <th style={{ backgroundColor:'black',color:'white',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>Producto</th>
                  <th style={{ backgroundColor:'black',color:'white',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>Nombre</th>
                  <th style={{ backgroundColor:'black',color:'white',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>Precio</th>
                  <th style={{ backgroundColor:'black',color:'white',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>Total</th>
                </tr>
                <tr>
                  <td><img src={data.img}alt={data.name} style={{width:'100px',border:'solid', borderColor:'black',borderWidth:'0.3px'}}></img></td>
                  <td style={{color:'green',width:'200px', textAlign:'center',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>{data.name}</td>
                  <td style={{color:'green',width:'200px',textAlign:'center',border:'solid', borderColor:'black',borderWidth:'0.3px'}}>{data.price}</td>
                  <td style={{color:'green',width:'200px', textAlign: 'center',fontWeight:'bold', border:'solid', borderColor:'black',borderWidth:'0.3px'}}>{data.price}</td>
                  <td><button onClick={removeToCart} style={{marginBottom:'25px' ,marginLeft:'10px', height:'20px', width:'55px',background:'red',color:'white'}}>Quitar</button></td>
                </tr>
              </table>
           </div>
        )
      })}
    </>
  )
}

export default ItemCart;