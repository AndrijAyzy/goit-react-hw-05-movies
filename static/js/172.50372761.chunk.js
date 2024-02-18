"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[172],{8755:function(n,e,t){t.d(e,{T:function(){return a}});var r=t(1598),o=t(184),a=function(){return(0,o.jsxs)(r.xg,{children:[(0,o.jsx)(r.oT,{delay:"0s"}),(0,o.jsx)(r.oT,{delay:".2s"}),(0,o.jsx)(r.oT,{delay:".4s"})]})}},1598:function(n,e,t){t.d(e,{eb:function(){return p},hX:function(){return l},oT:function(){return h},xg:function(){return f}});var r,o,a,i,c,s=t(168),u=t(6444),d=t(1087),p=u.ZP.header(r||(r=(0,s.Z)(["\n  padding: 20px 30px;\n  text-align: left;\n  box-shadow: 0px 4px 4px #d3d3d3;\n"]))),l=(0,u.ZP)(d.OL)(o||(o=(0,s.Z)(["\nfont-size: 20px;\nmargin-right: 50px;\npadding: 5px 15px;\nborder: 1px solid #000000;\nborder-radius: 10px;\nbackground-color: #626466;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\ncolor: #ffffff;\n\n&:hover,\n&:focus {\n  background-color: #ede207;\n  color: #000000;\n  box-shadow: #ede207;\n}\n"]))),x=(0,u.F4)(a||(a=(0,s.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),f=u.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),h=u.ZP.div(c||(c=(0,s.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c85ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),x,(function(n){return n.delay}))},172:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,a,i,c,s,u,d,p,l,x,f,h,v=t(5861),g=t(9439),m=t(7757),Z=t.n(m),b=t(2791),j=t(1087),w=t(7689),k=t(4390),y=t(168),P=t(6444),_=P.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 20px;\n"]))),U=P.ZP.img(o||(o=(0,y.Z)(["\n  height: 600px;\n  width: 400px;\n  border-radius: 8px 20px;\n"]))),T=P.ZP.div(a||(a=(0,y.Z)(["\n  padding-top: 20px;\n  max-width: 1100px;\n"]))),S=P.ZP.h2(i||(i=(0,y.Z)(["\n  margin-bottom: 20px;\n"]))),z=P.ZP.p(c||(c=(0,y.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),F=P.ZP.span(s||(s=(0,y.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),N=P.ZP.div(u||(u=(0,y.Z)(["\n  margin-top: 20px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),C=P.ZP.h3(d||(d=(0,y.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n"]))),H=P.ZP.ul(p||(p=(0,y.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n"]))),O=P.ZP.li(l||(l=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),A=(0,P.ZP)(j.rU)(x||(x=(0,y.Z)(["\n  font-size: 20px;\n  margin-right: 5px;\n  padding: 5px 15px;\n  border: 1px solid #000000;\n  border-radius: 5px;\n  background-color: #626466;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  color: #ffffff;\n\n  &:hover,\n  &:focus {\n    background-color: #ede207;\n    color: #000000;\n    box-shadow: #ede207;\n  }\n"]))),E=t(8755),G=t(184),M=function(n){var e,t,r,o,a=n.movie,i=a.title,c=a.release_date,s=a.poster_path,u=a.vote_average,d=a.overview,p=a.genres,l=(0,w.TH)(),x=new Date(c),f=isNaN(x)?"Unknown":x.getFullYear(),h=s?"https://image.tmdb.org/t/p/w400/".concat(s):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",v=u?"".concat((10*u).toFixed(0),"%"):"Not rated yet";return i?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(_,{children:[(0,G.jsx)(U,{src:h,alt:"".concat(i," poster")}),(0,G.jsxs)(T,{children:[(0,G.jsxs)(S,{children:[null!==i&&void 0!==i?i:"Unknown"," (",f,")"]}),(0,G.jsxs)(z,{children:["User Score: ",v]}),(0,G.jsxs)(z,{children:[(0,G.jsx)(F,{children:"Overview:"})," ",d]}),p&&p.length>0&&(0,G.jsxs)(z,{children:[(0,G.jsx)(F,{children:"Genres:"}),p.map((function(n){return n.name})).join(", ")]})]})]}),(0,G.jsxs)(N,{children:[(0,G.jsx)(C,{children:"Additional information"}),(0,G.jsxs)(H,{children:[(0,G.jsx)(O,{children:(0,G.jsx)(A,{to:"cast",state:{from:null!==(e=null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"})}),(0,G.jsx)(O,{children:(0,G.jsx)(A,{to:"reviews",state:{from:null!==(r=null===l||void 0===l||null===(o=l.state)||void 0===o?void 0:o.from)&&void 0!==r?r:"/"},children:"Reviews"})})]})]})]}):(0,G.jsx)(E.T,{})},q=P.ZP.div(f||(f=(0,y.Z)(["\n  padding: 20px 40px;\n"]))),D=P.ZP.button(h||(h=(0,y.Z)(["\nfont-size: 20px;\nmargin-right: 5px;\npadding: 5px 10px;\nborder: 1px solid #000000;\nborder-radius: 5px;\nbackground-color: #626466;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\ncolor: #ffffff;\n\n&:hover,\n&:focus {\n  background-color: #ede207;\n  color: #000000;\n  box-shadow: #ede207;\n}\n"]))),I=function(){var n,e,t=(0,w.UO)().movieId,r=(0,w.TH)(),o=(0,b.useState)({}),a=(0,g.Z)(o,2),i=a[0],c=a[1];return(0,b.useEffect)((function(){var n=function(){var n=(0,v.Z)(Z().mark((function n(e){var t;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.Mc)(e);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]),(0,G.jsx)("main",{children:(0,G.jsxs)(q,{children:[(0,G.jsx)(j.rU,{to:null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,G.jsx)(D,{type:"button",children:"Go back"})}),(0,G.jsx)(M,{movie:i})," ",(0,G.jsx)(b.Suspense,{fallback:(0,G.jsx)(E.T,{}),children:(0,G.jsx)(w.j3,{})})]})})}},4390:function(n,e,t){t.d(e,{E3:function(){return d},Hx:function(){return x},Mc:function(){return p},_k:function(){return u},uV:function(){return l}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243),c="https://api.themoviedb.org",s="28027c59bdca8e7ee28a28ecaf4d25ca",u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=172.50372761.chunk.js.map