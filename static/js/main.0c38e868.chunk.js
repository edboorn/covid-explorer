(this["webpackJsonpcovid-explorer"]=this["webpackJsonpcovid-explorer"]||[]).push([[0],{192:function(e,t,a){e.exports=a(397)},197:function(e,t,a){},198:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(59),l=a.n(c),o=(a(197),a(198),a(21)),s=a(24),u=a(7),i=a.n(u),m=a(12),d=a(11),p=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},v=a(63),E=a(41),f=a.n(E),b="https://covidapi.info/api/v1",h=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/global"));case 3:return t=e.sent,a=t.data,n=a.date,r=a.result,e.abrupt("return",{date:n,result:r});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/global/count"));case 3:return t=e.sent,a=t.data,n=Object.entries(a.result).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(v.a)({},n,{date:a})})),e.abrupt("return",{formattedData:n});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(i.a.mark((function e(t,a,n){var r,c,l,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/country/").concat(t,"/timeseries/").concat(a,"/").concat(n));case 3:return r=e.sent,c=r.data,l=c.count,o=c.result,e.abrupt("return",{count:l,result:o,isError:!1});case 10:return e.prev=10,e.t0=e.catch(0),s={count:0,result:[],isError:!0},e.abrupt("return",s);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/global/latest"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},x=function(e){e.handleStatsChange;var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];if(Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,h();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),void 0===c.result)return r.a.createElement("p",null);var o=p(c.result.confirmed),s=p(c.result.recovered),u=p(c.result.deaths);return r.a.createElement("div",null,r.a.createElement("h3",null," How is the world doing on ",c.date," "),r.a.createElement("p",null,"There are currently ",o," confirmed cases, ",s," recoveries and ",u," deaths"))},w=a(8),O=function(e){return r.a.createElement("div",null,r.a.createElement(w.e,{width:"100%",height:700},r.a.createElement(w.d,{data:e.graphData.formattedData},r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"confirmed",stroke:"#8884d8"}),r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"deaths",stroke:"#FF2D00"}),r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"recovered",stroke:"#27FF00"}),r.a.createElement(w.g,{dataKey:"date"}),r.a.createElement(w.b,null),r.a.createElement(w.f,null),r.a.createElement(w.a,null),r.a.createElement(w.h,null))))},j=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),void 0===a||0===a.length?r.a.createElement(k,null):r.a.createElement("div",null,r.a.createElement(O,{graphData:a}))};function C(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(x,null))),r.a.createElement(j,null))}var D=a(62),S=a.n(D),F=function(e){var t=Object.entries(e.graphData).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(v.a)({},n,{countryCode:a})})),a=p(t[0].confirmed),n=p(t[0].recovered),c=p(t[0].deaths);!function(e){if("null"!==e)return S.a.byIso(t[0].countryCode);console.log(e)}(t[0].countryCode);return null===a?r.a.createElement(k,null):r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,t[0].countryCode),r.a.createElement("p",null," Confirmed Cases - ",a," "),r.a.createElement("p",null," Recovered Cases -",n," "),r.a.createElement("p",null," Deaths - ",c," "),r.a.createElement(o.b,{to:"/covid-explorer/country-data/".concat(t[0].countryCode),className:"btn btn-dark btn-block"},"View More"))))},I=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(d.a)(l,2);o[0],o[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return void 0===a.result?r.a.createElement(k,null):r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null," Data on ",a.count," countries "),r.a.createElement("h3",null," Last Updated on ",a.date))),r.a.createElement("p",null),r.a.createElement("div",{className:"row"},a.result.map((function(e,t){return r.a.createElement(F,{key:t,graphData:e})}))))},K=function(e){var t=e.graphData;return r.a.createElement("div",{className:"graphRender"},r.a.createElement(w.e,{width:"95%",height:700},r.a.createElement(w.d,{data:t},r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"confirmed",stroke:"#8884d8"}),r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"deaths",stroke:"#FF2D00"}),r.a.createElement(w.c,{strokeWidth:2,type:"monotone",dataKey:"recovered",stroke:"#27FF00"}),r.a.createElement(w.g,{dataKey:"date"}),r.a.createElement(w.b,null),r.a.createElement(w.f,null),r.a.createElement(w.a,null),r.a.createElement(w.h,null))))};function W(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-",t=new Date,a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(r).concat(e).concat(n<10?"0".concat(n):"".concat(n)).concat(e).concat(a)}(),t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)("2020-01-01"),p=Object(d.a)(u,2),v=p[0],E=p[1],f=Object(n.useState)(e),b=Object(d.a)(f,2),h=b[0],g=b[1],N=Object(s.f)();Object(n.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,y(N.countryCode,v,h);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v,h]);if(c.isError)return r.a.createElement("div",null,r.a.createElement("h1",null,"Ooops!"),r.a.createElement("h3",null,"There has been an error"),r.a.createElement("h4",null," ","This may be because you selected dates that are not currently returned by the api"),r.a.createElement(o.b,{to:"/covid-explorer/countries",className:"btn btn-dark btn-sm mb-4"},"Click me to go back!"));if(void 0===c.result||0===c.result.length)return r.a.createElement(k,null);var x=S.a.byIso(N.countryCode);return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2"},r.a.createElement(o.b,{to:"/covid-explorer/countries",className:"btn btn-dark btn-sm mb-4"},"Go Back")),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("h3",null,x.country)),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"}," Start and End Date ")),r.a.createElement("input",{type:"date",className:"form-control",placeholder:"StartDate",onChange:function(e){E(e.target.value)},defaultValue:v,min:"2020-01-01",max:e}),r.a.createElement("input",{type:"date",className:"form-control",placeholder:"EndDate",onChange:function(e){g(e.target.value)},defaultValue:e,min:"2020-01-01",max:e})))),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){E("2020-01-01"),g(e)}},"Reset"))),r.a.createElement(K,{graphData:c.result}))}function V(){return r.a.createElement(o.a,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/covid-explorer"},"COVID-19 Explorer"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(o.b,{className:"nav-item",to:"/covid-explorer"},r.a.createElement("li",{className:"nav-link"},"Home")),r.a.createElement(o.b,{className:"nav-item",to:"/covid-explorer/countries"},r.a.createElement("li",{className:"nav-link"},"Countries"))))),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/covid-explorer",exact:!0,component:C}),r.a.createElement(s.a,{path:"/covid-explorer/countries",exact:!0,component:I}),r.a.createElement(s.a,{path:"/covid-explorer/country-data/:countryCode",exact:!0,component:W}))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("a",{className:"socialItemLink",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/edboorn"}," ","Designed and built by Edward Boorn"," ")),r.a.createElement("div",{className:"col-sm-6"}," "),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("a",{className:"socialItemLink",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/CSSEGISandData/COVID-19"}," ","Data Source"," ")))))}var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[192,1,2]]]);
//# sourceMappingURL=main.0c38e868.chunk.js.map