(()=>{var e={};e.id=702,e.ids=[702],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},55315:e=>{"use strict";e.exports=require("path")},86624:e=>{"use strict";e.exports=require("querystring")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},83885:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>l,routeModule:()=>p,tree:()=>d});var s=r(67030),n=r(16460),a=r(14170),i=r.n(a),o=r(4909),u={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let d=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,98620)),"C:\\Users\\chumm\\Desktop\\scraper-test\\app\\dashboard\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,87850))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,56303)),"C:\\Users\\chumm\\Desktop\\scraper-test\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,83266,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,87850))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\chumm\\Desktop\\scraper-test\\app\\dashboard\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},42242:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,97723,23)),Promise.resolve().then(r.t.bind(r,72355,23)),Promise.resolve().then(r.t.bind(r,65322,23)),Promise.resolve().then(r.t.bind(r,48240,23)),Promise.resolve().then(r.t.bind(r,95950,23)),Promise.resolve().then(r.t.bind(r,12812,23)),Promise.resolve().then(r.t.bind(r,46801,23))},31125:(e,t,r)=>{Promise.resolve().then(r.bind(r,97614)),Promise.resolve().then(r.bind(r,47568))},83472:(e,t,r)=>{Promise.resolve().then(r.bind(r,31892))},97614:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(15856);r(47485);var n=r(24022),a=r(35101);let i=()=>{let{data:e}=(0,a.useSession)();return(0,s.jsx)("div",{className:"flex justify-center shadow-lg",children:(0,s.jsx)("ul",{className:"flex justify-end p-5",children:(0,s.jsxs)("div",{className:"flex gap-10",children:[(0,s.jsx)(n.default,{href:"/dashboard",children:(0,s.jsx)("li",{children:"Dashboard"})}),e?(0,s.jsxs)(s.Fragment,{children:[e.user?.email,(0,s.jsx)("li",{children:(0,s.jsx)("button",{onClick:()=>{(0,a.signOut)()},className:" p-2 px-5 -mt-1 bg-blue-400 text-white rounded-full",children:"Logout"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{href:"/login",children:(0,s.jsx)("li",{children:"Login"})}),(0,s.jsx)(n.default,{href:"/register",children:(0,s.jsx)("li",{children:"Register"})})]})]})})})}},31892:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(15856),n=r(47485);function a(){let[e,t]=(0,n.useState)([]);async function r(){let e=await fetch("/api/scraper",{method:"POST",body:JSON.stringify({siteUrl:"https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes"}),headers:{"Content-Type":"application/json"}});t((await e.json()).tableData||[])}return(0,s.jsx)("main",{className:"hero bg-base-200 min-h-screen",children:(0,s.jsx)("div",{className:"hero-content text-center",children:(0,s.jsxs)("div",{className:"max-w-xl",children:[(0,s.jsx)("h1",{className:"text-5xl font-bold mb-8",children:"Let's scrape something!"}),(0,s.jsx)("p",{className:"mb-6",children:(0,s.jsx)("button",{className:"p-5 bg-blue-500 rounded-full",onClick:r,children:"Get Started"})}),e.length>0&&(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"min-w-full bg-white border border-gray-300",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:e[0].map((e,t)=>(0,s.jsx)("th",{className:"py-2 px-4 border border-gray-300 bg-gray-100",children:e},t))})}),(0,s.jsx)("tbody",{children:e.slice(1).map((e,t)=>(0,s.jsx)("tr",{className:"hover:bg-gray-100",children:e.map((e,t)=>(0,s.jsx)("td",{className:"py-2 px-4 border border-gray-300",children:e},t))},t))})]})})]})})})}},47568:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(15856);r(47485);var n=r(35101);let a=({children:e})=>(0,s.jsx)(n.SessionProvider,{children:e})},37272:(e,t,r)=>{"use strict";var s=r(78389);r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}})},98773:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return a}});let s=r(17913),n=r(99658);function a(e){return(0,n.isRedirectError)(e)||(0,s.isNotFoundError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},78389:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return o},RedirectType:function(){return s.RedirectType},notFound:function(){return n.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect},unstable_rethrow:function(){return a.unstable_rethrow}});let s=r(99658),n=r(17913),a=r(59055);class i extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class o extends URLSearchParams{append(){throw new i}delete(){throw new i}set(){throw new i}sort(){throw new i}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19768:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},99658:(e,t,r)=>{"use strict";var s;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return s},getRedirectError:function(){return o},getRedirectStatusCodeFromError:function(){return f},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return c},isRedirectError:function(){return l},permanentRedirect:function(){return d},redirect:function(){return u}});let n=r(209),a=r(19768),i="NEXT_REDIRECT";function o(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let s=Error(i);return s.digest=i+";"+t+";"+e+";"+r+";",s}function u(e,t){let r=n.actionAsyncStorage.getStore();throw o(e,t||((null==r?void 0:r.isAction)?"push":"replace"),a.RedirectStatusCode.TemporaryRedirect)}function d(e,t){throw void 0===t&&(t="replace"),o(e,t,a.RedirectStatusCode.PermanentRedirect)}function l(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,s]=t,n=t.slice(2,-2).join(";"),o=Number(t.at(-2));return r===i&&("replace"===s||"push"===s)&&"string"==typeof n&&!isNaN(o)&&o in a.RedirectStatusCode}function c(e){return l(e)?e.digest.split(";").slice(2,-2).join(";"):null}function p(e){if(!l(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function f(e){if(!l(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}(function(e){e.push="push",e.replace="replace"})(s||(s={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59055:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,i.isNextRouterError)(t)||(0,a.isBailoutToCSRError)(t)||(0,s.isDynamicUsageError)(t)||(0,n.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let s=r(56139),n=r(130),a=r(69489),i=r(98773);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},56139:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return o}});let s=r(39858),n=r(69489),a=r(98773),i=r(22493),o=e=>(0,s.isDynamicServerError)(e)||(0,n.isBailoutToCSRError)(e)||(0,a.isNextRouterError)(e)||(0,i.isDynamicPostpone)(e)},130:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return s}});let r=Symbol.for("react.postpone");function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},69489:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return s},isBailoutToCSRError:function(){return n}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class s extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},930:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var n=r(80744);let e=(await (0,n.createProxy)(String.raw`C:\Users\chumm\Desktop\scraper-test\app\components\Navbar.tsx`)).default;s()}catch(e){s(e)}},1)},54494:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var n=r(80744);let e=(await (0,n.createProxy)(String.raw`C:\Users\chumm\Desktop\scraper-test\app\components\PdfViewer.tsx`)).default;s()}catch(e){s(e)}},1)},98620:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d});var n=r(15222);r(35056);var a=r(70109),i=r(37272),o=r(54494),u=e([o]);o=(u.then?(await u)():u)[0];let d=async()=>(await (0,a.getServerSession)()||(0,i.redirect)("/"),(0,n.jsx)("div",{className:"flex flex-col items-center justify-between p-24",children:(0,n.jsx)(o.default,{})}));s()}catch(e){s(e)}})},56303:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>f,metadata:()=>h});var n=r(15222),a=r(73268),i=r.n(a),o=r(31947),u=r.n(o);r(22223);var d=r(930),l=r(70109),c=r(39960),p=e([d,c]);[d,c]=p.then?(await p)():p;let h={title:"Create Next App",description:"Generated by create next app"};async function f({children:e}){let t=await (0,l.getServerSession)();return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${i().variable} ${u().variable} antialiased`,children:(0,n.jsx)(c.default,{session:t,children:(0,n.jsxs)("div",{className:"max-w-full text-2xl gap-5 ",children:[(0,n.jsx)(d.default,{}),e]})})})})}s()}catch(e){s(e)}})},39960:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var n=r(80744);let e=(await (0,n.createProxy)(String.raw`C:\Users\chumm\Desktop\scraper-test\app\utils\SessionProvider.tsx`)).default;s()}catch(e){s(e)}},1)},87850:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(55626);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},22223:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[555,109,270,870],()=>r(83885));module.exports=s})();