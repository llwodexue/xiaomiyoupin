(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db8aaeb8"],{"1afb":function(t,a,e){},"486e":function(t,a,e){"use strict";e("1afb")},a28e:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("van-sidebar",{staticClass:"van-sidebar",on:{change:t.onChange},model:{value:t.activeKey,callback:function(a){t.activeKey=a},expression:"activeKey"}},t._l(t.categoryList,(function(t,a){return e("van-sidebar-item",{key:a,attrs:{title:t.name}})})),1),e("div",{staticClass:"right"},[e("img",{staticClass:"banner",attrs:{src:t.categoryDetail.banner}}),t._l(t.categoryDetail.children,(function(a,i){return e("div",{key:i,staticClass:"productList"},[e("div",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"productBox"},t._l(a.children,(function(a,i){return e("div",{key:i,staticClass:"item"},[e("img",{attrs:{src:a.smallImgCard.img}}),e("span",{staticClass:"text van-ellipsis"},[t._v(t._s(a.smallImgCard.name))])])})),0)])}))],2)],1)},s=[],n={name:"Category",data:function(){return{categoryList:[],activeKey:0,categoryDetail:[]}},methods:{onChange:function(t){var a=this.categoryList[t].id;this.Detail(a)},Detail:function(t){var a=this;this.$axios.getCategoryDetail(t).then((function(t){a.categoryDetail=t}))}},created:function(){var t=this;this.$axios.getCategoryList().then((function(a){t.categoryList=a;var e=t.categoryList[t.activeKey].id;t.Detail(e)}))}},c=n,r=(e("486e"),e("2877")),l=Object(r["a"])(c,i,s,!1,null,null,null);a["default"]=l.exports}}]);