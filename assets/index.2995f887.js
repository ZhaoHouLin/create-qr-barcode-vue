import{o as p,c as h,w as d,v as W,a as t,p as S,b as y,r as c,d as b,e as I,f as g,g as J,F as L,h as R,t as f,i as E,j as U,k as X,l as V,m as D,n as O,q as Z}from"./vendor.82b1659a.js";const K=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}};K();const G=r=>(S("data-v-2e2bbef6"),r=r(),y(),r),Y={class:"switch"},$=G(()=>t("span",{class:"slider round"},null,-1));function oo(r,e,s,o,a,i){return p(),h("label",Y,[d(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=l=>o.checked=l)},null,512),[[W,o.checked]]),$])}var M=(r,e)=>{const s=r.__vccOpts||r;for(const[o,a]of e)s[o]=a;return s};const eo={emits:["CallBack"],setup(r,{emit:e}){const s=c(!0);return b(s,o=>{e("CallBack",o)}),{checked:s}}};var no=M(eo,[["render",oo],["__scopeId","data-v-2e2bbef6"]]);const A=(r,e)=>{console.log(r);const o=document.querySelector(r).toDataURL("image/png"),a=document.createElement("a"),i=new MouseEvent("click");a.download=e||"\u4E0B\u8F09\u5716\u7247\u540D\u7A31",a.href=o,a.dispatchEvent(i)},m=r=>(S("data-v-e9b01d4c"),r=r(),y(),r),to={class:"js-barcode flex justify-center items-center flex-col"},lo={class:"bar-code-format w-full flex justify-between"},ro=m(()=>t("option",{selected:"",value:"CODE128",disabled:""},"Please Select",-1)),ao=["value"],io={class:"bar-width"},so=m(()=>t("h3",null,"Bar Width ",-1)),co={class:"bar-height"},go=m(()=>t("h3",null,"Bar Height ",-1)),uo={class:"bar-margin"},vo=m(()=>t("h3",null,"Bar Margin ",-1)),mo={class:"line-color"},po=m(()=>t("h3",null,"Line Color",-1)),ho={class:"bgckground-color"},fo=m(()=>t("h3",null,"Bgckground",-1)),xo={class:"show-text flex items-center justify-between"},Co=m(()=>t("h3",null,"Show text",-1)),bo={class:"text-options"},_o={class:"text-align flex items-center"},ko=m(()=>t("h3",null,"Text Align ",-1)),Mo={class:"radio flex items-baseline"},wo=["id","value"],Bo=["for"],So={class:"font-size flex items-center"},yo=m(()=>t("h3",null,"Font Size",-1)),Io={class:"text-margin flex items-center"},Eo=m(()=>t("h3",null,"Text Margin",-1));function Uo(r,e,s,o,a,i){const l=I("ToggleSwitch");return p(),h("div",to,[t("canvas",{class:"border mb-4",id:"barcode",onClick:e[0]||(e[0]=n=>o.downloadPng("#barcode",o.text))}),t("div",lo,[d(t("input",{class:"text-center border","onUpdate:modelValue":e[1]||(e[1]=n=>o.text=n),onInput:e[2]||(e[2]=(...n)=>o.createBarcode&&o.createBarcode(...n))},null,544),[[g,o.text]]),d(t("select",{class:"border","onUpdate:modelValue":e[3]||(e[3]=n=>o.selectCode=n)},[ro,(p(!0),h(L,null,R(o.formatCode,n=>(p(),h("option",{value:n},f(Object.values(n)[0].option),9,ao))),256))],512),[[J,o.selectCode]])]),t("div",io,[so,d(t("input",{type:"range",min:"1",max:"4","onUpdate:modelValue":e[4]||(e[4]=n=>o.barWidth=n),onInput:e[5]||(e[5]=(...n)=>o.changeBarWidth&&o.changeBarWidth(...n))},null,544),[[g,o.barWidth]]),t("h4",null,f(o.barWidth),1)]),t("div",co,[go,d(t("input",{type:"range",min:"20",max:"100","onUpdate:modelValue":e[6]||(e[6]=n=>o.barHeight=n),onInput:e[7]||(e[7]=(...n)=>o.changeBarHeight&&o.changeBarHeight(...n))},null,544),[[g,o.barHeight]]),t("h4",null,f(o.barHeight),1)]),t("div",uo,[vo,d(t("input",{type:"range",min:"0",max:"30",step:"1","onUpdate:modelValue":e[8]||(e[8]=n=>o.barMargin=n),onInput:e[9]||(e[9]=(...n)=>o.changeBarMargin&&o.changeBarMargin(...n))},null,544),[[g,o.barMargin]]),t("h4",null,f(o.barMargin),1)]),t("div",mo,[po,d(t("input",{type:"color","onUpdate:modelValue":e[10]||(e[10]=n=>o.lineColor=n),onInput:e[11]||(e[11]=(...n)=>o.changeLineColor&&o.changeLineColor(...n))},null,544),[[g,o.lineColor]]),d(t("input",{class:"w-20 border text-center","onUpdate:modelValue":e[12]||(e[12]=n=>o.lineColor=n),onInput:e[13]||(e[13]=(...n)=>o.changeLineColor&&o.changeLineColor(...n))},null,544),[[g,o.lineColor]])]),t("div",ho,[fo,d(t("input",{type:"color","onUpdate:modelValue":e[14]||(e[14]=n=>o.bgckgroundColor=n),onInput:e[15]||(e[15]=(...n)=>o.changeBgckgroundColor&&o.changeBgckgroundColor(...n))},null,544),[[g,o.bgckgroundColor]]),d(t("input",{class:"w-20 border text-center","onUpdate:modelValue":e[16]||(e[16]=n=>o.bgckgroundColor=n),onInput:e[17]||(e[17]=(...n)=>o.changeBgckgroundColor&&o.changeBgckgroundColor(...n))},null,544),[[g,o.bgckgroundColor]])]),t("div",xo,[Co,E(l,{onCallBack:o.changeShowText},null,8,["onCallBack"]),d(t("h4",null,"Show",512),[[U,o.showText]]),d(t("h4",null,"Hide",512),[[U,!o.showText]])]),d(t("div",bo,[t("div",_o,[ko,(p(!0),h(L,null,R(o.alignRadio,n=>(p(),h("div",Mo,[d(t("input",{type:"radio",id:n.id,value:n.val,"onUpdate:modelValue":e[18]||(e[18]=x=>o.radioPicked=x)},null,8,wo),[[X,o.radioPicked]]),t("label",{for:n.id},f(n.id),9,Bo)]))),256))]),t("div",So,[yo,d(t("input",{type:"range",min:"8",max:"36","onUpdate:modelValue":e[19]||(e[19]=n=>o.fontSize=n),onInput:e[20]||(e[20]=(...n)=>o.changeFontSize&&o.changeFontSize(...n))},null,544),[[g,o.fontSize]]),t("h4",null,f(o.fontSize),1)]),t("div",Io,[Eo,d(t("input",{type:"range",min:"-20",max:"20","onUpdate:modelValue":e[21]||(e[21]=n=>o.textMargin=n),onInput:e[22]||(e[22]=(...n)=>o.changeTextMargin&&o.changeTextMargin(...n))},null,544),[[g,o.textMargin]]),t("h4",null,f(o.textMargin),1)])],512),[[U,o.showText]])])}const Vo={components:{ToggleSwitch:no},setup(){const r=c("zz barcode"),e=c("#000000"),s=c("#ffffff"),o=c(2),a=c(50),i=c(20),l=c(!0),n=c(20),x=c(0),_=c("center"),v=c([{val:"left",id:"left"},{val:"center",id:"center"},{val:"right",id:"right"}]),w=V([{CODE128:{option:"CODE128 auto",example:"Example 1234"}},{CODE128A:{option:"CODE128 A",example:"EXAMPLE"}},{CODE128B:{option:"CODE128 B",example:"Example text"}},{CODE128C:{option:"CODE128 C",example:"12345678"}},{EAN13:{option:"EAN13",example:"1234567890128"}},{EAN8:{option:"EAN8",example:"12345670"}},{UPC:{option:"UPC",example:"123456789999"}},{CODE39:{option:"CODE39",example:"EXAMPLE TEXT"}},{ITF14:{option:"ITF14",example:"10012345000017"}},{ITF:{option:"ITF",example:"123456"}},{MSI:{option:"MSI",example:"123456"}},{MSI10:{option:"MSI10",example:"123456"}},{MSI11:{option:"MSI11",example:"123456"}},{MSI1010:{option:"MSI1010",example:"123456"}},{MSI1110:{option:"MSI1110",example:"123456"}},{pharmacode:{option:"Pharmacode",example:"1234"}}]),B=c("CODE128"),u=V({format:B.value,width:o.value,height:a.value,displayValue:l.value,fontOptions:"",font:"monospace",textAlign:"center",textPosition:"bottom",textMargin:x.value,fontSize:n.value,background:s.value,lineColor:e.value,margin:i.value}),k=()=>{JsBarcode("#barcode",r.value,u)},P=()=>{u.lineColor=e.value},z=()=>{u.background=s.value},Q=()=>{u.width=o.value},q=()=>{u.height=a.value},F=()=>{u.margin=parseInt(i.value)},H=C=>{l.value=C,u.displayValue=l.value},j=()=>{u.fontSize=n.value},N=()=>{u.textMargin=x.value};return D(()=>{JsBarcode("#barcode",r.value,u)}),b(_,C=>{u.textAlign=C,k()}),b(u,()=>{k()}),b(B,C=>{console.log(Object.keys(C)[0]),r.value=Object.values(C)[0].example,u.format=Object.keys(C)[0],k()}),{text:r,createBarcode:k,lineColor:e,changeLineColor:P,bgckgroundColor:s,changeBgckgroundColor:z,barWidth:o,changeBarWidth:Q,barHeight:a,changeBarHeight:q,formatCode:w,selectCode:B,barMargin:i,changeBarMargin:F,showText:l,changeShowText:H,radioPicked:_,alignRadio:v,fontSize:n,changeFontSize:j,textMargin:x,changeTextMargin:N,downloadPng:A}}};var Oo=M(Vo,[["render",Uo],["__scopeId","data-v-e9b01d4c"]]);const T=r=>(S("data-v-00ca334e"),r=r(),y(),r),To={class:"qrcode"},Lo={class:"qr-margin flex mb-2"},Ro=T(()=>t("h3",null,"QR Margin",-1)),Do={class:"qr-color mb-2"},Ao=T(()=>t("h3",null,"QR Color",-1)),Po={class:"bgckground-color mb-2"},zo=T(()=>t("h3",null,"Bgckground",-1));function Qo(r,e,s,o,a,i){return p(),h("div",To,[t("canvas",{class:"border",id:"qrcode",ref:"content",onClick:e[0]||(e[0]=l=>o.downloadPng("#qrcode","QRcode"))},null,512),d(t("input",{class:"w-3/4 border mb-2","onUpdate:modelValue":e[1]||(e[1]=l=>o.url=l),onInput:e[2]||(e[2]=(...l)=>o.createQRCode&&o.createQRCode(...l))},null,544),[[g,o.url]]),t("div",Lo,[Ro,d(t("input",{type:"range",min:"0",max:"6",step:"1","onUpdate:modelValue":e[3]||(e[3]=l=>o.qrMargin=l),onInput:e[4]||(e[4]=(...l)=>o.changeQRMargin&&o.changeQRMargin(...l))},null,544),[[g,o.qrMargin]]),t("h4",null,f(o.qrMargin),1)]),t("div",Do,[Ao,d(t("input",{type:"color","onUpdate:modelValue":e[5]||(e[5]=l=>o.codeColor=l),onInput:e[6]||(e[6]=(...l)=>o.changeCodeColor&&o.changeCodeColor(...l))},null,544),[[g,o.codeColor]]),d(t("input",{class:"w-20 border text-right","onUpdate:modelValue":e[7]||(e[7]=l=>o.codeColor=l)},null,512),[[g,o.codeColor]])]),t("div",Po,[zo,d(t("input",{type:"color","onUpdate:modelValue":e[8]||(e[8]=l=>o.bgckgroundColor=l),onInput:e[9]||(e[9]=(...l)=>o.changeBgckgroundColor&&o.changeBgckgroundColor(...l))},null,544),[[g,o.bgckgroundColor]]),d(t("input",{class:"w-20 border text-right","onUpdate:modelValue":e[10]||(e[10]=l=>o.bgckgroundColor=l)},null,512),[[g,o.bgckgroundColor]])])])}const qo={setup(){const r=c(),e=c("https://github.com/ZhaoHouLin"),s=c("#000000"),o=c("#ffffff"),a=c(2),i=V({errorCorrectionLevel:"H",margin:a.value,color:{dark:s.value,light:o.value}}),l=()=>{O.toDataURL("I am ZZ").then(v=>{}).catch(v=>{console.error(v)}),O.toCanvas(r.value,e.value,i,(v,w)=>{if(v)throw v})},n=()=>{i.margin=parseInt(a.value)},x=()=>{i.color.dark=s.value},_=()=>{i.color.light=o.value};return b(i,()=>{l()}),D(()=>{console.log(r.value),O.toCanvas(r.value,e.value,i,(v,w)=>{if(v)throw v})}),{createQRCode:l,content:r,url:e,codeColor:s,changeCodeColor:x,bgckgroundColor:o,changeBgckgroundColor:_,qrMargin:a,changeQRMargin:n,downloadPng:A}}};var Fo=M(qo,[["render",Qo],["__scopeId","data-v-00ca334e"]]);const Ho={class:"card shadow-2xl p-4 rounded-2xl"};function jo(r,e,s,o,a,i){const l=I("JsBarcode"),n=I("QRCode");return p(),h("div",Ho,[E(l),E(n)])}const No={components:{JsBarcode:Oo,QRCode:Fo},setup(){return{}}};var Wo=M(No,[["render",jo]]);Z(Wo).mount("#app");
