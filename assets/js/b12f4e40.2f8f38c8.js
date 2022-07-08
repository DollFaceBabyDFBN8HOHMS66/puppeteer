"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32367],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80880:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={sidebar_label:"Permission"},a="Permission type",p={unversionedId:"api/puppeteer.permission",id:"version-15.3.2/api/puppeteer.permission",title:"Permission type",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.permission.md",sourceDirName:"api",slug:"/api/puppeteer.permission",permalink:"/api/puppeteer.permission",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"Permission"},sidebar:"sidebar",previous:{title:"PaperFormat",permalink:"/api/puppeteer.paperformat"},next:{title:"Platform",permalink:"/api/puppeteer.platform"}},s={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"permission-type"},"Permission type"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type Permission =\n  | 'geolocation'\n  | 'midi'\n  | 'notifications'\n  | 'camera'\n  | 'microphone'\n  | 'background-sync'\n  | 'ambient-light-sensor'\n  | 'accelerometer'\n  | 'gyroscope'\n  | 'magnetometer'\n  | 'accessibility-events'\n  | 'clipboard-read'\n  | 'clipboard-write'\n  | 'payment-handler'\n  | 'persistent-storage'\n  | 'idle-detection'\n  | 'midi-sysex';\n")))}u.isMDXComponent=!0}}]);