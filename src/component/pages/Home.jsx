import React from 'react';
import '../../styles/pages/Home.css';

import NoBk2 from "../../assets/images/nobk2.png";

const Home = () => {
    return (
        <section id="Home">
            <div className="text-center">
                <img src={NoBk2} className="rounded m-5" alt="logo" height="200" width="200" />
                <div style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <h4>- GOAT BURGER HAUS -</h4>
                    <p><span className="badge rounded-pill text-bg-warning">GOAT Burger Haus</span> es una hamburguesería que se distingue por su dedicación a la calidad de sus ingredientes y la excelencia en la preparación de sus platillos. Su objetivo es ofrecer una experiencia gastronómica única y satisfactoria para todos sus clientes.

                        La hamburguesería utiliza carne 100% de res de primera calidad y productos frescos de origen local para garantizar el mejor sabor y textura en cada bocado. Además, su menú incluye opciones vegetarianas y sin gluten para satisfacer a todos los paladares.

                        <hr></hr>Los chefs de <span className="badge rounded-pill text-bg-warning">GOAT Burger Haus</span> trabajan con pasión para crear platillos innovadores y deliciosos que satisfagan los gustos más exigentes. Desde la clásica hamburguesa con queso hasta combinaciones creativas como la hamburguesa con aguacate y tocino, cada platillo está diseñado para deleitar los sentidos.

                        La hamburguesería también ofrece una amplia variedad de bebidas artesanales y cervezas locales para complementar tu comida. Con un ambiente acogedor y un servicio excepcional, <span className="badge rounded-pill text-bg-warning">GOAT Burger Haus</span> es una opción ideal para disfrutar de una comida deliciosa con amigos y familiares.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;