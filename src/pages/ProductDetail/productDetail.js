import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

// Import Componentes

import CardProduct from '../../components/CardProduct/cardProduct';

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
      <h1 className='tittle'>{product.name}</h1>
      <div>
        <CardProduct product={product} className='cardStyle'/>
      </div>
        
    </div>
  )
}

export default ProductDetail
