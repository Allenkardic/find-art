import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Userprofile.css';

// materilize stuffs
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

// firebase stuffss
import { storage } from '../../config/firebaseConfig';
import { getUserData, updateProfile } from '../../redux/actions/userAction';

class Updateprofile extends Component {
  constructor(props) {
    super(props);
    // create refs

    this.nameInput = React.createRef();

    this.state = { file: '', imagePreviewUrl: '', url: '' };
  }

  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.getUserData(id);
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleImageEditChange = () => {
    const fileInput = document.getElementById('imageUrl');
    fileInput.click();
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('hello', this.nameInput);

    // const { id } = this.props.match.params;

    // this.props.updateProfile(userUpdate, this.props.history);
  };

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];
    const uploadImage = storage.ref(`images/${file.name}`).put(file);
    uploadImage.on(
      'state_changed',
      snapshot => {
        console.log(snapshot);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            console.log('here is url', this.state);
          });
      }
    );
    console.log('here is the file', file.name);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    return (
      <div className="profile-picture-upload">
        {imagePreviewUrl ? (
          <img
            className="profile-image"
            src={imagePreviewUrl}
            alt="profilePicture"
          />
        ) : (
          <div className="profile-image-none">
            <i className="fas fa-user-circle" />
          </div>
        )}

        <form
          action=""
          onSubmit={this.handleSubmit}
          // className={classes.root}
          noValidate
          autoComplete="off"
        >
          <input
            className="profile-picture-upload"
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/png, image/jpeg"
            label="imageUrl"
            hidden="hidden"
            // defaultValue={this.props.userProfile.userDetails.imageUrl}
            onChange={e => this.handleImageChange(e)}
          />

          <i
            onClick={this.handleImageEditChange}
            className="fas fa-pencil-alt pencil"
          />

          <TextField
            id="address"
            name="address"
            type="text"
            label="address"
            ref={this.addressIn}
            defaultValue={this.props.userProfile.userDetails.address}
            fullWidth
          />
          <TextField
            id="country"
            name="country"
            type="text"
            label="country"
            ref={this.countryInput}
            defaultValue={this.props.userProfile.userDetails.country}
            fullWidth
          />

          <TextField
            id="firstName"
            name="firstName"
            type="text"
            label="firstName"
            ref={this.firstNameInput}
            defaultValue={this.props.userProfile.userDetails.firstName}
            fullWidth
          />

          <TextField
            id="lastName"
            name="lastName"
            type="text"
            label="lastName"
            ref={this.lastNameInput}
            defaultValue={this.props.userProfile.userDetails.lastName}
            fullWidth
          />

          <input
            id="name"
            name="name"
            type="text"
            label="user name"
            ref={this.nameInput}
            defaultValue={this.props.userProfile.userDetails.name}
            inputProps={{ 'aria-label': 'description' }}
            fullWidth
          />

          <TextField
            id="phone"
            name="phone"
            type="tel"
            label="phone"
            ref={this.phoneInput}
            defaultValue={this.props.userProfile.userDetails.phone}
            fullWidth
          />
          <button className="profile-btn">save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.user.userProfile
});

export default connect(mapStateToProps, { getUserData, updateProfile })(
  Updateprofile
);
