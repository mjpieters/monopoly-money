(this["webpackJsonp@monopoly-money/client"]=this["webpackJsonp@monopoly-money/client"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";var n=a(124);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGameState={players:[],freeParkingBalance:0,open:!0},t.calculateGameState=function(e,t){return e.reduce((function(e,t){switch(t.type){case"playerJoin":return Object.assign(Object.assign({},e),{players:[].concat(n(e.players),[{playerId:t.playerId,name:t.name,banker:!1,balance:0}])});case"playerDelete":return Object.assign(Object.assign({},e),{players:e.players.filter((function(e){return e.playerId!==t.playerId}))});case"playerNameChange":return Object.assign(Object.assign({},e),{players:e.players.map((function(e){return e.playerId===t.playerId?Object.assign(Object.assign({},e),{name:t.name}):e}))});case"playerBankerStatusChange":return Object.assign(Object.assign({},e),{players:e.players.map((function(e){return e.playerId===t.playerId?Object.assign(Object.assign({},e),{banker:t.isBanker}):e}))});case"transaction":if("bank"===t.from||"freeParking"===t.from){var a=e.players.find((function(e){return e.playerId===t.to}));if(void 0===a)throw new Error("Unable to find destination player");return Object.assign(Object.assign({},e),{players:[].concat(n(e.players.filter((function(e){return e.playerId!==t.from&&e.playerId!==t.to}))),[Object.assign(Object.assign({},a),{balance:a.balance+t.amount})]),freeParkingBalance:"freeParking"===t.from?e.freeParkingBalance-t.amount:e.freeParkingBalance})}if("bank"===t.to||"freeParking"===t.to){var r=e.players.find((function(e){return e.playerId===t.from}));if(void 0===r)throw new Error("Unable to find source player");return Object.assign(Object.assign({},e),{players:[].concat(n(e.players.filter((function(e){return e.playerId!==t.from&&e.playerId!==t.to}))),[Object.assign(Object.assign({},r),{balance:r.balance-t.amount})]),freeParkingBalance:"freeParking"===t.to?e.freeParkingBalance+t.amount:e.freeParkingBalance})}var l=e.players.find((function(e){return e.playerId===t.from})),o=e.players.find((function(e){return e.playerId===t.to}));if(void 0===l||void 0===o)throw new Error("Unable to find source or destination player");return Object.assign(Object.assign({},e),{players:[].concat(n(e.players.filter((function(e){return e.playerId!==t.from&&e.playerId!==t.to}))),[Object.assign(Object.assign({},l),{balance:l.balance-t.amount}),Object.assign(Object.assign({},o),{balance:o.balance+t.amount})])});case"gameOpenStateChange":return Object.assign(Object.assign({},e),{open:t.open})}}),t)}},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(87),a(25)),i=a(8),s=a(13),u=a(144),m=a(134),p=a(143),d=a(71),f=a(30),y=a.n(f);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createElement("g",null,r.a.createElement("rect",{fill:"none",height:24,width:24})),h=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("rect",{height:7,width:3,x:4,y:10}),r.a.createElement("rect",{height:7,width:3,x:10.5,y:10}),r.a.createElement("rect",{height:3,width:20,x:2,y:19}),r.a.createElement("rect",{height:7,width:3,x:17,y:10}),r.a.createElement("polygon",{points:"12,1 2,6 2,8 22,8 22,6"}))),E=function(e){var t=e.svgRef,a=e.title,n=g(e,["svgRef","title"]);return r.a.createElement("svg",v({enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,b,h)},O=r.a.forwardRef((function(e,t){return r.a.createElement(E,v({svgRef:t},e))}));a.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=r.a.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),w=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),S=function(e){var t=e.svgRef,a=e.title,n=j(e,["svgRef","title"]);return r.a.createElement("svg",k({viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,I,w)},P=r.a.forwardRef((function(e,t){return r.a.createElement(S,k({svgRef:t},e))}));a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=r.a.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),G=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),T=function(e){var t=e.svgRef,a=e.title,n=C(e,["svgRef","title"]);return r.a.createElement("svg",N({viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,x,G)},B=r.a.forwardRef((function(e,t){return r.a.createElement(T,N({svgRef:t},e))}));a.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D,R=r.a.createElement("g",null,r.a.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"}),r.a.createElement("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})),F=function(e){var t=e.svgRef,a=e.title,n=z(e,["svgRef","title"]);return r.a.createElement("svg",M({enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,R)},H=r.a.forwardRef((function(e,t){return r.a.createElement(F,M({svgRef:t},e))})),J=(a.p,"https://monopoly-money.nitratine.net"),A={home:"/",join:"/join",newGame:"/new-game",funds:"/funds",bank:"/bank",history:"/history",settings:"/settings"},L=(D={},Object(i.a)(D,A.home,{titlePrefix:"",description:"Monopoly Money helps you manage your finances in a game of monopoly from the browser.",index:!0}),Object(i.a)(D,A.join,{titlePrefix:"Join Game",description:"Join a Monopoly Money game",index:!0}),Object(i.a)(D,A.newGame,{titlePrefix:"New Game",description:"Create a new Monopoly Money game",index:!0}),Object(i.a)(D,A.funds,{titlePrefix:"Manage Funds",index:!1}),Object(i.a)(D,A.bank,{titlePrefix:"Bank",description:"TODO",index:!1}),Object(i.a)(D,A.history,{titlePrefix:"History",index:!1}),Object(i.a)(D,A.settings,{titlePrefix:"Settings",index:!1}),D),W=(a(99),function(e){var t=e.inGame,a=e.isBanker,n=Object(s.usePath)(),l=[{path:A.funds,active:t,title:"Funds",icon:P},{path:A.history,active:t,title:"History",icon:B},{path:A.bank,active:t&&a,title:"Bank",icon:O},{path:A.settings,active:t&&a,title:"Settings",icon:H}],o=function(e){return function(){return Object(s.navigate)(e)}};return r.a.createElement(u.a,{bg:"light",variant:"light",sticky:"top",className:"navigation"},r.a.createElement(m.a,null,r.a.createElement(u.a.Brand,{onClick:o("/"),className:"mr-1"},r.a.createElement("img",{src:y.a,height:"30",className:"d-inline-block align-top",alt:"Monopoly Money Banner Logo",style:{cursor:"pointer"}})),r.a.createElement(p.a,{className:"mr-auto"},l.filter((function(e){return e.active})).map((function(e){var t=e.icon;return r.a.createElement(p.a.Link,{key:e.path,href:"#",onClick:o(e.path),active:n===e.path,className:"p-0"},r.a.createElement(d.a,{variant:"light",title:e.title,className:"d-flex ml-1 icon-button"},r.a.createElement(t,{style:{height:25,width:25}}),r.a.createElement("span",{className:"ml-1 d-none d-sm-inline"},e.title)))})))))}),Y=a(72),V=a.n(Y),_=function(e){var t=e.route,a=e.children,n=L[t],l="".concat(n.titlePrefix," Monopoly Money");return V()({title:l,description:n.description,charset:"utf-8",lang:"en",metas:[{name:"robots",content:n.index?"index":"noindex, nofollow"}],links:[{rel:"canonical",href:J+t},{rel:"icon",type:"image/ico",href:"/favicon.ico"},{rel:"apple-touch-icon",type:"image/png",href:"/logo.png"}],openGraph:{title:l,image:J+y.a,site_name:"Monopoly Money"}}),r.a.createElement(r.a.Fragment,null,a)},U=a(135),$=a(73),K=function(e){var t=e.children;return r.a.createElement(m.a,null,r.a.createElement(U.a,{className:"justify-content-md-center"},r.a.createElement($.a,{className:"col-md-10"},t)))},q=a(145),Q=a(136),X=a(28),Z=a(81),ee=a(6),te=a(53),ae=a(74),ne=a.n(ae),re=a(43),le=a.n(re),oe=a(60),ce={api:{root:"https://monopoly-money-server.herokuapp.com"}},ie=function(){var e=Object(oe.a)(le.a.mark((function e(t,a){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce.api.root,"/api/game/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a})});case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:if(404!==n.status){e.next=11;break}return e.abrupt("return",Promise.resolve("DoesNotExist"));case 11:if(403!==n.status){e.next=15;break}return e.abrupt("return",Promise.resolve("NotOpen"));case 15:throw new Error("Server Error (HTTP".concat(n.status,")"));case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),se=function(){var e=Object(oe.a)(le.a.mark((function e(t,a,n){var r;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(ce.api.root,"/api/game/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:a},signal:null===n||void 0===n?void 0:n.signal});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json());case 7:if(404!==r.status){e.next=11;break}return e.abrupt("return",Promise.resolve("DoesNotExist"));case 11:throw new Error("Server Error (HTTP".concat(r.status,")"));case 12:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(n.useState)((function(){return new AbortController})),t=Object(ee.a)(e,1)[0],a=ne()("storedGames",[]),r=Object(ee.a)(a,2),l=r[0],o=r[1],c=Object(n.useState)({}),s=Object(ee.a)(c,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){(null!==l&&void 0!==l?l:[]).filter((function(e){return-1===Object.keys(u).indexOf(e.gameId)})).forEach((function(e){var a=e.gameId,n=e.userToken;m((function(e){return Object(X.a)({},e,Object(i.a)({},a,null))})),se(a,n,t).then((function(e){"DoesNotExist"===e?(o((null!==l&&void 0!==l?l:[]).filter((function(e){return e.gameId!==a}))),m((function(e){return Object.keys(e).reduce((function(t,n){return n!==a?Object(X.a)({},t,Object(i.a)({},a,e[a])):t}),{})}))):m((function(t){return Object(X.a)({},t,Object(i.a)({},a,e))}))})).catch((function(e){return"DOMException"===(null===e||void 0===e?void 0:e.name)&&console.error(e)}))}))}),[l,u]),Object(n.useEffect)((function(){return function(){t.abort()}}),[]),{storedGames:(null!==l&&void 0!==l?l:[]).map((function(e){var t;return Object(X.a)({},e,{status:null!==(t=u[e.gameId])&&void 0!==t?t:null})})),storeGame:function(e,t,a){o([].concat(Object(Z.a)((null!==l&&void 0!==l?l:[]).filter((function(t){return t.gameId!==e}))),[{gameId:e,userToken:t,playerId:a,time:te.DateTime.local().toISO()}]))}}},me=(a(118),function(e){return"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),pe=function(e){var t=e.onGameSetup;Object(s.useTitle)("Monopoly Money");var a=ue().storedGames;return r.a.createElement("div",{className:"home text-center"},r.a.createElement("h1",{className:"sr-only"},"Monopoly Money"),r.a.createElement("img",{src:y.a,className:"banner",alt:"Monopoly Money Banner"}),r.a.createElement("p",{className:"lead mt-2"},"An easy way to manage finances in your game of monopoly from the browser."),r.a.createElement("div",{className:"new-join-button-wrapper mt-4"},r.a.createElement(d.a,{size:"lg",onClick:function(){return Object(s.navigate)("/new-game")}},"New Game"),r.a.createElement(d.a,{size:"lg",onClick:function(){return Object(s.navigate)("/join")}},"Join Game")),r.a.createElement("div",{className:"mt-4"},r.a.createElement("h2",null,"Your Active Games"),a.length>0?a.map((function(e){var a=e.gameId,n=e.userToken,l=e.playerId,o=e.status,c=e.time;return r.a.createElement(q.a,{key:a,className:"mb-1"},r.a.createElement(q.a.Body,{className:"p-2"},r.a.createElement("div",{className:"text-left"},"Game ",a,r.a.createElement("small",{style:{float:"right"}},te.DateTime.fromISO(c).toFormat("DD h:mm a"))),r.a.createElement("div",null,null===o||void 0===o?void 0:o.players.sort((function(e,t){return e.playerId===l?-1:0})).map((function(e){return r.a.createElement(Q.a,{key:e.playerId,variant:e.playerId===l?"dark":e.banker?"info":"success",className:"mr-1"},e.name,": ",me(e.balance))})),null!==o&&r.a.createElement(Q.a,{variant:"warning"},"Free Parking: ",me(o.freeParkingBalance))),r.a.createElement(d.a,{block:!0,size:"sm",variant:"outline-primary",onClick:function(){return t(a,n,l)},className:"mt-2"},"Join Game")))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"You have no active games"))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h2",null,"What is Monopoly Money?"),r.a.createElement("p",null,"Monopoly Money is a webapp that helps you keep track of your finances in a game of Monopoly (or any game that uses currency)."),r.a.createElement("p",null,"Instead of using the cash that the game commonly comes with, you can play Monopoly like you're playing the credit card edition, but with your phone - a much more faster way to exchange money.")))},de=(a(119),a(141)),fe=a(137),ye=a(75),ve=a(142),ge=function(e){var t=e.balance,a=e.playerId,l=e.recipient,o=e.proposeTransaction,c=e.onClose,i=Object(n.useState)(""),s=Object(ee.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)(null),f=Object(ee.a)(p,2),y=f[0],v=f[1];return r.a.createElement(de.a,{show:!0,onHide:function(){v(null),c()},size:"lg",centered:!0,className:"send-money-modal"},r.a.createElement(de.a.Header,{closeButton:!0},r.a.createElement(de.a.Title,null,"Transfer Funds to ","freeParking"===l?"Free Parking":l.name)),r.a.createElement(de.a.Body,null,r.a.createElement(fe.a,null,r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Amount")),r.a.createElement(ye.a,{type:"number",value:u,onChange:function(e){var t=e.currentTarget.value,a=parseInt(null!==t&&void 0!==t?t:"",10);m(isNaN(a)?"":"".concat(a))}}),r.a.createElement(d.a,{variant:"success",className:"remove-left-border-radius",onClick:function(){""===u?v("Please provide an amount"):parseInt(u,10)>t?v("You do not have enough money (".concat(me(t),")")):(v(null),o(a,"freeParking"===l?"freeParking":l.playerId,parseInt(u,10)),c())}},"Send")),r.a.createElement(ve.a.Text,{style:{color:"var(--danger)"}},y)))},be=a(76),he=a(146),Ee=a(138),Oe=function(e){var t=e.gameId,a=e.isBanker,l=Object(be.useClipboard)({copiedTimeout:1e3}),o=Object(n.useRef)();return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{ref:o,onClick:function(){l.copy(t)}},t),r.a.createElement(he.a,{target:o.current,show:l.copied,placement:"bottom"},(function(e){return r.a.createElement(Ee.a,Object.assign({id:"overlay-example"},e),"Copied to clipboard")})),a&&r.a.createElement("small",{className:"text-muted"},"You can hide this by closing the game in the settings."),r.a.createElement("hr",null))},ke=function(e){var t,a=e.gameId,l=e.playerId,o=e.isGameOpen,i=e.players,s=e.freeParkingBalance,u=e.proposeTransaction,m=Object(n.useState)(null),p=Object(ee.a)(m,2),f=p[0],y=p[1],v=Object(c.b)((function(){var e;return r.a.createElement(r.a.Fragment,null,null!==f&&r.a.createElement(ge,{balance:null!==(e=null===E||void 0===E?void 0:E.balance)&&void 0!==e?e:0,playerId:l,recipient:f,proposeTransaction:u,onClose:function(){return y(null)}}))}),[f]),g=Object(ee.a)(v,2),b=g[0],h=g[1];Object(n.useEffect)((function(){null!==f?b():h()}),[f,b,h]);var E=i.find((function(e){return e.playerId===l})),O=null!==(t=null===E||void 0===E?void 0:E.banker)&&void 0!==t&&t;return r.a.createElement("div",{className:"funds"},o&&r.a.createElement(Oe,{gameId:a,isBanker:O}),r.a.createElement(q.a,{className:"mb-1 text-center"},void 0!==E&&r.a.createElement(q.a.Body,{className:"p-3"},E.name,": ",me(E.balance))),r.a.createElement("div",{className:"balance-grid"},i.filter((function(e){return e.playerId!==l})).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})).map((function(e){return r.a.createElement(q.a,{key:e.name,className:"text-center"},r.a.createElement(q.a.Body,{className:"p-3"},r.a.createElement("div",null,e.name),r.a.createElement("div",null,me(e.balance)),r.a.createElement(d.a,{size:"sm",variant:"outline-dark",className:"mt-2",onClick:function(){return y(e)}},"Send Money")))}))),r.a.createElement(q.a,{className:"mt-1 text-center"},r.a.createElement(q.a.Body,{className:"p-3"},r.a.createElement("div",null,"Free Parking: ",me(s)),r.a.createElement(d.a,{size:"sm",variant:"outline-dark",className:"mt-2",onClick:function(){return y("freeParking")}},"Send Money"))))},je=a(139),Ie=a(56),we=function(e){var t,a=e.label,l=e.submitText,o=e.players,c=e.onSubmit,i=a.toLowerCase().replace(" ","-"),s=Object(n.useState)(""),u=Object(ee.a)(s,2),m=u[0],p=u[1],f=Object(n.useState)(null),y=Object(ee.a)(f,2),v=y[0],g=y[1],b=""!==m&&null!==v;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"".concat(i,"-value")},a),r.a.createElement(fe.a,null,r.a.createElement(ye.a,{type:"number",id:"".concat(i,"-value"),value:m,onChange:function(e){var t=e.currentTarget.value,a=parseInt(null!==t&&void 0!==t?t:"",10);p(isNaN(a)?"":"".concat(a))},className:"with-dollar-sign-input-icon"}),r.a.createElement("span",{className:"dollar-sign-input-icon"},"$"),r.a.createElement(je.a,{variant:"outline-secondary",id:"".concat(i,"-player"),className:"mid-dropdown",title:null!==(t=null===v||void 0===v?void 0:v.name)&&void 0!==t?t:"Select Player"},o.map((function(e){return r.a.createElement(Ie.a.Item,{key:e.playerId,onClick:function(){return g(e)}},e.name)}))),r.a.createElement(fe.a.Append,null,r.a.createElement(d.a,{variant:"outline-secondary",onClick:function(){null!==v&&(c(parseInt(m,10),v.playerId),p(""),g(null))},disabled:!b},l))))},Se=(a(122),function(e){var t,a=e.players,l=e.freeParkingBalance,o=e.onSubmit,c=Object(n.useState)(null),i=Object(ee.a)(c,2),s=i[0],u=i[1],m=null!==s;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"free-parking-player"},"Give Free Parking (",me(l),")"),r.a.createElement(fe.a,null,r.a.createElement(je.a,{as:fe.a.Prepend,variant:"outline-secondary",id:"free-parking-player",title:null!==(t=null===s||void 0===s?void 0:s.name)&&void 0!==t?t:"Select Player"},a.map((function(e){return r.a.createElement(Ie.a.Item,{key:e.playerId,onClick:function(){return u(e)}},e.name)}))),r.a.createElement(fe.a.Append,null,r.a.createElement(d.a,{variant:"outline-secondary",onClick:function(){null!==s&&(o(s.playerId),u(null))},disabled:!m},"Give"))))}),Pe=function(e){var t=e.players,a=e.freeParkingBalance,n=e.proposeTransaction;return r.a.createElement("div",{className:"bank"},r.a.createElement("div",{className:"mb-3"},r.a.createElement(we,{label:"Give Money To Player",submitText:"Send",players:t,onSubmit:function(e,t){return n("bank",t,e)}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement(we,{label:"Take Money From Player",submitText:"Take",players:t,onSubmit:function(e,t){return n("bank",t,-e)}})),r.a.createElement("div",{className:"mb-3"},r.a.createElement(Se,{players:t,freeParkingBalance:a,onSubmit:function(e){return n("freeParking",e,a)}})))},Ne=a(29),Ce=(a(128),function(e,t,a){switch(e.type){case"playerJoin":var n=a.players.find((function(t){return t.playerId===e.playerId}));return{id:"".concat(e.type+e.time),title:"Player Join",detail:"".concat(n.name," joined"),colour:"cyan"};case"playerBankerStatusChange":var r=a.players.find((function(t){return t.playerId===e.playerId}));return{id:"".concat(e.type+e.time),title:"Player Banker Status Change",detail:"".concat(r.name," was made a banker"),colour:"yellow"};case"transaction":var l="bank"===e.to?"Bank":"freeParking"===e.to?"Free Parking":a.players.find((function(t){return t.playerId===e.to})).name,o="bank"===e.from?"Bank":"freeParking"===e.from?"Free Parking":a.players.find((function(t){return t.playerId===e.from})).name;return{id:"".concat(e.type+e.time),title:"Transaction",detail:"".concat(o," \u2192 ").concat(l," (").concat(me(e.amount),")"),colour:"green"};case"playerNameChange":var c=t.players.find((function(t){return t.playerId===e.playerId})).name,i=a.players.find((function(t){return t.playerId===e.playerId})).name;return{id:"".concat(e.type+e.time),title:"Player Name Change",detail:"".concat(c," was renamed to ").concat(i),colour:"orange"};case"playerDelete":var s=t.players.find((function(t){return t.playerId===e.playerId})).name;return{id:"".concat(e.type+e.time),title:"Player Removal",detail:"".concat(s," was removed from the game"),colour:"red"};case"gameOpenStateChange":return{id:"".concat(e.type+e.time),title:"Game Open State Change",detail:"The game is now ".concat(e.open?"open":"closed"," to new players"),colour:"blue"}}}),xe=function(e){var t=e.events,a=Ne.defaultGameState,n=t.map((function(e){var t=Object(Ne.calculateGameState)([e],a),n=Ce(e,a,t);return a=t,n}));return r.a.createElement("div",{className:"history"},n.reverse().map((function(e){return r.a.createElement("div",{key:e.id,className:"event mb-2"},r.a.createElement("div",{className:"bar",style:{background:"var(--".concat(e.colour,")")}}),r.a.createElement("div",{className:"event-details"},r.a.createElement("div",{className:"title"},r.a.createElement("small",null,e.title)),r.a.createElement("div",{className:"detail"},e.detail)))})))},Ge=a(140),Te=function(e){var t=e.player,a=e.proposePlayerNameChange,l=e.onClose,o=Object(n.useState)(t.name),c=Object(ee.a)(o,2),i=c[0],s=c[1],u=Object(n.useState)(null),m=Object(ee.a)(u,2),p=m[0],f=m[1];return r.a.createElement(de.a,{show:!0,onHide:l,size:"lg",centered:!0},r.a.createElement(de.a.Header,{closeButton:!0},r.a.createElement(de.a.Title,null,"Change Player Name")),r.a.createElement(de.a.Body,null,r.a.createElement(fe.a,null,r.a.createElement(fe.a.Prepend,null,r.a.createElement(fe.a.Text,null,"Name")),r.a.createElement(ye.a,{value:i,onChange:function(e){return s(e.currentTarget.value)}}),r.a.createElement(d.a,{variant:"success",onClick:function(){f(""===i?"Name must not be empty":null),a(t.playerId,i),l()},className:"remove-left-border-radius"},"Rename")),r.a.createElement(ve.a.Text,{style:{color:"var(--danger)"}},p)))},Be=function(e){var t=e.player,a=e.proposePlayerDelete,n=e.onClose;return r.a.createElement(de.a,{show:!0,onHide:n,size:"lg",centered:!0},r.a.createElement(de.a.Header,{closeButton:!0},r.a.createElement(de.a.Title,null,"Remove Player")),r.a.createElement(de.a.Body,null,r.a.createElement("p",null,"Are you sure you want to remove ",t.name,"?")),r.a.createElement(de.a.Footer,null,r.a.createElement(d.a,{variant:"danger",onClick:n},"Cancel"),r.a.createElement(d.a,{variant:"success",className:" ml-1",onClick:function(){a(t.playerId),n()}},"Remove")))},Me=function(e){var t=e.proposeGameEnd,a=e.onClose;return r.a.createElement(de.a,{show:!0,onHide:a,size:"lg",centered:!0},r.a.createElement(de.a.Header,{closeButton:!0},r.a.createElement(de.a.Title,null,"End Game")),r.a.createElement(de.a.Body,null,r.a.createElement("p",null,"Are you sure you want to end the game?"),r.a.createElement("p",null,"This will kick everyone and you will not be able to re-join the game.")),r.a.createElement(de.a.Footer,null,r.a.createElement(d.a,{variant:"danger",onClick:a},"Cancel"),r.a.createElement(d.a,{variant:"success",className:" ml-1",onClick:function(){t(),a()}},"End Game")))},ze=function(e){var t=e.isGameOpen,a=e.players,l=e.proposePlayerNameChange,o=e.proposePlayerDelete,i=e.proposeGameOpenStateChange,s=e.proposeGameEnd,u=Object(n.useState)(null),m=Object(ee.a)(u,2),p=m[0],f=m[1],y=Object(c.b)((function(){return r.a.createElement(r.a.Fragment,null,null!==p&&r.a.createElement(Te,{player:p,proposePlayerNameChange:l,onClose:b}))}),[p]),v=Object(ee.a)(y,2),g=v[0],b=v[1],h=Object(c.b)((function(){return r.a.createElement(r.a.Fragment,null,null!==p&&r.a.createElement(Be,{player:p,proposePlayerDelete:o,onClose:k}))}),[p]),E=Object(ee.a)(h,2),O=E[0],k=E[1],j=Object(c.b)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,{proposeGameEnd:s,onClose:S}))}),[p]),I=Object(ee.a)(j,2),w=I[0],S=I[1];return r.a.createElement("div",null,r.a.createElement(Ge.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Balance"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.playerId},r.a.createElement("td",null,e.name),r.a.createElement("td",null,me(e.balance)),r.a.createElement("td",null,r.a.createElement(d.a,{variant:"outline-secondary",size:"sm",title:"Rename",onClick:function(){f(e),g()}},r.a.createElement("span",{role:"img","aria-label":"Rename"},"\u270f\ufe0f")),r.a.createElement(d.a,{variant:"outline-danger",size:"sm",title:"Remove",className:"ml-1",onClick:function(){f(e),O()}},r.a.createElement("span",{role:"img","aria-label":"Remove"},"\ud83d\uddd1\ufe0f"))))})))),r.a.createElement(d.a,{block:!0,variant:"primary",onClick:function(){return i(!t)}},t?"Close":"Open"," Game To New Players"),r.a.createElement(d.a,{block:!0,variant:"danger",onClick:function(){return w()}},"End Game"))},De=function(e){var t=e.newGame,a=e.onGameSetup,l=t?"Create Game":"Join Game",o=Object(n.useState)(""),c=Object(ee.a)(o,2),i=c[0],u=c[1],m=Object(n.useState)(""),p=Object(ee.a)(m,2),f=p[0],y=p[1],v=Object(n.useState)(null),g=Object(ee.a)(v,2),b=g[0],h=g[1],E=Object(n.useState)(null),O=Object(ee.a)(E,2),k=O[0],j=O[1];Object(s.useTitle)("".concat(l," - Monopoly Money"));var I=function(){if(t){if(""===f)return void j("Please provide your name");j(null),function(e){return fetch("".concat(ce.api.root,"/api/game"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){if(200===e.status)return e.json();throw new Error("Server Error (HTTP".concat(e.status,")"))}))}(f).then((function(e){a(e.gameId,e.userToken,e.playerId)})).catch((function(e){return console.log(e)}))}else{if(""===i)return void h("Please provide the game Id");if(h(null),""===f)return void j("Please provide your name");j(null),ie(i,f).then((function(e){"DoesNotExist"===e?h("That game does not exist"):"NotOpen"===e?h("That game is not open. Ask the banker to open the game."):a(e.gameId,e.userToken,e.playerId)})).catch((function(e){return console.log(e)}))}};return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,l),!t&&r.a.createElement(ve.a.Group,null,r.a.createElement(ve.a.Label,null,"Game Id"),r.a.createElement(ve.a.Control,{placeholder:"123456",value:i,className:"text-center",onChange:function(e){var t;u(null!==(t=e.currentTarget.value)&&void 0!==t?t:"")}}),r.a.createElement(ve.a.Text,{style:{color:"var(--danger)"}},b)),r.a.createElement(ve.a.Group,null,r.a.createElement(ve.a.Label,null,"Your Name"),r.a.createElement(ve.a.Control,{placeholder:"Name",value:f,className:"text-center",onChange:function(e){y(e.currentTarget.value)},onKeyDown:function(e){return"Enter"===e.key&&I()}}),r.a.createElement(ve.a.Text,{style:{color:"var(--danger)"}},k)),r.a.createElement(d.a,{block:!0,variant:"primary",onClick:I},t?"Create":"Join"))},Re=a(78),Fe=a(79),He=a(80),Je=function(){function e(t,a,n,r,l){var o=this;Object(Fe.a)(this,e),this.gameId=void 0,this.userToken=void 0,this.playerId=void 0,this.onGameStateChange=void 0,this.onDisplayMessage=void 0,this.events=[],this.webSocket=void 0,this.gameState=Ne.defaultGameState,this.gameEnd=function(e){switch(o.webSocket.close(),e){case"end":o.onDisplayMessage("The game has been ended by the banker");break;case"removed":o.onDisplayMessage("You have been removed from the game");break;case"unexpectedWebSocketClosure":o.onDisplayMessage("Unexpectedly disconnection from the server")}},this.gameId=t,this.userToken=a,this.playerId=n,this.onGameStateChange=r,this.onDisplayMessage=l;var c=ce.api.root.replace(/http?/g,"ws");this.webSocket=new WebSocket("".concat(c,"/api/events")),this.webSocket.onmessage=this.onWebSocketMessage.bind(this),this.webSocket.addEventListener("open",(function(e){var t={type:"auth",gameId:o.gameId,userToken:o.userToken};o.webSocket.send(JSON.stringify(t))})),this.webSocket.addEventListener("close",(function(e){e.wasClean||(o.gameEnd("unexpectedWebSocketClosure"),o.onGameStateChange(!0))}))}return Object(He.a)(e,[{key:"getState",value:function(){return this.gameState}},{key:"getEvents",value:function(){return this.events}},{key:"amIABanker",value:function(){var e,t=this,a=this.gameState.players.find((function(e){return e.playerId===t.playerId}));return null!==(e=null===a||void 0===a?void 0:a.banker)&&void 0!==e&&e}},{key:"proposeTransaction",value:function(e,t,a){var n={time:"",actionedBy:"",type:"transaction",from:e,to:t,amount:a};this.submitEvent(n)}},{key:"proposePlayerNameChange",value:function(e,t){var a={time:"",actionedBy:"",type:"playerNameChange",playerId:e,name:t};this.submitEvent(a)}},{key:"proposePlayerDelete",value:function(e){var t={time:"",actionedBy:"",type:"playerDelete",playerId:e};this.submitEvent(t)}},{key:"proposeGameOpenStateChange",value:function(e){var t={time:"",actionedBy:"",type:"gameOpenStateChange",open:e};this.submitEvent(t)}},{key:"proposeGameEnd",value:function(){this.webSocket.send(JSON.stringify({type:"proposeEndGame"}))}},{key:"onWebSocketMessage",value:function(e){var t=JSON.parse(e.data);"initialEventArray"===t.type?(this.events=t.events,this.gameState=Object(Ne.calculateGameState)(this.events,this.gameState)):"newEvent"===t.type?(this.events.push(t.event),this.gameState=Object(Ne.calculateGameState)([t.event],this.gameState)):"gameEnd"===t.type&&this.gameEnd("end");var a=-1!==this.gameState.players.map((function(e){return e.playerId})).indexOf(this.playerId);a||this.gameEnd("removed");var n="gameEnd"===t.type||!a;this.onGameStateChange(n)}},{key:"submitEvent",value:function(e){var t={type:"proposeEvent",event:e};this.webSocket.send(JSON.stringify(t))}}]),e}(),Ae=function(e){var t=Re.a.info(e,{position:"bottom-center",hideAfter:10,onClick:function(){return t&&t()}}).hide},Le=function(){var e=Object(n.useState)(null),t=Object(ee.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),o=Object(ee.a)(l,2)[1],c=Object(n.useCallback)((function(){return o({})}),[]);return{initialize:function(e){var t=e.gameId,a=e.userToken,n=e.playerId;r(new Je(t,a,n,(function(e){e?r(null):c()}),Ae))},clear:function(){null!==a&&a.gameEnd(null),r(null)},authInfo:null===a?null:{gameId:a.gameId,userToken:a.userToken,playerId:a.playerId},game:null===a?null:Object(X.a)({},a.getState(),{gameId:a.gameId,playerId:a.playerId,isBanker:a.amIABanker(),events:a.getEvents(),actions:{proposeTransaction:a.proposeTransaction.bind(a),proposePlayerNameChange:a.proposePlayerNameChange.bind(a),proposePlayerDelete:a.proposePlayerDelete.bind(a),proposeGameOpenStateChange:a.proposeGameOpenStateChange.bind(a),proposeGameEnd:a.proposeGameEnd.bind(a)}})}},We=function(e,t){return r.a.createElement(_,{route:e},r.a.createElement(K,null,t))},Ye=function(){var e,t,a=ue().storeGame,l=Le(),o=l.game,c=l.authInfo,u=l.initialize,m=l.clear,p=Object(s.usePath)();Object(n.useEffect)((function(){p!==A.home&&p!==A.join&&p!==A.newGame||f()}),[p]),Object(n.useEffect)((function(){-1===Object.values(A).indexOf(p)&&Object(s.navigate)("/")}),[p]),Object(n.useEffect)((function(){null===o&&Object(s.navigate)("/")}),[o]);var d=function(e,t,n){null!==c&&a(c.gameId,c.userToken,c.playerId),u({gameId:e,userToken:t,playerId:n}),a(e,t,n),Object(s.navigate)("/funds")},f=function(){null!==c&&a(c.gameId,c.userToken,c.playerId),m()},y=function(){return r.a.createElement(pe,{onGameSetup:d})},v=(e={},Object(i.a)(e,A.home,(function(){return We(A.home,r.a.createElement(pe,{onGameSetup:d}))})),Object(i.a)(e,A.join,(function(){return We(A.join,r.a.createElement(De,{newGame:!1,onGameSetup:d}))})),Object(i.a)(e,A.newGame,(function(){return We(A.newGame,r.a.createElement(De,{newGame:!0,onGameSetup:d}))})),Object(i.a)(e,A.funds,null!==o?function(){return We(A.funds,r.a.createElement(ke,{gameId:o.gameId,playerId:o.playerId,isGameOpen:o.open,players:o.players,freeParkingBalance:o.freeParkingBalance,proposeTransaction:o.actions.proposeTransaction}))}:function(){return r.a.createElement(y,null)}),Object(i.a)(e,A.bank,null!==o&&o.isBanker?function(){return We(A.bank,r.a.createElement(Pe,{players:o.players,freeParkingBalance:o.freeParkingBalance,proposeTransaction:o.actions.proposeTransaction}))}:function(){return r.a.createElement(y,null)}),Object(i.a)(e,A.history,null!==o?function(){return We(A.history,r.a.createElement(xe,{events:o.events}))}:function(){return r.a.createElement(y,null)}),Object(i.a)(e,A.settings,null!==o&&o.isBanker?function(){return We(A.settings,r.a.createElement(ze,{isGameOpen:o.open,players:o.players,proposePlayerNameChange:o.actions.proposePlayerNameChange,proposePlayerDelete:o.actions.proposePlayerDelete,proposeGameOpenStateChange:o.actions.proposeGameOpenStateChange,proposeGameEnd:o.actions.proposeGameEnd}))}:function(){return r.a.createElement(y,null)}),e),g=Object(s.useRoutes)(v);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{inGame:null!==o,isBanker:null!==(t=null===o||void 0===o?void 0:o.isBanker)&&void 0!==t&&t}),r.a.createElement("div",{className:"my-3"},g||r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(123);t.defaultGameState=n.defaultGameState,t.calculateGameState=n.calculateGameState},30:function(e,t,a){e.exports=a.p+"static/media/banner.6db68e8e.png"},82:function(e,t,a){e.exports=a(129)},87:function(e,t,a){},99:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.e8d4c6b9.chunk.js.map