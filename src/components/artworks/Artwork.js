import React, { Component } from 'react';

import '../css/Artwork.css';
import { Link } from 'react-router-dom';

class Artwork extends Component {
  render() {
    const { id, imageUrl, name, description } = this.props.artworks;
    return (
      <div className="container-artwork-url">
        <div>
          <Link to={`/artwork/bid/${id}`}>
            <img className="artwork-image" src={imageUrl} alt="art work" />
          </Link>
        </div>
        <div className="artwork-description">
          <div className="des-first">
            <span className="artwork-description-title ">Art work name:</span>{' '}
            {name}
          </div>
          <div>
            <span className="artwork-description-title">Description:</span>{' '}
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default Artwork;
