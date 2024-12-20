import{c as W,e as N,l as q}from"./chunk-3L4D54LC.js";import{M as I,N as O,O as P,X as j,Y as z,b as B,o as L}from"./chunk-DJQBCJIR.js";import{$b as S,Bb as t,Cb as a,Db as C,Tb as e,Y as A,_a as b,_b as M,ca as y,db as R,ga as D,hb as T,qb as v,sc as J,ya as F}from"./chunk-LKICGNUI.js";import{a as p,d as g,e as f,f as x}from"./chunk-EUDKD2JW.js";var h=function(i,n){if(!(typeof window>"u")&&!(typeof document>"u")){var d=n??document.body;return window.getComputedStyle(d,null).getPropertyValue(i).replace(/^\s/,"")}};var E=function(i,n){if(n===void 0&&(n=100),typeof i>"u")throw new TypeError("Hex color is not defined");var d=i.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!d)throw new Error("".concat(i," is not a valid hex color"));var r,o,l;return i.length===7?(r=parseInt(i.slice(1,3),16),o=parseInt(i.slice(3,5),16),l=parseInt(i.slice(5,7),16)):(r=parseInt(i.slice(1,2),16),o=parseInt(i.slice(2,3),16),l=parseInt(i.slice(3,5),16)),"rgba(".concat(r,", ").concat(o,", ").concat(l,", ").concat(n/100,")")};var G=(()=>{let n=class n{constructor(){this.mainChart={type:"line"},this.initMainChart()}random(r,o){return Math.floor(Math.random()*(o-r+1)+r)}initMainChart(r="Month"){let o=h("--cui-success")??"#4dbd74",l=h("--cui-info")??"#20a8d8",u=E(h("--cui-info")??"#20a8d8",10),w=h("--cui-danger")??"#f86c6b";this.mainChart.elements=r==="Month"?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let m=0;m<=this.mainChart.elements;m++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let s=[];if(r==="Month")s=["January","February","March","April","May","June","July","August","September","October","November","December"];else{let m=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];s=m.concat(m,m,m)}let c=[{backgroundColor:u,borderColor:l,pointHoverBackgroundColor:l,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:o||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:w||"#f86c6b",pointHoverBackgroundColor:w,borderWidth:1,borderDash:[8,5]}],k=[p({data:this.mainChart.Data1,label:"Current"},c[0]),p({data:this.mainChart.Data2,label:"Previous"},c[1]),p({data:this.mainChart.Data3,label:"BEP"},c[2])],U={legend:{display:!1},tooltip:{callbacks:{labelColor:m=>({backgroundColor:m.dataset.borderColor})}}},K=this.getScales(),_={maintainAspectRatio:!1,plugins:U,scales:K,elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=_,this.mainChart.data={datasets:k,labels:s}}getScales(){let r=h("--cui-border-color-translucent"),o=h("--cui-body-color");return{x:{grid:{color:r,drawOnChartArea:!1},ticks:{color:o}},y:{border:{color:r},grid:{color:r},max:250,beginAtZero:!0,ticks:{color:o,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}}}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"any"});let i=n;return i})();var V=()=>["/vsc/config-tabs"],H=()=>["/vsc/config-editor"],Se=(()=>{var n,d,r,o,l;let u=class u{constructor(){f(this,n);f(this,d);f(this,r);f(this,o);f(this,l);x(this,n,y(F)),x(this,d,y(B)),x(this,r,y(R)),x(this,o,y(G)),this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/images/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/images/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/images/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xE9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/images/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xE1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/images/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xE1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/images/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={type:"line"},this.mainChartRef=T(void 0),x(this,l,J(()=>{this.mainChartRef()&&this.setChartStyles()})),this.chart=[],this.trafficRadioGroup=new W({trafficRadio:new N("Month")})}ngOnInit(){this.initCharts(),this.updateChartOnColorModeChange()}initCharts(){this.mainChart=g(this,o).mainChart}setTrafficPeriod(s){this.trafficRadioGroup.setValue({trafficRadio:s}),g(this,o).initMainChart(s),this.initCharts()}handleChartRef(s){s&&this.mainChartRef.set(s)}updateChartOnColorModeChange(){let s=g(this,r).listen(g(this,d).documentElement,"ColorSchemeChange",()=>{this.setChartStyles()});g(this,n).onDestroy(()=>{s()})}setChartStyles(){this.mainChartRef()&&setTimeout(()=>{let s=p({},this.mainChart.options),c=g(this,o).getScales();this.mainChartRef().options.scales=p(p({},s.scales),c),this.mainChartRef().update()})}};n=new WeakMap,d=new WeakMap,r=new WeakMap,o=new WeakMap,l=new WeakMap,u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=D({type:u,selectors:[["ng-component"]],standalone:!0,features:[M],decls:118,vars:8,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["src","assets/images/visual-studio-code.png","alt","Visual Studio Code","loading","lazy",1,"d-block","w-100"],["href","https://es.aliexpress.com/item/1005006437127027.html","target","_blank",1,"btn","btn-primary"],["href","https://drive.google.com/drive/folders/16QgfaZ2z-0nCRmhwbc3WshUxUPLLtAmB?usp=sharing","target","_blank",1,"btn","btn-primary"],["src","assets/images/teclado-2-perillas.webp","alt","Teclado","loading","lazy",1,"mt-3","d-block","w-25"],[1,"mt-3"],[1,"text-body-secondary"],[1,"btn","btn-primary",3,"routerLink"],["src","assets/images/config-miniteclado-2-perillas.png","alt","Teclado","loading","lazy",1,"mt-3","d-block",2,"width","100%"],["href","https://es.aliexpress.com/item/1005005954338084.html","target","_blank",1,"btn","btn-primary"],["src","assets/images/teclado-3-perillas.png","alt","Teclado","loading","lazy",1,"mt-3","d-block","w-25"],["src","assets/images/config-miniteclado-3-perillas.png","alt","Teclado","loading","lazy",1,"mt-3","d-block",2,"width","100%"]],template:function(c,k){c&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Visual Studio Code"),a(),e(10,`
      `),a(),e(11,`
      `),t(12,"c-card-body"),e(13,`
        `),t(14,"p",2),e(15,`
          En esta p\xE1gina encontrar\xE1s una serie de configuraciones que te guiar\xE1n para personalizar Visual Studio Code en `),t(16,"b"),e(17,"WINDOWS"),a(),e(18," seg\xFAn tus preferencias. "),t(19,"b"),e(20,"Cuando tengo tiempo hare esta p\xE1gina mas linda, pero por ahora solo es un borrador."),a(),e(21,`
        `),a(),e(22,`
        `),t(23,"p",2),e(24,`
          Aca podremos ver como configurar tu Visual Studio Code para que se vea como el mio, con los diferentes perfiles:
        `),a(),e(25,`
        `),C(26,"img",3),e(27,`
      `),a(),e(28,`
    `),a(),e(29,`

    `),t(30,"c-card",1),e(31,`
      `),t(32,"c-card-header"),e(33,`
        `),t(34,"strong"),e(35,"Teclado Adicional"),a(),e(36,`
      `),a(),e(37,`
      `),t(38,"c-card-body"),e(39,`
        `),t(40,"p",2),e(41,`
          Teclado de programaci\xF3n Macro personalizado, perif\xE9rico con Bluetooth, RGB, 12 teclas y 2 perillas de control. Las abreviaciones quedan grabadas en el teclado. Los 3 layer se refieren que puedes configurar 3 grupos de teclas con diferentes funcionalidades, ejemplo puedes tener un grupo para trabajar, otro para juegos y a\xFAn te queda un grupo disponible.
        `),a(),e(42,`

        `),t(43,"p",2),e(44,`
          Aca los enlaces, el enlace del software para configurar el teclado esta en la descripci\xF3n del producto en AliExpress. Pero lo coloco aca por si no lo encuentran. El software es para `),t(45,"b"),e(46,"WINDOWS"),a(),e(47,`
        `),a(),e(48,`
        `),t(49,"a",4),e(50,"Link de compra AliExpress"),a(),e(51,`
        `),t(52,"a",5),e(53,"Enlace de descarga de software"),a(),e(54,`

        `),C(55,"img",6),e(56,`

        `),t(57,"h5",7),e(58,"Configuraci\xF3n Teclado Adicional"),a(),e(59,`
        `),t(60,"p",8),e(61,`
          Esta es mi configuraci\xF3n del teclado adicional. Cuando configuren el teclado tener en cuenta que siempre se deben presionar las teclas de la aplicaci\xF3n (no en nuestro teclado).
        `),a(),e(62,`
        `),t(63,"a",9),e(64,"Abreviaciones de las perillas"),a(),e(65,`
        `),t(66,"a",9),e(67,"Abreviaciones de teclas"),a(),e(68,`

        `),C(69,"img",10),e(70,`
      `),a(),e(71,`
    `),a(),e(72,`

    `),t(73,"c-card",1),e(74,`
      `),t(75,"c-card-header"),e(76,`
        `),t(77,"strong"),e(78,"Teclado Adicional"),a(),e(79,`
      `),a(),e(80,`
      `),t(81,"c-card-body"),e(82,`
        `),t(83,"p",2),e(84,`
          Teclado de programaci\xF3n Macro personalizado, perif\xE9rico con Bluetooth, RGB, 15 teclas y 3 perillas de control. Las abreviaciones quedan grabadas en el teclado.
        `),a(),e(85,`

        `),t(86,"p",2),e(87,`
          Aca los enlaces, el enlace del software para configurar el teclado esta en la descripci\xF3n del producto en AliExpress. Pero lo coloco aca por si no lo encuentran. El software es para `),t(88,"b"),e(89,"WINDOWS"),a(),e(90,`
        `),a(),e(91,`
        `),t(92,"a",11),e(93,"Link de compra AliExpress OJO con la selecci\xF3n"),a(),e(94,`
        `),t(95,"a",5),e(96,"Enlace de descarga de software"),a(),e(97,`

        `),C(98,"img",12),e(99,`

        `),t(100,"h5",7),e(101,"Configuraci\xF3n Teclado Adicional"),a(),e(102,`
        `),t(103,"p",8),e(104,`
          Esta es mi configuraci\xF3n del teclado adicional. Cuando configuren el teclado tener en cuenta que siempre se deben presionar las teclas de la aplicaci\xF3n (no en nuestro teclado).
        `),a(),e(105,`
        `),t(106,"a",9),e(107,"Abreviaciones de las perillas"),a(),e(108,`
        `),t(109,"a",9),e(110,"Abreviaciones de teclas"),a(),e(111,`

        `),C(112,"img",13),e(113,`
      `),a(),e(114,`
    `),a(),e(115,`

    `),e(116,`
  `),a(),e(117,`
`),a()),c&2&&(b(63),v("routerLink",S(4,V)),b(3),v("routerLink",S(5,H)),b(40),v("routerLink",S(6,V)),b(3),v("routerLink",S(7,H)))},dependencies:[I,O,z,j,q,P,L],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]});let i=u;return i})();export{Se as DashboardComponent};
