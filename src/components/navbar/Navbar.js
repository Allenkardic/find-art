import React, { Component } from 'react';
import { Drawer, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { getUserData } from '../../redux/actions/userAction';
import '../css/Navbar.css';
import '../css/App.css';

class Navbar extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  state = { visible: false };

  signoutUser = () => {
    this.props.logout();
  };
  // drawer start
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  // drawer end

  render() {
    return (
      <div>
        {this.props.authenticated === true ? (
          <div>
            <i className="fas fa-bars close-bars" onClick={this.showDrawer} />
            <Drawer
              headerStyle={{ backgroundColor: '#020c13f5' }}
              bodyStyle={{
                backgroundColor: '#020c13f5',
                padding: '0',
                margin: '0'
              }}
              width={300}
              placement="left"
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
              // visible={true}
            >
              <img
                className="nav-image"
                src={
                  !this.props.userProfileImage.userDetails
                    ? null
                    : `${this.props.userProfileImage.userDetails.imageUrl}` ||
                      'https://via.placeholder.com/400x300'
                }
                alt="profile image"
              />

              <Link className="nav-share-link" to="/artworks">
                <i className="fas fa-image style-link" />
                <div className="nav-link style-link">Artworks</div>
              </Link>

              <Link className="nav-share-link" to="/user/profile">
                <i className="fas fa-user-circle style-link" />
                <div className="nav-link style-link">Profile</div>
              </Link>

              <Link className="nav-share-link" to="/user/myartworks">
                <i className="fas fa-image style-link" />
                <div className="nav-link style-link">My Artworks</div>
              </Link>

              <div className="nav-share-link">
                <i className=" style-link fas fa-sign-out-alt " />
                <div
                  className="nav-link nav-link-spin"
                  onClick={this.signoutUser}
                >
                  logout
                  <Spin
                    className="spinner-nav"
                    spinning={!!this.props.logoutInfo}
                  />
                </div>
              </div>
            </Drawer>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfileImage: state.user.userProfile,
  authenticated: state.auth.authenticated,
  logoutInfo: state.ui.ui_loading_nav
});

export default connect(mapStateToProps, { logout, getUserData })(Navbar);
