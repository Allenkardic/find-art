import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Artwork.css';

const Myartwork = props => {
  const { id, imageUrl, name, description } = props.userArtworks;
  return (
    <div className="container-artwork-url">
      <Link to={`/user/myartworks/details/${id}`}>
        <img className="artwork-image" src={imageUrl} alt="art work" />
      </Link>
      <div className="artwork-title">{name}</div>
      <div className="artwork-description">{description}</div>
    </div>
  );
};
export default Myartwork;
