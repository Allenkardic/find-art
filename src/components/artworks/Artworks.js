import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { getArtworks } from '../../redux/actions/artworkAction';
import Artwork from './Artwork';

class Artworks extends Component {
  componentDidMount() {
    this.props.getArtworks();

    console.log('props', this.props);
  }

  render() {
    const { artworks } = this.props;
    console.log('auth', this.props.authenticated);
    return (
      <div>
        {artworks.map(image => (
          <Artwork Key={image.id} artworks={image} />
        ))}
      </div>
    );
  }
}

Artworks.propTypes = {
  artworks: PropTypes.array.isRequired,
  getArtworks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  artworks: state.artwork.artworks
});
export default connect(mapStateToProps, { getArtworks })(Artworks);
