(this["webpackJsonpsuccess-client"]=this["webpackJsonpsuccess-client"]||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),o=a(1),i=(a(26),a(8)),s=a(3),u=function(){var e=Object(n.useContext)(j),t=e.state,a=e.dispatch,c=Object(i.e)();return l.a.createElement("div",null,l.a.createElement("nav",{style:{background:"white"}},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(s.b,{to:t?"/":"/signin",className:"brand-logo left"},"ChatWow"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},t?[l.a.createElement("li",null,l.a.createElement(s.b,{to:"/createPost"},"Create Post")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/profile"},"Profile")),l.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){localStorage.clear(),a({type:"CLEAR"}),c.push("/signin")}},"Logout")]:[l.a.createElement("li",null,l.a.createElement(s.b,{to:"/signin"},"Login")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/signup"},"Signup"))]))))},m=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(j),i=r.state;r.dispatch;Object(n.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.posts)}))}),[]);return l.a.createElement("div",{className:"home"},a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement(s.b,{to:e.postedBy._id!==i._id?"/profile/"+e.postedBy._id:"/profile"},e.postedBy.name)," ",e.postedBy._id==i._id&&l.a.createElement("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));c(t)}));var t}},"delete")),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.photo})),l.a.createElement("div",{className:"card-content"},l.a.createElement("i",{className:"material-icons",style:{color:"red"}},"favorite"),e.likes.includes(i._id)?l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));c(t)})).catch((function(e){console.log(e)})),window.location.reload()}},"thumb_down"):l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=a.map((function(t){return t._id==e._id?e:t}));c(t)})).catch((function(e){console.log(e)})),window.location.reload()}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," likes"),l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"500"}},e.postedBy.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),n=t.target[0].value,l=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));c(t)})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{type:"text",placeholder:"add a comment"}))))})))},p=a(10),d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(j),i=r.state,s=r.dispatch,u=Object(n.useState)(void 0),m=Object(o.a)(u,2),d=m[0],h=m[1];Object(n.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.posts)}))}),[]),Object(n.useEffect)((function(){if(d){var e=new FormData;e.append("file",d),e.append("upload_preset","chatWow"),e.append("cloud_name","jackent2b"),fetch("https://api.cloudinary.com/v1_1/jackent2b/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(p.a)(Object(p.a)({},i),{},{pic:e.pic}))),s({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[d]);return l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:i?i.pic:"loading"})),l.a.createElement("div",null,l.a.createElement("h4",null,i?i.name:"loading"),l.a.createElement("h5",null,i?i.email:"loading"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,a.length," posts")))),l.a.createElement("div",{className:"file-field input-field",style:{margin:"10px"}},l.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},l.a.createElement("span",null,"Update pic"),l.a.createElement("input",{type:"file",onChange:function(e){return t=e.target.files[0],void h(t);var t}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"})))),l.a.createElement("div",{className:"gallery"},a.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})}))))},h=a(6),f=a.n(h),g=function(){var e=Object(n.useContext)(j),t=(e.state,e.dispatch),a=Object(i.e)(),c=l.a.useState(""),r=Object(o.a)(c,2),u=r[0],m=r[1],p=l.a.useState(""),d=Object(o.a)(p,2),h=d[0],g=d[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"card auth-card"},l.a.createElement("h2",null,"ChatWow"),l.a.createElement("input",{type:"text",placeholder:"Email",value:u,onChange:function(e){return m(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"Password",value:h,onChange:function(e){return g(e.target.value)}}),l.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:h})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.message?f.a.toast({html:e.message,classes:"#c62828 red darken-3"}):e.error?f.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),f.a.toast({html:"Successfully SignedIn!",classes:"#43a047 green darken-1"}),a.push("/"))})).catch((function(e){console.log(e)}))}},"Login"),l.a.createElement("div",{style:{paddingTop:"10px"}},"Don't have an account? ",l.a.createElement(s.b,{to:"/signup"},"Sign up"))))},E=function(){var e=Object(i.e)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),E=g[0],v=g[1],b=Object(n.useState)(""),y=Object(o.a)(b,2),j=y[0],O=y[1],w=Object(n.useState)(void 0),S=Object(o.a)(w,2),x=S[0],C=S[1];Object(n.useEffect)((function(){x&&N()}),[x]);var N=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,password:p,email:E,pic:x})}).then((function(e){return e.json()})).then((function(t){t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:t.message,classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):f.a.toast({html:"invalid email",classes:"#c62828 red darken-3"})},_=function(){j?function(){var e=new FormData;e.append("file",j),e.append("upload_preset","new-insta"),e.append("cloud_name","cnq"),fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){C(e.url)})).catch((function(e){console.log(e)}))}():N()};return l.a.createElement("div",{className:"mycard"},l.a.createElement("div",{className:"card auth-card input-field"},l.a.createElement("h2",null,"ChatWow"),l.a.createElement("input",{type:"text",placeholder:"name",value:c,onChange:function(e){return r(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"email",value:E,onChange:function(e){return v(e.target.value)}}),l.a.createElement("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return d(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"waves-effect waves-light btn"},l.a.createElement("span",null,"Upload pic"),l.a.createElement("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return _()}},"SignUP"),l.a.createElement("h5",null,l.a.createElement(s.b,{to:"/signin"},"Already have an account ?"))))},v=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(j),s=(r.state,r.dispatch,Object(i.f)().userid);return Object(n.useEffect)((function(){fetch("/profile/".concat(s),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}),[]),l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{style:{maxWidth:"550px",margin:"0px auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:a.user.pic,alt:"userProfile.user.name"})),l.a.createElement("div",null,l.a.createElement("h4",null,a.user.name),l.a.createElement("h5",null,a.user.email),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"}},l.a.createElement("h6",null,a.posts.length," posts")))),l.a.createElement("div",{className:"gallery"},a.posts.map((function(e){return l.a.createElement("img",{key:e._id,className:"item",src:e.photo,alt:e.title})})))):l.a.createElement("h2",null,"loading...!"))},b=function(){var e=Object(i.e)(),t=l.a.useState(""),a=Object(o.a)(t,2),c=a[0],r=a[1],s=l.a.useState(""),u=Object(o.a)(s,2),m=u[0],p=u[1],d=l.a.useState(""),h=Object(o.a)(d,2),g=h[0],E=h[1],v=l.a.useState(""),b=Object(o.a)(v,2),y=b[0],j=b[1];Object(n.useEffect)((function(){y&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:c,body:m,photo:y})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.error?f.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(f.a.toast({html:"Post Created Successfully!",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[y]);return l.a.createElement("div",null,l.a.createElement("div",{className:"card auth-card"},l.a.createElement("h2",null,"ChatWow"),l.a.createElement("input",{type:"text",placeholder:"Title",value:c,onChange:function(e){return r(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"Content",value:m,onChange:function(e){return p(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn"},l.a.createElement("span",null,"Add Images"),l.a.createElement("input",{type:"file",multiple:!0,onChange:function(e){return E(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text",placeholder:"Upload one or more files"}))),l.a.createElement("button",{className:"waves-effect waves-light btn",onClick:function(){return function(){var e=new FormData;e.append("file",g),e.append("upload_preset","chatWow"),e.append("cloud_name","jackent2b"),fetch("https://api.cloudinary.com/v1_1/jackent2b/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){return j(e.secure_url)})).catch((function(e){return console.log(e)}))}()}},"Post")))},y=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATEPIC"==t.type?Object(p.a)(Object(p.a)({},e),{},{pic:t.payload}):e},j=Object(n.createContext)(),O=function(){var e=Object(i.e)(),t=Object(n.useContext)(j),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?a({type:"USER",payload:t}):e.push("/signin")}),[]),l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(m,null)),l.a.createElement(i.a,{path:"/createPost"},l.a.createElement(b,null)),l.a.createElement(i.a,{exact:!0,path:"/profile"},l.a.createElement(d,null)),l.a.createElement(i.a,{path:"/signin"},l.a.createElement(g,null)),l.a.createElement(i.a,{path:"/signup"},l.a.createElement(E,null)),l.a.createElement(i.a,{path:"/profile/:userid"},l.a.createElement(v,null)))},w=function(){var e=Object(n.useReducer)(y,null),t=Object(o.a)(e,2),a=t[0],c=t[1];return l.a.createElement(j.Provider,{value:{state:a,dispatch:c}},l.a.createElement(s.a,null,l.a.createElement(u,null),l.a.createElement(O,null)))};r.a.render(l.a.createElement(w,null),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0fc88a49.chunk.js.map