"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{1050:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,o,a,i,c,s,u,p,l,d=e(5861),f=e(9439),h=e(4687),x=e.n(h),m=e(2791),g=e(7689),b=e(7972),v=e(168),w=e(1087),Z=e(5867),y=Z.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  margin: 0 auto;\n  gap: 24px;\n"]))),j=(0,Z.ZP)(w.rU)(o||(o=(0,v.Z)(["\n  margin-bottom: 20px;\n  display: block;\n  line-height: 40px;\n  height: 40px;\n  text-align: center;\n  width: 100px;\n  cursor: pointer;\n  background-color: #7f2221;\n  color: #f3f3f3;\n  transition: all 0.3s;\n  position: relative;\n  border-radius: 4px;\n\n  & span {\n    transition: all 0.3s;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0;\n    transition: all 0.3s;\n    border-top-width: 1px;\n    border-bottom-width: 1px;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: rgba(255, 255, 255, 0.5);\n    border-bottom-color: rgba(255, 255, 255, 0.5);\n    transform: scale(0.1, 1);\n  }\n\n  & :hover span {\n    letter-spacing: 2px;\n  }\n\n  &:hover::before {\n    opacity: 1;\n    transform: scale(1, 1);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    transition: all 0.3s;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n\n  &:hover::after {\n    opacity: 0;\n    transform: scale(0.1, 1);\n  }\n"]))),k=Z.ZP.h2(a||(a=(0,v.Z)(["\n  font-size: 48px;\n  font-weight: 600;\n  letter-spacing: 4px;\n"]))),_=Z.ZP.h3(i||(i=(0,v.Z)(["\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 40px;\n  margin-bottom: 24px;\n"]))),P=Z.ZP.p(c||(c=(0,v.Z)(["\n  font-size: 16px;\n  max-width: 500px;\n  margin-bottom: 40px;\n"]))),z=Z.ZP.h3(s||(s=(0,v.Z)(["\n  font-weight: 400;\n  font-size: 24px;\n  margin-bottom: 24px;\n"]))),U=Z.ZP.ul(u||(u=(0,v.Z)(["\n  padding-left: 20px;\n  list-style: unset;\n  display: flex;\n  gap: 32px;\n"]))),S=Z.ZP.ul(p||(p=(0,v.Z)(["\n  display: flex;\n  gap: 12px;\n  flex-direction: column;\n  border-top: 1px solid #d7d4cd;\n  border-bottom: 1px solid #d7d4cd;\n  margin: 40px 0;\n  padding: 20px 48px;\n"]))),C=(0,Z.ZP)(w.rU)(l||(l=(0,v.Z)(["\n  font-size: 24px;\n  width: 150px;\n  height: 30px;\n  color: #252525;\n  background-color: #dfdfdf;\n  border-radius: 20px;\n  text-align: center;\n"]))),L=e(184),R=function(){return(0,L.jsxs)(S,{children:[(0,L.jsx)(C,{to:"cast",children:"Cast"}),(0,L.jsx)(C,{to:"reviews",children:"Reviews"})]})},F=e(9263);function G(){var n,t,e=(0,g.UO)().movieId,r=(0,m.useState)(null),o=(0,f.Z)(r,2),a=o[0],i=o[1],c=(0,m.useState)(!1),s=(0,f.Z)(c,2),u=s[0],p=s[1],l=(0,g.TH)(),h=(0,m.useRef)(l);return(0,m.useEffect)((function(){function n(){return(n=(0,d.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.prev=1,n.next=4,(0,b.Sg)(e);case 4:t=n.sent,i(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),alert(n.t0.message);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,L.jsx)(L.Fragment,{children:a&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(j,{to:null!==(n=null===(t=h.current.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,L.jsx)("span",{children:"\u21d0 Go back"})}),(0,L.jsxs)(y,{children:[(0,L.jsx)("img",{src:a.poster_path?"http://image.tmdb.org/t/p/w500/".concat(a.poster_path):"https://astatic.ccmbg.com/ccmcms_linternaute/dist/public/public-assets/img/default/cine-defaut-1.jpg",alt:a.title,width:"250"}),(0,L.jsxs)("div",{children:[(0,L.jsx)(k,{children:a.title}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"User score: "})," ",Math.ceil(10*a.vote_average)," %"]}),(0,L.jsx)(_,{children:"Overview"}),(0,L.jsx)(P,{children:a.overview}),(0,L.jsx)(z,{children:"Genres"}),(0,L.jsx)(U,{children:a.genres.map((function(n){return(0,L.jsx)("li",{children:n.name},n.id)}))})]}),u&&(0,L.jsx)(F.a,{})]}),(0,L.jsx)(R,{}),(0,L.jsx)(g.j3,{})]})})}},7972:function(n,t,e){e.d(t,{Bt:function(){return l},LI:function(){return d},Sg:function(){return u},wL:function(){return p},wr:function(){return s}});var r=e(5861),o=e(4687),a=e.n(o),i=e(5294),c="7091a56798b3dae7162597c32527055c";i.Z.defaults.baseURL="https://api.themoviedb.org";var s=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/trending/movie/day?api_key=".concat(c)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"?api_key=").concat(c)).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(n){return n.data.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/search/movie?query=".concat(t,"&api_key=").concat(c)).then((function(n){return n.data.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=50.7c652246.chunk.js.map