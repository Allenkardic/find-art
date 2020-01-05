import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { myArtworks } from '../../redux/actions/artworkAction';
import Myartwork from './Myartwork';

class Myartworks extends Component {
  componentDidMount() {
    this.props.myArtworks();
  }

  render() {
    const { userArtworks } = this.props;

    if (userArtworks === false) {
      return (
        <div className="container-home-url">
          {' '}
          <div className="preloading" />
          <div className="preloading-bottom" />
        </div>
      );
    }
    return (
      <div>
        {userArtworks.map(image => (
          <Myartwork key={image.id} userArtworks={image} />
        ))}

        <i className="fas fa-plus" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userArtworks: state.artwork.userArtworks,
  authenticated: state.user.authenticated
});

Myartworks.propTypes = {
  userArtworks: PropTypes.array.isRequired,
  myArtworks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { myArtworks })(Myartworks);
