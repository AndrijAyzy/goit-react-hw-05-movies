"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[88],{396:(e,n,t)=>{t.d(n,{c:()=>g});var a,o,c,s=t(560),r=t(312),i=t(288),d=t(12);const l=i.c.ul(a||(a=(0,r.c)(["\n  list-style-type: none;\n"]))),p=i.c.li(o||(o=(0,r.c)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),u=(0,i.c)(d.cH)(c||(c=(0,r.c)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"])));var h=t(496);const g=e=>{let{films:n}=e;const t=(0,s.IT)();return(0,h.jsx)(l,{children:n.map((e=>(0,h.jsx)(p,{children:(0,h.jsx)(u,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)))})}},88:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a,o,c,s=t(60),r=t(212),i=t(396),d=t(312),l=t(288);const p=l.c.form(a||(a=(0,d.c)(["\n  display: flex;\n  align-items: center;\n"]))),u=l.c.input(o||(o=(0,d.c)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),h=l.c.button(c||(c=(0,d.c)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"])));var g=t(496);const x=e=>{let{searchMovies:n}=e;const[t,a]=(0,s.useState)("");return(0,g.jsxs)(p,{onSubmit:e=>{e.preventDefault(),n(t.toLowerCase())},children:[(0,g.jsx)(u,{type:"text",name:"query",autoFocus:!0,value:t,onChange:e=>{a(e.target.value)}}),(0,g.jsx)(h,{type:"submit",children:"Search"})]})};var m=t(916);const v=()=>{const[e,n]=(0,s.useState)([]),[t,a]=(0,s.useState)(!1),[o,c]=(0,s.useState)(!1);return(0,g.jsxs)("main",{children:[(0,g.jsx)(x,{searchMovies:e=>{a(!0),(0,m._0)(e).then((e=>{n(e),c(0===e.length)})).catch((e=>{console.log(e)})).finally((()=>{a(!1)}))}}),t&&(0,g.jsx)(r.c,{}),o&&(0,g.jsx)("p",{children:"There is no movies with this request. Please, try again"}),e&&(0,g.jsx)(i.c,{films:e})]})}},916:(e,n,t)=>{t.d(n,{AV:()=>c,Mt:()=>d,_0:()=>s,au:()=>i,kD:()=>r});var a=t(372);a.c.defaults.baseURL="https://api.themoviedb.org/3/";const o="992758a4802a699e8df27d4d6efc34fb",c=async()=>(await a.c.get("trending/movie/day?api_key=".concat(o))).data.results,s=async e=>(await a.c.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e))).data.results,r=async e=>(await a.c.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"))).data,i=async e=>(await a.c.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"))).data.cast,d=async e=>(await a.c.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))).data.results}}]);
//# sourceMappingURL=88.bc9732e9.chunk.js.map