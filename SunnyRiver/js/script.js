// //MAP
// ymaps.ready(init);
// function init() {
//   let myMap = new ymaps.Map("map", {
//     center: [55.758456, 37.626942],
//     zoom: 13,
//     controls: [],
//   });
//   let myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
//     iconLayout: 'default#image',
//     iconImageHref: '../resources/map.svg',
//     iconImageSize: [12, 12],

//   });
//   myMap.geoObjects.add(myPlacemark);
//   myPlacemark.events.add('click', function () {
//     let adress = document.querySelector('.adress')
//     adress.classList.add('open')
// });
// }

// //VALIDATE
// var _=Object.defineProperty;var w=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var E=(p,b,g)=>b in p?_(p,b,{enumerable:!0,configurable:!0,writable:!0,value:g}):p[b]=g,L=(p,b)=>{for(var g in b||(b={}))X.call(b,g)&&E(p,g,b[g]);if(w)for(var g of w(b))Z.call(b,g)&&E(p,g,b[g]);return p};var u=(p,b,g)=>(E(p,typeof b!="symbol"?b+"":b,g),g);(function(p,b){typeof exports=="object"&&typeof module!="undefined"?module.exports=b():typeof define=="function"&&define.amd?define(b):(p=typeof globalThis!="undefined"?globalThis:p||self,p.JustValidate=b())})(this,function(){"use strict";const p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,b=/^[0-9]+$/,g=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,x=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,I=n=>{let e=n;return typeof n=="string"&&(e=n.trim()),!e},T=n=>p.test(n),$=(n,e)=>n.length>e,M=(n,e)=>n.length<e,V=n=>b.test(n),P=n=>g.test(n),j=n=>x.test(n),G=(n,e)=>n>e,A=(n,e)=>n<e;var d;(function(n){n.Required="required",n.Email="email",n.MinLength="minLength",n.MaxLength="maxLength",n.Password="password",n.Number="number",n.MaxNumber="maxNumber",n.MinNumber="minNumber",n.StrongPassword="strongPassword",n.CustomRegexp="customRegexp",n.MinFilesCount="minFilesCount",n.MaxFilesCount="maxFilesCount",n.Files="files"})(d||(d={}));var y;(function(n){n.Required="required"})(y||(y={}));var k;(function(n){n.Label="label",n.LabelArrow="labelArrow"})(k||(k={}));const N=(n,e)=>{switch(n){case d.Required:return"The field is required";case d.Email:return"Email has invalid format";case d.MaxLength:return"The field must contain a maximum of :value characters".replace(":value",String(e));case d.MinLength:return"The field must contain a minimum of :value characters".replace(":value",String(e));case d.Password:return"Password must contain minimum eight characters, at least one letter and one number";case d.Number:return"Value should be a number";case d.StrongPassword:return"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";case d.MaxNumber:return"Number should be less or equal than :value".replace(":value",String(e));case d.MinNumber:return"Number should be more or equal than :value".replace(":value",String(e));case d.MinFilesCount:return"Files count should be more or equal than :value".replace(":value",String(e));case d.MaxFilesCount:return"Files count should be less or equal than :value".replace(":value",String(e));case d.Files:return"Uploaded files have one or several invalid properties (extension/size/type etc)";default:return"Value is incorrect"}},q=n=>{switch(n){case y.Required:return"The field is required";default:return"Group is incorrect"}},F=n=>!!n&&typeof n.then=="function",z=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",C=5,S={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1};class O{constructor(e,t,s){u(this,"form",null);u(this,"fields",{});u(this,"groupFields",{});u(this,"errors",{});u(this,"isValid",!1);u(this,"isSubmitted",!1);u(this,"globalConfig",S);u(this,"errorLabels",[]);u(this,"successLabels",[]);u(this,"eventListeners",[]);u(this,"dictLocale",[]);u(this,"currentLocale");u(this,"customStyleTags",{});u(this,"onSuccessCallback");u(this,"onFailCallback");u(this,"tooltips",[]);u(this,"lastScrollPosition");u(this,"isScrollTick");u(this,"refreshAllTooltips",()=>{this.tooltips.forEach(e=>{e.refresh()})});u(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)});u(this,"formSubmitHandler",e=>{e.preventDefault(),this.isSubmitted=!0,this.globalConfig.lockForm&&this.lockForm(),this.validate().finally(()=>{var t,s;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?(t=this.onSuccessCallback)==null||t.call(this,e):(s=this.onFailCallback)==null||s.call(this,this.fields)})});u(this,"handleFieldChange",e=>{let t,s;for(const i in this.fields){const r=this.fields[i];if(r.elem===e){t=r,s=i;break}}!t||!s||this.validateField(s,t,!0)});u(this,"handleGroupChange",e=>{let t,s;for(const i in this.groupFields){const r=this.groupFields[i];if(r.elems.find(a=>a===e)){t=r,s=i;break}}!t||!s||this.validateGroup(s,t)});u(this,"handlerChange",e=>{!e.target||(this.handleFieldChange(e.target),this.handleGroupChange(e.target),this.renderErrors())});this.initialize(e,t,s)}initialize(e,t,s){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=S,this.errorLabels=[],this.eventListeners=[],this.customStyleTags={},this.tooltips=[],typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig=L(L({},S),t),s&&(this.dictLocale=s),this.isTooltip()){const i=document.createElement("style");i.textContent=z,this.customStyleTags[k.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e){var s;return!this.currentLocale||!this.dictLocale.length?e:((s=this.dictLocale.find(i=>i.key===e))==null?void 0:s.dict[this.currentLocale])||e}getFieldErrorMessage(e,t){const s=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(s)||N(e.rule,e.value)}getFieldSuccessMessage(e,t){const s=typeof e=="function"?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(s)}getGroupErrorMessage(e){return this.getLocalisedString(e.errorMessage)||q(e.rule)}getGroupSuccessMessage(e){return this.getLocalisedString(e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,t!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,s,i){switch(i.rule){case y.Required:(t==="radio"||t==="checkbox")&&(s.every(r=>!r.checked)?this.setGroupInvalid(e,i):this.setGroupValid(e,i))}}validateFieldRule(e,t,s,i=!1){const r=s.value,a=this.getElemValue(t);if(s.plugin){s.plugin(a,this.fields)||this.setFieldInvalid(e,s);return}switch(s.rule){case d.Required:{I(a)&&this.setFieldInvalid(e,s);break}case d.Email:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}T(a)||this.setFieldInvalid(e,s);break}case d.MaxLength:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;$(a,r)&&this.setFieldInvalid(e,s);break}case d.MinLength:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;M(a,r)&&this.setFieldInvalid(e,s);break}case d.Password:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;P(a)||this.setFieldInvalid(e,s);break}case d.StrongPassword:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;j(a)||this.setFieldInvalid(e,s);break}case d.Number:{if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;V(a)||this.setFieldInvalid(e,s);break}case d.MaxNumber:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;const l=+a;(Number.isNaN(l)||G(l,r))&&this.setFieldInvalid(e,s);break}case d.MinNumber:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof a!="string"){this.setFieldInvalid(e,s);break}if(a==="")break;const l=+a;(Number.isNaN(l)||A(l,r))&&this.setFieldInvalid(e,s);break}case d.CustomRegexp:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);return}let l;try{l=new RegExp(r)}catch{console.error(`Value for ${s.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,s);break}const o=String(a);o!==""&&!l.test(o)&&this.setFieldInvalid(e,s);break}case d.MinFilesCount:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length<r){this.setFieldInvalid(e,s);break}break}case d.MaxFilesCount:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);break}if(typeof r!="number"){console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,s);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length>r){this.setFieldInvalid(e,s);break}break}case d.Files:{if(r===void 0){console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,s);return}if(typeof r!="object"){console.error(`Value for ${s.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const l=r.files;if(typeof l!="object"){console.error(`Value for ${s.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const o=(c,h)=>{const f=Number.isFinite(h.minSize)&&c.size<h.minSize,m=Number.isFinite(h.maxSize)&&c.size>h.maxSize,v=Array.isArray(h.names)&&!h.names.includes(c.name),D=Array.isArray(h.extensions)&&!h.extensions.includes(c.name.split(".")[c.name.split(".").length-1]),H=Array.isArray(h.types)&&!h.types.includes(c.type);return f||m||v||D||H};if(typeof a=="object"&&a!==null)for(let c=0,h=a.length;c<h;++c){const f=a.item(c);if(!f){this.setFieldInvalid(e,s);break}if(o(f,l)){this.setFieldInvalid(e,s);break}}break}default:{if(typeof s.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,s);return}const l=s.validator(a,this.fields);if(typeof l!="boolean"&&typeof l!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof l=="function")if(i)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const o=l();if(!F(o)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,s);return}return o.then(c=>{c||this.setFieldInvalid(e,s)}).catch(()=>{this.setFieldInvalid(e,s)})}l||this.setFieldInvalid(e,s)}}}validateField(e,t,s=!1){var r;t.isValid=!0;const i=[];return[...t.rules].reverse().forEach(a=>{const l=this.validateFieldRule(e,t.elem,a,s);F(l)&&i.push(l)}),t.isValid&&this.setFieldValid(e,(r=t.config)==null?void 0:r.successMessage),Promise.allSettled(i)}validateGroup(e,t){const s=[];return[...t.rules].reverse().forEach(i=>{const r=this.validateGroupRule(e,t.type,t.elems,i);F(r)&&s.push(r)}),Promise.allSettled(s)}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout(()=>t.elem.focus(),0);break}}}afterSubmitValidation(){this.renderErrors(),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(){return new Promise(e=>{const t=[];Object.keys(this.fields).forEach(s=>{const i=this.fields[s],r=this.validateField(s,i);F(r)&&t.push(r)}),Object.keys(this.groupFields).forEach(s=>{const i=this.groupFields[s],r=this.validateGroup(s,i);F(r)&&t.push(r)}),t.length?Promise.allSettled(t).then(()=>{this.afterSubmitValidation(),e(!0)}):(this.afterSubmitValidation(),e(!1))})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,s){t.addEventListener(e,s),this.eventListeners.push({type:e,elem:t,func:s})}removeListener(e,t,s){t.removeEventListener(e,s),this.eventListeners=this.eventListeners.filter(i=>i.type!==e||i.elem!==t)}addField(e,t,s){if(typeof e!="string")throw Error("Field selector is not valid. Please specify a string selector.");const i=document.querySelector(e);if(!i)throw Error(`Field with ${e} selector not found! Please check the field selector.`);if(!Array.isArray(t)||!t.length)throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`);return t.forEach(r=>{if(!("rule"in r||"validator"in r||"plugin"in r))throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`);if(!r.validator&&!r.plugin&&(!r.rule||!Object.values(d).includes(r.rule)))throw Error(`Rule should be one of these types: ${Object.values(d).join(", ")}. Provided value: ${r.rule}`)}),this.fields[e]={elem:i,rules:t,isValid:void 0,config:s},this.setListeners(i),this.isSubmitted&&this.validate(),this}removeField(e){if(typeof e!="string")throw Error("Field selector is not valid. Please specify a string selector.");if(!this.fields[e])return console.error("Field not found. Check the field selector."),this;const t=this.getListenerType(this.fields[e].elem.type);return this.removeListener(t,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");return this.groupFields[e]?(this.groupFields[e].elems.forEach(t=>{const s=this.getListenerType(t.type);this.removeListener(s,t,this.handlerChange)}),this.clearErrors(),delete this.groupFields[e],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(e,t,s,i){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const r=document.querySelector(e);if(!r)throw Error(`Group with ${e} selector not found! Please check the group selector.`);const a=r.querySelectorAll("input"),l=Array.from(a).every(c=>c.type==="radio"),o=Array.from(a).every(c=>c.type==="checkbox");if(!l&&!o)throw Error("Group should contain either or checkboxes or radio buttons");return this.groupFields[e]={rules:[{rule:y.Required,errorMessage:t,successMessage:i}],groupElem:r,elems:Array.from(a),type:l?"radio":"checkbox",isDirty:!1,isValid:void 0,config:s},a.forEach(c=>{this.setListeners(c)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";case"date":return"input";default:return"keyup"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearErrors(){var e,t,s,i,r,a;this.errorLabels.forEach(l=>l.remove()),this.successLabels.forEach(l=>l.remove());for(const l in this.fields){const o=this.fields[l],c=((e=o.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(c).forEach(f=>{o.elem.style[f]=""});const h=((t=o.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(h).forEach(f=>{o.elem.style[f]=""}),o.elem.classList.remove(((s=o.config)==null?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass,((i=o.config)==null?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass)}for(const l in this.groupFields){const o=this.groupFields[l],c=((r=o.config)==null?void 0:r.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(c).forEach(f=>{o.elems.forEach(m=>{var v;m.style[f]="",m.classList.remove(((v=o.config)==null?void 0:v.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)})});const h=((a=o.config)==null?void 0:a.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(h).forEach(f=>{o.elems.forEach(m=>{var v;m.style[f]="",m.classList.remove(((v=o.config)==null?void 0:v.successFieldCssClass)||this.globalConfig.successFieldCssClass)})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,s=e.length;t<s;++t)e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,s=e.length;t<s;++t)e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,s){var f;const{top:i,left:r,width:a,height:l}=e.getBoundingClientRect(),o=t.getBoundingClientRect(),c=s||((f=this.globalConfig.tooltip)==null?void 0:f.position);switch(c){case"left":{t.style.top=`${i+l/2-o.height/2}px`,t.style.left=`${r-o.width-C}px`;break}case"top":{t.style.top=`${i-o.height-C}px`,t.style.left=`${r+a/2-o.width/2}px`;break}case"right":{t.style.top=`${i+l/2-o.height/2}px`,t.style.left=`${r+a+C}px`;break}case"bottom":{t.style.top=`${i+l+C}px`,t.style.left=`${r+a/2-o.width/2}px`;break}}return t.dataset.direction=c,{refresh:()=>{this.renderTooltip(e,t,s)}}}createErrorLabelElem(e,t,s){const i=document.createElement("div");i.innerHTML=t;const r=this.isTooltip()?s==null?void 0:s.errorLabelStyle:(s==null?void 0:s.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,r),i.classList.add((s==null?void 0:s.errorLabelCssClass)||this.globalConfig.errorLabelCssClass,"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels.push(i),i}createSuccessLabelElem(e,t,s){if(t===void 0)return null;const i=document.createElement("div");i.innerHTML=t;const r=(s==null?void 0:s.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(i.style,r),i.classList.add((s==null?void 0:s.successLabelCssClass)||this.globalConfig.successLabelCssClass,"just-validate-success-label"),this.globalConfig.testingMode&&(i.dataset.testId=`success-label-${e}`),this.successLabels.push(i),i}renderFieldLabel(e,t){var s,i,r,a,l,o,c;if(e.type==="checkbox"||e.type==="radio"){const h=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((i=(s=e.parentElement)==null?void 0:s.tagName)==null?void 0:i.toLowerCase())==="label"?(a=(r=e.parentElement)==null?void 0:r.parentElement)==null||a.appendChild(t):h?(l=h.parentElement)==null||l.appendChild(t):(o=e.parentElement)==null||o.appendChild(t)}else(c=e.parentElement)==null||c.appendChild(t)}renderErrors(){var e,t,s,i,r,a;if(!!this.isSubmitted){this.clearErrors(),this.isValid=!0;for(const l in this.groupFields){const o=this.groupFields[l];if(o.isValid){o.elems.forEach(f=>{var m,v;Object.assign(f.style,((m=o.config)==null?void 0:m.successFieldStyle)||this.globalConfig.successFieldStyle),f.classList.add(((v=o.config)==null?void 0:v.successFieldCssClass)||this.globalConfig.successFieldCssClass)});const h=this.createSuccessLabelElem(l,o.successMessage,o.config);h&&o.groupElem.appendChild(h);continue}this.isValid=!1,o.elems.forEach(h=>{var f,m;Object.assign(h.style,((f=o.config)==null?void 0:f.errorFieldStyle)||this.globalConfig.errorFieldStyle),h.classList.add(((m=o.config)==null?void 0:m.errorFieldCssClass)||this.globalConfig.errorFieldCssClass)});const c=this.createErrorLabelElem(l,o.errorMessage,o.config);o.groupElem.appendChild(c),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,c,(t=(e=o.config)==null?void 0:e.tooltip)==null?void 0:t.position))}for(const l in this.fields){const o=this.fields[l];if(o.isValid){if(!o.asyncCheckPending){const h=this.createSuccessLabelElem(l,o.successMessage,o.config);h&&this.renderFieldLabel(o.elem,h),o.elem.classList.add(((s=o.config)==null?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass)}continue}this.isValid=!1,o.elem.classList.add(((i=o.config)==null?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass);const c=this.createErrorLabelElem(l,o.errorMessage,o.config);this.renderFieldLabel(o.elem,c),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.elem,c,(a=(r=o.config)==null?void 0:r.tooltip)==null?void 0:a.position))}}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{this.addField(e,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}}return O});
;

