(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4KiG":function(e,t,n){"use strict";var a=n("yXPU"),i=n.n(a),r=n("VbXa"),o=n.n(r),s=(n("VSsl"),n("o0o1")),l=n.n(s),u=n("q1tI"),c=n.n(u),m=n("30+C"),d=n("oa/T"),p=n("r9w1"),f=n("ZGBi"),h=n("VmPI"),v=n("O6Ht"),g=n("M4Ey"),k=n("Z3vd"),b=n("Kfvu"),E=n("QLAq"),y=n("uVck"),j=n("vOnD"),O=n("pg4K"),_=n("IP2g"),C=n("i8i4"),x=n.n(C),w=n("KmP9"),T=n("1AYd"),I=n("jjAL"),L=n("ADg1"),S=n("cVXz"),M=Object(j.b)(L.a).withConfig({displayName:"DropdownMenu__StyledFormControl",componentId:"olaryr-0"})(["width:100%;"]),F=(Object(O.a)((function(e){var t=e.selectedVariant,n=e.setSelectedVariant,a=Object(u.useState)(0),i=a[0],r=a[1],o=Object(u.useRef)(null);Object(u.useEffect)((function(){r(x.a.findDOMNode(o.current).offsetWidth)}));return c.a.createElement(M,{variant:"outlined"},c.a.createElement(T.a,{ref:o,htmlFor:"course-variant-select"},"Mitä kurssin versiota suoritat"),c.a.createElement(S.a,{value:t,onChange:function(e){n(e.target.value)},input:c.a.createElement(w.a,{labelWidth:i,name:"course-variant",id:"course-variant-select"})},c.a.createElement(I.a,{value:"avoin-2023"},"Tietokoneen toiminnan jatkokurssi 2023")))})),n("Wbzz"),j.b.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"])),N=j.b.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),P=j.b.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),D=j.b.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),R=(Object(j.b)(_.a).withConfig({displayName:"CourseOptionsEditor__StyledIcon",componentId:"sc-15i8a3h-4"})(["margin-right:0.25rem;"]),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onClick=function(){var e=i()(l.a.mark((function e(n){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.setState({submitting:!0}),a={applies_for_study_right:t.state.applies_for_study_right,digital_education_for_all:t.state.digital_education_for_all,marketing:t.state.marketing,research:t.state.research,course_variant:t.state.currentCourseVariant},i={first_name:t.state.first_name,last_name:t.state.last_name,organizational_id:t.state.student_number},e.next=6,Object(y.l)({extraFields:a,userField:i});case 6:t.setState({submitting:!1}),t.props.onComplete();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={submitting:!1,error:!0,errorObj:{},applies_for_study_right:!1,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,email:void 0,student_number:void 0,loading:!0,focused:null},t.handleInput=function(e){var n,a=e.target.name,i=e.target.value;t.setState(((n={})[a]=i,n),(function(){t.validate()}))},t.handleCheckboxInput=function(e){var n,a=e.target.name,i=e.target.checked;t.setState(((n={})[a]=i,n),(function(){t.validate()}))},t.handleFocus=function(e){var n=e.target.name;t.setState({focused:n})},t.handleUnFocus=function(){t.setState({focused:null})},t.validate=function(){t.setState((function(e){return{error:void 0===e.research}}))},t.setSelectedVariant=function(e){t.setState({currentCourseVariant:e})},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=i()(l.a.mark((function e(){var t,n,a,i,r,o,s,u,c,m=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.m)();case 2:c=e.sent,this.setState({first_name:null===(t=c.user_field)||void 0===t?void 0:t.first_name,last_name:null===(n=c.user_field)||void 0===n?void 0:n.last_name,email:c.email,student_number:null===(a=c.user_field)||void 0===a?void 0:a.organizational_id,applies_for_study_right:"t"===(null===(i=c.extra_fields)||void 0===i?void 0:i.applies_for_study_right),digital_education_for_all:"t"===(null===(r=c.extra_fields)||void 0===r?void 0:r.digital_education_for_all),marketing:"t"===(null===(o=c.extra_fields)||void 0===o?void 0:o.marketing),research:null===(s=c.extra_fields)||void 0===s?void 0:s.research,currentCourseVariant:null===(u=c.extra_fields)||void 0===u?void 0:u.course_variant,loading:!1},(function(){m.validate()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return c.a.createElement(D,null,c.a.createElement(E.a,{loading:this.state.loading,heightHint:"490px"},c.a.createElement(P,null,c.a.createElement(m.a,null,c.a.createElement(d.a,null,"Olet kirjautunut tunnuksella ",this.state.email," sisään")))),c.a.createElement("h1",null,"Opiskelijan tiedot"),c.a.createElement(N,null,c.a.createElement(P,null,'Kerro itsestäsi. Nämä tiedot auttavat suoritusten merkitsemisessä ja kurssin järjestämisessä. Voit muokata tietoja myöhemmin kurssin asetuksista. Tietojen täyttämisen jälkeen paina "Tallenna" sivun alareunasta.'),c.a.createElement(E.a,{loading:this.state.loading,heightHint:"490px"},c.a.createElement("div",null,c.a.createElement(F,null,c.a.createElement(p.a,{variant:"outlined",type:"text",label:"Etunimi",autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),c.a.createElement(F,null,c.a.createElement(p.a,{variant:"outlined",type:"text",label:"Sukunimi",autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),c.a.createElement(F,null,c.a.createElement(p.a,{variant:"outlined",type:"text",label:"Helsingin yliopiston opiskelijanumero",name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,value:this.state.student_number,onChange:this.handleInput,helperText:"Jätä tyhjäksi, jos et ole tällä hetkellä Helsingin yliopiston opiskelija.",onFocus:this.handleFocus,onBlur:this.handleUnFocus})),c.a.createElement(F,null,c.a.createElement(f.a,{control:c.a.createElement(h.a,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",value:"1"}),label:"Minulle voi lähettää tietoa uusista kursseista"})))),c.a.createElement("h2",null,"Kurssilla tehtävästä tutkimuksesta"),c.a.createElement("p",null,"Kurssilla tehdään oppimiseen liittyvää tutkimusta. Tällä tutkimuksella on useampia tavoitteita:"),c.a.createElement("ol",null,c.a.createElement("li",null,"luoda oppimateriaali, joka ottaa yksilölliset erot huomioon ja reagoi tarvittaessa tarjoten kohdennetumpaa oppisisältöä"),c.a.createElement("li",null,"kehittää digitaalisissa ympäristöissä tapahtuvaan oppimiseen liittyvää ymmärrystä ja tietoa, sekä"),c.a.createElement("li",null,"tukea tutkimustiedon kautta muita oppimateriaalien kehittäjiä ja oppimisen tutkijoita. Tämä johtaa luonnollisesti myös parempaan oppimiskokemukseen opiskelijoille.")),c.a.createElement("p",null,"Tällaisesta oppimisanalytiikaksi kutsutusta tutkimuksesta kiinnostuneiden kannattaa tutustua esimerkiksi artikkeliin"," ",c.a.createElement(b.OutboundLink,{href:"https://dl.acm.org/citation.cfm?id=2858798",target:"_blank",rel:"noopener noreferrer"},"Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies"),"."),c.a.createElement("p",null,"Tutkimusdatan hallinnasta vastaa Helsingin yliopiston tietojenkäsittelytieteen laitoksen MOOC-keskus. Anonymisoimattomaan tutkimusdataan eivät pääse käsiksi muut kuin keskuksen tutkijat. Voit myös pyytää milloin tahansa sinusta kerätyn datan poistamista lähettämällä sähköpostin osoitteeseen mooc@cs.helsinki.fi"),c.a.createElement("p",null,"Työskentelystä kerättyä tietoa käytetään tutkimuksessa. Kerätty tieto sisältää tietoa oppimateriaalien käytöstä, kurssitehtävien tekemisestä sekä kokeissa pärjäämisestä. Tutkimustuloksista ei pystytä tunnistamaan yksittäisiä opiskelijoita. Jos et osallistu tutkimukseen, siitä ei tule minkäänlaisia seuraamuksia."),c.a.createElement(F,null,c.a.createElement(E.a,{loading:this.state.loading,heightHint:"115px"},c.a.createElement(v.a,{"aria-label":"Tutkimukseen osallistuminen",name:"research",value:this.state.research,onChange:this.handleInput},c.a.createElement(f.a,{value:"1",control:c.a.createElement(g.a,{color:"primary"}),label:"Osallistun oppimiseen liittyvään tutkimukseen. Valitsemalla tämän autat sekä nykyisiä että tulevia opiskelijoita."}),c.a.createElement(f.a,{value:"0",control:c.a.createElement(g.a,null),label:"En osallistu oppimiseen liittyvään tutkimukseen."})))),c.a.createElement(F,null,c.a.createElement(k.a,{onClick:this.onClick,disabled:this.state.submitting||this.state.error,loading:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0},"Tallenna"))),this.state.error&&c.a.createElement(P,null,c.a.createElement("b",null,"Täytä vaaditut kentät.")))},t}(c.a.Component));t.a=Object(O.a)(R)},"9Emu":function(e,t,n){"use strict";n.r(t);var a=n("yXPU"),i=n.n(a),r=n("VbXa"),o=n.n(r),s=n("o0o1"),l=n.n(s),u=n("q1tI"),c=n.n(u),m=n("TJpk"),d=n.n(m),p=n("vOnD"),f=n("RJaA"),h=n("4KiG"),v=n("Wbzz"),g=n("eczs"),k=n("VUD3"),b=n("Kfvu"),E=n("uVck"),y=n("IP2g"),j=n("wHSu"),O=n("Ff2n"),_=n("rePB"),C=n("wx14"),x=n("iuhU"),w=n("H2TA"),T=n("wpWl"),I=n("i8i4"),L=n("gk1O"),S=n("bfFb"),M=n("Ovef");function F(e){return e.substring(2).toLowerCase()}var N=function(e){var t=e.children,n=e.disableReactTree,a=void 0!==n&&n,i=e.mouseEvent,r=void 0===i?"onClick":i,o=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,c=u.useRef(!1),m=u.useRef(null),d=u.useRef(!1),p=u.useRef(!1);u.useEffect((function(){return setTimeout((function(){d.current=!0}),0),function(){d.current=!1}}),[]);var f=u.useCallback((function(e){m.current=I.findDOMNode(e)}),[]),h=Object(S.a)(t.ref,f),v=Object(M.a)((function(e){var t=p.current;if(p.current=!1,d.current&&m.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(c.current)c.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(m.current)>-1;else n=!Object(L.a)(m.current).documentElement.contains(e.target)||m.current.contains(e.target);n||!a&&t||o(e)}})),g=function(e){return function(n){p.current=!0;var a=t.props[e];a&&a(n)}},k={ref:h};return!1!==l&&(k[l]=g(l)),u.useEffect((function(){if(!1!==l){var e=F(l),t=Object(L.a)(m.current),n=function(){c.current=!0};return t.addEventListener(e,v),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,v),t.removeEventListener("touchmove",n)}}}),[v,l]),!1!==r&&(k[r]=g(r)),u.useEffect((function(){if(!1!==r){var e=F(r),t=Object(L.a)(m.current);return t.addEventListener(e,v),function(){t.removeEventListener(e,v)}}}),[v,r]),u.createElement(u.Fragment,null,u.cloneElement(t,k))},P=n("NqtD"),D=n("x6Ns"),R=n("bqsI"),V=n("kKAo"),A=n("ye/S"),H=u.forwardRef((function(e,t){var n=e.action,a=e.classes,i=e.className,r=e.message,o=e.role,s=void 0===o?"alert":o,l=Object(O.a)(e,["action","classes","className","message","role"]);return u.createElement(V.a,Object(C.a)({role:s,square:!0,elevation:6,className:Object(x.a)(a.root,i),ref:t},l),u.createElement("div",{className:a.message},r),n?u.createElement("div",{className:a.action},n):null)})),W=Object(w.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(A.b)(e.palette.background.default,t);return{root:Object(C.a)({},e.typography.body2,Object(_.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(H),z=u.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,i=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,r=a.horizontal,o=e.autoHideDuration,s=void 0===o?null:o,l=e.children,c=e.classes,m=e.className,d=e.ClickAwayListenerProps,p=e.ContentProps,f=e.disableWindowBlurListener,h=void 0!==f&&f,v=e.message,g=e.onClose,k=e.onEnter,b=e.onEntered,E=e.onEntering,y=e.onExit,j=e.onExited,_=e.onExiting,w=e.onMouseEnter,I=e.onMouseLeave,L=e.open,S=e.resumeHideDuration,F=e.TransitionComponent,V=void 0===F?R.a:F,A=e.transitionDuration,H=void 0===A?{enter:T.b.enteringScreen,exit:T.b.leavingScreen}:A,z=e.TransitionProps,K=Object(O.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),B=u.useRef(),U=u.useState(!0),X=U[0],q=U[1],J=Object(M.a)((function(){g&&g.apply(void 0,arguments)})),G=Object(M.a)((function(e){g&&null!=e&&(clearTimeout(B.current),B.current=setTimeout((function(){J(null,"timeout")}),e))}));u.useEffect((function(){return L&&G(s),function(){clearTimeout(B.current)}}),[L,s,G]);var Y=function(){clearTimeout(B.current)},Z=u.useCallback((function(){null!=s&&G(null!=S?S:.5*s)}),[s,S,G]);return u.useEffect((function(){if(!h&&L)return window.addEventListener("focus",Z),window.addEventListener("blur",Y),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Y)}}),[h,Z,L]),!L&&X?null:u.createElement(N,Object(C.a)({onClickAway:function(e){g&&g(e,"clickaway")}},d),u.createElement("div",Object(C.a)({className:Object(x.a)(c.root,c["anchorOrigin".concat(Object(P.a)(i)).concat(Object(P.a)(r))],m),onMouseEnter:function(e){w&&w(e),Y()},onMouseLeave:function(e){I&&I(e),Z()},ref:t},K),u.createElement(V,Object(C.a)({appear:!0,in:L,onEnter:Object(D.a)((function(){q(!1)}),k),onEntered:b,onEntering:E,onExit:y,onExited:Object(D.a)((function(){q(!0)}),j),onExiting:_,timeout:H,direction:"top"===i?"down":"up"},z),l||u.createElement(W,Object(C.a)({message:v,action:n},p)))))})),K=Object(w.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},i={justifyContent:"flex-start"},r={top:24},o={bottom:24},s={right:24},l={left:24},u={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(C.a)({},t,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({},r,u))),anchorOriginBottomCenter:Object(C.a)({},n,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({},o,u))),anchorOriginTopRight:Object(C.a)({},t,a,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({left:"auto"},r,s))),anchorOriginBottomRight:Object(C.a)({},n,a,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({left:"auto"},o,s))),anchorOriginTopLeft:Object(C.a)({},t,i,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({right:"auto"},r,l))),anchorOriginBottomLeft:Object(C.a)({},n,i,Object(_.a)({},e.breakpoints.up("sm"),Object(C.a)({right:"auto"},o,l)))}}),{flip:!1,name:"MuiSnackbar"})(z),B=Object(p.b)(W).withConfig({displayName:"profile__StyledSnackbarContent",componentId:"sc-3be922-0"})(["background-color:#43a047 !important;"]),U=Object(p.b)(y.a).withConfig({displayName:"profile__StyledIcon",componentId:"sc-3be922-1"})(["margin-right:0.5rem;"]),X=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={successMessage:null},t.onStepComplete=function(){t.setState({successMessage:"Tiedot tallennettu!"})},t.handleClose=function(){t.setState({successMessage:null})},t}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=i()(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.context.loggedIn){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(E.g)();case 4:n=e.sent,void 0===(null==n||null===(t=n.extra_fields)||void 0===t?void 0:t.research)&&Object(v.navigate)("/missing-info");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){return this.context.loggedIn?c.a.createElement(f.a,null,c.a.createElement(k.a,null,c.a.createElement(d.a,{title:"Profiili"}),c.a.createElement("h1",null,"Profiili"),c.a.createElement("p",null,"Täällä voit muokata mooc.fi -tilisi asetuksia tämän kurssin osalta. Katso myös profiilisi mooc.fi:n Test My Code -palvelussa:"," ",c.a.createElement(b.OutboundLink,{href:"https://tmc.mooc.fi",rel:"noopener noreferrer"},"https://tmc.mooc.fi"),"."),c.a.createElement(h.a,{onComplete:this.onStepComplete})),c.a.createElement(K,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.successMessage,autoHideDuration:6e3,onClose:this.handleClose},c.a.createElement(B,{variant:"success",message:c.a.createElement(u.Fragment,null,c.a.createElement(U,{icon:j.h})," ",c.a.createElement("span",null,this.state.successMessage))}))):("undefined"!=typeof window&&Object(v.navigate)("/sign-in"),c.a.createElement("div",null,"Redirecting..."))},t}(c.a.Component);X.contextType=g.b;t.default=Object(g.c)(X)}}]);
//# sourceMappingURL=component---src-pages-profile-js-9068f9886c9c31c867ca.js.map