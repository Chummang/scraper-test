(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{9037:(e,t,s)=>{Promise.resolve().then(s.bind(s,3858))},403:(e,t,s)=>{"use strict";var r=s(6003);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},3858:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(1251),l=s(275),a=s(513),i=s(403),n=s(1599);let d=()=>{let e=(0,i.useRouter)(),[t,s]=(0,l.useState)(""),d=(0,n.useSession)();(0,l.useEffect)(()=>{(null==d?void 0:d.status)=="authenticated"&&e.replace("/dashboard")},[d,e]);let u=e=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e),o=async t=>{t.preventDefault();let r=t.target[0].value,l=t.target[1].value;if(!u(r)){s("Email is invalid");return}if(!l||l.length<8){s("Password is invlaid");return}let a=await (0,n.signIn)("credentials",{redirect:!1,email:r,password:l});(null==a?void 0:a.error)?(s("Invalid email or password"),(null==a?void 0:a.url)&&e.replace("/dashboard")):s("")};return(0,r.jsx)("div",{className:"grid place-items-center max-h-full",children:(0,r.jsxs)("div",{className:"shadow-lg p-5 rounded-lg",children:[(0,r.jsx)("h1",{className:"text-4xl font-semibold mb-8",children:"Login"}),(0,r.jsxs)("form",{onSubmit:o,className:"flex flex-col gap-3",children:[(0,r.jsx)("input",{type:"text",placeholder:"Email",required:!0}),(0,r.jsx)("input",{type:"password",placeholder:"Password",required:!0}),(0,r.jsx)("button",{type:"submit",className:"p-2.5 text-[17px] w-[70%] mt-6 ml-[37px] border-2 border-transparent rounded-full bg-blue-600 text-gray-200 font-bold ",children:"Sign In"}),(0,r.jsx)("p",{className:"text-red-600 text -[16px] mb-4",children:t&&t}),(0,r.jsxs)(a.default,{className:" mt-3 text-right",href:"/register",children:["Not a member? ",(0,r.jsx)("span",{className:"underline",children:" Register Now "})]})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[706,173,756,901,744],()=>t(9037)),_N_E=e.O()}]);