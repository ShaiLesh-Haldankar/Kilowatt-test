(this["webpackJsonptoken-apps"]=this["webpackJsonptoken-apps"]||[]).push([[3],{77:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(22);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(c=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);c=!0);}catch(l){r=!0,i=l}finally{try{c||null==a.return||a.return()}finally{if(r)throw i}}return n}}(e,t)||Object(c.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0),n(79);var c=n(41),r=n(20),i=n(3);function s(){return Object(i.jsx)("div",{className:"header-component-main",children:Object(i.jsx)("div",{children:Object(i.jsx)(r.b,{to:"/",children:Object(i.jsx)("img",{src:c.a.fullLogo,alt:"kilowatt"})})})})}},79:function(e,t,n){},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(77),r=n(0),i=n.n(r),s=n(26),a=n.n(s),l=(n(81),n(41)),o=n(3);function j(e){var t=e.closeIt,n=e.handleDelete,r=i.a.useState(!1),s=Object(c.a)(r,2),j=s[0],u=s[1];return a.a.createPortal(Object(o.jsx)("div",{className:"confirmation-modal-main",children:Object(o.jsxs)("section",{className:"confirmation-modal",children:[Object(o.jsx)("h4",{children:"Are you sure?"}),Object(o.jsx)("img",{src:l.a.delete}),j?"":Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){n(),u(!0)},children:"Yes"}),Object(o.jsx)("button",{onClick:function(){return t()},children:"No"})]})]})}),document.body)}},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var c=n(15),r=n.n(c),i=n(14),s=n(25),a=n(9),l=n(23),o=n(77),j=n(0),u=n.n(j),d=n(78),x=(n(82),n(83),n(24)),b=n.n(x),h=n(20),O=n(13),f=n(3);function m(e){var t=e.setOpenModal,n=u.a.useContext(O.a).usersList;return Object(f.jsxs)("div",{className:"user-table-main",children:[Object(f.jsx)("header",{children:p.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)("h6",{children:e.title})},e.keyId)}))}),Object(f.jsx)("section",{children:n.length?n.map((function(e){return Object(f.jsxs)("div",{className:"user-table-row",children:[Object(f.jsx)("div",{children:Object(f.jsx)("h6",{children:e.name})}),Object(f.jsx)("div",{children:Object(f.jsx)("h6",{children:e.email})}),Object(f.jsx)("div",{children:Object(f.jsx)("h6",{children:e.company.name})}),Object(f.jsx)("div",{children:Object(f.jsx)(h.b,{to:"/user/".concat(e.id),children:"View"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return t(e.id)},children:Object(f.jsx)("img",{src:"https://img.icons8.com/material-sharp/48/ce392f/filled-trash.png"})})})]})})):[1,2,3,4,5,7].map((function(e){return Object(f.jsxs)("div",{className:"utr-loader",children:[Object(f.jsxs)("h6",{children:[Object(f.jsx)("span",{children:"xxxxxxxx"})," "]}),Object(f.jsxs)("h6",{children:[Object(f.jsx)("span",{children:"xxxxxxxx"})," "]}),Object(f.jsxs)("h6",{children:[Object(f.jsx)("span",{children:"xxxxxxxx"})," "]}),Object(f.jsxs)("h6",{children:[Object(f.jsx)("span",{children:"xxxxxxxx"})," "]})]})}))})]})}var p=[{keyId:b()(),title:"Name"},{keyId:b()(),title:"Email"},{keyId:b()(),title:"Company"},{keyId:b()(),title:"Action"},{keyId:b()(),title:"Others"}],v=n(21),y=n(80);function k(){var e=u.a.useContext(O.a),t=e.updateState,n=e.usersObject,c=e.usersList,j=u.a.useState(""),x=Object(o.a)(j,2),b=x[0],h=x[1],p=function(){var e=Object(l.a)(r.a.mark((function e(){var l,o,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.d)(b);case 3:e.sent,delete(o=n)[b],j=c.filter((function(e){return e.id!==b})),t((l={},Object(i.a)(l,"usersObject",Object(a.a)({},o)),Object(i.a)(l,"usersList",Object(s.a)(j)),l)),h(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0),h("");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"all-users-page-main",children:[b&&Object(f.jsx)(y.a,{handleDelete:p,closeIt:function(){return h("")}}),Object(f.jsx)(d.a,{}),Object(f.jsx)(m,{setOpenModal:h})]})}}}]);
//# sourceMappingURL=3.8032e89c.chunk.js.map