import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Navbar.css';

class Navbar extends Component {
  closeButton = () => {
    const mySideNav = document.getElementById('mySideNav');
    mySideNav.style.cssText = 'width: 0px';

    const body = document.querySelector('body');
    body.style.cssText = 'overflow: visible; opacity:1';
  };

  openButton = () => {
    const mySideNav = document.getElementById('mySideNav');
    mySideNav.style.cssText = 'width: 300px; opacity:1';

    const body = document.querySelector('body');
    body.style.cssText = 'overflow: hidden';
  };

  render() {
    if (this.props.authenticated === true) {
      return (
        <div>
          <div id="mySideNav" className="sidenav">
            <div className="nav-share-link">
              <i className="fas fa-bars open-bars" onClick={this.closeButton} />
            </div>

            <div className="nav-share-link">
              <Link className="style-link" to="/artworks">
                <i className="fas fa-image " />
              </Link>
              <Link className="style-link" to="/artworks">
                <div className="nav-link">Artworks</div>
              </Link>
            </div>

            <div className="nav-share-link">
              <Link className="style-link" to="/user/profile">
                <i className="fas fa-user-circle " />
              </Link>
              <Link className="style-link" to="/user/profile">
                <div className="nav-link">Profile</div>
              </Link>
            </div>

            <div className="nav-share-link">
              <Link className="style-link " to="/user/myartworks">
                <i className="fas fa-image " />
              </Link>
              <Link className="style-link" to="/user/myartworks">
                <div className="nav-link">My Artworks</div>
              </Link>
            </div>

            <div className="nav-share-link">
              <Link className="style-link" to="/logout">
                <i className="fas fa-sign-out-alt " />
              </Link>
              <Link className="style-link" to="/logout">
                <div className="nav-link">logout</div>
              </Link>
            </div>
          </div>

          <i className="fas fa-bars close-bars" onClick={this.openButton} />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Navbar);
