"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[698],{698:(e,n,a)=>{a.r(n),a.d(n,{default:()=>w});var t,i,c,s,o,l=a(60),r=a(560),d=a(12),p=a(916),h=a(212),x=a(312),g=a(288);const u=g.c.div(t||(t=(0,x.c)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n  color: #f0e813;\n"]))),v=g.c.ul(i||(i=(0,x.c)(["\n  display: inline-flex;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  color: #f0e813;\n"]))),f=g.c.ul(c||(c=(0,x.c)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  color: #f0e813;\n"]))),y=(0,g.c)(d.cH)(s||(s=(0,x.c)(["\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 18px;\n  color: yellow;\n\n  &:hover {\n    color: #e538fc;\n  }\n"]))),j=g.c.button(o||(o=(0,x.c)(["\npadding: 10px 10px;\ncursor: pointer;\nborder-radius: 4px;\nborder: 3px solid #000000;\ncolor: #000000;\nfont-weight: 600;\nfont-size: 20px;\nborder-radius: 10px;\n\n&:hover {\n  color: #e538fc;\n  border: 3px solid gold;\n}\n"])));var m=a(496);const w=()=>{var e,n;const{movieId:a}=(0,r.W4)(),[t,i]=(0,l.useState)(null),[c,s]=(0,l.useState)(!1),o=(0,r.IT)();if((0,l.useEffect)((()=>{s(!0),(0,p.kD)(a).then((e=>{i(e)})).catch((e=>{console.log(e)})).finally((()=>{s(!1)}))}),[a]),!t)return;const{title:x,release_date:g,popularity:w,overview:_,genres:k,poster_path:b,original_title:S}=t||{};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.cH,{to:null!==(e=null===(n=o.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:(0,m.jsx)(j,{type:"button",children:"Back"})}),c&&(0,m.jsx)(h.c,{}),t&&(0,m.jsxs)(u,{children:[(0,m.jsx)("img",{width:"300px",src:b?"https://image.tmdb.org/t/p/w500".concat(b):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:S}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h1",{children:[x," (",g.slice(0,4),")"]}),(0,m.jsxs)("p",{children:["User score: ",w]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:_}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)(v,{children:k.map((e=>(0,m.jsx)("li",{children:e.name},e.id)))})]})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)(f,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(y,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(y,{to:"reviews",children:"Reviews"})})]}),(0,m.jsx)("hr",{}),(0,m.jsx)(r.yY,{})]})]})}},916:(e,n,a)=>{a.d(n,{AV:()=>c,Mt:()=>r,_0:()=>s,au:()=>l,kD:()=>o});var t=a(372);t.c.defaults.baseURL="https://api.themoviedb.org/3/";const i="992758a4802a699e8df27d4d6efc34fb",c=async()=>(await t.c.get("trending/movie/day?api_key=".concat(i))).data.results,s=async e=>(await t.c.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e))).data.results,o=async e=>(await t.c.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"))).data,l=async e=>(await t.c.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"))).data.cast,r=async e=>(await t.c.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))).data.results}}]);
//# sourceMappingURL=698.4746aa28.chunk.js.map