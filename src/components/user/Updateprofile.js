import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Userprofile.css';

// materilize stuffs
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getUserData, updateProfile } from '../../redux/actions/userAction';

class Updateprofile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addressIn = React.createRef();
    this.countryInput = React.createRef();
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.nameInput = React.createRef();
    this.imageUrlInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.props.getUserData(id);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleImageChange = event => {
    const file = this.refs.uploadImage.files[0];
    console.log('here is file', file);
    const reader = new FileReader();
    console.log('picked image convert', reader);
    console.log(this.state);

    reader.onloadend = () => {
      // const ImageAvailable = reader.result;
      this.setState({
        imageUrl: reader.result
      });
      if (file) {
        reader.readAsDataURL(file);
        this.setState({
          imageUrl: reader.result
        });
      } else {
        this.setState({
          imageUrl: ''
        });
      }
    };

    reader.readAsDataURL(file);
    this.state.imageUrl = reader.result;
    // this.setState({
    //   imageUrl: reader.result
    // });
    console.log('reader state', this.state);
    // else {
    //   this.setState({
    //     imageUrl: ''
    //   });
    // }
  };

  handleImageEditChange = () => {
    const fileInput = document.getElementById('imageUrl');
    fileInput.click();
  };

  handleSubmit = event => {
    event.preventDefault();

    // const {
    //   address,
    //   country,
    //   firstName,
    //   lastName,
    //   name,
    //   imageUrl,
    //   phone
    // } = this.state;

    const { id } = this.props.match.params;
    console.log('check for value', this);
    console.log('check for address value', this.addressIn.current.value);
    // const {
    //   address,
    //   country,
    //   firstName,
    //   lastName,
    //   name,
    //   imageUrl,
    //   phone
    // } = this.state;
    // const userUpdate = {
    //   id,
    //   address: this.addressIn.current.value,
    //   country,
    //   firstName,
    //   lastName,
    //   name,
    //   imageUrl,
    //   phone
    // };

    // this.props.updateProfile(userUpdate, this.props.history);
  };

  render() {
    if (!this.props.userProfile.userDetails) {
      return <div className="preloading-profile" />;
    }
    return (
      <div className="profile-picture-upload">
        {/* {this.state.imageUrl !== null ? ( */}
        <img
          className="profile-image"
          // src={this.state.imageUrl}
          alt="profilePicture"
        />
        ) : (
        <div className="profile-image-none">
          <i className="fas fa-user-circle" />
        </div>
        )}
        <form action="" onSubmit={this.handleSubmit}>
          <input
            className="profile-picture-upload"
            id="imageUrl"
            name="imageUrl"
            type="file"
            accept="image/png, image/jpeg"
            label="imageUrl"
            hidden="hidden"
            defaultValue={this.props.userProfile.userDetails.imageUrl}
            onChange={this.handleImageChange}
            ref="uploadImage"
          />

          <i
            onClick={this.handleImageEditChange}
            className="fas fa-pencil-alt pencil"
          >
            {/* // onClick={() => this.fileInput.click()} */}
          </i>

          <TextField
            id="address"
            name="address"
            type="text"
            label="address"
            ref={this.addressIn}
            defaultValue={this.props.userProfile.userDetails.address}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="country"
            name="country"
            type="text"
            label="country"
            ref={this.countryInput}
            defaultValue={this.props.userProfile.userDetails.country}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="firstName"
            name="firstName"
            type="text"
            label="firstName"
            ref={this.firstNameInput}
            defaultValue={this.props.userProfile.userDetails.firstName}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="lastName"
            name="lastName"
            type="text"
            label="lastName"
            ref={this.lastNameInput}
            defaultValue={this.props.userProfile.userDetails.lastName}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="name"
            name="name"
            type="text"
            label="user name"
            ref={this.nameInput}
            defaultValue={this.props.userProfile.userDetails.name}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="phone"
            name="phone"
            type="tel"
            label="phone"
            ref={this.phoneInput}
            defaultValue={this.props.userProfile.userDetails.phone}
            onChange={this.handleChange}
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
