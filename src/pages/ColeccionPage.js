// ColeccionPage.js

import React from 'react';
import './ColeccionPage.css';
import { Link } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent/FooterComponent';

export default function ColeccionPage() {
  return (
    <div className="publicaciones-page colecciones-page">
      <div className="pagina-publicaciones">
        <h1>COLLECTIONS</h1>
        <div class="contenedor-collection">
        <p>"Dive into my acrylic universe: vibrant emotions, introspective landscapes that invite you to reflect on contemporary society.<br /> 
          Explore solitude, human connection, and the search for identity. <br />Let yourself be carried away by the expressive force of my art."<br />
          <br /> Click to see collections : 
        </p>
        </div>
        <div className="contenedor-flex">
          {/* Primer conjunto */}
          <div className="conjunto">
            <Link to="/multicollections" className="imagen-link">
              <div>
                <img src="/images/imagen2.jpg" alt="Imagen de Invierno" className="imagen-artistica" />
                <div className="titulo-conjunto invierno">NEW COLLECTION</div>
              </div>
            </Link>
          </div>

          {/* Segundo conjunto */}
          <div className="conjunto">
            <Link to="/multicollections2" className="imagen-link">
              <div>
                <img src="/images/antiguas/imagen4.jpg" alt="Imagen de Verano" className="imagen-artistica" />
                <div className="titulo-conjunto verano">FIRST PAINTINGS</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="instagram-link">
          <a href="https://www.instagram.com/giopfrank" target="_blank" rel="noopener noreferrer">Click here to check my Instagram</a>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
