"use strict";(self.webpackChunkaccessRequests=self.webpackChunkaccessRequests||[]).push([[551],{99551:(e,t,a)=>{t.C2={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},t.YG=a(74769).w(t.C2),t.Ay=t.YG},32240:(e,t,a)=>{t.oK={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.GY=a(74769).w(t.oK),t.Ay=t.GY},9590:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var n=a(93345),l=a.n(n),r=a(1448),s=a(27565),c=a(60316),i=a(47931),o=a(68382),m=a(5924),u=a(45894),d=a(72583),p=a(87904),E=a(53642),h=a(23285),g=a(28296),y=a(14914),b=a(5833),f=a(55318),v=a(33675),q=a(86130),S=a(43030),T=a(75279),C=a(97796),k=a(81855),A=a(5715),_=a(99780),I=a(5029),L=a(18960),P=a(15402),w=a(76792),x=a(63148),$=a(97192),N=a(39711),O=a(94230),R=a(36318),F=a(33783),D=a(41829),Y=a(99551),H=a(32240),V=a(11830),z=a(49634),B=a(80562),G=a(5556),M=a.n(G),K=a(20886),j=a(20881),Z=a(56154);const U=e=>e[0].toLowerCase()+e.substring(1),X=["pending","approved","denied","cancelled","expired"],J=({isInternal:e})=>{const t=e?["Request ID","Account number","Account name","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],[a,n]=l().useState(e?4:5),[s,c]=l().useState("desc"),G=(e,t,a)=>{n(t),c(a)},[J,Q]=l().useState(1),[W,ee]=l().useState(20),te=({id:e})=>l().createElement(g.d,{itemCount:ye,perPage:W,page:J,onSetPage:(e,t)=>Q(t),id:`access-requests-table-pagination-${e}`,variant:e,perPageOptions:[5,10,20,50].map((e=>({title:e,value:e}))),onPerPageSelect:(e,t)=>{Q(1),ee(t)},isCompact:"top"===e});te.propTypes={id:M().string};const[ae,ne]=l().useState(!1),[le,re]=l().useState(t[e?1:6]),[se,ce]=l().useState(!1),[ie,oe]=l().useState([]),[me,ue]=l().useState(""),[de,pe]=l().useState(!1),Ee=ie.length>0||me,[he,ge]=l().useState(!0),[ye,be]=l().useState(0),[fe,ve]=l().useState([]),qe=(0,r.wA)(),{isOrgAdmin:Se}=(0,Z.A)(),{getBundleData:Te}=(0,j.A)(),Ce=()=>{ge(!0);const n=new URL(`${window.location.origin}/api/rbac/v1/cross-account-requests/`);e?"iam"===Te()&&Se?n.searchParams.append("query_by","target_org"):n.searchParams.append("query_by","user_id"):n.searchParams.append("query_by","target_org"),n.searchParams.append("offset",(J-1)*W),n.searchParams.append("limit",W),me&&n.searchParams.append("account",me),ie.length>0&&n.searchParams.append("status",ie.join(","));const l=`${"desc"===s?"-":""}${t[a].toLowerCase().replace(" ","_")}`;n.searchParams.append("order_by",l),K.A.get(n.href,{headers:{Accept:"application/json"}}).then((t=>{be(t.meta.count),ve(t.data.map((t=>e?[t.request_id,t.target_account,t.first_name+" "+t.last_name,t.start_date,t.end_date,t.created,t.status]:[t.request_id,t.first_name,t.last_name,t.start_date,t.end_date,t.created,t.status]))),ge(!1)})).catch((e=>{ge(!1),qe((0,V.z8)({variant:"danger",title:"Could not list access requests",description:e.message}))}))},ke=function(e,t){const[a,n]=l().useState(e);return l().useEffect((()=>{const t=setTimeout((()=>{n(e)}),400);return()=>{clearTimeout(t)}}),[e]),a}(me);l().useEffect((()=>{Ce()}),[e,ke,ie,a,s,W,J]);const[Ae,_e]=l().useState({type:null}),Ie=e=>{_e({type:null}),e&&Ce()},Le=l().createElement(l().Fragment,null,"cancel"===Ae.type&&l().createElement(R.A,{requestId:Ae.requestId,onClose:Ie}),["edit","create"].includes(Ae.type)&&l().createElement(F.A,{variant:Ae.type,requestId:Ae.requestId,onClose:Ie})),Pe=e&&l().createElement(d.$n,{variant:"primary",onClick:()=>_e({type:"create"})},"Create request");if(0===fe.length&&!he&&!de)return l().createElement(f.a,{style:{height:"auto"},className:"pf-v5-u-mt-lg"},l().createElement(v.p,{variant:"lg"},l().createElement(q.o,{titleText:l().createElement(l().Fragment,null,e?"No access requests":"You have no access requests"),icon:l().createElement(S.q,{icon:H.Ay}),headingLevel:"h3"}),l().createElement(T.h,null,e?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),l().createElement(C.s,null,Pe)),Le);const we="filter-status",xe=`Filter by ${U(t[t.length-1])}`,$e=l().createElement(d.$n,{variant:"link",onClick:()=>{oe([]),ue(""),Q(1)}},"Clear filters"),Ne=l().createElement(o.M,{id:"access-requests-table-toolbar"},l().createElement(m.P,null,l().createElement(u.T,null,l().createElement(p.M,null,l().createElement(E.b,null,l().createElement(k.m,{isOpen:ae,onSelect:e=>{ne(!1),re(e.target.value),ce(!1),pe(!0)},toggle:l().createElement(A.C,{onToggle:(e,t)=>ne(t)},l().createElement(Y.Ay,null)," ",le),dropdownItems:(e?[1,5]:[6]).map((e=>t[e])).map((e=>l().createElement(_.t,{key:e,value:e,component:"button"},(0,i.ZH)(e))))})),["Status","Decision"].includes(le)&&l().createElement(l().Fragment,null,l().createElement("span",{id:we,hidden:!0},xe),l().createElement(I.l,{"aria-labelledby":we,variant:"checkbox","aria-label":"Select statuses",onToggle:(e,t)=>ce(t),onSelect:(e,t)=>{pe(!0),ie.includes(t)?oe(ie.filter((e=>e!==t))):oe([...ie,t]),Q(1)},isOpen:se,selections:Array.from(ie),isCheckboxSelectionBadgeHidden:!0,placeholderText:xe},X.map((e=>l().createElement(L.O,{key:e,value:e},(0,i.ZH)(e)))))),"Account number"===le&&l().createElement("form",{style:{display:"flex"},onSubmit:e=>e.preventDefault()},l().createElement(h.ks,{name:`${le}-filter`,id:`${le}-filter`,type:"search",placeholder:`Filter by ${U(le)}`,"aria-label":`${le} search input`,value:me,onChange:(e,t)=>{ue(t),pe(!0),Q(1)}})))),l().createElement(u.T,null,Pe),l().createElement(u.T,{variant:"pagination",align:{default:"alignRight"}},l().createElement(te,{id:"top"}))),l().createElement(m.P,null,l().createElement(y.I,{categoryName:"Status"},ie.map((e=>l().createElement(b.v,{key:e,onClick:()=>{oe(ie.filter((t=>t!==e))),Q(1)}},e)))),me&&l().createElement(y.I,{categoryName:"Account number"},l().createElement(b.v,{onClick:()=>{ue(""),Q(1)}},me)),Ee&&$e));function Oe(t){return e?0===t?30:15:[0,6].includes(t)?20:10}const Re=l().createElement(O.X,{"aria-label":"Access requests table",variant:"compact"},l().createElement(P.d,null,l().createElement(w.Tr,null,t.map(((e,t)=>l().createElement(x.Th,{key:t,...!e.includes("name")&&"Decision"!==e&&{sort:{sortBy:{index:a,direction:s},onSort:G,columnIndex:t}},width:Oe(t)},e))),e&&l().createElement(x.Th,null))),l().createElement($.N,null,he?[...Array(fe.length||W).keys()].map((e=>l().createElement(w.Tr,{key:e},t.map(((e,t)=>l().createElement(N.Td,{key:t,dataLabel:e},l().createElement("div",{style:{height:"30px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))))))):fe.map(((a,n)=>l().createElement(w.Tr,{key:n},l().createElement(N.Td,{dataLabel:t[0]},l().createElement(z.Link,{to:a[0]},a[0])),l().createElement(N.Td,{dataLabel:t[1]},a[1]),l().createElement(N.Td,{dataLabel:t[2]},a[2]),l().createElement(N.Td,{dataLabel:t[3]},a[3]),l().createElement(N.Td,{dataLabel:t[4]},a[4]),e?l().createElement(N.Td,{dataLabel:t[5]},l().createElement(B.V,{requestId:a[0],status:a[5],onLabelClick:()=>{oe([...ie.filter((e=>e!==status)),status]),Q(1)},hideActions:!0})):l().createElement(N.Td,{dataLabel:t[5]},a[5]),e?l().createElement(N.Td,{dataLabel:t[6]},l().createElement(B.V,{requestId:a[0],status:a[6],hideActions:!0})):l().createElement(N.Td,{dataLabel:t[6]},l().createElement(B.V,{requestId:a[0],status:a[6]}))))),0===fe.length&&Ee?l().createElement(w.Tr,null,l().createElement(N.Td,{colSpan:t.length},l().createElement("div",null,l().createElement(v.p,{variant:"sm"},l().createElement(q.o,{titleText:"No matching requests found",icon:l().createElement(S.q,{icon:D.Ay}),headingLevel:"h2"}),l().createElement(T.h,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),l().createElement(C.s,null,$e))))):null));return l().createElement(l().Fragment,null,Ne,Re,l().createElement(te,{id:"bottom"}),Le)};J.propTypes={isInternal:M().bool};const Q=J;var W=a(8010),ee=a(106);const te=e=>l().createElement(r.Kq,{store:W.A.getStore()},l().createElement(ee.A,null,l().createElement(s.d8,{variant:"light"},l().createElement(c.h,{headingLevel:"h1",className:"pf-v5-u-pb-sm"},"Access Requests"),l().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),l().createElement(s.d8,{padding:{default:"noPadding"}},l().createElement(Q,{isInternal:e?.isInternal}))));te.propTypes={isInternal:M().bool};const ae=te}}]);