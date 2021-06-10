(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[20],{1020:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>C});var n=l(7154),a=l.n(n),r=l(319),c=l.n(r),s=l(3038),u=l.n(s),i=l(9661),o=l.n(i),m=l(4092),d=l(164),E=l(334),f=l(2167),g=l(3215),p=l(1643),h=l(7733),b=l(2863),_=l(6710),I=l(2027),v=l(5697),q=l.n(v),x=function(e){var t=e.isInternal,l=o().useState(),n=u()(l,2),r=n[0],s=n[1],i=(0,E.useParams)().requestId,v=(0,f.useDispatch)();o().useEffect((function(){fetch("".concat("/api/rbac/v1","/cross-account-requests/").concat(i,"/").concat(t?"?query_by=user_id":""),{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){if(e.errors)throw Error(e.errors.map((function(e){return e.detail})).join("\n"));s(e)})).catch((function(e){v((0,g.wN)({variant:"danger",title:"Could not load access request",description:e.message}))}))}),[]);var q=o().useState({type:null}),x=u()(q,2),y=x[0],C=x[1],S=function(){return C({type:null})},w=(0,I.m)(r&&r.status,i,C),k=o().useState(!1),F=u()(k,2),R=F[0],T=F[1],L=[].concat(c()(t?["request_id","target_account"]:["first_name","last_name"]),["start_date","end_date","created"]);return o().createElement(o().Fragment,null,o().createElement(m.PageSection,{variant:"light"},o().createElement(m.Breadcrumb,null,o().createElement(m.BreadcrumbItem,{render:function(){return o().createElement(E.Link,{to:"../"},!t&&"Red Hat ","Access Requests")}}),o().createElement(m.BreadcrumbItem,null,i)),o().createElement(m.Flex,{direction:{default:"column",md:"row"}},o().createElement(m.FlexItem,{grow:{default:"grow"}},o().createElement(m.Title,{headingLevel:"h1",size:"2xl",className:"pf-u-pt-md"},i)),t&&w.items.length>0&&o().createElement(m.FlexItem,{alignSelf:{default:"alignRight"}},o().createElement(m.Dropdown,{position:"right",toggle:o().createElement(m.KebabToggle,{onToggle:function(){return T(!R)},id:"actions-toggle"}),isOpen:R,isPlain:!0,dropdownItems:w.items.map((function(e){var t=e.title,l=e.onClick;return o().createElement(m.DropdownItem,{key:t,component:"button",onClick:l},t)})),isDisabled:w.disable})))),o().createElement(m.PageSection,null,o().createElement(m.Flex,{spaceItems:{xl:"spaceItemsLg"},direction:{default:"column",lg:"row"}},o().createElement(m.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},o().createElement(m.Card,{ouiaId:"request-details",style:{height:"100%"}},o().createElement(m.CardTitle,null,o().createElement(m.Title,{headingLevel:"h2",size:"xl"},"Request details")),o().createElement(m.CardBody,null,r?o().createElement(o().Fragment,null,o().createElement("div",{className:"pf-u-pb-md"},t?o().createElement("div",null,o().createElement("label",null,o().createElement("b",null,"Request status")),o().createElement("br",null),o().createElement(m.Label,a()({className:"pf-u-mt-sm"},(0,_.Q)(r.status)),(0,d.kC)(r.status))):o().createElement(o().Fragment,null,o().createElement("label",null,o().createElement("b",null,"Request decision")),o().createElement("br",null),o().createElement(I.p,{requestId:i,status:r.status}))),L.map((function(e,t){return o().createElement("div",{className:"pf-u-pb-md",key:t},o().createElement("label",null,o().createElement("b",null,(0,d.kC)(e.replace(/_/g," ").replace("id","ID")))),o().createElement("br",null),o().createElement("div",null,r[e]))}))):o().createElement(m.Spinner,{size:"xl"})))),o().createElement(m.FlexItem,{flex:{default:"flex_3"},grow:{default:"grow"},alignSelf:{default:"alignSelfStretch"}},o().createElement(m.Card,{ouiaId:"request-roles",style:{height:"100%"}},o().createElement(m.CardTitle,null,o().createElement(m.Title,{headingLevel:"h2",size:"xl"},"Roles requested")),o().createElement(m.CardBody,null,r?o().createElement(p.Z,{roles:r.roles}):o().createElement(m.Spinner,{size:"xl"})))))),"cancel"===y.type&&o().createElement(h.Z,{requestId:i,onClose:S}),"edit"===y.type&&o().createElement(b.Z,{variant:"edit",requestId:i,onClose:S}))},y=function(e){var t=e.getRegistry,l=e.isInternal;return o().createElement(f.Provider,{store:t().getStore()},o().createElement(x,{isInternal:l}))};y.propTypes={getRegistry:q().func,isInternal:q().bool},x.propTypes={isInternal:q().bool};const C=y}}]);
//# sourceMappingURL=../sourcemaps/20.7f70a5ba7a5634f24401.js.map