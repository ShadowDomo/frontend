(this.webpackJsonpfakeshop=this.webpackJsonpfakeshop||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),a=n(22),c=n.n(a),o=n(3),i=n(8),l=n(4),u=n.n(l),j=n(7),d=n(5),b=Object(r.createContext)(null),h=n(1),p=function(){var e="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",t=Object(r.useContext)(b),n=t.username,s=t.setUsername,a=Object(d.f)(),c=Object(d.g)();function o(){return(o=Object(j.a)(u.a.mark((function t(){var n,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(n=localStorage.getItem("sessionID"))){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,fetch(e+"getUsername/"+n);case 6:return r=t.sent,t.next=9,r.json();case 9:if((o=t.sent).username||["/login","/register"].includes(c.pathname)){t.next=13;break}return a.push("/login"),t.abrupt("return");case 13:s(o.username),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),a.push("/login");case 19:case"end":return t.stop()}}),t,null,[[3,16]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){if("/"===c.pathname)return localStorage.removeItem("sessionID"),a.push("/login"),void s("");!function(){o.apply(this,arguments)}()}),[c.pathname]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h6",{className:"text-white",children:n}),Object(h.jsxs)("div",{className:"d-flex flex-row",children:[Object(h.jsx)(i.b,{className:"mr-3",to:"/login",onClick:function(){localStorage.removeItem("sessionID"),s("")},children:n&&n.length>0?Object(h.jsx)("h5",{className:"text-primary",children:"logout"}):"/register"===c.pathname?Object(h.jsx)("h5",{children:"Login"}):void 0}),Object(h.jsx)(i.b,{to:"/register",children:function(){if("/register"!==c.pathname)return n?void 0:Object(h.jsx)("h5",{className:"font-weight-bold",children:"Register"})}()})]})]})},m=function(){return Object(h.jsxs)("div",{className:"bg-dark navbar w-100 static-top",children:[Object(h.jsx)(i.b,{to:function(){return null===localStorage.getItem("sessionID")?"#":"/home"},children:Object(h.jsx)("h1",{className:"navbar-brand mx-3 text-light",children:"Forum Clone"})}),Object(h.jsx)(p,{})]})},x=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(m,{})})},f=function(){return Object(h.jsx)("div",{className:"bg-dark w-100",style:{position:"fixed",bottom:0},children:Object(h.jsx)("h6",{className:"text-light m-2",children:"Dom Zhu - 2021"})})},O=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),c=Object(o.a)(a,2),l=c[0],p=c[1],m=Object(r.useState)(""),x=Object(o.a)(m,2),f=x[0],O=x[1],v=Object(d.f)(),y=(Object(r.useContext)(b).username,Object(r.useContext)(b).setUsername),g="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/";function N(){return(N=Object(j.a)(u.a.mark((function e(t){var r,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={username:n,password:l},g+"login",e.prev=3,e.next=6,fetch("http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/login",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 6:return s=e.sent,e.next=9,s.json();case 9:if(!(a=e.sent).hasOwnProperty("error")){e.next=13;break}return O(a.error),e.abrupt("return");case 13:localStorage.setItem("sessionID",a.sessionID),y(n),v.push("/home"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),O("Failed to login. Please try again.");case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){}),[]),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(h.jsxs)("form",{className:"mt-5",children:[Object(h.jsx)("h1",{className:"mb-4 text-center",children:"Login"}),Object(h.jsxs)("div",{className:"form-group mb-2",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(h.jsxs)("div",{className:"form-group mb-3",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){return p(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(h.jsx)("button",{type:"submit",onClick:function(e){return N.apply(this,arguments)},className:"btn btn-primary",children:"Submit"})]}),Object(h.jsx)(i.b,{to:"/register",children:Object(h.jsx)("div",{className:"mt-1",children:"New user? Click here to register!"})}),f.length>0&&Object(h.jsx)("h5",{className:"mt-3 alert alert-danger",children:f})]})})})},v=n(25),y=n(20),g=n(0),N=n(24),w=function(e){var t=e.threadID,n=e.loadThread,s=e.noRenderButton,a=e.parentPostID,c=e.setRenderReplyForm,i=Object(r.useState)(!1),l=Object(o.a)(i,2),d=l[0],p=l[1],m="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",x=Object(r.useState)(""),f=Object(o.a)(x,2),O=f[0],v=f[1],y=Object(r.useContext)(b).username,g=Object(r.useState)(""),N=Object(o.a)(g,2),w=N[0],k=N[1];function C(){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(u.a.mark((function e(){var r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:y,content:O,date:(new Date).toLocaleString(),threadID:t,childrenIDs:[],parentID:a,imageURL:w},e.prev=1,e.next=4,fetch(m+"makePost",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return s=e.sent,e.next=7,s.json();case 7:e.sent,n(),p((function(e){return!e})),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return");case 15:I();case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function I(){p(!1),c&&c(!1)}return Object(r.useEffect)((function(){p(void 0!==s)}),[]),Object(h.jsxs)(h.Fragment,{children:[d&&Object(h.jsxs)("div",{className:"form-group mt-4 mb-5",children:[Object(h.jsx)("label",{className:"",children:"Content"}),Object(h.jsx)("textarea",{placeholder:"What are your thoughts?",onChange:function(e){return v(e.target.value)},className:"form-control border border-secondary",rows:6}),Object(h.jsxs)("div",{className:"mt-3",children:[Object(h.jsx)("label",{children:"Image url"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return k(e.target.value)},className:"form-control border border-secondary"})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-end",children:[Object(h.jsx)("button",{onClick:function(e){return I()},className:"btn btn-primary mt-2",children:"Cancel"}),Object(h.jsx)("button",{onClick:C,className:"btn btn-primary mt-2 ml-3 bg-secondary text-dark border border-secondary",children:"Submit"})]})]}),!d&&!s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){return p((function(e){return!e}))},children:"Add Reply"})})]})},k=function(e){var t=e.post;return Object(h.jsxs)("div",{className:"row p-2 d-flex justify-content-between",children:[Object(h.jsx)("h6",{className:"text-white ml-1",children:t.username}),Object(h.jsx)("h6",{children:Object(h.jsx)("small",{className:"ml-3 text-muted",children:t.date})})]})},C=function(e){var t=e.post,n=e.renderChildren,s=e.setRenderReplyForm,a=e.setRenderChildren,c=e.deletePost,o=Object(r.useContext)(b).username;return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col d-flex",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h6",{className:"text-muted",children:Object(h.jsx)("small",{style:{cursor:"pointer"},onClick:function(e){return s((function(e){return!e}))},children:"Reply"})})}),0===t.childrenIDs.length?null:Object(h.jsx)("div",{className:"ml-3",children:Object(h.jsx)("h6",{className:"text-muted",children:Object(h.jsxs)("small",{style:{cursor:"pointer"},onClick:function(e){a((function(e){return!e}))},children:[!n&&"Show Replies",n&&"Hide Replies"]})})}),function(){if(!t.deleted&&t.username===o)return Object(h.jsx)("div",{className:"ml-3",children:Object(h.jsx)("h6",{className:"text-muted",children:Object(h.jsx)("small",{style:{cursor:"pointer"},onClick:function(e){return c()},children:"Delete Post"})})})}()]})})},S=function(e){var t=e.post;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"row pl-2",children:Object(h.jsx)("div",{className:"text-white ml-1",children:t.deleted?Object(h.jsx)("h6",{className:"text-danger",children:"[Deleted]"}):t.content})}),function(){if(""!==t.imageURL)return Object(h.jsx)("img",{className:"mb-2",style:{maxWidth:"400px",width:"100%",height:"auto"},src:t.imageURL,alt:""})}()]})},I="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",D=function e(t){var n=t.post,s=t.threadID,a=t.loadThread,c=t.getPost,i=t.indentLevel,l=Object(r.useState)(n),d=Object(o.a)(l,2),b=d[0],p=d[1],m=Object(r.useState)(!1),x=Object(o.a)(m,2),f=x[0],O=x[1],v=Object(r.useState)(!0),y=Object(o.a)(v,2),g=y[0],N=y[1],D=20*i;function P(){return T.apply(this,arguments)}function T(){return(T=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={threadID:s,postID:b.id},e.prev=1,e.next=4,fetch(I+"getPost",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function R(){return(R=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={threadID:s,postID:b.id},e.prev=1,e.next=4,fetch(I+"deletePost",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!e.sent.hasOwnProperty("status")){e.next=13;break}return e.next=11,P();case 11:r=e.sent,p(r);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{style:{marginLeft:D,width:"auto"},children:[Object(h.jsxs)("div",{className:"container my-3 border border-secondary rounded bg-dark",children:[Object(h.jsx)(k,{post:b}),Object(h.jsx)(S,{post:b}),Object(h.jsx)(C,{post:b,renderChildren:g,setRenderReplyForm:O,setRenderChildren:N,deletePost:function(){return R.apply(this,arguments)}})]}),function(){if(f)return Object(h.jsx)(w,{threadID:s,loadThread:a,noRenderButton:!0,parentPostID:b.id,setRenderReplyForm:O})}()]}),g&&b.childrenIDs.map((function(t){var n=c(t);return null!==n?Object(h.jsx)(e,{loadThread:a,post:n,getPost:c,threadID:s,indentLevel:i+1},t):null}))]})},P=function(){var e=Object(r.useContext)(b),t=e.username,n=(e.setUsername,Object(r.useState)({title:"",content:"",username:"",_id:"",posts:[]})),s=Object(o.a)(n,2),a=s[0],c=s[1],i="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",l=Object(d.h)().id,p=Object(d.f)(),m=Object(r.useState)([]),x=Object(o.a)(m,2),f=x[0],O=x[1];function k(){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(u.a.mark((function e(){var t,n,r,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"getThread/"+l);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),O([]),r=Object(y.a)(n.posts);try{for(a=function(){var e=s.value;null===e.parentID&&O((function(t){return[].concat(Object(v.a)(t),[e])}))},r.s();!(s=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i+"deleteThread/"+l);case 2:e.sent,p.push("/home");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t,n=Object(y.a)(a.posts);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===e)return r}}catch(s){n.e(s)}finally{n.f()}return null}return Object(r.useEffect)((function(){k()}),[]),Object(h.jsxs)("div",{className:"container mt-3 mb-5",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col d-inline-flex align-items-center",children:[Object(h.jsx)("h1",{className:"mb-0",children:a.title}),function(){if(a.username===t)return Object(h.jsx)(g.b.Provider,{value:{size:"1em"},children:Object(h.jsx)(N.a,{onClick:S,style:{cursor:"pointer"},className:"ml-2"})})}()]})}),Object(h.jsxs)("h6",{children:["- ",a.username]}),Object(h.jsx)("p",{style:{wordWrap:"break-word"},children:a.content}),Object(h.jsx)(w,{threadID:l,loadThread:k}),Object(h.jsx)("h4",{className:"mt-5",children:"Replies:"}),Object(h.jsx)("div",{className:"container ",children:f.map((function(e,t){return Object(h.jsx)(D,{post:e,threadID:l,loadThread:k,getPost:P,indentLevel:0},t)}))})]})},T=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),c=Object(o.a)(a,2),l=c[0],b=c[1],p=Object(r.useState)(""),m=Object(o.a)(p,2),x=m[0],f=m[1],O=Object(r.useState)(""),v=Object(o.a)(O,2),y=v[0],g=v[1],N=Object(r.useState)(""),w=Object(o.a)(N,2),k=w[0],C=w[1],S="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",I=Object(d.f)();function D(){if(l===x)return!0}function P(){return(P=Object(j.a)(u.a.mark((function e(t){var r,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),C(""),g(""),D()){e.next=5;break}return e.abrupt("return");case 5:return r={username:n,password:l},S+"register",e.prev=7,e.next=10,fetch("http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/register",{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"POST"});case 10:return s=e.sent,e.next=13,s.json();case 13:if(!(a=e.sent).hasOwnProperty("error")){e.next=17;break}return C(a.error),e.abrupt("return");case 17:return g(a.status),e.next=20,new Promise((function(e){return setTimeout(e,1500)}));case 20:I.push("/login"),console.log(a),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(7),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[7,24]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 col-sm-8 offset-sm-2 col-xl-6 offset-xl-3",children:[Object(h.jsxs)("form",{className:"mt-5",children:[Object(h.jsx)("h1",{className:"mb-4 text-center",children:"Register"}),Object(h.jsxs)("div",{className:"form-group mb-2",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Enter username"})]}),Object(h.jsxs)("div",{className:"form-group mb-2",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){return b(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(h.jsxs)("div",{className:"form-group mb-3",children:[Object(h.jsx)("label",{children:"Confirm Password"}),Object(h.jsx)("input",{type:"password",value:x,onChange:function(e){return f(e.target.value)},className:"form-control",placeholder:"Enter password"})]}),Object(h.jsx)("button",{type:"submit",onClick:function(e){return function(e){return P.apply(this,arguments)}(e)},className:"btn btn-primary",children:"Submit"})]}),Object(h.jsx)(i.b,{to:"/login",children:Object(h.jsx)("div",{className:"mt-1",children:"Already registered? Click here to login!"})}),y.length>0&&Object(h.jsx)("h5",{className:"mt-3 alert alert-success",children:y}),k.length>0&&Object(h.jsx)("h5",{className:"mt-3 alert alert-danger",children:k})]})})})},R=function(e){var t=e.loadThreads,n=Object(r.useState)(!1),s=Object(o.a)(n,2),a=s[0],c=s[1],i="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/",l=Object(r.useState)(""),d=Object(o.a)(l,2),p=d[0],m=d[1],x=Object(r.useState)(""),f=Object(o.a)(x,2),O=f[0],v=f[1],y=Object(r.useContext)(b).username,g=Object(r.useState)(""),N=Object(o.a)(g,2),w=N[0],k=N[1];function C(){return p.length>5e3?(k("Exceeded content length!"),!1):O.length>150?(k("Exceeded title length!"),!1):(k(""),!0)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C()){e.next=2;break}return e.abrupt("return");case 2:return n={username:y,content:p,title:O},e.prev=3,e.next=6,fetch(i+"newThread",{body:JSON.stringify(n),headers:{"Content-Type":"application/json"},method:"POST"});case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent,t(),c((function(e){return!e})),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(3);case 16:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function D(){if(0!==w.length)return Object(h.jsx)("h5",{className:"alert alert-danger mt-2",children:w})}return Object(h.jsx)("div",{className:"mb-5",children:a?Object(h.jsxs)("div",{className:"form-group mt-4",children:[Object(h.jsx)("label",{className:"",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return v(e.target.value)}}),Object(h.jsx)("label",{className:"",children:"Content"}),Object(h.jsx)("textarea",{onChange:function(e){return m(e.target.value)},className:"form-control border border-secondary"}),Object(h.jsx)("button",{onClick:S,className:"btn btn-primary mt-2",children:"Submit"}),D()]}):Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){return c((function(e){return!e}))},children:"Add Thread"})})},E=function(e){var t=e.thread,n=t._id,r=t.title,s=t.content;Object(d.f)();return Object(h.jsx)(i.b,{to:"/thread/".concat(n),children:Object(h.jsxs)("div",{className:"border border-primary rounded my-2 p-2",children:[Object(h.jsx)("h4",{children:r}),Object(h.jsx)("p",{style:{wordWrap:"break-word"},children:s.length>500?s.substring(1,500)+"...":s})]})})},q=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a="http://syndeyforum-env.eba-f4xyppqy.ap-southeast-2.elasticbeanstalk.com/api/";function c(){return i.apply(this,arguments)}function i(){return(i=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a+"getThreads");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c()}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"font-weight-bold my-3",children:"Home page"}),n.map((function(e){return Object(h.jsx)(E,{thread:e},e._id)})),Object(h.jsx)(R,{loadThreads:c})]})};n(37);var L=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(h.jsx)(i.a,{basename:"/",children:Object(h.jsxs)(b.Provider,{value:{username:n,setUsername:s},children:[Object(h.jsx)(x,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/register",children:Object(h.jsx)(T,{})}),Object(h.jsx)(d.a,{path:"/login",children:Object(h.jsx)(O,{})}),Object(h.jsx)(d.a,{path:"/thread/:id",children:Object(h.jsx)(P,{})}),Object(h.jsx)(d.a,{path:"/home",children:Object(h.jsx)(q,{})}),Object(h.jsx)(d.a,{path:"/",children:Object(h.jsx)(O,{})})]}),Object(h.jsx)(f,{})]})})};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.49090d1d.chunk.js.map