(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c892ecfa","chunk-6bb56e66"],{1148:function(t,e,n){"use strict";var o=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",a=o(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"159b":function(t,e,n){var o=n("da84"),r=n("fdbc"),a=n("17c2"),c=n("9112");for(var i in r){var u=o[i],f=u&&u.prototype;if(f&&f.forEach!==a)try{c(f,"forEach",a)}catch(l){f.forEach=a}}},"17c2":function(t,e,n){"use strict";var o=n("b727").forEach,r=n("a640"),a=n("ae40"),c=r("forEach"),i=a("forEach");t.exports=c&&i?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),a=n("2d00"),c=r("species");t.exports=function(t){return a>=51||!o((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"238a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("div",{staticClass:"age2",attrs:{id:"com-age2"}}),n("div",{staticClass:"age1",attrs:{id:"com-age1"}})])}],a=(n("99af"),n("4160"),n("d81d"),n("fb6a"),n("b0c0"),n("b680"),n("159b"),n("7746"),{mounted:function(){this.drawChart()},methods:{drawChart:function(){var t=this.$echarts.init(document.getElementById("com-age1")),e=n("7746"),o=e.age,r=["#0090FF","#36CE9E","#FFC005","#FF515A","#8B5CFF","#00CA69"],a=o.map((function(t){return t.age})),c=o.map((function(t){return t.count})),i=function(t,e){var n="",o=/^#[\da-f]{6}$/i;return o.test(t)&&(n="rgba(".concat(parseInt("0x"+t.slice(1,3)),",").concat(parseInt("0x"+t.slice(3,5)),",").concat(parseInt("0x"+t.slice(5,7)),",").concat(e,")")),n},u={color:r,tooltip:{trigger:"axis",formatter:function(t){var e="";return t.forEach((function(t){e+='<div style="color: #666;font-size: 14px;line-height: 24px">\n                     <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'.concat(r[t.componentIndex],';"></span>\n                     ').concat(t.seriesName,".").concat(t.name,'\n                     <span style="color:').concat(r[t.componentIndex],';font-weight:700;font-size: 18px">').concat(t.value,"</span>\n                     人")})),e},extraCssText:"background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;"},grid:{botton:50,width:300,height:175,x:20,x2:10,y2:10,containLabel:!0},dataZoom:[{type:"inside",xAxisIndex:[0],start:0,end:100},{type:"inside",yAxisIndex:[0],filterMode:"empty",start:0,end:100}],xAxis:[{type:"category",boundaryGap:!1,axisLabel:{formatter:"{value}岁",textStyle:{color:"#ffffff"}},axisLine:{lineStyle:{color:"#ffffff"}},data:a}],yAxis:[{type:"value",axisLabel:{textStyle:{color:"#ffffff"}},nameTextStyle:{color:"#ffffff",fontSize:12,lineHeight:60},splitLine:{lineStyle:{type:"dashed",color:"#ffffff"}},axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"age",type:"line",smooth:!0,symbolSize:8,zlevel:5,lineStyle:{normal:{color:r[1],shadowBlur:3,shadowColor:i(r[1],.5),shadowOffsetY:8}},areaStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:i(r[1],.3)},{offset:1,color:i(r[1],.1)}],!1),shadowColor:i(r[1],.1),shadowBlur:10}},data:c}]};t.setOption(u);for(var f=this.$echarts.init(document.getElementById("com-age2")),l=["少年","中年","青年","老年"],s=[280,13336,69218,215],g=(o=[],0);g<l.length;g++)o.push({name:l[g],value:s[g]});var d=["#503EFF","#3E82FF","#8BF39A","#00FCFD"],h={name:{color:"#FFF",fontSize:15,padding:[10,15,0,10],fontWeight:"400",align:"left",fontFamily:"黑体"},value:{color:"#FFF",fontSize:15,padding:[10,10,0,15],fontWeight:"500",align:"right"},percent:{color:"#FFF",align:"right",fontSize:15,fontWeight:"500"},hr:{width:"100%",height:0},cir:{fontSize:26}},p={title:{text:"年龄结构",textStyle:{color:"white",fontSize:20},y:"bottom",x:"center"},tooltip:{trigger:"axis"},grid:{x2:20,y2:40,top:40},series:[{tooltip:{trigger:"item",formatter:function(t){return t.name+"："+t.value+"人<br>占比："+t.percent.toFixed(2)+"%"}},itemStyle:{normal:{borderColor:"#0A1934",borderWidth:3,color:function(t){return d[t.dataIndex]}}},type:"pie",radius:["30%","60%"],center:["50%","50%"],label:{normal:{show:!1,position:"inner",formatter:function(t){return"{percent|"+t.percent.toFixed(0)+"%}"},rich:h}},data:o},{itemStyle:{normal:{borderColor:"#0A1934",borderWidth:3,color:function(t){return d[t.dataIndex]}}},type:"pie",silent:!0,radius:["30%","50%"],center:["50%","50%"],labelLine:{normal:{length:10,length2:0,lineStyle:{color:"transparent"}}},label:{normal:{formatter:function(t){return"{name|"+t.name+t.value+"}\n{hr|————————}"},rich:h,padding:[-10,20,0,25]}},data:o,z:-1},{itemStyle:{normal:{borderColor:"#0A1934",borderWidth:3,color:function(t){return d[t.dataIndex]}}},type:"pie",silent:!0,radius:["30%","50%"],center:["50%","50%"],labelLine:{normal:{length:10,length2:0,lineStyle:{color:"transparent"}}},label:{normal:{formatter:function(t){return"\n{cir|●}\n"},rich:h}},data:o,z:-1}]};f.setOption(p),window.addEventListener("resize",(function(){t.resize(),f.resize()}))}}}),c=a,i=(n("4e36"),n("2877")),u=Object(i["a"])(c,o,r,!1,null,null,null);e["a"]=u.exports},"30af":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-page"},[n("Age")],1)},r=[],a=n("238a"),c={name:"AgePage",components:{Age:a["a"]}},i=c,u=n("2877"),f=Object(u["a"])(i,o,r,!1,null,"1a09497c",null);e["default"]=f.exports},"408a":function(t,e,n){var o=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,n){"use strict";var o=n("23e7"),r=n("17c2");o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4e36":function(t,e,n){"use strict";n("63e4")},"63e4":function(t,e,n){},7746:function(t,e){var n=[{age:"11",count:"3"},{age:"12",count:"7"},{age:"13",count:"11"},{age:"14",count:"22"},{age:"15",count:"35"},{age:"16",count:"47"},{age:"17",count:"155"},{age:"18",count:"453"},{age:"19",count:"1188"},{age:"20",count:"2668"},{age:"21",count:"4001"},{age:"22",count:"4537"},{age:"23",count:"5679"},{age:"24",count:"5471"},{age:"25",count:"5104"},{age:"26",count:"4938"},{age:"27",count:"4053"},{age:"28",count:"3731"},{age:"29",count:"3207"},{age:"30",count:"2913"},{age:"31",count:"2903"},{age:"32",count:"2730"},{age:"33",count:"2429"},{age:"34",count:"2604"},{age:"35",count:"2512"},{age:"36",count:"1769"},{age:"37",count:"1452"},{age:"38",count:"1587"},{age:"39",count:"1765"},{age:"40",count:"1524"},{age:"41",count:"1025"},{age:"42",count:"982"},{age:"43",count:"872"},{age:"44",count:"906"},{age:"45",count:"954"},{age:"46",count:"1087"},{age:"47",count:"1125"},{age:"48",count:"1008"},{age:"49",count:"877"},{age:"50",count:"779"},{age:"51",count:"733"},{age:"52",count:"568"},{age:"53",count:"540"},{age:"54",count:"295"},{age:"55",count:"279"},{age:"56",count:"281"},{age:"57",count:"235"},{age:"58",count:"291"},{age:"59",count:"147"},{age:"60",count:"86"},{age:"61",count:"61"},{age:"62",count:"49"},{age:"63",count:"61"},{age:"64",count:"54"},{age:"65",count:"41"},{age:"66",count:"43"},{age:"67",count:"27"},{age:"68",count:"30"},{age:"69",count:"24"},{age:"70",count:"8"},{age:"71",count:"19"},{age:"72",count:"7"},{age:"73",count:"13"},{age:"74",count:"8"},{age:"75",count:"7"},{age:"76",count:"6"},{age:"77",count:"5"},{age:"78",count:"5"},{age:"79",count:"3"},{age:"81",count:"2"},{age:"82",count:"3"},{age:"84",count:"1"},{age:"86",count:"1"},{age:"87",count:"1"},{age:"88",count:"1"},{age:"91",count:"1"}];t.exports={age:n}},8418:function(t,e,n){"use strict";var o=n("c04e"),r=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var c=o(e);c in t?r.f(t,c,a(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),u=n("50c4"),f=n("8418"),l=n("65f0"),s=n("1dde"),g=n("b622"),d=n("2d00"),h=g("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",b=d>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=s("concat"),x=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},y=!b||!v;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,o,r,a,c=i(this),s=l(c,0),g=0;for(e=-1,o=arguments.length;e<o;e++)if(a=-1===e?c:arguments[e],x(a)){if(r=u(a.length),g+r>p)throw TypeError(m);for(n=0;n<r;n++,g++)n in a&&f(s,g,a[n])}else{if(g>=p)throw TypeError(m);f(s,g++,a)}return s.length=g,s}})},a640:function(t,e,n){"use strict";var o=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var o=n("83ab"),r=n("d039"),a=n("5135"),c=Object.defineProperty,i={},u=function(t){throw t};t.exports=function(t,e){if(a(i,t))return i[t];e||(e={});var n=[][t],f=!!a(e,"ACCESSORS")&&e.ACCESSORS,l=a(e,0)?e[0]:u,s=a(e,1)?e[1]:void 0;return i[t]=!!n&&!r((function(){if(f&&!o)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,l,s)}))}},b0c0:function(t,e,n){var o=n("83ab"),r=n("9bf2").f,a=Function.prototype,c=a.toString,i=/^\s*function ([^ (]*)/,u="name";o&&!(u in a)&&r(a,u,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},b680:function(t,e,n){"use strict";var o=n("23e7"),r=n("a691"),a=n("408a"),c=n("1148"),i=n("d039"),u=1..toFixed,f=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},s=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},g=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){u.call({})}));o({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,n,o,i,u=a(this),g=r(t),d=[0,0,0,0,0,0],h="",p="0",m=function(t,e){var n=-1,o=e;while(++n<6)o+=t*d[n],d[n]=o%1e7,o=f(o/1e7)},b=function(t){var e=6,n=0;while(--e>=0)n+=d[e],d[e]=f(n/t),n=n%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var n=String(d[t]);e=""===e?n:e+c.call("0",7-n.length)+n}return e};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(h="-",u=-u),u>1e-21)if(e=s(u*l(2,69,1))-69,n=e<0?u*l(2,-e,1):u/l(2,e,1),n*=4503599627370496,e=52-e,e>0){m(0,n),o=g;while(o>=7)m(1e7,0),o-=7;m(l(10,o,1),0),o=e-1;while(o>=23)b(1<<23),o-=23;b(1<<o),m(1,1),b(2),p=v()}else m(0,n),m(1<<-e,0),p=v()+c.call("0",g);return g>0?(i=p.length,p=h+(i<=g?"0."+c.call("0",g-i)+p:p.slice(0,i-g)+"."+p.slice(i-g))):p=h+p,p}})},d81d:function(t,e,n){"use strict";var o=n("23e7"),r=n("b727").map,a=n("1dde"),c=n("ae40"),i=a("map"),u=c("map");o({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,n){"use strict";var o=n("23e7"),r=n("861d"),a=n("e8b5"),c=n("23cb"),i=n("50c4"),u=n("fc6a"),f=n("8418"),l=n("b622"),s=n("1dde"),g=n("ae40"),d=s("slice"),h=g("slice",{ACCESSORS:!0,0:0,1:2}),p=l("species"),m=[].slice,b=Math.max;o({target:"Array",proto:!0,forced:!d||!h},{slice:function(t,e){var n,o,l,s=u(this),g=i(s.length),d=c(t,g),h=c(void 0===e?g:e,g);if(a(s)&&(n=s.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(s,d,h);for(o=new(void 0===n?Array:n)(b(h-d,0)),l=0;d<h;d++,l++)d in s&&f(o,l,s[d]);return o.length=l,o}})}}]);
//# sourceMappingURL=chunk-c892ecfa.149d135c.js.map