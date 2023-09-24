function I(t){const e=["8191A403","8191A404","8191A405","8191B403","8191B404","8191B405","8191C402","8191C403","8191C404","8191C405","8191C406","8191D403","8191D404","8191D405","8291A403","8291A404","8291A405","8291B403","8291B404","8291B405","8291C403","8291C404","8291C405","8291D404","8391C404"];return"Euclid"==t&&e.splice(-2,2,"F3556C2D","","","","","","","","","",""),new Set(e)}!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const G={input:{themeswitcher:"themeswitcher",galaxyInput:"galaxyInput",portalglyphsInput:"portalglyphsInput",delButton:"delButton",submitBtnGen:"submitBtnGen",resetBtnGen:"resetBtnGen",tagInput:"tagInput",submitBtnDec:"submitBtnDec",resetBtnDec:"resetBtnDec"},output:{toc:"toc",glyphDisplay:"glyphDisplay"}},u={};function L(t){for(const e of Object.entries(t)){const t=e[0],n=e[1];for(const[e,r]of Object.entries(n)){const n=v(r);null!=n&&(u[t]??(u[t]={}),u[t][e]=n)}}}function v(t){const e=Array.from(document.getElementsByName(t));return e.length?e:document.getElementById(t)}function C(t){const e=D(t),n=document.querySelector(`#${e} .output`),r=n.querySelector("output"),o=n.querySelector(".status"),u={generator:()=>P(),decoder:()=>H()},{status:c="",output:l=""}=u[e](),s=c.includes("Error");n.classList[s?"add":"remove"]("error"),o.innerText=c,r.innerText=l}function b(t){const e=D(t),n=document.getElementById(e),r=n.querySelector("input"),o=Array.from(n.querySelectorAll("output, .output>*")),u=Array.from(n.querySelectorAll(".error"));for(const t of u)t.classList.remove("error");for(const t of o)t.innerHTML="";r.value=""}L(G);const R=window.matchMedia("(prefers-color-scheme: dark)").matches;function O(t=null){const e="dark"==document.documentElement.dataset.theme?"light":"dark",n=t??e;document.documentElement.dataset.theme=n}O(R?"dark":"light");const T=[{element:"themeswitcher",handler:"click",func:function(){O()}},{element:"galaxyInput",handler:"change",func:function(){w()}},{element:"portalglyphsInput",handler:"input",func:function(){q(this)}},{element:"delButton",handler:"click",func:function(){k("portalglyphsInput")}},{element:"tagInput",handler:"input",func:function(){this.value=this.value.toUpperCase()}},{element:"submitBtnGen",handler:"click",func:function(){C(this)}},{element:"resetBtnGen",handler:"click",func:function(){b(this)}},{element:"submitBtnDec",handler:"click",func:function(){C(this)}},{element:"resetBtnDec",handler:"click",func:function(){b(this)}}];for(const t of T)B(t);function B(t){const{handler:e,func:n}=t,r=t.element,o=u[r]?u[r]:v(r);Array.isArray(o)?o.forEach((t=>t.addEventListener(e,n))):o.addEventListener(e,n)}const y="0123456789ABCDEF",S=767,h=4,a=12,V=document.querySelector(".portal-buttons"),x=[],A=[];for(let t=0;t<y.length;t++){const e={element:"glyphButton"+t.toString(),handler:"click",func:function(){N(this)}},n=y[t],r=`<button class="button glyphs" type="button" id="glyphButton${t}" value="${n}">${n}</button>`;x.push(r),A.push(e)}V.innerHTML=x.join("");for(const t of A)B(t);function q(t){var e,n;const r=null==(n=null==(e=null==t?void 0:t.value)?void 0:e.toUpperCase)?void 0:n.call(e);if(null==r)return;const o=r.split("").filter((t=>y.includes(t))).join("").substring(0,a);t.value=o,E(),g(t)}function E(){const t=u.input.portalglyphsInput;u.output.glyphDisplay.innerText=t.value}function N(t){const e=u.input.portalglyphsInput;e.value.length<a&&(e.value+=t.value),E(),g(e)}function k(t){const e=document.getElementById(t),n=e.value.slice(0,-1);e.value=n,E(),g(e)}function g(t,e=!1){const n=t.value,r=n.substring(h),o=+("0x"+n.substring(1,h)),u=I(p),c=n.length==a,l=u.has(r),s=o&&o<S+1,i=e||n.length==a?c&&l&&s:n.length!=a;if(t.classList[i?"remove":"add"]("error"),!i){if(!c)return{isValid:!1,error:"Invalid glyph sequence: Incorrect length"};if(!l)return{isValid:!1,error:"Invalid glyph sequence: No CORE region"};if(!s)return{isValid:!1,error:"Invalid glyph sequence: Not reachable via portal"}}return{isValid:!0}}function j(t){const e=t.substring(h),n=Array.from(I(p)).indexOf(e);return n>-1?n+1:0}function M(t){const e=+("0x"+t.substring(1,h));return!e||e>S?"":e.toString(16).toUpperCase().replace("69","68+1")}let p;const F=3;w();const $=["coretag.nmscore.com","core-tag.nmscore.com","core-tag-generator.nmscore.com"];function w(){const t=u.input.galaxyInput,e=u.output.toc,n=document.querySelector("main");p=t.value,[n,e].forEach((t=>t.style.display=p?"":"none"))}function D(t){return t.closest("section").id}function P(){const t=u.input.portalglyphsInput,e=t.value,{isValid:n,error:r=""}=g(t,!0);if(!e)return{status:"",output:""};if(!n)return{status:"Error:",output:r};return{status:"Your CORE Tag:",output:`[CORE${j(e)}-${M(e)}]`}}function H(){const t=u.input.tagInput.value.replaceAll(/[\[\]]/g,"").replaceAll("68+1","69").trim();if(!t)return{status:"",output:""};const e=Array.from(I(p)),[n,r]=t.split("-"),o=n.replace("CORE",""),c=e[parseInt(o)-1];if(!r||!c||!n.startsWith("CORE")){let t="";return r?(!c||!n.startsWith("CORE"))&&(t='Invalid CORE tag format (no "CORE" or wrong region ID)'):t='Invalid CORE tag format (missing "-")',{status:"Error:",output:t}}return{status:"Glyphs:",output:"0"+r.padStart(F,"0")+c}}$.includes(window.location.host)&&(document.querySelector('a[href=".."]').href="https://NerdMachine0.github.io/");