// CollectionTwoComponent.js

import React from 'react';
import './CollectionTwoComponent.css'; // Importa el archivo CSS

import FooterComponent from '../FooterComponent/FooterComponent';

const CollectionTwoComponent = () => {
  const collections = [
    { id: 1, image: 'imagen1.png', comment: 'Canvas size: 90(height) x 60 x 2 cm'  },
    { id: 2, image: 'imagen2.jpg', comment: 'Canvas size: 105 (height) x 130 x 3 cm'  },
    { id: 4, image: 'imagen3.png', comment: 'Canvas size: 107 (height) x 95 x 2 cm'  },
    { id: 5, image: 'imagen4.jpg', comment: 'Canvas size: 60 (height) x 60 x 2 cm'  },
    { id: 6, image: 'imagen5.png', comment: 'Canvas size: 70 (height) x 70 x 2 cm'  },
    // Agrega comentarios para cada imagen según sea necesario
  ];


  return (
    <div className="page-margin1">
      <div className="title-container1">
        <h1 className="collection-title1">FIRST PAINTINGS</h1>
      </div>
      <div className="collectionContainer1">
        {collections.map((collection) => (
          <div className="collectionItem1" key={collection.id}>
            <div className="collectionImage1">
              <img src={`/images/antiguas/${collection.image}`} alt={`Collection ${collection.id}`} />
              <div className="commentary1">{collection.comment}</div>
            </div>
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
};
export default CollectionTwoComponent;
