import{Z as $,_ as He,$ as j,Q as y,o as E,d as P,a5 as I,a0 as z,f as u,a8 as te,ad as de,ae as x,a9 as le,aa as V,g as re,r as T,ab as X,P as B,ak as Ye,ai as Ce,aH as Je,aI as oe,U as $e,j as O,k as J,w as c,h as g,aJ as je,aK as qe,V as We,T as ke,ah as Qe,at as Ze,aL as ne,e as Y,a7 as Xe,a3 as ue,a6 as xe,b as eo,a as Te,u as oo,c as no,i as Z,ar as to,t as se,a1 as lo,aj as so,aM as ro,aN as ao,ac as io,aO as uo,aP as co}from"./index-7772a8bc.js";import{e as G,f as po,u as he,E as mo,a as fo,O as vo,g as Se,w as we,d as _o}from"./el-scrollbar-3a6080d8.js";import{A as L,I as C,a3 as go,a7 as Fe,F as ho,a as ce,C as Oe,O as wo,a8 as bo,a9 as Io,y as yo,aa as Eo,_ as Ne,b as Co,c as $o,E as ko}from"./_plugin-vue_export-helper-696b3250.js";import{E as be}from"./el-message-099429df.js";import{U as Ie,l as To,a as So}from"./user-f7a87506.js";const Fo=$({name:"ElContainer"}),Oo=$({...Fo,props:{direction:{type:String}},setup(e){const o=e,t=He(),n=j("container"),s=y(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:t&&t.default?t.default().some(a=>{const r=a.type.name;return r==="ElHeader"||r==="ElFooter"}):!1);return(i,a)=>(E(),P("section",{class:z([u(n).b(),u(n).is("vertical",u(s))])},[I(i.$slots,"default")],2))}});var No=L(Oo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Ro=$({name:"ElAside"}),Bo=$({...Ro,props:{width:{type:String,default:null}},setup(e){const o=e,t=j("aside"),n=y(()=>o.width?t.cssVarBlock({width:o.width}):{});return(s,i)=>(E(),P("aside",{class:z(u(t).b()),style:te(u(n))},[I(s.$slots,"default")],6))}});var Re=L(Bo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Lo=$({name:"ElFooter"}),Do=$({...Lo,props:{height:{type:String,default:null}},setup(e){const o=e,t=j("footer"),n=y(()=>o.height?t.cssVarBlock({height:o.height}):{});return(s,i)=>(E(),P("footer",{class:z(u(t).b()),style:te(u(n))},[I(s.$slots,"default")],6))}});var Be=L(Do,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Mo=$({name:"ElHeader"}),Po=$({...Mo,props:{height:{type:String,default:null}},setup(e){const o=e,t=j("header"),n=y(()=>o.height?t.cssVarBlock({height:o.height}):{});return(s,i)=>(E(),P("header",{class:z(u(t).b()),style:te(u(n))},[I(s.$slots,"default")],6))}});var Le=L(Po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Ko=$({name:"ElMain"}),Ao=$({...Ko,setup(e){const o=j("main");return(t,n)=>(E(),P("main",{class:z(u(o).b())},[I(t.$slots,"default")],2))}});var De=L(Ao,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Vo=de(No,{Aside:Re,Footer:Be,Header:Le,Main:De});x(Re);x(Be);const Go=x(Le),zo=x(De),Uo=le({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:V(String),default:"solid"}}),Ho=$({name:"ElDivider"}),Yo=$({...Ho,props:Uo,setup(e){const o=e,t=j("divider"),n=y(()=>t.cssVar({"border-style":o.borderStyle}));return(s,i)=>(E(),P("div",{class:z([u(t).b(),u(t).m(s.direction)]),style:te(u(n)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(E(),P("div",{key:0,class:z([u(t).e("text"),u(t).is(s.contentPosition)])},[I(s.$slots,"default")],2)):re("v-if",!0)],6))}});var Jo=L(Yo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const jo=de(Jo),qo=$({inheritAttrs:!1});function Wo(e,o,t,n,s,i){return I(e.$slots,"default")}var Qo=L(qo,[["render",Wo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Zo=$({name:"ElCollectionItem",inheritAttrs:!1});function Xo(e,o,t,n,s,i){return I(e.$slots,"default")}var xo=L(Zo,[["render",Xo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Me="data-el-collection-item",Pe=e=>{const o="El".concat(e,"Collection"),t="".concat(o,"Item"),n=Symbol(o),s=Symbol(t),i={...Qo,name:o,setup(){const r=T(null),m=new Map;X(n,{itemMap:m,getItems:()=>{const w=u(r);if(!w)return[];const h=Array.from(w.querySelectorAll("[".concat(Me,"]")));return[...m.values()].sort((l,v)=>h.indexOf(l.ref)-h.indexOf(v.ref))},collectionRef:r})}},a={...xo,name:t,setup(r,{attrs:m}){const f=T(null),w=B(n,void 0);X(s,{collectionItemRef:f}),Ye(()=>{const h=u(f);h&&w.itemMap.set(h,{ref:h,...m})}),Ce(()=>{const h=u(f);w.itemMap.delete(h)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:s,ElCollection:i,ElCollectionItem:a}},en=le({style:{type:V([String,Array,Object])},currentTabId:{type:V(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:V(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:on,ElCollectionItem:nn,COLLECTION_INJECTION_KEY:pe,COLLECTION_ITEM_INJECTION_KEY:tn}=Pe("RovingFocusGroup"),me=Symbol("elRovingFocusGroup"),Ke=Symbol("elRovingFocusGroupItem"),ln={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},sn=(e,o)=>{if(o!=="rtl")return e;switch(e){case C.right:return C.left;case C.left:return C.right;default:return e}},rn=(e,o,t)=>{const n=sn(e.key,t);if(!(o==="vertical"&&[C.left,C.right].includes(n))&&!(o==="horizontal"&&[C.up,C.down].includes(n)))return ln[n]},an=(e,o)=>e.map((t,n)=>e[(n+o)%e.length]),fe=e=>{const{activeElement:o}=document;for(const t of e)if(t===o||(t.focus(),o!==document.activeElement))return},ye="currentTabIdChange",Ee="rovingFocusGroup.entryFocus",un={bubbles:!1,cancelable:!0},dn=$({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:en,emits:[ye,"entryFocus"],setup(e,{emit:o}){var t;const n=T((t=e.currentTabId||e.defaultCurrentTabId)!=null?t:null),s=T(!1),i=T(!1),a=T(null),{getItems:r}=B(pe,void 0),m=y(()=>[{outline:"none"},e.style]),f=p=>{o(ye,p)},w=()=>{s.value=!0},h=G(p=>{var _;(_=e.onMousedown)==null||_.call(e,p)},()=>{i.value=!0}),k=G(p=>{var _;(_=e.onFocus)==null||_.call(e,p)},p=>{const _=!u(i),{target:b,currentTarget:F}=p;if(b===F&&_&&!u(s)){const K=new Event(Ee,un);if(F==null||F.dispatchEvent(K),!K.defaultPrevented){const S=r().filter(R=>R.focusable),N=S.find(R=>R.active),D=S.find(R=>R.id===u(n)),H=[N,D,...S].filter(Boolean).map(R=>R.ref);fe(H)}}i.value=!1}),l=G(p=>{var _;(_=e.onBlur)==null||_.call(e,p)},()=>{s.value=!1}),v=(...p)=>{o("entryFocus",...p)};X(me,{currentTabbedId:Je(n),loop:oe(e,"loop"),tabIndex:y(()=>u(s)?-1:0),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:m,orientation:oe(e,"orientation"),dir:oe(e,"dir"),onItemFocus:f,onItemShiftTab:w,onBlur:l,onFocus:k,onMousedown:h}),$e(()=>e.currentTabId,p=>{n.value=p!=null?p:null}),go(a,Ee,v)}});function cn(e,o,t,n,s,i){return I(e.$slots,"default")}var pn=L(dn,[["render",cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const mn=$({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:on,ElRovingFocusGroupImpl:pn}});function fn(e,o,t,n,s,i){const a=O("el-roving-focus-group-impl"),r=O("el-focus-group-collection");return E(),J(r,null,{default:c(()=>[g(a,je(qe(e.$attrs)),{default:c(()=>[I(e.$slots,"default")]),_:3},16)]),_:3})}var vn=L(mn,[["render",fn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const _n=$({components:{ElRovingFocusCollectionItem:nn},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:t,loop:n,onItemFocus:s,onItemShiftTab:i}=B(me,void 0),{getItems:a}=B(pe,void 0),r=Fe(),m=T(null),f=G(l=>{o("mousedown",l)},l=>{e.focusable?s(u(r)):l.preventDefault()}),w=G(l=>{o("focus",l)},()=>{s(u(r))}),h=G(l=>{o("keydown",l)},l=>{const{key:v,shiftKey:p,target:_,currentTarget:b}=l;if(v===C.tab&&p){i();return}if(_!==b)return;const F=rn(l);if(F){l.preventDefault();let S=a().filter(N=>N.focusable).map(N=>N.ref);switch(F){case"last":{S.reverse();break}case"prev":case"next":{F==="prev"&&S.reverse();const N=S.indexOf(b);S=n.value?an(S,N+1):S.slice(N+1);break}}We(()=>{fe(S)})}}),k=y(()=>t.value===u(r));return X(Ke,{rovingFocusGroupItemRef:m,tabIndex:y(()=>u(k)?0:-1),handleMousedown:f,handleFocus:w,handleKeydown:h}),{id:r,handleKeydown:h,handleFocus:w,handleMousedown:f}}});function gn(e,o,t,n,s,i){const a=O("el-roving-focus-collection-item");return E(),J(a,{id:e.id,focusable:e.focusable,active:e.active},{default:c(()=>[I(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var hn=L(_n,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const wn=le({trigger:po.trigger,effect:{...he.effect,default:"light"},type:{type:V(String)},placement:{type:V(String),default:"bottom"},popperOptions:{type:V(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:V([Number,String]),default:0},maxHeight:{type:V([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:V(Object)},teleported:he.teleported}),Ae=le({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ho}}),bn=le({onKeydown:{type:V(Function)}}),In=[C.down,C.pageDown,C.home],Ve=[C.up,C.pageUp,C.end],yn=[...In,...Ve],{ElCollection:En,ElCollectionItem:Cn,COLLECTION_INJECTION_KEY:$n,COLLECTION_ITEM_INJECTION_KEY:kn}=Pe("Dropdown"),ae=Symbol("elDropdown"),{ButtonGroup:Tn}=ce,Sn=$({name:"ElDropdown",components:{ElButton:ce,ElButtonGroup:Tn,ElScrollbar:mo,ElDropdownCollection:En,ElTooltip:fo,ElRovingFocusGroup:vn,ElOnlyChild:vo,ElIcon:Oe,ArrowDown:wo},props:wn,emits:["visible-change","click","command"],setup(e,{emit:o}){const t=ke(),n=j("dropdown"),{t:s}=Qe(),i=T(),a=T(),r=T(null),m=T(null),f=T(null),w=T(null),h=T(!1),k=[C.enter,C.space,C.down],l=y(()=>({maxHeight:bo(e.maxHeight)})),v=y(()=>[n.m(N.value)]),p=y(()=>Io(e.trigger)),_=Fe().value,b=y(()=>e.id||_);$e([i,p],([d,A],[Q])=>{var ve,_e,ge;(ve=Q==null?void 0:Q.$el)!=null&&ve.removeEventListener&&Q.$el.removeEventListener("pointerenter",M),(_e=d==null?void 0:d.$el)!=null&&_e.removeEventListener&&d.$el.removeEventListener("pointerenter",M),(ge=d==null?void 0:d.$el)!=null&&ge.addEventListener&&A.includes("hover")&&d.$el.addEventListener("pointerenter",M)},{immediate:!0}),Ce(()=>{var d,A;(A=(d=i.value)==null?void 0:d.$el)!=null&&A.removeEventListener&&i.value.$el.removeEventListener("pointerenter",M)});function F(){K()}function K(){var d;(d=r.value)==null||d.onClose()}function S(){var d;(d=r.value)==null||d.onOpen()}const N=yo();function D(...d){o("command",...d)}function M(){var d,A;(A=(d=i.value)==null?void 0:d.$el)==null||A.focus()}function H(){}function R(){const d=u(m);p.value.includes("hover")&&(d==null||d.focus()),w.value=null}function ee(d){w.value=d}function W(d){h.value||(d.preventDefault(),d.stopImmediatePropagation())}function q(){o("visible-change",!0)}function ie(d){(d==null?void 0:d.type)==="keydown"&&m.value.focus()}function U(){o("visible-change",!1)}return X(ae,{contentRef:m,role:y(()=>e.role),triggerId:b,isUsingKeyboard:h,onItemEnter:H,onItemLeave:R}),X("elDropdown",{instance:t,dropdownSize:N,handleClick:F,commandHandler:D,trigger:oe(e,"trigger"),hideOnClick:oe(e,"hideOnClick")}),{t:s,ns:n,scrollbar:f,wrapStyle:l,dropdownTriggerKls:v,dropdownSize:N,triggerId:b,triggerKeys:k,currentTabId:w,handleCurrentTabIdChange:ee,handlerMainButtonClick:d=>{o("click",d)},handleEntryFocus:W,handleClose:K,handleOpen:S,handleBeforeShowTooltip:q,handleShowTooltip:ie,handleBeforeHideTooltip:U,onFocusAfterTrapped:d=>{var A,Q;d.preventDefault(),(Q=(A=m.value)==null?void 0:A.focus)==null||Q.call(A,{preventScroll:!0})},popperRef:r,contentRef:m,triggeringElementRef:i,referenceElementRef:a}}});function Fn(e,o,t,n,s,i){var a;const r=O("el-dropdown-collection"),m=O("el-roving-focus-group"),f=O("el-scrollbar"),w=O("el-only-child"),h=O("el-tooltip"),k=O("el-button"),l=O("arrow-down"),v=O("el-icon"),p=O("el-button-group");return E(),P("div",{class:z([e.ns.b(),e.ns.is("disabled",e.disabled)])},[g(h,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(a=e.referenceElementRef)==null?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Ze({content:c(()=>[g(f,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:c(()=>[g(m,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:c(()=>[g(r,null,{default:c(()=>[I(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:c(()=>[g(w,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:c(()=>[I(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(E(),J(p,{key:0},{default:c(()=>[g(k,ne({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:c(()=>[I(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),g(k,ne({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:c(()=>[g(v,{class:z(e.ns.e("icon"))},{default:c(()=>[g(l)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):re("v-if",!0)],2)}var On=L(Sn,[["render",Fn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Nn=$({name:"DropdownItemImpl",components:{ElIcon:Oe},props:Ae,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const t=j("dropdown"),{role:n}=B(ae,void 0),{collectionItemRef:s}=B(kn,void 0),{collectionItemRef:i}=B(tn,void 0),{rovingFocusGroupItemRef:a,tabIndex:r,handleFocus:m,handleKeydown:f,handleMousedown:w}=B(Ke,void 0),h=Se(s,i,a),k=y(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),l=G(v=>{const{code:p}=v;if(p===C.enter||p===C.space)return v.preventDefault(),v.stopImmediatePropagation(),o("clickimpl",v),!0},f);return{ns:t,itemRef:h,dataset:{[Me]:""},role:k,tabIndex:r,handleFocus:m,handleKeydown:l,handleMousedown:w}}}),Rn=["aria-disabled","tabindex","role"];function Bn(e,o,t,n,s,i){const a=O("el-icon");return E(),P(xe,null,[e.divided?(E(),P("li",ne({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):re("v-if",!0),Y("li",ne({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=r=>e.$emit("clickimpl",r)),onFocus:o[1]||(o[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:o[2]||(o[2]=ue((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:o[4]||(o[4]=r=>e.$emit("pointermove",r)),onPointerleave:o[5]||(o[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(E(),J(a,{key:0},{default:c(()=>[(E(),J(Xe(e.icon)))]),_:1})):re("v-if",!0),I(e.$slots,"default")],16,Rn)],64)}var Ln=L(Nn,[["render",Bn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Ge=()=>{const e=B("elDropdown",{}),o=y(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},Dn=$({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Cn,ElRovingFocusItem:hn,ElDropdownItemImpl:Ln},inheritAttrs:!1,props:Ae,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:t}){const{elDropdown:n}=Ge(),s=ke(),i=T(null),a=y(()=>{var l,v;return(v=(l=u(i))==null?void 0:l.textContent)!=null?v:""}),{onItemEnter:r,onItemLeave:m}=B(ae,void 0),f=G(l=>(o("pointermove",l),l.defaultPrevented),we(l=>{if(e.disabled){m(l);return}const v=l.currentTarget;v===document.activeElement||v.contains(document.activeElement)||(r(l),l.defaultPrevented||v==null||v.focus())})),w=G(l=>(o("pointerleave",l),l.defaultPrevented),we(l=>{m(l)})),h=G(l=>{if(!e.disabled)return o("click",l),l.type!=="keydown"&&l.defaultPrevented},l=>{var v,p,_;if(e.disabled){l.stopImmediatePropagation();return}(v=n==null?void 0:n.hideOnClick)!=null&&v.value&&((p=n.handleClick)==null||p.call(n)),(_=n.commandHandler)==null||_.call(n,e.command,s,l)}),k=y(()=>({...e,...t}));return{handleClick:h,handlePointerMove:f,handlePointerLeave:w,textContent:a,propsAndAttrs:k}}});function Mn(e,o,t,n,s,i){var a;const r=O("el-dropdown-item-impl"),m=O("el-roving-focus-item"),f=O("el-dropdown-collection-item");return E(),J(f,{disabled:e.disabled,"text-value":(a=e.textValue)!=null?a:e.textContent},{default:c(()=>[g(m,{focusable:!e.disabled},{default:c(()=>[g(r,ne(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:c(()=>[I(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var ze=L(Dn,[["render",Mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Pn=$({name:"ElDropdownMenu",props:bn,setup(e){const o=j("dropdown"),{_elDropdownSize:t}=Ge(),n=t.value,{focusTrapRef:s,onKeydown:i}=B(Eo,void 0),{contentRef:a,role:r,triggerId:m}=B(ae,void 0),{collectionRef:f,getItems:w}=B($n,void 0),{rovingFocusGroupRef:h,rovingFocusGroupRootStyle:k,tabIndex:l,onBlur:v,onFocus:p,onMousedown:_}=B(me,void 0),{collectionRef:b}=B(pe,void 0),F=y(()=>[o.b("menu"),o.bm("menu",n==null?void 0:n.value)]),K=Se(a,f,s,h,b),S=G(D=>{var M;(M=e.onKeydown)==null||M.call(e,D)},D=>{const{currentTarget:M,code:H,target:R}=D;if(M.contains(R),C.tab===H&&D.stopImmediatePropagation(),D.preventDefault(),R!==u(a)||!yn.includes(H))return;const W=w().filter(q=>!q.disabled).map(q=>q.ref);Ve.includes(H)&&W.reverse(),fe(W)});return{size:n,rovingFocusGroupRootStyle:k,tabIndex:l,dropdownKls:F,role:r,triggerId:m,dropdownListWrapperRef:K,handleKeydown:D=>{S(D),i(D)},onBlur:v,onFocus:p,onMousedown:_}}}),Kn=["role","aria-labelledby"];function An(e,o,t,n,s,i){return E(),P("ul",{ref:e.dropdownListWrapperRef,class:z(e.dropdownKls),style:te(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...a)=>e.onBlur&&e.onBlur(...a)),onFocus:o[1]||(o[1]=(...a)=>e.onFocus&&e.onFocus(...a)),onKeydown:o[2]||(o[2]=ue((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:o[3]||(o[3]=ue((...a)=>e.onMousedown&&e.onMousedown(...a),["self"]))},[I(e.$slots,"default")],46,Kn)}var Ue=L(Pn,[["render",An],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Vn=de(On,{DropdownItem:ze,DropdownMenu:Ue}),Gn=x(ze),zn=x(Ue);const Un=e=>(ro("data-v-548bf95c"),e=e(),ao(),e),Hn={class:"menubar",style:{left:"0"}},Yn={class:"menubar menubar-center"},Jn={class:"menubar menubar-right",style:{right:"0"}},jn=Un(()=>Y("i",{class:"el-icon translate-icon el-tooltip__trigger"},[Y("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},[Y("path",{fill:"currentColor",d:"m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"})])],-1)),qn={class:"menu-button"},Wn={__name:"BaseContainer",setup(e){const{t:o}=eo(),t=Te(),n=oo(),s=y(()=>window.history.length>1);function i(){t.go(-1)}function a(_){n.commit("changeLocale",_)}const r=y(()=>n.state.identity!=Ie),m=T(!1),f=T({}),w=T(null);function h(){m.value=!0}const k=T(!1);function l(){k.value||w.value.validate(_=>{if(_)k.value=!0,To(f.value.username,f.value.password).then(b=>{n.commit("setIdentity",Ie),t.replace({path:"/"}),be.success(o("tip.loginSuccess"))}).catch(b=>{be.error(b.data.msg)}).finally(()=>{k.value=!1});else return!1})}function v(){n.commit("setIdentity",So),t.replace({path:"/"})}const p=no({username:[{required:!0,message:o("holder.plsInputUsername"),trigger:"blur"}],password:[{required:!0,message:o("holder.plsInputPassword"),trigger:"blur"}]});return(_,b)=>{const F=ce,K=Gn,S=zn,N=Vn,D=Go,M=jo,H=zo,R=Co,ee=$o,W=ko,q=_o,ie=Vo;return E(),J(ie,{style:{width:"100%"}},{default:c(()=>[g(D,{class:"main-header"},{default:c(()=>[Y("div",Hn,[I(_.$slots,"left",{},()=>[lo(g(F,{onClick:b[0]||(b[0]=U=>i())},{default:c(()=>[Z(se(u(o)("back")),1)]),_:1},512),[[so,s.value]])],!0)]),Y("div",Yn,[I(_.$slots,"center",{},void 0,!0)]),Y("div",Jn,[g(N,{onCommand:a},{dropdown:c(()=>[g(S,null,{default:c(()=>[g(K,{command:"zh-CN"},{default:c(()=>[Z("中文")]),_:1}),g(K,{command:"en"},{default:c(()=>[Z("English")]),_:1})]),_:1})]),default:c(()=>[jn]),_:1}),I(_.$slots,"right",{},()=>[Y("div",qn,[r.value?(E(),J(F,{key:0,onClick:h,text:""},{default:c(()=>[Z(se(u(o)("title.switchToAdmin")),1)]),_:1})):(E(),J(F,{key:1,onClick:v,text:""},{default:c(()=>[Z(se(u(o)("logout")),1)]),_:1}))])],!0)])]),_:3}),g(M,{class:"main-header-divider"}),g(H,{class:"main-body"},{default:c(()=>[I(_.$slots,"default",{},void 0,!0)]),_:3}),g(q,{modelValue:m.value,"onUpdate:modelValue":b[5]||(b[5]=U=>m.value=U),width:"25%",title:u(o)("login"),draggable:""},{default:c(()=>[g(W,{model:f.value,rules:p,ref_key:"loginRef",ref:w,"status-icon":"","label-width":"auto"},{default:c(()=>[g(ee,{label:u(o)("label.username"),prop:"username"},{default:c(()=>[g(R,{type:"text",modelValue:f.value.username,"onUpdate:modelValue":b[1]||(b[1]=U=>f.value.username=U),"auto-complete":"off",placeholder:u(o)("holder.username")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),g(ee,{label:u(o)("label.password"),prop:"password"},{default:c(()=>[g(R,{type:"password",modelValue:f.value.password,"onUpdate:modelValue":b[2]||(b[2]=U=>f.value.password=U),"auto-complete":"off",placeholder:u(o)("holder.password"),onKeyup:b[3]||(b[3]=to(U=>l(),["enter"]))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),g(F,{type:"primary",class:"login-button",onClick:b[4]||(b[4]=U=>l()),loading:k.value},{default:c(()=>[Z(se(u(o)("login")),1)]),_:1},8,["loading"])]),_:1},8,["modelValue","title"])]),_:3})}}},st=Ne(Wn,[["__scopeId","data-v-548bf95c"]]);const Qn={class:"base-nav-item-text"},Zn={__name:"BaseNavItem",props:{name:{required:!0,type:String}},setup(e){const o=e,{name:t}=io(o),n=Te();function s(){n.push({name:t.value})}const i=uo(),a=co(()=>i.name===t.value);return(r,m)=>(E(),P("div",{class:z(["base-nav-item",{active:u(a)}]),onClick:s},[Y("span",Qn,[I(r.$slots,"default",{},void 0,!0)])],2))}},rt=Ne(Zn,[["__scopeId","data-v-f6ed0d6b"]]);export{st as B,rt as a};