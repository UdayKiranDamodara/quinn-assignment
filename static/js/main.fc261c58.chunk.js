(this.webpackJsonpquinn=this.webpackJsonpquinn||[]).push([[0],{50:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(27),s=n.n(c),r=(n(50),n(93),n(82),n(83),n(84),n(2)),o=function(){return Object(r.jsxs)("div",{className:"days-container",children:[Object(r.jsx)("div",{className:"days-item",children:"S"}),Object(r.jsx)("div",{className:"days-item",children:"M"}),Object(r.jsx)("div",{className:"days-item",children:"T"}),Object(r.jsx)("div",{className:"days-item",children:"W"}),Object(r.jsx)("div",{className:"days-item",children:"T"}),Object(r.jsx)("div",{className:"days-item",children:"F"}),Object(r.jsx)("div",{className:"days-item",children:"S"})]})},i=n(12),l=(n(86),Object(a.createContext)()),u=function(e){var t=Object(a.useState)(new Date),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsx)(l.Provider,{value:[c,s],children:e.children})},d=(n(87),n(22)),j=(n(88),n(89),n(29)),g=n(30),h=function(e){var t=e.data,n=t.date.getDate(),a=t.date.getDay(),c=t.data[0],s=void 0!==c?c.media[0].mediaurl:null,o=void 0!==c?c.rating:null,i=[];if(null!==o)for(var l=o,u=0;u<5;u++)l>0?(i.push(Object(r.jsx)(j.a,{icon:g.a,size:"xs",className:"star",style:{color:"lightblue"}})),l--):i.push(Object(r.jsx)(j.a,{icon:g.a,size:"xs",className:"star",style:{color:"lightgray"}}));var d={"hair cut":"Cu","protein treatment":"Pr","hair color":"HC","deep conditioning":"DC",clarifying:"C"},h=void 0!==c?c.typeofday:null;return console.log(c),console.log(s),console.log(o),Object(r.jsxs)("div",{className:0===a?"grid-item sunday":"grid-item",children:[Object(r.jsx)("div",{className:"date",children:1===n?"".concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][t.date.getMonth()]," ").concat(n):n}),Object(r.jsx)("div",{className:"rating",children:null!==o?Object(r.jsx)("div",{children:i}):Object(r.jsx)("h4",{})}),Object(r.jsx)("div",{className:"image",children:null!==s?Object(r.jsx)("img",{className:"image-item",src:s}):Object(r.jsx)("div",{className:"image-height"})}),Object(r.jsx)("div",{className:"legend",children:null!==h?h.map((function(e){return Object(r.jsx)("div",{className:"legend-item",children:d[e]})})):Object(r.jsx)("div",{})})]})},m=function(e){var t=Object(a.useContext)(l),n=Object(i.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),s=Object(i.a)(c,2),o=s[0],u=s[1],j=[];Object(a.useEffect)((function(){g(null)}),[]);var g=function e(t){console.log("fetching Data for token:",t),fetch("https://devapi.quinn.care/graph",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requestobjects:[{posts:{operationtype:"read",id:{return:!0},userid:{searchvalues:["41329663-5834-11eb-8e6e-3ca82abc3dd4"],return:!0},iscalendarentry:{searchvalues:["true"],return:!0},media:{return:!0},rating:{return:!0},text:{return:!0},privacy:{searchvalues:[18],return:!0},typeofday:{return:!0},calendardatetime:{return:!0,sort:"ascending"},maxitemcount:"20",continuationtoken:t}}]})}).then((function(e){return e.json()})).then((function(t){var n=t.responseobjects[0].posts;console.log("temp",n);var a=t.responseobjects[0].continuationtoken;console.log("cont token: ",a),j=[].concat(Object(d.a)(j),Object(d.a)(n)),null!==a?e(a):m()})).catch((function(e){return console.log("error",e)}))},m=function(){console.log("in pre-process"),console.log("posts: ",j);var e=j.length;console.log("length: ",e);var t=j.map((function(e,t){var n=e.calendardatetime.split("-");return n[2]=n[2].slice(0,2),new Date(n[0],n[1],n[2])}));console.log(t),b(t)},b=function(e){var t=new Date(e[0].getFullYear(),e[0].getMonth(),e[0].getDate()-e[0].getDay()),n=new Date(e[e.length-1].getFullYear(),e[e.length-1].getMonth(),e[e.length-1].getDate()-e[e.length-1].getDay()+6);console.log(t),console.log(n);for(var a=function(){console.log(c);var t=e.map((function(e,t){return e.getDate()===c.getDate()&&e.getMonth()===c.getMonth()&&e.getFullYear()===c.getFullYear()&&t})).filter((function(e){return!1!==e})),n={date:new Date(c.getFullYear(),c.getMonth(),c.getDate()),data:t.map((function(e){return j[e]}))};console.log(n),u((function(e){return[].concat(Object(d.a)(e),[n])}))},c=t;c<=n;c.setDate(c.getDate()+1))a();console.log(o)};return Object(r.jsx)("div",{className:"grid-container",children:o.map((function(e,t){return Object(r.jsx)(h,{data:e},t)}))})};var b=function(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay()-14),console.log(typeof String(e)),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(m,{})]})};s.a.render(Object(r.jsx)(u,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.fc261c58.chunk.js.map