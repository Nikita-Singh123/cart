(this["webpackJsonpcart-application"]=this["webpackJsonpcart-application"]||[]).push([[0],{49:function(e,t,a){e.exports=a(97)},54:function(e,t,a){},55:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),i=(a(54),a(21)),o=a(22),m=a(25),s=a(23),u=a(26),d=(a(55),a(24)),p=a(29),f=a.n(p),E=a(14),y=a.n(E),v=function(e){return{type:"ITEM_ADDED_TO_CART",payload:e}},h=a(3),b=a(15),g=a(10);var N={searchItem:function(e){return console.log("in action",e),{type:"SEARCH_ITEM",payload:e}}},O=Object(h.b)((function(e){return e}),N)((function(e){return Object(n.useEffect)((function(){console.log("Updated Header",e.itemInCart.length)}),[e.itemInCart]),r.a.createElement("div",{className:"row"},r.a.createElement("nav",{className:"custom-navbar"},r.a.createElement("div",null,r.a.createElement(b.a,{icon:g.d,style:{fontSize:"30px",color:"#ffc107"}})),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-right",style:{listStyle:"none"}},r.a.createElement("li",{className:"main"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search here",id:"searchField"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return function(){var t=document.getElementById("searchField").value;e.searchItem(t)}()}},r.a.createElement("i",{className:"fa fa-search"}))))),r.a.createElement("li",{className:""},r.a.createElement(d.b,{to:"/CartIcon",className:"nav-link linkcolor",style:{color:"white"}},r.a.createElement(b.a,{icon:g.a,style:{fontSize:"20px"}}),r.a.createElement("span",null,e.itemInCart.length)))))))}));var C=function(){return r.a.createElement("div",null,"search")},T=a(13);var I={itemRemovedToCart:function(e){return{type:"ITEM_REMOVED_TO_CART",payload:e}},addQuantity:function(e){return{type:"ADD_QUANTITY",payload:e}},removeQuantity:function(e){return{type:"REMOVE_QUANTITY",payload:e}}},j=Object(h.b)((function(e){return e}),I)((function(e){var t=Object(n.useState)(0),a=Object(T.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),o=Object(T.a)(i,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){console.log("props in carticon",e.itemInCart),l(e.itemInCart.reduce((function(e,t){return e+t.markedPrice*t.qty}),0)),s(e.itemInCart.reduce((function(e,t){return e+t.price*t.qty}),0))}),[e.itemInCart]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-9"},e.itemInCart.map((function(t){return r.a.createElement("div",{className:"border mb-2",style:{border:"2px solid black"},key:t.id},r.a.createElement("div",{className:"row m-2"},r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("img",{src:t.img_url,style:{width:"100%"}})),r.a.createElement("div",{className:"col-lg-10"},r.a.createElement("div",{style:{width:"100%"}}," ",t.name),r.a.createElement("span",{className:"col-lg-4"},r.a.createElement("i",{className:"fa fa-rupee"}),r.a.createElement("strong",{className:"mr-4"},t.price),r.a.createElement("del",{style:{opacity:"0.75"}},t.price+t.price*t.discount/100),r.a.createElement("span",{style:{color:"green"}}," ",t.discount,"% off ")),r.a.createElement("span",{className:"col-lg-4"},r.a.createElement("button",{className:"rounded",onClick:function(){return e.removeQuantity(t.id)}},r.a.createElement("strong",null,"-")),r.a.createElement("strong",{className:"m-2"},t.qty),r.a.createElement("button",{className:"rounded",onClick:function(){return e.addQuantity(t.id)}},r.a.createElement("strong",null,"+"))),r.a.createElement("span",{className:"col-lg-4"},r.a.createElement("strong",{className:"cursor-pointer",onClick:function(){return e.itemRemovedToCart(t.id)}},"Remove")))))}))),r.a.createElement("div",{className:"col-lg-3 "},"price details",r.a.createElement("div",null,"Price: ",c),r.a.createElement("div",null,"Discount: ",c-m),r.a.createElement("div",null,"Total Payable: ",m))))})),w=a(47),A=a.n(w);var k={filterItem:function(e){return console.log("in action filter data",e),{type:"FILTER_DATA",payload:e}}},S=Object(h.b)((function(e){return e}),k)((function(e){var t=Object(n.useState)({min:10,max:1e3}),a=Object(T.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"m-4"},r.a.createElement(A.a,{maxValue:1e3,minValue:10,value:c,onChange:function(e){return l(e)}})),r.a.createElement("button",{className:"btn btn-primary rounded-pill",onClick:function(){return e.filterItem(c)}},"Apply"))})),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).listItemClicked=function(e){a.setState({data:a.state.data.map((function(t){return t.stateName="inActive",t.id==e.id&&(t.stateName="active"),t}))})},a.state={active:!1,data:[{id:1,text:"Price -- High Low",stateName:"inActive",type:"Price -- High Low"},{id:2,text:"Price -- Low High",stateName:"inActive",type:"Price -- Low High"},{id:3,text:"Discount",stateName:"inActive",type:"Discount"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;this.state.data;return r.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3"},r.a.createElement("h4",{className:"mr-3"},"Sort By"),r.a.createElement("ul",{className:"d-flex flex-row bd-highlight mb-3 nav",style:{listStyle:"none"}},this.state.data.map((function(t,a){return r.a.createElement("li",{key:a,className:"mr-3"},r.a.createElement("a",{className:t.stateName,onClick:function(){e.listItemClicked(t),e.props.itemsSorting(t.text)}},t?t.text:""))}))))}}]),t}(n.Component),x={itemsSorting:function(e){return function(t){return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(y.a.get("https://api.myjson.com/bins/qzuzi").then((function(a){if("Price -- High Low"===e){for(var n=0;n<a.data.length;n++)a.data[n].qty=1,a.data[n].markedPrice=a.data[n].price+a.data[n].price*a.data[n].discount/100;a.data.sort((function(e,t){return t.price-e.price}))}if("Price -- Low High"===e){for(var r=0;r<a.data.length;r++)a.data[r].qty=1,a.data[r].markedPrice=a.data[r].price+a.data[r].price*a.data[r].discount/100;a.data.sort((function(e,t){return e.price-t.price}))}t({type:"ITEMS_SORT",data:a.data})})));case 2:case"end":return a.stop()}}))}}},D=Object(h.b)((function(e){return e}),x)(_);var R,q,M={itemAddedToCart:v},P=Object(h.b)((function(e){return e}),M)((function(e){var t=Object(n.useState)([]),a=Object(T.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){console.log("itemList Page loaded"),0===e.itemListShowing.length?y.a.get("https://api.myjson.com/bins/qzuzi").then((function(e){for(var t=0;t<e.data.length;t++)e.data[t].qty=1,e.data[t].markedPrice=e.data[t].price+e.data[t].price*e.data[t].discount/100;l(e.data)})):l(e.itemListShowing)}),[e.itemInCart,e.itemListShowing]),r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Hello"),r.a.createElement("div",{className:"col-md-3 col-lg-2 d-none d-sm-block"},r.a.createElement(S,null)),r.a.createElement("div",{className:"col-md-9 col-lg-10 "},r.a.createElement("div",{className:"row d-none d-sm-block"},r.a.createElement(D,null)),r.a.createElement("div",{className:"col-sm-12 d-block d-sm-none"},r.a.createElement("div",{className:"col-6 float-left mb-2"},r.a.createElement("button",{style:{width:"100%"}},r.a.createElement(b.a,{icon:g.c})," Sort")),r.a.createElement("div",{className:"col-6 float-right mb-2"},r.a.createElement("button",{style:{width:"100%"}},r.a.createElement(b.a,{icon:g.b})," Filter"))),r.a.createElement("div",{className:"row"},c.map((function(t){return r.a.createElement("div",{className:"col-lg-3 mb-3 col-6",key:t.id},r.a.createElement("div",null," ",r.a.createElement("img",{src:t.img_url,alt:"item images",style:{width:"100%"}})," "),r.a.createElement("div",null,t.name),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-rupee"}),r.a.createElement("strong",{className:"mr-4"},t.price),r.a.createElement("del",{style:{opacity:"0.75"}},t.price+t.price*t.discount/100),r.a.createElement("span",{style:{color:"green"}}," ",t.discount,"% off ")),r.a.createElement("button",{className:"btn btn-warning rounded-pill",onClick:function(){return e.itemAddedToCart(t)}},"Add to Cart"))})))))})),L=a(11),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("Mount in app",this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(d.a,null,r.a.createElement(O,null),"\xa0",r.a.createElement("div",null,r.a.createElement(L.a,{exact:!0,path:"/",component:P}),r.a.createElement(L.a,{path:"/Search",component:C}),r.a.createElement(L.a,{path:"/CartIcon",component:j})))))}}]),t}(r.a.Component),z={itemAddedToCart:v},Q=Object(h.b)((function(e){return e}),z)(H),F=(a(95),a(12)),V=(a(96),[]);y.a.get("https://api.myjson.com/bins/qzuzi").then((function(e){for(var t=0;t<e.data.length;t++)e.data[t].qty=1,e.data[t].markedPrice=e.data[t].price+e.data[t].price*e.data[t].discount/100;R=e.data}));var U=Object(F.c)({itemInCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_ADDED_TO_CART":var a=!1;return e.length&&e.map((function(e){e.id===t.payload.id&&(++t.payload.qty,a=!0)})),!a&&e.push(t.payload),q=e.filter((function(e){return e.qty>0})),console.log("state in reducer",e,e.length,q),q;case"ITEM_REMOVED_TO_CART":return e=e.filter((function(e){return e.id!==t.payload})),console.log("After removed item",e),e;case"ADD_QUANTITY":return e.map((function(e){e.id===t.payload&&++e.qty})),e=e.filter((function(e){return 0!==e.qty}));case"REMOVE_QUANTITY":return e.map((function(e){e.id===t.payload&&--e.qty})),e=e.filter((function(e){return 0!==e.qty}));default:return e}},itemListShowing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_DATA":return e=0===e.length?R.filter((function(e){return t.payload.min<=e.price&&e.price<=t.payload.max})):e.filter((function(e){return t.payload.min<=e.price&&e.price<=t.payload.max}));case"SEARCH_ITEM":return e=0===e.length?R.filter((function(e){return e.name===t.payload})):e.filter((function(e){return e.name===t.payload}));case"ITEMS_SORT":return e=t.data;default:return e}}}),Y=a(48),B=Object(F.d)(U,Object(F.a)(Y.a));B.subscribe((function(){})),l.a.render(r.a.createElement(h.a,{store:B},r.a.createElement(Q,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.70ad8dd5.chunk.js.map