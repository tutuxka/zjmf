(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CustomerProductList~31ecd969"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"3c38":function(e,t,n){},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),c=n("ae40"),s=i("filter"),o=c("filter");r({target:"Array",proto:!0,forced:!s||!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"6cc4":function(e,t,n){"use strict";var r=n("3c38"),a=n.n(r);a.a},"6e81":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return f}));var r=n("a27e");function a(e,t){return Object(r["a"])({url:"clients_services",params:{uid:e,hostselect:t}})}function i(e){return Object(r["a"])({url:"clients_services/info",method:"post",data:e})}function c(e){return Object(r["a"])({url:"clients_services/transfer",method:"post",data:e})}function s(e){return Object(r["a"])({url:"clients_services/host",method:"delete",params:{hostid:e}})}function o(e){return Object(r["a"])({url:"clients_services/host_renew",params:e})}function u(e){return Object(r["a"])({url:"clients_services/upgrade_config",method:"post",data:e})}function l(e){return Object(r["a"])({url:"clients_services/host",method:"delete",params:e})}function d(e){return Object(r["a"])({url:"adminGetLinkAgeList",params:e})}function f(e){return Object(r["a"])({url:"provision/default",method:"post",data:e})}},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),c=n("129f"),s=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),o=String(this),u=i.lastIndex;c(u,0)||(i.lastIndex=0);var l=s(i,o);return c(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},bc20:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("el-table",{staticClass:"mb-10",staticStyle:{width:"100%"},attrs:{data:e.hosts,border:""},on:{"sort-change":e.sortChange,"selection-change":e.selectionChange}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!e.hosts.length&&e.tableLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),e._v(" "+e._s(e.$lang.load_data)+" ")]):e._e(),e.hosts.length||e.tableLoading?e._e():n("span",[e._v(e._s(e.$lang.no_data))])]),n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"hid",label:"ID",width:"80",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("router-link",{attrs:{to:{name:"productInnerpage",query:{id:e.id,hid:r.hid}}}},[n("el-link",{on:{click:function(t){return e.goToProduct(r.hid)}}},[e._v(e._s(r.hid))])],1)]}}])}),n("el-table-column",{attrs:{prop:"hostname",label:e.$lang.product_service},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("router-link",{attrs:{to:{name:"productInnerpage",query:{id:e.id,hid:r.hid}}}},[n("el-link",{style:{color:r.status_color},on:{click:function(t){return e.goToProduct(r.hid)}}},[e._v(e._s(r.name))])],1),n("div",{staticClass:"second-row"},[e._v(e._s(r.domain))])]}}])}),n("el-table-column",{attrs:{prop:"dedicatedip",label:"IP",sortable:"",width:"120"}}),n("el-table-column",{attrs:{prop:"amount",label:e.$lang.sum,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return["免费"===r.billingcycle?n("span",[e._v(e._s(e.$lang.free_charge))]):"一次性"===r.billingcycle?n("span",[e._v(e._s(r.amount+"/"+r.billingcycle))]):n("span",[e._v(e._s(r.amount))])]}}])}),n("el-table-column",{attrs:{prop:"host_type",label:e.$lang.product_type}}),n("el-table-column",{attrs:{prop:"billingcycle",label:e.$lang.payment_period,width:"110",sortable:""}}),n("el-table-column",{attrs:{prop:"regdate",label:e.$lang.order_time,width:"145",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.regdate?e.$moment(1e3*n.regdate).format("YYYY-MM-DD HH:mm:ss"):"-")+" ")]}}])}),n("el-table-column",{attrs:{prop:"nextduedate",label:e.$lang.expire_date,width:"145",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.nextduedate?e.$moment(1e3*n.nextduedate).format("YYYY-MM-DD HH:mm:ss"):"-")+" ")]}}])}),n("el-table-column",{attrs:{prop:"domainstatus",label:e.$lang.state,width:"100",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-tag",{style:{"background-color":r.status_color,color:"#ffff","border-color":r.status_color},attrs:{size:"small",type:"info"}},[e._v(" "+e._s(r.domainstatus))])]}}])}),n("el-table-column",{attrs:{label:e.$lang.operation,width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{staticClass:"span-primary",attrs:{size:"small",type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.goToProduct(r.hid)}}},[e._v(e._s(e.$lang.edit)+" ")])]}}])})],1),n("div",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.renewHandleClick}},[e._v(e._s(e.$lang.renew))]),n("el-button",{attrs:{size:"mini",type:"danger",loading:e.delLoading},on:{click:e.delHandleClick}},[e._v(e._s(e.$lang.batch_delete))])],1),n("el-pagination",{staticClass:"mt-10",attrs:{"current-page":e.search.page,"page-sizes":[10,15,20,25,50,100],"page-size":e.search.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.search,"page",t)},"update:current-page":function(t){return e.$set(e.search,"page",t)},"update:pageSize":function(t){return e.$set(e.search,"limit",t)},"update:page-size":function(t){return e.$set(e.search,"limit",t)}}}),n("el-dialog",e._g(e._b({attrs:{visible:e.renewDialogVis,title:e.$lang.renew,width:"800px"},on:{"update:visible":function(t){e.renewDialogVis=t},open:function(t){return e.getRenewData("init")}}},"el-dialog",e.$attrs,!1),e.$listeners),[n("el-table",{staticClass:"mb-10",attrs:{data:e.renewData.hosts,border:"",height:e.renewData.hosts.length>9?"450":""}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!e.renewData.hosts.length&&e.renewLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),e._v(" "+e._s(e.$lang.load_data)+" ")]):e._e(),e.renewData.hosts.length||e.renewLoading?e._e():n("span",[e._v(e._s(e.$lang.no_data))])]),n("el-table-column",{attrs:{prop:"name",label:e.$lang.product_service,sortable:""}}),n("el-table-column",{attrs:{prop:"dedicatedip",label:"IP",sortable:"",width:"110"}}),n("el-table-column",{attrs:{prop:"nextduedate",label:e.$lang.current_expiration_time,width:"145",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.nextduedate?e.$moment(1e3*n.nextduedate).format("YYYY-MM-DD HH:mm"):"-")+" ")]}}])}),n("el-table-column",{attrs:{prop:"nextduedate_renew",label:e.$lang.expiration_time_after_renewal,width:"145",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(" "+e._s(n.nextduedate_renew?e.$moment(1e3*n.nextduedate_renew).format("YYYY-MM-DD HH:mm"):"-")+" ")]}}])}),n("el-table-column",{attrs:{prop:"nextduedate_renew",label:e.$lang.renewal_cycle,width:"110",sortable:"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-select",{attrs:{size:"mini"},on:{change:function(t){return e.renewCycleChange(r)}},model:{value:r.billingcycle,callback:function(t){e.$set(r,"billingcycle",t)},expression:"row.billingcycle"}},e._l(r.allow_billingcycle,(function(e,t){return n("el-option",{key:t+"cycle",attrs:{value:e.billingcycle,label:e.billingcycle_zh}})})),1)]}}])}),n("el-table-column",{attrs:{prop:"amount",label:e.$lang.sum,width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-input-number",{staticStyle:{width:"100%"},attrs:{size:"mini",controls:!1,precision:2},on:{change:e.renewCycleChange},model:{value:r.amount,callback:function(t){e.$set(r,"amount",t)},expression:"row.amount"}})]}}])})],1),n("div",{staticClass:"tar"},[n("span",[e._v(e._s(e.$lang.summation)+"："+e._s(e.renewData.currency.prefix)+e._s(e.renewData.total)+e._s(e.renewData.currency.suffix))])]),n("div",{staticClass:"mt-10"},[n("el-radio-group",{style:{width:"100%"},model:{value:e.renewUseCredit,callback:function(t){e.renewUseCredit=t},expression:"renewUseCredit"}},[e.renewData.credit>0?n("el-radio",{attrs:{label:1}},[e._v(e._s(e.$lang.remain_sum)+e._s(e.renewData.currency.prefix)+e._s(e.renewData.credit)+e._s(e.renewData.currency.suffix)+"，"+e._s(e.$lang.apply_to_bill))]):e._e(),n("el-radio",{attrs:{label:2}},[e._v(e._s(e.$lang.marked_paid_account))]),n("el-radio",{attrs:{label:3}},[e._v(e._s(e.$lang.not_account_bill))])],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.renewDialogVis=!1}}},[e._v(e._s(e.$lang.cancel))]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.renewSubmit}},[e._v(e._s(e.$lang.confirm))])],1)],1)],1)},a=[],i=(n("4de4"),n("4160"),n("d81d"),n("a9e3"),n("ac1f"),n("841c"),n("159b"),n("96cf"),n("1da1")),c=n("f6b0"),s=n("6e81"),o={data:function(){return{tableLoading:!1,id:this.$route.query.id,hosts:[],search:{uid:this.$route.query.id,currency:this.$route.query.currencyId,order:"",sort:"desc",limit:Number(localStorage.getItem("limit"))||50,page:1},total:0,selectedData:[],renewDialogVis:!1,renewData:{currency:{},hosts:[]},renewLoading:!1,renewSearch:{uid:this.$route.query.id,host_ids:[],cycles:[],amount:[]},renewUseCredit:1,delLoading:!1}},methods:{getData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.tableLoading=!0,t.next=3,Object(c["v"])(e.search);case 3:n=t.sent,r=n.data,e.hosts=r.hosts,200!==r.status?e.$message.error(r.msg):(e.hosts=r.hosts,e.total=r.total),e.tableLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},goToProduct:function(e){this.$router.push({name:"productInnerpage",query:{id:this.id,hid:e}})},sortChange:function(e,t,n){this.search.order=e.prop,"ascending"===e.order?this.search.sort="asc":this.search.sort="desc",this.getData()},handleSizeChange:function(e){this.search.page=1,this.getData()},handleCurrentChange:function(e){this.getData()},selectionChange:function(e){this.selectedData=e},renewHandleClick:function(){this.selectedData.length?(this.renewSearch.host_ids=this.selectedData.filter((function(e){return"Active"===e.domainstatus_en||"Suspended"===e.domainstatus_en||"free"===e.domainstatus_en||"onetime"===e.domainstatus_en})).map((function(e){return e.hid})),this.renewDialogVis=!0):this.$message.warning(this.$lang.select_product_renewed)},getRenewData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"init"===e&&(t.renewData.hosts=[]),t.renewData.total=0,t.renewData.credit=0,t.renewLoading=!0,n.next=6,Object(c["A"])(t.$qs.stringify(t.renewSearch));case 6:r=n.sent,a=r.data,t.renewLoading=!1,200!==a.status?t.$message.error(a.msg):(t.renewData=a.data,a.data.credit<=0&&(t.renewUseCredit=2));case 10:case"end":return n.stop()}}),n)})))()},renewCycleChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e&&(e.allow_billingcycle||[]).forEach((function(t){e.billingcycle===t.billingcycle&&(e.amount=t.amount)})),t.renewSearch.cycles=[],t.renewSearch.amount=[],(t.renewData.hosts||[]).forEach((function(e){t.renewSearch.cycles[e.id]=e.billingcycle,t.renewSearch.amount[e.id]=e.amount})),t.getRenewData();case 5:case"end":return n.stop()}}),n)})))()},renewSubmit:function(){var e=this;1===this.renewUseCredit&&parseFloat(this.renewData.credit)<parseFloat(this.renewData.total)?this.$confirm(this.$lang.balance_less_than_total_amount,this.$lang.hint,{confirmButtonText:this.$lang.confirm,cancelButtonText:this.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.createBill();case 1:case"end":return t.stop()}}),t)})))).catch((function(){})):this.createBill()},delHandleClick:function(){var e=this;this.$confirm(this.$lang.sure_delete_bulk,this.$lang.hint,{confirmButtonText:this.$lang.confirm,cancelButtonText:this.$lang.cancel,type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.delLoading=!0,t.next=3,Object(s["c"])({hostid:e.selectedData.map((function(e){return e.hid}))});case 3:n=t.sent,r=n.data,e.delLoading=!1,200!==r.status?e.$message.error(r.msg):(e.$message.success(r.msg),e.getData());case 7:case"end":return t.stop()}}),t)})))).catch((function(){}))},createBill:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={uid:e.id,host_ids:[],cycles:[],amount:[]},(e.renewData.hosts||[]).forEach((function(e){n.host_ids.push(e.id),n.cycles[e.id]=e.billingcycle,n.amount[e.id]=e.amount})),t.next=4,Object(c["B"])(e.$qs.stringify(n));case 4:r=t.sent,a=r.data,200!==a.status?e.$message.error(a.msg):(e.getData(),e.$message.success(a.msg),e.renewDialogVis=!1,1===e.renewUseCredit?(e.useCredit(a.data.invoice_id),parseFloat(e.renewData.credit)<parseFloat(e.renewData.total)&&e.markPaid(a.data.invoice_id)):2===e.renewUseCredit&&e.markPaid(a.data.invoice_id));case 7:case"end":return t.stop()}}),t)})))()},useCredit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["e"])({invoiceid:e,uid:t.id});case 2:r=n.sent,a=r.data,200!==a.status&&1001!==a.status?t.$message.error(a.msg):t.$message.success(a.msg);case 5:case"end":return n.stop()}}),n)})))()},markPaid:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["x"])({ids:e});case 2:r=n.sent,a=r.data,200!==a.status?t.$message.error(a.msg):t.$message.success(a.msg);case 5:case"end":return n.stop()}}),n)})))()}},created:function(){this.getData()}},u=o,l=(n("6cc4"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"fd7646c6",null);t["default"]=d.exports},f6b0:function(e,t,n){"use strict";n.d(t,"r",(function(){return a})),n.d(t,"t",(function(){return i})),n.d(t,"o",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"s",(function(){return o})),n.d(t,"u",(function(){return u})),n.d(t,"n",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return f})),n.d(t,"k",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return _})),n.d(t,"w",(function(){return b})),n.d(t,"z",(function(){return w})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return y})),n.d(t,"q",(function(){return $})),n.d(t,"C",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"D",(function(){return D})),n.d(t,"v",(function(){return x})),n.d(t,"A",(function(){return k})),n.d(t,"B",(function(){return C})),n.d(t,"e",(function(){return S})),n.d(t,"x",(function(){return R})),n.d(t,"p",(function(){return z})),n.d(t,"j",(function(){return L})),n.d(t,"y",(function(){return Y}));var r=n("a27e");function a(e){return Object(r["a"])({url:"client_list",method:"post",data:e})}function i(e){return Object(r["a"])({url:"summary?client_id=".concat(e)})}function c(){return Object(r["a"])({url:"create_client"})}function s(e){return Object(r["a"])({url:"create_client_post",method:"post",data:e})}function o(e){return Object(r["a"])({url:"profile/".concat(e)})}function u(e,t){return Object(r["a"])({url:"profile/getclients/".concat(e),params:t})}function l(e){return Object(r["a"])({url:"profile_post",method:"post",data:e})}function d(e){return Object(r["a"])({url:"delete_client/".concat(e)})}function f(e){return Object(r["a"])({url:"close_client/".concat(e)})}function h(e){return Object(r["a"])({url:"user_invoice",params:e})}function g(e,t){return Object(r["a"])({url:"close_client/".concat(e),params:t})}function m(e){return Object(r["a"])({url:"client_ticket",params:e})}function p(e){return Object(r["a"])({url:"log_record",params:e})}function _(e){return Object(r["a"])({url:"zjmf_finance_api/logs",params:e})}function b(e){return Object(r["a"])({url:"login_by_user/"+e})}function w(e){return Object(r["a"])({url:"certifi_person_detail/".concat(e)})}function v(e){return Object(r["a"])({url:"add_user_invoice",method:"post",data:e})}function y(e){return Object(r["a"])({url:"add_recharge_invoice/"+e.uid,method:"post",data:e})}function $(e){return Object(r["a"])({url:"get_user",params:e})}function j(e){return Object(r["a"])({url:"request_cancel_list",params:e})}function O(e){return Object(r["a"])({url:"request_cancel_list/".concat(e),method:"delete"})}function D(e){return Object(r["a"])({url:"searchlist",params:{value:e}})}function x(e){return Object(r["a"])({url:"hostbyuid",params:e})}function k(e){return Object(r["a"])({url:"clients_services/host_batch_renew_page",method:"post",data:e})}function C(e){return Object(r["a"])({url:"clients_services/host_batch_renew",method:"post",data:e})}function S(e){return Object(r["a"])({url:"clients_services/apply_credit",method:"post",data:e})}function R(e){return Object(r["a"])({url:"invoice/paid",params:e})}function z(e){return Object(r["a"])({url:"get_combine_invoices",params:e})}function L(e){return Object(r["a"])({url:"combine_invoices",method:"post",data:e})}function Y(e){return Object(r["a"])({url:"post_client_notes",method:"post",data:e})}}}]);