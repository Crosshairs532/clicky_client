"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5904],{55904:function(e,t,r){r.d(t,{r:function(){return L},wV:function(){return Z}});var n,s=r(94521),l=r(41141),a=r(85734),o=r(50684),i=r(83252),c=r(82823),d=r(16645),u=r(63424),m=r(25257),x=r(98506),p=r(93747),f=r(15236),g=r(19841),h=r(96594),v=r.n(h),y=r(40319),k=r.n(y),j=r(92379),b=r(62984),w=r(75172),N=r(68306),C=r(74091),P=r(46756),_=r(69581),z=r(651);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let D=C.Z.div(n||(n=(0,l.Z)(["group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-token-main-surface-secondary text-sm text-token-text-primary"])));function L(){let{data:e,isLoading:t}=(0,c.Fi)({cutId:"recent",limit:8}),{data:r,isLoading:n}=(0,c.Dq)();return{isLoading:t||n,recent:e,pinned:r}}let A=(0,j.forwardRef)(function(e,t){let{query:r,onSelectGizmo:n,selectedIdx:s}=e,l=(0,x.oc)(),a=(0,j.useRef)([]),{isLoading:i,recent:c,pinned:u}=L();(0,j.useImperativeHandle)(t,()=>({handleEnterOnIndex:e=>{if(!p[e])return e<m.length?m[e].resource:"create"},getResultsLength:()=>m.length+1,scrollToItem:e=>{let t=a.current[e];t&&t.scrollIntoView({behavior:"instant",block:"nearest"})}}));let m=[];if(i)return(0,z.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,z.jsx)(o.Z,{})});c&&m.push(...c.pages.flatMap(e=>e.list.items).map(e=>({resource:e.resource,from:"recent"}))),u&&m.push(...u.items.map(e=>({resource:e,from:"pinned"})));let p=(m=v()(m,e=>e.resource.gizmo.id)).map(e=>{var t;return null===(t=e.resource.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.WorkspaceDisabled)});return r&&""!==r&&(m=m.filter(e=>{var t,n;return(e.resource.gizmo.display.name.toLowerCase()+(null===(t=e.resource.gizmo.display.description)||void 0===t?void 0:t.toLowerCase())+(null===(n=e.resource.gizmo.author.display_name)||void 0===n?void 0:n.toLowerCase())).includes(null==r?void 0:r.toLowerCase())})),(0,z.jsxs)("div",{className:"max-h-40 overflow-y-auto",children:[m.map((e,t)=>(0,z.jsx)("div",{ref:e=>{a.current[t]=e},tabIndex:t,onClick:()=>{p[t]||n(e.resource)},children:(0,z.jsx)(M,{gizmoResource:e.resource,from:e.from,showDescription:l,isSelected:s===t,grayedOut:p[t]})},e.resource.gizmo.id)),(0,z.jsx)("div",{ref:e=>{a.current[m.length]=e},tabIndex:m.length,onClick:()=>{n("create")},children:(0,z.jsx)(E,{isSelected:s===m.length})},"create")]})}),E=e=>{let{isSelected:t}=e;return(0,z.jsx)(D,{className:t?"bg-token-main-surface-secondary":"",children:(0,z.jsxs)(k(),{href:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2",children:[(0,z.jsx)("span",{className:"self-center",children:(0,z.jsx)(P.Vz5,{className:"icon-sm"})}),(0,z.jsx)("span",{children:(0,z.jsx)(b.Z,O({},S.dropdownCreateLabel))})]})})},I=e=>{let{onClick:t,onClose:r}=e,{0:n,1:s}=(0,j.useState)(null),l=(0,j.useRef)(null),a=(0,j.useRef)(null),{0:o,1:i}=(0,j.useState)(0),c=(0,w.Z)(),d=e=>{p.A.logEvent(f.M.mentionsClickGizmo,{gizmo_id:"create"===e?"create":e.gizmo.id}),"create"!==e&&t(e)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("input",{autoFocus:!0,placeholder:c.formatMessage(S.searchPlaceholder),ref:l,onKeyDown:e=>{var t,s,l,c,u;let m=null!==(t=null===(s=a.current)||void 0===s?void 0:s.getResultsLength())&&void 0!==t?t:0;if("Escape"!==e.key&&("Backspace"!==e.key||n)||(e.preventDefault(),r()),"Enter"===e.key||"Tab"===e.key){e.preventDefault();let t=null===(l=a.current)||void 0===l?void 0:l.handleEnterOnIndex(o);if(!t)return;"create"===t?(window.open("/gpts/editor","_blank"),r()):d(t)}if("ArrowDown"===e.key&&o<m-1){e.preventDefault();let t=o+1;null===(c=a.current)||void 0===c||c.scrollToItem(t),i(t)}if("ArrowUp"===e.key&&o>0){e.preventDefault();let t=o-1;null===(u=a.current)||void 0===u||u.scrollToItem(t),i(t)}},onChange:e=>{s(e.target.value),i(0)},className:"mb-1 w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),(0,z.jsx)(A,{ref:a,query:n,selectedIdx:o,onSelectGizmo:d})]})};function M(e){var t;let{gizmoResource:r,from:n,showDescription:s,isSelected:l,grayedOut:a}=e,o=!!(null===(t=r.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));return(0,z.jsxs)(D,{className:(0,g.default)(l?"bg-token-main-surface-secondary":"",a&&"opacity-50"),children:[(0,z.jsx)(i.Z,{isFirstParty:o,src:r.gizmo.display.profile_picture_url,className:(0,g.default)("icon-xl h-7 w-7 flex-shrink-0",a&&"grayscale group-hover:grayscale-0")}),(0,z.jsxs)("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[(0,z.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,z.jsx)("span",{className:"shrink-0 truncate",children:r.gizmo.display.name}),s&&(0,z.jsx)("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:r.gizmo.display.description})]}),(0,z.jsx)("span",{className:"shrink-0 self-center",children:"recent"===n?(0,z.jsx)(P.T39,{className:"icon-sm"}):(0,z.jsx)(P.qQX,{className:"icon-sm"})})]})]})}function Z(e){var t;let{gizmoResource:r,onRemove:n}=e,s=!!(null===(t=r.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));return(0,z.jsxs)("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[(0,z.jsxs)("div",{className:(0,g.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[(0,z.jsx)(i.Z,{isFirstParty:s,src:r.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),(0,z.jsxs)("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[(0,z.jsx)(b.Z,O({},S.talkingTo))," ",(0,z.jsx)("span",{className:"font-semibold text-token-text-secondary",children:r.gizmo.display.name})]})]}),n&&(0,z.jsx)("button",{className:"absolute right-4 text-sm font-bold",onClick:n,children:(0,z.jsx)(P.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}let S=(0,N.vU)({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});t.ZP=e=>{let{onClick:t,onClose:r}=e,n=(0,m.b0)(),s=!!n;return((0,u.n)(()=>{p.A.logEvent(f.M.mentionsOpened,{gizmo_selector_disabled:s})}),s)?(0,z.jsx)(_.W,{clientThreadId:a.Zq,rateLimitInfo:n}):(0,z.jsx)("div",{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:(0,z.jsx)(I,{onClick:t,onClose:r})})}},52825:function(e,t,r){r.d(t,{j:function(){return o}});var n=r(19841),s=r(5443),l=r(14975),a=r(651);let o=e=>{let{onDismiss:t,title:r,content:o,onPrimaryCtaClick:i,primaryCtaText:c,onSecondaryCtaClick:d,secondaryCtaText:u,isElevated:m=!0}=e;return(0,a.jsxs)("div",{className:(0,n.default)("flex w-full items-start gap-4 rounded-2xl border border-token-border-light bg-token-main-surface-primary py-4 pl-5 pr-3 text-sm text-token-text-primary [text-wrap:pretty] dark:border-transparent dark:bg-token-main-surface-secondary md:items-center lg:mx-auto",m&&"shadow-xxs"),children:[(0,a.jsxs)("div",{className:"mt-1.5 flex grow flex-col items-start gap-4 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-8",children:[(0,a.jsxs)("div",{className:"flex max-w-md flex-col",children:[r&&(0,a.jsx)("div",{className:(0,n.default)("font-bold text-token-text-primary"),children:r}),(0,a.jsx)("div",{className:(0,n.default)(r?"text-token-text-secondary":""),children:o})]}),(c||u)&&(0,a.jsxs)("div",{className:"flex shrink-0 gap-2 pb-1 md:pb-0",children:[u&&(0,a.jsx)(s.z,{onClick:d,color:"secondary",className:"shrink-0",children:u}),c&&(0,a.jsx)(s.z,{onClick:i,color:"primary",className:"shrink-0",children:c})]})]}),(0,a.jsx)("div",{className:"flex shrink-0 items-center gap-2",children:!!t&&(0,a.jsx)(l.P,{onClick:t})})]})}},69581:function(e,t,r){r.d(t,{W:function(){return g}});var n=r(85734),s=r(44254),l=r(75172),a=r(52825),o=r(651);let i=e=>{var t,r,n,s,i,c;let{actions:d,title:u,description:m,onDismiss:x}=e,p=(0,l.Z)(),f=null!=d&&null!==(t=d.primaryAction)&&void 0!==t&&t.text?p.formatMessage(d.primaryAction.text):void 0,g=null!=d&&null!==(r=d.secondaryAction)&&void 0!==r&&r.text?p.formatMessage(d.secondaryAction.text):void 0;return(0,o.jsx)(a.j,{title:u,content:m,onDismiss:x,primaryCtaText:f,onPrimaryCtaClick:null!==(n=null==d||null===(s=d.primaryAction)||void 0===s?void 0:s.onClick)&&void 0!==n?n:void 0,secondaryCtaText:g,onSecondaryCtaClick:null!==(i=null==d||null===(c=d.secondaryAction)||void 0===c?void 0:c.onClick)&&void 0!==i?i:void 0,isElevated:!0})};var c=r(63424),d=r(4702),u=r(25257),m=r(86021),x=r(93747),p=r(68306),f=r(55059);let g=e=>{var t;let{clientThreadId:r,rateLimitInfo:l,onDismiss:a}=e,{name:p,title:g,call_to_action:v,description:y}=l,k=(0,d.t)(),j=(0,f.fm)(!0),b=(0,u.zd)(),w=(0,m.Ao)(r),N=null!==(t=null==k?void 0:k.planType)&&void 0!==t?t:"unknown",C=b&&"block_reason"in b?b.block_reason:null,P="banner_description",_={type:p||"unknown",location:P,plan_type:N,is_new_conversation:w,is_hard_block:!!b,hard_block_reason:null!=C?C:""},z=e=>{switch(e){case n.Pt.GET_PLUS:return{text:h.getPlusButton,onClick:()=>{x.A.logRateLimitGetPlusButtonClicked(_),(0,s.MG)("Prompt textarea rate limit banner")}};case n.Pt.NEW_CHAT:return{text:h.newChatButton,onClick:()=>{j({modelId:"",location:P})}}}};(0,c.n)(()=>{x.A.logRateLimitBannerShown(_)});let[T,O]=null!=v?v:[],D={primaryAction:z(T),secondaryAction:z(O)};return(0,o.jsx)(i,{onDismiss:a,title:g,description:y,actions:D})},h=(0,p.vU)({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}})},63424:function(e,t,r){r.d(t,{n:function(){return s}});var n=r(92379);let s=e=>{(0,n.useEffect)(e,[])}}}]);
//# sourceMappingURL=5904-c1292944aa7c5ad2.js.map