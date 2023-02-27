import React from 'react';
import '../styles/Product.css'

const Product = () => {
    return (
        <>
            <div class="grid-containter">
                <div class="grid-item" onClick="openModal()">
                    <img src="img1.jpg" alt="Imagen1" placeholder='acavalaimagen'/>
                </div>
                <div class="grid-item" onClick="openModal()">
                    <img src="img2.jpg" alt="Imagen2" placeholder='acavalaimagen'/>
                </div>
                <div class="grid-item" onClick="openModal()">
                    <img src="img3.jpg" alt="Imagen3" placeholder='acavalaimagen'/>
                </div>
                <div class="grid-item" onClick="openModal()">
                    <img src="img4.jpg" alt="Imagen4" placeholder='acavalaimagen'/>
                </div>
                <div class="grid-item" onClick="openModal()">
                    <img src="img5.jpg" alt="Imagen5" placeholder='acavalaimagen'/>
                </div>
                <div class="grid-item" onClick="openModal()">
                    <img src="img6.jpg" alt="Imagen6" placeholder='acavalaimagen'/>
                </div>
            </div>
        </>
    );
}

export default Product;
