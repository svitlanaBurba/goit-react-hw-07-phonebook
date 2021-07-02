(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,s,d=n(0),l=n.n(d),b=n(11),u=n.n(b),j=(n(29),n(12)),m=n(13),h=n(16),p=n(14),O=n(6),x=n(5),f=n(3),g=Object(f.b)("contacts/Add"),C=Object(f.b)("contacts/Delete"),y=n(7),v=n(8),k=v.a.form(r||(r=Object(y.a)(["\n  width: 50vw;\n  padding: 16px;\n  border: 2px solid grey;\n  border-radius: 4px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),w=v.a.input(a||(a=Object(y.a)(["\n  display: block;\n  min-width: 300px;\n  padding: 5px 10px;\n  margin-bottom: 15px;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  :focus {\n    outline: none;\n    border: 3px solid lightblue;\n  }\n"]))),A=v.a.label(c||(c=Object(y.a)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 18px;\n"]))),z=v.a.button(i||(i=Object(y.a)(["\n  padding: 2px 10px;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  background-color: white;\n  font-size: 16px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  :hover {\n    background-color: lightblue;\n    color: white;\n    border-color: lightblue;\n  }\n"]))),S=n(1),F=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("Adding new"),console.dir(e.props),e.props.contacts.some((function(t){return t.name===e.state.name}))?alert("".concat(e.state.name," is already in contacts.")):e.props.addNewContact({name:e.state.name,number:e.state.number})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(S.jsx)(A,{htmlFor:"name",children:"Name"}),Object(S.jsx)(w,{type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name}),Object(S.jsx)(A,{htmlFor:"number",children:"Number"}),Object(S.jsx)(w,{type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.value}),Object(S.jsx)(z,{type:"submit",children:"Add contact"})]})}}]),n}(d.Component),N=Object(x.b)((function(e){return{contacts:e.contacts}}),(function(e){return{addNewContact:function(t){return e(g(t))}}}))(F),L=Object(f.b)("filter/handleChange"),D={handleChange:L},I=Object(x.b)((function(e){return{filter:e.filter}}),D)((function(e){e.filter;var t=e.handleChange;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(A,{htmlFor:"filter",children:"Find contacts by name"}),Object(S.jsx)(w,{id:"filter",type:"text",onChange:function(e){return t(e.target.value)},name:"filter"})]})})),J=n(41),T=v.a.li(o||(o=Object(y.a)(["\n  margin-bottom: 10px;\n  .contactListItemText {\n    display: inline-block;\n    margin-right: 10px;\n    font-size: 18px;\n  }\n"]))),Z=function(e){var t=e.name,n=e.number,r=e.deleteContact;return Object(S.jsxs)(T,{children:[Object(S.jsxs)("p",{className:"contactListItemText",children:[t,": ",n]}),Object(S.jsx)(z,{type:"button",onClick:r,children:"Delete"})]})},q={deleteContact:C},B=Object(x.b)((function(e){return{contacts:(t=e.contacts,n=e.filter,t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})))};var t,n}),q)((function(e){var t=e.contacts,n=e.deleteContact;return Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsx)(Z,{name:e.name,number:e.number,deleteContact:function(){return n(e.id)}},Object(J.a)())}))})})),E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(N,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(I,{}),Object(S.jsx)(B,{})]})}}]),n}(d.Component),M=n(15),H=n(2),K=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(s={},Object(O.a)(s,g,(function(e,t){var n=t.payload;return[].concat(Object(M.a)(e),[n])})),Object(O.a)(s,C,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),s)),P=Object(f.c)("",Object(O.a)({},L,(function(e,t){return t.payload}))),R=Object(H.b)({contacts:K,filter:P}),$=n(4),G=n(22),Q=n.n(G),U=n(23),V=n.n(U),W=[].concat(Object(M.a)(Object(f.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),[V.a]),X={key:"contacts",storage:Q.a,blacklist:["filter"]},Y=Object(f.a)({reducer:Object($.g)(X,R),middleware:W,devTools:!1}),_={store:Y,persistor:Object($.h)(Y)},ee=n(24);u.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(x.a,{store:_.store,children:Object(S.jsx)(ee.a,{loading:null,persistor:_.persistor,children:Object(S.jsx)(E,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.de499bbe.chunk.js.map