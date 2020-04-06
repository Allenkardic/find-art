import React from 'react';
import '../css/Myartwork.css';

const Myartwork = props => {
  const { imageUrl, name, description } = props.userArtworks;
  return (
    <div className="container-myartwork-url">
      <img className="myartwork-url" src={imageUrl} alt="art work" />
      <div className="myartwork-description">Artwork name: {name}</div>
      <div className="myartwork-description">Description: {description}</div>
    </div>
  );
};
export default Myartwork;