// const validationAbout = new JustValidate('.about-us__form', {
//   errorFieldCssClass: 'is-invalid',
//   errorLabelStyle: {
//     color: '#f06666',
//   },
// });
// validationAbout
//   .addField('.email-input-about', [
//     {
//       rule: 'required',
//       errorMessage: 'Введите e-mail',
//     },
//     {
//       rule: 'email',
//       errorMessage: 'Недопустимый формат',
//     },
//   ])
//   .onSuccess((event) => {
//     console.log('Validation passes and form submitted', event);
//     let formData = new FormData(event.target);
//     console.log(...formData);
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Отправлено');
//         }
//       }
//     }
//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);
//     event.target.reset();
//   });

//   const validationContacts = new JustValidate('.callback__form', {
//     errorFieldCssClass: 'is-invalid',
//     errorLabelStyle: {
//       color: '#FF3030',
//     },
//   });
//   validationContacts
//     .addField('.name-input', [
//       {
//         rule: 'customRegexp',
//         value: /^[a-zA-Zа-яА-Яё]/,
//         errorMessage: 'Недопустимый формат',
//       },{
//         rule: 'required',
//         errorMessage: 'Введите ваше имя',
//       },
//     ])
//     .addField('.email-input', [
//       {
//         rule: 'required',
//         errorMessage: 'Введите e-mail',
//       },
//       {
//         rule: 'email',
//         errorMessage: 'Недопустимый формат',
//       },
//     ])
//     .onSuccess((event) => {
//       console.log('Validation passes and form submitted', event);
//       let formData = new FormData(event.target);
//       console.log(...formData);
//       let xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             console.log('Отправлено');
//           }
//         }
//       }
//       xhr.open('POST', 'mail.php', true);
//       xhr.send(formData);
//       event.target.reset();
//     });

