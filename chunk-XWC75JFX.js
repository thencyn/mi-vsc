import{c as W,e as z,l as V}from"./chunk-3L4D54LC.js";import{M as j,N as L,O as P,X as O,Y as N,b as B,o as I}from"./chunk-DJQBCJIR.js";import{$b as S,Bb as t,Cb as a,Db as y,Tb as e,Y as D,_a as b,_b as F,ca as x,db as T,ga as R,hb as A,qb as v,sc as J,ya as M}from"./chunk-LKICGNUI.js";import{a as p,d as f,e as g,f as C}from"./chunk-EUDKD2JW.js";var h=function(r,n){if(!(typeof window>"u")&&!(typeof document>"u")){var d=n??document.body;return window.getComputedStyle(d,null).getPropertyValue(r).replace(/^\s/,"")}};var E=function(r,n){if(n===void 0&&(n=100),typeof r>"u")throw new TypeError("Hex color is not defined");var d=r.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!d)throw new Error("".concat(r," is not a valid hex color"));var i,o,l;return r.length===7?(i=parseInt(r.slice(1,3),16),o=parseInt(r.slice(3,5),16),l=parseInt(r.slice(5,7),16)):(i=parseInt(r.slice(1,2),16),o=parseInt(r.slice(2,3),16),l=parseInt(r.slice(3,5),16)),"rgba(".concat(i,", ").concat(o,", ").concat(l,", ").concat(n/100,")")};var q=(()=>{let n=class n{constructor(){this.mainChart={type:"line"},this.initMainChart()}random(i,o){return Math.floor(Math.random()*(o-i+1)+i)}initMainChart(i="Month"){let o=h("--cui-success")??"#4dbd74",l=h("--cui-info")??"#20a8d8",u=E(h("--cui-info")??"#20a8d8",10),w=h("--cui-danger")??"#f86c6b";this.mainChart.elements=i==="Month"?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let m=0;m<=this.mainChart.elements;m++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let s=[];if(i==="Month")s=["January","February","March","April","May","June","July","August","September","October","November","December"];else{let m=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];s=m.concat(m,m,m)}let c=[{backgroundColor:u,borderColor:l,pointHoverBackgroundColor:l,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:o||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:w||"#f86c6b",pointHoverBackgroundColor:w,borderWidth:1,borderDash:[8,5]}],k=[p({data:this.mainChart.Data1,label:"Current"},c[0]),p({data:this.mainChart.Data2,label:"Previous"},c[1]),p({data:this.mainChart.Data3,label:"BEP"},c[2])],G={legend:{display:!1},tooltip:{callbacks:{labelColor:m=>({backgroundColor:m.dataset.borderColor})}}},H=this.getScales(),U={maintainAspectRatio:!1,plugins:G,scales:H,elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=U,this.mainChart.data={datasets:k,labels:s}}getScales(){let i=h("--cui-border-color-translucent"),o=h("--cui-body-color");return{x:{grid:{color:i,drawOnChartArea:!1},ticks:{color:o}},y:{border:{color:i},grid:{color:i},max:250,beginAtZero:!0,ticks:{color:o,maxTicksLimit:5,stepSize:Math.ceil(250/5)}}}}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=D({token:n,factory:n.\u0275fac,providedIn:"any"});let r=n;return r})();var Q=()=>["/vsc/config-tabs"],Y=()=>["/vsc/config-editor"],Se=(()=>{var n,d,i,o,l;let u=class u{constructor(){g(this,n);g(this,d);g(this,i);g(this,o);g(this,l);C(this,n,x(M)),C(this,d,x(B)),C(this,i,x(T)),C(this,o,x(q)),this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/images/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/images/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/images/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xE9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/images/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xE1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/images/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xE1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/images/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={type:"line"},this.mainChartRef=A(void 0),C(this,l,J(()=>{this.mainChartRef()&&this.setChartStyles()})),this.chart=[],this.trafficRadioGroup=new W({trafficRadio:new z("Month")})}ngOnInit(){this.initCharts(),this.updateChartOnColorModeChange()}initCharts(){this.mainChart=f(this,o).mainChart}setTrafficPeriod(s){this.trafficRadioGroup.setValue({trafficRadio:s}),f(this,o).initMainChart(s),this.initCharts()}handleChartRef(s){s&&this.mainChartRef.set(s)}updateChartOnColorModeChange(){let s=f(this,i).listen(f(this,d).documentElement,"ColorSchemeChange",()=>{this.setChartStyles()});f(this,n).onDestroy(()=>{s()})}setChartStyles(){this.mainChartRef()&&setTimeout(()=>{let s=p({},this.mainChart.options),c=f(this,o).getScales();this.mainChartRef().options.scales=p(p({},s.scales),c),this.mainChartRef().update()})}};n=new WeakMap,d=new WeakMap,i=new WeakMap,o=new WeakMap,l=new WeakMap,u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=R({type:u,selectors:[["ng-component"]],standalone:!0,features:[F],decls:86,vars:4,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["src","assets/images/visual-studio-code.png","alt","Visual Studio Code","loading","lazy",1,"d-block","w-100"],["href","https://es.aliexpress.com/item/1005006437127027.html","target","_blank",1,"btn","btn-primary"],["href","https://drive.google.com/drive/folders/16QgfaZ2z-0nCRmhwbc3WshUxUPLLtAmB?usp=sharing","target","_blank",1,"btn","btn-primary"],["src","assets/images/imagen-teclado.webp","alt","Teclado","loading","lazy",1,"mt-3","d-block","w-25"],[1,"text-body-secondary"],[1,"btn","btn-primary",3,"routerLink"],["src","assets/images/config-miniteclado.png","alt","Teclado","loading","lazy",1,"mt-3","d-block",2,"width","100%"]],template:function(c,k){c&1&&(t(0,"c-row"),e(1,`
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
        `),y(26,"img",3),e(27,`
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

        `),y(55,"img",6),e(56,`
        `),t(57,"small"),e(58,"Tambi\xE9n hay otros teclados con 15 teclas y 3 perillas, pero no he comprado de esos a\xFAn...."),a(),e(59,`
      `),a(),e(60,`
    `),a(),e(61,`

    `),t(62,"c-card",1),e(63,`
      `),t(64,"c-card-header"),e(65,`
        `),t(66,"strong"),e(67,"Configuraci\xF3n Teclado Adicional"),a(),e(68,`
      `),a(),e(69,`
      `),t(70,"c-card-body"),e(71,`
        `),t(72,"p",7),e(73,`
          Esta es mi configuraci\xF3n del teclado adicional. Cuando configuren el teclado tener en cuenta que siempre se deben presionar las teclas de la aplicaci\xF3n (no en nuestro teclado).
        `),a(),e(74,`
        `),t(75,"a",8),e(76,"Abreviaciones de las perillas"),a(),e(77,`
        `),t(78,"a",8),e(79,"Abreviaciones de teclas"),a(),e(80,`

        `),y(81,"img",9),e(82,`

      `),a(),e(83,`
    `),a(),e(84,`
  `),a(),e(85,`
`),a()),c&2&&(b(75),v("routerLink",S(2,Q)),b(3),v("routerLink",S(3,Y)))},dependencies:[j,L,N,O,V,P,I],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]});let r=u;return r})();export{Se as DashboardComponent};
