import React, { Component } from 'react';
import '../css/Settings.css';

class Settings extends Component {
  closeButton = () => {
    document.getElementById('mySideNav').style.width = '0px';
  };

  openButton = () => {
    document.getElementById('mySideNav').style.width = '300px';
  };

  render() {
    return (
      <div>
        <div id="mySideNav" className="sidenav">
          <div className="item">
            {' '}
            <div>our services</div>
            <div>our services</div>
            <div>our services</div>
            <div>About</div>
          </div>
          <div className="item">
            <button
              style={{ marginLeft: '3em', background: 'white' }}
              onClick={this.closeButton}
            >
              close
            </button>
          </div>
        </div>
        <button style={{ marginLeft: '16em' }} onClick={this.openButton}>
          Open
        </button>
      </div>
    );
  }
}

export default Settings;