const catalog = [
  {
    category: 'КРЕСЛО-ШЕЗЛОНГ',
    id: 'chaise-longue-chair',
    products: [
      {
        id: 1,
        name: 'КРЕСЛА-ШЕЗЛОНГИ',
        price: 3900,
        image: 'img/products/chaise-longue-chair.webp',
        description:
          'Конфеты ручной работы из цельного ядра кедрового ореха с добавлением свежих сибирских ягод (клюква, облепиха, черника, черёмуха) и алтайского мёда, покрытые шоколадной глазурью.',
        'best before date': '6 мес.',
        weight: '120 гр',
        hit: true,
      },
    ],
  },
  {
    category: 'СТОЛИК',
    id: 'table',
    products: [
      {
        id: 1,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: '/img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 2,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 3,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 4,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 5,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
      {
        id: 6,
        name: 'МАЛЕНЬКИЙ СТОЛИК',
        price: 1500,
        image: 'img/products/small-table.webp',
        description:
          'Это натуральный продукт, сохранивший все полезные свойства ягод благодаря низкотемпературной сушке (не более 39 °С). Каждая упаковка содержит не менее 600 граммов свежих ягод и фруктов.',
        'best before date': '6 мес.',
        weight: '100 гр',
      },
    ],
  },
  {
    category: 'ОБЕДЕННЫЙ СТОЛ',
    id: 'dinner-table',
    products: [
      {
        id: 1,
        name: 'ОБЕДЕННЫЙ СТОЛ',
        price: 5900,
        image: 'img/products/dinner-table.webp',
        description:
          'Урбеч – густая жидкая масса, полученная из растертых поджаренных или просто высушенных семян кедра, льна и кунжута',
        'best before date': '6 мес.',
        weight: '200 мл',
      },
      {
        id: 2,
        name: 'ОБЕДЕННЫЙ СТОЛ',
        price: 5900,
        image: 'img/products/dinner-table.webp',
        description:
          'Урбеч – густая жидкая масса, полученная из растертых поджаренных или просто высушенных семян кедра, льна и кунжута',
        'best before date': '6 мес.',
        weight: '200 мл',
      },
    ],
  },
  {
    category: 'ПОДСТАВКА ПОД ЦВЕТЫ',
    id: 'flower-stand',
    products: [
      {
        id: 1,
        name: 'ПОДСТАВКА ПОД ЦВЕТЫ',
        price: 1200,
        image: 'img/products/flower-stang.webp',
        description: [],
      },
    ],
  },
  {
    category: 'ПОДСТАВКА ДЛЯ БУТЫЛКИ',
    id: 'stand-for-bottle',
    products: [
      {
        id: 1,
        name: 'ПОДСТАВКА ДЛЯ БОЛЬШИХ БУТЫЛОК',
        price: 800,
        image: 'img/products/flower-stang.webp',
        'best before date': '8 мес.',
        description: [
          'Кедровые приправы от эко-фабрики "Сибирский кедр" - это совершенно новый, ни на что не похожий натуральный эко-продукт! Приправы можно использовать как дополнение к основным блюдам, закускам, салатам, так и сладким десертам. Каждая кедровая приправа имеет свой уникальный рецепт от шеф-повара. В кедровых приправах сохранена вся польза кедровых орешек. Оцените неповторимый вкус!',
        ],
        weight: '0гр.',
      },
    ],
  },
];


// GENERAL

// CATALOG
function createCard(product) {
  const card = document.createElement('div'),
    image = document.createElement('img'),
    cardContent = document.createElement('div'),
    cardTitle = document.createElement('h3'),
    price = document.createElement('p'),
    btnBlock = document.createElement('div'),
    btnMore = document.createElement('button'),
    btnToCard = document.createElement('button');

    card.classList.add('products__card', 'card')
    image.classList.add('card__image')
    cardContent.classList.add('card__content')
    cardTitle.classList.add('card__title', 'title')
    price.classList.add('card__price')
    btnBlock.classList.add('card__buttons')
    btnMore.classList.add('card__button-more', 'button-reset')
    btnToCard.classList.add('card__button-add', 'button-reset')

  image.src = product.image;

  if (product. hasOwnProperty('hit')) {
    card.classList.add('hit')
  }

  cardTitle.textContent = product.name;
  price.textContent = `${product.price} р.`;
  btnMore.textContent = 'ПОДРОБНЕЕ';
  btnToCard.innerHTML = 'В&nbsp;КОРЗИНУ';

  cardContent.append(cardTitle, price, btnBlock);
  btnBlock.append(btnMore, btnToCard)
  card.append(image, cardContent);

  btnMore.addEventListener('click', ()=> alert('Откроется попап'))
  btnToCard.addEventListener('click', ()=> alert('Добавится в корзину'))

  return card

}

function createCatalogSection() {
  const sectionContainer = document.querySelector('.products__container');

  catalog.forEach(category => {
    const categoryBlock = document.createElement('div'),
      categoryTitle = document.createElement('h2');
      blockCards = document.createElement('div');

categoryBlock.classList.add('products__category', 'category');
      categoryTitle.classList.add('category__title', 'title');
      blockCards.classList.add('category__cards');

      categoryBlock.id = category.id;

      categoryTitle.textContent = category.category;
      categoryBlock.append(categoryTitle)

      category.products.forEach(product => {
        const card = createCard(product);
        blockCards.append(card);
        
      })
      categoryBlock.append(blockCards) ;

    sectionContainer.append(categoryBlock)
  })


}



function createProductDropdown() {
  const itemSubmenuButton = document.querySelector('.item-submenu');
  const submenuList =  document.createElement('ui');
  submenuList.classList.add('item-submenu__list', 'list-reset');

  catalog.forEach(category => {
    const listItem = document.createElement('li'),
    listLink = document.createElement('a');

    listItem.classList.add('item-submenu__item');
    listLink.classList.add('link-reset', 'item-submenu__link');

    listLink.setAttribute('href', `#${category.id}`);
    listLink.textContent = category.category;

    listItem.append(listLink);
    submenuList.append(listItem);
  })
  
itemSubmenuButton.append(submenuList)

}

createCatalogSection()
createProductDropdown()


let links = document.querySelectorAll('a[href^="#"]'),
    topOffset = 100;

  links.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').slice(1);
      const targetElem = document.getElementById(href);

      const elemPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elemPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });


  let scrolButton = document.querySelector('.scroll-button');

