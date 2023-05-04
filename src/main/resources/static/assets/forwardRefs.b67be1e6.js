import{ac as J,m as E,ad as Ue,ae as Ce,af as q,y as Ge,D as we,s as l,p as w,c as m,d as y,ag as ne,u as Je,T as X,r as I,w as F,N as Qe,M as xe,A as Q,C as Te,F as Le,B as Ze,ah as z,V as ve,W as ae,z as W,n as ie,q as se,ai as et,aj as tt,ak as me,K as Ee,o as nt,x as at,al as it,t as st,am as ge,g as rt,I as ot,a1 as lt,an as ut}from"./index.f303726f.js";import{u as P,m as re}from"./tag.cd9c5267.js";import{c as ct,m as dt,b as ft,V as vt,u as mt,a as he}from"./VIcon.8ac7557f.js";const ke=["top","bottom"],gt=["start","end","left","right"];function ht(e,a){let[t,n]=e.split(" ");return n||(n=J(ke,t)?"start":J(gt,t)?"top":"center"),{side:pe(t,a),align:pe(n,a)}}function pe(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function en(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function tn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function nn(e){return{side:e.align,align:e.side}}function an(e){return J(ke,e.side)?"y":"x"}class Y{constructor(a){let{x:t,y:n,width:r,height:i}=a;this.x=t,this.y=n,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function sn(e,a){return{x:{before:Math.max(0,a.left-e.left),after:Math.max(0,e.right-a.right)},y:{before:Math.max(0,a.top-e.top),after:Math.max(0,e.bottom-a.bottom)}}}function rn(e){const a=e.getBoundingClientRect(),t=getComputedStyle(e),n=t.transform;if(n){let r,i,s,o,u;if(n.startsWith("matrix3d("))r=n.slice(9,-1).split(/, /),i=+r[0],s=+r[5],o=+r[12],u=+r[13];else if(n.startsWith("matrix("))r=n.slice(7,-1).split(/, /),i=+r[0],s=+r[3],o=+r[4],u=+r[5];else return new Y(a);const c=t.transformOrigin,d=a.x-o-(1-i)*parseFloat(c),f=a.y-u-(1-s)*parseFloat(c.slice(c.indexOf(" ")+1)),g=i?a.width/i:e.offsetWidth+1,p=s?a.height/s:e.offsetHeight+1;return new Y({x:d,y:f,width:g,height:p})}else return new Y(a)}function on(e,a,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(a,t)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(r=>{n.onfinish=()=>{r(n)}})),n}function oe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return E()({name:t!=null?t:Ue(Ce(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a}},setup(n,r){let{slots:i}=r;return()=>{var s;return q(n.tag,{class:e},(s=i.default)==null?void 0:s.call(i))}}})}const ln="cubic-bezier(0.4, 0, 0.2, 1)",un="cubic-bezier(0.0, 0, 0.2, 1)",cn="cubic-bezier(0.4, 0, 1, 1)";const pt=Ge({name:"VCardActions",setup(e,a){let{slots:t}=a;return we({VBtn:{variant:"text"}}),P(()=>{var n;return l("div",{class:"v-card-actions"},[(n=t.default)==null?void 0:n.call(t)])}),{}}});const Be=w({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ie(e){return{dimensionStyles:m(()=>({height:y(e.height),maxHeight:y(e.maxHeight),maxWidth:y(e.maxWidth),minHeight:y(e.minHeight),minWidth:y(e.minWidth),width:y(e.width)}))}}function yt(e){return{aspectStyles:m(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const bt=E()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Be()},setup(e,a){let{slots:t}=a;const{aspectStyles:n}=yt(e),{dimensionStyles:r}=Ie(e);return P(()=>{var i;return l("div",{class:"v-responsive",style:r.value},[l("div",{class:"v-responsive__sizer",style:n.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&l("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function _t(e,a){if(!ne)return;const t=a.modifiers||{},n=a.value,{handler:r,options:i}=typeof n=="object"?n:{handler:n,options:{}},s=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(f=e._observe)==null?void 0:f[a.instance.$.uid];if(!c)return;const d=o.some(g=>g.isIntersecting);r&&(!t.quiet||c.init)&&(!t.once||d||c.init)&&r(d,o,u),d&&t.once?Re(e,a):c.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:s},s.observe(e)}function Re(e,a){var n;const t=(n=e._observe)==null?void 0:n[a.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const St={mounted:_t,unmounted:Re},Ct=St,wt=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),M=(e,a)=>{let{slots:t}=a;const{transition:n,...r}=e,{component:i=X,...s}=typeof n=="object"?n:{};return q(i,Je(typeof n=="string"?{name:n}:s,r),t)},$e=E()({name:"VImg",directives:{intersect:Ct},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...wt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:t,slots:n}=a;const r=I(""),i=I(),s=I(e.eager?"loading":"idle"),o=I(),u=I(),c=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=m(()=>c.value.aspect||o.value/u.value||0);F(()=>e.src,()=>{f(s.value!=="idle")}),F(d,(v,h)=>{!v&&h&&i.value&&b(i.value)}),Qe(()=>f());function f(v){if(!(e.eager&&v)&&!(ne&&!v&&!e.eager)){if(s.value="loading",c.value.lazySrc){const h=new Image;h.src=c.value.lazySrc,b(h,null)}!c.value.src||xe(()=>{var h,C;if(t("loadstart",((h=i.value)==null?void 0:h.currentSrc)||c.value.src),(C=i.value)!=null&&C.complete){if(i.value.naturalWidth||p(),s.value==="error")return;d.value||b(i.value,null),g()}else d.value||b(i.value),x()})}}function g(){var v;x(),s.value="loaded",t("load",((v=i.value)==null?void 0:v.currentSrc)||c.value.src)}function p(){var v;s.value="error",t("error",((v=i.value)==null?void 0:v.currentSrc)||c.value.src)}function x(){const v=i.value;v&&(r.value=v.currentSrc||v.src)}let V=-1;function b(v){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{clearTimeout(V);const{naturalHeight:B,naturalWidth:$}=v;B||$?(o.value=$,u.value=B):!v.complete&&s.value==="loading"&&h!=null?V=window.setTimeout(C,h):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};C()}const T=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var C;if(!c.value.src||s.value==="idle")return null;const v=l("img",{class:["v-img__img",T.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:g,onError:p},null),h=(C=n.sources)==null?void 0:C.call(n);return l(M,{transition:e.transition,appear:!0},{default:()=>[Q(h?l("picture",{class:"v-img__picture"},[h,v]):v,[[Ze,s.value==="loaded"]])]})},R=()=>l(M,{transition:e.transition},{default:()=>[c.value.lazySrc&&s.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],src:c.value.lazySrc,alt:e.alt},null)]}),k=()=>n.placeholder?l(M,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!n.error)&&l("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,O=()=>n.error?l(M,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&l("div",{class:"v-img__error"},[n.error()])]}):null,A=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=I(!1);{const v=F(d,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),v())})}return P(()=>Q(l(bt,{class:["v-img",{"v-img--booting":!N.value}],style:{width:y(e.width==="auto"?o.value:e.width)},aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(Le,null,[l(L,null,null),l(R,null,null),l(A,null,null),l(k,null,null),l(O,null,null)]),default:n.default}),[[Te("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:r,image:i,state:s,naturalWidth:o,naturalHeight:u}}}),xt=["elevated","flat","tonal","outlined","text","plain"];function Pe(e,a){return l(Le,null,[e&&l("span",{key:"overlay",class:`${a}__overlay`},null),l("span",{key:"underlay",class:`${a}__underlay`},null)])}const Ve=w({color:String,variant:{type:String,default:"elevated",validator:e=>xt.includes(e)}},"variant");function Ae(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();const t=m(()=>{const{variant:i}=ve(e);return`${a}--variant-${i}`}),{colorClasses:n,colorStyles:r}=ct(m(()=>{const{variant:i,color:s}=ve(e);return{[["elevated","flat"].includes(i)?"background":"text"]:s}}));return{colorClasses:n,colorStyles:r,variantClasses:t}}const Tt=[null,"default","comfortable","compact"],le=w({density:{type:String,default:"default",validator:e=>Tt.includes(e)}},"density");function Ne(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{densityClasses:m(()=>`${a}--density-${e.density}`)}}const ue=w({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ce(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{roundedClasses:m(()=>{const n=ae(e)?e.value:e.rounded,r=[];if(n===!0||n==="")r.push(`${a}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))r.push(`rounded-${i}`);return r})}}const Lt=w({start:Boolean,end:Boolean,icon:W,image:String,...le(),...ue(),...dt(),...re(),...ie(),...Ve({variant:"flat"})},"v-avatar"),ye=E()({name:"VAvatar",props:Lt(),setup(e,a){let{slots:t}=a;const{themeClasses:n}=se(e),{colorClasses:r,colorStyles:i,variantClasses:s}=Ae(e),{densityClasses:o}=Ne(e),{roundedClasses:u}=ce(e),{sizeClasses:c,sizeStyles:d}=ft(e);return P(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,r.value,o.value,u.value,c.value,s.value],style:[i.value,d.value]},{default:()=>{var f;return[e.image?l($e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(vt,{key:"icon",icon:e.icon},null):(f=t.default)==null?void 0:f.call(t),Pe(!1,"v-avatar")]}})),{}}}),Et=oe("v-card-subtitle"),kt=oe("v-card-title"),Z=E(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:t}=a;const{defaults:n,disabled:r,reset:i,root:s,scoped:o}=et(e);return we(n,{reset:i,root:s,scoped:o,disabled:r}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}}),Bt=E()({name:"VCardItem",props:{appendAvatar:String,appendIcon:W,prependAvatar:String,prependIcon:W,subtitle:String,title:String,...le()},setup(e,a){let{slots:t}=a;return P(()=>{var c;const n=!!(e.prependAvatar||e.prependIcon),r=!!(n||t.prepend),i=!!(e.appendAvatar||e.appendIcon),s=!!(i||t.append),o=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return l("div",{class:"v-card-item"},[r&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(Z,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):n&&l(ye,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[o&&l(kt,{key:"title"},{default:()=>{var d,f;return[(f=(d=t.title)==null?void 0:d.call(t))!=null?f:e.title]}}),u&&l(Et,{key:"subtitle"},{default:()=>{var d,f;return[(f=(d=t.subtitle)==null?void 0:d.call(t))!=null?f:e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),s&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(Z,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&l(ye,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),It=oe("v-card-text");const ee=Symbol("rippleStop"),Rt=80;function be(e,a){e.style.transform=a,e.style.webkitTransform=a}function te(e){return e.constructor.name==="TouchEvent"}function ze(e){return e.constructor.name==="KeyboardEvent"}const $t=function(e,a){var f;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,r=0;if(!ze(e)){const g=a.getBoundingClientRect(),p=te(e)?e.touches[e.touches.length-1]:e;n=p.clientX-g.left,r=p.clientY-g.top}let i=0,s=.3;(f=a._ripple)!=null&&f.circle?(s=.15,i=a.clientWidth/2,i=t.center?i:i+Math.sqrt((n-i)**2+(r-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-i*2)/2}px`,u=`${(a.clientHeight-i*2)/2}px`,c=t.center?o:`${n-i}px`,d=t.center?u:`${r-i}px`;return{radius:i,scale:s,x:c,y:d,centerX:o,centerY:u}},j={show(e,a){var p;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((p=a==null?void 0:a._ripple)!=null&&p.enabled))return;const n=document.createElement("span"),r=document.createElement("span");n.appendChild(r),n.className="v-ripple__container",t.class&&(n.className+=` ${t.class}`);const{radius:i,scale:s,x:o,y:u,centerX:c,centerY:d}=$t(e,a,t),f=`${i*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,a.appendChild(n);const g=window.getComputedStyle(a);g&&g.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),be(r,`translate(${o}, ${u}) scale3d(${s},${s},${s})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),be(r,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const t=a[a.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const n=performance.now()-Number(t.dataset.activated),r=Math.max(250-n,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},r)}};function Oe(e){return typeof e>"u"||!!e}function H(e){const a={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[ee])){if(e[ee]=!0,te(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(a.center=t._ripple.centered||ze(e),t._ripple.class&&(a.class=t._ripple.class),te(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{j.show(e,t,a)},t._ripple.showTimer=window.setTimeout(()=>{var n;(n=t==null?void 0:t._ripple)!=null&&n.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Rt)}else j.show(e,t,a)}}function _e(e){e[ee]=!0}function _(e){const a=e.currentTarget;if(!!(a!=null&&a._ripple)){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),j.hide(a)}}function We(e){const a=e.currentTarget;!(a!=null&&a._ripple)||(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let D=!1;function He(e){!D&&(e.keyCode===me.enter||e.keyCode===me.space)&&(D=!0,H(e))}function De(e){D=!1,_(e)}function Me(e){D&&(D=!1,_(e))}function Fe(e,a,t){var s;const{value:n,modifiers:r}=a,i=Oe(n);if(i||j.hide(e),e._ripple=(s=e._ripple)!=null?s:{},e._ripple.enabled=i,e._ripple.centered=r.center,e._ripple.circle=r.circle,tt(n)&&n.class&&(e._ripple.class=n.class),i&&!t){if(r.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",We,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",H),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",He),e.addEventListener("keyup",De),e.addEventListener("blur",Me),e.addEventListener("dragstart",_,{passive:!0})}else!i&&t&&je(e)}function je(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",We),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",He),e.removeEventListener("keyup",De),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Me)}function Pt(e,a){Fe(e,a,!1)}function Vt(e){delete e._ripple,je(e)}function At(e,a){if(a.value===a.oldValue)return;const t=Oe(a.oldValue);Fe(e,a,t)}const Nt={mounted:Pt,unmounted:Vt,updated:At};const Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},qe=w({location:String},"location");function Xe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Ee();return{locationStyles:m(()=>{if(!e.location)return{};const{side:i,align:s}=ht(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function o(c){return t?t(c):0}const u={};return i!=="center"&&(a?u[Se[i]]=`calc(100% - ${o(i)}px)`:u[i]=0),s!=="center"?a?u[Se[s]]=`calc(100% - ${o(s)}px)`:u[s]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}function zt(e){const a=I(),t=I(!1);if(ne){const n=new IntersectionObserver(r=>{e==null||e(r,n),t.value=!!r.find(i=>i.isIntersecting)});nt(()=>{n.disconnect()}),F(a,(r,i)=>{i&&(n.unobserve(i),t.value=!1),r&&n.observe(r)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Ot=E()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...qe({location:"top"}),...ue(),...re(),...ie()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=at(e,"modelValue"),{isRtl:r}=Ee(),{themeClasses:i}=se(e),{locationStyles:s}=Xe(e),{textColorClasses:o,textColorStyles:u}=mt(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:d}=he(m(()=>e.bgColor||e.color)),{backgroundColorClasses:f,backgroundColorStyles:g}=he(e,"color"),{roundedClasses:p}=ce(e),{intersectionRef:x,isIntersecting:V}=zt(),b=m(()=>parseInt(e.max,10)),T=m(()=>parseInt(e.height,10)),L=m(()=>parseFloat(e.bufferValue)/b.value*100),R=m(()=>parseFloat(n.value)/b.value*100),k=m(()=>r.value!==e.reverse),O=m(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=m(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function N(v){if(!x.value)return;const{left:h,right:C,width:B}=x.value.getBoundingClientRect(),$=k.value?B-v.clientX+(C-B):v.clientX-h;n.value=Math.round($/B*b.value)}return P(()=>l(e.tag,{ref:x,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":k.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},p.value,i.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?y(T.value):0,"--v-progress-linear-height":y(T.value),...s.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&N},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[k.value?"left":"right"]:y(-T.value),borderTop:`${y(T.value/2)} dotted`,opacity:A.value,top:`calc(50% - ${y(T.value/4)})`,width:y(100-L.value,"%"),"--v-progress-linear-stream-to":y(T.value*(k.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",c.value],style:[d.value,{opacity:A.value,width:y(e.stream?L.value:100,"%")}]},null),l(X,{name:O.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(v=>l("div",{key:v,class:["v-progress-linear__indeterminate",v,f.value],style:g.value},null))]):l("div",{class:["v-progress-linear__determinate",f.value],style:[g.value,{width:y(R.value,"%")}]},null)]}),t.default&&l("div",{class:"v-progress-linear__content"},[t.default({value:R.value,buffer:L.value})])]})),{}}}),Wt=w({loading:[Boolean,String]},"loader");function Ht(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{loaderClasses:m(()=>({[`${a}--loading`]:e.loading}))}}function Dt(e,a){var n;let{slots:t}=a;return l("div",{class:`${e.name}__loader`},[((n=t.default)==null?void 0:n.call(t,{color:e.color,isActive:e.active}))||l(Ot,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Mt=w({border:[Boolean,Number,String]},"border");function Ft(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{borderClasses:m(()=>{const n=ae(e)?e.value:e.border,r=[];if(n===!0||n==="")r.push(`${a}--border`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))r.push(`border-${i}`);return r})}}const jt=w({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function qt(e){return{elevationClasses:m(()=>{const t=ae(e)?e.value:e.elevation,n=[];return t==null||n.push(`elevation-${t}`),n})}}const Xt=["static","relative","fixed","absolute","sticky"],Yt=w({position:{type:String,validator:e=>Xt.includes(e)}},"position");function Kt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{positionClasses:m(()=>e.position?`${a}--${e.position}`:void 0)}}function dn(){var e,a;return(a=(e=rt("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function Ut(e,a){const t=it("RouterLink"),n=m(()=>!!(e.href||e.to)),r=m(()=>(n==null?void 0:n.value)||ge(a,"click")||ge(e,"click"));if(typeof t=="string")return{isLink:n,isClickable:r,href:st(e,"href")};const i=e.to?t.useLink(e):void 0;return{isLink:n,isClickable:r,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&m(()=>{var s,o;return e.exact?(s=i.isExactActive)==null?void 0:s.value:(o=i.isActive)==null?void 0:o.value}),href:m(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Gt=w({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let K=!1;function fn(e,a){let t=!1,n,r;ot&&(xe(()=>{window.addEventListener("popstate",i),n=e==null?void 0:e.beforeEach((s,o,u)=>{K?t?a(u):u():setTimeout(()=>t?a(u):u()),K=!0}),r=e==null?void 0:e.afterEach(()=>{K=!1})}),lt(()=>{window.removeEventListener("popstate",i),n==null||n(),r==null||r()}));function i(s){var o;(o=s.state)!=null&&o.replaced||(t=!0,setTimeout(()=>t=!1))}}const vn=E()({name:"VCard",directives:{Ripple:Nt},props:{appendAvatar:String,appendIcon:W,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:W,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...ie(),...Mt(),...le(),...Be(),...jt(),...Wt(),...qe(),...Yt(),...ue(),...Gt(),...re(),...Ve({variant:"elevated"})},setup(e,a){let{attrs:t,slots:n}=a;const{themeClasses:r}=se(e),{borderClasses:i}=Ft(e),{colorClasses:s,colorStyles:o,variantClasses:u}=Ae(e),{densityClasses:c}=Ne(e),{dimensionStyles:d}=Ie(e),{elevationClasses:f}=qt(e),{loaderClasses:g}=Ht(e),{locationStyles:p}=Xe(e),{positionClasses:x}=Kt(e),{roundedClasses:V}=ce(e),b=Ut(e,t),T=m(()=>e.link!==!1&&b.isLink.value),L=m(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return P(()=>{const R=T.value?"a":e.tag,k=!!(n.title||e.title),O=!!(n.subtitle||e.subtitle),A=k||O,N=!!(n.append||e.appendAvatar||e.appendIcon),v=!!(n.prepend||e.prependAvatar||e.prependIcon),h=!!(n.image||e.image),C=A||v||N,B=!!(n.text||e.text);return Q(l(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},r.value,i.value,s.value,c.value,f.value,g.value,x.value,V.value,u.value],style:[o.value,d.value,p.value],href:b.href.value,onClick:L.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var $;return[h&&l("div",{key:"image",class:"v-card__image"},[n.image?l(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):l($e,{key:"image-img",cover:!0,src:e.image},null)]),l(Dt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),C&&l(Bt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),B&&l(It,{key:"text"},{default:()=>{var de,fe;return[(fe=(de=n.text)==null?void 0:de.call(n))!=null?fe:e.text]}}),($=n.default)==null?void 0:$.call(n),n.actions&&l(pt,null,{default:n.actions}),Pe(L.value,"v-card")]}}),[[Te("ripple"),L.value&&e.ripple]])}),{}}});function S(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",t=arguments.length>2?arguments[2]:void 0;return E()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:t},origin:{type:String,default:a}},setup(n,r){let{slots:i}=r;const s={onBeforeEnter(o){o.style.transformOrigin=n.origin},onLeave(o){if(n.leaveAbsolute){const{offsetTop:u,offsetLeft:c,offsetWidth:d,offsetHeight:f}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${u}px`,o.style.left=`${c}px`,o.style.width=`${d}px`,o.style.height=`${f}px`}n.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(n.leaveAbsolute&&(o==null?void 0:o._transitionInitialStyles)){const{position:u,top:c,left:d,width:f,height:g}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=u||"",o.style.top=c||"",o.style.left=d||"",o.style.width=f||"",o.style.height=g||""}}};return()=>{const o=n.group?ut:X;return q(o,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:s},i.default)}}})}function Ye(e,a){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return E()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(n,r){let{slots:i}=r;return()=>q(X,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:a},i.default)}})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=Ce(`offset-${t}`);return{onBeforeEnter(s){s._parent=s.parentNode,s._initialStyle={transition:s.style.transition,overflow:s.style.overflow,[t]:s.style[t]}},onEnter(s){const o=s._initialStyle;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const u=`${s[n]}px`;s.style[t]="0",s.offsetHeight,s.style.transition=o.transition,e&&s._parent&&s._parent.classList.add(e),requestAnimationFrame(()=>{s.style[t]=u})},onAfterEnter:i,onEnterCancelled:i,onLeave(s){s._initialStyle={transition:"",overflow:s.style.overflow,[t]:s.style[t]},s.style.overflow="hidden",s.style[t]=`${s[n]}px`,s.offsetHeight,requestAnimationFrame(()=>s.style[t]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(s){e&&s._parent&&s._parent.classList.remove(e),i(s)}function i(s){const o=s._initialStyle[t];s.style.overflow=s._initialStyle.overflow,o!=null&&(s.style[t]=o),delete s._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");const mn=S("slide-y-transition");S("slide-y-reverse-transition");const gn=Ye("expand-transition",Ke()),hn=Ye("expand-x-transition",Ke("",!0)),U=Symbol("Forwarded refs");function G(e,a){let t=e;for(;t;){const n=Reflect.getOwnPropertyDescriptor(t,a);if(n)return n;t=Object.getPrototypeOf(t)}}function pn(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];return e[U]=t,new Proxy(e,{get(r,i){if(Reflect.has(r,i))return Reflect.get(r,i);if(!(typeof i=="symbol"||i.startsWith("__"))){for(const s of t)if(s.value&&Reflect.has(s.value,i)){const o=Reflect.get(s.value,i);return typeof o=="function"?o.bind(s.value):o}}},has(r,i){if(Reflect.has(r,i))return!0;if(typeof i=="symbol"||i.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,i))return!0;return!1},getOwnPropertyDescriptor(r,i){var o,u;const s=Reflect.getOwnPropertyDescriptor(r,i);if(s)return s;if(!(typeof i=="symbol"||i.startsWith("__"))){for(const c of t){if(!c.value)continue;const d=(u=G(c.value,i))!=null?u:"_"in c.value?G((o=c.value._)==null?void 0:o.setupState,i):void 0;if(d)return d}for(const c of t){const d=c.value&&c.value[U];if(!d)continue;const f=d.slice();for(;f.length;){const g=f.shift(),p=G(g.value,i);if(p)return p;const x=g.value&&g.value[U];x&&f.push(...x)}}}}})}export{$e as A,zt as B,Wt as C,qe as D,Yt as E,Ht as F,Xe as G,Kt as H,ht as I,en as J,tn as K,nn as L,M,Y as N,an as O,sn as P,wt as Q,Nt as R,fn as S,pn as T,Dt as U,Z as V,hn as W,mn as X,Ct as Y,on as a,cn as b,gn as c,un as d,oe as e,le as f,Be as g,jt as h,ue as i,Gt as j,Ve as k,Ft as l,Mt as m,rn as n,Ae as o,Ne as p,Ie as q,qt as r,ln as s,ce as t,Ut as u,Pe as v,ye as w,dn as x,pe as y,vn as z};