"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[432],{7047:function(n,e,t){t.d(e,{Z:function(){return v}});var r,o,a,i,c,u=t(168),s=t(6444),d=t(1087),f=s.ZP.section(r||(r=(0,u.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),p=s.ZP.h2(o||(o=(0,u.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),l=s.ZP.ul(a||(a=(0,u.Z)(["\n  list-style: disc;\n  color: #0d57aa;\n"]))),x=s.ZP.li(i||(i=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),g=(0,s.ZP)(d.rU)(c||(c=(0,u.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #1c85ff;\n    border-bottom: 2px solid #1c85ff;\n  }\n"]))),h=t(184),v=function(n){var e=n.trendingMovies;return(0,h.jsxs)(f,{children:[(0,h.jsx)(p,{children:"Trending today"}),(0,h.jsx)(l,{children:e.map((function(n){return(0,h.jsx)(x,{children:(0,h.jsx)(g,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},8755:function(n,e,t){t.d(e,{T:function(){return a}});var r=t(1598),o=t(184),a=function(){return(0,o.jsxs)(r.xg,{children:[(0,o.jsx)(r.oT,{delay:"0s"}),(0,o.jsx)(r.oT,{delay:".2s"}),(0,o.jsx)(r.oT,{delay:".4s"})]})}},1598:function(n,e,t){t.d(e,{eb:function(){return f},hX:function(){return p},oT:function(){return g},xg:function(){return x}});var r,o,a,i,c,u=t(168),s=t(6444),d=t(1087),f=s.ZP.header(r||(r=(0,u.Z)(["\n  padding: 20px 30px;\n  text-align: left;\n  box-shadow: 0px 4px 4px #d3d3d3;\n"]))),p=(0,s.ZP)(d.OL)(o||(o=(0,u.Z)(["\nfont-size: 20px;\nmargin-right: 50px;\npadding: 5px 15px;\nborder: 1px solid #000000;\nborder-radius: 10px;\nbackground-color: #626466;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\ncolor: #ffffff;\n\n&:hover,\n&:focus {\n  background-color: #ede207;\n  color: #000000;\n  box-shadow: #ede207;\n}\n"]))),l=(0,s.F4)(a||(a=(0,u.Z)(["\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"]))),x=s.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),g=s.ZP.div(c||(c=(0,u.Z)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 50%;\n  background-color: #1c85ff;\n  animation: "," 1s infinite ease-in-out;\n  animation-delay: ",";\n"])),l,(function(n){return n.delay}))},3432:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,a,i=t(5861),c=t(9439),u=t(7757),s=t.n(u),d=t(2791),f=t(1087),p=t(9014),l=t(4390),x=t(168),g=t(6444),h=g.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 40px;\n"]))),v=g.ZP.input(o||(o=(0,x.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),m=g.ZP.button(a||(a=(0,x.Z)(["\nfont-size: 20px;\nmargin-right: 5px;\npadding: 5px 15px;\nborder: 1px solid #000000;\nborder-radius: 5px;\nbackground-color: #626466;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\ncolor: #ffffff;\n\n&:hover,\n&:focus {\n  background-color: #ede207;\n  color: #000000;\n  box-shadow: #ede207;\n}\n"]))),Z=t(184),b=function(n){var e=n.onSubmit;return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;t?(e(t),n.target.reset()):p.Am.error("Please enter something")},children:[(0,Z.jsx)(v,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},y=t(7047),w=t(8755),k=function(){var n=(0,d.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(!1),a=(0,c.Z)(o,2),u=a[0],x=a[1],g=(0,d.useState)(null),h=(0,c.Z)(g,2),v=h[0],m=h[1],k=(0,f.lr)(),j=(0,c.Z)(k,2),_=j[0],P=j[1];(0,d.useEffect)((function(){var n,e=null!==(n=_.get("query"))&&void 0!==n?n:"";if(e){var t=function(){var n=(0,i.Z)(s().mark((function n(){var t,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,l.E3)(e);case 4:t=n.sent,0===(o=t.results).length?(p.Am.dismiss(),p.Am.error("No movies found"),r([])):r(o),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),m(n.t0.message),r([]);case 13:return n.prev=13,x(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();t()}}),[_]);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(b,{onSubmit:function(n){P({query:n})}}),u?(0,Z.jsx)(w.T,{}):v?(0,Z.jsx)("p",{children:"Sorry, we could not fetch the trending movies. Please try again later."}):(0,Z.jsx)(y.Z,{trendingMovies:t})]})}},4390:function(n,e,t){t.d(e,{E3:function(){return d},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return p}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243),c="https://api.themoviedb.org",u="28027c59bdca8e7ee28a28ecaf4d25ca",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=432.e67e9cb3.chunk.js.map