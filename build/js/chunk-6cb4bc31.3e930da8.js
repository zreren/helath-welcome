(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cb4bc31"],{1842:function(t,e,c){"use strict";c.d(e,"b",(function(){return a})),c.d(e,"a",(function(){return o}));var n=c("0c6d");function a(t){return Object(n["a"])({url:"/getExplore",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/getExploreInfo",method:"post",data:t})}},"229f":function(t,e,c){"use strict";c("af41")},"28a9":function(t,e,c){"use strict";c.r(e);var n=c("7a23");Object(n["P"])("data-v-3857f533");var a={class:"title"},o=["src"],l=["innerHTML"];function i(t,e,c,i,r,b){var s=Object(n["V"])("el-page-header"),u=Object(n["V"])("el-header"),j=Object(n["V"])("el-main"),O=Object(n["V"])("el-container");return Object(n["M"])(),Object(n["k"])(O,null,{default:Object(n["lb"])((function(){return[Object(n["r"])(u,{class:"title1",id:"anchor"},{default:Object(n["lb"])((function(){return[Object(n["r"])(s,{onBack:i.goBack,content:"食譜詳情"},null,8,["onBack"]),Object(n["n"])("h1",a,Object(n["Z"])(i.title),1)]})),_:1}),Object(n["r"])(j,{class:"container"},{default:Object(n["lb"])((function(){return[Object(n["n"])("img",{src:i.imgurl,class:"image"},null,8,o),Object(n["n"])("div",{class:"content",innerHTML:i.content},null,8,l)]})),_:1})]})),_:1})}Object(n["N"])();c("6afb"),c("1842");var r=c("6c02"),b=(c("bc3a"),{setup:function(){var t=Object(r["d"])(),e=Object(r["e"])();console.log(t.params.id),console.log(t.params.content);t.params.id;var c=t.params.content,n=t.params.imgurl,a=t.params.title;function o(){e.push({path:"/food"})}return console.log(t.params.imgurl),Location.href="#anchor",{imgurl:n,content:c,title:a,goBack:o}}});c("229f");b.render=i,b.__scopeId="data-v-3857f533";e["default"]=b},"6afb":function(t,e,c){"use strict";var n=c("7a23");Object(n["P"])("data-v-4d8dd228");var a={class:"container1"},o=["onClick"],l={class:"showImage"},i=["src"],r={class:"showMessage"},b={class:"title"},s=Object(n["q"])("| "),u=Object(n["q"])("|"),j=Object(n["q"])("|"),O={class:"info"},d={style:{"margin-top":"2vh","font-size":"16px"}},f={class:"data"},p=Object(n["n"])("i",{class:"el-icon-star-on"},null,-1),m=Object(n["n"])("i",{style:{"margin-left":"10px"},class:"el-icon-view"},null,-1);function v(t,e,c,v,g,h){return Object(n["M"])(),Object(n["m"])("div",a,[(Object(n["M"])(!0),Object(n["m"])(n["b"],null,Object(n["T"])(t.infoData,(function(t){return Object(n["M"])(),Object(n["m"])("div",{onClick:function(e){return v.textLink(t._id)},class:"content",id:"1",key:t._id},[Object(n["n"])("div",l,[Object(n["n"])("img",{src:t.img_url,alt:""},null,8,i)]),Object(n["n"])("div",r,[Object(n["n"])("div",b,[Object(n["n"])("span",null,Object(n["Z"])(t.autho),1),s,Object(n["n"])("span",null,Object(n["Z"])(t.createdAt),1),u,Object(n["n"])("span",null,Object(n["Z"])(t.c_type),1),j,Object(n["n"])("span",null,"图表类型："+Object(n["Z"])(t.pic_type),1)]),Object(n["n"])("div",O,[Object(n["n"])("h3",null,Object(n["Z"])(t.title),1),Object(n["n"])("p",d,Object(n["Z"])(t.content),1)]),Object(n["n"])("div",f,[p,Object(n["q"])(Object(n["Z"])(t.collect)+" ",1),m,Object(n["q"])(Object(n["Z"])(t.getNum),1)])])],8,o)})),128))])}Object(n["N"])();var g=c("5530"),h=(c("fb6a"),c("1842")),k=c("6c02"),_={data:function(){return{}},setup:function(){var t=Object(k["e"])(),e=Object(n["Q"])({infoData:{}});function c(e){t.push({path:"./".concat(e)})}return Object(n["J"])((function(){Object(h["b"])().then((function(t){e.infoData=t.result.slice(0,2)}))})),Object(k["c"])((function(t,e){console.log(t.path),console.log(e.path)})),Object(g["a"])({textLink:c},Object(n["db"])(e))},methods:{}};c("ae0c");_.render=v,_.__scopeId="data-v-4d8dd228";e["a"]=_},9657:function(t,e,c){},ae0c:function(t,e,c){"use strict";c("9657")},af41:function(t,e,c){}}]);
//# sourceMappingURL=chunk-6cb4bc31.3e930da8.js.map