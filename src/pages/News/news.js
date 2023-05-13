import React from 'react'

// IMPORT IMAGES

import imagen from "./BannerHome.webp";
import pictureNews from "./home_news.webp";


// IMPORT STYLES

import './news.css'

// FUNCTIONAL COMPONENTS


const News = () => {
  return (
    <div className='homeStyle'>     
    
      <div>
        <img src={imagen} alt="banner" className='banner containerImageBanner'/>  
      </div>
      <div className='tittlestyleContainer'>
        <h1 className='tittlestyle'>¿Cual es el secreto para unos buenos mates?</h1>
      </div>

      <div className='video'>
      <iframe width="900" height="506" src="https://www.youtube.com/embed/vwrmTSMmcaI" title="➤ COMO PREPARAR un MATE (CEBAR)"  ></iframe>
      </div>

      <section className='paragraph'>

        <h2 className='tittlestyle'> Te dejamos un paso a paso</h2>

        <p>
        1.Calentar agua y tratar de que no supere los 80 grados. Lo ideal es que el agua esté entre 70 y 80°, por lo que es clave ponerla en un termo.
        <br></br>
        2.Agregar yerba en el mate. Lo recomendable es ponerle las tres cuartas partes del tamaño del mate. En caso de que el mate quede muy amargo, se le puede agregar una cucharada de azúcar para quitarle el amargor.
        <br></br>
        3.Tapar el mate con una mano y luego invertirlo. Agitarlo durante unos segundos. Luego darlo vuelta y tratar de que la yerba quede recostada en un sector para que se forme un agujero.
        <br></br>
        4.Luego colocar agua tibia en el hueco para que la yerba no se queme y que no pierda el gusto tan rápidamente.
        <br></br>
        5.Agregar la bombilla en el hueco húmedo.
        <br></br>
        6.De acuerdo a los expertos, un buen cebador toma el primer o segundo mate (no suelen ser los mejores) para luego proceder a compartirlo con otra persona.
        <br></br>
        7.Es clave no mover la bombilla y no mover la yerba para que el mate dure varias rondas y no haya que cambiarla todo el tiempo.
        <br></br>
        8.¡Listo! Ya podés tomar unos buenos mates solo o con quien más gustes.
        </p>
      </section>
    <div className='containerImage'>
    <img src={pictureNews} alt="banner" className='HomeNews newsImage'/>  
    </div>
     
      
      
    </div>
  )
}

export default News
