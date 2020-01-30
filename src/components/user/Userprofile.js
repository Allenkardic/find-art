import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import '../css/Userprofile.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/userAction';

class Userprofile extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    return (
      <div className="profile-container">
        <div>
          {this.props.userProfile.userDetails.imageUrl !== null ? (
            <img
              className="profile-image"
              src={this.props.userProfile.userDetails.imageUrl}
            />
          ) : (
            <div className="profile-image-none">
              <i className="fas fa-user-circle" />
            </div>
          )}
          <div className="profile-container-item">
            Username: {this.props.userProfile.userDetails.name}
          </div>
          <div className="profile-container-item">
            First name: {this.props.userProfile.userDetails.firstName}
          </div>
          <div className="profile-container-item">
            Last name: {this.props.userProfile.userDetails.lastName}
          </div>
          <div className="profile-container-item">
            Phone number: {this.props.userProfile.userDetails.phone}
          </div>
          <div className="profile-container-item">
            DOB:{' '}
            <Moment format="D MMM YYYY" withTitle>
              {this.props.userProfile.userDetails.dateOfBirth}
            </Moment>
          </div>
          <div className="profile-container-item">
            Country: {this.props.userProfile.userDetails.country}
          </div>
          <div className="profile-container-item">
            Address: {this.props.userProfile.userDetails.address}
          </div>
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
