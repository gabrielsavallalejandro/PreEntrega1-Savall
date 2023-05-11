import React from 'react'

// IMPORT STYLES

import './Home.css'

//IMPORT CONTEXT

// FUNCTIONAL COMPONENTS
import ItemList from '../../components/ItemList/ItemList'

const Home = () => {

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

export default Home
