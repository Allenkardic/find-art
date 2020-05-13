import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { deleteMyartwork } from '../../redux/actions/artworkAction';
import '../css/App.css';
import '../css/Myartwork.css';

function MyartworksDetails(props) {
  const handleDeleteArtwork = () => {
    props.deleteMyartwork(props.match.params.id, props.history);
  };
  console.log(props);
  return (
    <div>
      <div className="myartwork-delete-card">
        <button
          className="btn btn-medium btn-delete-art"
          onClick={handleDeleteArtwork}
        >
          <Spin spinning={!!props.isFetchingArtworkDelete} />
          Delete artwork
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isFetchingArtworkDelete: state.ui.isFetching_myartwork_delete
});

export default connect(mapStateToProps, { deleteMyartwork })(MyartworksDetails);
