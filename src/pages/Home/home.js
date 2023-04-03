import React from 'react'

// IMPORT STYLES

import './home.css'

// FUNCTIONAL COMPONENTS



const Home = () => {
  return (
    <div className='homeStyle'>
      <h1 className='tittlestyle'>Bienvenidos a nuestra pagina</h1>
      
      <div className='video'>
        <iframe width="100%" height="401" src="https://www.youtube.com/embed/vwrmTSMmcaI" title="➤ COMO PREPARAR un MATE (CEBAR)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
      <section className='paragraph'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rerum temporibus asperiores soluta maxime fuga ipsum quasi deleniti a laboriosam maiores earum rem perferendis possimus ab error at, vero nesciunt!
        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rerum temporibus asperiores soluta maxime fuga ipsum quasi deleniti a laboriosam maiores earum rem perferendis possimus ab error at, vero nesciunt!
        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rerum temporibus asperiores soluta maxime fuga ipsum quasi deleniti a laboriosam maiores earum rem perferendis possimus ab error at, vero nesciunt!
      </p>
      </section>
      
      
    </div>
  )
}

export default Home
