/*! For license information please see 839.0ff1c20da5425b20d081.js.LICENSE.txt */
(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[839],{5964:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0})},68778:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},43047:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},69957:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>r});const r=(0,n(40400).IU)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0})},3487:(e,t,n)=>{"use strict";t.__esModule=!0,n(81320),t.default={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},73755:(e,t,n)=>{"use strict";t.__esModule=!0,n(314),t.default={modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}},44291:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createFocusTrap:()=>g});var r,a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=a.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},s=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),a=r.width,o=r.height;return 0===a&&0===o}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},f=function(e,t){return!(!l(e,t)||function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!a||a===e}(e)}(t)||c(t)<0)},p=a.concat("iframe").join(","),d=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,p)&&l(t,e)};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b,y=(b=[],{activateTrap:function(e){if(b.length>0){var t=b[b.length-1];t!==e&&t.pause()}var n=b.indexOf(e);-1===n||b.splice(n,1),b.push(e)},deactivateTrap:function(e){var t=b.indexOf(e);-1!==t&&b.splice(t,1),b.length>0&&b[b.length-1].unpause()}}),h=function(e){return setTimeout(e,0)},g=function(e,t){var n,a=document,u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),l={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},p=function(e){return l.containers.some((function(t){return t.contains(e)}))},b=function(e){var t=u[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=a.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},g=function(){var e;if(null!==b("initialFocus"))e=b("initialFocus");else if(p(a.activeElement))e=a.activeElement;else{var t=l.tabbableGroups[0];e=t&&t.firstTabbableNode||b("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},O=function(){if(l.tabbableGroups=l.containers.map((function(e){var t,n,r,a,u,l,p,d=(n=[],r=[],(a=e,u=(t=t||{}).includeContainer,l=f.bind(null,t),p=Array.prototype.slice.apply(a.querySelectorAll(o)),u&&i.call(a,o)&&p.unshift(a),p.filter(l)).forEach((function(e,t){var a=c(e);0===a?n.push(e):r.push({documentOrder:t,tabIndex:a,node:e})})),r.sort(s).map((function(e){return e.node})).concat(n));if(d.length>0)return{firstTabbableNode:d[0],lastTabbableNode:d[d.length-1]}})).filter((function(e){return!!e})),l.tabbableGroups.length<=0&&!b("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},w=function e(t){t!==a.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!u.preventScroll}),l.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(g()))},E=function(e){p(e.target)||(u.clickOutsideDeactivates?n.deactivate({returnFocus:u.returnFocusOnDeactivate&&!d(e.target)}):u.allowOutsideClick&&("boolean"==typeof u.allowOutsideClick?u.allowOutsideClick:u.allowOutsideClick(e))||e.preventDefault())},S=function(e){var t=p(e.target);t||e.target instanceof Document?t&&(l.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),w(l.mostRecentlyFocusedNode||g()))},k=function(e){if(!1!==u.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){O();var t=null;if(l.tabbableGroups.length>0)if(e.shiftKey){var n=l.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?l.tabbableGroups.length-1:n-1;t=l.tabbableGroups[r].lastTabbableNode}}else{var a=l.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(a>=0){var o=a===l.tabbableGroups.length-1?0:a+1;t=l.tabbableGroups[o].firstTabbableNode}}else t=b("fallbackFocus");t&&(e.preventDefault(),w(t))}(e)},C=function(e){u.clickOutsideDeactivates||p(e.target)||u.allowOutsideClick&&("boolean"==typeof u.allowOutsideClick?u.allowOutsideClick:u.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},x=function(){if(l.active)return y.activateTrap(n),r=u.delayInitialFocus?h((function(){w(g())})):w(g()),a.addEventListener("focusin",S,!0),a.addEventListener("mousedown",E,{capture:!0,passive:!1}),a.addEventListener("touchstart",E,{capture:!0,passive:!1}),a.addEventListener("click",C,{capture:!0,passive:!1}),a.addEventListener("keydown",k,{capture:!0,passive:!1}),n},T=function(){if(l.active)return a.removeEventListener("focusin",S,!0),a.removeEventListener("mousedown",E,!0),a.removeEventListener("touchstart",E,!0),a.removeEventListener("click",C,!0),a.removeEventListener("keydown",k,!0),n};return(n={activate:function(e){if(l.active)return this;O(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=a.activeElement;var t=e&&e.onActivate?e.onActivate:u.onActivate;return t&&t(),x(),this},deactivate:function(e){if(!l.active)return this;clearTimeout(r),T(),l.active=!1,l.paused=!1,y.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:u.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:u.returnFocusOnDeactivate)&&h((function(){var e;w((e=l.nodeFocusedBeforeActivation,b("setReturnFocus")||e))})),this},pause:function(){return l.paused||!l.active||(l.paused=!0,T()),this},unpause:function(){return l.paused&&l.active?(l.paused=!1,O(),x(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return l.containers=t.map((function(e){return"string"==typeof e?a.querySelector(e):e})),l.active&&O(),this}}).updateContainerElements(e),n}},92703:(e,t,n)=>{"use strict";var r=n(50414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},45697:(e,t,n)=>{e.exports=n(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=../sourcemaps/839.a894b837096257da7c03bc276a9041d7.js.map