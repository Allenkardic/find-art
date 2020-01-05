import React, { Component } from 'react';
import '../css/Artwork.css';

class Myartwork extends Component {
  render() {
    const { imageUrl, name, description } = this.props.userArtworks;
    return (
      <div className="container-home-url">
        <div>
          <img className="home-url" src={imageUrl} alt="art work" />
        </div>
        <div className="home-description">Artwork name: {name}</div>
        <div className="home-description">Description: {description}</div>
      </div>
    );
  }
}
export default Myartwork;
