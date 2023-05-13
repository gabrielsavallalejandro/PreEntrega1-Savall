import React, { useEffect,useState } from 'react'
import './cardList.css';

//Import Components

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';



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


  return (
    <div className='cardListStyle'>
        {items.map(data =>{
        return(
            <div key={data.id}>
                <Link style={{textDecoration:'none'}} to={`/item-detail/${data.id}`}>
                  <ItemDetailContainer data={data} key={data.id} />
                </Link>
           </div>
        )
      })}
    </div>
  )
}

export default ItemList;
