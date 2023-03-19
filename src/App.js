// STYLE COMPONENTS

import './App.css';
import './components/Header/header.css';
import MateCamionero from'./images/mate_camionero.jpg'
import MateCalabaza from'./images/mate_calabaza.jpg'
import MateCeramica from'./images/mate_ceramica.jpg'
import MateMadera from'./images/mate_madera.jpg'

// FUNCTIONAL COMPONENTS

import Header from './components/Header/header.js';
import Navbar from './components/Navbar/navbar';
import CardProduct from './components/CardProduct/cardProduct';




// DOM

const App = () => {
  return (
    <>
    <Header />

    <Navbar />

    <div className='bodyCardProduct'>
      <CardProduct 
        name="Mate Camionero"
        price="$5.500"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
        img= {MateCamionero}
      />
      <CardProduct 
        name="Mate Calabaza"
        price="$6.500"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
        img= {MateCalabaza}
      />
      <CardProduct 
        name="Mate Ceramica"
        price="$7.500"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
        img= {MateCeramica}
      />
        <CardProduct 
        name="Mate Madera"
        price="$3.500"
        description="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
        img= {MateMadera}
      />
    </div>

    </>
    
  );
};

export default App
