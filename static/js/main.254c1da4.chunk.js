(this["webpackJsonpbinary-to-decimal"]=this["webpackJsonpbinary-to-decimal"]||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},19:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),u=t(8),c=t.n(u),i=t(4),o=t(1),l=t(2);function f(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 36px auto;\n    padding: 36px 72px 72px;\n    max-width: 720px;\n    background: #ffffff;\n"]);return f=function(){return n},n}var d=l.a.div(f());function s(){var n=Object(o.a)(["\n    border: 1px solid #dddddd;\n    padding: 8px;\n    min-width: 240px;\n\n    &:disabled {\n        background: #dddddd;\n        box-shodow: none;\n    }\n"]);return s=function(){return n},n}var p=l.a.input(s());function v(){var n=Object(o.a)(["\n    font-size: 16px;\n    font-weight: 500;\n    margin: 8px 0;\n"]);return v=function(){return n},n}var m=l.a.p(v());function b(){var n=Object(o.a)(["\n    margin: 32px 0;\n"]);return b=function(){return n},n}var g=l.a.h1(b());function x(){var n=Object(o.a)(["\n    color: red;\n"]);return x=function(){return n},n}var h=l.a.p(x()),j=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],u=e[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],f=o[1],s=Object(r.useState)(""),v=Object(i.a)(s,2),b=v[0],x=v[1],j=function(n){return""===n},E=function(){u(""),f("")};return a.a.createElement(d,null,a.a.createElement(g,null,"Binary To Decimal"),a.a.createElement("div",null,a.a.createElement(m,null,"Binary:"),a.a.createElement(p,{value:t,onChange:function(n){if(j(n.target.value))E();else{var e=n.target.value;if(e.match(/^[0-1]+$/)){x("");var t=e.split("").map(Number).reverse().reduce((function(n,e,t){return n+(1===e?Math.pow(2,t):0)}));u(e),f(t)}else x('You can only enter "0" or "1"')}}})),a.a.createElement("div",null,a.a.createElement(m,null,"Decimal:"),a.a.createElement(p,{value:l,onChange:function(n){if(j(n.target.value))E();else{var e=parseInt(n.target.value);if(isNaN(e))x("You can only enter Decimal");else if(f(e),0!==e){for(var t=[];Math.floor(e)>0;)t.push(e%2),e=Math.floor(e/2);t.reverse();var r=t.reduce((function(n,e){return n+e.toString()}));u(r)}else u(0)}}})),b&&a.a.createElement(h,null,"Error: ",b))};t(19);c.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.254c1da4.chunk.js.map