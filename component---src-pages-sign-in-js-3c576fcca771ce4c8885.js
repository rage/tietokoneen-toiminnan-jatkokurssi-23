(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{lPWI:function(t,e,n){"use strict";n.r(e);var a=n("yXPU"),i=n.n(a),r=n("VbXa"),o=n.n(r),s=n("o0o1"),l=n.n(s),u=n("q1tI"),c=n.n(u),m=n("TJpk"),d=n.n(m),p=n("RJaA"),h=n("uVck"),f=n("Wbzz"),b=n("r9w1"),g=n("Z3vd"),w=n("Kfvu"),k=n("vOnD"),v=n("eczs"),y=n("VUD3"),E=k.b.div.withConfig({displayName:"sign-in__Row",componentId:"sc-1r0lptz-0"})(["margin-bottom:1.5rem;"]),j=k.b.form.withConfig({displayName:"sign-in__Form",componentId:"sc-1r0lptz-1"})([""]),_=k.b.div.withConfig({displayName:"sign-in__InfoBox",componentId:"sc-1r0lptz-2"})(["margin-bottom:2rem;"]),C=k.b.div.withConfig({displayName:"sign-in__FormContainer",componentId:"sc-1r0lptz-3"})(["height:100%;margin-top:2rem;"]),I=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).componentDidMount=function(){e.fallbackRedirector=setInterval((function(){Object(h.i)()&&setTimeout((function(){"/sign-in/"!==window.location.pathname&&"/sign-in"!==window.location.pathname||(window.location="/")}),2e3)}),1e3)},e.onClick=function(){var t=i()(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(e.state.submitting||0===e.state.email.length&&0===e.state.password.length)){t.next=3;break}return t.abrupt("return");case 3:return e.setState({submitting:!0,error:!1}),t.prev=4,t.next=7,Object(h.b)({username:e.state.email,password:e.state.password});case 7:setTimeout((function(){try{if("undefined"!=typeof window)return console.log("Navigating back"),void window.history.go(-1);Object(f.navigate)("/")}catch(t){Object(f.navigate)("/")}}),100),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(4),e.setState({error:!0,submitting:!1}),t.abrupt("return");case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:"",submitting:!1,error:!1},e}o()(e,t);var n=e.prototype;return n.componentWillUnmount=function(){clearInterval(this.fallbackRedirector)},n.render=function(){var t=this;return this.context.loggedIn&&!this.state.submitting?(Object(f.navigate)("/"),c.a.createElement("div",null,"Redirecting....")):c.a.createElement(p.a,null,c.a.createElement(y.a,null,c.a.createElement(d.a,{title:"Kirjaudu sisään"}),c.a.createElement(C,null,c.a.createElement("h1",null,"Kirjaudu sisään"),c.a.createElement(j,null,c.a.createElement(_,null,"Tämä kurssi käyttää"," ",c.a.createElement(w.OutboundLink,{href:"https://mooc.fi",target:"_blank",rel:"noopener noreferrer"},"mooc.fi")," ","käyttäjätunnuksia. Jos olet aikaisemmin tehnyt mooc.fi -kursseja voit käyttää olemassaolevia tunnuksiasi."),c.a.createElement(E,null,c.a.createElement(b.a,{id:"outlined-adornment-password",variant:"outlined",type:"text",label:"Sähköpostiosoite tai käyttäjänimi",fullWidth:!0,value:this.state.email,onChange:function(e){return t.setState({email:e.target.value})}})),c.a.createElement(E,null,c.a.createElement(b.a,{id:"outlined-adornment-password",variant:"outlined",type:this.state.showPassword?"text":"password",label:"Salasana",fullWidth:!0,value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}})),c.a.createElement(E,null,c.a.createElement(g.a,{onClick:this.onClick,disabled:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"Kirjaudu sisään"))),this.state.error&&c.a.createElement(_,null,c.a.createElement("b",null,"Virheelliset tunnukset, tarkista kirjoitusasu!")),c.a.createElement(E,null,c.a.createElement(f.Link,{to:"/sign-up"},"Luo uusi tunnus")),c.a.createElement(E,null,c.a.createElement(w.OutboundLink,{href:"https://tmc.mooc.fi/password_reset_keys/new",target:"_blank",rel:"noopener noreferrer"},"Unohdin salasanani")))))},e}(c.a.Component);I.contextType=v.b,e.default=Object(v.c)(I)}}]);
//# sourceMappingURL=component---src-pages-sign-in-js-3c576fcca771ce4c8885.js.map