import React from 'react';
import { connect } from 'react-redux';

const PaginationArtworkBid = props => {
  console.log(props);
  return <div>hello world</div>;
};

const mapStateToProps = state => ({
  singleArwork: state.artwork
});

export default connect(mapStateToProps)(PaginationArtworkBid);
