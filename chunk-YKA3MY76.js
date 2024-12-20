import{M as d,N as p,X as g,Y as u,ba as E}from"./chunk-DJQBCJIR.js";import{Bb as i,Cb as e,Db as n,Tb as t,_a as a,_b as m,ga as s,qb as r}from"./chunk-LKICGNUI.js";import"./chunk-EUDKD2JW.js";var P=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=s({type:o,selectors:[["app-config-generales"]],standalone:!0,features:[m],decls:156,vars:16,consts:[[1,"mt-3"],[1,"mb-3"],["cCardTitle",""],["cCardText",""],["src","assets/images/editor/editor-resaltar-linea-actual.png","alt","Visual Studio Code","loading","lazy",1,"d-block","mt-2","w-30"],[1,"mt-5"],[3,"height","value"],["src","assets/images/editor/editor-config-compact-folder.png","alt","Visual Studio Code","loading","lazy",1,"d-block","mt-2","w-30"],["cCardImg","bottom","src","assets/images/editor/editor-config-minimapa.png",1,"w-50"],["cCardImg","bottom","src","assets/images/editor/editor-config-terminal-default-01.png",1,"w-50"],["cCardImg","bottom","src","assets/images/editor/editor-config-terminal-default-02.png",1,"w-50"],["cCardImg","bottom","src","assets/images/editor/editor-config-bracket-pairs.png",1,"w-50"],["cCardImg","bottom","src","assets/images/editor/editor-config-bracket-pairs-ej.png",1,"w-25"],["cCardImg","bottom","src","assets/images/editor/editor-config-sticky-scroll.png",1,"w-50"],["cCardImg","bottom","src","assets/images/editor/editor-config-cursor.png",1,"w-75"],["cCardImg","bottom","src","assets/images/editor/editor-config-cursor-animation.png",1,"w-75"],["cCardImg","bottom","src","assets/images/editor/editor-config-teclas-presionadas.png",1,"w-75"]],template:function(l,x){l&1&&(i(0,"div",0)(1,"c-row")(2,"c-col")(3,"c-card",1)(4,"c-card-body")(5,"h5",2),t(6,"Resaltar Linea actual"),e(),i(7,"p",3),t(8," Resaltar la linea donde se encuentra el cursor actualmente, para esto se debe agregar una configuraci\xF3n de Visual Studio Code. "),e(),i(9,"p",3),t(10," Presionar "),i(11,"code"),t(12,"Control + Shift + P"),e(),t(13," y buscar "),i(14,"code"),t(15,"Preferences: Open User Settings (JSON)"),e(),t(16," y agregar la siguiente configuraci\xF3n. "),e(),i(17,"code"),t(18,' "workbench.colorCustomizations": { "editor.lineHighlightBackground": "#485062" } '),e(),n(19,"img",4),e()()()()(),i(20,"div",5),n(21,"c-progress",6),e(),i(22,"div",5)(23,"c-row")(24,"c-col")(25,"c-card",1)(26,"c-card-body")(27,"h5",2),t(28,"Compact Folders"),e(),i(29,"p",3),t(30,' Mostrar carpetas en modo compacto. Buscar en las configuraciones "Explorer: Compact Folders" (yo prefiero esta opci\xF3n sin marcar) '),e(),n(31,"img",7),e()()()()(),i(32,"div",5),n(33,"c-progress",6),e(),i(34,"div",5)(35,"c-row")(36,"c-col")(37,"c-card",1)(38,"c-card-body")(39,"h5",2),t(40,"Mostrar/Ocultar Minimapa en ScrollBar"),e(),i(41,"p",3),t(42," Quieres mostrar u ocultar el minimapa en la barra de scroll? Presiona "),i(43,"code"),t(44,"Control + Shift + P"),e(),t(45," y escribe "),i(46,"code"),t(47,"Toggle Minimap"),e(),t(48," y presiona enter. "),e(),n(49,"p",3),e(),n(50,"img",8),e()()()(),i(51,"div",5),n(52,"c-progress",6),e(),i(53,"div",5)(54,"c-row")(55,"c-col")(56,"c-card",1)(57,"c-card-body")(58,"h5",2),t(59,"Configurar Terminal por defecto"),e(),i(60,"p",3),t(61," Para configurar tu teminal por defecto presiona "),i(62,"code"),t(63,"Control + Shift + P"),e(),t(64," y escribe "),i(65,"code"),t(66,"Terminal"),e(),t(67," y busca la siguiente opcion: "),e(),n(68,"img",9)(69,"img",10),e()()()()(),i(70,"div",5),n(71,"c-progress",6),e(),i(72,"div",5)(73,"c-row")(74,"c-col")(75,"c-card",1)(76,"c-card-body")(77,"h5",2),t(78,"Bracket Pairs"),e(),i(79,"p",3),t(80," En los inicios de VSC se utilizaba una extension para realizar esto, pero ahora es nativo de VSC. Vamos a ir a settings y buscamos "),i(81,"code"),t(82,"bracket pair"),e(),t(83," y activamos las siguientes opciones: "),e(),n(84,"img",11),t(85," \xA0 "),n(86,"img",12),i(87,"p",3),t(88," Ten en cuenta el color de las llaves y el subrayado en tono lila que comienza en la primera l\xEDnea y se extiende hasta la \xFAltima, debido a que el cursor se encuentra en la pen\xFAltima l\xEDnea. "),e()()()()()(),i(89,"div",5),n(90,"c-progress",6),e(),i(91,"div",5)(92,"c-row")(93,"c-col")(94,"c-card",1)(95,"c-card-body")(96,"h5",2),t(97,"Sticky Scroll"),e(),i(98,"p",3),t(99," El *Sticky Scroll* (scroll pegajoso) es una funcionalidad que, al desplazarte hacia abajo, mantiene visible en la parte superior la categor\xEDa o secci\xF3n en la que te encuentras. Esta caracter\xEDstica puede activarse en diferentes \xE1reas como el editor de c\xF3digo o el \xE1rbol de archivos. En mi caso, prefiero utilizarla \xFAnicamente en el \xE1rbol de archivos. "),e(),n(100,"img",13),e()()()()(),i(101,"div",5),n(102,"c-progress",6),e(),i(103,"div",5)(104,"c-row")(105,"c-col")(106,"c-card",1)(107,"c-card-body")(108,"h5",2),t(109,"Cursor"),e(),i(110,"p",3),t(111," El cursor lo podemos personalizar, para esto vamos a settings y buscamos "),i(112,"code"),t(113,"cursor"),e(),t(114," y seleccionamos la opci\xF3n "),i(115,"code"),t(116,"Cursor Style"),e(),t(117," y seleccionamos el estilo que m\xE1s nos guste. "),e(),n(118,"img",14),e()()(),i(119,"c-col")(120,"c-card",1)(121,"c-card-body")(122,"h5",2),t(123,"Cursor Animation"),e(),i(124,"p",3),t(125," El cursor tambi\xE9n podemos agregarle animaciones, para esto vamos a settings y buscamos "),i(126,"code"),t(127,"cursor animation"),e(),t(128," y seleccionamos la opci\xF3n "),i(129,"code"),t(130,"Cursor Blinking"),e(),t(131," y seleccionamos el que m\xE1s nos guste. "),e(),n(132,"img",15),e()()()()(),i(133,"div",5),n(134,"c-progress",6),e(),i(135,"div",5)(136,"c-row")(137,"c-col")(138,"c-card",1)(139,"c-card-body")(140,"h5",2),t(141,"Mostrar las teclas que se estan presionando"),e(),i(142,"p",3),t(143," Para mostrar que teclas estamos presionando presionamos "),i(144,"code"),t(145,"Control + Shift + P"),e(),t(146," y buscamos "),i(147,"code"),t(148,"Screencast"),e(),t(149," y seleccionamos la opci\xF3n "),i(150,"code"),t(151,"Developer: Toggle Screencast Mode"),e(),t(152,". "),e(),n(153,"img",16),e()()()()(),i(154,"div",5),n(155,"c-progress",6),e()),l&2&&(a(21),r("height",1)("value",100),a(12),r("height",1)("value",100),a(19),r("height",1)("value",100),a(19),r("height",1)("value",100),a(19),r("height",1)("value",100),a(12),r("height",1)("value",100),a(32),r("height",1)("value",100),a(21),r("height",1)("value",100))},dependencies:[u,g,d,p,E]});let c=o;return c})();export{P as ConfigGeneralesComponent};
