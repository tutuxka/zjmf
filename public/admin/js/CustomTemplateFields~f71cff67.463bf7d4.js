(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CustomTemplateFields~f71cff67"],{"0f2a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news"},[a("h2",[t._v(t._s(t.$lang.official_website_custom_field))]),a("div",{staticClass:"oauth_msg pl-10"},[t._v(" "+t._s(t.$lang.official_website_custom_field_hint)+" ")]),a("el-button",{attrs:{size:"small",type:"success"},on:{click:t.toAdd}},[t._v(t._s(t.$lang.add_fields))]),a("el-table",{staticClass:"mt-10",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" "+t._s(t.$lang.loading)+" ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v(t._s(t.$lang.no_data))])]),a("el-table-column",{attrs:{prop:"fieldname",label:t.$lang.fields_name},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(a.fieldname)+" ")]}}])}),a("el-table-column",{attrs:{prop:"value",label:t.$lang.fields_content},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(a.value)+" ")]}}])}),a("el-table-column",{attrs:{prop:"hidden",label:t.$lang.management,width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"span-primary",attrs:{size:"small",type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.toEdit(e.row)}}},[t._v(t._s(t.$lang.edit)+" ")]),a("el-button",{staticClass:"span-danger",attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.delNews(e.row)}}},[t._v(t._s(t.$lang.delete)+" ")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,15,20,25,50,100],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},i=[],s=(a("a9e3"),a("96cf"),a("1da1")),l=a("113a"),r={metaInfo:{title:window.zjmf_cw_lang.official_website_custom_field},data:function(){return{tableLoading:!1,tableData:[],hiddenSwitch:void 0,total:0,limit:Number(localStorage.getItem("limit"))||50,currentPage:1}},methods:{getData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(l["c"])({page:t.currentPage,limit:t.limit});case 3:a=e.sent,n=a.data,200!==n.status?t.$message.error(n.msg):(t.tableData=n.data.list,t.total=n.data.count),t.tableLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.limit=t,this.getData()},handleCurrentChange:function(t){this.currentPage=t,this.getData()},toAdd:function(){this.$router.push({name:"addCustomTemplateFields"})},toEdit:function(t){this.$router.push({name:"addCustomTemplateFields",query:{id:t.id}})},delNews:function(t){var e=this;this.$confirm(this.$lang.delete_fields_confirm,this.$lang.hint,{confirmButtonText:this.$lang.confirm,cancelButtonText:this.$lang.cancel,type:"warning"}).then((function(){Object(l["b"])({id:t.id}).then((function(t){200!==t.data.status?e.$message.error(t.data.msg):(e.$message.success(t.data.msg),e.getData())}))})).catch((function(){}))}},created:function(){this.getData()}},o=r,c=(a("3538"),a("2877")),u=Object(c["a"])(o,n,i,!1,null,"12c53f03",null);e["default"]=u.exports},"113a":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return o}));var n=a("a27e");function i(t){return Object(n["a"])({url:"news/addCustomParam",method:"get",params:t})}function s(t){return Object(n["a"])({url:"news/getCustomParam",method:"get",params:t})}function l(t){return Object(n["a"])({url:"news/getCustomUpdateVal",method:"get",params:t})}function r(t){return Object(n["a"])({url:"news/updateCustomParam",method:"get",params:t})}function o(t){return Object(n["a"])({url:"news/delCustomParam",method:"get",params:t})}},3538:function(t,e,a){"use strict";var n=a("8115"),i=a.n(n);i.a},8115:function(t,e,a){}}]);