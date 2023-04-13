import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

// Import Componentes


// Import Style

import './productDetail.css';


//DOM

const ProductDetail = () => {

    const [product, setProduct] = useState({})

    let {id} = useParams();

    console.log(id)

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/gabrielsavallalejandro/Apip_products/shop/${id}`)
        .then((response)=> response.json())
        .then ((product) => setProduct(product));
    },[id])



  return (
    <div className='style'>
      <h1 className='tittlestyle'>{product.name}</h1>
      <div className='imageProductContainer'>
      <img className='picture' src={product.img} alt= {product.name} width={350}/>  
      <p className='description'>{product.name}</p>
      </div>
        
    </div>
  )
}

export default ProductDetail
