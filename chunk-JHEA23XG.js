import{a as U}from"./chunk-HXALU755.js";import{a as O,b as j,d as z,f as H,g as V,h as k,i as W,j as G,k as R}from"./chunk-JAXQLHCO.js";import{W as P,X as B,Y as A,e as N,ia as I}from"./chunk-KYYV4RUI.js";import{$b as F,Ab as C,Bb as n,Cb as o,Db as v,Jb as M,Tb as a,Vb as m,Wa as y,Wb as T,Xa as u,Xb as b,Yb as _,_a as i,_b as D,bc as L,ca as x,cc as w,ga as h,hb as E,ja as S,qb as p,xb as f,zb as g}from"./chunk-LKICGNUI.js";import"./chunk-EUDKD2JW.js";var J=(()=>{let e=class e{transform(l,s=", "){return Array.isArray(l)?l.join(s):l}};e.\u0275fac=function(s){return new(s||e)},e.\u0275pipe=S({name:"join",type:e,pure:!0,standalone:!0});let t=e;return t})();var Q=()=>({standalone:!0});function X(t,e){if(t&1&&(n(0,"option",6),a(1),o()),t&2){let r=e.$implicit;p("value",r),i(),m("",r," ")}}function Y(t,e){if(t&1&&(n(0,"tr")(1,"td")(2,"a",9),v(3,"img",10),a(4),o()(),n(5,"td"),v(6,"div",11),o(),n(7,"td"),a(8),L(9,"join"),o()()),t&2){let r=e.$implicit;i(2),p("href",r.url,u),i(),p("src",r.icono,u)("alt",r.nombre),i(),m(" ",r.nombre," "),i(2),p("innerHTML",r.observacion,y),i(2),m(" ",w(9,6,r.perfiles)," ")}}var ve=(()=>{let e=class e{constructor(){this.extensionDataService=x(U),this.listaExtensiones=E(this.extensionDataService.obtenerListaExtensiones("Todas")),this.listaPerfiles=["Angular","NodeJS","Phaser","React","C#","Todas"],this.perfilSeleccionado="Todas"}onValueChange(l){this.listaExtensiones.set(this.extensionDataService.obtenerListaExtensiones(l))}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=h({type:e,selectors:[["app-listado-extensiones"]],standalone:!0,features:[D],decls:25,vars:5,consts:[[1,"mt-3"],["cForm",""],[1,"align-items-center",3,"gutter"],["xs","auto"],["cLabel","col"],["cSelect","",3,"ngModelChange","ngModel","ngModelOptions"],[3,"value"],["responsive","","cTable","",3,"striped"],["scope","col",1,"w-25"],["target","_blank",3,"href"],["loading","lazy",1,"img-thumbnail",2,"width","50px",3,"src","alt"],[3,"innerHTML"]],template:function(s,c){s&1&&(n(0,"h1"),a(1,"Listado Extensiones"),o(),n(2,"div",0)(3,"form",1)(4,"c-row",2)(5,"c-col",3)(6,"label",4),a(7," Filtrar por Perfil: "),o()(),n(8,"c-col",3)(9,"select",5),_("ngModelChange",function(d){return b(c.perfilSeleccionado,d)||(c.perfilSeleccionado=d),d}),M("ngModelChange",function(d){return c.onValueChange(d)}),g(10,X,2,2,"option",6,f),o()()()()(),n(12,"div",0)(13,"table",7)(14,"thead")(15,"tr")(16,"th",8),a(17," Extension "),o(),n(18,"th",8),a(19," Observaci\xF3n "),o(),n(20,"th",8),a(21," Perfiles "),o()()(),n(22,"tbody"),g(23,Y,10,8,"tr",null,f),o()()()),s&2&&(i(4),p("gutter",3),i(5),T("ngModel",c.perfilSeleccionado),p("ngModelOptions",F(4,Q)),i(),C(c.listaPerfiles),i(3),p("striped",!0),i(10),C(c.listaExtensiones()))},dependencies:[B,P,I,J,A,N,R,V,W,G,k,O,j,H,z]});let t=e;return t})();export{ve as ListadoExtensionesComponent};
