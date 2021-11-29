"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[5138],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5906:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var o=r(7462),i=r(3366),n=(r(7294),r(3905)),a=["components"],s={id:"02-ecosystem-participants",title:"Ecosystem Participants",tags:["protocol-overview","documentation"],related:"/docs/v2/core-concepts/pools"},c=void 0,p={unversionedId:"concepts/protocol-overview/02-ecosystem-participants",id:"concepts/protocol-overview/02-ecosystem-participants",isDocsHomePage:!1,title:"Ecosystem Participants",description:"The Uniswap ecosystem is primarily comprised of three types of users: liquidity providers, traders, and developers. Liquidity providers are incentivized to contribute ERC-20 tokens to common liquidity pools. Traders can swap these tokens for one another for a fixed 0.30% fee (which goes to liquidity providers). Developers can integrate directly with Uniswap smart contracts to power new and exciting interactions with tokens, trading interfaces, retail experiences, and more.",source:"@site/docs/concepts/01-protocol-overview/02-ecosystem-participants.md",sourceDirName:"concepts/01-protocol-overview",slug:"/concepts/protocol-overview/02-ecosystem-participants",permalink:"/concepts/protocol-overview/02-ecosystem-participants",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/concepts/01-protocol-overview/02-ecosystem-participants.md",tags:[{label:"protocol-overview",permalink:"/tags/protocol-overview"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:2,frontMatter:{id:"02-ecosystem-participants",title:"Ecosystem Participants",tags:["protocol-overview","documentation"],related:"/docs/v2/core-concepts/pools"},sidebar:"tutorialSidebar",previous:{title:"How Uniswap works",permalink:"/"},next:{title:"Smart contracts",permalink:"/concepts/protocol-overview/03-smart-contracts"}},l=[],u={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3329).Z})),(0,n.kt)("p",null,"The Uniswap ecosystem is primarily comprised of three types of users: liquidity providers, traders, and developers. Liquidity providers are incentivized to contribute ",(0,n.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20")," tokens to common liquidity pools. Traders can swap these tokens for one another for a fixed ",(0,n.kt)("a",{parentName:"p",href:"/concepts/advanced-topics/01-fees"},"0.30% fee")," (which goes to liquidity providers). Developers can integrate directly with Uniswap smart contracts to power new and exciting interactions with tokens, trading interfaces, retail experiences, and more."),(0,n.kt)("p",null,"In total, interactions between these classes create a positive feedback loop, fueling digital economies by defining a common language through which tokens can be pooled, traded and used."),(0,n.kt)("h1",{id:"liquidity-providers"},"Liquidity Providers"),(0,n.kt)("p",null,"Liquidity providers, or LPs, are not a homogenous group:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Passive LPs are token holders who wish to passively invest their assets to accumulate trading fees.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Professional LPs are focused on market making as their primary strategy. They usually develop custom tools and ways of tracking their liquidity positions across different DeFi projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Token projects sometimes choose to become LPs to create a liquid marketplace for their token. This allows tokens to be bought and sold more easily, and unlocks interoperability with other DeFi projects through Uniswap.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, some DeFi pioneers are exploring complex liquidity provision interactions like incentivized liquidity, liquidity as collateral, and other experimental strategies. Uniswap is the perfect protocol for projects to experiment with these kinds of ideas."))),(0,n.kt)("h1",{id:"traders"},"Traders"),(0,n.kt)("p",null,"There are a several categories of traders in the protocol ecosystem:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Speculators use a variety of community built tools and products to swap tokens using liquidity pulled from the Uniswap protocol.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arbitrage bots seek profits by comparing prices across different platforms to find an edge. (Though it might seem extractive, these bots actually help equalize prices across broader Ethereum markets and keep things fair.)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DAPP users buy tokens on Uniswap for use in other applications on Ethereum.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Smart contracts that execute trades on the protocol by implementing swap functionality (from products like DEX aggregators to custom Solidity scripts)."))),(0,n.kt)("p",null,"In all cases, trades are subject to the same flat fee for trading on the protocol. Each is important for increasing the accuracy of prices and incentivizing liquidity."),(0,n.kt)("h1",{id:"developersprojects"},"Developers/Projects"),(0,n.kt)("p",null,"There are far too many ways Uniswap is used in the wider Ethereum ecosystem to count, but some examples include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The open-source, accessible nature of Uniswap means there are countless UX experiments and front-ends built to offer access to Uniswap functionality. You can find Uniswap functions in most of the major DeFi dashboard projects. There are also many ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/universe"},"Uniswap-specific tools")," built by the community.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wallets often integrate swapping and liquidity provision functionality as a core offering of their product.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DEX (decentralized exchange) aggregators pull liquidity from many liquidity protocols to offer traders the best prices but splitting their trades. Uniswap is the biggest single decentralized liquidity source for these projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Smart contract developers use the suite of functions available to invent new DeFi tools and other various experimental ideas. See projects like ",(0,n.kt)("a",{parentName:"p",href:"https://unisocks.exchange/"},"Unisocks")," or ",(0,n.kt)("a",{parentName:"p",href:"https://ourzora.com/"},"Zora"),", among many, many others."))),(0,n.kt)("h1",{id:"uniswap-team-and-community"},"Uniswap Team and Community"),(0,n.kt)("p",null,"The Uniswap team along with the broader Uniswap community drives development of the protocol and ecosystem."))}m.isMDXComponent=!0},3329:function(e,t,r){t.Z=r.p+"assets/images/participants-a3e150f3c98a0b402c2063de3e160f2e.jpg"}}]);