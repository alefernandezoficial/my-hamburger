import React from 'react';
import '../styles/Intro.css';

const Intro = () => {
    return (
        <div>
            <div className="text-center">
                <img src="images/nobk2.png" className="rounded m-5" alt="logo" height="200" width="200" />
                <div style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <h4>- GOAT BURGER HAUS -</h4>
                    <p>
                        ¡Disfruta de la comida más sabrosa en <span className="badge text-bg-warning">GOAT BURGER HAUS!</span>
                        Nuestro concepto único ofrece una experiencia gastronómica sin igual.
                        Nuestros hamburguesas siempre están hechas a mano con la mejor carne de hamburguesa de vaca, que es cuidadosamente seleccionada para un sabor y textura únicos.
                        Nuestras hamburguesas están acompañadas de una variedad de salsas, vegetales y aderezos, todos los cuales son cuidadosamente seleccionados para ofrecer el mejor sabor posible.
                        Nuestra atmósfera única te hará sentir como en casa.
                        Mientras disfrutas de tu hamburguesa, puedes sentarte en el interior moderno y acogedor, disfrutar de la música relajante y las vistas de la ciudad.
                        <span className="badge text-bg-dark">¡Ven a GOAT BURGER HAUS!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Intro;