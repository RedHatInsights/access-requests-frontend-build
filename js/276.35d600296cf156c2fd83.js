(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[276],{276:(e,n,r)=>{"use strict";r.r(n),r.d(n,{Provider:()=>p,ReactReduxContext:()=>u,batch:()=>Y.unstable_batchedUpdates,connect:()=>A,connectAdvanced:()=>O,createDispatchHook:()=>V,createSelectorHook:()=>J,createStoreHook:()=>I,shallowEqual:()=>x,useDispatch:()=>z,useSelector:()=>X,useStore:()=>L});var t=r(49661),o=r.n(t),u=(r(45697),o().createContext(null)),i=function(e){e()},a=function(){return i},s={notify:function(){}},c=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=a(),n=null,r=null;return{clear:function(){n=null,r=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=n;r;)e.push(r),r=r.next;return e},subscribe:function(e){var t=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:n=o,function(){t&&null!==n&&(t=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}(),f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect;const p=function(e){var n=e.store,r=e.context,i=e.children,a=(0,t.useMemo)((function(){var e=new c(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),s=(0,t.useMemo)((function(){return n.getState()}),[n]);f((function(){var e=a.subscription;return e.trySubscribe(),s!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,s]);var p=r||u;return o().createElement(p.Provider,{value:a},i)};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}var v=r(8679),h=r.n(v),b=r(59864),m=[],y=[null,null];function P(e,n){var r=e[1];return[n.payload,r+1]}function S(e,n,r){f((function(){return e.apply(void 0,n)}),r)}function g(e,n,r,t,o,u,i){e.current=t,n.current=o,r.current=!1,u.current&&(u.current=null,i())}function w(e,n,r,t,o,u,i,a,s,c){if(e){var f=!1,p=null,d=function(){if(!f){var e,r,d=n.getState();try{e=t(d,o.current)}catch(e){r=e,p=e}r||(p=null),e===u.current?i.current||s():(u.current=e,a.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:r}}))}};return r.onStateChange=d,r.trySubscribe(),d(),function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var C=function(){return[null,0]};function O(e,n){void 0===n&&(n={});var r=n,i=r.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=r.methodName,f=void 0===s?"connectAdvanced":s,p=r.renderCountProp,v=void 0===p?void 0:p,O=r.shouldHandleStateChanges,E=void 0===O||O,x=r.storeKey,M=void 0===x?"store":x,R=(r.withRef,r.forwardRef),N=void 0!==R&&R,q=r.context,T=void 0===q?u:q,_=l(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),D=T;return function(n){var r=n.displayName||n.name||"Component",u=a(r),i=d({},_,{getDisplayName:a,methodName:f,renderCountProp:v,shouldHandleStateChanges:E,storeKey:M,displayName:u,wrappedComponentName:r,WrappedComponent:n}),s=_.pure,p=s?t.useMemo:function(e){return e()};function O(r){var u=(0,t.useMemo)((function(){var e=r.reactReduxForwardedRef,n=l(r,["reactReduxForwardedRef"]);return[r.context,e,n]}),[r]),a=u[0],s=u[1],f=u[2],v=(0,t.useMemo)((function(){return a&&a.Consumer&&(0,b.isContextConsumer)(o().createElement(a.Consumer,null))?a:D}),[a,D]),h=(0,t.useContext)(v),O=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(h)&&Boolean(h.store);var x=O?r.store:h.store,M=(0,t.useMemo)((function(){return function(n){return e(n.dispatch,i)}(x)}),[x]),R=(0,t.useMemo)((function(){if(!E)return y;var e=new c(x,O?null:h.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[x,O,h]),N=R[0],q=R[1],T=(0,t.useMemo)((function(){return O?h:d({},h,{subscription:N})}),[O,h,N]),_=(0,t.useReducer)(P,m,C),k=_[0][0],j=_[1];if(k&&k.error)throw k.error;var B=(0,t.useRef)(),H=(0,t.useRef)(f),W=(0,t.useRef)(),F=(0,t.useRef)(!1),U=p((function(){return W.current&&f===H.current?W.current:M(x.getState(),f)}),[x,k,f]);S(g,[H,B,F,f,U,W,q]),S(w,[E,x,N,M,H,B,F,W,q,j],[x,N,M]);var A=(0,t.useMemo)((function(){return o().createElement(n,d({},U,{ref:s}))}),[s,n,U]);return(0,t.useMemo)((function(){return E?o().createElement(v.Provider,{value:T},A):A}),[v,A,T])}var x=s?o().memo(O):O;if(x.WrappedComponent=n,x.displayName=u,N){var R=o().forwardRef((function(e,n){return o().createElement(x,d({},e,{reactReduxForwardedRef:n}))}));return R.displayName=u,R.WrappedComponent=n,h()(R,n)}return h()(x,n)}}function E(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function x(e,n){if(E(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(n,r[o])||!E(e[r[o]],n[r[o]]))return!1;return!0}var M=r(40003);function R(e){return function(n,r){var t=e(n,r);function o(){return t}return o.dependsOnOwnProps=!1,o}}function N(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function q(e,n){return function(n,r){r.displayName;var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=N(e);var o=t(n,r);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=N(o),o=t(n,r)),o},t}}const T=[function(e){return"function"==typeof e?q(e):void 0},function(e){return e?void 0:R((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?R((function(n){return(0,M.bindActionCreators)(e,n)})):void 0}],_=[function(e){return"function"==typeof e?q(e):void 0},function(e){return e?void 0:R((function(){return{}}))}];function D(e,n,r){return d({},r,e,n)}const k=[function(e){return"function"==typeof e?function(e){return function(n,r){r.displayName;var t,o=r.pure,u=r.areMergedPropsEqual,i=!1;return function(n,r,a){var s=e(n,r,a);return i?o&&u(s,t)||(t=s):(i=!0,t=s),t}}}(e):void 0},function(e){return e?void 0:function(){return D}}];function j(e,n,r,t){return function(o,u){return r(e(o,u),n(t,u),u)}}function B(e,n,r,t,o){var u,i,a,s,c,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,h,b=!p(l,i),m=!f(o,u);return u=o,i=l,b&&m?(a=e(u,i),n.dependsOnOwnProps&&(s=n(t,i)),c=r(a,s,i)):b?(e.dependsOnOwnProps&&(a=e(u,i)),n.dependsOnOwnProps&&(s=n(t,i)),c=r(a,s,i)):m?(v=e(u,i),h=!d(v,a),a=v,h&&(c=r(a,s,i)),c):c}(o,v):(a=e(u=o,i=v),s=n(t,i),c=r(a,s,i),l=!0,c)}}function H(e,n){var r=n.initMapStateToProps,t=n.initMapDispatchToProps,o=n.initMergeProps,u=l(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=r(e,u),a=t(e,u),s=o(e,u);return(u.pure?B:j)(i,a,s,e,u)}function W(e,n,r){for(var t=n.length-1;t>=0;t--){var o=n[t](e);if(o)return o}return function(n,t){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function F(e,n){return e===n}function U(e){var n=void 0===e?{}:e,r=n.connectHOC,t=void 0===r?O:r,o=n.mapStateToPropsFactories,u=void 0===o?_:o,i=n.mapDispatchToPropsFactories,a=void 0===i?T:i,s=n.mergePropsFactories,c=void 0===s?k:s,f=n.selectorFactory,p=void 0===f?H:f;return function(e,n,r,o){void 0===o&&(o={});var i=o,s=i.pure,f=void 0===s||s,v=i.areStatesEqual,h=void 0===v?F:v,b=i.areOwnPropsEqual,m=void 0===b?x:b,y=i.areStatePropsEqual,P=void 0===y?x:y,S=i.areMergedPropsEqual,g=void 0===S?x:S,w=l(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=W(e,u,"mapStateToProps"),O=W(n,a,"mapDispatchToProps"),E=W(r,c,"mergeProps");return t(p,d({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:O,initMergeProps:E,pure:f,areStatesEqual:h,areOwnPropsEqual:m,areStatePropsEqual:P,areMergedPropsEqual:g},w))}}const A=U();function K(){return(0,t.useContext)(u)}function I(e){void 0===e&&(e=u);var n=e===u?K:function(){return(0,t.useContext)(e)};return function(){return n().store}}var L=I();function V(e){void 0===e&&(e=u);var n=e===u?L:I(e);return function(){return n().dispatch}}var z=V(),G=function(e,n){return e===n};function J(e){void 0===e&&(e=u);var n=e===u?K:function(){return(0,t.useContext)(e)};return function(e,r){void 0===r&&(r=G);var o=n(),u=function(e,n,r,o){var u,i=(0,t.useReducer)((function(e){return e+1}),0)[1],a=(0,t.useMemo)((function(){return new c(r,o)}),[r,o]),s=(0,t.useRef)(),p=(0,t.useRef)(),d=(0,t.useRef)(),l=(0,t.useRef)(),v=r.getState();try{if(e!==p.current||v!==d.current||s.current){var h=e(v);u=void 0!==l.current&&n(h,l.current)?l.current:h}else u=l.current}catch(e){throw s.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),e}return f((function(){p.current=e,d.current=v,l.current=u,s.current=void 0})),f((function(){function e(){try{var e=p.current(r.getState());if(n(e,l.current))return;l.current=e}catch(e){s.current=e}i()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[r,a]),u}(e,r,o.store,o.subscription);return(0,t.useDebugValue)(u),u}}var Q,X=J(),Y=r(85293);Q=Y.unstable_batchedUpdates,i=Q}}]);
//# sourceMappingURL=../sourcemaps/276.8d26858b2741ff55c688.js.map