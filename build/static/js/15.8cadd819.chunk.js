(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15],{459:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(138),r=function(e){return{type:a.b,payload:e}},c=function(){return{type:a.c}},u=function(){return{type:a.a}}},500:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n.n(a),c=n(496),u=n(96),o=n(75),i=n(2),s=n(508),p=n(42),d=n(454),f=n.n(d),m=n(101),l=n(0),b=n(18),j=n(459),h=n(38),y=[{title:"\u0418\u043c\u044f",dataIndex:"name",key:"name",render:function(e){return Object(i.jsx)("a",{children:e})}},{title:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",dataIndex:"username",key:"username"},{title:"email",dataIndex:"email",key:"email"},{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",dataIndex:"phone",key:"phone"},{title:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",dataIndex:"company",key:"company"}],x=function(e){return{key:e.id,name:e.name,username:e.username,email:e.email,phone:e.phone,company:e.company.name}};t.default=Object(h.b)((function(e){return{putUserData:e.user.putUserData}}),{putUserData:j.b})((function(e){var t=e.putUserData,n=Object(l.useState)([]),a=Object(o.a)(n,2),d=a[0],j=a[1],h=Object(l.useState)(!1),O=Object(o.a)(h,2),k=O[0],v=O[1],w=Object(p.g)();return Object(l.useEffect)((function(){(function(){var e=Object(u.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout(v(!0),1e3),t=[],e.next=4,f.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){t=Object(c.a)(e.data)})).catch((function(e){return console.log(e)}));case 4:if(e.sent,!(t.length>0)){e.next=10;break}n=t.map((function(e){return x(e)})),j(n),e.next=11;break;case 10:return e.abrupt("return",[]);case 11:v(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),k?Object(i.jsx)(m.a,{}):Object(i.jsx)("div",{className:"ant-table-wrapper",children:Object(i.jsx)(s.a,{columns:y,dataSource:d,onRow:function(e,n){return{onClick:function(n){"A"===n.target.nodeName&&(t(e),w.push("".concat(b.c,"/user-edit")))}}}})})}))}}]);
//# sourceMappingURL=15.8cadd819.chunk.js.map