(function () {
  function showScrollButton() {
    let position = window.pageYOffset;

    if (position > 2000) scrolButton.classList.add('scroll-button-show');
    else scrolButton.classList.remove('scroll-button-show');
  }

  function scroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', showScrollButton, true);
  scrolButton.addEventListener('click', scroll);
})();


// const promoClose = document.querySelector('.promo__close');
// const promoBlock = document.querySelector('.promo');

// promoClose.addEventListener('click', ()=> {
//   promoBlock.remove()
// })

// LOADING

window.onload = () => { // Страница загружена полностью вместе с изображениями, стилями и тд

	const progress = () => { // объявляем основную функцию

		const line = document.createElement('div') // создаем элемент <div>
		line.className = 'progress' // назначаем ему класс progress
		
		document.body.prepend(line) // вставляем созданный элемент <div> в начало <body>

		const progressWidth = () => { // объявляем функцию расчета ширины элемента <div>
			return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'
		}

		progressWidth() // вызываем функцию progressWidth, когда страница загружена, для корректного отображения ширины индикатора прокрутки

		document.addEventListener('scroll', throttle(progressWidth, 64)) // вызываем функцию при прокрутке
		window.addEventListener('resize', throttle(progressWidth, 64)) // вызываем функцию при изменения размеров окна

	}

	progress() // вызываем основную функцию

}

