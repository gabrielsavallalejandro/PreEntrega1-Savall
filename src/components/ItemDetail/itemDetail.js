import React, {useEffect, useState, useContext} from 'react'

// Import useParams

import { useParams } from 'react-router-dom';

//Import MUI CARD


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Import Componentes

import ItemList from '../ItemList/ItemList'


// Import Style

import './itemDetail.css';

// IMPORT CONTEXT

import { CartContext } from '../../context/CartContext';

// Import Firebase

import { db } from '../../firebaseConfig/firebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";


//DOM

const ItemDetail = () => {

   // Trae el itemCart creado en el contexto para poder usarlo.

   const {itemCart} = useContext (CartContext);


 


   //Trae los items del firebase

  let { id } = useParams();

  const [item, setItem] = useState([]);





  const addToCart = () => {
    item.map(item => {
      itemCart.push(item)
      alert(`Agregaste ${item.name} al carrito`)
      
    })

    console.log(itemCart);    
  }
 // Falta modificar formula de removeToCart --> Agregarle que identifique el elemento a borrar por medio de indexof
  const removeToCart = () => {
    item.map(item => {
      itemCart.splice(item)
      alert(`Quitaste ${item.name} al carrito`)
      // puedo hacer un mapeo que me traiga el arreglo con todos los valores y que elimine el actual solamente. 
    })
  }
  


//____________________________

  //Trae el item cuyo ID COINCIDE CON LO QUE ESTOY OBTENIENDO VIA useParams()
  const q = query(collection(db,"items"), where(documentId(), "==", id));

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


 
  return (
    <div className='containerItemDetail' style={{display:'flex', justifyContent:'center'}}>
      {item.map((item) => {
        return (
          <div key={item.id}>           
          <div className='itemContainer' style={{padding:'10px'}}>
            <Card Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image= {item.img}
                    alt= {item.name}
                  />
                  <CardContent>
                    <Typography  gutterBottom variant="h5" component="div">
                      {item.name} | ${item.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{fontSize:20}}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <button onClick={addToCart} style={{marginLeft:'5px',marginTop:'10px', marginRight:'10px', height:'30px', width:'125px',background:'black',color:'white'}}>Agregar al carrito</button>
              <button onClick={removeToCart} style={{marginLeft:'5px',marginTop:'10px', marginRight:'10px', height:'30px', width:'125px',background:'black',color:'white'}}>Quitar al carrito</button>
          </div>
        </div>
        );
      })}
    </div>
  )
}

export default ItemDetail;
