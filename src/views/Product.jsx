import '../styles/Product.css';

import mood from '../img/img18.png'
import title from '../img/img13.png'

export const Product = () => {
    return (
        <div className="productContainer">
            <div className="bg">
                <div className="img">
                <img src={title} alt="title" id='title'/>
                <img src={mood} alt="moodboard" id='mood'/>
            </div>
 
            <div className="text">
                <h1>Proyecto de Diseño</h1>´
                <p>
                Tablero de ideas e inspiración <br /> Proyecto personalizado <br /> Entrega en 24h <br /> Lista de compra de mobiliario y decoración que podrás comprar desde nuestra web<br /> Hasta 2 revisiones del diseño
                </p>
                <button>Comprar</button>

            </div>
            </div>
        </div>
    )
}