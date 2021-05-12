(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[20],{51020:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>S});var n=l(67154),r=l.n(n),a=l(319),c=l.n(a),s=l(63038),u=l.n(s),i=l(49661),m=l.n(i),o=l(4092),d=l(80164),E=l(334),f=l(12167),g=l(83215),p=l(31643),h=l(17733),b=l(42863),I=l(76710),_=l(42027),v=l(45697),q=l.n(v),x=function(e){var t=e.isInternal,l=m().useState(),n=u()(l,2),a=n[0],s=n[1],i=(0,E.useParams)().requestId,v=(0,f.useDispatch)();m().useEffect((function(){fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(i,"/")).then((function(e){return e.json()})).then((function(e){if(e.errors)throw Error(e.errors.map((function(e){return e.detail})).join("\n"));s(e)})).catch((function(e){v((0,g.wN)({variant:"danger",title:"Could not load access request",description:e.message}))}))}),[]);var q=m().useState({type:null}),x=u()(q,2),C=x[0],S=x[1],y=function(){return S({type:null})},w=(0,_.m)(a&&a.status,i,S),k=m().useState(!1),F=u()(k,2),R=F[0],T=F[1],L=[].concat(c()(t?["request_id","target_account"]:["first_name","last_name"]),["start_date","end_date","created"]);return m().createElement(m().Fragment,null,m().createElement(o.PageSection,{variant:"light"},m().createElement(o.Breadcrumb,null,m().createElement(o.BreadcrumbItem,{render:function(){return m().createElement(E.Link,{to:"../"},!t&&"Red Hat ","Access Requests")}}),m().createElement(o.BreadcrumbItem,null,i)),m().createElement(o.Flex,{direction:{default:"column",md:"row"}},m().createElement(o.FlexItem,{grow:{default:"grow"}},m().createElement(o.Title,{headingLevel:"h1",size:"2xl",className:"pf-u-pt-md"},i)),t&&w.items.length>0&&m().createElement(o.FlexItem,{alignSelf:{default:"alignRight"}},m().createElement(o.Dropdown,{position:"right",toggle:m().createElement(o.KebabToggle,{onToggle:function(){return T(!R)},id:"actions-toggle"}),isOpen:R,isPlain:!0,dropdownItems:w.items.map((function(e){var t=e.title,l=e.onClick;return m().createElement(o.DropdownItem,{key:t,component:"button",onClick:l},t)})),isDisabled:w.disable})))),m().createElement(o.PageSection,null,m().createElement(o.Flex,{spaceItems:{xl:"spaceItemsLg"},direction:{default:"column",lg:"row"}},m().createElement(o.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},m().createElement(o.Card,{ouiaId:"request-details",style:{height:"100%"}},m().createElement(o.CardTitle,null,m().createElement(o.Title,{headingLevel:"h2",size:"xl"},"Request details")),m().createElement(o.CardBody,null,a?m().createElement(m().Fragment,null,m().createElement("div",{className:"pf-u-pb-md"},t?m().createElement("div",null,m().createElement("label",null,m().createElement("b",null,"Request status")),m().createElement("br",null),m().createElement(o.Label,r()({className:"pf-u-mt-sm"},(0,I.Q)(a.status)),(0,d.kC)(a.status))):m().createElement(m().Fragment,null,m().createElement("label",null,m().createElement("b",null,"Request decision")),m().createElement("br",null),m().createElement(_.p,{requestId:i,status:a.status}))),L.map((function(e,t){return m().createElement("div",{className:"pf-u-pb-md",key:t},m().createElement("label",null,m().createElement("b",null,(0,d.kC)(e.replace(/_/g," ").replace("id","ID")))),m().createElement("br",null),m().createElement("div",null,a[e]))}))):m().createElement(o.Spinner,{size:"xl"})))),m().createElement(o.FlexItem,{flex:{default:"flex_3"},grow:{default:"grow"},alignSelf:{default:"alignSelfStretch"}},m().createElement(o.Card,{ouiaId:"request-roles",style:{height:"100%"}},m().createElement(o.CardTitle,null,m().createElement(o.Title,{headingLevel:"h2",size:"xl"},"Roles requested")),m().createElement(o.CardBody,null,a?m().createElement(p.Z,{roles:a.roles}):m().createElement(o.Spinner,{size:"xl"})))))),"cancel"===C.type&&m().createElement(h.Z,{requestId:i,onClose:y}),"edit"===C.type&&m().createElement(b.Z,{variant:"edit",requestId:i,onClose:y}))},C=function(e){var t=e.getRegistry,l=e.isInternal;return m().createElement(f.Provider,{store:t().getStore()},m().createElement(x,{isInternal:l}))};C.propTypes={getRegistry:q().func,isInternal:q().bool},x.propTypes={isInternal:q().bool};const S=C}}]);
//# sourceMappingURL=../sourcemaps/20.8d26858b2741ff55c688.js.map