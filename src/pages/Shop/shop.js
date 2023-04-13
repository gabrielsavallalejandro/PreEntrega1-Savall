import React from 'react'

// IMPORT STYLES

import './shop.css'

// FUNCTIONAL COMPONENTS
import CardList from '../../components/CardList/cardList'

const Shop = () => {
  return (
    <div className='shopStyle'>
      <div className='shopTittleContainer'>
      <h1 className='tittlestyle'>Renova tu kit matero</h1>
      </div>
      <section>
        <CardList/>
      </section>
      
    </div>
  )
}

export default Shop
