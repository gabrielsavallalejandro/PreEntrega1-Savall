
// IMPORT STYLE
import './header.css';
import imagen from "../../images/logo_marca.png";

// CREATE YOUR COMPONENT


const Header = () => {

    return (
    <>
        <div className='titleHeader'>
                      
            <h1>Tomate un Mate</h1>

            <img src={imagen} alt="TUM logo" width={80} />  
            
        </div>

    </>

    );
};

export default Header

  