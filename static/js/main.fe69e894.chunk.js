(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),i=c.n(r),a=(c(11),c(3)),d=c.n(a),j=c(5),h=c(6),l=(c(13),c(0)),o=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],r=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.statewise),s(c.statewise);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container-fluid mt-5",children:[Object(l.jsx)("div",{className:"main-heading",children:Object(l.jsxs)("h1",{className:"mb-5 text-center",children:[Object(l.jsx)("span",{className:"font-weight-bold",children:"INDIA "}),"COVID-19 DASHBOARD"]})}),Object(l.jsx)("div",{className:"table-responsive",children:Object(l.jsxs)("table",{className:"table table-hover",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"State"}),Object(l.jsx)("th",{children:"Confirmed"}),Object(l.jsx)("th",{children:"recovered"}),Object(l.jsx)("th",{children:"deaths"}),Object(l.jsx)("th",{children:"active"}),Object(l.jsx)("th",{children:"updated"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.state}),Object(l.jsx)("td",{children:e.confirmed}),Object(l.jsx)("td",{children:e.recovered}),Object(l.jsx)("td",{children:e.deaths}),Object(l.jsx)("td",{children:e.active}),Object(l.jsx)("td",{children:e.lastupdatedtime})]},t)}))})]})})]})})},b=(c(15),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o,{})})}),u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.fe69e894.chunk.js.map