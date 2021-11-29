"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[716],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5512:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var a,o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],p={id:"01-swaps",title:"Swaps",subtitle:"Learn about the core functionality of the uniswap protocol. Token Swaps.",tags:["swaps","documentation"]},c=void 0,l={unversionedId:"concepts/core-concepts/01-swaps",id:"concepts/core-concepts/01-swaps",isDocsHomePage:!1,title:"Swaps",description:"Token swaps in Uniswap are a simple way to trade one ERC-20 token for another.",source:"@site/docs/concepts/02-core-concepts/01-swaps.md",sourceDirName:"concepts/02-core-concepts",slug:"/concepts/core-concepts/01-swaps",permalink:"/concepts/core-concepts/01-swaps",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/concepts/02-core-concepts/01-swaps.md",tags:[{label:"swaps",permalink:"/tags/swaps"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:1,frontMatter:{id:"01-swaps",title:"Swaps",subtitle:"Learn about the core functionality of the uniswap protocol. Token Swaps.",tags:["swaps","documentation"]},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/concepts/protocol-overview/04-glossary"},next:{title:"Pools",permalink:"/concepts/core-concepts/02-pools"}},u=[{value:"Anatomy of a swap",id:"anatomy-of-a-swap",children:[],level:2}],d=(a="Link",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(141).Z})),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Token swaps in Uniswap are a simple way to trade one ERC-20 token for another."),(0,i.kt)("p",null,"For end-users, swapping is intuitive: a user picks an input token and an output token. They specify an input amount, and the protocol calculates how much of the output token they\u2019ll receive. They then execute the swap with one click, receiving the output token in their wallet immediately."),(0,i.kt)("p",null,"In this guide, we\u2019ll look at what happens during a swap at the protocol level in order to gain a deeper understanding of how Uniswap works."),(0,i.kt)("p",null,"Swaps in Uniswap are different from trades on traditional platforms. Uniswap does not use an order book to represent liquidity or determine prices. Uniswap uses an automated market maker mechanism to provide instant feedback on rates and slippage."),(0,i.kt)("p",null,"As we learned in ",(0,i.kt)("a",{parentName:"p",href:"/"},"Protocol Overview"),", each pair on Uniswap is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them."),(0,i.kt)("p",null,"This rule is the ",(0,i.kt)("a",{parentName:"p",href:"/concepts/protocol-overview/04-glossary#constant-product-formula"},"constant product formula"),". When either token is withdrawn (purchased), a proportional amount of the other must be deposited (sold), in order to maintain the constant."),(0,i.kt)("h2",{id:"anatomy-of-a-swap"},"Anatomy of a swap"),(0,i.kt)("p",null,"At the most basic level, all swaps in Uniswap V2 happen within a single function, aptly named ",(0,i.kt)("inlineCode",{parentName:"p"},"swap"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data);\n")),(0,i.kt)("h1",{id:"receiving-tokens"},"Receiving tokens"),(0,i.kt)("p",null,"As is probably clear from the function signature, Uniswap requires ",(0,i.kt)("inlineCode",{parentName:"p"},"swap")," callers to ",(0,i.kt)("em",{parentName:"p"},"specify how many output tokens they would like to receive")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount{0,1}Out")," parameters, which correspond to the desired amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"token{0,1}"),"."),(0,i.kt)("h1",{id:"sending-tokens"},"Sending Tokens"),(0,i.kt)("p",null,"What\u2019s not as clear is how Uniswap ",(0,i.kt)("em",{parentName:"p"},"receives")," tokens as payment for the swap. Typically, smart contracts which need tokens to perform some functionality require callers to first make an approval on the token contract, then call a function that in turn calls transferFrom on the token contract. This is ",(0,i.kt)("em",{parentName:"p"},"not")," how V2 pairs accept tokens. Instead, pairs check their token balances at the ",(0,i.kt)("em",{parentName:"p"},"end")," of every interaction. Then, at the beginning of the ",(0,i.kt)("em",{parentName:"p"},"next")," interaction, current balances are differenced against the stored values to determine the amount of tokens that were sent by the current interactor. See the ",(0,i.kt)("a",{href:"https://uniswap.org/whitepaper.pdf",rel:"noopener noreferrer"},"whitepaper")," for a justification of why this is the case."),(0,i.kt)("p",null,"The takeaway is that ",(0,i.kt)("strong",{parentName:"p"},"tokens must be transferred to pairs before swap is called")," (the one exception to this rule is ",(0,i.kt)(d,{to:"/docs/v2/core-concepts/flash-swaps",mdxType:"Link"},"Flash Swaps"),"). This means that to safely use the ",(0,i.kt)("inlineCode",{parentName:"p"},"swap")," function, it must be called from ",(0,i.kt)("em",{parentName:"p"},"another smart contract"),". The alternative (transferring tokens to the pair and then calling ",(0,i.kt)("inlineCode",{parentName:"p"},"swap"),") is not safe to do non-atomically because the sent tokens would be vulnerable to arbitrage."),(0,i.kt)("h1",{id:"developer-resources"},"Developer resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To see how to implement token swaps in a smart contract read ",(0,i.kt)("a",{parentName:"li",href:"/guides/smart-contract-integration/02-trading-from-a-smart-contract"},"Trading from a smart contract"),"."),(0,i.kt)("li",{parentName:"ul"},"To see how to execute a swap from an interface read ",(0,i.kt)("a",{parentName:"li",href:"/guides/javascript-sdk/04-trading"},"Trading (SDK)"))))}f.isMDXComponent=!0},141:function(e,t,n){t.Z=n.p+"assets/images/trade-fbac869a5948798a10a6dadc33014371.jpg"}}]);