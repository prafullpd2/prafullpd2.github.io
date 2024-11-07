import{a as b,b as _,d as P,g as y,i as D,j as s,k as u}from"./chunk-ZMNSZK5Q.js";import{Ba as M,Da as f,Ea as o,Fa as i,Ga as m,Ja as O,Qa as a,Ua as d,V as l,Va as k,h,na as v,pa as w,ra as C,sa as p,va as x}from"./chunk-L6E6PG2X.js";var L=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-logo"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"logo","row"],[1,"col","l6","m8","s12"],[1,"main-logo-wrapper"],["routerLink","/"]],template:function(t,c){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),a(4," Prafull Dhadkar "),i()()()())},dependencies:[s],styles:[".logo[_ngcontent-%COMP%]{font-size:36px;font-weight:700;padding-left:20px}"]});let n=e;return n})();var S=(()=>{let e=class e{constructor(){this.close=new x}ngOnInit(){}ngAfterViewInit(){}ngOnDestroy(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-dropdown"]],outputs:{close:"close"},standalone:!0,features:[d],decls:10,vars:0,consts:[["id","nav-menu-dropdown",1,"dropdown-content"],["routerLinkActive","active",1,"d-md-none"],["routerLink","/blogs"],["routerLinkActive","active",1,"d-sm-none"],["rel","noopener noreferrer","href","https://www.linkedin.com/in/prafull-dhadkar","target","_blank"],["routerLinkActive","active",1,"d-lg-none"],["rel","noopener noreferrer","href","https://github.com/prafullpd2","target","_blank"]],template:function(t,c){t&1&&(o(0,"ul",0)(1,"li",1)(2,"a",2),a(3,"Blog"),i()(),o(4,"li",3)(5,"a",4),a(6,"LinkedIn"),i()(),o(7,"li",5)(8,"a",6),a(9,"Github"),i()()())},dependencies:[s,u],styles:[".dropdown-content[_ngcontent-%COMP%]{display:flex;list-style:none;flex-direction:column;position:absolute;top:0;left:0;background-color:#333537;border-radius:5px;padding-left:0;z-index:999;box-shadow:5px 5px 25px -10px #000}.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:16px;font-size:large;transition:background-color .4s;position:relative}.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#5a5a5a}.dropdown-content[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#202124}.dropdown-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}"]});let n=e;return n})();function I(n,e){n&1&&m(0,"app-dropdown")}var E=(()=>{let e=class e{constructor(r,t){this.renderer=r,this.elementRef=t,this.showDropdown=!1}ngOnInit(){}closeDropdown(){this.showDropdown=!1,this.windowListner()}openDropdown(){this.showDropdown||(this.showDropdown=!0,setTimeout(()=>{this.windowListner=this.renderer.listen("document","click",()=>{this.closeDropdown()})},0))}ngOnDestroy(){this.windowListner?.()}};e.\u0275fac=function(t){return new(t||e)(p(w),p(v))},e.\u0275cmp=l({type:e,selectors:[["app-navigation"]],standalone:!0,features:[d],decls:19,vars:1,consts:[[1,"home-nav","row"],["routerLinkActive","active"],["routerLink","/about"],["routerLinkActive","active",1,"d-none","d-md-block"],["routerLink","/blogs"],[1,"d-none","d-sm-block"],["rel","noopener noreferrer","href","https://www.linkedin.com/in/prafull-dhadkar","target","_blank"],[1,"d-none","d-lg-block"],["rel","noopener noreferrer","target","_blank","href","https://github.com/prafullpd2"],[1,"d-lg-none",3,"click"],["aria-label","Open More Navigation Items Menu","data-activates","nav-menu-dropdown","data-constrainwidth","false",1,"dropdown-button"],[1,"caret"],[4,"ngIf"]],template:function(t,c){t&1&&(o(0,"nav",0)(1,"ul")(2,"li",1)(3,"a",2),a(4,"About"),i()(),o(5,"li",3)(6,"a",4),a(7,"Blog"),i()(),o(8,"li",5)(9,"a",6),a(10,"LinkedIn"),i()(),o(11,"li",7)(12,"a",8),a(13,"Github"),i()(),o(14,"li",9),O("click",function(){return c.openDropdown()}),o(15,"a",10),a(16," More "),m(17,"span",11),i(),M(18,I,1,0,"app-dropdown",12),i()()()),t&2&&(C(18),f("ngIf",c.showDropdown))},dependencies:[s,u,S,P,_],styles:[".home-nav[_ngcontent-%COMP%]{display:flex}.home-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;display:flex;flex-wrap:wrap}.home-nav[_ngcontent-%COMP%]   ul.dropdown-content[_ngcontent-%COMP%]{flex-direction:column;position:absolute;top:0;left:0;background-color:#191919;padding-left:0;z-index:999}.home-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:20px;font-size:22px;transition:background-color .4s;position:relative;border-radius:5px;margin-right:10px;margin-bottom:5px}.home-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#5a5a5a}.home-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#343434}.home-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;position:relative}"]});let n=e;return n})();var F=n=>({"not-home":n}),$=(()=>{let e=class e{constructor(r){this.router=r,this.ngUnsubscribe=new h,this.isHomeRoute=!1,r.events.subscribe(t=>{t instanceof y&&(this.isHomeRoute=t.url==="/")})}ngOnInit(){}ngOnDestroy(){this.ngUnsubscribe.next(0),this.ngUnsubscribe.complete()}};e.\u0275fac=function(t){return new(t||e)(p(D))},e.\u0275cmp=l({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:3,vars:3,consts:[[1,"header","padding-top",3,"ngClass"]],template:function(t,c){t&1&&(o(0,"header",0),m(1,"app-logo")(2,"app-navigation"),i()),t&2&&f("ngClass",k(1,F,!c.isHomeRoute))},dependencies:[L,E,b],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:60px 0 20px;width:100%}.header.padding-top[_ngcontent-%COMP%]{padding-top:40vh;transition-duration:1s}.header.not-home[_ngcontent-%COMP%]{padding-top:5vh}"]});let n=e;return n})();export{$ as a};