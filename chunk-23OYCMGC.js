import{L as v,M as x,W as h,X as g,aa as y,ia as C}from"./chunk-KYYV4RUI.js";import{Ab as S,Bb as i,Cb as t,Db as a,Tb as e,Ub as c,Vb as m,_a as r,_b as E,ga as p,qb as n,xb as b,zb as u}from"./chunk-LKICGNUI.js";import"./chunk-EUDKD2JW.js";function T(l,o){if(l&1&&(i(0,"tr")(1,"td"),e(2),a(3,"br"),i(4,"code"),e(5),t()(),i(6,"td")(7,"code"),e(8),t()(),i(9,"td"),e(10),t()()),l&2){let d=o.$implicit;r(2),m(" ",d.comandoTitulo,""),r(3),c(d.comandoId),r(3),c(d.teclas),r(2),m(" ",d.descripcion,"")}}var P=(()=>{let o=class o{constructor(){this.listaAbreviaciones=[{comandoTitulo:"View: Toggle Primary Side Bar Visibility",comandoId:"workbench.action.toggleSidebarVisibility",teclas:"Control + B",descripcion:"Abrir/Cerrar Sidebar"},{comandoTitulo:"View: Show Explorer",comandoId:"workbench.view.explorer",teclas:"Control + Shift + E",descripcion:"Abrir Sidebar en archivos"},{comandoTitulo:"View: Show Search",comandoId:"workbench.view.search",teclas:"Control + Shift + F",descripcion:"Abrir Sidebar de b\xFAsqueda global"},{comandoTitulo:"View: Show Source Control",comandoId:"workbench.view.scm",teclas:"Control + Shift + G",descripcion:"Abrir Sidebar de control de versiones (Git)"},{comandoTitulo:"View: Show Extensions",comandoId:"workbench.view.extensions",teclas:"Control + Shift + X",descripcion:"Abrir Extensiones"},{comandoTitulo:"View: Show Run and Debug",comandoId:"workbench.view.debug",teclas:"Control + Shift + D",descripcion:"Abrir Run & Debug"}]}};o.\u0275fac=function(s){return new(s||o)},o.\u0275cmp=p({type:o,selectors:[["app-config-barras"]],standalone:!0,features:[E],decls:167,vars:17,consts:[["responsive","","cTable","",3,"striped"],["scope","col",1,"w-25"],[1,"mt-5"],[3,"height","value"],[1,"mb-3"],["cCardTitle",""],["cCardText",""],["cCardImg","bottom","src","assets/images/editor/editor-barra-buscador-symbols-01.png",1,"d-block","w-75"],[1,"text-medium-emphasis"],["cCardImg","bottom","src","assets/images/editor/editor-barra-buscador-symbols-02.png",1,"d-block","w-75"],["cCardImg","bottom","src","assets/images/editor/editor-barra-super-buscador.png",1,"d-block","w-75"],["cCardImg","bottom","src","assets/images/editor/editor-barra-apertura-rapida.png",1,"d-block","w-50"],["cCardImg","bottom","src","assets/images/editor/editor-barra-archivos-abiertos.png",1,"d-block","w-50"]],template:function(s,f){s&1&&(i(0,"h1"),e(1,"Primary Side Bar"),t(),i(2,"h3"),e(3,"Ubicaci\xF3n"),t(),i(4,"p"),e(5,` Mi preferencia personal es utilizar esta barra en el lado derecho, ya que al abrir esta barra se desplaza el contenido del editor hacia la izquierda, lo que puede ser molesto si estamos leyendo o escribiendo en el editor.
`),t(),i(6,"p"),e(7," Para realizar el cambio de ubicaci\xF3n de la barra, presionamos los "),i(8,"code"),e(9,"Control + Shift + P"),t(),e(10," y escribimos "),i(11,"code"),e(12,"View: Toggle Primary Side Bar Position"),t(),e(13,` y nos cambiara la ubicaci\xF3n de la barra.
`),t(),i(14,"h3"),e(15,"Abreviaciones del teclado"),t(),i(16,"table",0)(17,"thead")(18,"tr")(19,"th",1),e(20," Comando "),t(),i(21,"th",1),e(22," Teclas "),t(),i(23,"th",1),e(24," Descripci\xF3n "),t()()(),i(25,"tbody"),u(26,T,11,4,"tr",null,b),t()(),i(28,"div",2),a(29,"c-progress",3),t(),i(30,"div",2)(31,"h1"),e(32,"Barra de Comandos"),t(),i(33,"p"),e(34," La barra de comandos, es de las mas mportantes de Visual Studio Code, presionamos las siguientes teclas "),i(35,"code"),e(36,"Control + Shift + P"),t(),e(37," y se desplegara la barra de comandos. Esta barra la podemos utilizar para diferentes tareas. "),t()(),i(38,"div",2),a(39,"c-progress",3),t(),i(40,"div",2)(41,"h1"),e(42,"Barra de b\xFAsqueda de archivos"),t(),i(43,"p"),e(44," La barra de b\xFAsqueda de archivos nos ahorrar\xE1 mucho tiempo al encontrar documentos espec\xEDficos. Simplemente presiona las teclas "),i(45,"code"),e(46,"Control + P"),t(),e(47," y se desplegar\xE1 una lista con todos los archivos disponibles. Luego escribe parte del nombre del archivo que deseas encontrar y presiona "),i(48,"code"),e(49,"Enter"),t(),e(50," para abrirlo. "),t()(),i(51,"div",2),a(52,"c-progress",3),t(),i(53,"div",2)(54,"h1"),e(55,"Acceso directo a Barra de Symbolos"),t(),i(56,"p"),e(57," La barra de simbolos es una de las barras de Visual Studio Code, nos permite buscar los metodos, variables, etiquetas, etc. del archivo en que nos encontramos actualmente. "),t(),i(58,"c-row")(59,"c-col")(60,"c-card",4)(61,"c-card-body")(62,"h5",5),e(63,"Barra de simbolos 1"),t(),i(64,"p",6),e(65," La podemos buscar como "),i(66,"code"),e(67,"Go To Symbol in Accessible View"),t(),e(68," el id es "),i(69,"code"),e(70,"editor.action.accessibleViewGoToSymbol"),t(),e(71,". Y la abreviaci\xF3n corresponde a "),i(72,"code"),e(73,"Control + Shift + O"),t()(),a(74,"p",6),t(),a(75,"img",7),t()(),i(76,"c-col")(77,"c-card",4)(78,"c-card-body")(79,"h5",5),e(80,"Barra de simbolos 2"),t(),i(81,"p",6),e(82," La podemos buscar como "),i(83,"code"),e(84,"Go To Symbol in Accessible View"),t(),e(85," el id es "),i(86,"code"),e(87,"editor.action.accessibleViewGoToSymbol"),t(),e(88,". Y la abreviaci\xF3n corresponde a "),i(89,"code"),e(90,"Control + Shift + ."),t()(),i(91,"p",6)(92,"small",8),e(93,"No s\xE9 por qu\xE9 tienen el mismo nombre y el mismo ID, pero realizan dos acciones diferentes."),t()()(),a(94,"img",9),t()()()(),i(95,"div",2),a(96,"c-progress",3),t(),i(97,"div",2)(98,"h1"),e(99,"Super Buscador"),t(),i(100,"c-row")(101,"c-col")(102,"c-card",4)(103,"c-card-body")(104,"p",6),e(105," Sin duda una de las mejores herramientas de Visual Studio Code, nos permite buscar todo. Tienes solo el nombre del metodo y no sabes en que clase esta, con esta herramienta lo encuentras. La podemos buscar como "),i(106,"code"),e(107,"Go to Symbol in Workspace..."),t(),e(108," el id es "),i(109,"code"),e(110,"workbench.action.showAllSymbols"),t(),e(111,". Y la abreviaci\xF3n corresponde a "),i(112,"code"),e(113,"Control + T"),t()(),a(114,"p",6),t(),a(115,"img",10),t()()()(),i(116,"div",2),a(117,"c-progress",3),t(),i(118,"div",2)(119,"h1"),e(120,"Barra de apertura r\xE1pida"),t(),i(121,"c-row")(122,"c-col")(123,"c-card",4)(124,"c-card-body")(125,"p",6),e(126," Esta barra sirve para ir al Explorer, a Git, Extensiones, a la Terminal, etc. Presiona "),i(127,"code"),e(128,"Control + Q"),t(),e(129," (no sueltes Control) y se desplegar\xE1 una lista con todas las posibilidades disponibles, muevete presionando la Q y cuando encuentres la parte donde quieres ir suelta Control. "),t(),a(130,"p",6),t(),a(131,"img",11),t()()()(),i(132,"div",2),a(133,"c-progress",3),t(),i(134,"div",2)(135,"h1"),e(136,"Barra de archivos abiertos"),t(),i(137,"c-row")(138,"c-col")(139,"c-card",4)(140,"c-card-body")(141,"p",6),e(142," Esta barra sirve para ver todos los archivos que tenemos abiertos. Presiona "),i(143,"code"),e(144,"Control + Tab"),t(),e(145," (no sueltes Control) y se desplegar\xE1 una lista con todos los archivos abiertos, muevete presionando Tab y cuando encuentres el archivo que quieres ir suelta control. "),t(),a(146,"p",6),t(),a(147,"img",12),t()()()(),i(148,"div",2),a(149,"c-progress",3),t(),i(150,"div",2)(151,"h1"),e(152,"Barra Ir a N\xB0 L\xEDnea"),t(),i(153,"c-row")(154,"c-col")(155,"c-card",4)(156,"c-card-body")(157,"p",6),e(158," Esta barra sirve para ir a un n\xFAmero de l\xEDnea espec\xEDfico. Presiona "),i(159,"code"),e(160,"Control + G"),t(),e(161," digita el numero de l\xEDnea que quieres ir y presiona "),i(162,"code"),e(163,"Enter"),t(),e(164,". "),t()()()()()(),i(165,"div",2),a(166,"c-progress",3),t()),s&2&&(r(16),n("striped",!0),r(10),S(f.listaAbreviaciones),r(3),n("height",1)("value",100),r(10),n("height",1)("value",100),r(13),n("height",1)("value",100),r(44),n("height",1)("value",100),r(21),n("height",1)("value",100),r(16),n("height",1)("value",100),r(16),n("height",1)("value",100),r(17),n("height",1)("value",100))},dependencies:[g,h,v,x,C,y]});let l=o;return l})();export{P as ConfigBarrasComponent};