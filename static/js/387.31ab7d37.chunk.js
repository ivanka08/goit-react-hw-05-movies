"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{242:function(n,e,t){t.d(e,{IV:function(){return d},UC:function(){return o},Vp:function(){return l},kh:function(){return c},lw:function(){return m}});var r=t(861),a=t(757),i=t.n(a),u=t(340);function c(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?language=en-US",{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,r=e.abortCTRL,n.next=3,u.Z.get("search/movie",{signal:r.signal,params:{query:t,language:"en-US",include_adult:!1,page:1}});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,r=e.abortCTRL,n.next=3,u.Z.get("movie/".concat(t,"}"),{signal:r.signal,params:{language:"en-US",include_adult:!1,append_to_response:"credits, reviews"}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,r=e.abortCTRL,n.next=3,u.Z.get("movie/".concat(t,"/credits?language=en-US"),{signal:r.signal});case 3:return a=n.sent,n.abrupt("return",a.data.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,r=e.abortCTRL,n.next=3,u.Z.get("movie/".concat(t,"/reviews?language=en-US"),{signal:r.signal});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGEzYWE4NDJlODc3MzIzMTZmNjUyMmY5NGNjYWIzYiIsInN1YiI6IjY0OTllYjZkYmJkMGIwMDEwNjZmZGNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FmL6ArnlTWaeJhkdkm9WJSU56E0EQ8jMnjSepQWr4_g",u.Z.defaults.headers.common.accept="application/json"},387:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a=t(861),i=t(439),u=t(757),c=t.n(u),s=t(242),o=t(791),p=t(689),l=t(168),f=t(867).ZP.li(r||(r=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 16px;\n  /* align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  \n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex; */\n"]))),d=t(184),h=function(){var n=(0,p.UO)().id,e=(0,o.useState)(null),t=(0,i.Z)(e,2),r=t[0],u=t[1];return(0,o.useEffect)((function(){var e=new AbortController,t=function(){var t=(0,a.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.IV)({id:n,abortCTRL:e});case 3:r=t.sent,u(r.map((function(n){return n.profile_path?{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}:null})).filter((function(n){return null!==n}))),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,t.finish(9);case 11:case"end":return t.stop()}}),t,null,[[0,7,9,11]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e.abort()}}),[n]),(0,d.jsx)("div",{children:r&&r.map((function(n){return(0,d.jsxs)(f,{children:[n.profile_path&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.profile_path),alt:n.name,width:100,height:150}),(0,d.jsx)("p",{children:n.name}),(0,d.jsxs)("p",{children:["character: ",n.character]})]},n.id)}))})}}}]);
//# sourceMappingURL=387.31ab7d37.chunk.js.map