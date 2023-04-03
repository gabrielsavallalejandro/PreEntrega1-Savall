import React from 'react'

// IMPORT STYLES

import './shop.css'

// FUNCTIONAL COMPONENTS
import CardList from '../../components/CardList/cardList'

const Shop = () => {
  return (
    <div className='shopStyle'>
      <h1 className='tittle'>Catalogo</h1>
      <CardList/>
    </div>
  )
}

export default Shop
