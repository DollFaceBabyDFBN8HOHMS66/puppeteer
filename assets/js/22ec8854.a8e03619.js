"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64959],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),m=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=m(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(t),f=a,d=s["".concat(l,".").concat(f)]||s[f]||u[f]||p;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=s;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<p;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},14114:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var n=t(87462),a=(t(67294),t(3905));const p={sidebar_label:"Frame.parentFrame"},o="Frame.parentFrame() method",i={unversionedId:"api/puppeteer.frame.parentframe",id:"version-15.3.1/api/puppeteer.frame.parentframe",title:"Frame.parentFrame() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.frame.parentframe.md",sourceDirName:"api",slug:"/api/puppeteer.frame.parentframe",permalink:"/15.3.1/api/puppeteer.frame.parentframe",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"Frame.parentFrame"},sidebar:"sidebar",previous:{title:"Frame.name",permalink:"/15.3.1/api/puppeteer.frame.name"},next:{title:"Frame.select",permalink:"/15.3.1/api/puppeteer.frame.select"}},l={},m=[],c={toc:m};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frameparentframe-method"},"Frame.parentFrame() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  parentFrame(): Frame | null;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.frame"},"Frame")," ","|"," null"),(0,a.kt)("p",null,"the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"Frame"),", if any. Detached and main frames return ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."))}u.isMDXComponent=!0}}]);