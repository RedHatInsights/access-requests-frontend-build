(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[508],{7733:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(3038),r=n.n(a),l=n(9661),c=n.n(l),o=n(4092),i=n(2167),s=n(3215),u=n(5697),d=n.n(u),m=function(e){var t=e.requestId,n=e.onClose,a=c().useState(!1),l=r()(a,2),u=l[0],d=l[1],m=(0,i.useDispatch)();return c().createElement(o.Modal,{title:"Cancel request?",isOpen:!0,variant:"small",onClose:function(){return n(!1)},actions:[c().createElement(o.Button,{key:"confirm",variant:"danger",onClick:function(){d(!0),fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({status:"cancelled"})}).then((function(e){return e.json()})).then((function(e){if(e.errors&&e.errors.length>0)throw Error(e.errors.map((function(e){return e.detail})).join("\n"));m((0,s.wN)({variant:"success",title:"Request cancelled successfully"})),d(!1),n(!0)})).catch((function(e){m((0,s.wN)({variant:"danger",title:"There was an error cancelling your request",description:e.message})),d(!1),n(!0)}))}},"Yes, cancel"),c().createElement(o.Button,{key:"cancel",variant:"link",onClick:function(){return n(!1)}},"No, keep")]},"Request ",c().createElement("b",null,t)," will be withdrawn.",u&&c().createElement(o.Spinner,{size:"lg"}))};m.propTypes={requestId:d().string,onClose:d().func};const p=m},2863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>q});var a=n(3038),r=n.n(a),l=n(9661),c=n.n(l),o=n(4092),i=n(4046),s=n(4564),u=n(164),d=n(4432),m=n(2167),p=n(3215),f=n(1643),E=n(5697),h=n.n(E),g="Customers will be able to see this information as part of your request",y={"first name":g,"last name":g,"account number":"This is the account number that you would like to receive read access to","access duration":"This is the time frame you would like to be granted read access to accounts"},b="Invalid Account number",v=function(e){return c().createElement(o.Popover,{bodyContent:c().createElement("p",null,y[e])},c().createElement("button",{type:"button","aria-label":"More info for ".concat(e),onClick:function(e){return e.preventDefault()},"aria-describedby":"form-name",className:"pf-c-form__group-label-help"},c().createElement(i.ZP,{noVerticalAlign:!0})))},S=new Date;S.setDate(S.getDate()-1);var T=new Date;T.setDate(T.getDate()+60);var C=function(e){return e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})},k=function(e){var t=e.split("/");if(3!==t.length)return new Date;var n=t[0].padStart(2,"0"),a=t[1].padStart(2,"0"),r=t[2].padStart(4,"0");return new Date("".concat(r,"-").concat(n,"-").concat(a,"T00:00:00"))},w=function(e){var t=e.user,n=void 0===t?{}:t,a=e.targetAccount,l=e.setTargetAccount,i=e.start,s=e.setStart,u=e.end,m=e.setEnd,p=e.disableAccount,f=e.isLoading,E=e.error,h=c().useState(),g=r()(h,2),y=g[0],b=g[1],w=c().useState(E?"error":"default"),x=r()(w,2),_=x[0],I=x[1],q=function(e){if((0,d.qb)(e)){if(e<S)return m(""),"Start date must be today or later";if(e>T)return m(""),"Start date must be within 60 days of today"}return""},A=function(e){if((0,d.qb)(y)&&y>e)return"End date must be after from date";var t=new Date(y);return t.setFullYear(t.getFullYear()+1),e>t?"Access duration may not be longer than one year":""};return c().createElement(o.Form,{onSubmit:function(e){return e.preventDefault()},isDisabled:f},c().createElement(o.Title,{headingLevel:"h2"},"Request details"),c().createElement(o.Split,{hasGutter:!0},c().createElement(o.SplitItem,{isFilled:!0},c().createElement(o.FormGroup,{label:"First name",labelIcon:v("first name")},c().createElement(o.TextInput,{id:"first-name",value:n.first_name,isDisabled:!0}))),c().createElement(o.SplitItem,{isFilled:!0},c().createElement(o.FormGroup,{label:"Last name",labelIcon:v("last name")},c().createElement(o.TextInput,{id:"last-name",value:n.last_name,isDisabled:!0})))),c().createElement(o.FormGroup,{label:"Account number",isRequired:!0,labelIcon:v("account number"),helperText:"Enter the account number you would like access to",helperTextInvalid:"Please enter a valid account number",validated:_},c().createElement(o.TextInput,{id:"account-number",value:a,onChange:function(e){l(e),I("default")},isRequired:!0,placeholder:"Example, 8675309",validated:_,isDisabled:p})),c().createElement(o.FormGroup,{label:"Access duration",isRequired:!0,labelIcon:v("access duration")},c().createElement(o.Split,null,c().createElement(o.SplitItem,null,c().createElement(o.DatePicker,{width:"300px","aria-label":"Start date",value:i,dateFormat:C,dateParse:k,placeholder:"mm/dd/yyyy",onChange:function(e,t){b(new Date(t)),s(e),(0,d.qb)(t)&&!q(t)?(t.setDate(t.getDate()+7),m(C(t))):m("")},validators:[q]})),c().createElement(o.SplitItem,{style:{padding:"6px 12px 0 12px"}},"to"),c().createElement(o.SplitItem,null,c().createElement(o.DatePicker,{width:"300px","aria-label":"End date",value:u,dateFormat:C,dateParse:k,placeholder:"mm/dd/yyyy",onChange:function(e,t){A(t)?m(""):m(e)},validators:[A],rangeStart:i})))))};w.propTypes={user:h().any,targetAccount:h().any,setTargetAccount:h().any,start:h().any,setStart:h().any,end:h().any,setEnd:h().any,disableAccount:h().any,isLoading:h().any,error:h().any};var x={paddingBottom:"16px"},_=function(e){var t=e.targetAccount,n=e.start,a=e.end,r=e.roles,l=e.isLoading,i=e.error,u=e.onClose,d=null;if(l)d=c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:function(){return c().createElement(o.Spinner,{size:"lg"})}}),c().createElement(o.Title,{headingLevel:"h2",size:"lg"},"Submitting access request"),c().createElement(o.Button,{variant:"link",onClick:u},"Close"));else if(i){var m=c().useContext(o.WizardContextConsumer);d=c().createElement(o.EmptyState,null,c().createElement(o.EmptyStateIcon,{icon:s.ZP,color:"#C9190B"}),c().createElement(o.Title,{headingLevel:"h2",size:"lg"},i.title),c().createElement(o.EmptyStateBody,null,i.description),i.title===b&&c().createElement(o.Button,{variant:"primary",onClick:function(){return m.goToStepById(1)}},"Return to Step 1"))}else d=c().createElement(c().Fragment,null,c().createElement(o.Title,{headingLevel:"h2",style:x},"Review details"),c().createElement("table",null,c().createElement("tr",null,c().createElement("td",{style:x},c().createElement("b",null,"Account number")),c().createElement("td",{style:x},t)),c().createElement("tr",null,c().createElement("td",{style:{paddingRight:"32px"}},c().createElement("b",null,"Access duration")),c().createElement("td",null)),c().createElement("tr",null,c().createElement("td",null,"From"),c().createElement("td",null,n)),c().createElement("tr",null,c().createElement("td",{style:x},"To"),c().createElement("td",{style:x},a)),c().createElement("tr",null,c().createElement("td",null,c().createElement("b",null,"Roles")),c().createElement("td",null,r[0])),r.slice(1).map((function(e){return c().createElement("tr",{key:e},c().createElement("td",null),c().createElement("td",null,e))}))));return c().createElement(c().Fragment,null,d)};_.propTypes={targetAccount:h().any,start:h().any,end:h().any,roles:h().any,isLoading:h().any,error:h().any,onClose:h().any};var I=function(e){var t=e.requestId,n=e.variant,a=e.onClose,l="edit"===n,i=c().useState(!0),s=r()(i,2),d=s[0],E=s[1],h=c().useState(),g=r()(h,2),y=g[0],v=g[1],S=c().useState(),T=r()(S,2),C=T[0],k=T[1],x=c().useState(),I=r()(x,2),q=I[0],A=I[1],D=c().useState(),N=r()(D,2),P=N[0],B=N[1],F=c().useState(),L=r()(F,2),R=L[0],j=L[1],Z=c().useState([]),O=r()(Z,2),G=O[0],z=O[1],M=c().useState(!1),J=r()(M,2),H=J[0],Y=J[1],U=(0,m.useDispatch)(),V=q||P||R||G.length>0;c().useEffect((function(){var e=window.insights.chrome.auth.getUser(),n=l?fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{headers:{Accept:"application/json"}}).then((function(e){return e.json()})):new Promise((function(e){return e(!0)}));Promise.all([e,n]).then((function(e){var n=r()(e,2),a=n[0],c=n[1];if(!(a&&a.identity&&a.identity.user))throw Error("Couldn't get current user. Make sure you're logged in");if(k(a.identity.user),l){if(c.errors)throw Error(c.errors.map((function(e){return e.detail})).join("\n"));if(!c||!c.target_account)throw Error("Could not fetch details for request ".concat(t));A(c.target_account),B(c.start_date),j(c.end_date),z(c.roles.map((function(e){return e.display_name})))}E(!1)})).catch((function(e){U((0,p.wN)({variant:"danger",title:"Could not load access request",description:e.message}))}))}),[]);var W=[q,P,R].every(Boolean),Q=G.length>0,K=[{id:1,name:"Request details",component:c().createElement(w,{user:C,targetAccount:q,setTargetAccount:A,start:P,setStart:B,end:R,setEnd:j,disableAccount:l,isLoading:d,error:y}),enableNext:W},{id:2,name:"Select roles",component:c().createElement(f.Z,{roles:G,setRoles:z}),enableNext:Q,canJumpTo:W},{id:3,name:"Review details",component:c().createElement(_,{targetAccount:q,start:P,end:R,roles:G,isLoading:d,error:y,setError:v,onClose:function(){return a(!1)}}),canJumpTo:W&&Q,enableNext:!d,nextButtonText:"Finish"}],X="".concat(n,"-request"),$="".concat(n," request");return H?c().createElement(o.Modal,{title:"Exit request creation?",variant:"small",titleIconVariant:"warning",isOpen:!0,onClose:function(){return Y(!1)},actions:[c().createElement(o.Button,{key:"confirm",variant:"primary",onClick:function(){return a(!1)}},"Exit"),c().createElement(o.Button,{key:"cancel",variant:"link",onClick:function(){return Y(!1)}},"Stay")]},"All inputs will be discarded."):c().createElement(o.Modal,{variant:"large",style:{height:"900px"},showClose:!1,hasNoBodyWrapper:!0,isOpen:!0,"aria-describedby":$,"aria-labelledby":X},c().createElement(o.Wizard,{titleId:X,descriptionId:$,title:(0,u.kC)(n)+" request",steps:K,onClose:function(){return V?Y(!0):a(!1)},onSave:function(){E(!0);var e={target_account:q,start_date:P,end_date:R,roles:G};fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(l?"/".concat(t,"/"):""),{method:l?"PUT":"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){if(e.errors&&e.errors.length>0)throw Error(e.errors[0].detail);U((0,p.wN)({variant:"success",title:"".concat(l?"Edited":"Created"," access request"),description:e.request_id})),a(!0)})).catch((function(e){var t=/Account .* does not exist/.test(e.message);v({title:t?b:"Could not ".concat(n," access request"),description:t?"Please return to Step 1: Request details and input a new account number for your request.":e.message}),E(!1)}))},onNext:function(){return v()},onBack:function(){return v()},onGoToStep:function(){return v()}}))};I.propTypes={requestId:h().string,variant:h().any,onClose:h().func};const q=I},1643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var a=n(319),r=n.n(a),l=n(3038),c=n.n(l),o=n(9661),i=n.n(o),s=n(4092),u=n(3349),d=n(8755),m=n(8794),p=n(164),f=n(8296),E=n(2167),h=n(3215),g=n(5697),y=n.n(g),b=[],v=[],S=function(e){var t=e.roles,n=e.setRoles,a=void 0===n,l=["Role name","Role description","Permissions"],o=i().useState(Array.from(b)),g=c()(o,2),S=g[0],T=g[1],C=i().useState(v),k=c()(C,2),w=k[0],x=k[1];i().useEffect((function(){0!==b.length&&0!==v.length||fetch("".concat("/api/rbac/v1","/roles/?limit=9999&order_by=display_name&add_fields=groups_in_count"),{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data;t.forEach((function(e){e.isExpanded=!1,e.permissions=e.accessCount})),b=t.map((function(e){return Object.assign({},e)})),T(t);var n=Array.from(t.map((function(e){return e.applications})).flat().reduce((function(e,t){return e.add(t),e}),new Set)).sort();v=n,x(n)})).catch((function(e){return qe((0,h.wN)({variant:"danger",title:"Could not fetch roles list",description:e.message}))}))}),[]);var _=i().useState("name"),I=c()(_,2),q=I[0],A=I[1],D=i().useState("asc"),N=c()(D,2),P=N[0],B=N[1],F=function(e,t,n){A(t),B(n)},L=i().useState(!1),R=c()(L,2),j=R[0],Z=R[1],O=i().useState(l[0]),G=c()(O,2),z=G[0],M=G[1],J=i().useState(!1),H=c()(J,2),Y=H[0],U=H[1],V=i().useState([]),W=c()(V,2),Q=W[0],K=W[1],X=i().useState(""),$=c()(X,2),ee=$[0],te=$[1],ne=Q.length>0||ee,ae="filter-application",re="Filter by application",le=t.map((function(e){return e.display_name})),ce=S.filter((function(e){return!(Q.length>0)||e.applications.find((function(e){return Q.includes(e)}))})).filter((function(e){return e.name.toLowerCase().includes(ee)})).filter((function(e){return!a||le.includes(e.display_name)})),oe=i().useState(1),ie=c()(oe,2),se=ie[0],ue=ie[1],de=i().useState(10),me=c()(de,2),pe=me[0],fe=me[1],Ee=function(e){var t=e.id;return i().createElement(s.Pagination,{itemCount:ce.length,perPage:pe,page:se,onSetPage:function(e,t){return ue(t)},id:"access-requests-roles-table-pagination-"+t,variant:t,onPerPageSelect:function(e,t){ue(1),fe(t)},isCompact:"top"===t})};Ee.propTypes={id:y().string};var he=ce.sort((function(e,t){return"number"==typeof e[q]?"asc"===P?e[q]-t[q]:t[q]-e[q]:"asc"===P?(e[q]+"").localeCompare(t[q]):(t[q]+"").localeCompare(e[q])})).slice((se-1)*pe,se*pe),ge=i().useState(!1),ye=c()(ge,2),be=ye[0],ve=ye[1],Se=t.length>0,Te=!!Se&&null,Ce=t.length===ce.length&&t.length>0||Te,ke=function(e,a,r){var l=he[r].display_name;n(a?t.concat(l):t.filter((function(e){return e!==l})))},we=function(e,t){n(t?ce.map((function(e){return e.display_name})):[])},xe=i().createElement(s.Button,{variant:"link",onClick:function(){K([]),te("")}},"Clear filters"),_e=a?null:i().createElement(s.Toolbar,{id:"access-requests-roles-table-toolbar"},i().createElement(s.ToolbarContent,null,i().createElement(s.ToolbarItem,null,i().createElement(s.Dropdown,{onSelect:function(){return ve(!be)},position:"left",toggle:i().createElement(s.DropdownToggle,{splitButtonItems:[i().createElement(s.DropdownToggleCheckbox,{key:"a",id:"example-checkbox-2","aria-label":Se?"Deselect all":"Select all",isChecked:Ce,onClick:function(){return we(0,!Se)}})],onToggle:function(e){return ve(e)},isDisabled:0===S.length},0!==t.length&&i().createElement(i().Fragment,null,t.length," selected")),isOpen:be,dropdownItems:[i().createElement(s.DropdownItem,{key:"0",onClick:function(){return we(0,!1)}},"Select none (0 items)"),i().createElement(s.DropdownItem,{key:"1",onClick:function(){return n(t.concat(he.map((function(e){return e.display_name}))))}},"Select page (",Math.min(he.length,pe)," items)"),i().createElement(s.DropdownItem,{key:"2",onClick:function(){return we(0,!0)}},"Select all (",ce.length," items)")]})),i().createElement(s.ToolbarItem,null,i().createElement(s.InputGroup,null,i().createElement(s.Dropdown,{isOpen:j,onSelect:function(e){Z(!1),M(e.target.value),U(!1)},toggle:i().createElement(s.DropdownToggle,{onToggle:function(e){return Z(e)}},i().createElement(d.ZP,null)," ",z),dropdownItems:["Role name","Application"].map((function(e){return i().createElement(s.DropdownItem,{key:e,value:e,component:"button"},(0,p.kC)(e))}))}),"Application"===z?i().createElement(i().Fragment,null,i().createElement("span",{id:ae,hidden:!0},re),i().createElement(s.Select,{"aria-labelledby":ae,variant:"checkbox","aria-label":"Select applications",onToggle:function(e){return U(e)},onSelect:function(e,t){Q.includes(t)?K(Q.filter((function(e){return e!==t}))):K([].concat(r()(Q),[t]))},isOpen:Y,selections:Q,isCheckboxSelectionBadgeHidden:!0,placeholderText:re,style:{maxHeight:"400px",overflowY:"auto"}},w.map((function(e){return i().createElement(s.SelectOption,{key:e,value:e},(0,p.kC)(e.replace(/-/g," ")))})))):i().createElement(s.TextInput,{name:"rolesSearch",id:"rolesSearch",type:"search",iconVariant:"search","aria-label":"Search input",placeholder:"Filter by role name",value:ee,onChange:function(e){return te(e)}}))),i().createElement(s.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},i().createElement(Ee,{id:"top"}))),ne&&i().createElement(s.ToolbarContent,null,ee&&i().createElement(s.ChipGroup,{categoryName:"Role name"},i().createElement(s.Chip,{onClick:function(){return te("")}},ee)),Q.length>0&&i().createElement(s.ChipGroup,{categoryName:"Status"},Q.map((function(e){return i().createElement(s.Chip,{key:e,onClick:function(){return K(Q.filter((function(t){return t!==e})))}},e)}))),xe)),Ie=["Application","Resource type","Operation"],qe=(0,E.useDispatch)(),Ae=i().createElement(u.TableComposable,{"aria-label":"My user access roles",variant:"compact"},i().createElement(u.Thead,null,i().createElement(u.Tr,null,!a&&i().createElement(u.Th,null),i().createElement(u.Th,{width:30,sort:{sortBy:{index:q,direction:P},onSort:F,columnIndex:"name"}},l[0]),i().createElement(u.Th,{width:50,sort:{sortBy:{index:q,direction:P},onSort:F,columnIndex:"description"}},l[1]),i().createElement(u.Th,{width:10,sort:{sortBy:{index:q,direction:P},onSort:F,columnIndex:"permissions"},modifier:"nowrap"},l[2]))),0===S.length&&r()(Array(pe).keys()).map((function(e){return i().createElement(u.Tbody,{key:e},i().createElement(u.Tr,null,!a&&i().createElement(u.Td,null),l.map((function(e,t){return i().createElement(u.Td,{dataLabel:e,key:t},i().createElement("div",{style:{height:"22px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))}))))})),he.map((function(e,n){return i().createElement(u.Tbody,{key:n},i().createElement(u.Tr,null,!a&&i().createElement(u.Td,{select:{rowIndex:n,onSelect:ke,isSelected:t.find((function(t){return t===e.display_name}))}}),i().createElement(u.Td,{dataLabel:l[0]},e.display_name),i().createElement(u.Td,{dataLabel:l[1],className:"pf-m-truncate"},i().createElement(s.Tooltip,{entryDelay:1e3,content:e.description},i().createElement("span",{className:"pf-m-truncate pf-c-table__text"},e.description))),i().createElement(u.Td,{dataLabel:l[2],className:(0,f.i)("pf-c-table__compound-expansion-toggle",e.isExpanded&&"pf-m-expanded")},i().createElement("button",{type:"button",className:"pf-c-table__button",onClick:function(){return function(e){e.isExpanded=!e.isExpanded,T(r()(S)),e.access||fetch("".concat("/api/rbac/v1","/roles/").concat(e.uuid,"/"),{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.access=t.access.map((function(e){return e.permission.split(":")})),T(r()(S))})).catch((function(t){return qe((0,h.wN)({variant:"danger",title:"Could not fetch permission list for ".concat(e.name,"."),description:t.message}))}))}(e)}},e.permissions))),i().createElement(u.Tr,{isExpanded:e.isExpanded,borders:!1},!a&&i().createElement(u.Td,null),i().createElement(u.Td,{className:"pf-u-p-0",colSpan:3},i().createElement(u.TableComposable,{isCompact:!0,className:"pf-m-no-border-rows"},i().createElement(u.Thead,null,i().createElement(u.Tr,null,Ie.map((function(e){return i().createElement(u.Th,{key:e},e)})))),i().createElement(u.Tbody,null,Array.isArray(e.access)?e.access.map((function(e){return i().createElement(u.Tr,{key:e.join(":")},i().createElement(u.Td,{dataLabel:Ie[0]},e[0]),i().createElement(u.Td,{dataLabel:Ie[1]},e[1]),i().createElement(u.Td,{dataLabel:Ie[2]},e[2]))})):r()(Array(e.permissions).keys()).map((function(e){return i().createElement(u.Tr,{key:e},Ie.map((function(e){return i().createElement(u.Td,{key:e,dataLabel:e},i().createElement("div",{style:{height:"22px"},className:"ins-c-skeleton ins-c-skeleton__sm"}," "))})))})))))))})),0===he.length&&ne&&i().createElement(u.Tr,null,i().createElement(u.Td,{colSpan:l.length},i().createElement(s.EmptyState,{variant:"small"},i().createElement(s.EmptyStateIcon,{icon:m.ZP}),i().createElement(s.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),i().createElement(s.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),xe))));return i().createElement(i().Fragment,null,!a&&i().createElement(i().Fragment,null,i().createElement(s.Title,{headingLevel:"h2"},"Select roles"),i().createElement("p",null,"Select the roles you would like access to.")),_e,Ae,a&&i().createElement(Ee,{id:"bottom"}))};S.propTypes={roles:y().any,setRoles:y().any};const T=S},2027:(e,t,n)=>{"use strict";n.d(t,{m:()=>E,p:()=>h});var a=n(3038),r=n.n(a),l=n(9661),c=n.n(l),o=n(4092),i=n(2167),s=n(3215),u=n(6710),d=n(4145),m=n(164),p=n(5697),f=n.n(p);function E(e,t,n){var a=[];return"pending"===e&&(a.push({title:"Edit",onClick:function(){return n({type:"edit",requestId:t})}}),a.push({title:"Cancel",onClick:function(){return n({type:"cancel",requestId:t})}})),{items:a,disable:0===a.length}}function h(e){var t=e.requestId,n=e.status,a=e.hideActions,l=c().useState(n),p=r()(l,2),f=p[0],E=p[1],h=c().useState(!1),g=r()(h,2),y=g[0],b=g[1],v=c().useState(!1),S=r()(v,2),T=S[0],C=S[1],k=(0,i.useDispatch)();function w(e){C(!0),fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({status:e})}).then((function(e){return e.json()})).then((function(t){if(t.errors&&t.errors.length>0)throw Error(t.errors.map((function(e){return e.detail})).join("\n"));k((0,s.wN)({variant:"success",title:"Request ".concat(e," successfully")})),E(e),b(!1),C(!1)})).catch((function(t){k((0,s.wN)({variant:"danger",title:"There was an error ".concat("approved"===e?"approving":"denying"," your request"),description:t.message})),C(!1)}))}var x=c().createElement(o.Label,(0,u.Q)(f),(0,m.kC)(f));return a?x:c().createElement(c().Fragment,null,y||"pending"===f?c().createElement(c().Fragment,null,c().createElement(o.Button,{className:"pf-u-mr-md",isDisabled:T||"approved"===f,variant:"primary",onClick:function(){return w("approved")}},"Approve"),c().createElement(o.Button,{className:"pf-u-mr-md",isDisabled:T||"denied"===f,variant:"danger",onClick:function(){return w("denied")}},"Deny")):x,["approved","denied"].includes(f)&&c().createElement(o.Button,{variant:"plain","aria-label":"Edit status",onClick:function(){return b(!y)}},c().createElement(d.ZP,null)))}h.propTypes={requestId:f().string,status:f().any,hideActions:f().any}},6710:(e,t,n)=>{"use strict";n.d(t,{Q:()=>u});var a=n(9661),r=n.n(a),l=n(5451),c=n(4564),o=n(3235),i=n(8802),s=n(5427);function u(e){var t=null,n=null;return"pending"===e?(t="blue",n=r().createElement(i.ZP,null)):"approved"===e?(t="green",n=r().createElement(l.ZP,null)):"denied"===e?(t="red",n=r().createElement(c.ZP,null)):"cancelled"===e?(t="orange",n=r().createElement(o.ZP,null)):"expired"===e&&(t="grey",n=r().createElement(s.ZP,null)),{color:t,icon:n}}}}]);
//# sourceMappingURL=../sourcemaps/508.5ebadb30e53a1ece4301.js.map