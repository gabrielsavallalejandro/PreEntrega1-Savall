import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/cardProduct";
import './cardList.css';

//Impor React Router Dom

import { Link } from "react-router-dom";


const CardList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/gabrielsavallalejandro/Apip_products/shop")
        .then((response)=> response.json())
        .then ((product) => setProducts(product));
    },[])

    return(
        <div className="cardListStyle">
            {products.map ((product) => {
                return(
                    <div key={product.id}>
                        <Link to={`/product-detail/${product.id}`}>
                            <CardProduct product={product}/>
                        </Link>
                    </div>
                )
             })
            }
        </div>

    );

}

export default CardList;