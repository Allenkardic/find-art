import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../css/Userprofile.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData, getUsersData } from '../../redux/actions/userAction';

class Userprofile extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    const check = 0;
    const {
      imageUrl,
      name,
      phone,
      dateOfBirth,
      country,
      address
    } = this.props.userProfile.userDetails;
    return (
      <div className="profile-container">
        <img
          className="profile-image"
          src={`https://ipsumimage.appspot.com/640x360` || `${imageUrl}`}
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
          {dateOfBirth === '' ? null : (
            <span>
              DOB:{' '}
              <Moment format="D MMM YYYY" withTitle>
                {dateOfBirth}
              </Moment>
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
          <Link
            to={`/user/profile/update/${this.props.userProfile.userDetails.id}`}
          >
            <button className="profile-btn">Update profile</button>
          </Link>
        </div>
      </div>
    );
  }
}

Userprofile.propTypes = {
  getUserData: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.user.userProfile
});
export default connect(mapStateToProps, { getUserData })(Userprofile);
