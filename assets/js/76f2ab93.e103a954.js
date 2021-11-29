"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[2435],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8472:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n,o=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],p={id:"01-how-uniswap-works",title:"How Uniswap works",tags:["protocol-overview","documentation"],slug:"/"},c=void 0,l={unversionedId:"concepts/protocol-overview/01-how-uniswap-works",id:"concepts/protocol-overview/01-how-uniswap-works",isDocsHomePage:!1,title:"How Uniswap works",description:"Uniswap is an automated liquidity protocol powered by a constant product formula",source:"@site/docs/concepts/01-protocol-overview/01-how-uniswap-works.md",sourceDirName:"concepts/01-protocol-overview",slug:"/",permalink:"/",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/concepts/01-protocol-overview/01-how-uniswap-works.md",tags:[{label:"protocol-overview",permalink:"/tags/protocol-overview"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:1,frontMatter:{id:"01-how-uniswap-works",title:"How Uniswap works",tags:["protocol-overview","documentation"],slug:"/"},sidebar:"tutorialSidebar",next:{title:"Ecosystem Participants",permalink:"/concepts/protocol-overview/02-ecosystem-participants"}},u=[],d=(n="Link",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2144).Z})),(0,i.kt)("p",null,"Uniswap is an ",(0,i.kt)("em",{parentName:"p"},"automated liquidity protocol")," powered by a ",(0,i.kt)(d,{to:"/docs/v2/protocol-overview/glossary/#constant-product-formula",mdxType:"Link"},"constant product formula"),"\nand implemented in a system of non-upgradeable smart contracts on the ",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/"},"Ethereum")," blockchain.\nIt obviates the need for trusted intermediaries, prioritizing ",(0,i.kt)("strong",{parentName:"p"},"decentralization"),", ",(0,i.kt)("strong",{parentName:"p"},"censorship resistance"),",\nand ",(0,i.kt)("strong",{parentName:"p"},"security"),". Uniswap is ",(0,i.kt)("strong",{parentName:"p"},"open-source software")," licensed under the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GNU_General_Public_License"},"GPL"),"."),(0,i.kt)("p",null,"Each Uniswap smart contract, or pair, manages a liquidity pool made up of reserves of two ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20")," tokens."),(0,i.kt)("p",null,"Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(1841).Z})),(0,i.kt)("p",null,"Pairs act as automated market makers, standing ready to accept one token for the other as long as the \u201cconstant product\u201d formula is preserved. This formula, most simply expressed as ",(0,i.kt)("inlineCode",{parentName:"p"},"x * y = k"),", states that trades must not change the product (",(0,i.kt)("inlineCode",{parentName:"p"},"k"),") of a pair\u2019s reserve balances (",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"). Because ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones."),(0,i.kt)("p",null,"In practice, Uniswap applies a 0.30% fee to trades, which is added to reserves. As a result, each trade actually increases ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),". This functions as a payout to LPs, which is realized when they burn their pool tokens to withdraw their portion of total reserves. In the future, this fee may be reduced to 0.25%, with the remaining 0.05% withheld as a protocol-wide charge."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2039).Z})),(0,i.kt)("p",null,"Because the relative price of the two pair assets can only be changed through trading, divergences between the Uniswap price and external prices create arbitrage opportunities. This mechanism ensures that Uniswap prices always trend toward the market-clearing price."),(0,i.kt)("h1",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"To see how token swaps work in practice, and to walk through the lifecycle of a swap, check out ",(0,i.kt)("a",{parentName:"p",href:"/concepts/core-concepts/01-swaps"},"Swaps"),". Or, to see how liquidity pools work, see ",(0,i.kt)("a",{parentName:"p",href:"/concepts/core-concepts/02-pools"},"Pools"),"."),(0,i.kt)("p",null,"Ultimately, of course, the Uniswap protocol is just smart contract code running on Ethereum. To understand how they work, head over to ",(0,i.kt)("a",{parentName:"p",href:"/reference/smart-contracts/01-factory"},"Smart Contracts")))}f.isMDXComponent=!0},2144:function(e,t,r){t.Z=r.p+"assets/images/anatomy-82d82239e5417e36ca9da17d14961434.jpg"},1841:function(e,t,r){t.Z=r.p+"assets/images/lp-c0b1b03ef921f1325971fa8ab6e9a4f1.jpg"},2039:function(e,t,r){t.Z=r.p+"assets/images/trade-2027cdc01fe7c448f60a5e7da34af9b9.jpg"}}]);