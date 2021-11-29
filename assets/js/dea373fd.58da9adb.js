"use strict";(self.webpackChunk_manekiswap_document=self.webpackChunk_manekiswap_document||[]).push([[4275],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return k}});var r,a=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],p={id:"05-trade",title:"Trade",tags:["sdk","documentation"]},s=void 0,l={unversionedId:"reference/SDK/05-trade",id:"reference/SDK/05-trade",isDocsHomePage:!1,title:"Trade",description:"The Trade entity represents a fully specified trade along a route. This entity supplies all the information necessary to craft a router transaction.",source:"@site/docs/reference/SDK/05-trade.md",sourceDirName:"reference/SDK",slug:"/reference/SDK/05-trade",permalink:"/reference/SDK/05-trade",editUrl:"https://github.com/manekiswap/manekiswap.github.io/edit/master/docs/reference/SDK/05-trade.md",tags:[{label:"sdk",permalink:"/tags/sdk"},{label:"documentation",permalink:"/tags/documentation"}],version:"current",sidebarPosition:5,frontMatter:{id:"05-trade",title:"Trade",tags:["sdk","documentation"]},sidebar:"tutorialSidebar",previous:{title:"Route",permalink:"/reference/SDK/04-route"},next:{title:"Fractions",permalink:"/reference/SDK/06-fractions"}},c=[{value:"route",id:"route",children:[],level:2},{value:"tradeType",id:"tradetype",children:[],level:2},{value:"inputAmount",id:"inputamount",children:[],level:2},{value:"outputAmount",id:"outputamount",children:[],level:2},{value:"executionPrice",id:"executionprice",children:[],level:2},{value:"nextMidPrice",id:"nextmidprice",children:[],level:2},{value:"slippage",id:"slippage",children:[],level:2},{value:"minimumAmountOut (since 2.0.4)",id:"minimumamountout-since-204",children:[],level:2},{value:"maximumAmountIn (since 2.0.4)",id:"maximumamountin-since-204",children:[],level:2},{value:"bestTradeExactIn",id:"besttradeexactin",children:[],level:2},{value:"bestTradeExactOut",id:"besttradeexactout",children:[],level:2}],d=(r="Link",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:c};function k(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(route: Route, amount: TokenAmount, tradeType: TradeType)\n")),(0,i.kt)("p",null,"The Trade entity represents a fully specified trade along a route. This entity supplies all the information necessary to craft a router transaction."),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId, Token, TokenAmount, Pair, TradeType, Route } from '@uniswap/sdk'\n\nconst HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')\nconst NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')\nconst HOT_NOT = new Pair(new TokenAmount(HOT, '2000000000000000000'), new TokenAmount(NOT, '1000000000000000000'))\nconst NOT_TO_HOT = new Route([HOT_NOT], NOT)\n\nconst trade = new Trade(NOT_TO_HOT, new TokenAmount(NOT, '1000000000000000'), TradeType.EXACT_INPUT)\n")),(0,i.kt)("h1",{id:"properties"},"Properties"),(0,i.kt)("h2",{id:"route"},"route"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"route: Route\n")),(0,i.kt)("p",null,"The ",(0,i.kt)(d,{to:"/docs/v2/SDK/route#path",mdxType:"Link"},"path")," property of the route should be passed as the path parameter to router functions."),(0,i.kt)("h2",{id:"tradetype"},"tradeType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tradeType: TradeType\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TradeType.EXACT_INPUT")," corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"swapExact*For*")," router functions. ",(0,i.kt)("inlineCode",{parentName:"p"},"TradeType.EXACT_OUTPUT")," corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"swap*ForExact*")," router functions."),(0,i.kt)("h2",{id:"inputamount"},"inputAmount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"inputAmount: TokenAmount\n")),(0,i.kt)("p",null,"For exact input trades, this value should be passed as amountIn to router functions. For exact output trades, this value should be multiplied by a factor >1, representing slippage tolerance, and passed as amountInMax to router functions."),(0,i.kt)("h2",{id:"outputamount"},"outputAmount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"outputAmount: TokenAmount\n")),(0,i.kt)("p",null,"For exact output trades, this value should be passed as amountOut to router functions. For exact input trades, this value should be multiplied by a factor <1, representing slippage tolerance, and passed as amountOutMin to router functions."),(0,i.kt)("h2",{id:"executionprice"},"executionPrice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"executionPrice: Price\n")),(0,i.kt)("p",null,"The average price that the trade would execute at."),(0,i.kt)("h2",{id:"nextmidprice"},"nextMidPrice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"nextMidPrice: Price\n")),(0,i.kt)("p",null,"What the new mid price would be if the trade were to execute."),(0,i.kt)("h2",{id:"slippage"},"slippage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"slippage: Percent\n")),(0,i.kt)("p",null,"The slippage incurred by the trade."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Strictly > .30%.")),(0,i.kt)("h1",{id:"methods"},"Methods"),(0,i.kt)("p",null,"In the context of the following two methods, slippage refers to the percent difference between the actual price and the trade ",(0,i.kt)("inlineCode",{parentName:"p"},"executionPrice"),"."),(0,i.kt)("h2",{id:"minimumamountout-since-204"},"minimumAmountOut (since 2.0.4)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"minimumAmountOut(slippageTolerance: Percent): TokenAmount\n")),(0,i.kt)("p",null,"Returns the minimum amount of the output token that should be received from a trade, given the slippage tolerance."),(0,i.kt)("p",null,"Useful when constructing a transaction for a trade of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EXACT_IN"),"."),(0,i.kt)("h2",{id:"maximumamountin-since-204"},"maximumAmountIn (since 2.0.4)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"maximumAmountIn(slippageTolerance: Percent): TokenAmount\n")),(0,i.kt)("p",null,"Returns the maximum amount of the input token that should be spent on the trade, given the slippage tolerance."),(0,i.kt)("p",null,"Useful when constructing a transaction for a trade of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EXACT_OUT"),"."),(0,i.kt)("h1",{id:"static-methods"},"Static methods"),(0,i.kt)("p",null,"These static methods provide ways to construct ideal trades from lists of pairs.\nNote these methods do not perform any aggregation across routes, as routes are linear.\nIt's possible that a better price can be had by combining multiple trades across\ndifferent routes."),(0,i.kt)("h2",{id:"besttradeexactin"},"bestTradeExactIn"),(0,i.kt)("p",null,"Given a list of pairs, a fixed amount in, and token amount out,\nthis method returns the best ",(0,i.kt)("inlineCode",{parentName:"p"},"maxNumResults")," trades that swap\nan input token amount to an output token, making at most ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHops")," hops.\nThe returned trades are sorted by output amount, in decreasing order, and\nall share the given input amount."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Trade.bestTradeExactIn(\n    pairs: Pair[],\n    amountIn: TokenAmount,\n    tokenOut: Token,\n    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {}): Trade[]\n")),(0,i.kt)("h2",{id:"besttradeexactout"},"bestTradeExactOut"),(0,i.kt)("p",null,"Similar to the above method, but targets a fixed output token amount.\nThe returned trades are sorted by input amount, in increasing order,\nand all share the given output amount."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Trade.bestTradeExactOut(\n    pairs: Pair[],\n    tokenIn: Token,\n    amountOut: TokenAmount,\n    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {}): Trade[]\n")))}k.isMDXComponent=!0}}]);