import React, { Component } from 'react';

import '../css/Artwork.css';
import { Link } from 'react-router-dom';

class Artwork extends Component {
  render() {
    const { id, imageUrl, name, description } = this.props.artworks;
    return (
      <div className="container-home-url">
        <div>
          <Link to={`/artwork/bid/${id}`}>
            <img className="home-url" src={imageUrl} alt="art work" />
          </Link>
        </div>
        <div className="home-description">
          <h3 style={{ color: 'red', marginBottom: '1rem' }}>
            Click on art work to make bid
          </h3>
          <div>Art work name: {name}</div>
          <div>Description: {description}</div>
        </div>
      </div>
    );
  }
}

export default Artwork;
