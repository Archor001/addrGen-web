System.register(["./index-legacy-321203bb.js","./_plugin-vue_export-helper-legacy-16175a53.js","./el-message-legacy-a5d31ecb.js","./user-legacy-5b58ae80.js"],(function(e,l){"use strict";var a,r,s,t,o,d,n,i,u,p,m,c,b,g,h,f,v,x;return{setters:[e=>{a=e.b,r=e.r,s=e.o,t=e.d,o=e.e,d=e.t,n=e.f,i=e.h,u=e.w,p=e.i,m=e.a5},e=>{c=e._,b=e.b,g=e.c,h=e.E,f=e.a},e=>{v=e.E},e=>{x=e.r}],execute:function(){var l=document.createElement("style");l.textContent=".nid-apply[data-v-6be44ea0]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:10px}.nid-apply-header[data-v-6be44ea0]{width:90%;margin:0 auto 30px;padding:10px;font-size:20px;font-weight:700;color:#343a40;font-family:Times New Roman,Times,serif,Georgia,Microsoft YaHei,sans-serif;text-align:left;border-bottom:1px solid #eeeeee}.nid-apply-form[data-v-6be44ea0]{width:60%}\n",document.head.appendChild(l);const y={class:"nid-apply"},w={class:"nid-apply-header"},I={style:{display:"flex","align-items":"center",margin:"5px 0 15px"}};e("U",c({__name:"UserRegister",emits:["register"],setup(e,{emit:l}){const{t:c}=a(),_=r({}),V=r(null),U=r(!1),k={userID:[{required:!0,message:c("holder.plsInputUserID"),trigger:"change"}],password:[{required:!0,message:c("holder.plsInputPassword"),trigger:"change"}],phoneNumber:[{required:!0,message:c("holder.plsInputPhoneNumber"),trigger:"change"}],username:[{required:!0,message:c("holder.plsInputUsername"),trigger:"change"}]};return(e,a)=>{const r=b,N=g,D=h,j=f;return s(),t("div",y,[o("span",w,d(n(c)("button.register")+n(c)("label.user")),1),i(D,{model:_.value,"label-width":"auto",class:"nid-apply-form",ref_key:"nidFormRef",ref:V,rules:k},{default:u((()=>[i(N,{label:n(c)("label.userID"),prop:"userID"},{default:u((()=>[i(r,{modelValue:_.value.userID,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value.userID=e),placeholder:n(c)("holder.plsInputUserID")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(N,{label:n(c)("label.password"),prop:"password"},{default:u((()=>[i(r,{modelValue:_.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value.password=e),type:"password","show-password":!0,placeholder:n(c)("holder.plsInputPassword")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(N,{label:n(c)("label.phoneNumber"),prop:"phoneNumber"},{default:u((()=>[i(r,{modelValue:_.value.phoneNumber,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value.phoneNumber=e),placeholder:n(c)("holder.plsInputPhoneNumber")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),i(N,{label:n(c)("label.username"),prop:"username"},{default:u((()=>[i(r,{modelValue:_.value.username,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value.username=e),placeholder:n(c)("holder.plsInputUsername")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"]),o("div",I,[i(j,{type:"primary",onClick:a[4]||(a[4]=e=>{V.value.validate((e=>{e&&(U.value=!0,x(_.value).then((e=>{l("register",e.data.user),v.success(c("tip.registerSuccess"))})).catch((e=>{v.error(e.data.msg)})).finally((()=>{U.value=!1})))}))}),class:"nid-apply-button",loading:U.value},{default:u((()=>[p(d(n(c)("button.register")),1)])),_:1},8,["loading"]),m(e.$slots,"cancel",{},void 0,!0)])])}}},[["__scopeId","data-v-6be44ea0"]]))}}}));