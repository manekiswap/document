"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[5043],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,f=h["".concat(p,".").concat(d)]||h[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6395:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"01-overview",title:"API Overview",tags:["api","documentation"],slug:"/reference/"},p=void 0,u={unversionedId:"reference/API/01-overview",id:"reference/API/01-overview",isDocsHomePage:!1,title:"API Overview",description:"This section explains the Uniswap Subgraph and how to interact with it. The Uniswap subgraph indexes data from the Uniswap contracts over time. It organizes data about pairs, tokens, Uniswap as a whole, and more. The subgraph updates any time a transaction is made on Uniswap. The subgraph runs on The Graph protocol's hosted service and can be openly queried.",source:"@site/docs/reference/API/01-overview.md",sourceDirName:"reference/API",slug:"/reference/",permalink:"/reference/",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/reference/API/01-overview.md",tags:[{label:"api",permalink:"/tags/api"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:1,frontMatter:{id:"01-overview",title:"API Overview",tags:["api","documentation"],slug:"/reference/"},sidebar:"tutorialSidebar",previous:{title:"Supporting meta transactions",permalink:"/guides/smart-contract-integration/07-supporting-meta-transactions"},next:{title:"Entities",permalink:"/reference/API/02-entities"}},c=[{value:"Resources",id:"resources",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Making Queries",id:"making-queries",children:[],level:2},{value:"Versions",id:"versions",children:[],level:2}],l={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains the Uniswap Subgraph and how to interact with it. The Uniswap subgraph indexes data from the Uniswap contracts over time. It organizes data about pairs, tokens, Uniswap as a whole, and more. The subgraph updates any time a transaction is made on Uniswap. The subgraph runs on ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph")," protocol's hosted service and can be openly queried."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2"},"Subgraph Explorer")," - sandbox for querying data and endpoints for developers."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-subgraph"},"Uniswap V2 Subgraph")," - source code for deployed subgraph."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The subgraph provides a snapshot of the current state of Uniswap and also tracks historical data. It is currently used to power ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.info/"},"uniswap.info"),". ",(0,o.kt)("strong",{parentName:"p"},"It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).")),(0,o.kt)("h2",{id:"making-queries"},"Making Queries"),(0,o.kt)("p",null,"To learn more about querying a subgraph refer to ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/docs/introduction"},"The Graph's documentation"),"."),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2"},"Uniswap V2 Subgraph")," only tracks data on Uniswap V2. For Uniswap V1 information see the ",(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/explorer/subgraph/graphprotocol/uniswap"},"V1 Subgraph"),"."))}h.isMDXComponent=!0}}]);