import React from 'react';
import { Link } from 'react-router-dom';

const GodCard = ({ id, image, name, title }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="god">
        <div className="god-image">
          <img src={image} alt={name} />
        </div>
        <div className="god-details">
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default GodCard;
