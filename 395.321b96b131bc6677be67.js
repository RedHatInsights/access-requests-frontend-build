(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[395],{777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(5183).createIcon(t.lb),t.ZP=t.wl},2395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var a=n(9661),r=n.n(a),c=n(7194),l=n(3004),s=n(7154),o=n.n(s),u=n(319),i=n.n(u),m=n(3038),d=n.n(m),p=n(6401),E=n(7733),f=n(2863),h=n(164),g=n(8794),b=n(8755),v=n(777),y=n(983),S=n(3215),T=n(2027);function C(e){return e[0].toLowerCase()+e.substring(1)}var q=["pending","approved","denied","cancelled","expired"],_=function(e){var t=e.isInternal,n=t?["Request ID","Account number","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],a=r().useState(t?4:5),s=d()(a,2),u=s[0],m=s[1],_=r().useState("desc"),k=d()(_,2),I=k[0],P=k[1],w=function(e,t,n){m(t),P(n)},L=r().useState(1),N=d()(L,2),x=N[0],R=N[1],A=r().useState(10),B=d()(A,2),D=B[0],F=B[1],Z=function(e){var t=e.id;return r().createElement(l.Pagination,{itemCount:de,perPage:D,page:x,onSetPage:function(e,t){return R(t)},id:"access-requests-table-pagination-"+t,variant:t,onPerPageSelect:function(e,t){return F(t)}})},O=r().useState(!1),z=d()(O,2),G=z[0],j=z[1],H=r().useState(n[t?1:6]),M=d()(H,2),V=M[0],Y=M[1],U=r().useState(!1),W=d()(U,2),J=W[0],K=W[1],Q=r().useState([]),X=d()(Q,2),$=X[0],ee=X[1],te=r().useState(""),ne=d()(te,2),ae=ne[0],re=ne[1],ce=$.length>0||ae,le=r().useState(!0),se=d()(le,2),oe=se[0],ue=se[1],ie=r().useState(0),me=d()(ie,2),de=me[0],pe=me[1],Ee=r().useState([]),fe=d()(Ee,2),he=fe[0],ge=fe[1],be=(0,y.useDispatch)(),ve=function(){ue(!0);var e=new URL("".concat(window.location.origin).concat("/api/rbac/v1","/cross-account-requests/"));t&&e.searchParams.append("query_by","user_id"),e.searchParams.append("offset",(x-1)*D),e.searchParams.append("limit",D),ae&&e.searchParams.append("account",ae),$.length>0&&e.searchParams.append("status",$.join(","));var a="".concat("desc"===I?"-":"").concat(n[u].toLowerCase().replace(" ","_"));e.searchParams.append("order_by",a),fetch(e.href).then((function(e){return e.json()})).then((function(e){pe(e.meta.count),ge(e.data.map((function(e){return t?[e.request_id,e.target_account,e.start_date,e.end_date,e.created,e.status]:[e.request_id,e.first_name,e.last_name,e.start_date,e.end_date,e.created,e.status]}))),ue(!1)})).catch((function(e){ue(!1),be((0,S.wN)({variant:"danger",title:"Could not list access requests",description:e.message}))}))};r().useEffect((function(){ve()}),[ae,$,u,I,D,x]);var ye=r().useState({type:null}),Se=d()(ye,2),Te=Se[0],Ce=Se[1],qe=function(e){Ce({type:null}),e&&ve()},_e=r().createElement(r().Fragment,null,"cancel"===Te.type&&r().createElement(E.Z,{requestId:Te.requestId,onClose:qe}),["edit","create"].includes(Te.type)&&r().createElement(f.Z,{variant:Te.type,requestId:Te.requestId,onClose:qe})),ke=t&&r().createElement(l.Button,{variant:"primary",onClick:function(){return Ce({type:"create"})}},"Create request");if(0===he.length&&!oe&&!ce)return r().createElement(l.Bullseye,{style:{height:"auto"},className:"pf-u-mt-lg"},r().createElement(l.EmptyState,{variant:"large"},r().createElement(l.EmptyStateIcon,{icon:v.ZP}),r().createElement(l.Title,{headingLevel:"h3",size:"lg"},t?"No access requests":"You have no access requests"),r().createElement(l.EmptyStateBody,null,t?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),ke),_e);var Ie="filter-status",Pe="Filter by ".concat(C(n[n.length-1])),we=function(e){var t=e.colName,n=e.value,a=e.setValue,c=r().useState(n),s=d()(c,2),o=s[0],u=s[1];return r().createElement("form",{style:{display:"flex"},onSubmit:function(e){e.preventDefault(),a(o)}},r().createElement(l.TextInput,{name:"".concat(t,"-filter"),id:"".concat(t,"-filter"),type:"search",placeholder:"Filter by ".concat(C(t)),"aria-label":"".concat(t," search input"),value:o,onChange:function(e){return u(e)}}),r().createElement(l.Button,{variant:"control",type:"submit","aria-label":"Search button for ".concat(t," filter")},r().createElement(g.ZP,null)))},Le=r().createElement(l.Button,{variant:"link",onClick:function(){ee([]),re("")}},"Clear filters"),Ne=r().createElement(l.Toolbar,{id:"access-requests-table-toolbar"},r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,r().createElement(l.InputGroup,null,r().createElement(l.Dropdown,{isOpen:G,onSelect:function(e){j(!1),Y(e.target.value),K(!1)},toggle:r().createElement(l.DropdownToggle,{onToggle:function(e){return j(e)}},r().createElement(b.ZP,null)," ",V),dropdownItems:(t?[1,5]:[6]).map((function(e){return n[e]})).map((function(e){return r().createElement(l.DropdownItem,{key:e,value:e,component:"button"},(0,h.kC)(e))}))}),["Status","Decision"].includes(V)&&r().createElement(r().Fragment,null,r().createElement("span",{id:Ie,hidden:!0},Pe),r().createElement(l.Select,{"aria-labelledby":Ie,variant:"checkbox","aria-label":"Select statuses",onToggle:function(e){return K(e)},onSelect:function(e,t){$.includes(t)?ee($.filter((function(e){return e!==t}))):ee([].concat(i()($),[t]))},isOpen:J,selections:Array.from($),isCheckboxSelectionBadgeHidden:!0,placeholderText:Pe},q.map((function(e){return r().createElement(l.SelectOption,{key:e,value:e},(0,h.kC)(e))})))),"Account number"===V&&r().createElement(we,{colName:V,value:ae,setValue:re}))),r().createElement(l.ToolbarItem,null,ke),r().createElement(l.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},r().createElement(Z,{id:"top"}))),r().createElement(l.ToolbarContent,null,r().createElement(l.ChipGroup,{categoryName:"Status"},$.map((function(e){return r().createElement(l.Chip,{key:e,onClick:function(){return ee($.filter((function(t){return t!==e})))}},e)}))),ae&&r().createElement(l.ChipGroup,{categoryName:"Account number"},r().createElement(l.Chip,{onClick:function(){return re("")}},ae)),ce&&Le));function xe(e){return t?0===e?30:15:[0,6].includes(e)?20:10}var Re=(0,c.useRouteMatch)().url,Ae=r().createElement(p.TableComposable,{"aria-label":"Access requests table",variant:"compact"},r().createElement(p.Thead,null,r().createElement(p.Tr,null,n.map((function(e,t){return r().createElement(p.Th,o()({key:t},!e.includes("name")&&{sort:{sortBy:{index:u,direction:I},onSort:w,columnIndex:t}},{width:xe(t)}),e)})),t&&r().createElement(p.Th,null))),r().createElement(p.Tbody,null,oe?i()(Array(he.length||D).keys()).map((function(e){return r().createElement(p.Tr,{key:e},n.map((function(e,t){return r().createElement(p.Td,{key:t,dataLabel:e},r().createElement("div",{style:{height:"30px"},class:"ins-c-skeleton ins-c-skeleton__md"}," "))})))})):he.map((function(e,a){return r().createElement(p.Tr,{key:a},r().createElement(p.Td,{dataLabel:n[0]},r().createElement(c.Link,{to:"".concat(Re).concat(Re.endsWith("/")?"":"/").concat(e[0])},e[0])),r().createElement(p.Td,{dataLabel:n[1]},e[1]),r().createElement(p.Td,{dataLabel:n[2]},e[2]),r().createElement(p.Td,{dataLabel:n[3]},e[3]),r().createElement(p.Td,{dataLabel:n[4]},e[4]),t?r().createElement(p.Td,{dataLabel:n[5]},r().createElement(T.p,{requestId:e[0],status:e[5],onLabelClick:function(){return ee([].concat(i()($.filter((function(e){return e!==status}))),[status]))},hideActions:!0})):r().createElement(p.Td,{dataLabel:n[5]},e[5]),t?r().createElement(p.Td,{actions:(0,T.m)(e[5],e[0],Ce)}):r().createElement(p.Td,{dataLabel:n[6]},r().createElement(T.p,{requestId:e[0],status:e[6]})))})),0===he.length&&ce&&r().createElement(p.Tr,null,r().createElement(p.Td,{colSpan:n.length},r().createElement(l.EmptyState,{variant:"small"},r().createElement(l.EmptyStateIcon,{icon:g.ZP}),r().createElement(l.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),r().createElement(l.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),Le)))));return r().createElement(r().Fragment,null,Ne,Ae,r().createElement(Z,{id:"bottom"}),_e)};_.displayName="AccessRequestsTable";const k=_,I=(0,c.withRouter)((function(e){var t=e.isInternal;return r().createElement(r().Fragment,null,r().createElement(l.PageSection,{variant:"light"},r().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-sm"},"Access Requests"),r().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),r().createElement(l.PageSection,{padding:{default:"noPadding"}},r().createElement(k,{isInternal:t})))}))}}]);
//# sourceMappingURL=395.321b96b131bc6677be67.js.map