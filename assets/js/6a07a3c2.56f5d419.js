"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97170],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=d(a),s=r,g=k["".concat(o,".").concat(s)]||k[s]||m[s]||p;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,l=new Array(p);l[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<p;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55820:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const p={sidebar_label:"PDFOptions"},l="PDFOptions interface",i={unversionedId:"api/puppeteer.pdfoptions",id:"version-15.3.1/api/puppeteer.pdfoptions",title:"PDFOptions interface",description:"Valid options to configure PDF generation via Page.pdf().",source:"@site/versioned_docs/version-15.3.1/api/puppeteer.pdfoptions.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions",permalink:"/15.3.1/api/puppeteer.pdfoptions",draft:!1,tags:[],version:"15.3.1",frontMatter:{sidebar_label:"PDFOptions"},sidebar:"sidebar",previous:{title:"PDFMargin.top",permalink:"/15.3.1/api/puppeteer.pdfmargin.top"},next:{title:"PDFOptions.displayHeaderFooter",permalink:"/15.3.1/api/puppeteer.pdfoptions.displayheaderfooter"}},o={},d=[{value:"Properties",id:"properties",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pdfoptions-interface"},"PDFOptions interface"),(0,r.kt)("p",null,"Valid options to configure PDF generation via ",(0,r.kt)("a",{parentName:"p",href:"/15.3.1/api/puppeteer.page.pdf"},"Page.pdf()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PDFOptions\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.displayheaderfooter"},"displayHeaderFooter?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Whether to show the header and footer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.footertemplate"},"footerTemplate?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," HTML template for the print footer. Has the same constraints and support for special classes as ",(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.headertemplate"},"PDFOptions.headerTemplate"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.format"},"format?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.paperformat"},"PaperFormat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.headertemplate"},"headerTemplate?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("i",null,"(Optional)")," HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - ",(0,r.kt)("code",null,"date")," formatted print date"),(0,r.kt)("p",null,"- ",(0,r.kt)("code",null,"title")," document title"),(0,r.kt)("p",null,"- ",(0,r.kt)("code",null,"url")," document location"),(0,r.kt)("p",null,"- ",(0,r.kt)("code",null,"pageNumber")," current page number"),(0,r.kt)("p",null,"- ",(0,r.kt)("code",null,"totalPages")," total pages in the document"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.height"},"height?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Sets the height of paper. You can pass in a number or a string with a unit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.landscape"},"landscape?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Whether to print in landscape orientation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.margin"},"margin?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfmargin"},"PDFMargin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Set the PDF margins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.omitbackground"},"omitBackground?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Hides default white background and allows generating pdfs with transparency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.pageranges"},"pageRanges?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Paper ranges to print, e.g. ",(0,r.kt)("code",null,"1-5, 8, 11-13"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.path"},"path?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," The path to save the file to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.prefercsspagesize"},"preferCSSPageSize?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Give any CSS ",(0,r.kt)("code",null,"@page")," size declared in the page priority over what is declared in the ",(0,r.kt)("code",null,"width")," or ",(0,r.kt)("code",null,"height")," or ",(0,r.kt)("code",null,"format")," option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.printbackground"},"printBackground?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Set to ",(0,r.kt)("code",null,"true")," to print background graphics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.scale"},"scale?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Scales the rendering of the web page. Amount must be between ",(0,r.kt)("code",null,"0.1")," and ",(0,r.kt)("code",null,"2"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.timeout"},"timeout?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Timeout in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/15.3.1/api/puppeteer.pdfoptions.width"},"width?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Sets the width of paper. You can pass in a number or a string with a unit.")))))}m.isMDXComponent=!0}}]);