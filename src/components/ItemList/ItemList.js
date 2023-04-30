import React, { useEffect,useState } from 'react'
import './cardList.css';

//Import Components

import CardItems from '../ItemDetailContainer/ItemDetailContainer';

//Import React Router Dom

import { Link } from "react-router-dom";

// Import Firebase

import { db } from '../../firebaseConfig/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";


const ItemList = () => {


  const [items, setItems] = useState([])

  const q = query(collection(db, "items"))

  useEffect(()=> {
    const getItems = async() => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      });
      setItems(docs)
     
    };

    getItems()

  }, [])

//_________________________________________________________________________________________________
  
  //Logica del carrito de compras

  let cart = []

  function addToCart(product) {
    const existingCartItem = items.find(item => items.id === product.id);
    if (existingCartItem) {
      setItems(
        items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          cart.push(product),
          console.log(cart)
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const existingCartItem = items.find(item => item.id === product.id);
    if (existingCartItem.quantity === 1) {
      setItems(items.filter(item => item.id !== product.id));
    } else {
      setItems(
        items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function calculateTotal() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }


  
 


  return (
    <div className='cardListStyle'>
        {items.map(item =>{
        return(
            <div key={item.id}>
                <Link style={{textDecoration:'none'}} to={`/item-detail/${item.id}`}>
                <CardItems data={item}/>
                </Link>


           </div>
        )
      })}
    </div>
  )
}

export default ItemList;
