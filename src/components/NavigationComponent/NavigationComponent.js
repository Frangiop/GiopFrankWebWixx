import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavigationComponent.css'; // Importa tu archivo CSS para estilos personalizados


const NavigationComponent = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Determina la cantidad de píxeles que el usuario debe desplazarse hacia abajo antes de ocultar la barra de navegación
      const scrollThreshold = 170;

      const visible = prevScrollPos > currentScrollPos || currentScrollPos < scrollThreshold;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
 
  // Ocultar la barra de navegación cuando scrollingDown es true
  const navClass = visible ? 'navbar' : 'navbar hidden';

  return (
    <div className={navClass}>
      <div className="logo">
      <img src="images/firma/Firmafrank.png" alt="Mi Firma"  class="firma" />
       {/* <Link to='/giop' className="nav-link">GIOP</Link> */}
      </div>
      <div className="line"></div>
      <div className="nav-links">
      
        <Link to='/colecciones' className="nav-link">ACRYLICS COLLECTIONS</Link>
        <Link to='/artista' className="nav-link">COMIC</Link> 
 
      </div>
    </div>
  );
};

export default NavigationComponent;
