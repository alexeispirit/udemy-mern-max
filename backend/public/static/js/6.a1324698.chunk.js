(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{42:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(45);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},45:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},46:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c}));var a=function(){return{type:"REQUIRE"}},r=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},c=function(e,t){var n=!0,a=!0,r=!1,i=void 0;try{for(var c,l=t[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var u=c.value;"REQUIRE"===u.type&&(n=n&&e.trim().length>0),"MINLENGTH"===u.type&&(n=n&&e.trim().length>=u.val),"MAXLENGTH"===u.type&&(n=n&&e.trim().length<=u.val),"MIN"===u.type&&(n=n&&+e>=u.val),"MAX"===u.type&&(n=n&&+e<=u.val),"EMAIL"===u.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(o){r=!0,i=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}},48:function(e,t,n){},51:function(e,t,n){"use strict";var a=n(10),r=n(43),i=n(0),c=n.n(i),l=n(46),u=(n(52),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)({},e,{value:t.value,isValid:Object(l.d)(t.value,t.validators)});case"TOUCH":return Object(r.a)({},e,{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(a.a)(t,2),r=n[0],l=n[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",value:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},52:function(e,t,n){},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(10),r=n(45),i=n(43),c=n(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)({},e,{inputs:Object(i.a)({},e.inputs,Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),i=n(10),c=n(0),l=n.n(c),u=n(8),o=n(51),s=n(44),p=n(42),d=n(46),f=n(53),v=n(50),b=n(49),O=n(15),m=n(11);n(56);t.default=function(){var e=Object(c.useContext)(m.a),t=Object(v.a)(),n=t.isLoading,a=t.error,y=t.sendRequest,E=t.clearError,j=Object(c.useState)(),h=Object(i.a)(j,2),V=h[0],T=h[1],I=Object(u.h)().placeId,N=Object(u.g)(),g=Object(f.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),w=Object(i.a)(g,3),A=w[0],C=w[1],P=w[2];Object(c.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(y("".concat("http://localhost:5000/api","/places/").concat(I)));case 3:e=t.sent,T(e.place),P({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),null,null,[[0,8]])}()}),[y,I,P]);return n?l.a.createElement("div",{className:"center"},l.a.createElement(O.a,null)):V||a?l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{error:a,onClear:E}),!n&&V&&l.a.createElement("form",{className:"place-form",onSubmit:function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,r.a.awrap(y("".concat("http://localhost:5000/api","/places/").concat(I),"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}));case 4:N.push("/".concat(e.userId,"/places")),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),null,null,[[1,7]])}},l.a.createElement(o.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title",onInput:C,initialValue:V.title,initialValid:!0}),l.a.createElement(o.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.b)(5)],errorText:"Please enter a valid description (min 5 characters).",onInput:C,initialValue:V.description,initialValid:!0}),l.a.createElement(s.a,{type:"submit",disabled:!A.isValid},"UPDATE PLACE"))):l.a.createElement("div",{className:"center"},l.a.createElement(p.a,null,l.a.createElement("h2",null,"Could not find place")))}}}]);
//# sourceMappingURL=6.a1324698.chunk.js.map