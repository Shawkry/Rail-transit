(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0ba9a54"],{3089:function(t,a,s){},5580:function(t,a,s){t.exports=s.p+"img/title1.ec71ac5d.png"},"599f":function(t,a,s){},"733b":function(t,a,s){"use strict";s("3089")},a395:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"com-page"},[s("Station")],1)},n=[],e=s("d2d5"),o={name:"StationPage",components:{Station:e["a"]}},r=o,u=s("2877"),c=Object(u["a"])(r,i,n,!1,null,"565275cb",null);a["default"]=c.exports},b83d:function(t,a,s){"use strict";s("599f")},d2d5:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"com-container"},[i("div",{ref:"Station_ref",staticClass:"com-chart"},[i("img",{attrs:{src:s("5580"),alt:"",width:"100%"}}),i("span",{staticClass:"Listtitle"},[t._v("站点列表")]),i("div",{staticClass:"stalist"},[i("el-collapse",{attrs:{accordion:""}},t._l(t.stationNum,(function(a,s){return i("el-collapse-item",{key:s,attrs:{title:a,name:a},nativeOn:{click:function(i){return t.singleSta(a,s)}}},[i("template",{slot:"title"},[i("div",{staticStyle:{"border-radius":"60px",width:"12px",height:"12px","background-color":"#9ca8b8","margin-left":"4%","margin-right":"1%"}}),t._v(" "+t._s(a)+" ")]),i("div",{staticClass:"stationList"},[i("Stationstatus",{ref:"Stationstatus",refInFor:!0})],1)],2)})),1)],1)])])},n=[],e=(s("a9e3"),s("2c4e")),o=s("55d4"),r={data:function(){return{boxStatus:!0,sta:"",num:0}},methods:{singleSta:function(t,a){0==this.num&&(this.sta=t,this.num=1),1==this.boxStatus||this.sta!=t?(this.sta=t,this.boxStatus=!1,this.$router.push({path:"/Home/SingleStation",query:{name:t}}),this.stationstatus(t,a),this.$parent.reload()):(this.sta=t,this.boxStatus=!0,this.$router.push({path:"/Home/MapPage"}))},stationstatus:function(t,a){this.$refs.Stationstatus[a].getdata(),this.$router.push({path:"/Home/SingleStation/StationStatus",query:{name:t}})}},components:{Stationstatus:e["default"],SingleStation:o["default"]},computed:{stationNum:{get:function(){for(var t=new Array(168),a=0;a<169;a++)t[a]="Sta"+Number(a+1);return t}}}},u=r,c=(s("733b"),s("b83d"),s("2877")),l=Object(c["a"])(u,i,n,!1,null,"c7fcefc0",null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-c0ba9a54.dff5ce08.js.map