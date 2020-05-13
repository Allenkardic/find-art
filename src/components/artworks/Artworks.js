import React, { Component } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtworks } from '../../redux/actions/artworkAction';
import Artwork from './Artwork';

class Artworks extends Component {
  componentDidMount() {
    this.props.getArtworks();
  }

  render() {
    const { artworks } = this.props;
    return (
      <div className="container-artworks">
        <div className="artworks-available-bid">Arts Available for Bids </div>
        <div className="container-artworks-main">
          {artworks.map(image => (
            <Artwork Key={image.id} artworks={image} />
          ))}
        </div>
        <Spin className="spinner-artworks" spinning={!!this.props.isFetching} />
      </div>
    );
  }
}

Artworks.propTypes = {
  artworks: PropTypes.array.isRequired,
  getArtworks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  artworks: state.artwork.artworks,
  isFetching: state.ui.isFetching_artworks
});
export default connect(mapStateToProps, { getArtworks })(Artworks);
