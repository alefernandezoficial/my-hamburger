import React from 'react';
import '../styles/Intro.css';

const Intro = () => {
    return (
        <div>
            <div className="text-center">
                <img src="images/nobk2.png" className="rounded m-5" alt="logo" height="100" width="100" />
                <h4>GOAT BURGER HAUS</h4>
                <p>
                    En LASSEN BURGER HAUS reinventamos la hamburguesa, homenajeando a su creador Louis LASSEN, un inmigrante alemán, quien crea en 1895 la primera hamburguesa de EE.UU.
                    Reformulamos la receta original, desarrollando hamburguesas gourmet, llenas de sabor, de estilo casero, usando los mejores ingredientes frescos y naturales. Presentadas en un pan casero especial de elaboración propia.
                    Tenemos una propuesta innovadora de Pop-up Stores montados en contenedores reciclados, totalmente equipados, que prometen al visitante una experiencia gastronómica única, garantizando la calidad y la originalidad de nuestros productos.
                </p>
            </div>
        </div>
    );
}

export default Intro;