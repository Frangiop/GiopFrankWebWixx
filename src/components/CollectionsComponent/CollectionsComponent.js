// CollectionsComponent.js

import React from 'react';
import './CollectionsComponent.css';
import FooterComponent from '../FooterComponent/FooterComponent';

const CollectionsComponent = () => {
  const collections = [
    { id: 1, image: 'imagen1.png', comment: 'Canvas size: 107 (height) x 95 x 3,5 cm' },
    { id: 2, image: 'imagen2.jpg', comment: 'Canvas size: 127 (height) x 120 x 2 cm' },
    { id: 4, image: 'imagen3.png', comment: 'Canvas size: 100 (height) x 80 x 2 cm.' },
    { id: 5, image: 'imagen4.jpg', comment: 'Canvas size: 73 (height) x 92 x 2 cm.' },
    { id: 6, image: 'imagen5.png', comment: 'Canvas size: 116 (height) x 80 x 3,5 cm.' },
    // Agrega comentarios para cada imagen según sea necesario
  ];

  return (
    <div className="page-margin">
      <div className="title-container">
        <h1 className="collection-title">NEW COLLECTION</h1>
      </div>
      <div className="collectionContainer">
        {collections.map((collection) => (
          <div className="collectionItem" key={collection.id}>
            <div className="collectionImage">
              <img src={`/images/${collection.image}`} alt={`Collection ${collection.id}`} />
              <div className="commentary">{collection.comment}</div>
            </div>
          </div>
        ))}
        
      </div>
      <FooterComponent />
    </div>
  );
};

export default CollectionsComponent;
