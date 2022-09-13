"use strict";(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[180],{20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},42395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(92950),r=n.n(a),c=n(28216),l=n(56976),o=n(87462),s=n(93433),u=n(29439),i=n(98975),m=n(17733),d=n(479),p=n(80164),E=n(48794),f=n(8755),h=n(20777),g=n(83215),b=n(334),v=n(42027),y=n(45697),S=n.n(y),T=n(24874);function C(e){return e[0].toLowerCase()+e.substring(1)}var _=["pending","approved","denied","cancelled","expired"],Z=function(e){var t=e.isInternal,n=t?["Request ID","Account number","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],a=r().useState(t?4:5),y=(0,u.Z)(a,2),Z=y[0],q=y[1],k=r().useState("desc"),I=(0,u.Z)(k,2),P=I[0],w=I[1],L=function(e,t,n){q(t),w(n)},x=r().useState(1),A=(0,u.Z)(x,2),D=A[0],N=A[1],B=r().useState(20),R=(0,u.Z)(B,2),F=R[0],O=R[1],z=function(e){var t=e.id;return r().createElement(l.Pagination,{itemCount:Ce,perPage:F,page:D,onSetPage:function(e,t){return N(t)},id:"access-requests-table-pagination-"+t,variant:t,perPageOptions:[5,10,20,50].map((function(e){return{title:e,value:e}})),onPerPageSelect:function(e,t){N(1),O(t)},isCompact:"top"===t})};z.propTypes={id:S().string};var G,j,H,M,Y,U=r().useState(!1),V=(0,u.Z)(U,2),W=V[0],J=V[1],K=r().useState(n[t?1:6]),Q=(0,u.Z)(K,2),X=Q[0],$=Q[1],ee=r().useState(!1),te=(0,u.Z)(ee,2),ne=te[0],ae=te[1],re=r().useState([]),ce=(0,u.Z)(re,2),le=ce[0],oe=ce[1],se=r().useState(""),ue=(0,u.Z)(se,2),ie=ue[0],me=ue[1],de=r().useState(!1),pe=(0,u.Z)(de,2),Ee=pe[0],fe=pe[1],he=le.length>0||ie,ge=r().useState(!0),be=(0,u.Z)(ge,2),ve=be[0],ye=be[1],Se=r().useState(0),Te=(0,u.Z)(Se,2),Ce=Te[0],_e=Te[1],Ze=r().useState([]),qe=(0,u.Z)(Ze,2),ke=qe[0],Ie=qe[1],Pe=(0,c.I0)(),we=function(){ye(!0);var e=new URL("".concat(window.location.origin).concat("/api/rbac/v1","/cross-account-requests/"));t?e.searchParams.append("query_by","user_id"):e.searchParams.append("query_by","target_org"),e.searchParams.append("offset",(D-1)*F),e.searchParams.append("limit",F),ie&&e.searchParams.append("account",ie),le.length>0&&e.searchParams.append("status",le.join(","));var a="".concat("desc"===P?"-":"").concat(n[Z].toLowerCase().replace(" ","_"));e.searchParams.append("order_by",a),T.Z.get(e.href,{headers:{Accept:"application/json"}}).then((function(e){_e(e.meta.count),Ie(e.data.map((function(e){return t?[e.request_id,e.target_account,e.start_date,e.end_date,e.created,e.status]:[e.request_id,e.first_name,e.last_name,e.start_date,e.end_date,e.created,e.status]}))),ye(!1)})).catch((function(e){ye(!1),Pe((0,g.wN)({variant:"danger",title:"Could not list access requests",description:e.message}))}))},Le=(G=ie,400,j=r().useState(G),M=(H=(0,u.Z)(j,2))[0],Y=H[1],r().useEffect((function(){var e=setTimeout((function(){Y(G)}),400);return function(){clearTimeout(e)}}),[G]),M);r().useEffect((function(){we()}),[Le,le,Z,P,F,D]);var xe=r().useState({type:null}),Ae=(0,u.Z)(xe,2),De=Ae[0],Ne=Ae[1],Be=function(e){Ne({type:null}),e&&we()},Re=r().createElement(r().Fragment,null,"cancel"===De.type&&r().createElement(m.Z,{requestId:De.requestId,onClose:Be}),["edit","create"].includes(De.type)&&r().createElement(d.Z,{variant:De.type,requestId:De.requestId,onClose:Be})),Fe=t&&r().createElement(l.Button,{variant:"primary",onClick:function(){return Ne({type:"create"})}},"Create request");if(0===ke.length&&!ve&&!Ee)return r().createElement(l.Bullseye,{style:{height:"auto"},className:"pf-u-mt-lg"},r().createElement(l.EmptyState,{variant:"large"},r().createElement(l.EmptyStateIcon,{icon:h.ZP}),r().createElement(l.Title,{headingLevel:"h3",size:"lg"},t?"No access requests":"You have no access requests"),r().createElement(l.EmptyStateBody,null,t?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),Fe),Re);var Oe="filter-status",ze="Filter by ".concat(C(n[n.length-1])),Ge=r().createElement(l.Button,{variant:"link",onClick:function(){oe([]),me(""),N(1)}},"Clear filters"),je=r().createElement(l.Toolbar,{id:"access-requests-table-toolbar"},r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,r().createElement(l.InputGroup,null,r().createElement(l.Dropdown,{isOpen:W,onSelect:function(e){J(!1),$(e.target.value),ae(!1),fe(!0)},toggle:r().createElement(l.DropdownToggle,{onToggle:function(e){return J(e)}},r().createElement(f.ZP,null)," ",X),dropdownItems:(t?[1,5]:[6]).map((function(e){return n[e]})).map((function(e){return r().createElement(l.DropdownItem,{key:e,value:e,component:"button"},(0,p.kC)(e))}))}),["Status","Decision"].includes(X)&&r().createElement(r().Fragment,null,r().createElement("span",{id:Oe,hidden:!0},ze),r().createElement(l.Select,{"aria-labelledby":Oe,variant:"checkbox","aria-label":"Select statuses",onToggle:function(e){return ae(e)},onSelect:function(e,t){fe(!0),le.includes(t)?oe(le.filter((function(e){return e!==t}))):oe([].concat((0,s.Z)(le),[t])),N(1)},isOpen:ne,selections:Array.from(le),isCheckboxSelectionBadgeHidden:!0,placeholderText:ze},_.map((function(e){return r().createElement(l.SelectOption,{key:e,value:e},(0,p.kC)(e))})))),"Account number"===X&&r().createElement("form",{style:{display:"flex"},onSubmit:function(e){return e.preventDefault()}},r().createElement(l.TextInput,{name:"".concat(X,"-filter"),id:"".concat(X,"-filter"),type:"search",iconVariant:"search",placeholder:"Filter by ".concat(C(X)),"aria-label":"".concat(X," search input"),value:ie,onChange:function(e){me(e),fe(!0),N(1)}})))),r().createElement(l.ToolbarItem,null,Fe),r().createElement(l.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},r().createElement(z,{id:"top"}))),r().createElement(l.ToolbarContent,null,r().createElement(l.ChipGroup,{categoryName:"Status"},le.map((function(e){return r().createElement(l.Chip,{key:e,onClick:function(){oe(le.filter((function(t){return t!==e}))),N(1)}},e)}))),ie&&r().createElement(l.ChipGroup,{categoryName:"Account number"},r().createElement(l.Chip,{onClick:function(){me(""),N(1)}},ie)),he&&Ge));function He(e){return t?0===e?30:15:[0,6].includes(e)?20:10}var Me=(0,b.useRouteMatch)().url,Ye=r().createElement(i.TableComposable,{"aria-label":"Access requests table",variant:"compact"},r().createElement(i.Thead,null,r().createElement(i.Tr,null,n.map((function(e,t){return r().createElement(i.Th,(0,o.Z)({key:t},!e.includes("name")&&"Decision"!==e&&{sort:{sortBy:{index:Z,direction:P},onSort:L,columnIndex:t}},{width:He(t)}),e)})),t&&r().createElement(i.Th,null))),r().createElement(i.Tbody,null,ve?(0,s.Z)(Array(ke.length||F).keys()).map((function(e){return r().createElement(i.Tr,{key:e},n.map((function(e,t){return r().createElement(i.Td,{key:t,dataLabel:e},r().createElement("div",{style:{height:"30px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))})))})):ke.map((function(e,a){return r().createElement(i.Tr,{key:a},r().createElement(i.Td,{dataLabel:n[0]},r().createElement(b.Link,{to:"".concat(Me).concat(Me.endsWith("/")?"":"/").concat(e[0])},e[0])),r().createElement(i.Td,{dataLabel:n[1]},e[1]),r().createElement(i.Td,{dataLabel:n[2]},e[2]),r().createElement(i.Td,{dataLabel:n[3]},e[3]),r().createElement(i.Td,{dataLabel:n[4]},e[4]),t?r().createElement(i.Td,{dataLabel:n[5]},r().createElement(v.p,{requestId:e[0],status:e[5],onLabelClick:function(){oe([].concat((0,s.Z)(le.filter((function(e){return e!==status}))),[status])),N(1)},hideActions:!0})):r().createElement(i.Td,{dataLabel:n[5]},e[5]),t?r().createElement(i.Td,{actions:(0,v.m)(e[5],e[0],Ne)}):r().createElement(i.Td,{dataLabel:n[6]},r().createElement(v.p,{requestId:e[0],status:e[6]})))})),0===ke.length&&he?r().createElement(i.Tr,null,r().createElement(i.Td,{colSpan:n.length},r().createElement("div",null,r().createElement(l.EmptyState,{variant:"small"},r().createElement(l.EmptyStateIcon,{icon:E.ZP}),r().createElement(l.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),r().createElement(l.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),Ge)))):null));return r().createElement(r().Fragment,null,je,Ye,r().createElement(z,{id:"bottom"}),Re)};Z.propTypes={isInternal:S().bool};const q=Z;var k=n(1140),I=n(22081),P=function(e){var t=e.isInternal;return r().createElement(c.zt,{store:k.Z.getStore()},r().createElement(I.Z,null,r().createElement(l.PageSection,{variant:"light"},r().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-sm"},"Access Requests"),r().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),r().createElement(l.PageSection,{padding:{default:"noPadding"}},r().createElement(q,{isInternal:t}))))};P.propTypes={isInternal:S().bool};const w=P}}]);
//# sourceMappingURL=../sourcemaps/180.3a5d9938e9030884920a3ebc4bb60445.js.map