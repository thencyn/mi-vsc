import{J as C,ia as x}from"./chunk-KYYV4RUI.js";import{Ab as v,Bb as e,Cb as o,Db as d,Tb as i,Ub as s,Vb as p,_a as n,_b as g,ga as m,nb as f,qb as u,wb as r,xb as T,zb as b}from"./chunk-LKICGNUI.js";import"./chunk-EUDKD2JW.js";function I(a,t){a&1&&(e(0,"c-badge",2),i(1,"Config. en Teclado Adicional"),o())}function S(a,t){a&1&&(e(0,"c-badge",3),i(1,"Personal"),o())}function w(a,t){if(a&1&&(e(0,"tr")(1,"td"),i(2),d(3,"br"),e(4,"code"),i(5),o()(),e(6,"td")(7,"code"),i(8),o()(),e(9,"td"),i(10),d(11,"br"),f(12,I,2,0,"c-badge",2)(13,S,2,0,"c-badge",3),o()()),a&2){let l=t.$implicit;n(2),p(" ",l.comandoTitulo,""),n(3),s(l.comandoId),n(3),s(l.teclas),n(2),p(" ",l.descripcion,""),n(2),r(l.configTecladoAdicional?12:-1),n(),r(l.personalizado?13:-1)}}var j=(()=>{let t=class t{constructor(){this.listaAbreviaciones=[{comandoTitulo:"View: Toggle Primary Side Bar Visibility",comandoId:"workbench.action.toggleSidebarVisibility",teclas:"Control + B",descripcion:"Abrir/Cerrar Sidebar",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"View: Toggle Panel Visibility",comandoId:"workbench.action.togglePanel",teclas:"Control + J",descripcion:"Mostrar/Ocultar Panel donde se encuentra la terminal",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"File: Reveal in File Explorer",comandoId:"revealFileInOS",teclas:"Shift + Alt + R",descripcion:'Abre el explorador de archivos de windows, en la ruta correspondiente al editor actual, si el foco est\xE1 en el "Explorador de archivos de vsc", esta sera la ruta que se abrira.',configTecladoAdicional:!0,personalizado:!0},{comandoTitulo:"View: Open Previous Editor",comandoId:"workbench.action.previousEditor",teclas:"Control + PageUp",descripcion:"Moverse al Tab de la Izquierda",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"View: Open Next Editor",comandoId:"workbench.action.nextEditor",teclas:"Control + PageDown",descripcion:"Moverse al Tab de la Derecha",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"Add Selection To Next Find Match",comandoId:"editor.action.addSelectionToNextFindMatch",teclas:"Control + W",descripcion:"Seleccionar texto y pulsar, agrega multicursores a la siguiente coincidencia (1 x 1)",configTecladoAdicional:!1,personalizado:!0},{comandoTitulo:"Go Back",comandoId:"workbench.action.navigateBack",teclas:"Alt + LeftArrow",descripcion:"Retrocede a la ubicaci\xF3n anterior (es una funci\xF3n muy \xFAtil, \xA1deber\xEDas probarla!). Por ejemplo, si accedes a la definici\xF3n de un m\xE9todo y deseas regresar al punto donde estabas antes, solo necesitas usar esta combinaci\xF3n de teclas.",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"Go to Definition",comandoId:"editor.action.revealDefinition",teclas:"F12",descripcion:"Ir a la definicion, ejemplo t\xEDpico ir a la interfaz",configTecladoAdicional:!1,personalizado:!1},{comandoTitulo:"Go to Implementations",comandoId:"editor.action.goToImplementation",teclas:"Control + F12",descripcion:"Ir a la definicion, ejemplo t\xEDpico ir a la implementaci\xF3n",configTecladoAdicional:!1,personalizado:!1}]}};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=m({type:t,selectors:[["app-mi-top-abreviaciones"]],standalone:!0,features:[g],decls:14,vars:1,consts:[["responsive","","cTable","",3,"striped"],["scope","col",1,"w-25"],["color","info","shape","rounded-pill"],["color","primary","shape","rounded-pill"]],template:function(c,h){c&1&&(e(0,"h1"),i(1,"Mi top abreviaciones"),o(),e(2,"table",0)(3,"thead")(4,"tr")(5,"th",1),i(6," Comando "),o(),e(7,"th",1),i(8," Teclas "),o(),e(9,"th",1),i(10," Descripci\xF3n "),o()()(),e(11,"tbody"),b(12,w,14,6,"tr",null,T),o()()),c&2&&(n(2),u("striped",!0),n(10),v(h.listaAbreviaciones))},dependencies:[x,C]});let a=t;return a})();export{j as MiTopAbreviacionesComponent};