import React from 'react';

function Notfound() {
  return (
    <div>
      <h1>This page doesnot exist</h1>
      <p>Error!!!!!!</p>
      {/* unused code */}
      {/* // static getDerivedStateFromProps(nextProps, prevState){' '} */}
      {
        //   if (!nextProps.userProfile.userDetails) {
        //     return null;
        //   }
        //   if (
        //     nextProps.userProfile.userDetails.address !== prevState.address ||
        //     nextProps.userProfile.userDetails.country !== prevState.country ||
        //     nextProps.userProfile.userDetails.firstName !== prevState.firstName ||
        //     nextProps.userProfile.userDetails.lastName !== prevState.lastName ||
        //     nextProps.userProfile.userDetails.name !== prevState.name ||
        //     // nextProps.userProfile.userDetails.imageUrl !== prevState.imageUrl ||
        //     nextProps.userProfile.userDetails.phone !== prevState.phone
        //     // nextProps.updateUserProfile.userDetails.imageUrl !== prevState.imageUrl
        //   ) {
        //     return {
        //       address: nextProps.userProfile.userDetails.address,
        //       country: nextProps.userProfile.userDetails.country,
        //       firstName: nextProps.userProfile.userDetails.firstName,
        //       lastName: nextProps.userProfile.userDetails.lastName,
        //       name: nextProps.userProfile.userDetails.name,
        //       // imageUrl: nextProps.userProfile.userDetails.imageUrl,
        //       phone: nextProps.userProfile.userDetails.phone
        //       // imageUrl: nextProps.userProfile.userDetails.imageUrl
        //       // imageUrl: nextProps.updateUserProfile.userDetails.imageUrl
        //     };
        //   }
        //   return null;
        //   console.log('this is props', nextProps.userProfile.userDetails.id);
        //   console.log('this is state', prevState);
      }
    </div>
  );
}

export default Notfound;
