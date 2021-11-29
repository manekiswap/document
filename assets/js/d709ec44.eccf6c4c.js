"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[9522],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2477:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r,a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],c={id:"02-token",title:"Token",tags:["sdk","documentation"]},l=void 0,p={unversionedId:"reference/SDK/02-token",id:"reference/SDK/02-token",isDocsHomePage:!1,title:"Token",description:"The Token entity represents an ERC-20 token at a specific address on a specific chain.",source:"@site/docs/reference/SDK/02-token.md",sourceDirName:"reference/SDK",slug:"/reference/SDK/02-token",permalink:"/reference/SDK/02-token",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/reference/SDK/02-token.md",tags:[{label:"sdk",permalink:"/tags/sdk"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:2,frontMatter:{id:"02-token",title:"Token",tags:["sdk","documentation"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/reference/SDK/01-getting-started"},next:{title:"Pair",permalink:"/reference/SDK/03-pair"}},d=[{value:"chainId",id:"chainid",children:[],level:2},{value:"address",id:"address",children:[],level:2},{value:"decimals",id:"decimals",children:[],level:2},{value:"symbol",id:"symbol",children:[],level:2},{value:"name",id:"name",children:[],level:2},{value:"equals",id:"equals",children:[],level:2},{value:"sortsBefore",id:"sortsbefore",children:[],level:2}],u=(r="Link",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string)\n")),(0,i.kt)("p",null,"The Token entity represents an ERC-20 token at a specific address on a specific chain."),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token } from '@uniswap/sdk'\n\nconst token = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')\n")),(0,i.kt)("h1",{id:"properties"},"Properties"),(0,i.kt)("h2",{id:"chainid"},"chainId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"chainId: ChainId\n")),(0,i.kt)("p",null,"See ",(0,i.kt)(u,{to:"/docs/v2/SDK/other-exports/#chainid",mdxType:"Link"},"ChainId"),"."),(0,i.kt)("h2",{id:"address"},"address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"address: string\n")),(0,i.kt)("h2",{id:"decimals"},"decimals"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"decimals: number\n")),(0,i.kt)("h2",{id:"symbol"},"symbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"symbol?: string\n")),(0,i.kt)("h2",{id:"name"},"name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"name?: string\n")),(0,i.kt)("h1",{id:"methods"},"Methods"),(0,i.kt)("h2",{id:"equals"},"equals"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"equals(other: Token): boolean\n")),(0,i.kt)("p",null,"Checks if the current instance is equal to another (has an identical chainId and address)."),(0,i.kt)("h2",{id:"sortsbefore"},"sortsBefore"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"sortsBefore(other: Token): boolean\n")),(0,i.kt)("p",null,"Checks if the current instance sorts before another, by address."))}f.isMDXComponent=!0}}]);