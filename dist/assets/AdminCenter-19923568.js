import{j as $,k as Je,l as q,m as E,o as y,d as A,n as I,p as z,f as a,q as le,s as ce,v as ee,x as se,y as V,g as ae,r as T,z as x,A as B,B as je,C as $e,D as qe,E as ne,F as ke,G as F,H,w as d,h as p,I as We,J as Qe,K as Xe,L as Te,M as Ze,N as xe,O as te,e as j,P as eo,Q as de,R as oo,b as Se,a as Fe,u as no,c as to,i as Y,S as lo,t as W,T as so,U as ro,V as ao,W as io,X as uo,Y as co,Z as po}from"./index-6f076c3a.js";import{c as Ne,E as mo}from"./el-dialog-f121cddb.js";import{d as L,e as C,u as fo,f as Oe,i as vo,a as pe,g as Re,h as _o,j as go,k as ho,l as wo,F as bo,_ as Be,b as yo,c as Io,E as Eo}from"./_plugin-vue_export-helper-602c0275.js";import{c as G,u as Co,a as we,E as $o,b as ko,O as To,w as be}from"./el-scrollbar-eae67227.js";import{E as ye}from"./el-message-18b9a23e.js";import{U as Ie,l as So,a as Fo}from"./user-bacf3426.js";const No=$({name:"ElContainer"}),Oo=$({...No,props:{direction:{type:String}},setup(e){const o=e,t=Je(),n=q("container"),s=E(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:t&&t.default?t.default().some(i=>{const r=i.type.name;return r==="ElHeader"||r==="ElFooter"}):!1);return(u,i)=>(y(),A("section",{class:z([a(n).b(),a(n).is("vertical",a(s))])},[I(u.$slots,"default")],2))}});var Ro=L(Oo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Bo=$({name:"ElAside"}),Lo=$({...Bo,props:{width:{type:String,default:null}},setup(e){const o=e,t=q("aside"),n=E(()=>o.width?t.cssVarBlock({width:o.width}):{});return(s,u)=>(y(),A("aside",{class:z(a(t).b()),style:le(a(n))},[I(s.$slots,"default")],6))}});var Le=L(Lo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Do=$({name:"ElFooter"}),Mo=$({...Do,props:{height:{type:String,default:null}},setup(e){const o=e,t=q("footer"),n=E(()=>o.height?t.cssVarBlock({height:o.height}):{});return(s,u)=>(y(),A("footer",{class:z(a(t).b()),style:le(a(n))},[I(s.$slots,"default")],6))}});var De=L(Mo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Ao=$({name:"ElHeader"}),Po=$({...Ao,props:{height:{type:String,default:null}},setup(e){const o=e,t=q("header"),n=E(()=>o.height?t.cssVarBlock({height:o.height}):{});return(s,u)=>(y(),A("header",{class:z(a(t).b()),style:le(a(n))},[I(s.$slots,"default")],6))}});var Me=L(Po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Ko=$({name:"ElMain"}),Vo=$({...Ko,setup(e){const o=q("main");return(t,n)=>(y(),A("main",{class:z(a(o).b())},[I(t.$slots,"default")],2))}});var Ae=L(Vo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Go=ce(Ro,{Aside:Le,Footer:De,Header:Me,Main:Ae});ee(Le);ee(De);const zo=ee(Me),Uo=ee(Ae),Yo=se({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:V(String),default:"solid"}}),Ho=$({name:"ElDivider"}),Jo=$({...Ho,props:Yo,setup(e){const o=e,t=q("divider"),n=E(()=>t.cssVar({"border-style":o.borderStyle}));return(s,u)=>(y(),A("div",{class:z([a(t).b(),a(t).m(s.direction)]),style:le(a(n)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(y(),A("div",{key:0,class:z([a(t).e("text"),a(t).is(s.contentPosition)])},[I(s.$slots,"default")],2)):ae("v-if",!0)],6))}});var jo=L(Jo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const qo=ce(jo),Wo=$({inheritAttrs:!1});function Qo(e,o,t,n,s,u){return I(e.$slots,"default")}var Xo=L(Wo,[["render",Qo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Zo=$({name:"ElCollectionItem",inheritAttrs:!1});function xo(e,o,t,n,s,u){return I(e.$slots,"default")}var en=L(Zo,[["render",xo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Pe="data-el-collection-item",Ke=e=>{const o="El".concat(e,"Collection"),t="".concat(o,"Item"),n=Symbol(o),s=Symbol(t),u={...Xo,name:o,setup(){const r=T(null),f=new Map;x(n,{itemMap:f,getItems:()=>{const w=a(r);if(!w)return[];const h=Array.from(w.querySelectorAll("[".concat(Pe,"]")));return[...f.values()].sort((l,_)=>h.indexOf(l.ref)-h.indexOf(_.ref))},collectionRef:r})}},i={...en,name:t,setup(r,{attrs:f}){const v=T(null),w=B(n,void 0);x(s,{collectionItemRef:v}),je(()=>{const h=a(v);h&&w.itemMap.set(h,{ref:h,...f})}),$e(()=>{const h=a(v);w.itemMap.delete(h)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:s,ElCollection:u,ElCollectionItem:i}},on=se({style:{type:V([String,Array,Object])},currentTabId:{type:V(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:V(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:nn,ElCollectionItem:tn,COLLECTION_INJECTION_KEY:me,COLLECTION_ITEM_INJECTION_KEY:ln}=Ke("RovingFocusGroup"),fe=Symbol("elRovingFocusGroup"),Ve=Symbol("elRovingFocusGroupItem"),sn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},rn=(e,o)=>{if(o!=="rtl")return e;switch(e){case C.right:return C.left;case C.left:return C.right;default:return e}},an=(e,o,t)=>{const n=rn(e.key,t);if(!(o==="vertical"&&[C.left,C.right].includes(n))&&!(o==="horizontal"&&[C.up,C.down].includes(n)))return sn[n]},un=(e,o)=>e.map((t,n)=>e[(n+o)%e.length]),ve=e=>{const{activeElement:o}=document;for(const t of e)if(t===o||(t.focus(),o!==document.activeElement))return},Ee="currentTabIdChange",Ce="rovingFocusGroup.entryFocus",dn={bubbles:!1,cancelable:!0},cn=$({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:on,emits:[Ee,"entryFocus"],setup(e,{emit:o}){var t;const n=T((t=e.currentTabId||e.defaultCurrentTabId)!=null?t:null),s=T(!1),u=T(!1),i=T(null),{getItems:r}=B(me,void 0),f=E(()=>[{outline:"none"},e.style]),v=m=>{o(Ee,m)},w=()=>{s.value=!0},h=G(m=>{var g;(g=e.onMousedown)==null||g.call(e,m)},()=>{u.value=!0}),k=G(m=>{var g;(g=e.onFocus)==null||g.call(e,m)},m=>{const g=!a(u),{target:b,currentTarget:N}=m;if(b===N&&g&&!a(s)){const P=new Event(Ce,dn);if(N==null||N.dispatchEvent(P),!P.defaultPrevented){const S=r().filter(R=>R.focusable),O=S.find(R=>R.active),D=S.find(R=>R.id===a(n)),J=[O,D,...S].filter(Boolean).map(R=>R.ref);ve(J)}}u.value=!1}),l=G(m=>{var g;(g=e.onBlur)==null||g.call(e,m)},()=>{s.value=!1}),_=(...m)=>{o("entryFocus",...m)};x(fe,{currentTabbedId:qe(n),loop:ne(e,"loop"),tabIndex:E(()=>a(s)?-1:0),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:f,orientation:ne(e,"orientation"),dir:ne(e,"dir"),onItemFocus:v,onItemShiftTab:w,onBlur:l,onFocus:k,onMousedown:h}),ke(()=>e.currentTabId,m=>{n.value=m!=null?m:null}),fo(i,Ce,_)}});function pn(e,o,t,n,s,u){return I(e.$slots,"default")}var mn=L(cn,[["render",pn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const fn=$({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:nn,ElRovingFocusGroupImpl:mn}});function vn(e,o,t,n,s,u){const i=F("el-roving-focus-group-impl"),r=F("el-focus-group-collection");return y(),H(r,null,{default:d(()=>[p(i,We(Qe(e.$attrs)),{default:d(()=>[I(e.$slots,"default")]),_:3},16)]),_:3})}var _n=L(fn,[["render",vn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const gn=$({components:{ElRovingFocusCollectionItem:tn},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:t,loop:n,onItemFocus:s,onItemShiftTab:u}=B(fe,void 0),{getItems:i}=B(me,void 0),r=Oe(),f=T(null),v=G(l=>{o("mousedown",l)},l=>{e.focusable?s(a(r)):l.preventDefault()}),w=G(l=>{o("focus",l)},()=>{s(a(r))}),h=G(l=>{o("keydown",l)},l=>{const{key:_,shiftKey:m,target:g,currentTarget:b}=l;if(_===C.tab&&m){u();return}if(g!==b)return;const N=an(l);if(N){l.preventDefault();let S=i().filter(O=>O.focusable).map(O=>O.ref);switch(N){case"last":{S.reverse();break}case"prev":case"next":{N==="prev"&&S.reverse();const O=S.indexOf(b);S=n.value?un(S,O+1):S.slice(O+1);break}}Xe(()=>{ve(S)})}}),k=E(()=>t.value===a(r));return x(Ve,{rovingFocusGroupItemRef:f,tabIndex:E(()=>a(k)?0:-1),handleMousedown:v,handleFocus:w,handleKeydown:h}),{id:r,handleKeydown:h,handleFocus:w,handleMousedown:v}}});function hn(e,o,t,n,s,u){const i=F("el-roving-focus-collection-item");return y(),H(i,{id:e.id,focusable:e.focusable,active:e.active},{default:d(()=>[I(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var wn=L(gn,[["render",hn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const bn=se({trigger:Co.trigger,effect:{...we.effect,default:"light"},type:{type:V(String)},placement:{type:V(String),default:"bottom"},popperOptions:{type:V(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:V([Number,String]),default:0},maxHeight:{type:V([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:V(Object)},teleported:we.teleported}),Ge=se({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:vo}}),yn=se({onKeydown:{type:V(Function)}}),In=[C.down,C.pageDown,C.home],ze=[C.up,C.pageUp,C.end],En=[...In,...ze],{ElCollection:Cn,ElCollectionItem:$n,COLLECTION_INJECTION_KEY:kn,COLLECTION_ITEM_INJECTION_KEY:Tn}=Ke("Dropdown"),ie=Symbol("elDropdown"),{ButtonGroup:Sn}=pe,Fn=$({name:"ElDropdown",components:{ElButton:pe,ElButtonGroup:Sn,ElScrollbar:$o,ElDropdownCollection:Cn,ElTooltip:ko,ElRovingFocusGroup:_n,ElOnlyChild:To,ElIcon:Re,ArrowDown:_o},props:bn,emits:["visible-change","click","command"],setup(e,{emit:o}){const t=Te(),n=q("dropdown"),{t:s}=Ze(),u=T(),i=T(),r=T(null),f=T(null),v=T(null),w=T(null),h=T(!1),k=[C.enter,C.space,C.down],l=E(()=>({maxHeight:go(e.maxHeight)})),_=E(()=>[n.m(O.value)]),m=E(()=>ho(e.trigger)),g=Oe().value,b=E(()=>e.id||g);ke([u,m],([c,K],[Z])=>{var _e,ge,he;(_e=Z==null?void 0:Z.$el)!=null&&_e.removeEventListener&&Z.$el.removeEventListener("pointerenter",M),(ge=c==null?void 0:c.$el)!=null&&ge.removeEventListener&&c.$el.removeEventListener("pointerenter",M),(he=c==null?void 0:c.$el)!=null&&he.addEventListener&&K.includes("hover")&&c.$el.addEventListener("pointerenter",M)},{immediate:!0}),$e(()=>{var c,K;(K=(c=u.value)==null?void 0:c.$el)!=null&&K.removeEventListener&&u.value.$el.removeEventListener("pointerenter",M)});function N(){P()}function P(){var c;(c=r.value)==null||c.onClose()}function S(){var c;(c=r.value)==null||c.onOpen()}const O=wo();function D(...c){o("command",...c)}function M(){var c,K;(K=(c=u.value)==null?void 0:c.$el)==null||K.focus()}function J(){}function R(){const c=a(f);m.value.includes("hover")&&(c==null||c.focus()),w.value=null}function oe(c){w.value=c}function X(c){h.value||(c.preventDefault(),c.stopImmediatePropagation())}function Q(){o("visible-change",!0)}function ue(c){(c==null?void 0:c.type)==="keydown"&&f.value.focus()}function U(){o("visible-change",!1)}return x(ie,{contentRef:f,role:E(()=>e.role),triggerId:b,isUsingKeyboard:h,onItemEnter:J,onItemLeave:R}),x("elDropdown",{instance:t,dropdownSize:O,handleClick:N,commandHandler:D,trigger:ne(e,"trigger"),hideOnClick:ne(e,"hideOnClick")}),{t:s,ns:n,scrollbar:v,wrapStyle:l,dropdownTriggerKls:_,dropdownSize:O,triggerId:b,triggerKeys:k,currentTabId:w,handleCurrentTabIdChange:oe,handlerMainButtonClick:c=>{o("click",c)},handleEntryFocus:X,handleClose:P,handleOpen:S,handleBeforeShowTooltip:Q,handleShowTooltip:ue,handleBeforeHideTooltip:U,onFocusAfterTrapped:c=>{var K,Z;c.preventDefault(),(Z=(K=f.value)==null?void 0:K.focus)==null||Z.call(K,{preventScroll:!0})},popperRef:r,contentRef:f,triggeringElementRef:u,referenceElementRef:i}}});function Nn(e,o,t,n,s,u){var i;const r=F("el-dropdown-collection"),f=F("el-roving-focus-group"),v=F("el-scrollbar"),w=F("el-only-child"),h=F("el-tooltip"),k=F("el-button"),l=F("arrow-down"),_=F("el-icon"),m=F("el-button-group");return y(),A("div",{class:z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[p(h,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(i=e.referenceElementRef)==null?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},xe({content:d(()=>[p(v,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:d(()=>[p(f,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:d(()=>[p(r,null,{default:d(()=>[I(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:d(()=>[p(w,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:d(()=>[I(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(y(),H(m,{key:0},{default:d(()=>[p(k,te({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:d(()=>[I(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),p(k,te({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:d(()=>[p(_,{class:z(e.ns.e("icon"))},{default:d(()=>[p(l)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):ae("v-if",!0)],2)}var On=L(Fn,[["render",Nn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Rn=$({name:"DropdownItemImpl",components:{ElIcon:Re},props:Ge,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const t=q("dropdown"),{role:n}=B(ie,void 0),{collectionItemRef:s}=B(Tn,void 0),{collectionItemRef:u}=B(ln,void 0),{rovingFocusGroupItemRef:i,tabIndex:r,handleFocus:f,handleKeydown:v,handleMousedown:w}=B(Ve,void 0),h=Ne(s,u,i),k=E(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),l=G(_=>{const{code:m}=_;if(m===C.enter||m===C.space)return _.preventDefault(),_.stopImmediatePropagation(),o("clickimpl",_),!0},v);return{ns:t,itemRef:h,dataset:{[Pe]:""},role:k,tabIndex:r,handleFocus:f,handleKeydown:l,handleMousedown:w}}}),Bn=["aria-disabled","tabindex","role"];function Ln(e,o,t,n,s,u){const i=F("el-icon");return y(),A(oo,null,[e.divided?(y(),A("li",te({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ae("v-if",!0),j("li",te({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=r=>e.$emit("clickimpl",r)),onFocus:o[1]||(o[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:o[2]||(o[2]=de((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:o[4]||(o[4]=r=>e.$emit("pointermove",r)),onPointerleave:o[5]||(o[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(y(),H(i,{key:0},{default:d(()=>[(y(),H(eo(e.icon)))]),_:1})):ae("v-if",!0),I(e.$slots,"default")],16,Bn)],64)}var Dn=L(Rn,[["render",Ln],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Ue=()=>{const e=B("elDropdown",{}),o=E(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Mn=$({name:"ElDropdownItem",components:{ElDropdownCollectionItem:$n,ElRovingFocusItem:wn,ElDropdownItemImpl:Dn},inheritAttrs:!1,props:Ge,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:t}){const{elDropdown:n}=Ue(),s=Te(),u=T(null),i=E(()=>{var l,_;return(_=(l=a(u))==null?void 0:l.textContent)!=null?_:""}),{onItemEnter:r,onItemLeave:f}=B(ie,void 0),v=G(l=>(o("pointermove",l),l.defaultPrevented),be(l=>{if(e.disabled){f(l);return}const _=l.currentTarget;_===document.activeElement||_.contains(document.activeElement)||(r(l),l.defaultPrevented||_==null||_.focus())})),w=G(l=>(o("pointerleave",l),l.defaultPrevented),be(l=>{f(l)})),h=G(l=>{if(!e.disabled)return o("click",l),l.type!=="keydown"&&l.defaultPrevented},l=>{var _,m,g;if(e.disabled){l.stopImmediatePropagation();return}(_=n==null?void 0:n.hideOnClick)!=null&&_.value&&((m=n.handleClick)==null||m.call(n)),(g=n.commandHandler)==null||g.call(n,e.command,s,l)}),k=E(()=>({...e,...t}));return{handleClick:h,handlePointerMove:v,handlePointerLeave:w,textContent:i,propsAndAttrs:k}}});function An(e,o,t,n,s,u){var i;const r=F("el-dropdown-item-impl"),f=F("el-roving-focus-item"),v=F("el-dropdown-collection-item");return y(),H(v,{disabled:e.disabled,"text-value":(i=e.textValue)!=null?i:e.textContent},{default:d(()=>[p(f,{focusable:!e.disabled},{default:d(()=>[p(r,te(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:d(()=>[I(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Ye=L(Mn,[["render",An],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Pn=$({name:"ElDropdownMenu",props:yn,setup(e){const o=q("dropdown"),{_elDropdownSize:t}=Ue(),n=t.value,{focusTrapRef:s,onKeydown:u}=B(bo,void 0),{contentRef:i,role:r,triggerId:f}=B(ie,void 0),{collectionRef:v,getItems:w}=B(kn,void 0),{rovingFocusGroupRef:h,rovingFocusGroupRootStyle:k,tabIndex:l,onBlur:_,onFocus:m,onMousedown:g}=B(fe,void 0),{collectionRef:b}=B(me,void 0),N=E(()=>[o.b("menu"),o.bm("menu",n==null?void 0:n.value)]),P=Ne(i,v,s,h,b),S=G(D=>{var M;(M=e.onKeydown)==null||M.call(e,D)},D=>{const{currentTarget:M,code:J,target:R}=D;if(M.contains(R),C.tab===J&&D.stopImmediatePropagation(),D.preventDefault(),R!==a(i)||!En.includes(J))return;const X=w().filter(Q=>!Q.disabled).map(Q=>Q.ref);ze.includes(J)&&X.reverse(),ve(X)});return{size:n,rovingFocusGroupRootStyle:k,tabIndex:l,dropdownKls:N,role:r,triggerId:f,dropdownListWrapperRef:P,handleKeydown:D=>{S(D),u(D)},onBlur:_,onFocus:m,onMousedown:g}}}),Kn=["role","aria-labelledby"];function Vn(e,o,t,n,s,u){return y(),A("ul",{ref:e.dropdownListWrapperRef,class:z(e.dropdownKls),style:le(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...i)=>e.onBlur&&e.onBlur(...i)),onFocus:o[1]||(o[1]=(...i)=>e.onFocus&&e.onFocus(...i)),onKeydown:o[2]||(o[2]=de((...i)=>e.handleKeydown&&e.handleKeydown(...i),["self"])),onMousedown:o[3]||(o[3]=de((...i)=>e.onMousedown&&e.onMousedown(...i),["self"]))},[I(e.$slots,"default")],46,Kn)}var He=L(Pn,[["render",Vn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Gn=ce(On,{DropdownItem:Ye,DropdownMenu:He}),zn=ee(Ye),Un=ee(He);const Yn=e=>(ao("data-v-548bf95c"),e=e(),io(),e),Hn={class:"menubar",style:{left:"0"}},Jn={class:"menubar menubar-center"},jn={class:"menubar menubar-right",style:{right:"0"}},qn=Yn(()=>j("i",{class:"el-icon translate-icon el-tooltip__trigger"},[j("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},[j("path",{fill:"currentColor",d:"m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"})])],-1)),Wn={class:"menu-button"},Qn={__name:"BaseContainer",setup(e){const{t:o}=Se(),t=Fe(),n=no(),s=E(()=>window.history.length>1);function u(){t.go(-1)}function i(g){n.commit("changeLocale",g)}const r=E(()=>n.state.identity!=Ie),f=T(!1),v=T({}),w=T(null);function h(){f.value=!0}const k=T(!1);function l(){k.value||w.value.validate(g=>{if(g)k.value=!0,So(v.value.username,v.value.password).then(b=>{n.commit("setIdentity",Ie),t.replace({path:"/"}),ye.success(o("tip.loginSuccess"))}).catch(b=>{ye.error(b.data.msg)}).finally(()=>{k.value=!1});else return!1})}function _(){n.commit("setIdentity",Fo),t.replace({path:"/"})}const m=to({username:[{required:!0,message:o("holder.plsInputUsername"),trigger:"blur"}],password:[{required:!0,message:o("holder.plsInputPassword"),trigger:"blur"}]});return(g,b)=>{const N=pe,P=zn,S=Un,O=Gn,D=zo,M=qo,J=Uo,R=yo,oe=Io,X=Eo,Q=mo,ue=Go;return y(),H(ue,{style:{width:"100%"}},{default:d(()=>[p(D,{class:"main-header"},{default:d(()=>[j("div",Hn,[I(g.$slots,"left",{},()=>[so(p(N,{onClick:b[0]||(b[0]=U=>u())},{default:d(()=>[Y(W(a(o)("back")),1)]),_:1},512),[[ro,s.value]])],!0)]),j("div",Jn,[I(g.$slots,"center",{},void 0,!0)]),j("div",jn,[p(O,{onCommand:i},{dropdown:d(()=>[p(S,null,{default:d(()=>[p(P,{command:"zh-CN"},{default:d(()=>[Y("中文")]),_:1}),p(P,{command:"en"},{default:d(()=>[Y("English")]),_:1})]),_:1})]),default:d(()=>[qn]),_:1}),I(g.$slots,"right",{},()=>[j("div",Wn,[r.value?(y(),H(N,{key:0,onClick:h,text:""},{default:d(()=>[Y(W(a(o)("title.switchToAdmin")),1)]),_:1})):(y(),H(N,{key:1,onClick:_,text:""},{default:d(()=>[Y(W(a(o)("logout")),1)]),_:1}))])],!0)])]),_:3}),p(M,{class:"main-header-divider"}),p(J,{class:"main-body"},{default:d(()=>[I(g.$slots,"default",{},void 0,!0)]),_:3}),p(Q,{modelValue:f.value,"onUpdate:modelValue":b[5]||(b[5]=U=>f.value=U),width:"25%",title:a(o)("login"),draggable:""},{default:d(()=>[p(X,{model:v.value,rules:m,ref_key:"loginRef",ref:w,"status-icon":"","label-width":"auto"},{default:d(()=>[p(oe,{label:a(o)("label.username"),prop:"username"},{default:d(()=>[p(R,{type:"text",modelValue:v.value.username,"onUpdate:modelValue":b[1]||(b[1]=U=>v.value.username=U),"auto-complete":"off",placeholder:a(o)("holder.username")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),p(oe,{label:a(o)("label.password"),prop:"password"},{default:d(()=>[p(R,{type:"password",modelValue:v.value.password,"onUpdate:modelValue":b[2]||(b[2]=U=>v.value.password=U),"auto-complete":"off",placeholder:a(o)("holder.password"),onKeyup:b[3]||(b[3]=lo(U=>l(),["enter"]))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),p(N,{type:"primary",class:"login-button",onClick:b[4]||(b[4]=U=>l()),loading:k.value},{default:d(()=>[Y(W(a(o)("login")),1)]),_:1},8,["loading"])]),_:1},8,["modelValue","title"])]),_:3})}}},Xn=Be(Qn,[["__scopeId","data-v-548bf95c"]]);const Zn={class:"base-nav-item-text"},xn={__name:"BaseNavItem",props:{name:{required:!0,type:String}},setup(e){const o=e,{name:t}=uo(o),n=Fe();function s(){n.push({name:t.value})}const u=co(),i=po(()=>u.name===t.value);return(r,f)=>(y(),A("div",{class:z(["base-nav-item",{active:a(i)}]),onClick:s},[j("span",Zn,[I(r.$slots,"default",{},void 0,!0)])],2))}},re=Be(xn,[["__scopeId","data-v-f6ed0d6b"]]),it={__name:"AdminCenter",setup(e){const{t:o}=Se();return(t,n)=>{const s=F("router-view");return y(),H(Xn,null,{center:d(()=>[p(re,{name:"UserManage"},{default:d(()=>[Y(W(a(o)("title.userManage")),1)]),_:1}),p(re,{name:"AddressApply"},{default:d(()=>[Y(W(a(o)("title.addressApply")),1)]),_:1}),p(re,{name:"AddressQuery"},{default:d(()=>[Y(W(a(o)("title.addressQuery")),1)]),_:1}),p(re,{name:"NidApply"},{default:d(()=>[Y(W(a(o)("title.nidApply")),1)]),_:1})]),default:d(()=>[p(s)]),_:1})}}};export{it as default};