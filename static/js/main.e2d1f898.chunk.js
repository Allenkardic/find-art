(this.webpackJsonpfindart=this.webpackJsonpfindart||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),s=a(11),l=a(75),c=a(22),u=a(47),m=a(76),d=a(77),p=a.n(d),h=a(16),f="CLEAR_ERROR",g={authenticated:!1,ui_loading:!1,errors_login:null,errors_signup:null},E={usersProfile:[],userProfile:{}},b={singleArtwork:{},artworks:[],userArtworks:[],artworkbidMessage:[]},v={key:"root",storage:p.a,whitelist:["auth"]},y=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(h.a)({},e,{ui_loading:!1,authenticated:!0});case"SET_UNAUTHENTICATED":return Object(h.a)({},e,{authenticated:!1,errors_login:null,ui_loading:!1});case"SET_ERROR_LOGIN":return Object(h.a)({},e,{errors_login:t.payload,ui_loading:!1});case"SET_ERROR_SIGNUP":return Object(h.a)({},e,{errors_signup:t.payload,ui_loading:!1});case"UI_LOADING":return Object(h.a)({},e,{ui_loading:!0});case"UI_NOLOADING":case f:return Object(h.a)({},e,{ui_loading:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROFILE":return Object(h.a)({},e,{userProfile:t.payload});case"USERS_PROFILE":return Object(h.a)({},e,{usersProfile:t.payload});case"UPDATE_PROFILE":return Object(h.a)({},e,{usersProfile:e.usersProfile.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case f:return Object(h.a)({},e);default:return e}},artwork:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTTWORK":return Object(h.a)({},e,{singleArtwork:t.payload});case"GET_ARTTWORKS":return Object(h.a)({},e,{artworks:t.payload});case"BID_ARTTWORK":case"BID_MESSAGE":return Object(h.a)({},e,{artworkbidMessage:t.payload});case"MY_ARTWORKS":return Object(h.a)({},e,{userArtworks:t.payload});case f:return Object(h.a)({},e);default:return e}}}),k=Object(u.a)(v,y),N=[m.a],O=Object(c.e)(k,{},Object(c.d)(c.a.apply(void 0,N),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),w=Object(u.b)(O),j=a(6),A=a(7),D=a(9),I=a(8),_=a(10),S=a(15),C=a(29),T=(a(95),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).closeButton=function(){document.getElementById("mySideNav").style.width="0px"},a.openButton=function(){document.getElementById("mySideNav").style.width="300px"},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"mySideNav",className:"sidenav"},r.a.createElement("div",{className:"item"}," ",r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"our services"),r.a.createElement("div",null,"About")),r.a.createElement("div",{className:"item"},r.a.createElement("button",{style:{marginLeft:"3em",background:"white"},onClick:this.closeButton},"close"))),r.a.createElement("button",{style:{marginLeft:"16em"},onClick:this.openButton},"Open"))}}]),t}(n.Component)),P=(a(96),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).closeButton=function(){document.getElementById("mySideNav").style.width="0px"},a.openButton=function(){document.getElementById("mySideNav").style.width="300px"},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return!0===this.props.authenticated?r.a.createElement("div",null,r.a.createElement("div",{id:"mySideNav",className:"sidenav"},r.a.createElement("div",{className:"nav-share-link"},r.a.createElement("i",{className:"fas fa-bars open-bars",onClick:this.closeButton})),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(S.b,{className:"style-link",to:"/artworks"},r.a.createElement("i",{className:"fas fa-image "})),r.a.createElement(S.b,{className:"style-link",to:"/artworks"},r.a.createElement("div",{className:"nav-link"},"Artworks"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(S.b,{className:"style-link",to:"/user/profile"},r.a.createElement("i",{className:"fas fa-user-circle "})),r.a.createElement(S.b,{className:"style-link",to:"/user/profile"},r.a.createElement("div",{className:"nav-link"},"Profile"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(S.b,{className:"style-link ",to:"/user/myartworks"},r.a.createElement("i",{className:"fas fa-image "})),r.a.createElement(S.b,{className:"style-link",to:"/user/myartworks"},r.a.createElement("div",{className:"nav-link"},"My Artworks"))),r.a.createElement("div",{className:"nav-share-link"},r.a.createElement(S.b,{className:"style-link",to:"/logout"},r.a.createElement("i",{className:"fas fa-sign-out-alt "})),r.a.createElement(S.b,{className:"style-link",to:"/logout"},r.a.createElement("div",{className:"nav-link"},"logout")))),r.a.createElement("i",{className:"fas fa-bars close-bars",onClick:this.openButton})):null}}]),t}(n.Component)),U=Object(s.b)((function(e){return{authenticated:e.auth.authenticated}}))(P),R=a(17),B=a.n(R),x=(a(50),function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.artworks,t=e.id,a=e.imageUrl,n=e.name,o=e.description;return r.a.createElement("div",{className:"container-home-url"},r.a.createElement("div",null,r.a.createElement(S.b,{to:"/artwork/bid/".concat(t)},r.a.createElement("img",{className:"home-url",src:a,alt:"art work"}))),r.a.createElement("div",{className:"home-description"},r.a.createElement("h3",{style:{color:"red",marginBottom:"1rem"}},"Click on art work to make bid"),r.a.createElement("div",null,"Art work name: ",n),r.a.createElement("div",null,"Description: ",o)))}}]),t}(n.Component)),L=function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getArtworks(),console.log("props",this.props)}},{key:"render",value:function(){var e=this.props.artworks;return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(x,{Key:e.id,artworks:e})})))}}]),t}(n.Component),M=Object(s.b)((function(e){return{artworks:e.artwork.artworks}}),{getArtworks:function(){return function(e){e({type:"UI_LOADING"}),B.a.get("https://findartt.herokuapp.com/api/v1/art/find").then((function(t){e({type:"GET_ARTTWORKS",payload:t.data.data}),console.log(t.data.data)})).catch((function(e){console.log(e)})),e({type:f})}}})(L),W=a(26),G=a(42),q=a.n(G),V=a(73),F=function(e){function t(){var e;Object(j.a)(this,t),(e=Object(D.a)(this,Object(I.a)(t).call(this))).handleChange=function(t){e.setState(Object(W.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.amount;a.artworkId,a.bidStatus,a.createdDate,a.createdDateEpoch,a.id,a.madeBy,a.updatedDate,a.updatedDateEpoch;if(!e.props.singleArtwork.currentBid)return r.a.createElement("div",{className:"preloading"});var o={amount:n,artworkId:e.props.singleArtwork.currentBid.artworkId,bidStatus:e.props.singleArtwork.currentBid.bidStatus,createdDate:e.props.singleArtwork.currentBid.createdDate,createdDateEpoch:e.props.singleArtwork.createdDateEpoch,id:e.props.singleArtwork.currentBid.id,madeBy:e.props.singleArtwork.currentBid.madeBy,updatedDate:e.props.singleArtwork.currentBid.updatedDate,updatedDateEpoch:e.props.singleArtwork.currentBid.updatedDateEpoch};e.props.artworkBid(o,e.props.history),e.setState({amount:""})};var a=parseFloat("");return e.state={amount:a,artworkId:"",bidStatus:"",createdDate:"",createdDateEpoch:a,id:a,madeBy:a,updatedDate:"",updatedDateEpoch:a},e}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getArtwork(this.props.match.params.id)}},{key:"render",value:function(){return console.log("After mount artworkBid",this.props),this.props.singleArtwork.currentBid?(console.log(this.props),r.a.createElement("div",{className:"container-home-url"},r.a.createElement("img",{className:"home-url",src:this.props.singleArtwork.imageUrl,alt:"art work"}),r.a.createElement("div",{className:"date-created"},r.a.createElement("div",null," Date created: ",this.props.singleArtwork.createdDate),r.a.createElement("div",null,"Description: ",this.props.singleArtwork.description)," "),r.a.createElement("div",{className:"bid-container"},r.a.createElement("div",{className:"minimum-bid"},"Minimum bid:"," ",r.a.createElement("span",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}},"\u20a6"," "),this.props.singleArtwork.minimumAmount),this.props.singleArtwork.bids.map((function(e){return r.a.createElement("div",{className:"bid-amount"},r.a.createElement("div",{className:"bid-amount-item"},r.a.createElement("span",null,"\u20a6")," ",(e.id,e.amount)),r.a.createElement("div",{className:"bid-amount-item"},r.a.createElement(q.a,{format:"D MMM YYYY",withTitle:!0},e.updatedDate)))})),r.a.createElement("div",{className:"bid-message"},this.props.artworkbidMessage," "),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"amount",name:"amount",type:"number",label:"Your bid amount",value:this.state.amount,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement("button",{className:"btn-art"},"Make a Bid"))))):r.a.createElement("div",{className:"container-home-url"}," ",r.a.createElement("div",{className:"preloading"}),r.a.createElement("div",{className:"preloading-bottom"}))}}]),t}(n.Component),K=Object(s.b)((function(e){return{singleArtwork:e.artwork.singleArtwork,artworkbidMessage:e.artwork.artworkbidMessage}}),{getArtwork:function(e){return function(t){t({type:"UI_LOADING"}),B.a.get("https://findartt.herokuapp.com/api/v1/art/find/".concat(e,"/summary")).then((function(e){t({type:"GET_ARTTWORK",payload:e.data.data}),console.log(e.data.data)})).catch((function(e){console.log(e)})),t({type:f})}},artworkBid:function(e){return function(t){t({type:"UI_LOADING"}),B.a.post("https://findartt.herokuapp.com/api/v1/art/bid",e).then((function(e){t({type:"BID_ARTTWORK",payload:e.data.message}),console.log("bid",e.data.message)})).catch((function(e){t({type:"BID_MESSAGE",payload:e.response.data.message}),console.log(e.response.data.message)})),t({type:f})}}})(F),Y=(a(67),function(){return function(e){B.a.get("https://findartt.herokuapp.com/api/v1/users").then((function(t){e({type:"USER_PROFILE",payload:t.data.data}),e({type:f})})).catch((function(e){console.log(e)}))}}),z=function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){return this.props.userProfile.userDetails?r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",null,null!==this.props.userProfile.userDetails.imageUrl?r.a.createElement("img",{className:"profile-image",src:this.props.userProfile.userDetails.imageUrl}):r.a.createElement("div",{className:"profile-image-none"},r.a.createElement("i",{className:"fas fa-user-circle"})),r.a.createElement("div",{className:"profile-container-item"},"Username: ",this.props.userProfile.userDetails.name),r.a.createElement("div",{className:"profile-container-item"},"First name: ",this.props.userProfile.userDetails.firstName),r.a.createElement("div",{className:"profile-container-item"},"Last name: ",this.props.userProfile.userDetails.lastName),r.a.createElement("div",{className:"profile-container-item"},"Phone number: ",this.props.userProfile.userDetails.phone),r.a.createElement("div",{className:"profile-container-item"},"DOB:"," ",r.a.createElement(q.a,{format:"D MMM YYYY",withTitle:!0},this.props.userProfile.userDetails.dateOfBirth)),r.a.createElement("div",{className:"profile-container-item"},"Country: ",this.props.userProfile.userDetails.country),r.a.createElement("div",{className:"profile-container-item"},"Address: ",this.props.userProfile.userDetails.address)),r.a.createElement("div",null,r.a.createElement(S.b,{to:"/user/profile/update/".concat(this.props.userProfile.userDetails.id)},r.a.createElement("button",{className:"profile-btn"},"Update profile")))):r.a.createElement("div",{className:"preloading-profile"})}}]),t}(n.Component),H=Object(s.b)((function(e){return{userProfile:e.user.userProfile}}),{getUserData:Y})(z),X=a(44),J=a.n(X);a(126);J.a.initializeApp({apiKey:"AIzaSyBXgrToAEbwvI-4HOPA2gGQxek8sKc-B8Q",authDomain:"findartt.firebaseapp.com",databaseURL:"https://findartt.firebaseio.com",projectId:"findartt",storageBucket:"findartt.appspot.com",messagingSenderId:"405378603130",appId:"1:405378603130:web:d9d785e89017bfa40903c3"});var Q=J.a.storage(),$=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).handleImageEditChange=function(){document.getElementById("imageUrl").click()},a.handleSubmit=function(e){e.preventDefault(),console.log("hello",a.nameInput)},a.nameInput=r.a.createRef(),a.state={file:"",imagePreviewUrl:"",url:""},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id.id;this.props.getUserData(e)}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];Q.ref("images/".concat(n.name)).put(n).on("state_changed",(function(e){console.log(e)}),(function(e){console.log(e)}),(function(){Q.ref("images").child(n.name).getDownloadURL().then((function(e){t.setState({url:e}),console.log("here is url",t.state)}))})),console.log("here is the file",n.name),a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl;return this.props.userProfile.userDetails?r.a.createElement("div",{className:"profile-picture-upload"},t?r.a.createElement("img",{className:"profile-image",src:t,alt:"profilePicture"}):r.a.createElement("div",{className:"profile-image-none"},r.a.createElement("i",{className:"fas fa-user-circle"})),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit,noValidate:!0,autoComplete:"off"},r.a.createElement("input",{className:"profile-picture-upload",id:"imageUrl",name:"imageUrl",type:"file",accept:"image/png, image/jpeg",label:"imageUrl",hidden:"hidden",onChange:function(t){return e.handleImageChange(t)}}),r.a.createElement("i",{onClick:this.handleImageEditChange,className:"fas fa-pencil-alt pencil"}),r.a.createElement(V.a,{id:"address",name:"address",type:"text",label:"address",ref:this.addressIn,defaultValue:this.props.userProfile.userDetails.address,fullWidth:!0}),r.a.createElement(V.a,{id:"country",name:"country",type:"text",label:"country",ref:this.countryInput,defaultValue:this.props.userProfile.userDetails.country,fullWidth:!0}),r.a.createElement(V.a,{id:"firstName",name:"firstName",type:"text",label:"firstName",ref:this.firstNameInput,defaultValue:this.props.userProfile.userDetails.firstName,fullWidth:!0}),r.a.createElement(V.a,{id:"lastName",name:"lastName",type:"text",label:"lastName",ref:this.lastNameInput,defaultValue:this.props.userProfile.userDetails.lastName,fullWidth:!0}),r.a.createElement("input",{id:"name",name:"name",type:"text",label:"user name",ref:this.nameInput,defaultValue:this.props.userProfile.userDetails.name,inputProps:{"aria-label":"description"},fullWidth:!0}),r.a.createElement(V.a,{id:"phone",name:"phone",type:"tel",label:"phone",ref:this.phoneInput,defaultValue:this.props.userProfile.userDetails.phone,fullWidth:!0}),r.a.createElement("button",{className:"profile-btn"},"save"))):r.a.createElement("div",{className:"preloading-profile"})}}]),t}(n.Component),Z=Object(s.b)((function(e){return{userProfile:e.user.userProfile}}),{getUserData:Y,updateProfile:function(e,t){return function(a){B.a.post("https://findartt.herokuapp.com/api/v1/users/update",e).then((function(e){a({type:"UPDATE_PROFILE",payload:e.data.data}),a({type:f}),t.push("/user/profile")})).catch((function(e){console.log(e)}))}}})($),ee=function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.userArtworks,t=e.imageUrl,a=e.name,n=e.description;return r.a.createElement("div",{className:"container-home-url"},r.a.createElement("div",null,r.a.createElement("img",{className:"home-url",src:t,alt:"art work"})),r.a.createElement("div",{className:"home-description"},"Artwork name: ",a),r.a.createElement("div",{className:"home-description"},"Description: ",n))}}]),t}(n.Component),te=function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.myArtworks()}},{key:"render",value:function(){var e=this.props.userArtworks;return!1===e?r.a.createElement("div",{className:"container-home-url"}," ",r.a.createElement("div",{className:"preloading"}),r.a.createElement("div",{className:"preloading-bottom"})):r.a.createElement("div",null,e.map((function(e){return r.a.createElement(ee,{key:e.id,userArtworks:e})})),r.a.createElement("i",{className:"fas fa-plus"}))}}]),t}(n.Component),ae=Object(s.b)((function(e){return{userArtworks:e.artwork.userArtworks,authenticated:e.user.authenticated}}),{myArtworks:function(){return function(e){e({type:"UI_LOADING"}),B.a.get("https://findartt.herokuapp.com/api/v1/art/owner/find").then((function(t){e({type:"MY_ARTWORKS",payload:t.data.data})})).catch((function(e){console.log(e)})),e({type:f})}}})(te),ne=a(80),re=Object(s.b)((function(e){return{authenticated:e.auth.authenticated}}))((function(e){var t=e.component,a=e.authenticated,n=Object(ne.a)(e,["component","authenticated"]);return r.a.createElement(C.b,Object.assign({},n,{render:function(e){var n=localStorage.getItem("token");return B.a.defaults.headers.common.Authorization=n,!0===a?r.a.createElement(t,e):r.a.createElement(C.a,{to:"/"})}}))})),oe=(a(69),a(155)),ie=a(45),se=a.n(ie),le=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(D.a)(this,Object(I.a)(t).call(this))).handleChange=function(t){e.setState(Object(W.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,password:a.password};e.props.signinUser(n,e.props.history),e.setState({email:"",password:""})},e.state={email:"",password:""},e}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"2rem",color:"rgb(85, 7, 10)"}},"Bid for artworks, Add artworks to your collections. Change profile picture and many more")," "),r.a.createElement("div",{className:"form-container-items"},r.a.createElement("div",{className:"form-container-items-content"},r.a.createElement("div",{className:"form-box"},r.a.createElement("img",{className:"art-logo",src:se.a,alt:"logo"}),r.a.createElement("div",null,this.props.signinInfo.errors_login?r.a.createElement("h3",{style:{color:"red"}},this.props.signinInfo.errors_login):null),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",value:t,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"password",name:"password",type:"password",label:"Password",value:a,onChange:this.handleChange,fullWidth:!0,required:!0,style:{marginBottom:"1rem"}}),r.a.createElement("button",{className:"btn-default"},"Login",this.props.signinInfo.ui_loading&&r.a.createElement(oe.a,{style:{zindex:"5"},variant:"query"}))),r.a.createElement("div",null,"Don't have an account"," ",r.a.createElement(S.b,{to:"/signup"},r.a.createElement("span",null,"Sign up for free"))," ")))))}}]),t}(n.Component),ce=Object(s.b)((function(e){return{signinInfo:e.auth}}),{signinUser:function(e,t){return function(a){a({type:"UI_LOADING"}),B.a.post("https://findartt.herokuapp.com/api/v1/auth/login",e).then((function(e){var n=e.data.data.tokenInfo.accessToken;localStorage.setItem("token",n),B.a.defaults.headers.common.Authorization=n,a({type:"SET_AUTHENTICATED"}),a({type:f}),t.push("/artworks")})).catch((function(e){console.log(e.response.data.message),a({type:"SET_ERROR_LOGIN",payload:e.response.data.message})}))}}})(le),ue=a(40),me=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(D.a)(this,Object(I.a)(t).call(this))).handleChange=function(t){e.setState(Object(W.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,firstName:a.firstName,lastName:a.lastName,phone:a.phone,country:a.country,password:a.password};e.props.signupUser(n,e.props.history),e.setState({email:"",firstName:"",lastName:"",phone:"",country:"",password:"",repeatPassword:""})},e.state={email:"",firstName:"",lastName:"",phone:"",country:"",password:"",repeatPassword:""},e}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;ue.ValidatorForm.addValidationRule("isPasswordMatch",(function(t){return t===e.state.password}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.firstName,n=e.lastName,o=e.phone,i=e.country,s=e.password,l=e.repeatPassword;return r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"form-container-items"},r.a.createElement("div",{className:"form-container-items-content"},r.a.createElement("div",{className:"form-box"},r.a.createElement("img",{className:"art-logo",src:se.a,alt:"logo"}),r.a.createElement("div",null,this.props.signupInfo.errors_signup?r.a.createElement("h1",{style:{color:"red"}},this.props.signupInfo.errors_signup):null),r.a.createElement(ue.ValidatorForm,{onSubmit:this.handleSubmit},r.a.createElement(V.a,{id:"email",name:"email",type:"email",label:"Email",value:t,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"firstName",name:"firstName",type:"firstName",label:"First name",value:a,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"lastName",name:"lastName",type:"lastName",label:"Last name",value:n,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"phone",name:"phone",type:"tel",label:"Phone",value:o,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(V.a,{id:"country",name:"country",type:"country",label:"Country",value:i,onChange:this.handleChange,fullWidth:!0,required:!0}),r.a.createElement(ue.TextValidator,{label:"Password",onChange:this.handleChange,name:"password",type:"password",validators:["required"],errorMessages:["this field is required"],value:s,fullWidth:!0}),r.a.createElement(ue.TextValidator,{label:"Confirm password",onChange:this.handleChange,name:"repeatPassword",type:"password",validators:["isPasswordMatch","required"],errorMessages:["password mismatch","this field is required"],value:l,fullWidth:!0,style:{marginBottom:"1rem"}}),r.a.createElement("button",{className:"btn-default"},"Sign Up",this.props.signupInfo.ui_loading&&r.a.createElement(oe.a,{style:{zindex:"5"},variant:"query"}))),r.a.createElement("div",null,"Already have an account"," ",r.a.createElement(S.b,{to:"/"},r.a.createElement("span",null,"Login")))))))}}]),t}(n.Component),de=Object(s.b)((function(e){return{signupInfo:e.auth}}),{signupUser:function(e,t){return function(a){a({type:"UI_LOADING"}),B.a.post("https://findartt.herokuapp.com/api/v1/auth/signup",e).then((function(e){var n=e.data.data.tokenInfo.accessToken;localStorage.setItem("token",n),B.a.defaults.headers.common.Authorization=n,a({type:"SET_AUTHENTICATED"}),a({type:f}),t.push("/artworks")})).catch((function(e){a({type:"SET_ERROR_SIGNUP",payload:e.response.data.message}),console.log(e.response.data.message)}))}}})(me),pe=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(D.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).signoutUser=function(){a.props.logout(a.props.history)},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"btn-default",onClick:this.signoutUser},"logout",this.props.logoutInfo.ui_loading&&r.a.createElement(oe.a,{style:{zindex:"5"},variant:"query"})))}}]),t}(n.Component),he=Object(s.b)((function(e){return{logoutInfo:e.auth}}),{logout:function(e){return function(t){t({type:"UI_LOADING"}),B.a.post("https://findartt.herokuapp.com/api/v1/auth/logout").then((function(a){delete B.a.defaults.headers.common.Authorization,localStorage.removeItem("token"),t({type:"SET_UNAUTHENTICATED"}),t({type:f}),e.push("/")})).catch((function(e){console.log(e)}))}}})(pe),fe=function(e){function t(){var e;return Object(j.a)(this,t),(e=Object(D.a)(this,Object(I.a)(t).call(this))).onclick=function(){e.setState({name:"yak"}),console.log("here",e.state)},e.state={name:""},e}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:"akwe"}),console.log("we",this.state)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"hello"),r.a.createElement("button",{onClick:this.onclick},"click"))}}]),t}(n.Component),ge=function(e){function t(){return Object(j.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement(C.d,null,r.a.createElement(C.b,{exact:!0,path:"/",component:ce}),r.a.createElement(C.b,{exact:!0,path:"/signup",component:de}),r.a.createElement(C.b,{exact:!0,path:"/hello",component:fe}),r.a.createElement(re,{exact:!0,path:"/logout",component:he}),r.a.createElement(re,{exact:!0,path:"/artworks",component:M}),r.a.createElement(re,{exact:!0,path:"/artwork/bid/:id",component:K}),r.a.createElement(re,{exact:!0,path:"/user/myartworks",component:ae}),r.a.createElement(re,{exact:!0,path:"/user/profile",component:H}),r.a.createElement(re,{exact:!0,path:"/user/profile/update/:id",component:Z}),r.a.createElement(C.b,{exact:!0,path:"/settings",component:T}))))}}]),t}(n.Component);a(124);var Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{store:O},r.a.createElement(l.a,{loading:null,persistor:w},r.a.createElement(ge,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){e.exports=a.p+"static/media/findart.6373ddf2.png"},50:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},84:function(e,t,a){e.exports=a(125)},95:function(e,t,a){},96:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.e2d1f898.chunk.js.map