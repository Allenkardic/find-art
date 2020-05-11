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

  // componentDidUpdate() {
  //   this.props.getUserData();
  // }
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
              closable={false}
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

              <Link to="/artworks">
                <div className="nav-share-link">
                  <Link className="style-link" to="/artworks">
                    <i className="fas fa-image " />
                  </Link>
                  <Link className="style-link" to="/artworks">
                    <div className="nav-link">Artworks</div>
                  </Link>
                </div>
              </Link>

              <Link to="/user/profile">
                <div className="nav-share-link">
                  <Link className="style-link" to="/user/profile">
                    <i className="fas fa-user-circle " />
                  </Link>
                  <Link className="style-link" to="/user/profile">
                    <div className="nav-link">Profile</div>
                  </Link>
                </div>
              </Link>

              <Link to="/user/myartworks">
                <div className="nav-share-link">
                  <Link className="style-link " to="/user/myartworks">
                    <i className="fas fa-image " />
                  </Link>
                  <Link className="style-link" to="/user/myartworks">
                    <div className="nav-link">My Artworks</div>
                  </Link>
                </div>
              </Link>

              <div className="nav-share-link">
                <Link className="style-link" to="/logout">
                  <i className="fas fa-sign-out-alt " />
                </Link>

                <div
                  className="nav-link nav-link-spin"
                  onClick={this.signoutUser}
                >
                  logout
                  {/* {this.props.logoutInfo.ui_loading} */}
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
