import React, { useEffect } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../css/Userprofile.css';
import '../css/App.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData, getUsersData } from '../../redux/actions/userAction';

function Userprofile(props) {
  useEffect(() => {
    props.getUserData();
  }, []);

  if (!props.userProfile.userDetails) {
    return (
      <div className="user-spinner">
        <Spin spinning={!!props.fetching_userprofile.isFetching_userprofile} />
      </div>
    );
  }

  const {
    imageUrl,
    name,
    phone,
    dateOfBirth,
    country,
    address
  } = props.userProfile.userDetails;
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={`${imageUrl}` || 'https://via.placeholder.com/400x300'}
        alt="profile picture"
      />

      <div className="profile-container-item profile-username">
        <i className="fas fa-at" /> {name}
      </div>
      <div className="profile-container-item ">
        {phone === '' ? null : (
          <span>
            <i className="fas fa-mobile-alt" /> {phone}
          </span>
        )}
      </div>
      <div className="profile-container-item">
        {country === '' ? null : (
          <span>
            <i className="fas fa-globe-africa" /> {country}
          </span>
        )}
      </div>
      <div className="profile-container-item">
        {address === '' ? null : (
          <span>
            <i className="fas fa-map-marker-alt" /> {address}
          </span>
        )}
      </div>
      <div>
        <Link to={`/user/profile/update/${props.userProfile.userDetails.id}`}>
          <button className="profile-btn btn btn-medium">Update profile</button>
        </Link>
      </div>
    </div>
  );
}

Userprofile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.user.userProfile,
  fetching_userprofile: state.ui
});
export default connect(mapStateToProps, { getUserData })(Userprofile);
