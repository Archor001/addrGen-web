System.register(["./index-legacy-321203bb.js","./_plugin-vue_export-helper-legacy-16175a53.js","./user-legacy-5b58ae80.js"],(function(e,a){"use strict";var l,t,o,r,d,s,n,i,p,u,g,c,m,f,b,h,v,x,w,y;return{setters:[e=>{l=e.u,t=e.a,o=e.b,r=e.r,d=e.c,s=e.o,n=e.d,i=e.e,p=e.t,u=e.f,g=e.g,c=e.h,m=e.w,f=e.i},e=>{b=e._,h=e.E,v=e.a,x=e.b,w=e.c},e=>{y=e.l}],execute:function(){var a=document.createElement("style");a.textContent="#login[data-v-4a09fb89]{position:relative;width:100%;height:100%;background-color:#f6f6f6;background-size:100% 100%;margin:0;padding:0}.login-page[data-v-4a09fb89]{position:relative;top:25%;margin:0 auto;width:400px;padding:35px;border-radius:5px;background:#fff;border:1px solid #eaeaea}.login-page .login-button[data-v-4a09fb89]{width:60%;margin-top:30px}.login-page .login-tip[data-v-4a09fb89]{width:95%;margin:0 auto 15px;padding:10px 0;font-size:15px;color:#9f3a38;background-color:#fff6f6;border:1px solid #ebcbcc;border-radius:8px}\n",document.head.appendChild(a);const _={id:"login"},k={class:"login-page"},V={class:"title",style:{"margin-bottom":"30px"}},j={key:0,class:"login-tip"};e("default",b({__name:"Login",setup(e){const a=l(),b=t(),{t:C}=o(),U=r(null),q=r(""),z=d({username:"",password:""}),E={username:[{required:!0,message:C("holder.username"),trigger:"blur"}],password:[{required:!0,message:C("holder.password"),trigger:"blur"}]};return(e,l)=>{const t=x,o=w,r=h,d=v;return s(),n("div",_,[i("div",k,[i("h3",V,p(u(C)("login")),1),q.value.length>0?(s(),n("div",j,p(q.value),1)):g("",!0),c(r,{model:z,rules:E,"status-icon":"",ref_key:"loginForm",ref:U,"label-position":"left","label-width":"80px"},{default:m((()=>[c(o,{label:u(C)("label.username"),prop:"username"},{default:m((()=>[c(t,{type:"text",modelValue:z.username,"onUpdate:modelValue":l[0]||(l[0]=e=>z.username=e),"auto-complete":"off",placeholder:u(C)("holder.username")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),c(o,{label:u(C)("label.password"),prop:"password"},{default:m((()=>[c(t,{type:"password",modelValue:z.password,"onUpdate:modelValue":l[1]||(l[1]=e=>z.password=e),"auto-complete":"off",placeholder:u(C)("holder.password")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"]),c(d,{type:"primary",class:"login-button",onClick:l[2]||(l[2]=e=>{U.value.validate((e=>{if(!e)return!1;y(z.username,z.password).then((e=>{a.commit("setIdentity",e.data.data.identity),a.commit("setUsername",e.data.data.username),b.replace({path:"/"})})).catch((e=>{e.data.msg&&e.data.msg.length>0&&(q.value=e.data.msg)}))}))})},{default:m((()=>[f(p(u(C)("login")),1)])),_:1})])])}}},[["__scopeId","data-v-4a09fb89"]]))}}}));