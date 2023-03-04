import React from 'react'
import '../../styles/pages/About.css';

function About() {
    return (
    <section id="About">
            <div className="text-center">
                <div style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <h4>- Conocenos -</h4>
                    <img src="images/chef-of-the-month.jpg" className="rounded-staff m-5 mx-auto" alt="logo" height="360" width="600" />
                    <h4>Nuestro Staff</h4>
                    <p>
                        Nos especializamos en creación de productos gourmet,
                        donde la prioridad esta puesta en la calidad como en la elección de los mejores productos frescos y naturales,
                        sin agregado de conservantes ni colorantes.
                        Nuestro chef desarrolló una receta de hamburguesas gourmet de estilo casero,
                        llenas de sabor, pan de elaboración propia y salsas especiales.
                        En <span className="badge text-bg-warning">GOAT BURGER HAUS</span> estamos en esos pequeños detalles,
                        brindándote una cálida experiencia para que te sientas comiendo en casa.
                    </p>
                </div>
            </div>
    </section>
    )
}

export default About
