(this.webpackJsonpfindart=this.webpackJsonpfindart||[]).push([[0],{109:function(e,t,a){e.exports=a(150)},120:function(e,t,a){},137:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=a(8),s=a(91),c=a(26),u=a(63),m=a(92),d=a(93),p=a.n(d),f=a(18),h="CLEAR_ERROR",g={authenticated:!1,ui_loading:!1,errors_login:null,errors_signup:null},E={usersProfile:[],userProfile:{}},b={singleArtwork:{},artworks:[],userArtworks:[],artworkbidMessage:[],createArtworkMessage:""},v={key:"root",storage:p.a,whitelist:["auth"]},y=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(f.a)({},e,{ui_loading:!1,authenticated:!0});case"SET_UNAUTHENTICATED":return Object(f.a)({},e,{authenticated:!1,errors_login:null,ui_loading:!1});case"SET_ERROR_LOGIN":return Object(f.a)({},e,{errors_login:t.payload,ui_loading:!1});case"SET_ERROR_SIGNUP":return Object(f.a)({},e,{errors_signup:t.payload,ui_loading:!1});case"UI_LOADING":return Object(f.a)({},e,{ui_loading:!0});case"UI_NOLOADING":case h:return Object(f.a)({},e,{ui_loading:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROFILE":return Object(f.a)({},e,{userProfile:t.payload});case"USERS_PROFILE":return Object(f.a)({},e,{usersProfile:t.payload});case"UPDATE_PROFILE":return Object(f.a)({},e,{usersProfile:e.usersProfile.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case h:return Object(f.a)({},e);default:return e}},artwork:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTTWORK":return Object(f.a)({},e,{singleArtwork:t.payload});case"GET_ARTTWORKS":return Object(f.a)({},e,{artworks:t.payload});case"BID_ARTTWORK":case"BID_MESSAGE":return Object(f.a)({},e,{artworkbidMessage:t.payload});case"MY_ARTWORKS":return Object(f.a)({},e,{userArtworks:t.payload});case"CREATE_ARTWORK":return Object(f.a)({},e,{createArtworkMessage:t.payload});case h:return Object(f.a)({},e);default:return e}}}),k=Object(u.a)(v,y),w=[m.a],N=Object(c.e)(k,{},Object(c.d)(c.a.apply(void 0,w),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),O=Object(u.b)(N),j=a(11),A=a(12),I=a(14),S=a(13),D=a(15),_=a(19),T=a(38),U=(a(120),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).closeButton=function(){document.getElementById("mySideNav").style.width="0px"},a.openButton=function(){document.getElementById("mySideNav").style.width="300px"},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"mySideNav",className:"sidenav"},r.a.createElement("div",{className:"item"}," ",r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"About")),r.a.createElement("div",{className:"item"},r.a.createElement("button",{style:{marginLeft:"3em",background:"white"},onClick:this.closeButton},"close"))),r.a.createElement("button",{style:{marginLeft:"16em"},onClick:this.openButton},"Open"))}}]),t}(n.Component)),C=a(17),R=a.n(C),P=function(){return function(e){e({type:"UI_LOADING"}),R.a.post("https://findartt.herokuapp.com/api/v1/auth/logout").then((function(t){delete R.a.defaults.headers.common.Authorization,localStorage.removeItem("token"),e({type:"SET_UNAUTHENTICATED"}),e({type:h})})).catch((function(e){console.log(e)}))}},B=(a(137),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).signoutUser=function(){a.props.logout()},a.closeButton=function(){document.getElementById("mySideNav").style.cssText="width: 0px",document.querySelector("body").style.cssText="overflow: visible; opacity:1"},a.openButton=function(){document.getElementById("mySideNav").style.cssText="width: 300px; opacity:1",document.querySelector("body").style.cssText="overflow: hidden"},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return!0===this.props.authenticated?r.a.createElement("div",null,r.a.createElement("div",{id:"mySideNav",className:"sidenav"},r.a.createElement("div",{className:"nav-share-link"},r.a.createElement("i",{className:"fas fa-bars open-bars",onClick:this.closeButton})),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(_.b,{className:"style-link",to:"/artworks"},r.a.createElement("i",{className:"fas fa-image "})),r.a.createElement(_.b,{className:"style-link",to:"/artworks"},r.a.createElement("div",{className:"nav-link"},"Artworks"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(_.b,{className:"style-link",to:"/user/profile"},r.a.createElement("i",{className:"fas fa-user-circle "})),r.a.createElement(_.b,{className:"style-link",to:"/user/profile"},r.a.createElement("div",{className:"nav-link"},"Profile"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(_.b,{className:"style-link ",to:"/user/myartworks"},r.a.createElement("i",{className:"fas fa-image "})),r.a.createElement(_.b,{className:"style-link",to:"/user/myartworks"},r.a.createElement("div",{className:"nav-link"},"My Artworks"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(_.b,{className:"style-link",to:"/logout"},r.a.createElement("i",{className:"fas fa-sign-out-alt "})),r.a.createElement("div",{className:"nav-link",onClick:this.signoutUser},"logout ",this.props.logoutInfo.ui_loading))),r.a.createElement("i",{className:"fas fa-bars close-bars",onClick:this.openButton})):null}}]),t}(n.Component)),x=Object(i.b)((function(e){return{authenticated:e.auth.authenticated,logoutInfo:e.auth}}),{logout:P})(B),M=(a(81),function(e){function t(){return Object(j.a)(this,t),Object(I.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.artworks,t=e.id,a=e.imageUrl,n=e.name,o=e.description;return r.a.createElement("div",{className:"container-artwork-url"},r.a.createElement("div",null,r.a.createElement(_.b,{to:"/artwork/bid/".concat(t)},r.a.createElement("img",{className:"artwork-image",src:a,alt:"art work"}))),r.a.createElement("div",{className:"artwork-description"},r.a.createElement("div",{className:"des-first"},r.a.createElement("span",{className:"artwork-description-title "},"Art work name:")," ",n),r.a.createElement("div",null,r.a.createElement("span",{className:"artwork-description-title"},"Description:")," ",o)))}}]),t}(n.Component)),L=function(e){function t(){return Object(j.a)(this,t),Object(I.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getArtworks()}},{key:"render",value:function(){var e=this.props.artworks;return r.a.createElement("div",{className:"container-artworks"},e.map((function(e){return r.a.createElement(M,{Key:e.id,artworks:e})})))}}]),t}(n.Component),q=Object(i.b)((function(e){return{artworks:e.artwork.artworks}}),{getArtworks:function(){return function(e){e({type:"UI_LOADING"}),R.a.get("https://findartt.herokuapp.com/api/v1/art/find").then((function(t){e({type:"GET_ARTTWORKS",payload:t.data.data}),console.log(t.data.data)})).catch((function(e){console.log(e)})),e({type:h})}}})(L),F=a(22),G=a(57),W=a.n(G),V=a(89),K=a(186),Y=a(192),z=a(194),H=a(198),X=a(197),J=a(193),Q=a(195),$=a(202),Z=a(196),ee=Object(K.a)({root:{width:"100%"},container:{maxHeight:440}}),te=Object(i.b)((function(e){return{singleArtwork:e.artwork.singleArtwork,artworkbidMessage:e.artwork.artworkbidMessage}}),{getArtwork:function(e){return function(t){t({type:"UI_LOADING"}),R.a.get("https://findartt.herokuapp.com/api/v1/art/find/".concat(e,"/summary")).then((function(e){t({type:"GET_ARTTWORK",payload:e.data.data}),console.log(e.data.data)})).catch((function(e){console.log(e)})),t({type:h})}},artworkBid:function(e){return function(t){t({type:"UI_LOADING"}),R.a.post("https://findartt.herokuapp.com/api/v1/art/bid",e).then((function(e){t({type:"BID_ARTTWORK",payload:e.data.message}),console.log("bid",e.data.message)})).catch((function(e){t({type:"BID_MESSAGE",payload:e.response.data.message}),console.log(e.response.data.message)})),t({type:h})}}})((function(e){var t=parseFloat(""),a=Object(n.useState)({amount:t,artworkId:"",bidStatus:"",createdDate:"",createdDateEpoch:t,id:t,madeBy:t,updatedDate:"",updatedDateEpoch:t}),o=Object(F.a)(a,2),l=o[0],i=o[1],s=ee(),c=Object(n.useState)(0),u=Object(F.a)(c,2),m=u[0],d=u[1],p=Object(n.useState)(10),f=Object(F.a)(p,2),h=f[0],g=f[1];Object(n.useEffect)((function(){e.getArtwork(e.match.params.id)}),[l]);return e.singleArtwork.currentBid?(console.log("failed billed",e.artworkbidMessage.length),r.a.createElement("div",{className:"container-artworkbid"},r.a.createElement("img",{className:"artworkbid-image",src:e.singleArtwork.imageUrl,alt:"art work"}),r.a.createElement("div",{className:"date-created"},r.a.createElement("div",null," Date created: ",e.singleArtwork.createdDate),r.a.createElement("div",null,"Description: ",e.singleArtwork.description)," "),r.a.createElement("div",{className:"bid-container"},r.a.createElement("div",{className:"minimum-bid"},"Minimum bid:"," ",r.a.createElement("span",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}},"\u20a6"," "),e.singleArtwork.minimumAmount),r.a.createElement("div",{className:40===e.artworkbidMessage.length?"bid-message-failed":"bid-message-success"},e.artworkbidMessage),r.a.createElement("div",null,r.a.createElement("form",{className:"table-container",action:"",onSubmit:function(t){t.preventDefault();var a=l.amount,n=(l.artworkId,l.bidStatus,l.createdDate,l.createdDateEpoch,l.id,l.madeBy,l.updatedDate,l.updatedDateEpoch,{amount:a,artworkId:e.singleArtwork.currentBid.artworkId,bidStatus:e.singleArtwork.currentBid.bidStatus,createdDate:e.singleArtwork.currentBid.createdDate,createdDateEpoch:e.singleArtwork.createdDateEpoch,id:e.singleArtwork.currentBid.id,madeBy:e.singleArtwork.currentBid.madeBy,updatedDate:e.singleArtwork.currentBid.updatedDate,updatedDateEpoch:e.singleArtwork.currentBid.updatedDateEpoch});e.artworkBid(n,e.history),i({amount:""})}},r.a.createElement(V.a,{id:"amount",name:"amount",type:"number",label:"Your bid amount",value:l.amount,onChange:function(e){i({amount:e.target.value})},fullWidth:!0,required:!0}),r.a.createElement("button",{className:"btn-art"},"Make a Bid"))),r.a.createElement(Y.a,{className:s.root},r.a.createElement(J.a,{className:s.container},r.a.createElement(z.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(Q.a,null,r.a.createElement(Z.a,null,r.a.createElement(X.a,null,"Bids"),r.a.createElement(X.a,null,"Date"))),r.a.createElement(H.a,null,e.singleArtwork.bids.slice(m*h,m*h+h).map((function(e){return r.a.createElement(Z.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},r.a.createElement(X.a,null,r.a.createElement("span",null,r.a.createElement("span",null,"\u20a6")),e.amount),r.a.createElement(X.a,null,r.a.createElement(W.a,{format:"D MMM YYYY",withTitle:!0},e.updatedDate)))}))))),r.a.createElement($.a,{rowsPerPageOptions:[5,10,20],component:"div",count:e.singleArtwork.bids.length,rowsPerPage:h,page:m,onChangePage:function(e,t){d(t)},onChangeRowsPerPage:function(e){g(+e.target.value),d(0)}}))))):r.a.createElement("div",{className:"preload-artwork-container"}," ",r.a.createElement("div",{className:"preloading"}),r.a.createElement("div",{className:"preloading-bottom"}))})),ae=(a(82),function(){return function(e){R.a.get("https://findartt.herokuapp.com/api/v1/users").then((function(t){e({type:"USER_PROFILE",payload:t.data.data}),e({type:h})})).catch((function(e){console.log(e)}))}}),ne=function(e){function t(){return Object(j.a)(this,t),Object(I.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){if(!this.props.userProfile.userDetails)return r.a.createElement("div",{className:"preloading-profile"});var e=this.props.userProfile.userDetails,t=(e.imageUrl,e.name),a=e.phone,n=e.dateOfBirth,o=e.country,l=e.address;return r.a.createElement("div",{className:"profile-container"},r.a.createElement("img",{className:"profile-image",src:"https://ipsumimage.appspot.com/640x360",alt:"profile picture"}),r.a.createElement("div",{className:"profile-container-item profile-username"},r.a.createElement("i",{className:"fas fa-at"})," ",t),r.a.createElement("div",{className:"profile-container-item "},""===a?null:r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-mobile-alt"})," ",a)),r.a.createElement("div",{className:"profile-container-item"},""===n?null:r.a.createElement("span",null,"DOB:"," ",r.a.createElement(W.a,{format:"D MMM YYYY",withTitle:!0},n))),r.a.createElement("div",{className:"profile-container-item"},""===o?null:r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-globe-africa"})," ",o)),r.a.createElement("div",{className:"profile-container-item"},""===l?null:r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-map-marker-alt"})," ",l)),r.a.createElement("div",null,r.a.createElement(_.b,{to:"/user/profile/update/".concat(this.props.userProfile.userDetails.id)},r.a.createElement("button",{className:"profile-btn"},"Update profile"))))}}]),t}(n.Component),re=Object(i.b)((function(e){return{userProfile:e.user.userProfile}}),{getUserData:ae})(ne),oe=a(61),le=a.n(oe);a(151);le.a.initializeApp({apiKey:"AIzaSyBXgrToAEbwvI-4HOPA2gGQxek8sKc-B8Q",authDomain:"findartt.firebaseapp.com",databaseURL:"https://findartt.firebaseio.com",projectId:"findartt",storageBucket:"findartt.appspot.com",messagingSenderId:"405378603130",appId:"1:405378603130:web:d9d785e89017bfa40903c3"});var ie=le.a.storage(),se=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(I.a)(this,Object(S.a)(t).call(this,e))).handleImageEditChange=function(){document.getElementById("imageUrl").click()},a.handleSubmit=function(e){e.preventDefault(),console.log("ref",a.nameInput.current.value),console.log("here is state",a.state);var t={name:a.nameInput.current.value,firstName:a.firstNameInput.current.value,lastName:a.lastNameInput.current.value,country:a.countryInput.current.value,address:a.addressInput.current.value,phone:a.phoneInput.current.value,imageUrl:a.state.url};console.log("update",t),a.props.updateUserProfile(t,a.props.history)},a.nameInput=r.a.createRef(),a.countryInput=r.a.createRef(),a.firstNameInput=r.a.createRef(),a.lastNameInput=r.a.createRef(),a.addressInput=r.a.createRef(),a.phoneInput=r.a.createRef(),console.log("ref",a.nameInput),a.state={file:"",imagePreviewUrl:"",url:"",imgDesplay:"",id:""},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id.id;this.props.getUserData(e)}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];ie.ref("images/".concat(n.name)).put(n).on("state_changed",(function(e){console.log(e)}),(function(e){console.log(e)}),(function(){ie.ref("images").child(n.name).getDownloadURL().then((function(e){t.setState({url:e})}))})),a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this;if(!this.props.userProfile.userDetails)return r.a.createElement("div",{className:"preloading-profile"});this.props.userProfile.userDetails.imageUrl;var t=this.state,a=(t.imagePreviewUrl,t.url);return console.log("here is props",this.props),r.a.createElement("div",{className:"profile-container"},r.a.createElement("img",{className:"profile-image",src:"".concat(a)||"https://ipsumimage.appspot.com/640x360",alt:"profilePicture"}),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},r.a.createElement("input",{className:"profile-picture-upload",id:"imageUrl",name:"imageUrl",type:"file",accept:"image/png, image/jpeg",label:"imageUrl",hidden:"hidden",onChange:function(t){return e.handleImageChange(t)}}),r.a.createElement("i",{onClick:this.handleImageEditChange,className:"fas fa-pencil-alt pencil"}),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"nameInput",className:"profile-label"},"User name"),r.a.createElement("input",{className:"profile-input",type:"text",name:"nameInput",ref:this.nameInput,defaultValue:this.props.userProfile.userDetails.name})),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"firstName",className:"profile-label"},"First name"),r.a.createElement("input",{className:"profile-input",name:"firstName",type:"text",ref:this.firstNameInput,defaultValue:this.props.userProfile.userDetails.firstName})),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"lastName",className:"profile-label"},"Last name"),r.a.createElement("input",{className:"profile-input",name:"lastName",type:"text",ref:this.lastNameInput,defaultValue:this.props.userProfile.userDetails.lastName})),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"phone",className:"profile-label"},"Phone no"),r.a.createElement("input",{className:"profile-input",name:"phone",type:"tel",ref:this.phoneInput,defaultValue:this.props.userProfile.userDetails.phone})),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"country",className:"profile-label"},"Address"),r.a.createElement("input",{className:"profile-input",name:"address",type:"text",ref:this.addressInput,defaultValue:this.props.userProfile.userDetails.address})),r.a.createElement("div",{className:"container-profile-input"},r.a.createElement("label",{htmlFor:"country",className:"profile-label"},"Country"),r.a.createElement("input",{className:"profile-input",name:"country",type:"text",ref:this.countryInput,defaultValue:this.props.userProfile.userDetails.country})),r.a.createElement("button",{className:"profile-btn"},"save")))}}]),t}(n.Component),ce=Object(i.b)((function(e){return{userProfile:e.user.userProfile}}),{getUserData:ae,updateUserProfile:function(e,t){return function(a){R.a.post("https://findartt.herokuapp.com/api/v1/users/update",e).then((function(){a((function(e){R.a.get("https://findartt.herokuapp.com/api/v1/users/all").then((function(t){e({type:"USERS_PROFILE",payload:t.data.data}),e({type:h})})).catch((function(e){console.log(e)}))})),a({type:h}),t.push("/user/profile")})).catch((function(e){console.log(e)}))}}})(se),ue=(a(84),function(e){var t=e.userArtworks,a=t.imageUrl,n=t.name,o=t.description;return r.a.createElement("div",{className:"container-myartwork-url"},r.a.createElement("img",{className:"myartwork-url",src:a,alt:"art work"}),r.a.createElement("div",{className:"myartwork-description"},"Artwork name: ",n),r.a.createElement("div",{className:"myartwork-description"},"Description: ",o))}),me=Object(i.b)((function(e){return{userArtworks:e.artwork.userArtworks,createArtworkMessage:e.artwork}}),{myArtworks:function(){return function(e){e({type:"UI_LOADING"}),R.a.get("https://findartt.herokuapp.com/api/v1/art/owner/find").then((function(t){e({type:"MY_ARTWORKS",payload:t.data.data})})).catch((function(e){console.log(e)})),e({type:h})}},createArtwork:function(e){return function(t){R.a.post("https://findartt.herokuapp.com/api/v1/art/create",e).then((function(e){t({type:"CREATE_ARTWORK",payload:e.data.message})})).catch((function(e){console.log(e)})),t({type:h})}}})((function(e){var t=Object(n.useState)(""),a=Object(F.a)(t,2),o=(a[0],a[1]),l=Object(n.useState)({imageUrl:""}),i=Object(F.a)(l,2),s=i[0],c=i[1],u=Object(n.useState)(""),m=Object(F.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)({videoUrl:""}),h=Object(F.a)(f,2),g=h[0],E=h[1],b=Object(n.useState)(0),v=Object(F.a)(b,2),y=v[0],k=v[1],w=Object(n.useState)(0),N=Object(F.a)(w,2),O=N[0],j=N[1];Object(n.useEffect)((function(){e.myArtworks(),console.log("hello")}),[]);var A=Object(n.useState)({name:""}),I=Object(F.a)(A,2),S=I[0],D=I[1],_=Object(n.useState)({description:""}),T=Object(F.a)(_,2),U=T[0],C=T[1],R=Object(n.useState)({minimumAmount:parseFloat("")}),P=Object(F.a)(R,2),B=P[0],x=P[1],M=e.userArtworks;console.log("myartwork",e),console.log("createmyartworkMeassage",e.createArtworkMessage.createArtworkMessage.length);return r.a.createElement("div",null,r.a.createElement("div",{className:"add-myartwork-form"},r.a.createElement("div",{className:"close-create-artwork"},r.a.createElement("i",{onClick:function(){var e=document.querySelector(".container-myartwork"),t=document.querySelector(".add-myartwork-form"),a=document.querySelector(".add-myartwork"),n=document.querySelector("body");e.style.cssText="overflow:visible; opacity:1",t.style="display:none;",a.style="display:block",n.style="overflow:visible",console.log("clicked 2 2 2")},className:"far fa-window-close close-create-artwork"})),r.a.createElement("div",{style:{color:"blue",fontSize:"1.2em"}},e.createArtworkMessage.createArtworkMessage),r.a.createElement("div",{className:"container-createartwork-input"},r.a.createElement("progress",{value:y,max:"100",className:"progress-bar-1"}),r.a.createElement("input",{id:"fileUrl",className:"create-image-upload",type:"file",accept:"image/png, image/jpeg, video/*",hidden:"hidden",onChange:function(e){return function(e){e.preventDefault();var t=e.target.files[0];o(t),ie.ref("createdartworks/".concat(t.name)).put(t).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);k(t)}),(function(e){console.log(e)}),(function(){ie.ref("createdartworks").child(t.name).getDownloadURL().then((function(e){c({imageUrl:e})}))}))}(e)}}),r.a.createElement("button",{onClick:function(){document.getElementById("fileUrl").click()},className:"change-btn"},"Add Artwork")),r.a.createElement("div",{className:"container-createartwork-input"},r.a.createElement("progress",{value:O,max:"100",className:"progress-bar"}),r.a.createElement("input",{type:"file",accept:"video/*",onChange:function(e){return function(e){e.preventDefault();var t=e.target.files[0];p(t)}(e)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),ie.ref("createdartworks/".concat(d.name)).put(d).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);j(t)}),(function(e){console.log(e)}),(function(){ie.ref("createdartworks").child(d.name).getDownloadURL().then((function(e){E(e)}))}))},className:"change-btn"},"Upload video")),r.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault();var a=S.name,n=B.minimumAmount,r=U.description,o=g.videoUrl,l={description:r,imageUrl:s.imageUrl,minimumAmount:n,name:a,posted:!0,purchaseType:"BID",videoUrl:o};e.createArtwork(l,e.history),D({name:""}),C({description:""}),x({minimumAmount:parseFloat("")})}},r.a.createElement("div",{className:"container-createartwork-input"},r.a.createElement("label",{htmlFor:""},"Artwork name:"),r.a.createElement("input",{className:"createartwork-input",type:"text",name:"name",value:S.name,onChange:function(e){D({name:e.target.value})},placeholder:"Enter artwork name",required:!0})),r.a.createElement("div",{className:"container-createartwork-input "},r.a.createElement("label",{htmlFor:""},"Artwork description:"),r.a.createElement("textarea",{className:"createartwork-input description",name:"description",value:U.description,onChange:function(e){C({description:e.target.value})},placeholder:"Enter artwork description",row:"4",cols:"50",required:!0})),r.a.createElement("div",{className:"container-createartwork-input"},r.a.createElement("label",{htmlFor:""},"Enter minimum bid amount:"),r.a.createElement("input",{className:"createartwork-input",type:"number",name:"minimumAmount",value:B.minimumAmount,onChange:function(e){x({minimumAmount:e.target.value})},placeholder:"Enter minimum bid",required:!0})),r.a.createElement("button",{className:"change-btn"},"Create artwork"))),r.a.createElement("div",{className:"myartwork"},r.a.createElement("i",{onClick:function(){var e=document.querySelector(".container-myartwork"),t=document.querySelector(".add-myartwork-form"),a=document.querySelector(".add-myartwork"),n=document.querySelector("body");e.style.cssText="overflow:hidden; opacity:0.1",t.style.cssText="display:block; opacity:1",a.style="display:none",n.style="overflow:hidden",console.log("clicked")},className:"fas fa-plus add-myartwork"})),r.a.createElement("div",{className:"container-myartwork"},M.map((function(e){return r.a.createElement(ue,{key:e.id,userArtworks:e})}))))})),de=a(96),pe=Object(i.b)((function(e){return{authenticated:e.auth.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(de.a)(e,["component","authenticated"]);return r.a.createElement(T.b,Object.assign({},n,{render:function(e){var n=localStorage.getItem("token");return R.a.defaults.headers.common.Authorization=n,!0===a?r.a.createElement(t,e):r.a.createElement(T.a,{to:"/"})}}))})),fe=a(45),he=(a(85),a(199)),ge=a(62),Ee=a.n(ge),be=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(I.a)(this,Object(S.a)(t).call(this))).googleLogin=function(){e.props.googleSignin()},e.handleChange=function(t){e.setState(Object(fe.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.signinUser(n,e.props.history),e.setState({email:"",password:""})},e.state={email:"",password:""},e}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){if(!0!==this.props.authenticated){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"form-container"},r.a.createElement("img",{className:"art-logo",src:Ee.a,alt:"logo"}),r.a.createElement("hr",null),r.a.createElement("h1",{className:"form-bid"},"Artwork market place")," ",r.a.createElement("div",{className:"form-box"},r.a.createElement("div",null,this.props.signinInfo.errors_login?r.a.createElement("h3",{style:{color:"red"}},this.props.signinInfo.errors_login):null),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",value:t,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"password",name:"password",type:"password",label:"Password",value:a,onChange:this.handleChange,fullWidth:!0,required:!0,style:{marginBottom:"1rem"}}),r.a.createElement("button",{className:"btn-default",disabled:this.props.signinInfo.ui_loading},"Login",this.props.signinInfo.ui_loading&&r.a.createElement(he.a,{className:"btn-default-progress",disableShrink:!0,size:"1.3rem",thickness:"10"}))),r.a.createElement("div",null,"Don't have an account"," ",r.a.createElement(_.b,{to:"/signup"},r.a.createElement("span",null,"Sign up for free"))," ")))}return r.a.createElement("div",null,"You are already login Navigate pages")}}]),t}(n.Component),ve=Object(i.b)((function(e){return{signinInfo:e.auth,authenticated:e.auth.authenticated}}),{signinUser:function(e,t){return function(a){a({type:"UI_LOADING"}),R.a.post("https://findartt.herokuapp.com/api/v1/auth/login",e).then((function(e){var n=e.data.data.tokenInfo.accessToken;localStorage.setItem("token",n),R.a.defaults.headers.common.Authorization=n,a({type:"SET_AUTHENTICATED"}),a({type:h}),t.push("/artworks")})).catch((function(e){console.log(e.response.data.message),a({type:"SET_ERROR_LOGIN",payload:e.response.data.message})}))}},googleSignin:function(e){return function(t){t({type:"UI_LOADING"}),R.a.post("https://findartt.herokuapp.com/api/v1/auth/login/google").then((function(a){var n=a.data.data.tokenInfo.accessToken;localStorage.setItem("token",n),R.a.defaults.headers.common.Authorization=n,t({type:"SET_AUTHENTICATED"}),t({type:h}),e.push("/artworks")})).catch((function(e){console.log(e.response.data.message),t({type:"SET_ERROR_LOGIN",payload:e.response.data.message})}))}}})(be),ye=a(55),ke=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(I.a)(this,Object(S.a)(t).call(this))).handleChange=function(t){e.setState(Object(fe.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,firstName:a.firstName,lastName:a.lastName,phone:a.phone,country:a.country,password:a.password};e.props.signupUser(n,e.props.history),e.setState({email:"",firstName:"",lastName:"",phone:"",country:"",password:"",repeatPassword:""})},e.state={email:"",firstName:"",lastName:"",phone:"",country:"",password:"",repeatPassword:""},e}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;ye.ValidatorForm.addValidationRule("isPasswordMatch",(function(t){return t===e.state.password}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.firstName,n=e.lastName,o=e.phone,l=e.country,i=e.password,s=e.repeatPassword;return r.a.createElement("div",{className:"form-container"},r.a.createElement("img",{className:"art-logo",src:Ee.a,alt:"logo"}),r.a.createElement("hr",null),r.a.createElement("h1",{className:"form-bid"},"Artwork market place")," ",r.a.createElement("div",{className:"form-box"},r.a.createElement("div",null,this.props.signupInfo.errors_signup?r.a.createElement("h3",{style:{color:"red"}},this.props.signupInfo.errors_signup):null),r.a.createElement(ye.ValidatorForm,{onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",value:t,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"firstName",name:"firstName",type:"firstName",label:"First name",value:a,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"lastName",name:"lastName",type:"lastName",label:"Last name",value:n,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"phone",name:"phone",type:"tel",label:"Phone",value:o,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"country",name:"country",type:"country",label:"Country",value:l,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(ye.TextValidator,{label:"Password",onChange:this.handleChange,name:"password",type:"password",validators:["required"],errorMessages:["this field is required"],value:i,fullWidth:!0}),r.a.createElement(ye.TextValidator,{label:"Confirm password",onChange:this.handleChange,name:"repeatPassword",type:"password",validators:["isPasswordMatch","required"],errorMessages:["password mismatch","this field is required"],value:s,fullWidth:!0,style:{marginBottom:"1rem"}}),r.a.createElement("button",{className:"btn-default"},"Sign Up",this.props.signupInfo.ui_loading&&r.a.createElement(he.a,{className:"btn-default-progress",disableShrink:!0,size:"1.3rem",thickness:"10"}))),r.a.createElement("div",null,"Already have an account"," ",r.a.createElement(_.b,{to:"/"},r.a.createElement("span",null,"Login")))))}}]),t}(n.Component),we=Object(i.b)((function(e){return{signupInfo:e.auth}}),{signupUser:function(e,t){return function(a){a({type:"UI_LOADING"}),R.a.post("https://findartt.herokuapp.com/api/v1/auth/signup",e).then((function(e){var n=e.data.data.tokenInfo.accessToken;localStorage.setItem("token",n),R.a.defaults.headers.common.Authorization=n,a({type:"SET_AUTHENTICATED"}),a({type:h}),t.push("/artworks")})).catch((function(e){a({type:"SET_ERROR_SIGNUP",payload:e.response.data.message}),console.log(e.response.data.message)}))}}})(ke),Ne=a(200),Oe=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).signoutUser=function(){a.props.logout(a.props.history)},a}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn-default",onClick:this.signoutUser},"logout",this.props.logoutInfo.ui_loading&&r.a.createElement(Ne.a,{style:{zindex:"5"},variant:"query"})))}}]),t}(n.Component),je=Object(i.b)((function(e){return{logoutInfo:e.auth}}),{logout:P})(Oe),Ae=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(I.a)(this,Object(S.a)(t).call(this))).onclick=function(){e.setState({name:"yak"}),console.log("here",e.state)},e.state={name:""},e}return Object(D.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:"akwe"}),console.log("we",this.state)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"hello"),r.a.createElement("button",{onClick:this.onclick},"click"))}}]),t}(n.Component),Ie=Object(i.b)((function(e){return{singleArwork:e.artwork}}))((function(e){return console.log(e),r.a.createElement("div",null,"hello world")})),Se=function(e){function t(){return Object(j.a)(this,t),Object(I.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement(x,null),r.a.createElement("div",null,r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",component:ve}),r.a.createElement(T.b,{exact:!0,path:"/signup",component:we}),r.a.createElement(T.b,{exact:!0,path:"/hello",component:Ae}),r.a.createElement(pe,{exact:!0,path:"/logout",component:je}),r.a.createElement(pe,{exact:!0,path:"/artworks",component:q}),r.a.createElement(pe,{exact:!0,path:"/artwork/bid/:id",component:te}),r.a.createElement(pe,{exact:!0,path:"/user/myartworks",component:me}),r.a.createElement(pe,{exact:!0,path:"/user/profile",component:re}),r.a.createElement(pe,{exact:!0,path:"/user/profile/update/:id",component:ce}),r.a.createElement(pe,{exact:!0,path:"/pagination",component:Ie}),r.a.createElement(T.b,{exact:!0,path:"/settings",component:U}))))}}]),t}(n.Component);a(149);var De=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{store:N},r.a.createElement(s.a,{loading:null,persistor:O},r.a.createElement(Se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,a){e.exports=a.p+"static/media/findart.6373ddf2.png"},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.abe8782b.chunk.js.map