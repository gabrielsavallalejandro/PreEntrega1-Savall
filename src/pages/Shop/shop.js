import React from 'react'

// IMPORT STYLES

import './shop.css'

//IMPORT CONTEXT

// FUNCTIONAL COMPONENTS
import ItemList from '../../components/ItemList/ItemList'

const Shop = () => {

  return (
    <div className='shopStyle'>
      <div className='shopTittleContainer'>
      <h1 className='tittlestyle'> ~RENOVA TU KIT MATERO~</h1>
      </div>
      <section>
        <ItemList/>
      </section>
      
    </div>
  )
}

export default Shop
