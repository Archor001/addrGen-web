System.register(["./index-legacy-5d37c138.js"],(function(e,t){"use strict";var i,o;return{setters:[e=>{i=e.A,o=e.h}],execute:function(){var t=document.createElement("style");t.textContent=".el-icon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{-webkit-transform:rotateZ(0);transform:rotate(0)}to{-webkit-transform:rotateZ(360deg);transform:rotate(360deg)}}@keyframes rotating{0%{-webkit-transform:rotateZ(0);transform:rotate(0)}to{-webkit-transform:rotateZ(360deg);transform:rotate(360deg)}}.el-icon{--color:inherit;height:1em;width:1em;line-height:1em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;fill:currentColor;color:var(--color);font-size:inherit}.el-icon.is-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}\n",document.head.appendChild(t),e("I",(function(e,t,s){return{name:"icon-"+e,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(l){var a="icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1),c=i(r,n);return function(){var i=l.size,n=l.strokeWidth,r=l.strokeLinecap,p=l.strokeLinejoin,u=l.theme,f=l.fill,h=l.spin,k=function(e,t,i){var o="string"==typeof t.fill?[t.fill]:t.fill||[],n=[];switch(t.theme||i.theme){case"outline":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("none"),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("none");break;case"filled":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("#FFF"),n.push("#FFF");break;case"two-tone":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:i.colors.twoTone.twoTone),n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:i.colors.twoTone.twoTone);break;case"multi-color":n.push("string"==typeof o[0]?o[0]:"currentColor"),n.push("string"==typeof o[1]?o[1]:i.colors.multiColor.outFillColor),n.push("string"==typeof o[2]?o[2]:i.colors.multiColor.innerStrokeColor),n.push("string"==typeof o[3]?o[3]:i.colors.multiColor.innerFillColor)}return{size:t.size||i.size,strokeWidth:t.strokeWidth||i.strokeWidth,strokeLinecap:t.strokeLinecap||i.strokeLinecap,strokeLinejoin:t.strokeLinejoin||i.strokeLinejoin,colors:n,id:e}}(a,{size:i,strokeWidth:n,strokeLinecap:r,strokeLinejoin:p,theme:u,fill:f},c),m=[c.prefix+"-icon"];return m.push(c.prefix+"-icon-"+e),t&&c.rtl&&m.push(c.prefix+"-icon-rtl"),h&&m.push(c.prefix+"-icon-spin"),o("span",{class:m.join(" ")},[s(k)])}}}}));var n={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"},r=Symbol("icon-context")}}}));