// функция throttle будет ограничивать частоту вызовов функции progressWidth
const throttle = (func, ms) => { // объявляем функцию throttle и передаем параметры: func - функция, частоту вызовов которой будем ограничивать, ms - время, которое должно пройти между предыдущим и следующим вызовом функции func
	let locked = false // создаем переменную, которая будет блокировать вызов функции
	return () => { // при вызове функции throttle, автоматически вызывается анонимная функция, которая будет иметь доступ к переменной isThrottled
		if (locked) return // если заблокировано, то прекращаем выполнение функции
		locked = true // следующий вызов функции wrapper блокируется, пока не истечет переданное время в ms
		setTimeout(() => { // когда истекает переданное время в ms, внутренний код выполняется
			func() // выполняем переданную функцию func
			locked = false // снимаем блокировку
		}, ms) // подставляем переданное время в ms
	}
}


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => burger.classList.toggle('active'))


function createPromoBlock() {
  const promoBlock = document.createElement('div');
  const promoDescription = document.createElement('p');
  const promoConsultationButton = document.createElement('button');
  const promoClose = document.createElement('button');

  promoDescription.innerHTML = 'Не&nbsp;можете определиться? Мы&nbsp;с&nbsp;удовольствием Вас проконсультируем';
  promoConsultationButton.textContent = 'Консультация';

  promoBlock.classList.add('promo');
  promoDescription.classList.add('promo__description', 'description');
  promoConsultationButton.classList.add('promo__consultation', 'button-reset');
  promoClose.classList.add('promo__close', 'button-reset');

  promoBlock.append(promoDescription, promoConsultationButton, promoClose);

  promoClose.addEventListener('click', ()=> promoBlock.remove());
  

  if (window.innerWidth > 980) {
    document.body.append(promoBlock)
  } else {
    promoBlock.style.padding = '20px 40px';
    promoBlock.style.gap = '10px';
    promoBlock.style.height = 'auto';
    const aboutUsSection = document.querySelector('.about-us');

    aboutUsSection.before(promoBlock)
  }
}

