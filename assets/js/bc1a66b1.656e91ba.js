"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[8163],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||l[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"01-overview",title:"Overview",tags:["smart-contracts","documentation"]},c="UNI Address",p={unversionedId:"concepts/governance/01-overview",id:"concepts/governance/01-overview",isDocsHomePage:!1,title:"Overview",description:"Uni is deployed at 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 on the Ethereum mainnet, and the Ropsten, Rinkeby, G\xf6rli, and Kovan testnets. It was built from commit ab22c08.",source:"@site/docs/concepts/11-governance/01-overview.md",sourceDirName:"concepts/11-governance",slug:"/concepts/governance/01-overview",permalink:"/concepts/governance/01-overview",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/concepts/11-governance/01-overview.md",tags:[{label:"smart-contracts",permalink:"/tags/smart-contracts"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:1,frontMatter:{id:"01-overview",title:"Overview",tags:["smart-contracts","documentation"]},sidebar:"tutorialSidebar",previous:{title:"Research",permalink:"/concepts/advanced-topics/06-research"},next:{title:"Process",permalink:"/concepts/governance/02-process"}},d=[{value:"ABI",id:"abi",children:[],level:2},{value:"ABI",id:"abi-1",children:[],level:2},{value:"ABI",id:"abi-2",children:[],level:2}],l={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uni-address"},"UNI Address"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Uni")," is deployed at ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984")," on the Ethereum ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},"mainnet"),", and the ",(0,o.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},"Ropsten"),", ",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},"Rinkeby"),", ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},"G\xf6rli"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://kovan.etherscan.io/address/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},"Kovan")," testnets. It was built from commit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946"},"ab22c08"),"."),(0,o.kt)("h2",{id:"abi"},"ABI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Uni from '@uniswap/governance/build/Uni.json'\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@uniswap/governance@1.0.2/build/Uni.json"},"https://unpkg.com/@uniswap/governance@1.0.2/build/Uni.json")),(0,o.kt)("h1",{id:"timelock"},"Timelock"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Timelock")," is deployed at ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1a9C8182C09F50C8318d769245beA52c32BE35BC")," on the Ethereum ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC"},"mainnet"),", and the ",(0,o.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC"},"Ropsten"),", ",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC"},"Rinkeby"),", ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC"},"G\xf6rli"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://kovan.etherscan.io/address/0x1a9C8182C09F50C8318d769245beA52c32BE35BC"},"Kovan")," testnets. It was built from commit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946"},"ab22c08"),"."),(0,o.kt)("h2",{id:"abi-1"},"ABI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Timelock from '@uniswap/governance/build/Timelock.json'\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@uniswap/governance@1.0.2/build/Timelock.json"},"https://unpkg.com/@uniswap/governance@1.0.2/build/Timelock.json")),(0,o.kt)("h1",{id:"governoralpha"},"GovernorAlpha"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GovernorAlpha")," is deployed at ",(0,o.kt)("inlineCode",{parentName:"p"},"0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F")," on the Ethereum ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"},"mainnet"),", and the ",(0,o.kt)("a",{parentName:"p",href:"https://ropsten.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"},"Ropsten"),", ",(0,o.kt)("a",{parentName:"p",href:"https://rinkeby.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"},"Rinkeby"),", ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"},"G\xf6rli"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://kovan.etherscan.io/address/0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F"},"Kovan")," testnets. It was built from commit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/governance/commit/ab22c084bacb2636a1aebf9759890063eb6e4946"},"ab22c08"),"."),(0,o.kt)("h2",{id:"abi-2"},"ABI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import GovernorAlpha from '@uniswap/governance/build/GovernorAlpha.json'\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@uniswap/governance@1.0.2/build/GovernorAlpha.json"},"https://unpkg.com/@uniswap/governance@1.0.2/build/GovernorAlpha.json")),(0,o.kt)("h1",{id:"miscellaneous-addresses"},"Miscellaneous Addresses"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The following addresses only exist on the Ethereum mainnet.")),(0,o.kt)("p",null,"The UNI merkle distributor address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x090D4613473dEE047c3f2706764f49E0821D256e"),"."),(0,o.kt)("p",null,"The staking rewards factory address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x3032Ab3Fa8C01d786D29dAdE018d7f2017918e12"),"."),(0,o.kt)("p",null,"The four staking rewards addresses are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"0x6c3e4cb2e96b01f4b866965a91ed4437839a121a\n0x7fba4b8dc5e7616e59622806932dbea72537a56b\n0xa1484c3aa22a66c62b77e0ae78e15258bd0cb711\n0xca35e32e7926b96a9988f61d510e038108d8068e\n")),(0,o.kt)("p",null,"The four year-long vesting contract addresses are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"0x4750c43867ef5f89869132eccf19b9b6c4286e1a\n0xe3953d9d317b834592ab58ab2c7a6ad22b54075d\n0x4b4e140d1f131fdad6fb59c13af796fd194e4135\n0x3d30b1ab88d487b0f3061f40de76845bec3f1e94\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"feeToSetterVester")," address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0x18e433c7Bf8A2E1d0197CE5d8f9AFAda1A771360"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"feeTo")," address is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xDAF819c2437a82f9e01f6586207ebF961a7f0970"),"."))}m.isMDXComponent=!0}}]);