import{h as a,b as N,r as u,o as h,d as y,e as r,t as p,f as s,w as n,k as L,g,i as P}from"./index-7772a8bc.js";import{E as R,a as S}from"./el-descriptions-item-bda23adf.js";import{_ as F,E as B,a as j,b as z,c as T}from"./_plugin-vue_export-helper-696b3250.js";import{E as k}from"./el-message-099429df.js";import{a as C,R as D,b as M}from"./address-520d5059.js";import{I as U}from"./index-dd90b861.js";const W=U("send",!0,function(t){return a("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),a("path",{d:"M43.0001 5L22.1001 25.9",stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])});const q={class:"addr-apply-container"},G={class:"addr-generate"},Z={class:"addr-generate-header"},$={key:0,class:"addr-generate-result"},H={class:"addr-generate-result-header"},J={style:{display:"flex","align-items":"center","justify-content":"center"}},K={style:{"font-size":"18px"}},O={style:{"font-size":"18px"}},Q={__name:"AddressApply",setup(t){const{t:e}=N(),o=u({}),b=u(null),i=u(""),c=u(!1),m=u(0);function w(){b.value.validate(v=>{if(v)c.value=!0,C(o.value).then(l=>{k.success(e("tip.applySuccess")),i.value=l.data.address||"",m.value=D}).catch(l=>{k.error(l.data.msg),m.value=M}).finally(()=>{c.value=!1});else return})}const x={phoneNumber:[{required:!0,message:e("holder.plsInputPhoneNumber"),trigger:"blur"}],password:[{required:!0,message:e("holder.plsInputPassword"),trigger:"blur"}]};return(v,l)=>{const _=z,f=T,I=B,V=j,A=S,E=R;return h(),y("div",q,[r("div",G,[r("div",Z,[r("span",null,p(s(e)("label.addressApply")),1)]),a(I,{model:o.value,"label-width":"auto",class:"addr-generate-form",ref_key:"applyFormRef",ref:b,rules:x},{default:n(()=>[a(f,{label:s(e)("label.phoneNumber"),prop:"phoneNumber"},{default:n(()=>[a(_,{modelValue:o.value.phoneNumber,"onUpdate:modelValue":l[0]||(l[0]=d=>o.value.phoneNumber=d),placeholder:s(e)("holder.plsInputPhoneNumber")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:s(e)("label.password"),prop:"password"},{default:n(()=>[a(_,{modelValue:o.value.password,"onUpdate:modelValue":l[1]||(l[1]=d=>o.value.password=d),placeholder:s(e)("holder.plsInputPassword"),"show-password":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:s(e)("label.ISPPrefix")},{default:n(()=>[a(_,{modelValue:o.value.prefix,"onUpdate:modelValue":l[2]||(l[2]=d=>o.value.prefix=d),placeholder:s(e)("holder.plsInputStandardISPPrefix")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"]),r("div",null,[a(V,{type:"primary",onClick:l[3]||(l[3]=d=>w()),icon:s(W),class:"addr-generate-button",loading:c.value},{default:n(()=>[P(p(s(e)("button.generateAddress")),1)]),_:1},8,["icon","loading"])])]),m.value?(h(),y("div",$,[r("div",H,p(i.value?s(e)("label.addressApplySuccess"):s(e)("label.addressApplyFail")),1),i.value?(h(),L(E,{key:0,column:2,size:"default",border:""},{default:n(()=>[a(A,{align:"center"},{label:n(()=>[r("div",J,[r("span",K,p(s(e)("label.address")),1)])]),default:n(()=>[r("span",O,p(i.value),1)]),_:1})]),_:1})):g("",!0)])):g("",!0)])}}},te=F(Q,[["__scopeId","data-v-bc653fae"]]);export{te as default};