createPromoBlock()


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiQEBpbmNsdWRlKCd2ZW5kb3IuanMnKVxyXG5AQGluY2x1ZGUoJ2NhdGFsb2cuanMnKVxyXG5cclxuLy8gR0VORVJBTFxyXG5cclxuLy8gQ0FUQUxPR1xyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHByb2R1Y3QpIHtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLFxyXG4gICAgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyksXHJcbiAgICBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgIGJ0bkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBidG5Nb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICBidG5Ub0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3RzX19jYXJkJywgJ2NhcmQnKVxyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9faW1hZ2UnKVxyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fY29udGVudCcpXHJcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fdGl0bGUnLCAndGl0bGUnKVxyXG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZF9fcHJpY2UnKVxyXG4gICAgYnRuQmxvY2suY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9ucycpXHJcbiAgICBidG5Nb3JlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2J1dHRvbi1tb3JlJywgJ2J1dHRvbi1yZXNldCcpXHJcbiAgICBidG5Ub0NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uLWFkZCcsICdidXR0b24tcmVzZXQnKVxyXG5cclxuICBpbWFnZS5zcmMgPSBwcm9kdWN0LmltYWdlO1xyXG5cclxuICBpZiAocHJvZHVjdC4gaGFzT3duUHJvcGVydHkoJ2hpdCcpKSB7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXHJcbiAgfVxyXG5cclxuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBgJHtwcm9kdWN0LnByaWNlfSDRgC5gO1xyXG4gIGJ0bk1vcmUudGV4dENvbnRlbnQgPSAn0J/QntCU0KDQntCR0J3QldCVJztcclxuICBidG5Ub0NhcmQuaW5uZXJIVE1MID0gJ9CSJm5ic3A70JrQntCg0JfQmNCd0KMnO1xyXG5cclxuICBjYXJkQ29udGVudC5hcHBlbmQoY2FyZFRpdGxlLCBwcmljZSwgYnRuQmxvY2spO1xyXG4gIGJ0bkJsb2NrLmFwcGVuZChidG5Nb3JlLCBidG5Ub0NhcmQpXHJcbiAgY2FyZC5hcHBlbmQoaW1hZ2UsIGNhcmRDb250ZW50KTtcclxuXHJcbiAgYnRuTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gYWxlcnQoJ9Ce0YLQutGA0L7QtdGC0YHRjyDQv9C+0L/QsNC/JykpXHJcbiAgYnRuVG9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBhbGVydCgn0JTQvtCx0LDQstC40YLRgdGPINCyINC60L7RgNC30LjQvdGDJykpXHJcblxyXG4gIHJldHVybiBjYXJkXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXRhbG9nU2VjdGlvbigpIHtcclxuICBjb25zdCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzX19jb250YWluZXInKTtcclxuXHJcbiAgY2F0YWxvZy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgIGJsb2NrQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmNhdGVnb3J5QmxvY2suY2xhc3NMaXN0LmFkZCgncHJvZHVjdHNfX2NhdGVnb3J5JywgJ2NhdGVnb3J5Jyk7XHJcbiAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX3RpdGxlJywgJ3RpdGxlJyk7XHJcbiAgICAgIGJsb2NrQ2FyZHMuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2NhcmRzJyk7XHJcblxyXG4gICAgICBjYXRlZ29yeUJsb2NrLmlkID0gY2F0ZWdvcnkuaWQ7XHJcblxyXG4gICAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnkuY2F0ZWdvcnk7XHJcbiAgICAgIGNhdGVnb3J5QmxvY2suYXBwZW5kKGNhdGVnb3J5VGl0bGUpXHJcblxyXG4gICAgICBjYXRlZ29yeS5wcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKHByb2R1Y3QpO1xyXG4gICAgICAgIGJsb2NrQ2FyZHMuYXBwZW5kKGNhcmQpO1xyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICBjYXRlZ29yeUJsb2NrLmFwcGVuZChibG9ja0NhcmRzKSA7XHJcblxyXG4gICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnlCbG9jaylcclxuICB9KVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvZHVjdERyb3Bkb3duKCkge1xyXG4gIGNvbnN0IGl0ZW1TdWJtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3VibWVudScpO1xyXG4gIGNvbnN0IHN1Ym1lbnVMaXN0ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VpJyk7XHJcbiAgc3VibWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnaXRlbS1zdWJtZW51X19saXN0JywgJ2xpc3QtcmVzZXQnKTtcclxuXHJcbiAgY2F0YWxvZy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcclxuICAgIGxpc3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3VibWVudV9faXRlbScpO1xyXG4gICAgbGlzdExpbmsuY2xhc3NMaXN0LmFkZCgnbGluay1yZXNldCcsICdpdGVtLXN1Ym1lbnVfX2xpbmsnKTtcclxuXHJcbiAgICBsaXN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7Y2F0ZWdvcnkuaWR9YCk7XHJcbiAgICBsaXN0TGluay50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5O1xyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZChsaXN0TGluayk7XHJcbiAgICBzdWJtZW51TGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xyXG4gIH0pXHJcbiAgXHJcbml0ZW1TdWJtZW51QnV0dG9uLmFwcGVuZChzdWJtZW51TGlzdClcclxuXHJcbn1cclxuXHJcbmNyZWF0ZUNhdGFsb2dTZWN0aW9uKClcclxuY3JlYXRlUHJvZHVjdERyb3Bkb3duKClcclxuXHJcblxyXG5sZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLFxyXG4gICAgdG9wT2Zmc2V0ID0gMTAwO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNsaWNlKDEpO1xyXG4gICAgICBjb25zdCB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XHJcblxyXG4gICAgICBjb25zdCBlbGVtUG9zaXRpb24gPSB0YXJnZXRFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtUG9zaXRpb24gLSB0b3BPZmZzZXQ7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIGxldCBzY3JvbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtYnV0dG9uJyk7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIHNob3dTY3JvbGxCdXR0b24oKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID4gMjAwMCkgc2Nyb2xCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJ1dHRvbi1zaG93Jyk7XHJcbiAgICBlbHNlIHNjcm9sQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1idXR0b24tc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2hvd1Njcm9sbEJ1dHRvbiwgdHJ1ZSk7XHJcbiAgc2Nyb2xCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzY3JvbGwpO1xyXG59KSgpO1xyXG5cclxuXHJcbi8vIGNvbnN0IHByb21vQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbW9fX2Nsb3NlJyk7XHJcbi8vIGNvbnN0IHByb21vQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbW8nKTtcclxuXHJcbi8vIHByb21vQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuLy8gICBwcm9tb0Jsb2NrLnJlbW92ZSgpXHJcbi8vIH0pXHJcblxyXG4vLyBMT0FESU5HXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4geyAvLyDQodGC0YDQsNC90LjRhtCwINC30LDQs9GA0YPQttC10L3QsCDQv9C+0LvQvdC+0YHRgtGM0Y4g0LLQvNC10YHRgtC1INGBINC40LfQvtCx0YDQsNC20LXQvdC40Y/QvNC4LCDRgdGC0LjQu9GP0LzQuCDQuCDRgtC0XHJcblxyXG5cdGNvbnN0IHByb2dyZXNzID0gKCkgPT4geyAvLyDQvtCx0YrRj9Cy0LvRj9C10Lwg0L7RgdC90L7QstC90YPRjiDRhNGD0L3QutGG0LjRjlxyXG5cclxuXHRcdGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvLyDRgdC+0LfQtNCw0LXQvCDRjdC70LXQvNC10L3RgiA8ZGl2PlxyXG5cdFx0bGluZS5jbGFzc05hbWUgPSAncHJvZ3Jlc3MnIC8vINC90LDQt9C90LDRh9Cw0LXQvCDQtdC80YMg0LrQu9Cw0YHRgSBwcm9ncmVzc1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5ib2R5LnByZXBlbmQobGluZSkgLy8g0LLRgdGC0LDQstC70Y/QtdC8INGB0L7Qt9C00LDQvdC90YvQuSDRjdC70LXQvNC10L3RgiA8ZGl2PiDQsiDQvdCw0YfQsNC70L4gPGJvZHk+XHJcblxyXG5cdFx0Y29uc3QgcHJvZ3Jlc3NXaWR0aCA9ICgpID0+IHsgLy8g0L7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOINGA0LDRgdGH0LXRgtCwINGI0LjRgNC40L3RiyDRjdC70LXQvNC10L3RgtCwIDxkaXY+XHJcblx0XHRcdHJldHVybiBsaW5lLnN0eWxlLndpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApICsgJyUnXHJcblx0XHR9XHJcblxyXG5cdFx0cHJvZ3Jlc3NXaWR0aCgpIC8vINCy0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4gcHJvZ3Jlc3NXaWR0aCwg0LrQvtCz0LTQsCDRgdGC0YDQsNC90LjRhtCwINC30LDQs9GA0YPQttC10L3QsCwg0LTQu9GPINC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDRiNC40YDQuNC90Ysg0LjQvdC00LjQutCw0YLQvtGA0LAg0L/RgNC+0LrRgNGD0YLQutC4XHJcblxyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUocHJvZ3Jlc3NXaWR0aCwgNjQpKSAvLyDQstGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LVcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZShwcm9ncmVzc1dpZHRoLCA2NCkpIC8vINCy0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4g0L/RgNC4INC40LfQvNC10L3QtdC90LjRjyDRgNCw0LfQvNC10YDQvtCyINC+0LrQvdCwXHJcblxyXG5cdH1cclxuXHJcblx0cHJvZ3Jlc3MoKSAvLyDQstGL0LfRi9Cy0LDQtdC8INC+0YHQvdC+0LLQvdGD0Y4g0YTRg9C90LrRhtC40Y5cclxuXHJcbn1cclxuXHJcbi8vINGE0YPQvdC60YbQuNGPIHRocm90dGxlINCx0YPQtNC10YIg0L7Qs9GA0LDQvdC40YfQuNCy0LDRgtGMINGH0LDRgdGC0L7RgtGDINCy0YvQt9C+0LLQvtCyINGE0YPQvdC60YbQuNC4IHByb2dyZXNzV2lkdGhcclxuY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgbXMpID0+IHsgLy8g0L7QsdGK0Y/QstC70Y/QtdC8INGE0YPQvdC60YbQuNGOIHRocm90dGxlINC4INC/0LXRgNC10LTQsNC10Lwg0L/QsNGA0LDQvNC10YLRgNGLOiBmdW5jIC0g0YTRg9C90LrRhtC40Y8sINGH0LDRgdGC0L7RgtGDINCy0YvQt9C+0LLQvtCyINC60L7RgtC+0YDQvtC5INCx0YPQtNC10Lwg0L7Qs9GA0LDQvdC40YfQuNCy0LDRgtGMLCBtcyAtINCy0YDQtdC80Y8sINC60L7RgtC+0YDQvtC1INC00L7Qu9C20L3QviDQv9GA0L7QudGC0Lgg0LzQtdC20LTRgyDQv9GA0LXQtNGL0LTRg9GJ0LjQvCDQuCDRgdC70LXQtNGD0Y7RidC40Lwg0LLRi9C30L7QstC+0Lwg0YTRg9C90LrRhtC40LggZnVuY1xyXG5cdGxldCBsb2NrZWQgPSBmYWxzZSAvLyDRgdC+0LfQtNCw0LXQvCDQv9C10YDQtdC80LXQvdC90YPRjiwg0LrQvtGC0L7RgNCw0Y8g0LHRg9C00LXRgiDQsdC70L7QutC40YDQvtCy0LDRgtGMINCy0YvQt9C+0LIg0YTRg9C90LrRhtC40LhcclxuXHRyZXR1cm4gKCkgPT4geyAvLyDQv9GA0Lgg0LLRi9C30L7QstC1INGE0YPQvdC60YbQuNC4IHRocm90dGxlLCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQsNC90L7QvdC40LzQvdCw0Y8g0YTRg9C90LrRhtC40Y8sINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LjQvNC10YLRjCDQtNC+0YHRgtGD0L8g0Log0L/QtdGA0LXQvNC10L3QvdC+0LkgaXNUaHJvdHRsZWRcclxuXHRcdGlmIChsb2NrZWQpIHJldHVybiAvLyDQtdGB0LvQuCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0L3Qviwg0YLQviDQv9GA0LXQutGA0LDRidCw0LXQvCDQstGL0L/QvtC70L3QtdC90LjQtSDRhNGD0L3QutGG0LjQuFxyXG5cdFx0bG9ja2VkID0gdHJ1ZSAvLyDRgdC70LXQtNGD0Y7RidC40Lkg0LLRi9C30L7QsiDRhNGD0L3QutGG0LjQuCB3cmFwcGVyINCx0LvQvtC60LjRgNGD0LXRgtGB0Y8sINC/0L7QutCwINC90LUg0LjRgdGC0LXRh9C10YIg0L/QtdGA0LXQtNCw0L3QvdC+0LUg0LLRgNC10LzRjyDQsiBtc1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7IC8vINC60L7Qs9C00LAg0LjRgdGC0LXQutCw0LXRgiDQv9C10YDQtdC00LDQvdC90L7QtSDQstGA0LXQvNGPINCyIG1zLCDQstC90YPRgtGA0LXQvdC90LjQuSDQutC+0LQg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRj1xyXG5cdFx0XHRmdW5jKCkgLy8g0LLRi9C/0L7Qu9C90Y/QtdC8INC/0LXRgNC10LTQsNC90L3Rg9GOINGE0YPQvdC60YbQuNGOIGZ1bmNcclxuXHRcdFx0bG9ja2VkID0gZmFsc2UgLy8g0YHQvdC40LzQsNC10Lwg0LHQu9C+0LrQuNGA0L7QstC60YNcclxuXHRcdH0sIG1zKSAvLyDQv9C+0LTRgdGC0LDQstC70Y/QtdC8INC/0LXRgNC10LTQsNC90L3QvtC1INCy0YDQtdC80Y8g0LIgbXNcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSlcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9tb0Jsb2NrKCkge1xyXG4gIGNvbnN0IHByb21vQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwcm9tb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHByb21vQ29uc3VsdGF0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgcHJvbW9DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBwcm9tb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9ICfQndC1Jm5ic3A70LzQvtC20LXRgtC1INC+0L/RgNC10LTQtdC70LjRgtGM0YHRjz8g0JzRiyZuYnNwO9GBJm5ic3A70YPQtNC+0LLQvtC70YzRgdGC0LLQuNC10Lwg0JLQsNGBINC/0YDQvtC60L7QvdGB0YPQu9GM0YLQuNGA0YPQtdC8JztcclxuICBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICfQmtC+0L3RgdGD0LvRjNGC0LDRhtC40Y8nO1xyXG5cclxuICBwcm9tb0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3Byb21vJyk7XHJcbiAgcHJvbW9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9tb19fZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nKTtcclxuICBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9tb19fY29uc3VsdGF0aW9uJywgJ2J1dHRvbi1yZXNldCcpO1xyXG4gIHByb21vQ2xvc2UuY2xhc3NMaXN0LmFkZCgncHJvbW9fX2Nsb3NlJywgJ2J1dHRvbi1yZXNldCcpO1xyXG5cclxuICBwcm9tb0Jsb2NrLmFwcGVuZChwcm9tb0Rlc2NyaXB0aW9uLCBwcm9tb0NvbnN1bHRhdGlvbkJ1dHRvbiwgcHJvbW9DbG9zZSk7XHJcblxyXG4gIHByb21vQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHByb21vQmxvY2sucmVtb3ZlKCkpO1xyXG4gIFxyXG5cclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5ODApIHtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb21vQmxvY2spXHJcbiAgfSBlbHNlIHtcclxuICAgIHByb21vQmxvY2suc3R5bGUucGFkZGluZyA9ICcyMHB4IDQwcHgnO1xyXG4gICAgcHJvbW9CbG9jay5zdHlsZS5nYXAgPSAnMTBweCc7XHJcbiAgICBwcm9tb0Jsb2NrLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgIGNvbnN0IGFib3V0VXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LXVzJyk7XHJcblxyXG4gICAgYWJvdXRVc1NlY3Rpb24uYmVmb3JlKHByb21vQmxvY2spXHJcbiAgfVxyXG59XHJcblxyXG5jcmVhdGVQcm9tb0Jsb2NrKClcclxuXHJcbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
