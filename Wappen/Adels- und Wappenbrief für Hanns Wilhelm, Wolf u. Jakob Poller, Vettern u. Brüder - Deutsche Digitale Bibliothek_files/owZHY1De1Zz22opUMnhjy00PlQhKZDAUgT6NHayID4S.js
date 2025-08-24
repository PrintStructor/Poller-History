/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/*	
 *	jQuery dotdotdot 1.5.1
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ )
{
	if ( $.fn.dotdotdot )
	{
		return;
	}

	$.fn.dotdotdot = function( o )
	{
		if ( this.length == 0 )
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}
		if ( this.length > 1 )
		{
			return this.each(
				function()
				{
					$(this).dotdotdot( o );
				}
			);
		}


		var $dot = this;

		if ( $dot.data( 'dotdotdot' ) )
		{
			$dot.trigger( 'destroy.dot' );
		}

		$dot.bind_events = function()
		{
			$dot.bind(
				'update.dot',
				function( e, c )
				{
					e.preventDefault();
					e.stopPropagation();

					opts.maxHeight = ( typeof opts.height == 'number' ) 
						? opts.height 
						: getTrueInnerHeight( $dot );

					opts.maxHeight += opts.tolerance;

					if ( typeof c != 'undefined' )
					{
						if ( typeof c == 'string' || c instanceof HTMLElement )
						{
					 		c = $('<div />').append( c ).contents();
						}
						if ( c instanceof $ )
						{
							orgContent = c;
						}
					}

					$inr = $dot.wrapInner( '<div class="dotdotdot" />' ).children();
					$inr.empty()
						.append( orgContent.clone( true ) )
						.css({
							'height'	: 'auto',
							'width'		: 'auto',
							'border'	: 'none',
							'padding'	: 0,
							'margin'	: 0
						});

					var after = false,
						trunc = false;

					if ( conf.afterElement )
					{
						after = conf.afterElement.clone( true );
						conf.afterElement.remove();
					}
					if ( test( $inr, opts ) )
					{
						if ( opts.wrap == 'children' )
						{
							trunc = children( $inr, opts, after );
						}
						else
						{
							trunc = ellipsis( $inr, $dot, $inr, opts, after );
						}
					}
					$inr.replaceWith( $inr.contents() );
					$inr = null;
					
					if ( $.isFunction( opts.callback ) )
					{
						opts.callback.call( $dot[ 0 ], trunc, orgContent );
					}

					conf.isTruncated = trunc;
					return trunc;
				}

			).bind(
				'isTruncated.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], conf.isTruncated );
					}
					return conf.isTruncated;
				}

			).bind(
				'originalContent.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], orgContent );
					}
					return orgContent;
				}

			).bind(
				'destroy.dot',
				function( e )
				{
					e.preventDefault();
					e.stopPropagation();

					$dot.unwatch()
						.unbind_events()
						.empty()
						.append( orgContent )
						.data( 'dotdotdot', false );
				}
			);
			return $dot;
		};	//	/bind_events

		$dot.unbind_events = function()
		{
			$dot.unbind('.dot');
			return $dot;
		};	//	/unbind_events

		$dot.watch = function()
		{
			$dot.unwatch();
			if ( opts.watch == 'window' )
			{
				var $window = $(window),
					_wWidth = $window.width(),
					_wHeight = $window.height(); 

				$window.bind(
					'resize.dot' + conf.dotId,
					function()
					{
						if ( _wWidth != $window.width() || _wHeight != $window.height() || !opts.windowResizeFix )
						{
							_wWidth = $window.width();
							_wHeight = $window.height();
	
							if ( watchInt )
							{
								clearInterval( watchInt );
							}
							watchInt = setTimeout(
								function()
								{
									$dot.trigger( 'update.dot' );
								}, 10
							);
						}
					}
				);
			}
			else
			{
				watchOrg = getSizes( $dot );
				watchInt = setInterval(
					function()
					{
						var watchNew = getSizes( $dot );
						if ( watchOrg.width  != watchNew.width ||
							 watchOrg.height != watchNew.height )
						{
							$dot.trigger( 'update.dot' );
							watchOrg = getSizes( $dot );
						}
					}, 100
				);
			}
			return $dot;
		};
		$dot.unwatch = function()
		{
			$(window).unbind( 'resize.dot' + conf.dotId );
			if ( watchInt )
			{
				clearInterval( watchInt );
			}
			return $dot;
		};

		var	orgContent	= $dot.contents(),
			opts 		= $.extend( true, {}, $.fn.dotdotdot.defaults, o ),
			conf		= {},
			watchOrg	= {},
			watchInt	= null,
			$inr		= null;

		conf.afterElement	= getElement( opts.after, $dot );
		conf.isTruncated	= false;
		conf.dotId			= dotId++;


		$dot.data( 'dotdotdot', true )
			.bind_events()
			.trigger( 'update.dot' );

		if ( opts.watch )
		{
			$dot.watch();
		}

		return $dot;
	};


	//	public
	$.fn.dotdotdot.defaults = {
		'ellipsis'	: '... ',
		'wrap'		: 'word',
		'lastCharacter': {
			'remove'		: [ ' ', ',', ';', '.', '!', '?' ],
			'noEllipsis'	: []
		},
		'tolerance'	: 0,
		'callback'	: null,
		'after'		: null,
		'height'	: null,
		'watch'		: false,
		'windowResizeFix': true,
		'debug'		: false
	};
	

	//	private
	var dotId = 1;

	function children( $elem, o, after )
	{
		var $elements 	= $elem.children(),
			isTruncated	= false;

		$elem.empty();

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{
			var $e = $elements.eq( a );
			$elem.append( $e );
			if ( after )
			{
				$elem.append( after );
			}
			if ( test( $elem, o ) )
			{
				$e.remove();
				isTruncated = true;
				break;
			}
			else
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsis( $elem, $d, $i, o, after )
	{
		var $elements 	= $elem.contents(),
			isTruncated	= false;

		$elem.empty();

		var notx = 'table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style';
		for ( var a = 0, l = $elements.length; a < l; a++ )
		{

			if ( isTruncated )
			{
				break;
			}

			var e	= $elements[ a ],
				$e	= $(e);

			if ( typeof e == 'undefined' )
			{
				continue;
			}

			$elem.append( $e );
			if ( after )
			{
				var func = ( $elem.is( notx ) )
					? 'after'
					: 'append';
				$elem[ func ]( after );
			}
			if ( e.nodeType == 3 )
			{
				if ( test( $i, o ) )
				{
					isTruncated = ellipsisElement( $e, $d, $i, o, after );
				}
			}
			else
			{
				isTruncated = ellipsis( $e, $d, $i, o, after );
			}

			if ( !isTruncated )
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsisElement( $e, $d, $i, o, after )
	{
		var isTruncated	= false,
			e			= $e[ 0 ];

		if ( typeof e == 'undefined' )
		{
			return false;
		}

		var seporator	= ( o.wrap == 'letter' ) ? '' : ' ',
			textArr		= getTextContent( e ).split( seporator ),
			position 	= -1,
			midPos		= -1,
			startPos	= 0,
			endPos		= textArr.length - 1;

		while ( startPos <= endPos )
		{
			var m = Math.floor( ( startPos + endPos ) / 2 );
			if ( m == midPos ) 
			{
				break;
			}
			midPos = m;

			setTextContent( e, textArr.slice( 0, midPos + 1 ).join( seporator ) + o.ellipsis );

			if ( !test( $i, o ) )
			{
				position	= midPos;
				startPos	= midPos; 
			}
			else
			{
				endPos		= midPos;
			}				
		}	
	
		if ( position != -1 )
		{
			var txt = textArr.slice( 0, position + 1 ).join( seporator );
			isTruncated = true;

			while( $.inArray( txt.slice( -1 ), o.lastCharacter.remove ) > -1 )
			{
				txt = txt.slice( 0, -1 );
			}
			if ( $.inArray( txt.slice( -1 ), o.lastCharacter.noEllipsis ) < 0 )
			{
				txt += o.ellipsis;
			}
			setTextContent( e, txt );
		}
		else
		{
			var $w = $e.parent();
			$e.remove();
			$n = $w.contents().eq( -1 );

			isTruncated = ellipsisElement( $n, $d, $i, o, after );
		}

		return isTruncated;
	}
	function test( $i, o )
	{
		return $i.innerHeight() > o.maxHeight;
	}
	function getSizes( $d )
	{
		return {
			'width'	: $d.innerWidth(),
			'height': $d.innerHeight()
		};
	}
	function setTextContent( e, content )
	{
		if ( e.innerText )
		{
			e.innerText = content;
		}
		else if ( e.nodeValue )
		{
			e.nodeValue = content;
		}
		else if (e.textContent)
		{
			e.textContent = content;
		}
	}
	function getTextContent( e )
	{
		if ( e.innerText )
		{
			return e.innerText;
		}
		else if ( e.nodeValue )
		{
			return e.nodeValue;
		}
		else if ( e.textContent )
		{
			return e.textContent;
		}
		else
		{
			return "";
		}
	}
	function getElement( e, $i )
	{
		if ( typeof e == 'undefined' )
		{
			return false;
		}
		if ( !e )
		{
			return false;
		}
		if ( typeof e == 'string' )
		{
			e = $(e, $i);
			return ( e.length )
				? e 
				: false;
		}
		if ( typeof e == 'object' )
		{
			return ( typeof e.jquery == 'undefined' )
				? false
				: e;
		}
		return false;
	}
	function getTrueInnerHeight( $el )
	{
		var h = $el.innerHeight(),
			a = [ 'paddingTop', 'paddingBottom' ];

		for ( z = 0, l = a.length; z < l; z++ ) {
			var m = parseInt( $el.css( a[ z ] ), 10 );
			if ( isNaN( m ) )
			{
				m = 0;
			}
			h -= m;
		}
		return h;
	}
	function debug( d, m )
	{
		if ( !d )
		{
			return false;
		}
		if ( typeof m == 'string' )
		{
			m = 'dotdotdot: ' + m;
		}
		else
		{
			m = [ 'dotdotdot:', m ];
		}

		if ( window.console && window.console.log )
		{
			window.console.log( m );
		}
		return false;
	}
	

	//	override jQuery.html
	var _orgHtml = $.fn.html;
    $.fn.html = function( str ) {
		if ( typeof str != 'undefined' )
		{
			if ( this.data( 'dotdotdot' ) )
			{
				if ( typeof str != 'function' )
				{
					return this.trigger( 'update', [ str ] );
				}
			}
			return _orgHtml.call( this, str );
		}
		return _orgHtml.call( this );
    };


	//	override jQuery.text
	var _orgText = $.fn.text;
    $.fn.text = function( str ) {
		if ( typeof str != 'undefined' )
		{
			if ( this.data( 'dotdotdot' ) )
			{
				var temp = $( '<div />' );
				temp.text( str );
				str = temp.html();
				temp.remove();
				return this.trigger( 'update', [ str ] );
			}
			return _orgText.call( this, str );
		}
        return _orgText.call( this );
    };


})( jQuery );
/*
 *	jQuery carouFredSel 6.2.0
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(D($){8($.1s.1v){H}$.1s.6i=$.1s.1v=D(u,w){8(1l.S==0){18(J,\'6j 55 6k 1j "\'+1l.4o+\'".\');H 1l}8(1l.S>1){H 1l.1W(D(){$(1l).1v(u,w)})}F y=1l,$12=1l[0],56=L;8(y.1q(\'57\')){56=y.1P(\'3o\',\'4p\');y.T(\'3o\',[\'4q\',J])}F z={};z.59=D(o,a,b){o=3S($12,o);o.E=6l($12,o.E);o.1K=6m($12,o.1K);o.N=6n($12,o.N);o.14=5a($12,o.14);o.16=5a($12,o.16);o.1b=6o($12,o.1b);o.1r=6p($12,o.1r);o.1Q=6q($12,o.1Q);8(a){31=$.1L(J,{},$.1s.1v.5b,o)}7=$.1L(J,{},$.1s.1v.5b,o);7.d=6r(7);A.2l=(7.2l==\'5c\'||7.2l==\'1m\')?\'16\':\'14\';F c=y.13(),2m=5d($1n,7,\'P\');8(3p(7.25)){7.25=\'7Q\'+G.3T}7.3U=5e(7,2m);7.E=6s(7.E,7,c,b);7[7.d[\'P\']]=6t(7[7.d[\'P\']],7,c);7[7.d[\'1e\']]=6u(7[7.d[\'1e\']],7,c);8(7.2H){8(!3V(7[7.d[\'P\']])){7[7.d[\'P\']]=\'2I%\'}}8(3V(7[7.d[\'P\']])){A.6v=J;A.4r=7[7.d[\'P\']];7[7.d[\'P\']]=4s(2m,A.4r);8(!7.E.M){7.E.U.1d=J}}8(7.2H){7.1R=L;7.1i=[0,0,0,0];7.1B=L;7.E.U.1d=L}O{8(!7.E.M){7=6w(7,2m)}8(!7[7.d[\'P\']]){8(!7.E.U.1d&&Y(7.E[7.d[\'P\']])&&7.E.1t==\'*\'){7[7.d[\'P\']]=7.E.M*7.E[7.d[\'P\']];7.1B=L}O{7[7.d[\'P\']]=\'1d\'}}8(1z(7.1B)){7.1B=(Y(7[7.d[\'P\']]))?\'5f\':L}8(7.E.U.1d){7.E.M=32(c,7,0)}}8(7.E.1t!=\'*\'&&!7.E.U.1d){7.E.U.4t=7.E.M;7.E.M=3W(c,7,0)}7.E.M=2x(7.E.M,7,7.E.U.2c,$12);7.E.U.20=7.E.M;8(7.2H){8(!7.E.U.34){7.E.U.34=7.E.M}8(!7.E.U.1X){7.E.U.1X=7.E.M}7=5g(7,c,2m)}O{7.1i=6x(7.1i);8(7.1B==\'3q\'){7.1B=\'1m\'}O 8(7.1B==\'5h\'){7.1B=\'35\'}1F(7.1B){R\'5f\':R\'1m\':R\'35\':8(7[7.d[\'P\']]!=\'1d\'){7=5i(7,c);7.1R=J}17;2J:7.1B=L;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?L:J;17}}8(!Y(7.1K.1M)){7.1K.1M=6y}8(1z(7.1K.E)){7.1K.E=(7.2H||7.E.U.1d||7.E.1t!=\'*\')?\'M\':7.E.M}7.N=$.1L(J,{},7.1K,7.N);7.14=$.1L(J,{},7.1K,7.14);7.16=$.1L(J,{},7.1K,7.16);7.1b=$.1L(J,{},7.1K,7.1b);7.N=6z($12,7.N);7.14=5j($12,7.14);7.16=5j($12,7.16);7.1b=6A($12,7.1b);7.1r=6B($12,7.1r);7.1Q=6C($12,7.1Q);8(7.2n){7.2n=5k(7.2n)}8(7.N.5l){7.N.4u=7.N.5l;3X(\'N.5l\',\'N.4u\')}8(7.N.5m){7.N.4v=7.N.5m;3X(\'N.5m\',\'N.4v\')}8(7.N.5n){7.N.4w=7.N.5n;3X(\'N.5n\',\'N.4w\')}8(7.N.5o){7.N.2K=7.N.5o;3X(\'N.5o\',\'N.2K\')}};z.6D=D(){y.1q(\'57\',J);F a=y.13(),3Y=6E(y,[\'6F\',\'6G\',\'3r\',\'3q\',\'35\',\'5h\',\'1m\',\'3Z\',\'P\',\'1e\',\'6H\',\'1S\',\'5p\',\'6I\']),5q=\'7R\';1F(3Y.3r){R\'6J\':R\'7S\':5q=3Y.3r;17}8(G.3s==\'36\'){41($1n)}O{$1n.Z(3Y)}$1n.Z({\'7T\':\'3t\',\'3r\':5q});41(y);y.1q(\'6K\',3Y.3Z);y.Z({\'6F\':\'1m\',\'6G\':\'42\',\'3r\':\'6J\',\'3q\':0,\'35\':\'N\',\'5h\':\'N\',\'1m\':0,\'6H\':0,\'1S\':0,\'5p\':0,\'6I\':0});4x(a,7);41(a);8(7.2H){5r(7,a)}};z.6L=D(){z.5s();y.11(I(\'6M\',G),D(e,a){e.1g();8(!A.2d){8(7.N.W){7.N.W.3a(2y(\'4y\',G))}}A.2d=J;8(7.N.1G){7.N.1G=L;y.T(I(\'3b\',G),a)}H J});y.11(I(\'5t\',G),D(e){e.1g();8(A.26){43(V)}H J});y.11(I(\'3b\',G),D(e,a,b){e.1g();1u=3u(1u);8(a&&A.26){V.2d=J;F c=2o()-V.2L;V.1M-=c;8(V.4z){V.4z.1M-=c}8(V.4A){V.4A.1M-=c}43(V,L)}8(!A.27&&!A.26){8(b){1u.3v+=2o()-1u.2L}}8(!A.27){8(7.N.W){7.N.W.3a(2y(\'6N\',G))}}A.27=J;8(7.N.4v){F d=7.N.2K-1u.3v,3c=2I-1H.2z(d*2I/7.N.2K);7.N.4v.1h($12,3c,d)}H J});y.11(I(\'1G\',G),D(e,b,c,d){e.1g();1u=3u(1u);F v=[b,c,d],t=[\'2M\',\'28\',\'3d\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'14\'&&b!=\'16\'){b=A.2l}8(!Y(c)){c=0}8(!1k(d)){d=L}8(d){A.2d=L;7.N.1G=J}8(!7.N.1G){e.2e();H 18(G,\'3w 4y: 2p 3f.\')}8(A.27){8(7.N.W){7.N.W.2N(2y(\'4y\',G));7.N.W.2N(2y(\'6N\',G))}}A.27=L;1u.2L=2o();F f=7.N.2K+c;44=f-1u.3v;3c=2I-1H.2z(44*2I/f);8(7.N.1f){1u.1f=7U(D(){F a=2o()-1u.2L+1u.3v,3c=1H.2z(a*2I/f);7.N.1f.4B.1h(7.N.1f.2q[0],3c)},7.N.1f.5u)}1u.N=7V(D(){8(7.N.1f){7.N.1f.4B.1h(7.N.1f.2q[0],2I)}8(7.N.4w){7.N.4w.1h($12,3c,44)}8(A.26){y.T(I(\'1G\',G),b)}O{y.T(I(b,G),7.N)}},44);8(7.N.4u){7.N.4u.1h($12,3c,44)}H J});y.11(I(\'3g\',G),D(e){e.1g();8(V.2d){V.2d=L;A.27=L;A.26=J;V.2L=2o();3x(V,G)}O{y.T(I(\'1G\',G))}H J});y.11(I(\'14\',G)+\' \'+I(\'16\',G),D(e,b,f,g,h){e.1g();8(A.2d||y.2f(\':3t\')){e.2e();H 18(G,\'3w 4y 7W 3t: 2p 3f.\')}F i=(Y(7.E.4C))?7.E.4C:7.E.M+1;8(i>K.Q){e.2e();H 18(G,\'2p 6O E (\'+K.Q+\' Q, \'+i+\' 6P): 2p 3f.\')}F v=[b,f,g,h],t=[\'2A\',\'28/2M\',\'D\',\'3d\'],a=3e(v,t);b=a[0];f=a[1];g=a[2];h=a[3];F k=e.5v.19(G.3y.45.S);8(!1T(b)){b={}}8(1o(g)){b.3h=g}8(1k(h)){b.2O=h}b=$.1L(J,{},7[k],b);8(b.5w&&!b.5w.1h($12,k)){e.2e();H 18(G,\'7X "5w" 7Y L.\')}8(!Y(f)){8(7.E.1t!=\'*\'){f=\'M\'}O{F m=[f,b.E,7[k].E];1j(F a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6Q\'||m[a]==\'M\'){f=m[a];17}}}1F(f){R\'6Q\':e.2e();H y.1P(I(k+\'7Z\',G),[b,g]);17;R\'M\':8(!7.E.U.1d&&7.E.1t==\'*\'){f=7.E.M}17}}8(V.2d){y.T(I(\'3g\',G));y.T(I(\'2O\',G),[k,[b,f,g]]);e.2e();H 18(G,\'3w 80 3f.\')}8(b.1M>0){8(A.26){8(b.2O){8(b.2O==\'2P\'){2g=[]}8(b.2O!=\'X\'||2g.S==0){y.T(I(\'2O\',G),[k,[b,f,g]])}}e.2e();H 18(G,\'3w 81 3f.\')}}1u.3v=0;y.T(I(\'6R\'+k,G),[b,f]);8(7.2n){F s=7.2n,c=[b,f];1j(F j=0,l=s.S;j<l;j++){F d=k;8(!s[j][2]){d=(d==\'14\')?\'16\':\'14\'}8(!s[j][1]){c[0]=s[j][0].1P(\'3o\',[\'6S\',d])}c[1]=f+s[j][3];s[j][0].T(\'3o\',[\'6R\'+d,c])}}H J});y.11(I(\'82\',G),D(e,b,c){e.1g();F d=y.13();8(!7.1U){8(K.X==0){8(7.3z){y.T(I(\'16\',G),K.Q-1)}H e.2e()}}1Y(d,7);8(!Y(c)){8(7.E.U.1d){c=4D(d,7,K.Q-1)}O 8(7.E.1t!=\'*\'){F f=(Y(b.E))?b.E:5x(y,7);c=6T(d,7,K.Q-1,f)}O{c=7.E.M}c=4E(c,7,b.E,$12)}8(!7.1U){8(K.Q-c<K.X){c=K.Q-K.X}}7.E.U.20=7.E.M;8(7.E.U.1d){F g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12);8(7.E.M+c<=g&&c<K.Q){c++;g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12)}7.E.M=g}O 8(7.E.1t!=\'*\'){F g=3W(d,7,K.Q-c);7.E.M=2x(g,7,7.E.U.2c,$12)}1Y(d,7,J);8(c==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+c+\' E 5y.\');K.X+=c;2h(K.X>=K.Q){K.X-=K.Q}8(!7.1U){8(K.X==0&&b.4F){b.4F.1h($12,\'14\')}8(!7.3z){3A(7,K.X,G)}}y.13().19(K.Q-c,K.Q).83(y);8(K.Q<7.E.M+c){y.13().19(0,(7.E.M+c)-K.Q).4G(J).47(y)}F d=y.13(),3i=6V(d,7,c),2i=6W(d,7),1Z=d.1N(c-1),21=3i.2P(),2r=2i.2P();1Y(d,7);F h=0,2B=0;8(7.1B){F p=4H(2i,7);h=p[0];2B=p[1]}F i=(h<0)?7.1i[7.d[3]]:0;F j=L,2Q=$();8(7.E.M<c){2Q=d.19(7.E.U.20,c);8(b.1V==\'6X\'){F k=7.E[7.d[\'P\']];j=2Q;1Z=2r;5z(j);7.E[7.d[\'P\']]=\'1d\'}}F l=L,3B=2R(d.19(0,c),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4K={},2s={},2S={},4L={},2T={},5A={},2U=5B(b,7,c,3B);1F(b.1V){R\'1I\':R\'1I-1w\':3C=2R(d.19(0,7.E.M),7,\'P\');17}8(j){7.E[7.d[\'P\']]=k}1Y(d,7,J);8(2B>=0){1Y(21,7,7.1i[7.d[1]])}8(h>=0){1Y(1Z,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=h}2T[7.d[\'1m\']]=-(3B-i);5A[7.d[\'1m\']]=-(3C-i);4K[7.d[\'1m\']]=2j[7.d[\'P\']];F m=D(){},1O=D(){},1C=D(){},3D=D(){},2C=D(){},5C=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(b.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':l=y.4G(J).47($1n);17}1F(b.1V){R\'3j\':R\'22\':R\'22-1w\':l.13().19(0,c).2t();l.13().19(7.E.U.20).2t();17;R\'1I\':R\'1I-1w\':l.13().19(7.E.M).2t();l.Z(5A);17}y.Z(2T);V=48(2U,b.2u,G);29[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){m=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){8(2r.4M(1Z).S){2s[7.d[\'1S\']]=1Z.1q(\'2a\');8(h<0){1Z.Z(2s)}O{1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}}1F(b.1V){R\'1I\':R\'1I-1w\':l.13().1N(c-1).Z(2s);17}8(2r.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\');1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])}}8(2B>=0){4L[7.d[\'1S\']]=2r.1q(\'2a\')+7.1i[7.d[1]];2C=D(){2r.Z(4L)};5C=D(){V.1a.1c([2r,4L])}}}1J=D(){y.Z(29)};F n=7.E.M+c-K.Q;1y=D(){8(n>0){y.13().19(K.Q).2t();3i=$(y.13().19(K.Q-(7.E.M-n)).3F().6Y(y.13().19(0,n).3F()))}5D(j);8(7.1R){F a=y.13().1N(7.E.M+c-1);a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F o=5E(3i,2Q,2i,c,\'14\',2U,2j);1x=D(){5F(y,l,b);A.26=L;2b.3h=4a($12,b,\'3h\',o,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,b,\'3G\',o,2b);1F(b.1V){R\'42\':y.Z(29);m();1C();2C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){m();1C();2C();1D();1J();1y();V=48(2U,b.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([l,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();2C();1D();1J();1y();17;R\'1I\':V.1a.1c([l,29,D(){1C();2C();1D();1J();1y();1x()}]);1O();17;R\'1I-1w\':V.1a.1c([y,{\'1E\':0}]);V.1a.1c([l,29,D(){y.Z({\'1E\':1});1C();2C();1D();1J();1y();1x()}]);1O();17;R\'22\':V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1y();1x()}]);1O();3D();5C();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'84\',G),D(e,c,d){e.1g();F f=y.13();8(!7.1U){8(K.X==7.E.M){8(7.3z){y.T(I(\'14\',G),K.Q-1)}H e.2e()}}1Y(f,7);8(!Y(d)){8(7.E.1t!=\'*\'){F g=(Y(c.E))?c.E:5x(y,7);d=6Z(f,7,0,g)}O{d=7.E.M}d=4E(d,7,c.E,$12)}F h=(K.X==0)?K.Q:K.X;8(!7.1U){8(7.E.U.1d){F i=32(f,7,d),g=4D(f,7,h-1)}O{F i=7.E.M,g=7.E.M}8(d+i>h){d=h-g}}7.E.U.20=7.E.M;8(7.E.U.1d){F i=2x(5I(f,7,d,h),7,7.E.U.2c,$12);2h(7.E.M-d>=i&&d<K.Q){d++;i=2x(5I(f,7,d,h),7,7.E.U.2c,$12)}7.E.M=i}O 8(7.E.1t!=\'*\'){F i=3W(f,7,d);7.E.M=2x(i,7,7.E.U.2c,$12)}1Y(f,7,J);8(d==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+d+\' E 70.\');K.X-=d;2h(K.X<0){K.X+=K.Q}8(!7.1U){8(K.X==7.E.M&&c.4F){c.4F.1h($12,\'16\')}8(!7.3z){3A(7,K.X,G)}}8(K.Q<7.E.M+d){y.13().19(0,(7.E.M+d)-K.Q).4G(J).47(y)}F f=y.13(),3i=71(f,7),2i=72(f,7,d),1Z=f.1N(d-1),21=3i.2P(),2r=2i.2P();1Y(f,7);F j=0,2B=0;8(7.1B){F p=4H(2i,7);j=p[0];2B=p[1]}F k=L,2Q=$();8(7.E.U.20<d){2Q=f.19(7.E.U.20,d);8(c.1V==\'6X\'){F l=7.E[7.d[\'P\']];k=2Q;1Z=21;5z(k);7.E[7.d[\'P\']]=\'1d\'}}F m=L,3B=2R(f.19(0,d),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4N={},2s={},2S={},2T={},2U=5B(c,7,d,3B);1F(c.1V){R\'22\':R\'22-1w\':3C=2R(f.19(0,7.E.U.20),7,\'P\');17}8(k){7.E[7.d[\'P\']]=l}8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1Y(f,7,J);1Y(21,7,7.1i[7.d[1]]);8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=j}2T[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;F n=D(){},1O=D(){},1C=D(){},3D=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':m=y.4G(J).47($1n);m.13().19(7.E.U.20).2t();17}1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':y.Z(\'3Z\',1);m.Z(\'3Z\',0);17}V=48(2U,c.2u,G);29[7.d[\'1m\']]=-3B;4N[7.d[\'1m\']]=-3C;8(j<0){29[7.d[\'1m\']]+=j}8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){n=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){F o=2r.1q(\'2a\');8(2B>=0){o+=7.1i[7.d[1]]}2r.Z(7.d[\'1S\'],o);8(1Z.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\')}1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])};F q=1Z.1q(\'2a\');8(j>0){q+=7.1i[7.d[3]]}2s[7.d[\'1S\']]=q;1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}1J=D(){y.Z(2T)};F r=7.E.M+d-K.Q;1y=D(){8(r>0){y.13().19(K.Q).2t()}F a=y.13().19(0,d).47(y).2P();8(r>0){2i=3I(f,7)}5D(k);8(7.1R){8(K.Q<7.E.M+d){F b=y.13().1N(7.E.M-1);b.Z(7.d[\'1S\'],b.1q(\'2a\')+7.1i[7.d[1]])}a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F s=5E(3i,2Q,2i,d,\'16\',2U,2j);1x=D(){y.Z(\'3Z\',y.1q(\'6K\'));5F(y,m,c);A.26=L;2b.3h=4a($12,c,\'3h\',s,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,c,\'3G\',s,2b);1F(c.1V){R\'42\':y.Z(29);n();1C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){n();1C();1D();1J();1y();V=48(2U,c.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();1D();1J();1y();17;R\'1I\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'1I-1w\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'22\':V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1J();1y();1x()}]);1O();3D();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'3k\',G),D(e,b,c,d,f,g,h){e.1g();F v=[b,c,d,f,g,h],t=[\'2M/28/2A\',\'28\',\'3d\',\'2A\',\'2M\',\'D\'],a=3e(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],K,y);8(b==0){H L}8(!1T(f)){f=L}8(g!=\'14\'&&g!=\'16\'){8(7.1U){g=(b<=K.Q/2)?\'16\':\'14\'}O{g=(K.X==0||K.X>b)?\'16\':\'14\'}}8(g==\'14\'){b=K.Q-b}y.T(I(g,G),[f,b,h]);H J});y.11(I(\'85\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c-1,a,\'14\',b])});y.11(I(\'86\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c+1,a,\'16\',b])});y.11(I(\'5J\',G),D(e,a,b,c,d){e.1g();8(!Y(a)){a=y.1P(I(\'4b\',G))}F f=7.1b.E||7.E.M,1X=1H.2z(K.Q/f)-1;8(a<0){a=1X}8(a>1X){a=0}H y.1P(I(\'3k\',G),[a*f,0,J,b,c,d])});y.11(I(\'73\',G),D(e,s){e.1g();8(s){s=3J(s,0,J,K,y)}O{s=0}s+=K.X;8(s!=0){8(K.Q>0){2h(s>K.Q){s-=K.Q}}y.87(y.13().19(s,K.Q))}H J});y.11(I(\'2n\',G),D(e,s){e.1g();8(s){s=5k(s)}O 8(7.2n){s=7.2n}O{H 18(G,\'6j 88 46 2n.\')}F n=y.1P(I(\'4p\',G)),x=J;1j(F j=0,l=s.S;j<l;j++){8(!s[j][0].1P(I(\'3k\',G),[n,s[j][3],J])){x=L}}H x});y.11(I(\'2O\',G),D(e,a,b){e.1g();8(1o(a)){a.1h($12,2g)}O 8(2V(a)){2g=a}O 8(!1z(a)){2g.1c([a,b])}H 2g});y.11(I(\'89\',G),D(e,b,c,d,f){e.1g();F v=[b,c,d,f],t=[\'2M/2A\',\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1T(b)&&!2v(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2v(b)||b.S==0){H 18(G,\'2p a 5K 2A.\')}8(1z(c)){c=\'4c\'}4x(b,7);41(b);F g=c,4d=\'4d\';8(c==\'4c\'){8(d){8(K.X==0){c=K.Q-1;4d=\'74\'}O{c=K.X;K.X+=b.S}8(c<0){c=0}}O{c=K.Q-1;4d=\'74\'}}O{c=3J(c,f,d,K,y)}F h=y.13().1N(c);8(h.S){h[4d](b)}O{18(G,\'8a 8b-3r 4M 6k! 8c 8d 46 75 4c.\');y.76(b)}8(g!=\'4c\'&&!d){8(c<K.X){K.X+=b.S}}K.Q=y.13().S;8(K.X>=K.Q){K.X-=K.Q}y.T(I(\'4O\',G));y.T(I(\'5L\',G));H J});y.11(I(\'77\',G),D(e,c,d,f){e.1g();F v=[c,d,f],t=[\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);c=a[0];d=a[1];f=a[2];F g=L;8(c 2W $&&c.S>1){h=$();c.1W(D(i,a){F b=y.T(I(\'77\',G),[$(1l),d,f]);8(b){h=h.8e(b)}});H h}8(1z(c)||c==\'4c\'){h=y.13().2P()}O{c=3J(c,f,d,K,y);F h=y.13().1N(c);8(h.S){8(c<K.X){K.X-=h.S}}}8(h&&h.S){h.8f();K.Q=y.13().S;y.T(I(\'4O\',G))}H h});y.11(I(\'3G\',G)+\' \'+I(\'3h\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S);8(2V(a)){2b[b]=a}8(1o(a)){2b[b].1c(a)}H 2b[b]});y.11(I(\'4p\',G),D(e,a){e.1g();8(K.X==0){F b=0}O{F b=K.Q-K.X}8(1o(a)){a.1h($12,b)}H b});y.11(I(\'4b\',G),D(e,a){e.1g();F b=7.1b.E||7.E.M,1X=1H.2z(K.Q/b-1),2k;8(K.X==0){2k=0}O 8(K.X<K.Q%b){2k=0}O 8(K.X==b&&!7.1U){2k=1X}O{2k=1H.78((K.Q-K.X)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1o(a)){a.1h($12,2k)}H 2k});y.11(I(\'8g\',G),D(e,a){e.1g();F b=3I(y.13(),7);8(1o(a)){a.1h($12,b)}H b});y.11(I(\'19\',G),D(e,f,l,b){e.1g();8(K.Q==0){H L}F v=[f,l,b],t=[\'28\',\'28\',\'D\'],a=3e(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:K.Q;b=a[2];f+=K.X;l+=K.X;8(E.Q>0){2h(f>K.Q){f-=K.Q}2h(l>K.Q){l-=K.Q}2h(f<0){f+=K.Q}2h(l<0){l+=K.Q}}F c=y.13(),$i;8(l>f){$i=c.19(f,l)}O{$i=$(c.19(f,K.Q).3F().6Y(c.19(0,l).3F()))}8(1o(b)){b.1h($12,$i)}H $i});y.11(I(\'27\',G)+\' \'+I(\'2d\',G)+\' \'+I(\'26\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S),5M=A[b];8(1o(a)){a.1h($12,5M)}H 5M});y.11(I(\'6S\',G),D(e,a,b,c){e.1g();F d=L;8(1o(a)){a.1h($12,7)}O 8(1T(a)){31=$.1L(J,{},31,a);8(b!==L)d=J;O 7=$.1L(J,{},7,a)}O 8(!1z(a)){8(1o(b)){F f=4P(\'7.\'+a);8(1z(f)){f=\'\'}b.1h($12,f)}O 8(!1z(b)){8(2X c!==\'3d\')c=J;4P(\'31.\'+a+\' = b\');8(c!==L)d=J;O 4P(\'7.\'+a+\' = b\')}O{H 4P(\'7.\'+a)}}8(d){1Y(y.13(),7);z.59(31);z.5N();F g=4Q(y,7);y.T(I(\'3H\',G),[J,g])}H 7});y.11(I(\'5L\',G),D(e,a,b){e.1g();8(1z(a)){a=$(\'8h\')}O 8(1p(a)){a=$(a)}8(!2v(a)||a.S==0){H 18(G,\'2p a 5K 2A.\')}8(!1p(b)){b=\'a.6i\'}a.8i(b).1W(D(){F h=1l.79||\'\';8(h.S>0&&y.13().7a($(h))!=-1){$(1l).23(\'5O\').5O(D(e){e.2D();y.T(I(\'3k\',G),h)})}});H J});y.11(I(\'3H\',G),D(e,b,c){e.1g();8(!7.1b.1A){H}F d=7.1b.E||7.E.M,4R=1H.2z(K.Q/d);8(b){8(7.1b.3K){7.1b.1A.13().2t();7.1b.1A.1W(D(){1j(F a=0;a<4R;a++){F i=y.13().1N(3J(a*d,0,J,K,y));$(1l).76(7.1b.3K.1h(i[0],a+1))}})}7.1b.1A.1W(D(){$(1l).13().23(7.1b.3L).1W(D(a){$(1l).11(7.1b.3L,D(e){e.2D();y.T(I(\'3k\',G),[a*d,-7.1b.4S,J,7.1b])})})})}F f=y.1P(I(\'4b\',G))+7.1b.4S;8(f>=4R){f=0}8(f<0){f=4R-1}7.1b.1A.1W(D(){$(1l).13().2N(2y(\'7b\',G)).1N(f).3a(2y(\'7b\',G))});H J});y.11(I(\'4O\',G),D(e){F a=7.E.M,2E=y.13(),2m=5d($1n,7,\'P\');K.Q=2E.S;8(A.4r){7.3U=2m;7[7.d[\'P\']]=4s(2m,A.4r)}O{7.3U=5e(7,2m)}8(7.2H){7.E.P=7.E.3M.P;7.E.1e=7.E.3M.1e;7=5g(7,2E,2m);a=7.E.M;5r(7,2E)}O 8(7.E.U.1d){a=32(2E,7,0)}O 8(7.E.1t!=\'*\'){a=3W(2E,7,0)}8(!7.1U&&K.X!=0&&a>K.X){8(7.E.U.1d){F b=4D(2E,7,K.X)-K.X}O 8(7.E.1t!=\'*\'){F b=7c(2E,7,K.X)-K.X}O{F b=7.E.M-K.X}18(G,\'8j 8k-1U: 8l \'+b+\' E 5y.\');y.T(I(\'14\',G),b)}7.E.M=2x(a,7,7.E.U.2c,$12);7.E.U.20=7.E.M;7=5i(7,2E);F c=4Q(y,7);y.T(I(\'3H\',G),[J,c]);4T(7,K.Q,G);3A(7,K.X,G);H c});y.11(I(\'4q\',G),D(e,a){e.1g();1u=3u(1u);y.1q(\'57\',L);y.T(I(\'5t\',G));8(a){y.T(I(\'73\',G))}4U(y.13());4U(y);z.5s();z.5P();8(G.3s==\'36\'){4U($1n)}O{$1n.8m(y)}H J});y.11(I(\'18\',G),D(e){18(G,\'3w P: \'+7.P);18(G,\'3w 1e: \'+7.1e);18(G,\'7d 8n: \'+7.E.P);18(G,\'7d 8o: \'+7.E.1e);18(G,\'4e 4f E M: \'+7.E.M);8(7.N.1G){18(G,\'4e 4f E 5Q 8p: \'+7.N.E)}8(7.14.W){18(G,\'4e 4f E 5Q 5y: \'+7.14.E)}8(7.16.W){18(G,\'4e 4f E 5Q 70: \'+7.16.E)}H G.18});y.11(\'3o\',D(e,n,o){e.1g();H y.1P(I(n,G),o)})};z.5s=D(){y.23(I(\'\',G));y.23(I(\'\',G,L));y.23(\'3o\')};z.5N=D(){z.5P();4T(7,K.Q,G);3A(7,K.X,G);8(7.N.2F){F b=3N(7.N.2F);$1n.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}8(7.N.W){7.N.W.11(I(7.N.3L,G,L),D(e){e.2D();F a=L,b=3O;8(A.27){a=\'1G\'}O 8(7.N.4X){a=\'3b\';b=3N(7.N.4X)}8(a){y.T(I(a,G),b)}})}8(7.14.W){7.14.W.11(I(7.14.3L,G,L),D(e){e.2D();y.T(I(\'14\',G))});8(7.14.2F){F b=3N(7.14.2F);7.14.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.16.W){7.16.W.11(I(7.16.3L,G,L),D(e){e.2D();y.T(I(\'16\',G))});8(7.16.2F){F b=3N(7.16.2F);7.16.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.1b.1A){8(7.1b.2F){F b=3N(7.1b.2F);7.1b.1A.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.14.2Y||7.16.2Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k==7.16.2Y){e.2D();y.T(I(\'16\',G))}8(k==7.14.2Y){e.2D();y.T(I(\'14\',G))}})}8(7.1b.4Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k>=49&&k<58){k=(k-49)*7.E.M;8(k<=K.Q){e.2D();y.T(I(\'3k\',G),[k,0,J,7.1b])}}})}8($.1s.1r){F c=\'8q\'8r 3l;8((c&&7.1r.4h)||(!c&&7.1r.5R)){F d=$.1L(J,{},7.14,7.1r),7g=$.1L(J,{},7.16,7.1r),5S=D(){y.T(I(\'14\',G),[d])},5T=D(){y.T(I(\'16\',G),[7g])};1F(7.2l){R\'5c\':R\'7h\':7.1r.2G.8s=5T;7.1r.2G.8t=5S;17;2J:7.1r.2G.8u=5T;7.1r.2G.8v=5S}8(A.1r){y.1r(\'4q\')}$1n.1r(7.1r.2G);$1n.Z(\'7i\',\'8w\');A.1r=J}}8($.1s.1Q){8(7.1Q){F f=$.1L(J,{},7.14,7.1Q),7j=$.1L(J,{},7.16,7.1Q);8(A.1Q){$1n.23(I(\'1Q\',G,L))}$1n.11(I(\'1Q\',G,L),D(e,a){e.2D();8(a>0){y.T(I(\'14\',G),[f])}O{y.T(I(\'16\',G),[7j])}});A.1Q=J}}8(7.N.1G){y.T(I(\'1G\',G),7.N.5U)}8(A.6v){F g=D(e){y.T(I(\'5t\',G));8(7.N.5V&&!A.27){y.T(I(\'1G\',G))}1Y(y.13(),7);y.T(I(\'4O\',G))};F h=$(3l),4i=3O;8($.5W&&G.5X==\'5W\'){4i=$.5W(8x,g)}O 8($.4Z&&G.5X==\'4Z\'){4i=$.4Z(8y,g)}O{F i=0,5Y=0;4i=D(){F a=h.P(),5Z=h.1e();8(a!=i||5Z!=5Y){g();i=a;5Y=5Z}}}h.11(I(\'8z\',G,L,J,J),4i)}};z.5P=D(){F a=I(\'\',G),3P=I(\'\',G,L);61=I(\'\',G,L,J,J);$(4g).23(61);$(3l).23(61);$1n.23(3P);8(7.N.W){7.N.W.23(3P)}8(7.14.W){7.14.W.23(3P)}8(7.16.W){7.16.W.23(3P)}8(7.1b.1A){7.1b.1A.23(3P);8(7.1b.3K){7.1b.1A.13().2t()}}8(A.1r){y.1r(\'4q\');$1n.Z(\'7i\',\'2J\');A.1r=L}8(A.1Q){A.1Q=L}4T(7,\'4j\',G);3A(7,\'2N\',G)};8(1k(w)){w={\'18\':w}}F A={\'2l\':\'16\',\'27\':J,\'26\':L,\'2d\':L,\'1Q\':L,\'1r\':L},K={\'Q\':y.13().S,\'X\':0},1u={\'N\':3O,\'1f\':3O,\'2L\':2o(),\'3v\':0},V={\'2d\':L,\'1M\':0,\'2L\':0,\'2u\':\'\',\'1a\':[]},2b={\'3G\':[],\'3h\':[]},2g=[],G=$.1L(J,{},$.1s.1v.7k,w),7={},31=$.1L(J,{},u),$1n=(G.3s==\'36\')?y.36():y.8A(\'<\'+G.3s.55+\' 8B="\'+G.3s.7l+\'" />\').36();G.4o=y.4o;G.3T=$.1s.1v.3T++;G.2Z=(G.2Z&&$.1s.2Z)?\'2Z\':\'8C\';z.59(31,J,56);z.6D();z.6L();z.5N();8(2V(7.E.3m)){F B=7.E.3m}O{F B=[];8(7.E.3m!=0){B.1c(7.E.3m)}}8(7.25){B.8D(4k(7m(7.25),10))}8(B.S>0){1j(F a=0,l=B.S;a<l;a++){F s=B[a];8(s==0){62}8(s===J){s=3l.8E.79;8(s.S<1){62}}O 8(s===\'7n\'){s=1H.4l(1H.7n()*K.Q)}8(y.1P(I(\'3k\',G),[s,0,J,{1V:\'42\'}])){17}}}F C=4Q(y,7),7o=3I(y.13(),7);8(7.7p){7.7p.1h($12,{\'P\':C.P,\'1e\':C.1e,\'E\':7o})}y.T(I(\'3H\',G),[J,C]);y.T(I(\'5L\',G));8(G.18){y.T(I(\'18\',G))}H y};$.1s.1v.3T=1;$.1s.1v.5b={\'2n\':L,\'3z\':J,\'1U\':J,\'2H\':L,\'2l\':\'1m\',\'E\':{\'3m\':0},\'1K\':{\'2u\':\'7q\',\'1M\':6y,\'2F\':L,\'3L\':\'5O\',\'2O\':L}};$.1s.1v.7k={\'18\':L,\'2Z\':L,\'5X\':\'4Z\',\'3y\':{\'45\':\'\',\'7r\':\'8F\'},\'3s\':{\'55\':\'8G\',\'7l\':\'8H\'},\'63\':{}};$.1s.1v.7s=D(a){H\'<a 8I="#"><7t>\'+a+\'</7t></a>\'};$.1s.1v.7u=D(a){$(1l).Z(\'P\',a+\'%\')};$.1s.1v.25={3F:D(n){n+=\'=\';F b=4g.25.3Q(\';\');1j(F a=0,l=b.S;a<l;a++){F c=b[a];2h(c.8J(0)==\' \'){c=c.19(1)}8(c.3R(n)==0){H c.19(n.S)}}H 0},64:D(n,v,d){F e="";8(d){F a=7v 7w();a.8K(a.2o()+(d*24*60*60*8L));e="; 8M="+a.8N()}4g.25=n+\'=\'+v+e+\'; 8O=/\'},2t:D(n){$.1s.1v.25.64(n,"",-1)}};D 48(d,e,c){8(c.2Z==\'2Z\'){8(e==\'7q\'){e=\'8P\'}}H{1a:[],1M:d,8Q:d,2u:e,2L:2o()}}D 3x(s,c){1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];8(!b){62}b[0][c.2Z](b[1],s.1M,s.2u,b[2])}}D 43(s,c){8(!1k(c)){c=J}8(1T(s.4z)){43(s.4z,c)}1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];b[0].6M(J);8(c){b[0].Z(b[1]);8(1o(b[2])){b[2]()}}}8(1T(s.4A)){43(s.4A,c)}}D 5F(a,b,o){8(b){b.2t()}1F(o.1V){R\'1w\':R\'3j\':R\'1I-1w\':R\'22-1w\':a.Z(\'1t\',\'\');a.Z(\'1E\',1);17}}D 4a(d,o,b,a,c){8(o[b]){o[b].1h(d,a)}8(c[b].S){1j(F i=0,l=c[b].S;i<l;i++){c[b][i].1h(d,a)}}H[]}D 5G(a,q,c){8(q.S){a.T(I(q[0][0],c),q[0][1]);q.8R()}H q}D 5z(b){b.1W(D(){F a=$(1l);a.1q(\'7x\',a.2f(\':3t\')).4j()})}D 5D(b){8(b){b.1W(D(){F a=$(1l);8(!a.1q(\'7x\')){a.4m()}})}}D 3u(t){8(t.N){8S(t.N)}8(t.1f){8T(t.1f)}H t}D 5E(a,b,c,d,e,f,g){H{\'P\':g.P,\'1e\':g.1e,\'E\':{\'20\':a,\'8U\':b,\'M\':c},\'1K\':{\'E\':d,\'2l\':e,\'1M\':f}}}D 5B(a,o,b,c){F d=a.1M;8(a.1V==\'42\'){H 0}8(d==\'N\'){d=o.1K.1M/o.1K.E*b}O 8(d<10){d=c/d}8(d<1){H 0}8(a.1V==\'1w\'){d=d/2}H 1H.78(d)}D 4T(o,t,c){F a=(Y(o.E.4C))?o.E.4C:o.E.M+1;8(t==\'4m\'||t==\'4j\'){F f=t}O 8(a>t){18(c,\'2p 6O E (\'+t+\' Q, \'+a+\' 6P): 8V 8W.\');F f=\'4j\'}O{F f=\'4m\'}F s=(f==\'4m\')?\'2N\':\'3a\',h=2y(\'3t\',c);8(o.N.W){o.N.W[f]()[s](h)}8(o.14.W){o.14.W[f]()[s](h)}8(o.16.W){o.16.W[f]()[s](h)}8(o.1b.1A){o.1b.1A[f]()[s](h)}}D 3A(o,f,c){8(o.1U||o.3z)H;F a=(f==\'2N\'||f==\'3a\')?f:L,51=2y(\'8X\',c);8(o.N.W&&a){o.N.W[a](51)}8(o.14.W){F b=a||(f==0)?\'3a\':\'2N\';o.14.W[b](51)}8(o.16.W){F b=a||(f==o.E.M)?\'3a\':\'2N\';o.16.W[b](51)}}D 3S(a,b){8(1o(b)){b=b.1h(a)}O 8(1z(b)){b={}}H b}D 6l(a,b){b=3S(a,b);8(Y(b)){b={\'M\':b}}O 8(b==\'1d\'){b={\'M\':b,\'P\':b,\'1e\':b}}O 8(!1T(b)){b={}}H b}D 6m(a,b){b=3S(a,b);8(Y(b)){8(b<=50){b={\'E\':b}}O{b={\'1M\':b}}}O 8(1p(b)){b={\'2u\':b}}O 8(!1T(b)){b={}}H b}D 52(a,b){b=3S(a,b);8(1p(b)){F c=65(b);8(c==-1){b=$(b)}O{b=c}}H b}D 6n(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(1k(b)){b={\'1G\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1f){8(1p(b.1f)||2v(b.1f)){b.1f={\'2q\':b.1f}}}H b}D 6z(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(!1k(b.1G)){b.1G=J}8(!Y(b.5U)){b.5U=0}8(1z(b.4X)){b.4X=J}8(!1k(b.5V)){b.5V=J}8(!Y(b.2K)){b.2K=(b.1M<10)?8Y:b.1M*5}8(b.1f){8(1o(b.1f.2q)){b.1f.2q=b.1f.2q.1h(a)}8(1p(b.1f.2q)){b.1f.2q=$(b.1f.2q)}8(b.1f.2q){8(!1o(b.1f.4B)){b.1f.4B=$.1s.1v.7u}8(!Y(b.1f.5u)){b.1f.5u=50}}O{b.1f=L}}H b}D 5a(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(Y(b)){b={\'2Y\':b}}H b}D 5j(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.2Y)){b.2Y=65(b.2Y)}H b}D 6o(a,b){b=52(a,b);8(2v(b)){b={\'1A\':b}}O 8(1k(b)){b={\'4Y\':b}}H b}D 6A(a,b){8(1o(b.1A)){b.1A=b.1A.1h(a)}8(1p(b.1A)){b.1A=$(b.1A)}8(!Y(b.E)){b.E=L}8(!1k(b.4Y)){b.4Y=L}8(!1o(b.3K)&&!53(b.3K)){b.3K=$.1s.1v.7s}8(!Y(b.4S)){b.4S=0}H b}D 6p(a,b){8(1o(b)){b=b.1h(a)}8(1z(b)){b={\'4h\':L}}8(3p(b)){b={\'4h\':b}}O 8(Y(b)){b={\'E\':b}}H b}D 6B(a,b){8(!1k(b.4h)){b.4h=J}8(!1k(b.5R)){b.5R=L}8(!1T(b.2G)){b.2G={}}8(!1k(b.2G.7y)){b.2G.7y=L}H b}D 6q(a,b){8(1o(b)){b=b.1h(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'E\':b}}O 8(1z(b)){b=L}H b}D 6C(a,b){H b}D 3J(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1T(a)){a=$(a,e)}8(2v(a)){a=e.13().7a(a);8(!1k(c)){c=L}}O{8(!1k(c)){c=J}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.X}a+=b;8(d.Q>0){2h(a>=d.Q){a-=d.Q}2h(a<0){a+=d.Q}}H a}D 4D(i,o,s){F t=0,x=0;1j(F a=s;a>=0;a--){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}8(a==0){a=i.S}x++}}D 7c(i,o,s){H 66(i,o.E.1t,o.E.U.4t,s)}D 6T(i,o,s,m){H 66(i,o.E.1t,m,s)}D 66(i,f,m,s){F t=0,x=0;1j(F a=s,l=i.S;a>=0;a--){x++;8(x==l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==0){a=l}}}D 5x(a,o){H o.E.U.4t||a.13().19(0,o.E.M).1t(o.E.1t).S}D 32(i,o,s){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}x++;8(x==l+1){H x}8(a==l){a=-1}}}D 5I(i,o,s,l){F v=32(i,o,s);8(!o.1U){8(s+v>l){v=l-s}}H v}D 3W(i,o,s){H 68(i,o.E.1t,o.E.U.4t,s,o.1U)}D 6Z(i,o,s,m){H 68(i,o.E.1t,m+1,s,o.1U)-1}D 68(i,f,m,s,c){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==l){a=-1}}}D 3I(i,o){H i.19(0,o.E.M)}D 6V(i,o,n){H i.19(n,o.E.U.20+n)}D 6W(i,o){H i.19(0,o.E.M)}D 71(i,o){H i.19(0,o.E.U.20)}D 72(i,o,n){H i.19(n,o.E.M+n)}D 4x(i,o,d){8(o.1R){8(!1p(d)){d=\'2a\'}i.1W(D(){F j=$(1l),m=4k(j.Z(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1q(d,m)})}}D 1Y(i,o,m){8(o.1R){F x=(1k(m))?m:L;8(!Y(m)){m=0}4x(i,o,\'7z\');i.1W(D(){F j=$(1l);j.Z(o.d[\'1S\'],((x)?j.1q(\'7z\'):m+j.1q(\'2a\')))})}}D 41(i){i.1W(D(){F j=$(1l);j.1q(\'7A\',j.7B(\'7C\')||\'\')})}D 4U(i){i.1W(D(){F j=$(1l);j.7B(\'7C\',j.1q(\'7A\')||\'\')})}D 5r(o,b){F c=o.E.M,7D=o.E[o.d[\'P\']],69=o[o.d[\'1e\']],7E=3V(69);b.1W(D(){F a=$(1l),6a=7D-7F(a,o,\'8Z\');a[o.d[\'P\']](6a);8(7E){a[o.d[\'1e\']](4s(6a,69))}})}D 4Q(a,o){F b=a.36(),$i=a.13(),$v=3I($i,o),54=4I(4J($v,o,J),o,L);b.Z(54);8(o.1R){F p=o.1i,r=p[o.d[1]];8(o.1B&&r<0){r=0}F c=$v.2P();c.Z(o.d[\'1S\'],c.1q(\'2a\')+r);a.Z(o.d[\'3q\'],p[o.d[0]]);a.Z(o.d[\'1m\'],p[o.d[3]])}a.Z(o.d[\'P\'],54[o.d[\'P\']]+(2R($i,o,\'P\')*2));a.Z(o.d[\'1e\'],6b($i,o,\'1e\'));H 54}D 4J(i,o,a){H[2R(i,o,\'P\',a),6b(i,o,\'1e\',a)]}D 6b(i,o,a,b){8(!1k(b)){b=L}8(Y(o[o.d[a]])&&b){H o[o.d[a]]}8(Y(o.E[o.d[a]])){H o.E[o.d[a]]}a=(a.6c().3R(\'P\')>-1)?\'2w\':\'3n\';H 4n(i,o,a)}D 4n(i,o,b){F s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F m=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s<m){s=m}}H s}D 2R(i,o,b,c){8(!1k(c)){c=L}8(Y(o[o.d[b]])&&c){H o[o.d[b]]}8(Y(o.E[o.d[b]])){H o.E[o.d[b]]*i.S}F d=(b.6c().3R(\'P\')>-1)?\'2w\':\'3n\',s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);s+=(j.2f(\':M\'))?j[o.d[d]](J):0}H s}D 5d(a,o,d){F b=a.2f(\':M\');8(b){a.4j()}F s=a.36()[o.d[d]]();8(b){a.4m()}H s}D 5e(o,a){H(Y(o[o.d[\'P\']]))?o[o.d[\'P\']]:a}D 6d(i,o,b){F s=L,v=L;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F c=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s===L){s=c}O 8(s!=c){v=J}8(s==0){v=J}}H v}D 7F(i,o,d){H i[o.d[\'90\'+d]](J)-i[o.d[d.6c()]]()}D 4s(s,o){8(3V(o)){o=4k(o.19(0,-1),10);8(!Y(o)){H s}s*=o/2I}H s}D I(n,c,a,b,d){8(!1k(a)){a=J}8(!1k(b)){b=J}8(!1k(d)){d=L}8(a){n=c.3y.45+n}8(b){n=n+\'.\'+c.3y.7r}8(b&&d){n+=c.3T}H n}D 2y(n,c){H(1p(c.63[n]))?c.63[n]:n}D 4I(a,o,p){8(!1k(p)){p=J}F b=(o.1R&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'P\']]=a[0]+b[1]+b[3];c[o.d[\'1e\']]=a[1]+b[0]+b[2];H c}D 3e(c,d){F e=[];1j(F a=0,7G=c.S;a<7G;a++){1j(F b=0,7H=d.S;b<7H;b++){8(d[b].3R(2X c[a])>-1&&1z(e[b])){e[b]=c[a];17}}}H e}D 6x(p){8(1z(p)){H[0,0,0,0]}8(Y(p)){H[p,p,p,p]}8(1p(p)){p=p.3Q(\'91\').7I(\'\').3Q(\'92\').7I(\'\').3Q(\' \')}8(!2V(p)){H[0,0,0,0]}1j(F i=0;i<4;i++){p[i]=4k(p[i],10)}1F(p.S){R 0:H[0,0,0,0];R 1:H[p[0],p[0],p[0],p[0]];R 2:H[p[0],p[1],p[0],p[1]];R 3:H[p[0],p[1],p[2],p[1]];2J:H[p[0],p[1],p[2],p[3]]}}D 4H(a,o){F x=(Y(o[o.d[\'P\']]))?1H.2z(o[o.d[\'P\']]-2R(a,o,\'P\')):0;1F(o.1B){R\'1m\':H[0,x];R\'35\':H[x,0];R\'5f\':2J:H[1H.2z(x/2),1H.4l(x/2)]}}D 6r(o){F a=[[\'P\',\'7J\',\'2w\',\'1e\',\'7K\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1e\',\'7K\',\'3n\',\'P\',\'7J\',\'2w\',\'3q\',\'1m\',\'5p\',3,2,1,0]];F b=a[0].S,7L=(o.2l==\'35\'||o.2l==\'1m\')?0:1;F c={};1j(F d=0;d<b;d++){c[a[0][d]]=a[7L][d]}H c}D 4E(x,o,a,b){F v=x;8(1o(a)){v=a.1h(b,v)}O 8(1p(a)){F p=a.3Q(\'+\'),m=a.3Q(\'-\');8(m.S>p.S){F c=J,6e=m[0],30=m[1]}O{F c=L,6e=p[0],30=p[1]}1F(6e){R\'93\':v=(x%2==1)?x-1:x;17;R\'94\':v=(x%2==0)?x-1:x;17;2J:v=x;17}30=4k(30,10);8(Y(30)){8(c){30=-30}v+=30}}8(!Y(v)||v<1){v=1}H v}D 2x(x,o,a,b){H 6f(4E(x,o,a,b),o.E.U)}D 6f(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}H v}D 5k(s){8(!2V(s)){s=[[s]]}8(!2V(s[0])){s=[s]}1j(F j=0,l=s.S;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1k(s[j][1])){s[j][1]=J}8(!1k(s[j][2])){s[j][2]=J}8(!Y(s[j][3])){s[j][3]=0}}H s}D 65(k){8(k==\'35\'){H 39}8(k==\'1m\'){H 37}8(k==\'5c\'){H 38}8(k==\'7h\'){H 40}H-1}D 5H(n,a,c){8(n){F v=a.1P(I(\'4p\',c));$.1s.1v.25.64(n,v)}}D 7m(n){F c=$.1s.1v.25.3F(n);H(c==\'\')?0:c}D 6E(a,b){F c={};1j(F p=0,l=b.S;p<l;p++){c[b[p]]=a.Z(b[p])}H c}D 6s(a,b,c,d){8(!1T(a.U)){a.U={}}8(!1T(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1T(a.M)){a.U.34=a.M.34;a.U.1X=a.M.1X;a.M=L}O 8(1p(a.M)){8(a.M==\'1d\'){a.U.1d=J}O{a.U.2c=a.M}a.M=L}O 8(1o(a.M)){a.U.2c=a.M;a.M=L}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').S>0)?\':M\':\'*\'}8(!a[b.d[\'P\']]){8(b.2H){18(J,\'7M a \'+b.d[\'P\']+\' 1j 75 E!\');a[b.d[\'P\']]=4n(c,b,\'2w\')}O{a[b.d[\'P\']]=(6d(c,b,\'2w\'))?\'1d\':c[b.d[\'2w\']](J)}}8(!a[b.d[\'1e\']]){a[b.d[\'1e\']]=(6d(c,b,\'3n\'))?\'1d\':c[b.d[\'3n\']](J)}a.3M.P=a.P;a.3M.1e=a.1e;H a}D 6w(a,b){8(a.E[a.d[\'P\']]==\'1d\'){a.E.U.1d=J}8(!a.E.U.1d){8(Y(a[a.d[\'P\']])){a.E.M=1H.4l(a[a.d[\'P\']]/a.E[a.d[\'P\']])}O{a.E.M=1H.4l(b/a.E[a.d[\'P\']]);a[a.d[\'P\']]=a.E.M*a.E[a.d[\'P\']];8(!a.E.U.2c){a.1B=L}}8(a.E.M==\'95\'||a.E.M<1){18(J,\'2p a 5K 28 4f M E: 7M 46 "1d".\');a.E.U.1d=J}}H a}D 6t(a,b,c){8(a==\'N\'){a=4n(c,b,\'2w\')}H a}D 6u(a,b,c){8(a==\'N\'){a=4n(c,b,\'3n\')}8(!a){a=b.E[b.d[\'1e\']]}H a}D 5i(o,a){F p=4H(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];H o}D 5g(o,a,b){F c=6f(1H.2z(o[o.d[\'P\']]/o.E[o.d[\'P\']]),o.E.U);8(c>a.S){c=a.S}F d=1H.4l(o[o.d[\'P\']]/c);o.E.M=c;o.E[o.d[\'P\']]=d;o[o.d[\'P\']]=c*d;H o}D 3N(p){8(1p(p)){F i=(p.3R(\'96\')>-1)?J:L,r=(p.3R(\'3g\')>-1)?J:L}O{F i=r=L}H[i,r]}D 97(a){H(Y(a))?a:3O}D 6g(a){H(a===3O)}D 1z(a){H(6g(a)||2X a==\'7N\'||a===\'\'||a===\'7N\')}D 2V(a){H(a 2W 98)}D 2v(a){H(a 2W 7O)}D 1T(a){H((a 2W 99||2X a==\'2A\')&&!6g(a)&&!2v(a)&&!2V(a))}D Y(a){H((a 2W 4e||2X a==\'28\')&&!9a(a))}D 1p(a){H((a 2W 9b||2X a==\'2M\')&&!1z(a)&&!3p(a)&&!53(a))}D 1o(a){H(a 2W 9c||2X a==\'D\')}D 1k(a){H(a 2W 9d||2X a==\'3d\'||3p(a)||53(a))}D 3p(a){H(a===J||a===\'J\')}D 53(a){H(a===L||a===\'L\')}D 3V(x){H(1p(x)&&x.19(-1)==\'%\')}D 2o(){H 7v 7w().2o()}D 3X(o,n){18(J,o+\' 2f 9e, 9f 1j 9g 9h 9i 9j. 9k \'+n+\' 9l.\')}D 18(d,m){8(!1z(3l.6h)&&!1z(3l.6h.7P)){8(1T(d)){F s=\' (\'+d.4o+\')\';d=d.18}O{F s=\'\'}8(!d){H L}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}3l.6h.7P(m)}H L}$.1L($.2u,{\'9m\':D(t){F a=t*t;H t*(-a*t+4*a-6*t+4)},\'9n\':D(t){H t*(4*t*t-9*t+6)},\'9o\':D(t){F a=t*t;H t*(33*a*a-9p*a*t+9q*a-67*t+15)}})})(7O);',62,585,'|||||||opts|if|||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|else|width|total|case|length|trigger|visibleConf|scrl|button|first|is_number|css||bind|tt0|children|prev||next|break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|padding|for|is_boolean|this|left|wrp|is_function|is_string|data|swipe|fn|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|is_undefined|container|align|_s_paddingold|_s_paddingcur|opacity|switch|play|Math|cover|_position|scroll|extend|duration|eq|_a_wrapper|triggerHandler|mousewheel|usePadding|marginRight|is_object|circular|fx|each|max|sz_resetMargin|i_cur_l|old|i_old_l|uncover|unbind||cookie|isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|adjust|isStopped|stopImmediatePropagation|is|queu|while|i_new|w_siz|nr|direction|avail_primary|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|easing|is_jquery|outerWidth|cf_getItemsAdjust|cf_c|ceil|object|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|responsive|100|default|timeoutDuration|startTime|string|removeClass|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|transition|adj|opts_orig|gn_getVisibleItemsNext||min|right|parent||||addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|wrapper|hidden|sc_clearTimers|timePassed|Carousel|sc_startScroll|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|null|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|deprecated|orgCSS|zIndex||sz_storeOrigCss|none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll||sc_fireCallbacks|currentPage|end|before|Number|of|document|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|pre|post|updater|minimum|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|sz_restoreOrigCss|mouseenter|mouseleave|pauseOnEvent|keys|throttle||di|go_getNaviObject|is_false|sz|element|starting_position|_cfs_isCarousel||_cfs_init|go_getPrevNextObject|defaults|up|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|marginBottom|newPosition|sz_setResponsiveSizes|_cfs_unbind_events|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|onMouse|swP|swN|delay|pauseOnResize|debounce|onWindowResize|_windowHeight|nh||ns3|continue|classnames|set|cf_getKeyCode|gn_getItemsPrevFilter||gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|in_mapCss|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCssZindex|_cfs_bind_events|stop|paused|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|the|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|Item|keyup|keyCode|scN|down|cursor|mcN|configs|classname|cf_getCookie|random|itm|onCreate|swing|namespace|pageAnchorBuilder|span|progressbarUpdater|new|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|_cfs_origCss|attr|style|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|animate|unshift|location|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|ease|orgDuration|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|bt_mousesheelNumber|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}))
/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function (that) {
        this.$element
          .hide()
          .trigger('hidden')

        this.backdrop()
      }

    , removeBackdrop: function () {
        this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
            this.removeBackdrop()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);

/**
 * bootstrap-multiselect.js 1.0.0
 * https://github.com/davidstutz/bootstrap-multiselect
 *
 * Copyright 2012 David Stutz
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function ($) {

	"use strict"; // jshint ;_;

	if(typeof ko != 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect){
		ko.bindingHandlers.multiselect = {
		    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {},
		    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		        var ms = $(element).data('multiselect');
		        if (!ms) {
		            $(element).multiselect(ko.utils.unwrapObservable(valueAccessor()));
		        }
		        else if (allBindingsAccessor().options && allBindingsAccessor().options().length !== ms.originalOptions.length) {
		            ms.updateOriginalOptions();
		            $(element).multiselect('rebuild');
		        }
		    }
		};
	}

	function Multiselect(select, options) {
		
		this.options = this.getOptions(options);
		this.$select = $(select);
		this.originalOptions = this.$select.clone()[0].options; //we have to clone to create a new reference
	    this.query = '';
		this.searchTimeout = null;
		
		this.options.multiple = this.$select.attr('multiple') == "multiple";
		
		this.$container = $(this.options.buttonContainer)
            .append('<ul class="multiselect-container dropdown-menu' + (this.options.dropRight ? ' pull-right' : '') + '" style="position:absolute; list-style-type: none;margin:0;padding:0;"></ul>')
	        .append('<button type="button" class="multiselect dropdown-toggle ' + this.options.buttonClass + '" data-toggle="dropdown">' + this.options.buttonText(this.getSelected(), this.$select) + '</button>')
	        
                ;

		if (this.options.buttonWidth) {
			$('button', this.$container).css({
				'width': this.options.buttonWidth
			});
		}
		
		// Set max height of dropdown menu to activate auto scrollbar.
		if (this.options.maxHeight) {
		    $('.multiselect-container', this.$container).css({
				'max-height': this.options.maxHeight + 'px',
				'overflow-y': 'auto',
				'overflow-x': 'hidden'
			});

			$('input[type="text"]', this.$container).width('75%');
		}
		
		// Enable filtering.
		if (this.options.enableFiltering) {
		    $('.multiselect-container', this.$container).prepend('<div class="input-prepend" style="padding:3px;"><span class="add-on"><i class="icon-search"></i></span><input class="multiselect-search" type="text" placeholder="' + this.options.filterPlaceholder + '"></div>');
		    
		    $('.multiselect-search', this.$container).val(this.query).on('click', function (event) {
		        event.stopPropagation();
		    }).on('keydown', $.proxy(function (event) {
		        // This is useful to catch "keydown" events after the browser has updated the control.
		        clearTimeout(this.searchTimeout);
		        
		        this.searchTimeout = this.asyncFunction($.proxy(function () {
					
		            if (this.query != event.target.value) {
		            	this.query = event.target.value;
		            	
		                $.each($('.multiselect-container li', this.$container), $.proxy(function(index, element) {
		                	var value = $('input', element).val();
		                	if (value != this.options.selectAllValue) {
		                		var text = $('label', element).text();
			                	var value = $('input', element).val();
			                	if (value && text && value != this.options.selectAllValue ) {
			                		// by default lets assume that element is not interesting for this search
			                		var showElement = false;
			                		if ( (this.options.filterBehavior == 'text' || this.options.filterBehavior == 'both') && text.indexOf(this.query) > -1) {
			                			showElement = true;
			                		}
			                		if ( (this.options.filterBehavior == 'value' || this.options.filterBehavior == 'both') && value.indexOf(this.query) > -1) {
			                			showElement = true;
			                		}
			                		if (showElement) {
			                			$(element).show();
			                		} else {
			                			$(element).hide();
			                		}
								}
							}
		                }, this));
					}
		        }, this), 300, this);
		    }, this));
		}
		
		this.buildDropdown();
		
		this.updateButtonText();
		
		this.$select
			.hide()
			.after(this.$container);
	};

	Multiselect.prototype = {
		
		defaults: {
			// Default text function will either print 'None selected' in case no option is selected,
			// or a list of the selected options up to a length of 3 selected options.
			// If more than 3 options are selected, the number of selected options is printed.
			buttonText: function(options, select) {
				if (options.length == 0) {
					return 'None selected <b class="caret"></b>';
				}
				else if (options.length > 3) {
					return options.length + ' selected <b class="caret"></b>';
				}
				else {
					var selected = '';
					options.each(function() {
						var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();

						selected += label + ', ';
					});
					return selected.substr(0, selected.length -2) + ' <b class="caret"></b>';
				}
			},
			// Is triggered on change of the selected options.
			onChange: function(option, checked) {
				
			},
			buttonClass: 'btn',
			dropRight: false,
			selectedClass: 'active',
			buttonWidth: 'auto',
			buttonContainer: '<div class="btn-group" />',
			// Maximum height of the dropdown menu.
			// If maximum height is exceeded a scrollbar will be displayed.
			maxHeight: false,
			includeSelectAllOption: false,
			selectAllText: ' Select all',
			selectAllValue: 'multiselect-all',
			enableFiltering: false,
			filterPlaceholder: 'Search',
			filterBehavior: 'text', // possible options: 'text', 'value', 'both'
		},

		constructor: Multiselect,
		
		// Will build an dropdown element for the given option.
		createOptionValue: function(element) {
			if ($(element).is(':selected')) {
				$(element).attr('selected', 'selected').prop('selected', true);
			}
			
			// Support the label attribute on options.
			var label = $(element).attr('label') || $(element).text();
			var value = $(element).val();
			var inputType = this.options.multiple ? "checkbox" : "radio";

			var $li = $('<li><a href="javascript:void(0);" style="padding:0;"><label style="margin:0;padding:3px 20px 3px 20px;height:100%;cursor:pointer;"><input style="margin-bottom:5px;" type="' + inputType + '" /></label></a></li>');

			var selected = $(element).prop('selected') || false;
			var $checkbox = $('input', $li);
			$checkbox.val(value);
			
		    if (value == this.options.selectAllValue) {
		    	$checkbox.parent().parent().addClass('multiselect-all');
		    }
		    
			$('label', $li).append(" " + label);

			$('.multiselect-container', this.$container).append($li);

			if ($(element).is(':disabled')) {
				$checkbox.attr('disabled', 'disabled').prop('disabled', true).parents('li').addClass('disabled');
			}
			
			$checkbox.prop('checked', selected);

			if (selected && this.options.selectedClass) {
				$checkbox.parents('li').addClass(this.options.selectedClass);
			}
		},
		
		toggleActiveState: function (shouldBeActive) {
			if (this.$select.attr('disabled') == undefined) {
				$('button.multiselect.dropdown-toggle', this.$container).removeClass('disabled');
			}
			else {
				$('button.multiselect.dropdown-toggle', this.$container).addClass('disabled');
			}
		}, 
		
		// Build the dropdown and bind event handling.
		buildDropdown: function () {
			var alreadyHasSelectAll = this.$select[0][0] ? this.$select[0][0].value == this.options.selectAllValue : false;
		    
			// If options.includeSelectAllOption === true, add the include all checkbox.
		    if (this.options.includeSelectAllOption && this.options.multiple && !alreadyHasSelectAll) {
				this.$select.prepend('<option value="' + this.options.selectAllValue + '">' + this.options.selectAllText + '</option>');
		    }
		
			this.toggleActiveState();
		
			this.$select.children().each($.proxy(function (index, element) {
				// Support optgroups and options without a group simultaneously.
				var tag = $(element).prop('tagName').toLowerCase();
				if (tag == 'optgroup') {
					var group = element;
					var groupName = $(group).prop('label');
					
					// Add a header for the group.
					var $li = $('<li><label style="margin:0;padding:3px 20px 3px 20px;height:100%;" class="multiselect-group"></label></li>');
					$('label', $li).text(groupName);
					$('.multiselect-container', this.$container).append($li);
					
					// Add the options of the group.
					$('option', group).each($.proxy(function (index, element) {
						this.createOptionValue(element);
					}, this));
				}
				else if (tag == 'option') {
					this.createOptionValue(element);
				}
				else {
					// Ignore illegal tags.
				}
			}, this));
			
			// Bind the change event on the dropdown elements.
			$('.multiselect-container li input', this.$container).on('change', $.proxy(function (event) {
				var checked = $(event.target).prop('checked') || false;
				var isSelectAllOption = $(event.target).val() == this.options.selectAllValue;
				
				// Apply or unapply the configured selected class.
				if (this.options.selectedClass) {
					if (checked) {
						$(event.target).parents('li').addClass(this.options.selectedClass);
					}
					else {
						$(event.target).parents('li').removeClass(this.options.selectedClass);
					}
				}

				var $option = $('option', this.$select).filter(function() {
					return $(this).val() == $(event.target).val();
				});
				
				var $optionsNotThis = $('option', this.$select).not($option);
				var $checkboxesNotThis = $('input', this.$container).not($(event.target));

				// Toggle all options if the select all option was changed.
				if (isSelectAllOption) {
					$checkboxesNotThis.filter(function () { return $(this).is(':checked') != checked; }).trigger('click');
				}
				
				if (checked) {
				    $option.prop('selected', true);
					
				    if (this.options.multiple) {
						$option.attr('selected', 'selected');
				    }
				    else {
						if (this.options.selectedClass) {
							$($checkboxesNotThis).parents('li').removeClass(this.options.selectedClass);
						}

						$($checkboxesNotThis).prop('checked', false);
 
						$optionsNotThis.removeAttr('selected').prop('selected', false);

						// It's a single selection, so close.
						$(this.$container).find(".multiselect.dropdown-toggle").click();
					}

					if (this.options.selectedClass == "active") {
						$optionsNotThis.parents("a").css("outline", "");
					}					

				}
				else {
					$option.removeAttr('selected').prop('selected', false);
				}
				
				this.updateButtonText();

				this.options.onChange($option, checked);

				this.$select.change();
			}, this));

			$('.multiselect-container li a', this.$container).on('touchstart click', function (event) {
				event.stopPropagation();
			});

			// Keyboard support.
			this.$container.on('keydown', $.proxy(function (event) {
			    if ($('input[type="text"]', this.$container).is(':focus')) return;
				if ((event.keyCode == 9 || event.keyCode == 27) && this.$container.hasClass('open')) {
					// Close on tab or escape.
					$(this.$container).find(".multiselect.dropdown-toggle").click();
				}
				else {
					var $items = $(this.$container).find("li:not(.divider):visible a");

					if (!$items.length) {
						return;
					}

					var index = $items.index($items.filter(':focus'));

					// Navigation up.
					if (event.keyCode == 38 && index > 0) {
						index--;
					}
					// Navigate down.
					else if (event.keyCode == 40 && index < $items.length - 1) {
						index++;
					}
					else if (!~index) {
						index = 0;
					}

					var $current = $items.eq(index);
					$current.focus();

					// Override style for items in li:active.
					if (this.options.selectedClass == "active") {
						$current.css("outline", "thin dotted #333").css("outline", "5px auto -webkit-focus-ring-color");

						$items.not($current).css("outline", "");
					}

					if (event.keyCode == 32 || event.keyCode == 13) {
						var $checkbox = $current.find('input');

						$checkbox.prop("checked", !$checkbox.prop("checked"));
						$checkbox.change();
					}

					event.stopPropagation();
					event.preventDefault();
				}
			}, this));
		},

		// Destroy - unbind - the plugin.
		destroy: function() {
			this.$container.remove();
			this.$select.show();
		},

		// Refreshs the checked options based on the current state of the select.
		refresh: function() {
			$('option', this.$select).each($.proxy(function(index, element) {
			    var $input = $('.multiselect-container li input', this.$container).filter(function () {
					return $(this).val() == $(element).val();
				});
				
				if ($(element).is(':selected')) {
					$input.prop('checked', true);

					if (this.options.selectedClass) {
						$input.parents('li').addClass(this.options.selectedClass);
					}
				}
				else {
					$input.prop('checked', false);

					if (this.options.selectedClass) {
						$input.parents('li').removeClass(this.options.selectedClass);
					}
				}

				if ($(element).is(":disabled"))	{
				    $input.attr('disabled', 'disabled').prop('disabled', true).parents('li').addClass('disabled');
				}
				else {
				    $input.removeAttr('disabled').prop('disabled', false).parents('li').removeClass('disabled');
				}				
			}, this));
			
			this.updateButtonText();
		},
		
		// Select an option by its value.
		select: function(value) {
			var $option = $('option', this.$select).filter(function () {
				return $(this).val() == value;
			});
			var $checkbox = $('.multiselect-container li input', this.$container).filter(function () {
				return $(this).val() == value;
			});
			
			if (this.options.selectedClass) {
				$checkbox.parents('li').addClass(this.options.selectedClass);
			}

			$checkbox.prop('checked', true);
			
			$option.attr('selected', 'selected').prop('selected', true);
			
			this.updateButtonText();
		},
		
		// Deselect an option by its value.
		deselect: function(value) {
			var $option = $('option', this.$select).filter(function () {
				return $(this).val() == value;
			});
			var $checkbox = $('.multiselect-container li input', this.$container).filter(function () {
				return $(this).val() == value;
			});

			if (this.options.selectedClass) {
				$checkbox.parents('li').removeClass(this.options.selectedClass);
			}

			$checkbox.prop('checked', false);
			
			$option.removeAttr('selected').prop('selected', false);
			
			this.updateButtonText();
		},
		
		// Rebuild the whole dropdown menu.
		rebuild: function() {
		    $('.multiselect-container', this.$container).html('');
			this.buildDropdown(this.$select, this.options);
			this.updateButtonText();
		},

		// Get options by merging defaults and given options.
		getOptions: function(options) {
			return $.extend({}, this.defaults, options);
		},
		
		updateButtonText: function() {
			var options = this.getSelected();
			$('button', this.$container).html(this.options.buttonText(options, this.$select));
		},
		
		// Get all selected options.
		getSelected: function () {
			return $('option:selected[value!="' + this.options.selectAllValue + '"]', this.$select);
		},
	   
	   updateOriginalOptions: function() {
	        this.originalOptions = this.$select.clone()[0].options;
	   },
	   
	   asyncFunction: function (callback, timeout, self) {
		    var args = Array.prototype.slice.call(arguments, 3);
		    return setTimeout(function () {
		        callback.apply(self || window, args);
		    }, timeout);
		}
	};

    $.fn.multiselect = function(option, parameter) {
        return this.each(function() {
            var data = $(this).data('multiselect'),
                options = typeof option == 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                $(this).data('multiselect', (data = new Multiselect(this, options)));
            }

            // Call multiselect method.
            if (typeof option == 'string') {
                data[option](parameter);
            }
        });
    };
	 
	$.fn.multiselect.Constructor = Multiselect;	 
	
	$(function() {
		$("select[data-role=multiselect]").multiselect();
	});
	
}(window.jQuery);

/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function(C,z,f,r){var q=f(C),n=f(z),b=f.fancybox=function(){b.open.apply(this,arguments)},H=navigator.userAgent.match(/msie/),w=null,s=z.createTouch!==r,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},p=function(a){return a&&"string"===f.type(a)},F=function(a){return p(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,
height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",
34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(H?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(p(c)?c:null);h=d.title!==r?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));p(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":p(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(p(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==r&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();f("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,f("body").bind({"afterShow.player onUpdate.player":e,"onCancel.player beforeClose.player":c,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(p(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},
prev:function(a){var d=b.current;d&&(p(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==r&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},
e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(w),w=null);b.isOpen&&!w&&(w=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),w=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){n.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");n.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||
!1,d={x:q.scrollLeft(),y:q.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&C.innerWidth?C.innerWidth:q.width(),d.h=s&&C.innerHeight?C.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");n.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&n.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=
e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==r)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,
e){e&&(b.helpers[d]&&f.isFunction(b.helpers[d][a]))&&(e=f.extend(!0,{},b.helpers[d].defaults,e),b.helpers[d][a](e,c))});f.event.trigger(a+".fb")}},isImage:function(a){return p(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(a){return p(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&
(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=
!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,
(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=
b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();
e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace("{href}",g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,
v=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,p=l(y[1]+y[3]),r=l(y[0]+y[2]),z,A,t,D,B,G,C,E,w;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=l(k.outerWidth(!0)-k.width());z=l(k.outerHeight(!0)-k.height());A=p+y;t=r+z;D=F(c)?(a.w-A)*l(c)/100:c;B=F(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(w=h.content,h.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(g.width(D).height(9999),G=w.contents().find("body"),q&&G.css("overflow-x",
"hidden"),B=G.height())}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=l(D);j=l(B);E=D/B;m=l(F(m)?l(m,"w")-A:m);n=l(F(n)?l(n,"w")-A:n);u=l(F(u)?l(u,"h")-t:u);v=l(F(v)?l(v,"h")-t:v);G=n;C=v;h.fitToView&&(n=Math.min(a.w-A,n),v=Math.min(a.h-t,v));A=a.w-p;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/E)),j>v&&(j=v,c=l(j*E)),c<m&&(c=m,j=l(c/E)),j<u&&
(j=u,c=l(j*E))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,v)));if(h.fitToView)if(g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height(),h.aspectRatio)for(;(a>A||p>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(v,j-10)),c=l(j*E),c<m&&(c=m,j=l(c/E)),c>n&&(c=n,j=l(c/E)),g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height();else c=Math.max(m,Math.min(c,c-(a-A))),j=Math.max(u,Math.min(j,j-(p-r)));q&&("auto"===s&&j<B&&c+y+
q<A)&&(c+=q);g.width(c).height(j);e.width(c+y);a=e.width();p=e.height();e=(a>A||p>r)&&c>m&&j>u;c=h.aspectRatio?c<G&&j<C&&c<D&&j<B:(c<G||j<C)&&(c<D||j<B);f.extend(h,{dim:{width:x(a),height:x(p)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:z,wrapSpace:p-k.outerHeight(!0),skinSpace:k.height()-j});!w&&(h.autoHeight&&j>u&&j<v&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-j*a.leftRatio),width:x(f+j),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(l(e[g])-200),c[g]="+=200px"):(e[g]=x(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo("body");
this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){f(a.target).hasClass("fancybox-overlay")&&(b.isActive?b.close():d.close())});this.overlay.css(a.css).show()},
close:function(){f(".fancybox-overlay").remove();q.unbind("resize.overlay");this.overlay=null;!1!==this.margin&&(f("body").css("margin-right",this.margin),this.margin=!1);this.el&&this.el.removeClass("fancybox-lock")},update:function(){var a="100%",b;this.overlay.width(a).height("100%");H?(b=Math.max(z.documentElement.offsetWidth,z.body.offsetWidth),n.width()>b&&(a=n.width())):n.width()>q.width()&&(a=n.width());this.overlay.width(a).height(n.height())},onReady:function(a,b){f(".fancybox-overlay").stop(!0,
!0);this.overlay||(this.margin=n.height()>q.height()||"scroll"===f("body").css("overflow-y")?f("body").css("margin-right"):!1,this.el=z.all&&!z.querySelector?f("html"):f("body"),this.create(a));a.locked&&this.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&f("body").css("margin-right",l(this.margin)+b.scrollbarWidth));this.open(a)},onUpdate:function(){this.fixed||
this.update()},afterClose:function(a){this.overlay&&!b.isActive&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(p(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),
H&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+
'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):n.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};n.ready(function(){f.scrollbarWidth===r&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),
b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===r){var a=f.support,d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")})})})(window,document,jQuery);
/**
 * Copyright (c) 2005 - 2010, James Auldridge
 * All rights reserved.
 *
 * Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
 *  http://code.google.com/p/cookies/wiki/License
 *
 */
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
{returnValue[cookieName[item]]=null;}}}else
{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();
'use strict';(function(b){var e=function(a,c){this.$select=b(a);this.classSelected=c};e.prototype.select=function(a){var c=b(a);if(!c.hasClass(this.classSelected))return c.addClass(this.classSelected),a};e.prototype.deselect=function(a){b(a).removeClass(this.classSelected);return a};e.prototype.toggle=function(a){b(a).hasClass(this.classSelected)?this.deselect(a):this.select(a)};e.prototype.getAll=function(){return this.$select.find("option."+this.classSelected)};e.prototype.resetSelection=function(){for(var a=
0,b=this.getAll();this.deselect(b[a]);a++);};e.prototype.getAllVal=function(){var a=[];b.each(this.getAll(),function(b,d){a.push(d.value)});return a};var g=function(a){this.$trgtSelect=b(a);b('<div class = "multiselect_main_categories"/>').insertBefore(this.$trgtSelect).append(this.$trgtSelect).append(this._getDOMObjWrapper())};g.prototype._getDOMObjWrapper=function(){var a=b("<div class = 'multiselect_wrap_categories'></div>"),c=[],d=this;b.each(this.$trgtSelect.find("optgroup"),function(a,f){c[a]=
b("<div class = 'category' id = "+f.label+">"+f.label+"</div>").click(function(){d.selectAllOptionsFromOptgroup(this.id)})});b.each(c,function(b,f){a.append(f)});return a};g.prototype.selectAllOptionsFromOptgroup=function(a){for(var c=this.$trgtSelect.find("optgroup"),d=0;c[d]&&c[d].label!=a;d++);if(d!=c.length){var e=b.data(this.$trgtSelect.get(0),"MultiSelect_selection")||{toggle:function(){}};b.each(b(c[d]).find("option"),function(b,a){e.toggle(a)})}};b.fn.MultiSelect=function(a){"object"!=typeof a&&
(a={});var c=b.extend({size:10,css_class_selected:"selected",enableCategoriesSel:!1},a),d=function(){var a=b.data(this.get(0),"MultiSelect_selection");return a?a:a=b.data(this.get(0),"MultiSelect_selection",new e(this,c.css_class_selected))};b.valHooks.select.original_get||(b.valHooks.select.original_get=b.valHooks.select.get,b.valHooks.select.get=function(a){var c=b.data(a,"MultiSelect_selection");return c?(c=c.getAllVal(),a=jQuery.valHooks.select.original_get(a),null==a&&(a=[]),a=[].concat(c,a),
!a.length?null:a):jQuery.valHooks.select.original_get(a)});var h=[];this.each(function(){var a=b(this);h.push(d.call(a));a.change(function(){for(var a=b(this).find(":selected"),c=b.data(this,"MultiSelect_selection"),d=0,e;a[d];d++)e=b(a[d]),c.toggle(e.get(0)),e.attr("selected",!1)});a.attr("multiple")||a.attr("multiple",!0);a.attr("size",c.size);c.enableCategoriesSel&&new g(a)});return h}})(jQuery);

/*----------------------------------------------------  
    CheckAll plugin for jQuery
    Version: 1.4

    Copyright (c) 2012 Matt Ball
    
    April 2, 2012

    Requires: jQuery 1.4.2+
    Last tested with: 1.4.4, 1.5.2, 1.6, 1.7.1, 1.8.2, 1.9
------------------------------------------------------*/

;(function($)
{
    $.fn.checkAll = function (group, options)
    {
        var opts = $.extend({}, $.fn.checkAll.defaults, options),
            $master = this,
        
            $slaves = $(group),
            selector,
            groupSize,
            onClick = typeof opts.onClick === 'function' ? opts.onClick : null,
            onMasterClick = typeof opts.onMasterClick === 'function' ? opts.onMasterClick : null,
            reportTo = typeof opts.reportTo === 'function' ? $.proxy(opts.reportTo, $master) : null,
            
            // for compatibility with 1.4.2 through 1.6
            propFn = typeof $.fn.prop === 'function' ? 'prop' : 'attr',
            onFn = typeof $.fn.on === 'function' ? 'on' : 'live',
            offFn = typeof $.fn.off === 'function' ? 'off' : 'die';
        
        // omit the master if it was accidentally selected with the slaves
        if ($slaves.index($master) === -1)
        {
            selector = $slaves.selector;
        }
        else    
        {
            $slaves = $slaves.not($master.selector);
            selector = $slaves.selector.replace('.not(', ':not(');
        }
        
        groupSize = $slaves.length;
        
        if (groupSize === 0)
        {
            // this is kind of a problem
            groupSize = -1;
        }
        
        function _countChecked()
        {
            return $slaves.filter(':checked').length;
        }
            
        function _autoEnable()
        {
            var numChecked = _countChecked();
            $master[propFn]('checked', groupSize === numChecked);
            if (reportTo)
            {
                reportTo(numChecked);
            }
        }
            
        function _autoDisable()
        {
            $master[propFn]('checked', false);
            if (reportTo)
            {
                reportTo(_countChecked());
            }
        }
        
        $master.unbind('click.checkAll').bind('click.checkAll', function (e)
        {
            var check_val = e.target.checked;
            $slaves.add($master)[propFn]('checked', check_val);
            
            if (onMasterClick)
            {
                onMasterClick.apply(this);
            }
            
            if (reportTo)
            {
                reportTo(check_val ? _countChecked() : 0);
            }
        });

        
        if (opts.sync)
        {
            $(selector)[offFn]('click.checkAll')[onFn]('click.checkAll', function ()
            {
                this.checked ? _autoEnable() : _autoDisable();
                
                if (onClick)
                {
                    onClick.apply(this);
                }
            });
        }
        
        _autoEnable();
        
        return this;
    };
    
    $.fn.checkAll.defaults = {sync: true};
}(jQuery));

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document)
    .ready(
        function() {

          SocialMediaManager = function() {
            this.init();
          };

          /** Capsulate main logic in object * */
          $
              .extend(
                  SocialMediaManager.prototype,
                  {

                    /** Configuration * */
                    socialMediaCookieName : "socialmedia/ddb-next",
                    socialMediaCookieValue : "allowed",
                    socialMediaCookieTTL : 1, // 1 = 1 day
                    urlToLike : null,
                    titleToLike : null,

                    /** Initialization * */
                    init : function() {
                    },

                    /**
                     * Main method. Call to integrate social network into the
                     * page *
                     */
                    integrateSocialMedia : function() {
                      this.registerClickHandlers();
                      this.applyCookieAllowed();
                    },

                    /**
                     * Register the click- and mouseover-events on the DOM
                     * objects *
                     */
                    registerClickHandlers : function() {
                      var self = this;

                      /** Fade in overlay when social icon is clicked * */
                      $(".socialmedia .social-locked ul li").mouseover(function() {
                        self.showPrivacyInformationOverlay();
                      });

                      /** Fade out overlay when overlay div is leaved * */
                      $(".socialmedia .social-locked .social-overlay-container").mouseleave(
                          function() {
                            self.hidePrivacyInformationOverlay();
                          });

                      /**
                       * If the user accepts the privacy tooltip -> attach
                       * social sites to page *
                       */
                      $(".socialmedia .social-accept").click(function() {
                        self.integrateSocialCodeInPage(true);
                      });

                      /**
                       * If the user revokes the social integration -> remove
                       * integration from page and delete cookie *
                       */
                      $(".socialmedia .social-open .social-lockagain").click(function() {
                        self.removeSocialCodeFromPage();
                      });
                    },

                    /** If access is allowed by cookie -> skip privacy tooltip * */
                    applyCookieAllowed : function() {
                      if (this.isSocialMediaCookieAllowed()) {
                        this.integrateSocialCodeInPage(false);
                      }
                    },

                    /** Displays the tooltip overlay with the privacy information * */
                    showPrivacyInformationOverlay : function() {
                      $(".socialmedia .social-locked .social-overlay-container").fadeIn(200);
                    },

                    /** Hides the tooltip overlay with the privacy information * */
                    hidePrivacyInformationOverlay : function() {
                      window.setTimeout(function() {
                        $(".socialmedia .social-locked .social-overlay-container").fadeOut(200);
                      }, 200);
                    },

                    /** Integrates the social network code into the page * */
                    integrateSocialCodeInPage : function(setCookie) {
                      this.checkForOpenGraphMetaTags();

                      $(".socialmedia .social-locked .social-overlay-container").css("display",
                          "none");
                      $(".socialmedia .social-locked").css("display", "none");
                      $(".socialmedia .social-open iframe").attr("scrolling", "no");
                      $(".socialmedia .social-open").css("display", "block");

                      var urlSelf = document.location.href;
                      if (this.urlToLike != null) {
                        urlSelf = this.urlToLike;
                      }
                      var urlSelfEncoded = encodeURIComponent(urlSelf);
                      var pageTitle = encodeURIComponent(window.document.title);
                      if (this.titleToLike != null) {
                        pageTitle = encodeURIComponent(this.titleToLike);
                      }
                      var languageISO2 = $(".socialmedia").attr("data-lang-iso2");
                      var languageFull = $(".socialmedia").attr("data-lang-full");

                      var urlFacebook = "https://www.facebook.com/plugins/like.php?locale="
                          + languageFull
                          + "&href="
                          + urlSelfEncoded
                          + "&send=false&layout=button_count&width=130&show_faces=false&action=like&colorscheme=light&amp;font&height=21";
                      var urlTwitter = "https://platform.twitter.com/widgets/tweet_button.html?url="
                          + urlSelfEncoded + "&counturl=" + urlSelfEncoded + "&text=" + pageTitle
                          + "&count=horizontal&lang=" + languageISO2;
                      var htmlGooglePlus = '<div class="g-plusone" data-size="medium" data-href="'
                          + urlSelf
                          + '"></div><script type="text/javascript">window.___gcfg = {lang: "'
                          + languageISO2
                          + '"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); </script>';

                      $(".socialmedia .social-open .social-facebook iframe").attr("src",
                          urlFacebook);
                      $(".socialmedia .social-open .social-twitter iframe").attr("src", urlTwitter);
                      $(".socialmedia .social-open .social-googleplus").html(htmlGooglePlus);

                      if (setCookie) {
                        this.setSocialMediaCookie();
                      }
                    },

                    /** Removes the social network code from the page * */
                    removeSocialCodeFromPage : function() {
                      $(".socialmedia .social-open .social-facebook iframe").attr("src", "");
                      $(".socialmedia .social-open .social-twitter iframe").attr("src", "");
                      $(".socialmedia .social-open .social-googleplus").html("");

                      $(".socialmedia .social-locked").css("display", "block");
                      $(".socialmedia .social-open").css("display", "none");

                      this.removeSocialMediaCookie();
                    },

                    /**
                     * Sets a cookie that will immediately activate the social
                     * network integration *
                     */
                    setSocialMediaCookie : function() {
                      var expirationDate = new Date();
                      expirationDate.setDate(expirationDate.getDate() + this.socialMediaCookieTTL);
                      $.cookies.set(this.socialMediaCookieName, this.socialMediaCookieValue, {
                        expiresAt : expirationDate,
                        path : jsContextPath
                      });
                    },

                    /**
                     * Checks is the social network integration cookie is set
                     * and has the value 'allowed' *
                     */
                    isSocialMediaCookieAllowed : function() {
                      var socialMediaAllowed = $.cookies.get(this.socialMediaCookieName);
                      if (socialMediaAllowed === this.socialMediaCookieValue) {
                        return true;
                      }
                      return false;
                    },

                    /** Explicitely removes the social network cookie again * */
                    removeSocialMediaCookie : function() {
                      $.cookies.del(this.socialMediaCookieName, {
                        path : jsContextPath
                      });
                    },

                    /** Check for existing opengraph metatags to take config from * */
                    checkForOpenGraphMetaTags : function() {
                      var likeTitle = $("meta[property='og:title']").attr("content");
                      if (likeTitle !== null && likeTitle !== "") {
                        this.titleToLike = likeTitle;
                      }

                      var likeUrl = $("meta[property='og:url']").attr("content");
                      if (likeUrl !== null && likeUrl !== "") {
                        this.urlToLike = likeUrl;
                      }
                    }

                  });

        });
function StringBuilder() {
  this.buffer = [];
  this.iCount = -1;
}

StringBuilder.prototype.append = function(string) {
  this.buffer[++this.iCount] = string;
  return this;
};

StringBuilder.prototype.toString = function() {
  return this.buffer.join("");
};

StringBuilder.prototype.getLength = function() {
  return this.buffer.length;
};
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
"undefined"==typeof jwplayer&&(jwplayer=function(f){if(jwplayer.api)return jwplayer.api.selectPlayer(f)},jwplayer.version="6.2.3115",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(f){function a(a){return function(){return b(a)}}var j=document,e=window,c=navigator,d=f.utils=function(){};d.exists=function(a){switch(typeof a){case "string":return 0<a.length;case "object":return null!==a;case "undefined":return!1}return!0};
d.styleDimension=function(a){return a+(0<a.toString().indexOf("%")?"":"px")};d.getAbsolutePath=function(a,b){d.exists(b)||(b=j.location.href);if(d.exists(a)){var c;if(d.exists(a)){c=a.indexOf("://");var l=a.indexOf("?");c=0<c&&(0>l||l>c)}else c=void 0;if(c)return a;c=b.substring(0,b.indexOf("://")+3);var l=b.substring(c.length,b.indexOf("/",c.length+1)),e;0===a.indexOf("/")?e=a.split("/"):(e=b.split("?")[0],e=e.substring(c.length+l.length+1,e.lastIndexOf("/")),e=e.split("/").concat(a.split("/")));
for(var g=[],r=0;r<e.length;r++)e[r]&&(d.exists(e[r])&&"."!=e[r])&&(".."==e[r]?g.pop():g.push(e[r]));return c+l+"/"+g.join("/")}};d.extend=function(){var a=d.extend.arguments;if(1<a.length){for(var b=1;b<a.length;b++)for(var c in a[b])try{d.exists(a[b][c])&&(a[0][c]=a[b][c])}catch(e){}return a[0]}return null};d.log=function(a,d){"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.log(a,d):console.log(a))};var b=d.userAgentMatch=function(a){return null!==c.userAgent.toLowerCase().match(a)};
d.isIE=a(/msie/i);d.isFF=a(/firefox/i);d.isChrome=a(/chrome/i);d.isIOS=a(/iP(hone|ad|od)/i);d.isIPod=a(/iP(hone|od)/i);d.isIPad=a(/iPad/i);d.isSafari602=a(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);d.isAndroid=function(a){return a?b(RegExp("android.*"+a,"i")):b(/android/i)};d.isMobile=function(){return d.isIOS()||d.isAndroid()};d.saveCookie=function(a,d){j.cookie="jwplayer."+a+"\x3d"+d+"; path\x3d/"};d.getCookies=function(){for(var a={},d=j.cookie.split("; "),b=0;b<d.length;b++){var c=d[b].split("\x3d");
0==c[0].indexOf("jwplayer.")&&(a[c[0].substring(9,c[0].length)]=c[1])}return a};d.typeOf=function(a){var d=typeof a;return"object"===d?!a?"null":a instanceof Array?"array":d:d};d.translateEventResponse=function(a,b){var c=d.extend({},b);a==f.events.JWPLAYER_FULLSCREEN&&!c.fullscreen?(c.fullscreen="true"==c.message?!0:!1,delete c.message):"object"==typeof c.data?(c=d.extend(c,c.data),delete c.data):"object"==typeof c.metadata&&d.deepReplaceKeyName(c.metadata,["__dot__","__spc__","__dsh__"],["."," ",
"-"]);var e=["position","duration","offset"],l;for(l in e)c[e[l]]&&(c[e[l]]=Math.round(1E3*c[e[l]])/1E3);return c};d.flashVersion=function(){if(d.isAndroid())return 0;var a=c.plugins,b;try{if("undefined"!==a&&(b=a["Shockwave Flash"]))return parseInt(b.description.replace(/\D+(\d+)\..*/,"$1"))}catch(l){}if("undefined"!=typeof e.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(b.GetVariable("$version").split(" ")[1].split(",")[0])}catch(f){}return 0};d.getScriptPath=
function(a){for(var d=j.getElementsByTagName("script"),b=0;b<d.length;b++){var c=d[b].src;if(c&&0<=c.indexOf(a))return c.substr(0,c.indexOf(a))}return""};d.deepReplaceKeyName=function(a,d,b){switch(f.utils.typeOf(a)){case "array":for(var c=0;c<a.length;c++)a[c]=f.utils.deepReplaceKeyName(a[c],d,b);break;case "object":for(var e in a){var g;if(d instanceof Array&&b instanceof Array)if(d.length!=b.length)continue;else g=d;else g=[d];for(var r=e,c=0;c<g.length;c++)r=r.replace(RegExp(d[c],"g"),b[c]);a[r]=
f.utils.deepReplaceKeyName(a[e],d,b);e!=r&&delete a[e]}}return a};var l=d.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};d.getPluginPathType=function(a){if("string"==typeof a){a=a.split("?")[0];var b=a.indexOf("://");if(0<b)return l.ABSOLUTE;var c=a.indexOf("/");a=d.extension(a);return 0>b&&0>c&&(!a||!isNaN(a))?l.CDN:l.RELATIVE}};d.getPluginName=function(a){return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};d.getPluginVersion=function(a){return a.replace(/[^-]*-?([^\.]*).*$/,"$1")};d.isYouTube=
function(a){return-1<a.indexOf("youtube.com")||-1<a.indexOf("youtu.be")};d.isRtmp=function(a,d){return 0==a.indexOf("rtmp")||"rtmp"==d};d.foreach=function(a,d){for(var b in a)a.hasOwnProperty(b)&&d(b)};d.isHTTPS=function(){return 0==e.location.href.indexOf("https")};d.repo=function(){var a="http://p.jwpcdn.com/"+f.version.split(/\W/).splice(0,2).join("/")+"/";try{d.isHTTPS()&&(a=a.replace("http://","https://ssl."))}catch(b){}return a}}(jwplayer),function(f){var a="video/",j={mp4:a+"mp4",vorbis:"audio/ogg",
ogg:a+"ogg",webm:a+"webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},e={mp4:j.mp4,f4v:j.mp4,m4v:j.mp4,mov:j.mp4,m4a:j.aac,f4a:j.aac,aac:j.aac,mp3:j.mp3,ogv:j.ogg,ogg:j.vorbis,oga:j.vorbis,webm:j.webm,m3u8:j.hls},a="video",a={flv:a,f4v:a,mov:a,m4a:a,m4v:a,mp4:a,aac:a,f4a:a,mp3:"sound",smil:"rtmp",m3u8:"hls"},c=f.extensionmap={},d;for(d in e)c[d]={html5:e[d]};for(d in a)c[d]||(c[d]={}),c[d].flash=a[d];c.types=j;c.mimeType=function(a){for(var d in j)if(j[d]==a)return d};c.extType=
function(a){return c.mimeType(e[a])}}(jwplayer.utils),function(f){var a=f.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},j=document;f.scriptloader=function(e){function c(){b=a.ERROR;h.sendEvent(l.ERROR)}function d(){b=a.COMPLETE;h.sendEvent(l.COMPLETE)}var b=a.NEW,l=jwplayer.events,h=new l.eventdispatcher;f.extend(this,h);this.load=function(){var h=f.scriptloader.loaders[e];if(h&&(h.getStatus()==a.NEW||h.getStatus()==a.LOADING))h.addEventListener(l.ERROR,c),h.addEventListener(l.COMPLETE,d);else if(f.scriptloader.loaders[e]=
this,b==a.NEW){b=a.LOADING;var m=j.createElement("script");m.addEventListener?(m.onload=d,m.onerror=c):m.readyState&&(m.onreadystatechange=function(){("loaded"==m.readyState||"complete"==m.readyState)&&d()});j.getElementsByTagName("head")[0].appendChild(m);m.src=e}};this.getStatus=function(){return b}};f.scriptloader.loaders={}}(jwplayer.utils),function(f){f.trim=function(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")};f.pad=function(a,f,e){for(e||(e="0");a.length<f;)a=e+a;return a};f.xmlAttribute=
function(a,f){for(var e=0;e<a.attributes.length;e++)if(a.attributes[e].name&&a.attributes[e].name.toLowerCase()==f.toLowerCase())return a.attributes[e].value.toString();return""};f.extension=function(a){if(!a||"rtmp"==a.substr(0,4))return"";a=a.substring(a.lastIndexOf("/")+1,a.length).split("?")[0].split("#")[0];if(-1<a.lastIndexOf("."))return a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase()};f.stringToColor=function(a){a=a.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3==a.length&&(a=a.charAt(0)+
a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2));return parseInt(a,16)}}(jwplayer.utils),function(f){f.key=function(a){var j,e,c;this.edition=function(){return c&&c.getTime()<(new Date).getTime()?"invalid":j};this.token=function(){return e};f.exists(a)||(a="");try{a=f.tea.decrypt(a,"36QXq4W@GSBV^teR");var d=a.split("/");(j=d[0])||(j="free");e=d[1];d[2]&&0<parseInt(d[2])&&(c=new Date,c.setTime(String(d[2])))}catch(b){j="invalid"}}}(jwplayer.utils),function(f){var a=f.tea={};a.encrypt=function(c,
d){if(0==c.length)return"";var b=a.strToLongs(e.encode(c));1>=b.length&&(b[1]=0);for(var l=a.strToLongs(e.encode(d).slice(0,16)),h=b.length,f=b[h-1],m=b[0],q,k=Math.floor(6+52/h),g=0;0<k--;){g+=2654435769;q=g>>>2&3;for(var r=0;r<h;r++)m=b[(r+1)%h],f=(f>>>5^m<<2)+(m>>>3^f<<4)^(g^m)+(l[r&3^q]^f),f=b[r]+=f}b=a.longsToStr(b);return j.encode(b)};a.decrypt=function(c,d){if(0==c.length)return"";for(var b=a.strToLongs(j.decode(c)),l=a.strToLongs(e.encode(d).slice(0,16)),h=b.length,f=b[h-1],m=b[0],q,k=2654435769*
Math.floor(6+52/h);0!=k;){q=k>>>2&3;for(var g=h-1;0<=g;g--)f=b[0<g?g-1:h-1],f=(f>>>5^m<<2)+(m>>>3^f<<4)^(k^m)+(l[g&3^q]^f),m=b[g]-=f;k-=2654435769}b=a.longsToStr(b);b=b.replace(/\0+$/,"");return e.decode(b)};a.strToLongs=function(a){for(var d=Array(Math.ceil(a.length/4)),b=0;b<d.length;b++)d[b]=a.charCodeAt(4*b)+(a.charCodeAt(4*b+1)<<8)+(a.charCodeAt(4*b+2)<<16)+(a.charCodeAt(4*b+3)<<24);return d};a.longsToStr=function(a){for(var d=Array(a.length),b=0;b<a.length;b++)d[b]=String.fromCharCode(a[b]&
255,a[b]>>>8&255,a[b]>>>16&255,a[b]>>>24&255);return d.join("")};var j={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",encode:function(a,d){var b,l,h,f,m=[],q="",k,g,r=j.code;g=("undefined"==typeof d?0:d)?e.encode(a):a;k=g.length%3;if(0<k)for(;3>k++;)q+="\x3d",g+="\x00";for(k=0;k<g.length;k+=3)b=g.charCodeAt(k),l=g.charCodeAt(k+1),h=g.charCodeAt(k+2),f=b<<16|l<<8|h,b=f>>18&63,l=f>>12&63,h=f>>6&63,f&=63,m[k/3]=r.charAt(b)+r.charAt(l)+r.charAt(h)+r.charAt(f);m=m.join("");
return m=m.slice(0,m.length-q.length)+q},decode:function(a,d){d="undefined"==typeof d?!1:d;var b,l,h,f,m,q=[],k,g=j.code;k=d?e.decode(a):a;for(var r=0;r<k.length;r+=4)b=g.indexOf(k.charAt(r)),l=g.indexOf(k.charAt(r+1)),f=g.indexOf(k.charAt(r+2)),m=g.indexOf(k.charAt(r+3)),h=b<<18|l<<12|f<<6|m,b=h>>>16&255,l=h>>>8&255,h&=255,q[r/4]=String.fromCharCode(b,l,h),64==m&&(q[r/4]=String.fromCharCode(b,l)),64==f&&(q[r/4]=String.fromCharCode(b));f=q.join("");return d?e.decode(f):f}},e={encode:function(a){a=
a.replace(/[\u0080-\u07ff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(192|a>>6,128|a&63)});return a=a.replace(/[\u0800-\uffff]/g,function(a){a=a.charCodeAt(0);return String.fromCharCode(224|a>>12,128|a>>6&63,128|a&63)})},decode:function(a){a=a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&15)<<12|(a.charCodeAt(1)&63)<<6|a.charCodeAt(2)&63;return String.fromCharCode(a)});return a=a.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(a){a=(a.charCodeAt(0)&
31)<<6|a.charCodeAt(1)&63;return String.fromCharCode(a)})}}}(jwplayer.utils),function(f){f.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",
JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",
JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",
JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}}(jwplayer),function(f){var a=jwplayer.utils;f.eventdispatcher=function(f,e){var c,d;this.resetEventListeners=function(){c={};d=[]};this.resetEventListeners();this.addEventListener=function(b,d,e){try{a.exists(c[b])||(c[b]=[]),"string"==a.typeOf(d)&&(d=(new Function("return "+d))()),c[b].push({listener:d,count:e})}catch(f){a.log("error",f)}return!1};this.removeEventListener=function(b,d){if(c[b]){try{for(var e=0;e<c[b].length;e++)if(c[b][e].listener.toString()==
d.toString()){c[b].splice(e,1);break}}catch(f){a.log("error",f)}return!1}};this.addGlobalListener=function(b,c){try{"string"==a.typeOf(b)&&(b=(new Function("return "+b))()),d.push({listener:b,count:c})}catch(e){a.log("error",e)}return!1};this.removeGlobalListener=function(b){if(b){try{for(var c=0;c<d.length;c++)if(d[c].listener.toString()==b.toString()){d.splice(c,1);break}}catch(e){a.log("error",e)}return!1}};this.sendEvent=function(b,l){a.exists(l)||(l={});a.extend(l,{id:f,version:jwplayer.version,
type:b});e&&a.log(b,l);if("undefined"!=a.typeOf(c[b]))for(var h=0;h<c[b].length;h++){try{c[b][h].listener(l)}catch(n){a.log("There was an error while handling a listener: "+n.toString(),c[b][h].listener)}c[b][h]&&(1===c[b][h].count?delete c[b][h]:0<c[b][h].count&&(c[b][h].count-=1))}for(h=0;h<d.length;h++){try{d[h].listener(l)}catch(m){a.log("There was an error while handling a listener: "+m.toString(),d[h].listener)}d[h]&&(1===d[h].count?delete d[h]:0<d[h].count&&(d[h].count-=1))}}}}(jwplayer.events),
function(f){var a={},j={};f.plugins=function(){};f.plugins.loadPlugins=function(e,c){j[e]=new f.plugins.pluginloader(new f.plugins.model(a),c);return j[e]};f.plugins.registerPlugin=function(e,c,d,b){var l=f.utils.getPluginName(e);a[l]||(a[l]=new f.plugins.plugin(e));a[l].registerPlugin(e,c,d,b)}}(jwplayer),function(f){f.plugins.model=function(a){this.addPlugin=function(j){var e=f.utils.getPluginName(j);a[e]||(a[e]=new f.plugins.plugin(j));return a[e]};this.getPlugins=function(){return a}}}(jwplayer),
function(f){var a=jwplayer.utils,j=jwplayer.events;f.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};f.plugin=function(e){function c(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href)}}function d(){q=setTimeout(function(){l=a.loaderstatus.COMPLETE;k.sendEvent(j.COMPLETE)},1E3)}function b(){l=a.loaderstatus.ERROR;k.sendEvent(j.ERROR)}var l=a.loaderstatus.NEW,h,n,m,q,k=new j.eventdispatcher;a.extend(this,
k);this.load=function(){if(l==a.loaderstatus.NEW)if(0<e.lastIndexOf(".swf"))h=e,l=a.loaderstatus.COMPLETE,k.sendEvent(j.COMPLETE);else if(a.getPluginPathType(e)==a.pluginPathType.CDN)l=a.loaderstatus.COMPLETE,k.sendEvent(j.COMPLETE);else{l=a.loaderstatus.LOADING;var g=new a.scriptloader(c());g.addEventListener(j.COMPLETE,d);g.addEventListener(j.ERROR,b);g.load()}};this.registerPlugin=function(b,d,c,e){q&&(clearTimeout(q),q=void 0);m=d;c&&e?(h=e,n=c):"string"==typeof c?h=c:"function"==typeof c?n=c:
!c&&!e&&(h=b);l=a.loaderstatus.COMPLETE;k.sendEvent(j.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(h)switch(a.getPluginPathType(h)){case a.pluginPathType.ABSOLUTE:return h;case a.pluginPathType.RELATIVE:return 0<e.lastIndexOf(".swf")?a.getAbsolutePath(h,window.location.href):a.getAbsolutePath(h,c())}return null};this.getJS=function(){return n};this.getTarget=function(){return m};this.getPluginmode=function(){if("undefined"!=
typeof h&&"undefined"!=typeof n)return f.pluginmodes.HYBRID;if("undefined"!=typeof h)return f.pluginmodes.FLASH;if("undefined"!=typeof n)return f.pluginmodes.JAVASCRIPT};this.getNewInstance=function(a,b,d){return new n(a,b,d)};this.getURL=function(){return e}}}(jwplayer.plugins),function(f){var a=f.utils,j=f.events;f.plugins.pluginloader=function(e,c){function d(){n?k.sendEvent(j.ERROR,{message:m}):h||(h=!0,l=a.loaderstatus.COMPLETE,k.sendEvent(j.COMPLETE))}function b(){q||d();if(!h&&!n){var b=0,
c=e.getPlugins(),g;for(g in q){var l=a.getPluginName(g),j=c[l],l=j.getJS(),k=j.getTarget(),j=j.getStatus();if(j==a.loaderstatus.LOADING||j==a.loaderstatus.NEW)b++;else if(l&&(!k||parseFloat(k)>parseFloat(f.version)))n=!0,m="Incompatible player version",d()}0==b&&d()}}var l=a.loaderstatus.NEW,h=!1,n=!1,m,q=c,k=new j.eventdispatcher;a.extend(this,k);this.setupPlugins=function(b,d,c){var g={length:0,plugins:{}},f=0,l={},h=e.getPlugins(),j;for(j in d.plugins){var k=a.getPluginName(j),m=h[k],B=m.getFlashPath(),
n=m.getJS(),q=m.getURL();B&&(g.plugins[B]=a.extend({},d.plugins[j]),g.plugins[B].pluginmode=m.getPluginmode(),g.length++);try{if(n&&d.plugins&&d.plugins[q]){var v=document.createElement("div");v.id=b.id+"_"+k;v.style.position="absolute";v.style.top=0;v.style.zIndex=f+10;l[k]=m.getNewInstance(b,a.extend({},d.plugins[q]),v);f++;b.onReady(c(l[k],v,!0));b.onResize(c(l[k],v))}}catch(C){console.log("ERROR: Failed to load "+k+".")}}b.plugins=l;return g};this.load=function(){if(!(a.exists(c)&&"object"!=a.typeOf(c))){l=
a.loaderstatus.LOADING;for(var d in c)if(a.exists(d)){var f=e.addPlugin(d);f.addEventListener(j.COMPLETE,b);f.addEventListener(j.ERROR,g)}f=e.getPlugins();for(d in f)f[d].load()}b()};var g=this.pluginFailed=function(){n||(n=!0,m="File not found",d())};this.getStatus=function(){return l}}}(jwplayer),function(f){f.playlist=function(a){var j=[];if("array"==f.utils.typeOf(a))for(var e=0;e<a.length;e++)j.push(new f.playlist.item(a[e]));else j.push(new f.playlist.item(a));return j}}(jwplayer),function(f){var a=
f.item=function(j){j=jwplayer.utils.extend({},a.defaults,j);0==j.sources.length&&(j.sources=[new f.source(j)]);for(var e=0;e<j.sources.length;e++)j.sources[e]=new f.source(j.sources[e]);return j};a.defaults={description:"",image:"",mediaid:"",title:"",tags:"",duration:-1,sources:[]}}(jwplayer.playlist),function(f){var a=jwplayer.utils,j={file:void 0,label:void 0,bitrate:void 0,width:void 0,height:void 0,type:void 0};f.source=function(e){var c=a.extend({},j),d;for(d in j)a.exists(e[d])&&(c[d]=e[d],
delete e[d]);c.type&&0<c.type.indexOf("/")&&(c.type=a.extensionmap.mimeType(c.type));"m3u8"==c.type&&(c.type="hls");"smil"==c.type&&(c.type="rtmp");return c}}(jwplayer.playlist),function(f){var a=f.utils,j=f.events,e=document,c=f.embed=function(d){function b(a){h(m,p+a.message)}function l(){h(m,p+"No playable sources found")}function h(d,b){if(n.fallback){var c=d.style;c.backgroundColor="#000";c.color="#FFF";c.width=a.styleDimension(n.width);c.height=a.styleDimension(n.height);c.display="table";c.opacity=
1;var c=document.createElement("p"),g=c.style;g.verticalAlign="middle";g.textAlign="center";g.display="table-cell";g.font="15px/20px Arial, Helvetica, sans-serif";c.innerHTML=b.replace(":",":\x3cbr\x3e");d.innerHTML="";d.appendChild(c)}}var n=new c.config(d.config),m,q,k,g=n.width,r=n.height,p="Error loading player: ",s=f.plugins.loadPlugins(d.id,n.plugins);n.fallbackDiv&&(k=n.fallbackDiv,delete n.fallbackDiv);n.id=d.id;q=e.getElementById(d.id);m=e.createElement("div");m.id=q.id;m.style.width=0<g.toString().indexOf("%")?
g:g+"px";m.style.height=0<r.toString().indexOf("%")?r:r+"px";q.parentNode.replaceChild(m,q);f.embed.errorScreen=h;s.addEventListener(j.COMPLETE,function(){if("array"==a.typeOf(n.playlist)&&2>n.playlist.length&&(0==n.playlist.length||!n.playlist[0].sources||0==n.playlist[0].sources.length))l();else if(s.getStatus()==a.loaderstatus.COMPLETE){for(var g=0;g<n.modes.length;g++)if(n.modes[g].type&&c[n.modes[g].type]){var e=a.extend({},n),f=new c[n.modes[g].type](m,n.modes[g],e,s,d);if(f.supportsConfig()){f.addEventListener(j.ERROR,
b);f.embed();g=d;e=e.events;f=void 0;for(f in e)"function"==typeof g[f]&&g[f].call(g,e[f]);return d}}n.fallback?(a.log("No suitable players found and fallback enabled"),new c.download(m,n,l)):(a.log("No suitable players found and fallback disabled"),m.parentNode.replaceChild(k,m))}});s.addEventListener(j.ERROR,function(a){h(m,"Could not load plugins: "+a.message)});s.load();return d}}(jwplayer),function(f){function a(a){if(a.playlist)for(var b=0;b<a.playlist.length;b++)a.playlist[b]=new c(a.playlist[b]);
else{var b={},e;for(e in c.defaults)j(a,b,e);b.sources||(a.levels?(b.sources=a.levels,delete a.levels):(e={},j(a,e,"file"),j(a,e,"type"),b.sources=e.file?[e]:[]));a.playlist=[new c(b)]}}function j(a,b,c){e.exists(a[c])&&(b[c]=a[c],delete a[c])}var e=f.utils,c=f.playlist.item;(f.embed.config=function(d){var b={fallback:!0,height:270,primary:"html5",width:480,base:d.base?d.base:e.getScriptPath("jwplayer.js")};d=e.extend(b,f.defaults,d);var b={type:"html5",src:"../jwplayer/jwplayer.html5.js"},c={type:"flash",
src:"../jwplayer/jwplayer.flash.swf"};d.modes="flash"==d.primary?[c,b]:[b,c];d.listbar&&(d.playlistsize=d.listbar.size,d.playlistposition=d.listbar.position);d.flashplayer&&(c.src=d.flashplayer);d.html5player&&(b.src=d.html5player);a(d);return d}).addConfig=function(d,b){a(b);return e.extend(d,b)}}(jwplayer),function(f){var a=f.utils,j=document;f.embed.download=function(e,c,d){function b(a,b){for(var d=j.querySelectorAll(a),c=0;c<d.length;c++)for(var g in b)d[c].style[g]=b[g]}function f(a,b,d){a=j.createElement(a);
b&&(a.className="jwdownload"+b);d&&d.appendChild(a);return a}var h=a.extend({},c),n,m=h.width?h.width:480,q=h.height?h.height:320,k;c=c.logo?c.logo:{prefix:a.repo(),file:"logo.png",margin:10};var g,r;r=h.playlist;var p,s,h=["mp4","aac","mp3"];if(r&&r.length){p=r[0];s=p.sources;for(r=0;r<s.length;r++){var u=s[r],t=u.type?u.type:a.extensionmap.extType(a.extension(u.file));if(u.file)for(r in h)t==h[r]?(n=u.file,k=p.image):a.isYouTube(u.file)&&(g=u.file)}n?(d=n,e&&(n=f("a","display",e),f("div","icon",
n),f("div","logo",n),d&&n.setAttribute("href",a.getAbsolutePath(d))),d="#"+e.id+" .jwdownload",e.style.width="",e.style.height="",b(d+"display",{width:a.styleDimension(Math.max(320,m)),height:a.styleDimension(Math.max(180,q)),background:"black center no-repeat "+(k?"url("+k+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),b(d+"display div",{position:"absolute",width:"100%",height:"100%"}),b(d+"logo",{top:c.margin+"px",right:c.margin+"px",background:"top right no-repeat url("+
c.prefix+c.file+")"}),b(d+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):
g?(c=g,e=f("embed","",e),e.src="http://www.youtube.com/v/"+/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i.exec(c).slice(1).join(""),e.type="application/x-shockwave-flash",e.width=m,e.height=q):d()}}}(jwplayer),function(f){var a=f.utils,j=f.events,e={};(f.embed.flash=function(c,d,b,l,h){function n(a,b,d){var c=document.createElement("param");c.setAttribute("name",b);c.setAttribute("value",d);a.appendChild(c)}function m(a,b,d){return function(){try{d&&document.getElementById(h.id+"_wrapper").appendChild(b);var c=
document.getElementById(h.id).getPluginConfig("display");"function"==typeof a.resize&&a.resize(c.width,c.height);b.style.left=c.x;b.style.top=c.h}catch(g){}}}function q(b){if(!b)return{};var d={},c=[],g;for(g in b){var e=a.getPluginName(g),f=b[g];c.push(g);for(var h in f)d[e+"."+h]=f[h]}d.plugins=c.join(",");return d}var k=new f.events.eventdispatcher,g=a.flashVersion();a.extend(this,k);this.embed=function(){b.id=h.id;if(10>g)return k.sendEvent(j.ERROR,{message:"Flash version must be 10.0 or greater"}),
!1;var f,p=a.extend({},b);c.id+"_wrapper"==c.parentNode.id?document.getElementById(c.id+"_wrapper"):(f=document.createElement("div"),f.id=c.id+"_wrapper",f.style.position="relative",f.style.width=a.styleDimension(p.width),f.style.height=a.styleDimension(p.height),c.parentNode.replaceChild(f,c),f.appendChild(c));f=l.setupPlugins(h,p,m);0<f.length?a.extend(p,q(f.plugins)):delete p.plugins;"undefined"!=typeof p["dock.position"]&&"false"==p["dock.position"].toString().toLowerCase()&&(p.dock=p["dock.position"],
delete p["dock.position"]);f=p.wmode?p.wmode:p.height&&40>=p.height?"transparent":"opaque";for(var s="height width modes events primary base fallback volume".split(" "),u=0;u<s.length;u++)delete p[s[u]];var s=a.getCookies(),t;for(t in s)"undefined"==typeof p[t]&&(p[t]=s[t]);t=window.location.pathname.split("/");t.splice(t.length-1,1);t=t.join("/");p.base=t+"/";e[c.id]=p;a.isIE()?(p='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%" id\x3d"'+c.id+
'" name\x3d"'+c.id+'" tabindex\x3d0""\x3e',p+='\x3cparam name\x3d"movie" value\x3d"'+d.src+'"\x3e',p+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',p+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',p+='\x3cparam name\x3d"wmode" value\x3d"'+f+'"\x3e',p+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',p+="\x3c/object\x3e",c.outerHTML=p,p=document.getElementById(c.id)):(p=document.createElement("object"),p.setAttribute("type",
"application/x-shockwave-flash"),p.setAttribute("data",d.src),p.setAttribute("width","100%"),p.setAttribute("height","100%"),p.setAttribute("bgcolor","#000000"),p.setAttribute("id",c.id),p.setAttribute("name",c.id),p.setAttribute("tabindex",0),n(p,"allowfullscreen","true"),n(p,"allowscriptaccess","always"),n(p,"seamlesstabbing","true"),n(p,"wmode",f),c.parentNode.replaceChild(p,c));h.container=p;h.setPlayer(p,"flash")};this.supportsConfig=function(){if(g)if(b){if("string"==a.typeOf(b.playlist))return!0;
try{var d=b.playlist[0].sources;if("undefined"==typeof d)return!0;for(var c=0;c<d.length;c++){var f;if(f=d[c].file){var e=d[c].file,h=d[c].type;if(a.isYouTube(e)||a.isRtmp(e,h)||"hls"==h)f=!0;else{var j=a.extensionmap[h?h:a.extension(e)];f=!j?!1:!!j.flash}}if(f)return!0}}catch(l){}}else return!0;return!1}}).getVars=function(a){return e[a]}}(jwplayer),function(f){var a=f.utils,j=a.extensionmap,e=f.events;f.embed.html5=function(c,d,b,l,h){function n(a,b,d){return function(){try{var f=document.querySelector("#"+
c.id+" .jwmain");d&&f.appendChild(b);"function"==typeof a.resize&&(a.resize(f.clientWidth,f.clientHeight),setTimeout(function(){a.resize(f.clientWidth,f.clientHeight)},400));b.left=f.style.left;b.top=f.style.top}catch(e){}}}function m(a){q.sendEvent(a.type,{message:"HTML5 player not found"})}var q=this,k=new e.eventdispatcher;a.extend(q,k);q.embed=function(){if(f.html5){l.setupPlugins(h,b,n);c.innerHTML="";var g=f.utils.extend({},b);delete g.volume;g=new f.html5.player(g);h.container=document.getElementById(h.id);
h.setPlayer(g,"html5")}else g=new a.scriptloader(d.src),g.addEventListener(e.ERROR,m),g.addEventListener(e.COMPLETE,q.embed),g.load()};q.supportsConfig=function(){if(f.vid.canPlayType)try{if("string"==a.typeOf(b.playlist))return!0;for(var d=b.playlist[0].sources,c=0;c<d.length;c++){var e;var h=d[c].file,l=d[c].type;if(null!==navigator.userAgent.match(/BlackBerry/i)||a.isAndroid()&&("m3u"==a.extension(h)||"m3u8"==a.extension(h))||a.isRtmp(h,l))e=!1;else{var k=j[l?l:a.extension(h)],m;if(!k||k.flash&&
!k.html5)m=!1;else{var n=k.html5,q=f.vid;if(n)try{m=q.canPlayType(n)?!0:!1}catch(z){m=!1}else m=!0}e=m}if(e)return!0}}catch(A){}return!1}}}(jwplayer),function(f){var a=f.embed,j=f.utils,e=j.extend(function(c){var d=j.repo(),b=c.config,e=b.plugins,h=b.analytics,n=d+"jwpsrv.js",m=d+"sharing.js",q=d+"related.js",k=d+"gapro.js",g=(new f.utils.key(f.key)).edition(),e=e?e:{};"ads"==g&&b.advertising&&(b.advertising.client.match(".js$|.swf$")?e[b.advertising.client]=b.advertising:e[d+b.advertising.client+
("flash"==b.primary?".swf":".js")]=b.advertising);delete b.advertising;b.key=f.key;b.analytics&&(b.analytics.client&&b.analytics.client.match(".js$|.swf$"))&&(n=b.analytics.client);delete b.analytics;if("free"==g||!h||!1!==h.enabled)e[n]=h?h:{};delete e.sharing;delete e.related;if("premium"==g||"ads"==g)b.sharing&&(b.sharing.client&&b.sharing.client.match(".js$|.swf$")&&(m=b.sharing.client),e[m]=b.sharing),b.related&&(b.related.client&&b.related.client.match(".js$|.swf$")&&(q=b.related.client),e[q]=
b.related),b.ga&&(b.ga.client&&b.ga.client.match(".js$|.swf$")&&(k=b.ga.client),e[k]=b.ga),b.skin&&(b.skin=b.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,j.repo()+"skins/$1.xml").toLowerCase());b.plugins=e;return new a(c)},a);f.embed=e}(jwplayer),function(f){var a=[],j=f.utils,e=f.events,c=e.state,d=document,b=f.api=function(a){function h(a,b){return function(d){return b(a,d)}}function n(a,b){p[a]||(p[a]=[],q(e.JWPLAYER_PLAYER_STATE,function(b){var d=b.newstate;
b=b.oldstate;if(d==a){var c=p[d];if(c)for(var e=0;e<c.length;e++)"function"==typeof c[e]&&c[e].call(this,{oldstate:b,newstate:d})}}));p[a].push(b);return g}function m(a,b){try{a.jwAddEventListener(b,'function(dat) { jwplayer("'+g.id+'").dispatchEvent("'+b+'", dat); }')}catch(d){j.log("Could not add internal listener")}}function q(a,b){r[a]||(r[a]=[],s&&u&&m(s,a));r[a].push(b);return g}function k(){if(u){for(var a=arguments[0],b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);if("undefined"!=typeof s&&
"function"==typeof s[a])switch(b.length){case 4:return s[a](b[0],b[1],b[2],b[3]);case 3:return s[a](b[0],b[1],b[2]);case 2:return s[a](b[0],b[1]);case 1:return s[a](b[0]);default:return s[a]()}return null}t.push(arguments)}var g=this,r={},p={},s=void 0,u=!1,t=[],w=void 0,x={},y={};g.container=a;g.id=a.id;g.getBuffer=function(){return k("jwGetBuffer")};g.getContainer=function(){return g.container};g.addButton=function(a,b,d,c){try{y[c]=d,k("jwDockAddButton",a,b,"jwplayer('"+g.id+"').callback('"+c+
"')",c)}catch(e){j.log("Could not add dock button"+e.message)}};g.removeButton=function(a){k("jwDockRemoveButton",a)};g.callback=function(a){if(y[a])y[a]()};g.getDuration=function(){return k("jwGetDuration")};g.getFullscreen=function(){return k("jwGetFullscreen")};g.getStretching=function(){return k("jwGetStretching")};g.getHeight=function(){return k("jwGetHeight")};g.getLockState=function(){return k("jwGetLockState")};g.getMeta=function(){return g.getItemMeta()};g.getMute=function(){return k("jwGetMute")};
g.getPlaylist=function(){var a=k("jwGetPlaylist");"flash"==g.renderingMode&&j.deepReplaceKeyName(a,["__dot__","__spc__","__dsh__"],["."," ","-"]);for(var b=0;b<a.length;b++)j.exists(a[b].index)||(a[b].index=b);return a};g.getPlaylistItem=function(a){j.exists(a)||(a=g.getCurrentItem());return g.getPlaylist()[a]};g.getPosition=function(){return k("jwGetPosition")};g.getRenderingMode=function(){return g.renderingMode};g.getState=function(){return k("jwGetState")};g.getVolume=function(){return k("jwGetVolume")};
g.getWidth=function(){return k("jwGetWidth")};g.setFullscreen=function(a){j.exists(a)?k("jwSetFullscreen",a):k("jwSetFullscreen",!k("jwGetFullscreen"));return g};g.setStretching=function(a){k("jwSetStretching",a);return g};g.setMute=function(a){j.exists(a)?k("jwSetMute",a):k("jwSetMute",!k("jwGetMute"));return g};g.lock=function(){return g};g.unlock=function(){return g};g.load=function(a){k("jwLoad",a);return g};g.playlistItem=function(a){k("jwPlaylistItem",parseInt(a));return g};g.playlistPrev=function(){k("jwPlaylistPrev");
return g};g.playlistNext=function(){k("jwPlaylistNext");return g};g.resize=function(a,b){if("flash"!=g.renderingMode)k("jwResize",a,b);else{var c=d.getElementById(g.id+"_wrapper");c&&(c.style.width=j.styleDimension(a),c.style.height=j.styleDimension(b))}return g};g.play=function(a){"undefined"==typeof a?(a=g.getState(),a==c.PLAYING||a==c.BUFFERING?k("jwPause"):k("jwPlay")):k("jwPlay",a);return g};g.pause=function(a){"undefined"==typeof a?(a=g.getState(),a==c.PLAYING||a==c.BUFFERING?k("jwPause"):k("jwPlay")):
k("jwPause",a);return g};g.stop=function(){k("jwStop");return g};g.seek=function(a){k("jwSeek",a);return g};g.setVolume=function(a){k("jwSetVolume",a);return g};g.loadInstream=function(a,d){return w=new b.instream(this,s,a,d)};g.getQualityLevels=function(){return k("jwGetQualityLevels")};g.getCurrentQuality=function(){return k("jwGetCurrentQuality")};g.setCurrentQuality=function(a){k("jwSetCurrentQuality",a)};g.getCaptionsList=function(){return k("jwGetCaptionsList")};g.getCurrentCaptions=function(){return k("jwGetCurrentCaptions")};
g.setCurrentCaptions=function(a){k("jwSetCurrentCaptions",a)};g.getControls=function(){return k("jwGetControls")};g.getSafeRegion=function(){return k("jwGetSafeRegion")};g.setControls=function(a){k("jwSetControls",a)};g.destroyPlayer=function(){k("jwPlayerDestroy")};var z={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,
onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:e.JWPLAYER_PLAYLIST_COMPLETE,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onControls:e.JWPLAYER_CONTROLS,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED,
onCaptionsList:e.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:e.JWPLAYER_CAPTIONS_CHANGED};j.foreach(z,function(a){g[a]=h(z[a],q)});var A={onBuffer:c.BUFFERING,onPause:c.PAUSED,onPlay:c.PLAYING,onIdle:c.IDLE};j.foreach(A,function(a){g[a]=h(A[a],n)});g.remove=function(){if(!u)throw"Cannot call remove() before player is ready";t=[];b.destroyPlayer(this.id)};g.setup=function(a){if(f.embed){var c=d.getElementById(g.id);c&&(a.fallbackDiv=c);c=g;t=[];b.destroyPlayer(c.id);c=f(g.id);c.config=a;return new f.embed(c)}return g};
g.registerPlugin=function(a,b,d,c){f.plugins.registerPlugin(a,b,d,c)};g.setPlayer=function(a,b){s=a;g.renderingMode=b};g.detachMedia=function(){if("html5"==g.renderingMode)return k("jwDetachMedia")};g.attachMedia=function(){if("html5"==g.renderingMode)return k("jwAttachMedia")};g.dispatchEvent=function(a,b){if(r[a])for(var d=j.translateEventResponse(a,b),c=0;c<r[a].length;c++)"function"==typeof r[a][c]&&r[a][c].call(this,d)};g.dispatchInstreamEvent=function(a){w&&w.dispatchEvent(a,arguments)};g.playerReady=
function(a){u=!0;s||g.setPlayer(d.getElementById(a.id));g.container=d.getElementById(g.id);j.foreach(r,function(a){m(s,a)});q(e.JWPLAYER_PLAYLIST_ITEM,function(){x={}});q(e.JWPLAYER_MEDIA_META,function(a){j.extend(x,a.metadata)});for(g.dispatchEvent(e.API_READY);0<t.length;)k.apply(this,t.shift())};g.getItemMeta=function(){return x};g.getCurrentItem=function(){return k("jwGetPlaylistIndex")};return g};b.selectPlayer=function(c){var e;j.exists(c)||(c=0);c.nodeType?e=c:"string"==typeof c&&(e=d.getElementById(c));
return e?(c=b.playerById(e.id))?c:b.addPlayer(new b(e)):"number"==typeof c?a[c]:null};b.playerById=function(b){for(var c=0;c<a.length;c++)if(a[c].id==b)return a[c];return null};b.addPlayer=function(b){for(var c=0;c<a.length;c++)if(a[c]==b)return b;a.push(b);return b};b.destroyPlayer=function(b){for(var c=-1,e,f=0;f<a.length;f++)a[f].id==b&&(c=f,e=a[f]);0<=c&&(b=e.id,f=d.getElementById(b+("flash"==e.renderingMode?"_wrapper":"")),j.clearCss&&j.clearCss("#"+b),f&&("html5"==e.renderingMode&&e.destroyPlayer(),
e=d.createElement("div"),e.id=b,f.parentNode.replaceChild(e,f)),a.splice(c,1));return null};f.playerReady=function(a){var b=f.api.playerById(a.id);b?b.playerReady(a):f.api.selectPlayer(a.id).playerReady(a)}}(jwplayer),function(f){var a=f.events,j=f.utils,e=a.state;f.api.instream=function(c,d,b,f){function h(a,b){k[a]||(k[a]=[],q.jwInstreamAddEventListener(a,'function(dat) { jwplayer("'+m.id+'").dispatchInstreamEvent("'+a+'", dat); }'));k[a].push(b);return this}function n(b,c){g[b]||(g[b]=[],h(a.JWPLAYER_PLAYER_STATE,
function(a){var c=a.newstate,d=a.oldstate;if(c==b){var e=g[c];if(e)for(var f=0;f<e.length;f++)"function"==typeof e[f]&&e[f].call(this,{oldstate:d,newstate:c,type:a.type})}}));g[b].push(c);return this}var m=c,q=d,k={},g={};this.dispatchEvent=function(a,b){if(k[a])for(var c=j.translateEventResponse(a,b[1]),d=0;d<k[a].length;d++)"function"==typeof k[a][d]&&k[a][d].call(this,c)};this.onError=function(b){return h(a.JWPLAYER_ERROR,b)};this.onFullscreen=function(b){return h(a.JWPLAYER_FULLSCREEN,b)};this.onMeta=
function(b){return h(a.JWPLAYER_MEDIA_META,b)};this.onMute=function(b){return h(a.JWPLAYER_MEDIA_MUTE,b)};this.onComplete=function(b){return h(a.JWPLAYER_MEDIA_COMPLETE,b)};this.onSeek=function(b){return h(a.JWPLAYER_MEDIA_SEEK,b)};this.onTime=function(b){return h(a.JWPLAYER_MEDIA_TIME,b)};this.onVolume=function(b){return h(a.JWPLAYER_MEDIA_VOLUME,b)};this.onBuffer=function(a){return n(e.BUFFERING,a)};this.onPause=function(a){return n(e.PAUSED,a)};this.onPlay=function(a){return n(e.PLAYING,a)};this.onIdle=
function(a){return n(e.IDLE,a)};this.onInstreamClick=function(b){return h(a.JWPLAYER_INSTREAM_CLICK,b)};this.onInstreamDestroyed=function(b){return h(a.JWPLAYER_INSTREAM_DESTROYED,b)};this.play=function(a){q.jwInstreamPlay(a)};this.pause=function(a){q.jwInstreamPause(a)};this.seek=function(a){q.jwInstreamSeek(a)};this.destroy=function(){q.jwInstreamDestroy()};this.getState=function(){return q.jwInstreamGetState()};this.getDuration=function(){return q.jwInstreamGetDuration()};this.getPosition=function(){return q.jwInstreamGetPosition()};
m.callInternal("jwLoadInstream",b,f)}}(jwplayer),function(f){var a=f.api,j=a.selectPlayer;a.selectPlayer=function(a){return(a=j(a))?a:{registerPlugin:function(a,d,b){f.plugins.registerPlugin(a,d,b)}}}}(jwplayer));
jwplayer.key="AUCPxuikvGKUo7iy5PHSNvulij4OHNPvp+v47g==";
﻿/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// LargeCookie provides a way to store larger than normal cookies (~4k+)
// Long values are split and stored in multiple cookies
LargeCookie = (function($, defaultCookieService) {

  function pagedCookie(name, limit, cookieService) {
    this.prefix = name;
    this.indexCookie = name + '-n';
    this.limit = limit || 1300;
    this.cookieService = cookieService || defaultCookieService;
  }

  pagedCookie.prototype.set = function(value) {
    if (!value) {
      this.del();
      return;
    }

    // dont bother creating extra cookies for small values
    if (value.length <= this.limit) {
      this.del();
      this.cookieService.set(this.prefix + 0, value);
      return;
    }

    var currentIndex = 0;
    var prevLastIndex = parseInt(this.cookieService.get(this.indexCookie), 10) || 0;

    do {
      var part = value.substring(0, Math.min(this.limit, value.length));
      this.cookieService.set(this.prefix + currentIndex, part);
      value = value.substring(this.limit);
      currentIndex++;
    }
    while (value.length > 0);

    this.cookieService.set(this.indexCookie, currentIndex - 1);

    while (currentIndex - 1 < prevLastIndex) {
      this.del(currentIndex++);
    }
  };

  pagedCookie.prototype.get = function() {
    var result = "";
    var currentIndex = 0;
    var total = parseInt(this.cookieService.get(this.indexCookie)) || 0;
    do {
      result += this.cookieService.get(this.prefix + currentIndex++) || "";
    }
    while (currentIndex - 1 < total);
    return result;
  };

  pagedCookie.prototype.del = function(index) {
    if (typeof (index) !== 'undefined' && !isNaN(parseInt(index, 10))) {
      this.cookieService.del(this.prefix + index);
    } else {
      var prevLastIndex = parseInt(this.cookieService.get(this.indexCookie), 10) || 0;

      this.cookieService.del(this.indexCookie);

      for ( var i = prevLastIndex; i >= 0; i--) {
        this.cookieService.del(this.prefix + i);
      }
    }
  };

  return pagedCookie;
})(jQuery, jQuery.cookies);

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {
  $(".navigation").mouseenter(function() {
    $(".navigation > li").hover(function() {
      $(".navigation li").removeClass("active");
//      if (!$(this).hasClass('active-default')) {
//        $(".active-default ul").css('display', 'none');
//      } else {
//        $(".active-default ul").css('display', 'block');
//      }
      $(this).addClass("active");
    });
  }).mouseleave(function() {
    $(".navigation li").removeClass("active");
//    $(".active-default ul").css('display', 'block');
  });
  //Accessibility: keyboard for language selection
  $('.language-wrapper >a').focus(function() {
    $('.selector').fadeIn();
  });
  $('.language-wrapper .selector a').blur(function() {
    var languageSelector = $('.selector');
    languageSelector.fadeOut('fast', function() {
      languageSelector.removeAttr('style');
    });
  });
  $('.login-link-referrer').on( "click", function() {
    var referrerUrl = window.location.pathname + window.location.search + window.location.hash;
    $(this).attr("href", jsContextPath+"/login?referrer="+encodeURIComponent(referrerUrl));
  });
  $(".no-script").hide();
  $(".script").show();
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//tooltip function

$(function() {
  Tooltip = function(element) {
    this.container = element;
    this.init(element);
  };

  $.extend(Tooltip.prototype, {

    hint : null,
    tooltip : null,
    arrow : null,
    opened : false,
    lock : false,
    hoverTime : 0,
    hoverTimeout : 300,
    init : function(element) {
      var currObjInstance = this;
      this.hint = element.attr("data-content");
      this.tooltip = element.siblings("div.tooltip");
      element.removeAttr("title");
      this.tooltip.html(this.hint).text();

      if (this.tooltip.hasClass('hasArrow')) {
        this.arrow = $(document.createElement('div'));
        this.arrow.addClass('arrow');
        this.arrow.appendTo(this.tooltip);
      }

      this.tooltip.hide();
      this.tooltip.removeClass("off");
      element.hover(function() {
        var d = new Date();
        currObjInstance.hoverTime = d.getTime();
        currObjInstance.open();
      });
      this.tooltip.mouseenter(function() {
        currObjInstance.lock = true;
      });
      this.tooltip.mouseleave(function() {
        currObjInstance.close();
      });
      element.mouseleave(function() {
        setTimeout(function() {
          var currentD = new Date();
          if (!currObjInstance.lock
              && currObjInstance.hoverTime + currObjInstance.hoverTimeout - 100 < currentD
                  .getTime()) {
            currObjInstance.close();
          }
        }, currObjInstance.hoverTimeout);
      });
    },
    open : function() {
      var currObjInstance = this;
      if (!this.opened) {
        this.opened = true;
        this.tooltip.fadeIn('fast');

        var positionInfoIcon = currObjInstance.container.offset();

        //set position of arrow under the info icon
        if (this.tooltip.hasClass('hasArrow')) {
          this.arrow.offset({ left: positionInfoIcon.left});
        }
      }
    },
    close : function() {
      this.tooltip.fadeOut('fast');
      this.opened = false;
      this.lock = false;
    }
  });

  $("span.contextual-help").each(function() {
    new Tooltip($(this));
  });
});

/*
    http://www.JSON.org/json2.js
    2010-11-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Create a global namespace for common
de = {};
de.ddb = de.ddb || {};
de.ddb.common = de.ddb.common || {};
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Create a global namespace for ddb
de = de || {};
de.ddb = de.ddb || {};
de.ddb.next = de.ddb.next || {};

var jsContextPath = "";
var jsLanguage = "";
var jsPageName = "";
var jsLatitude = "";
var jsLongitude = "";
var jsLoggedIn = "";

$(document).ready(function() {
  var jsVariablesDiv = $('#globalJsVariables');
  var jsPageMeta = $('meta[name=page]').attr("content");
  if (jsVariablesDiv) {
    if (jsVariablesDiv.attr('data-js-context-path')) {
      jsContextPath = jsVariablesDiv.attr('data-js-context-path');
    }
    if (jsVariablesDiv.attr('data-js-language')) {
      jsLanguage = jsVariablesDiv.attr('data-js-language');
    }
    if (jsVariablesDiv.attr('data-js-longitude')) {
      jsLongitude = jsVariablesDiv.attr('data-js-longitude');
    }
    if (jsVariablesDiv.attr('data-js-latitude')) {
      jsLatitude = jsVariablesDiv.attr('data-js-latitude');
    }
    if (jsVariablesDiv.attr('data-js-loggedin')) {
      jsLoggedIn = jsVariablesDiv.attr('data-js-loggedin');
    }
  }
  if (jsPageMeta) {
    jsPageName = jsPageMeta;
  }
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Trim of the given text to the passed chars limit
$.cutoffStringAtSpace = function(text, limit) {
  if (text != null && text.toString().length > limit) {
    return $.trim(text.toString()).substring(0, limit).split(" ").slice(0, -1).join(" ") + "...";
  }
  return text;
};

// Initialization of the JWPlayer
$.initializeJwPlayer = function(divId, videoFile, previewImage, width, height, onReadyCallback, onErrorCallback) {
  jwplayer(divId).setup({
    'flashplayer' : jsContextPath + '/js/vendor/jwplayer-6.2.3115/jwplayer.flash.swf',
    'html5player' : jsContextPath + '/js/vendor/jwplayer-6.2.3115/jwplayer.html5.js',
    'modes' : [ {
      type : "html5",
      src : jsContextPath + "/js/vendor/jwplayer-6.2.3115/jwplayer.html5.js"
    }, {
      type : "flash",
      src : jsContextPath + "/js/vendor/jwplayer-6.2.3115/jwplayer.flash.swf"
    }, {
      type : "download"
    } ],
    'fallback' : true,
    'autostart' : false,
    'file' : videoFile,
    'skin' : jsContextPath + '/js/vendor/jwplayer-6.2.3115/skins/five.xml',
    'image' : previewImage,
    'controls' : true,
    'controlbar' : 'bottom',
    'stretching' : 'uniform',
    'width' : width,
    'height' : height,
    'primary' : 'html5',
    'startparam' : 'starttime',
    'events' : {
      onError : onErrorCallback,
      onReady : onReadyCallback
    }
  });
};

// Hiding of the errors in the binaries viewer
$.hideErrors = function() {
  $("div.binary-viewer-error").addClass("off");
  $("div.binary-viewer-flash-upgrade").addClass("off");
};

/**
 * This function will give you back the current url (if no urlParameters is setted) plus the new parameters added
 * IMPORTANT: remember to pass your arrayParamVal already URL decoded
 */
$.addParamToCurrentUrl = function(arrayParamVal, urlString) {
  return $.addParamToCurrentUrlWithHistorySupport(arrayParamVal, urlString);
};

/**
 * This function will give you back the current url (if no urlParameters is setted) plus the new parameters added
 * The methods checks for the global attribute historySupport.
 *
 * IMPORTANT: remember to pass your arrayParamVal already URL decoded
 */
$.addParamToCurrentUrlWithHistorySupport = function(arrayParamVal, urlString) {
  var currentUrl = (historySupport) ? location.search.substring(1) : globalUrl;

  return $.addParamToUrl(currentUrl,arrayParamVal, null, urlString, true);
};

/**
 * Adds the given params to the given url
 */
$.addParamToUrl = function(currentUrl, arrayParamVal, path, urlString, updateLanguage) {
  var queryParameters = {}, queryString = (urlString == null) ? currentUrl : urlString, re = /([^&=]+)=([^&]*)/g, m;
  while (m = re.exec(queryString)) {
    var decodedKey = decodeURIComponent(m[1].replace(/\+/g, '%20'));
    if (queryParameters[decodedKey] == null) {
      queryParameters[decodedKey] = [];
    }
    queryParameters[decodeURIComponent(m[1].replace(/\+/g, '%20'))].push(decodeURIComponent(m[2]
        .replace(/\+/g, '%20')));
  }
  $.each(arrayParamVal, function(key, value) {
    queryParameters[value[0]] = value[1];
  });
  var tmp = jQuery.param(queryParameters, true);

  //Update the language switch
  if (updateLanguage) {
    $.updateLanguageSwitch(tmp);
  }

  if (path == null) {
    return window.location.pathname + '?' + tmp;
  } else {
    return path + '?' + tmp;
  }
};

/**
 * Removes an array of params from the given url
 */
$.removeParamFromUrl = function(arrayParamVal, path, urlString) {
  var currentUrl = (historySupport) ? location.search.substring(1) : globalUrl;
  var queryParameters = {}, queryString = (urlString == null) ? currentUrl : urlString, re = /([^&=]+)=([^&]*)/g, m;
  while (m = re.exec(queryString)) {
    var keyParam = decodeURIComponent(m[1].replace(/\+/g, '%20'));
    if (queryParameters[keyParam] == null) {
      queryParameters[keyParam] = [];
    }
    queryParameters[keyParam].push(decodeURIComponent(m[2].replace(/\+/g, '%20')));
  }
  $.each(arrayParamVal, function(key, value) {
    if (queryParameters[value[0]]
        && (paramIndex = $.inArray(value[1], queryParameters[value[0]])) > -1) {
      queryParameters[value[0]] = jQuery.grep(queryParameters[value[0]], function(cValue) {
        return cValue !== value[1];
      });
    }
  });
  var tmp = jQuery.param(queryParameters, true);
  $.updateLanguageSwitch(tmp);
  if (path == null) {
    return window.location.pathname + '?' + tmp;
  } else {
    return path + '?' + tmp;
  }
};

/**
 * Update the language switch link for the given params
 */
$.updateLanguageSwitch = function(params) {
  params = params.replace(/\&?lang=[^\&]*/g, '');
  if (params.length > 0) {
    params += '&';
  }
  if (params.indexOf('&') === 0) {
    params = params.substring(1);
  }
  var pattern = /(.*?\?).*?(lang=\w*)/;
  $('.language-wrapper .selector').find('a[href]').each(function() {
    var matches = pattern.exec($(this).attr('href'));
    $(this).attr('href', matches[1] + params + matches[2]);
  });
};

/**
 * Toggle the element specified in the attribute data-toggle
 */
$.toggleElement = function() {
  $( "a[data-toggle-elem]" ).click(function(event) {
    event.preventDefault();
    var elementToToggle = $(this).attr("data-toggle-elem");
    $(elementToToggle).slideToggle(400);
  });
};

$(document)
    .ready(
        function() {

          // Open all external links in a new window
          $(
              'a[href^="http"]:not([href^="http://localhost"],[href^="http://dev.escidoc.org"],[href*="deutsche-digitale-bibliothek.de"])')
              .attr('target', '_blank');

        });

$(window).on('load', function () {
  $('#cookie-notice').each(function () {
      var cookieBar = $(this),
          closeButton = cookieBar.find('.close');

      var cookie = de.ddb.common.search.readCookie("cb_cookie_notice");

      window.setTimeout(function(){
        if(cookie!=="1"){
          cookieBar.fadeIn('fast');
          document.cookie = 'cb_cookie_notice=1';
        }
      },300);


      closeButton.on('click', function (evt) {
          evt.preventDefault();

          cookieBar.removeClass('visible');
          cookieBar.fadeOut('fast');

          return false;
      });

  });

  if (typeof historySupport !== 'undefined' && de.ddb.common.search.getFacetValuesFromUrl()) {
    $('.keep-filters').removeClass('off');
  }
});

var h = ($('.modal').height())/2;
var w = ($('.modal').width())/2;
$('.modal').css({'top':'50%','margin-top':'-'+h+'px'});
$('.modal').css({'left':'50%','margin-left':'-'+w+'px'});

$.ajaxSetup({ cache: false });

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

de.ddb.next.PaginationWidget = function() {
  this.init();
};

$.extend(de.ddb.next.PaginationWidget.prototype, {

  resultsOverallIndex : null,
  pagesOverallIndex : null,
  totalPages : null,
  numberOfResults : null,
  pageNavigators : null,
  pageInput : null,
  paginatorOptionsButton : null,

  nextPage : null,
  prevPage : null,
  firstPage : null,
  lastPage : null,

  nextPageMobile : null,
  prevPageMobile : null,

  extraControls : null,
  goToPage : null,

  init : function() {
    this.resultsOverallIndex = $('.results-overall-index');
    this.pagesOverallIndex = $('.page-nav .pages-overall-index');
    this.pageNavigators = $('.page-nav-result');
    this.totalPages = $('.total-pages');
    this.nextPage = $('.page-nav .next-page');
    this.prevPage = $('.page-nav .prev-page');
    this.firstPage = $('.page-nav .first-page');
    this.lastPage = $('.page-nav .last-page');
    this.pageInput = $('.page-input');
    this.paginatorOptionsButton = $('.paginator-options-button');
    this.numberOfResults = $('.total-results');
    this.numberOfResultsLabel = $('.total-results-label');

    this.nextPageMobile = $('.page-nav-mob .next-page');
    this.prevPageMobile = $('.page-nav-mob .prev-page');

    this.extraControls = $('.extra-controls');
    this.goToPage = $('.go-to-page');

    this.pageInfoNav = $('.page-info-nav');
  },

  resetNavigationElements : function(JSONresponse) {

    this.totalPages.html(JSONresponse.totalPagesFormatted);

    this.numberOfResults.html(JSONresponse.numberOfResults);

    if (JSONresponse.numberOfResults === "0"){
      this.pageInfoNav.addClass("hidden");
    }else{
      this.pageInfoNav.removeClass("hidden");
    }

    if (JSONresponse.numberOfResults === "1") {
      this.numberOfResultsLabel.html(messages.ddbnext.Multi_Page_Result);
    } else {
      this.numberOfResultsLabel.html(messages.ddbnext.Multi_Page_Results);
    }

    // Next/Last-page button
    if (JSONresponse.paginationURL.nextPg) {
      this.nextPage.removeClass('off');
      this.lastPage.removeClass('off');

      this.nextPage.find('a').attr('href', JSONresponse.paginationURL.nextPg);
      this.lastPage.find('a').attr('href', JSONresponse.paginationURL.lastPg);

      // Mobile
      this.nextPageMobile.find('a').removeClass('off');
      this.nextPageMobile.find('.disabled-arrow').addClass('off');

      this.nextPageMobile.find('a').attr('href', JSONresponse.paginationURL.nextPg);
    } else {
      this.nextPage.addClass('off');
      this.lastPage.addClass('off');

      // Mobile
      this.nextPageMobile.find('a').addClass('off');
      this.nextPageMobile.find('.disabled-arrow').removeClass('off');
    }

    // Prev/First-page button
    if (JSONresponse.paginationURL.firstPg) {
      this.prevPage.removeClass('off');
      this.firstPage.removeClass('off');

      this.prevPage.find('a').attr('href', JSONresponse.paginationURL.prevPg);
      this.firstPage.find('a').attr('href', JSONresponse.paginationURL.firstPg);

      // Mobile
      this.prevPageMobile.find('a').removeClass('off');
      this.prevPageMobile.find('.disabled-arrow').addClass('off');

      this.prevPageMobile.find('a').attr('href', JSONresponse.paginationURL.prevPg);
    } else {
      this.prevPage.addClass('off');
      this.firstPage.addClass('off');

      // Mobile
      this.prevPageMobile.find('a').addClass('off');
      this.prevPageMobile.find('.disabled-arrow').removeClass('off');
    }

    // Setting pages
    if (JSONresponse.paginationURL.pages) {
      $.each(this.pagesOverallIndex, function() {

        var spanContainer = $(this).find('span');

        $(this).find('a').each(function() {
          $(this).remove();
        });
        $.each(JSONresponse.paginationURL.pages, function() {
          var tmpAnchor = $(document.createElement('a'));
          tmpAnchor.addClass('page-nav-result');
          tmpAnchor.html(this.pageNumber);
          if (this.active) {
            tmpAnchor.addClass('active');
          } else {
            tmpAnchor.attr('href', this.url);
          }
          spanContainer.append(tmpAnchor);
        });
      });
    }

    // Showing extra arrow
    if (JSONresponse.totalPages > 5) {
      this.extraControls.removeClass('off');
    } else {
      this.extraControls.addClass('off');
    }

  },

  setNavigatorsClickHandler : function(clickHandler) {
    this.pageNavigators.click(function() {
      clickHandler($(this));
      return false;
    });
  },

  setPageInputKeyupHandler : function(keyupHandler) {
    var currObjInstance = this;
    this.pageInput.keyup(function(e) {
      keyupHandler(e, this);
    });

    var enterButtonEvent = jQuery.Event("keyup");
    enterButtonEvent.keyCode = 13;
    this.goToPage.click(function() {
      currObjInstance.pageInput.trigger(enterButtonEvent);
    });
  },

  setPaginatorOptionsHandlers : function(applyButtonHandler) {
    var paginatorOptionsOverlay = this.paginatorOptionsButton.parent().find('.paginator-options-overlay');
    var paginatorOptionsCloseButton = paginatorOptionsOverlay.find('.close-overlay');
    var paginatorOptionsSortSelect = paginatorOptionsOverlay.find('.sort-results-switch select');
    var paginatorOptionsRowsSelect = paginatorOptionsOverlay.find('.page-filter select');
    var paginatorOptionsApplyButton = paginatorOptionsOverlay.find('.paginator-options-footer .button');

    this.paginatorOptionsButton.click(function() {
      paginatorOptionsOverlay.fadeIn('fast');
    });

    paginatorOptionsCloseButton.click(function(e) {
      e.preventDefault();
      paginatorOptionsOverlay.fadeOut('fast');
      return false;
    });

    paginatorOptionsApplyButton.click(function() {
      applyButtonHandler(paginatorOptionsSortSelect, paginatorOptionsRowsSelect, paginatorOptionsCloseButton);
    });
  }

});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* We tell JS Hint, that $ and _ are not global.
 * See Also: http://www.jshint.com/docs/#config
 */
/* global $:false, _: false */

/* Even if jsContextPath is global, we load it first before any other JavaScripts.
 * We therefore tell JS Hint, jsContextPath is not global
 */
/* global jsContextPath: false */

(function() {
  'use strict';

  // TODO: remove `use strict` via automate script in the production mode.
  // SEE:
  // http://scriptogr.am/micmath/post/should-you-use-strict-in-your-production-javascript

  // TODO: use other pattern for namespace in JS
  // SEE:
  // http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
  var ddb = {

    Config : {
      ddbBackendUrl : '/apis/institutions'
    },

    // TODO: does not work => cache for all institution, including children
    // and their descendants
    $all : $('li.institution-listitem'),

    institutionsByFirstChar : null,

    //global variable storing the filter state onlyInstitutionsWithData
    onlyInstitutionsWithData : false,

    // find index[All| A | B |...| Z | 0-9] with no members after filtered
    // by sectors.
    findNoMember : function(visible) {
      return _.reduce(ddb.institutionsByFirstChar, function(memo, array, key) {
        if (_.intersection(array, visible).length === 0) {
          memo.push(key);
        }
        return memo;
      }, []);

    },

    filterDescendants : function(institution, memory, selectedSector, parentList) {
      var onlyInstitutionsWithData = ddb.onlyInstitutionsWithData;

      if (institution.children && institution.children.length > 0) {
        // when an institution has a least one child.
        _.reduce(institution.children, function(otherMemory, child) {

          if ((!onlyInstitutionsWithData || child.hasItems) &&
             (selectedSector.length === 0 || _.contains(selectedSector, child.sector))) {
            otherMemory.push(child);
            // the institution is the parent.
            parentList.push(institution);
          }
          ddb.filterDescendants(child, otherMemory, selectedSector, parentList, onlyInstitutionsWithData);
          return otherMemory;
        }, memory);
      }
    },

    findElements : function(list) {
      var idList = _.pluck(list, 'id');

      return $('li.institution-listitem').filter(function() {
        return _.contains(idList, $(this).data('institution-id'));
      });
    },

    skipUmlaut : function(firstChar) {
      if (firstChar === "Ä") {
        firstChar = firstChar.replace(/Ä/g, 'A');
      } else if (firstChar === "Ö") {
        firstChar = firstChar.replace(/Ö/g, 'O');
      } else if (firstChar === "Ü") {
        firstChar = firstChar.replace(/Ü/g, 'U');
      }
      return firstChar;
    },

    getInstitutionsByFirstChar : function(onFilterSelect, onIndexClick, onPageLoad) {
      if (ddb.institutionsByFirstChar === null) {
        $.getJSON(jsContextPath + ddb.Config.ddbBackendUrl, function(response) {
          ddb.institutionsByFirstChar = response.data;

          $('.filter').show();
          // call the callback, once data is loaded.
          onPageLoad();
          onIndexClick();
          onFilterSelect();
          window.onhashchange = ddb.onHashChange;
        }).error(function() {
          /*
           * when we fail to fetch the JSON via AJAX, then we do not activate the JS-feature.
           */
        });
      }

    },

    onPageLoad : function() {
      var hash = window.location.hash.substring(1);
      ddb.styleIndex(hash);
      if (hash === '' || hash.toLowerCase() === 'all' || hash === 'list') {
        /*
         * We check if the user returns to the page using the web browser's back button and if a filter was performed
         * before.
         */
        var isChecked;
        if ($('.multiselect').is(':visible')) {
          isChecked = $('.multiselect option:selected').filter(':selected').length ||
                      $('.multiselect option[value="onlyInstitutionsWithData"]').prop("selected");
        }
        else {
          isChecked = $('.sector-facet input:checked').filter(':checked').length ||
                      $('.institution-with-data input:checkbox').prop('checked');
        }

        // apply the filter, if the filters is not empty.
        if (isChecked) {
          ddb.applyFilter();
        }
      } else {
        ddb.applyFilter();
      }
    },

    /**
     * Filter selection only for the desktop view!
     *
     * Filter selction for mobile view is handled in the multiselect callback onChange
     */
    onFilterSelect : function() {
      $('.sector-facet input:checkbox').click(function() {
        var hash = window.location.hash.substring(1);
        ddb.styleIndex(hash);
        ddb.applyFilter();
      });

      $('.institution-with-data input:checkbox').click(function() {
        var hash = window.location.hash.substring(1);
        ddb.styleIndex(hash);
        ddb.applyFilter();
      });
    },

    /* Function Callback for the URI's hash change event. */
    onHashChange : function() {
      var hash = window.location.hash.substring(1);
      ddb.styleIndex(hash);
      ddb.applyFilter();
    },

    styleIndex : function(hash) {
      if (hash === '' || hash.toLowerCase() === 'all' || hash === 'list') {
        var $allHref = $('#first-letter-index a[href="#All"]');
        var $allLi = $allHref.parent();
        $allLi.addClass('active');
        $allHref.addClass('selected');
      } else {
        var $aHref = $('#first-letter-index a[href="' + '#' + hash + '"]');
        var $li = $aHref.parent();

        if ($li.hasClass('disabled')) {
          // $('#no-match-message').css('display', 'block');
          $('#no-match-message').addClass('visible');
          return false;
        }
        // style the selected index.
        $li.addClass('active');
        $li.addClass('selected');
        // TODO: refactor this, a lot of duplicate code.
        // reset other indexes to the initial style.
        var $firstCharLinks = $('#first-letter-index a');
        var $otherLinks = $firstCharLinks.not($aHref);
        $otherLinks.parent().removeClass('active');
        $otherLinks.removeClass('selected');
      }

      return true;
    },

    applyFilter : function() {
      var institutionList = ddb.getInstitutionAsList();
      var sectors = ddb.getSelectedSectors();
      var firstLetter = ddb.getFirstLetter();

      ddb.retrieveFilterOnlyInstitutionsWithData();

      ddb.filter(institutionList, sectors, firstLetter);
      // count all currently highlighted institutions
      var count = $('.institution-listitem.highlight').length;
      if (count === 0) {
        // count all currently visible institutions
        count = $('.institution-listitem').length - $('.institution-listitem.off').length
            - $('.institution-listitem.off').find('.institution-listitem:not(.off)').length;
      }
      $('#selected-count').text(count);
    },

    getInstitutionAsList : function() {
      if (ddb.institutionList) {
        return ddb.institutionList;
      } else {
        ddb.institutionList = _.chain(ddb.institutionsByFirstChar).values().flatten().value();
      }
      return ddb.institutionList;
    },

    getFirstLetter : function() {
      var result = '';
      var hashValue = $('#first-letter-index').find('li.active').find('a').attr('href');

      if (hashValue) {
        var hash = hashValue.substring(1).toLowerCase();
        if (hash !== '' && hash !== 'all' && hash !== 'list') {
          result = hash;
        }
      }

      result = result.toUpperCase();

      return result;
    },

    /*
     * get an array of selected sectors, for example: [sec_1, sec_3]
     */
    getSelectedSectors : function() {

      /*
       * Now we have two sector widgets. Based on the screen resolution, we show either the checkboxes or multiselect.
       *
       * Depends on which widget is visible, we get the selected values.
       */
      var allSelectedSectors = $('.sector-facet input:checked');
      if ($('.multiselect').is(':visible')) {
        allSelectedSectors = $('.multiselect option:selected');
      }

      return _.reduce(allSelectedSectors, function(sectors, el) {
        //Do not add "onlyInstitutionsWithData" which comes from the multiselect!
        if ($(el).val() !== "onlyInstitutionsWithData") {
          sectors.push($(el).val());
        }

        return sectors;
      }, []);
    },

    /**
     *
     */
    retrieveFilterOnlyInstitutionsWithData : function() {
      var institutionWithData = false;

      //Mobile view
      if ($('.multiselect').is(':visible')) {
        institutionWithData = $('.multiselect option[value="onlyInstitutionsWithData"]').prop("selected");
      }
      //Desktop view
      else {
        institutionWithData = $('.institution-with-data input:checkbox').prop('checked');
      }

      ddb.onlyInstitutionsWithData = institutionWithData;
    },

    /**
     * Applies the selected filters (sector, data, letter) to the institution list.
     */
    filter : function(institutionList, sectors, firstLetter) {
      var parentList = [];

      // reset the view to empty.
      var $listItems = $('li.institution-listitem');
      $listItems.addClass('off');
      $listItems.removeClass('highlight');

      // reset the index
      var $currentIndex = $('#first-letter-index');
      $currentIndex.html(ddb.$index.html());

      // Check for institutions that provide data filter
      var onlyInstitutionsWithData = ddb.onlyInstitutionsWithData;
      var institutionsFilteredByData = ddb.filterOnlyInstitutionsWithData(institutionList, onlyInstitutionsWithData);

      /*
       * Case 1: Sector yes, Char no
       *
       * When at least one sector selected _and_ no first letter filter; e.g. sector = ['Media'], index = All
       */
      if (sectors.length > 0 && firstLetter === '') {
        var filteredBySector = ddb.filterBySectors(institutionsFilteredByData, sectors, parentList);
        var visible = _.union(_.uniq(parentList), filteredBySector);

        var hasNoMember = ddb.findNoMember(visible);
        ddb.showResult(_.union(parentList, filteredBySector), filteredBySector);
        ddb.updateIndex(hasNoMember);
      }
      /*
       * Case 2: Sector yes, Char yes
       *
       * when at least one sector selected _and_ one of the first letter is selected, e.g., sector = ['Library',
       * 'Media'], index = 'B'
       */
      // In this case, we don't need a parent list. TODO: refactor
      /*
       * 1. we collect all root institutions start with the selected firstLetter, for example 'W', including their
       * children. The children do *not* have to start with the selected first letter.
       *
       * 2. we start to apply the sector filter, for example [Library] to all institutions(roots and their children)
       * collected from the first step.
       */
      else if (sectors.length > 0 && firstLetter !== '') {
        var filteredByFirstLetter = ddb.institutionsByFirstChar[firstLetter];
        var filteredByData = ddb.filterOnlyInstitutionsWithData(filteredByFirstLetter, onlyInstitutionsWithData);
        filteredBySector = _.reduce(filteredByData, function(memory, institution) {
          var firstChar = institution.firstChar;
          if (firstChar === "Ä" || firstChar === "Ü" || firstChar === "Ö") {
            firstChar = ddb.skipUmlaut(firstChar);
          }

          if (firstChar === firstLetter) {
            if (_.contains(sectors, institution.sector)) {
              memory.push(institution);
            }
            ddb.filterDescendants(institution, memory, sectors, parentList);
          }

          return memory;
        }, []);

        parentList = _.filter(parentList, function(parent) {
          return parent.firstChar === firstLetter;
        });

        visible = _.union(parentList, filteredBySector);
        ddb.showResult(visible, filteredBySector);

        // find all root institutions filtered by sectors. get the first letter, e.g., only As and Ls
        // show only A and L in Index.
        var filtered = ddb.filterBySectors(institutionsFilteredByData, sectors, parentList);

        hasNoMember = ddb.findNoMember(_.union(_.uniq(parentList), filtered));
        ddb.updateIndex(hasNoMember);
      }

      /*
       * Case 3: Case 3: Sector no, Char yes
       *
       * When no sector selected _and_ one of the first letter is selected. e.g. sector = [], index = 'C'
       */
      else if (sectors.length === 0 && firstLetter !== '') {
        var institutionsByLetter = ddb.institutionsByFirstChar[firstLetter];
        var institutionsByData = ddb.filterOnlyInstitutionsWithData(institutionsByLetter, onlyInstitutionsWithData);
        var institutionsBySector = ddb.filterBySectors(institutionsByData, sectors, parentList);

        visible = _.union(_.uniq(parentList), institutionsBySector);
        ddb.showResult(visible, null);

        hasNoMember = ddb.findNoMember(_.union(_.uniq(parentList), institutionsFilteredByData));
        ddb.updateIndex(hasNoMember);
      }
      /*
       * Case 4: Sector no, Char no" when no sector is selected _and_ no first letter filter. e.g. sector = [], index =
       * All
       */
      else {
        ddb.styleIndex('All');
        if (onlyInstitutionsWithData) {
          filteredBySector = ddb.filterBySectors(institutionsFilteredByData, sectors, parentList);
          visible = _.union(_.uniq(parentList), filteredBySector);
          ddb.showResult(visible, null);

          hasNoMember = ddb.findNoMember(visible);
          ddb.updateIndex(hasNoMember);
        } else {
          $('#institution-list').empty().html(ddb.$institutionList.html());
        }
      }
    },

    filterBySectors : function(institutionList, sectors, parentList) {
      var reduced = _.reduce(institutionList, function(memory, institution) {

        if (sectors.length === 0 || _.contains(sectors, institution.sector)) {
          memory.push(institution);
        }
        ddb.filterDescendants(institution, memory, sectors, parentList);

        return memory;
      }, []);

      return reduced;
    },

    filterOnlyInstitutionsWithData : function(institutionList, onlyInstitutionsWithData) {
      var reduced = _.reduce(institutionList, function(memory, institution) {
        // Check if the institution is member of the selected filter
        if (!onlyInstitutionsWithData || institution.hasItems) {
          memory.push(institution);
        }

        return memory;
      }, []);

      return reduced;
    },

    showAll : function() {
      $('#no-match-message').addClass('off');
      $('li.institution-listitem').removeClass('off');
    },

    updateIndex : function(hasNoMember) {
      if (hasNoMember) {
        // enable all index. It means visually that the index all not
        // grey.
        $('#first-letter-index li').removeClass('disabled');

        // update index view, i.e., A..Z
        _.each(hasNoMember, function(letter) {
          var $aHref = $('#first-letter-index a[href="' + '#' + letter + '"]');
          $aHref.parent().addClass('disabled');
          $aHref.click(function(e) {
            e.preventDefault();
          });
        });
      }

    },

    // visible institutions are filtered institutions and their descendants.
    showResult : function(visibleInstitution, filteredBySector) {
      var $msg = $('#no-match-message');

      // view manipulation
      if (visibleInstitution.length) {
        // hide the 'no result' message
        $msg.addClass('off');

        ddb.findElements(filteredBySector).addClass('highlight');
        var $visible = ddb.findElements(visibleInstitution);
        $visible.removeClass('off');
      } else {
        $msg.removeClass('off');
        $msg.addClass('visible');
      }

    },

    onIndexClick : function() {
      // we catch the click event on index, does *not* when the user goes
      // directly
      // to a page with #{first-character}, for example: //institutions#A
      var $firstCharLinks = $('#first-letter-index a');
      $firstCharLinks.click(function(event) {
        event.preventDefault();
        var $this = $(this);
        var $li = $this.parent();

        if ($li.hasClass('disabled')) {
          return false;
        }
        // style the selected index.
        $li.addClass('active');
        $this.addClass('selected');

        // reset other indexes to the initial style.
        var $otherLinks = $firstCharLinks.not(this);
        $otherLinks.parent().removeClass('active');
        // $otherLinks.removeAttr('style');
        $otherLinks.removeClass('selected');

        if (history.pushState) {
          history.pushState({}, '', $this.attr('href'));
          // TODO for android 2.3.3 we have to pass the clicked first letter.
          ddb.applyFilter();
        } else {
          // TODO: test on IE8,9
          window.location.hash = this.hash;
        }

        return false;
      });
    }
  };

  $(function() {
    var institutionList = $('#institution-list');

    $('.multiselect').multiselect({
      buttonClass : 'btn btn-small',
      buttonWidth : 'auto',
      maxHeight : false,
      field_NoneSelected : messages.ddbnext.InstitutionPage_FilterBySector,
      onChange : function() {
        ddb.applyFilter();
      },
      buttonText : function(options) {
        if (options.length === 0) {
          var textNode = $(document.createElement('span')).html(this.field_NoneSelected);
          textNode.append($(document.createElement('b')).addClass('caret'));
          return textNode;
        } else if (options.length > 4) {
          return options.length + ' selected <b class="caret"></b>';
        } else {
          var selected = '';
          options.each(function() {
            selected += $(this).text() + ', ';
          });
          return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
        }
      }
    });

    // Only execute the script when the user is in the institution list page.
    if (institutionList.length) {

      // When the User Agent enables JS, shows the `filter by sector` Check Boxes.
      ddb.$index = $('#first-letter-index').clone(true, true);
      ddb.$institutionList = institutionList.clone();
      ddb.getInstitutionsByFirstChar(ddb.onFilterSelect, ddb.onIndexClick, ddb.onPageLoad);
    }

  });

}());

﻿/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(function() {
  $(function() {
    $('#form-search input[type="search"]').focus();
    $('div.carousel').show();
    if ($(".article .caption").length > 0) {
      $(".article .caption").dotdotdot({});
    }
    var carouselItems = $("#articles");
    if (carouselItems.length) {
      carouselItems.carouFredSel({
        scroll : 1,
        infinite : false,
        auto : false,
        prev : {
          button : "#articles-prev",
          key : "left"
        },
        next : {
          button : "#articles-next",
          key : "right"
        }
      });
    }
  });
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var itemHierarchy = {
  /*
   * Add a leaf node to the current node.
   *
   * @param {Element} currentNode current node (li element)
   *
   * @param {JSON} value data object
   *
   * @param {boolean} isCurrent true if the value points to the currently
   * displayed object
   *
   * @param {boolean} isLast true if the current node is the last node in the
   * list
   *
   * @param {boolean} moreHidden true if there are more children which are not
   * displayed
   */
  addLeafNode : function(currentNode, value, isCurrent, isLast, moreHidden) {
    currentNode.empty();
    currentNode.addClass("leaf");
    if (isLast) {
      if (!moreHidden) {
        currentNode.addClass("last");
      }
    } else {
      currentNode.removeClass("last");
    }

    var branchType = $(document.createElement("span"));
    branchType.addClass("branch-type fl");
    var i = $("<i>");
    var leafIndicator = $(document.createElement("div"));
    leafIndicator.addClass("leaf-indicator");

    var a = $(document.createElement("a"));
    a.addClass("label");
    a.attr("href", value.id);
    a.attr("title", itemHierarchy.truncateTitle(value.label, 350));

    if (isCurrent) {
      leafIndicator.addClass("current-node current-path");
      a.addClass("current-node current-path");
    }
    branchType.append(i);
    currentNode.append(branchType);
    a.append(itemHierarchy.truncateTitle(value.label, 350));
    currentNode.append(leafIndicator);
    currentNode.append(a);
  },

  /*
   * Add the currently displayed object and a dotted line to the the current
   * node.
   *
   * @param {Element} currentNode current node (ul element)
   *
   * @param {boolean} currentNodeFound true if the currently displayed object
   * was aleady added to the current node. Otherwise it will be added here.
   *
   * @param {JSON} value data object
   */
  addMoreHiddenNode : function(currentNode, currentNodeFound, value) {
    if (!currentNodeFound) {
      var leafNode = $("<li>");

      itemHierarchy.addLeafNode(leafNode, value, true, true, true);
      leafNode.addClass("more-available");
      currentNode.append(leafNode);
    }

    var moreAvailable = $("<li>");

    moreAvailable.addClass("more-available");
    currentNode.append(moreAvailable);
  },

  /*
   * Add a parent (branch) node to the current node.
   *
   * @param {String} url URL to the item service
   *
   * @param {Element} currentNode current node (li element)
   *
   * @param {String} parentId id of the parent node in the hierarchy
   *
   * @param {JSON} value data object
   *
   * @param {boolean} isCurrent true if the value points to the currently
   * displayed object
   *
   * @param {boolean} isCurrentPath true if the value is a parent of the
   * currently displayed object
   *
   * @param {boolean} isLast true if the current node is the last node in the
   * list
   *
   * @param {boolean} countSiblings true if the number of siblings must be
   * counted
   *
   * @param {boolean} drawBorder draw a border around the plus sign if true
   *
   * @param {boolean} isExpanded show a minus sign if true
   */
  addParentNode : function(url, currentNode, parentId, value, isCurrent, isCurrentPath, isLast,
      countSiblings, drawBorder, isExpanded) {
    currentNode.empty();
    if (isLast) {
      currentNode.addClass("last");
    } else {
      currentNode.removeClass("last");
    }

    // draw a border around the plus sign
    if (isCurrent && drawBorder) {
      currentNode.addClass("last-exited");
    }

    var branchType = $(document.createElement("span"));
    branchType.addClass("branch-type fl");

    currentNode.append(branchType);

    var isRoot = parentId == null;
    var i = $("<i>");

    if (isRoot) {
      i.addClass("root");
    } else {
      i.addClass("collapsed");
      if (value.type != null) {
        currentNode.attr("data-type", value.type);
      }
    }

    // show plus or minus sign
    itemHierarchy.setNodeIcon(i, isExpanded);

    branchType.append(i);

    // add sibling count
    if (countSiblings) {
      itemHierarchy.addSiblingCount(url, currentNode.parent(), parentId);
    }

    i.click(function() {
      var isRoot = $(this).hasClass("root");
      var isExpanded = $(this).hasClass("expanded");

      if (isRoot && isExpanded) {
        return;
      }

      isRoot = currentNode.hasClass("root");
      var li = $(this).parent().parent();
      var hasName = li.parent().hasClass("has-name");
      var parentLi;

      if (hasName) {
        parentLi = li.parent().parent().parent().parent();
      } else {
        parentLi = li.parent().parent();
      }

      itemHierarchy.setNodeIcon($(this), !isExpanded);
      if (isExpanded) {
        // collapse node
        var dataBind = li.attr("data-bind");
        var id = null;

        if (dataBind != null) {
          var parents = JSON.parse(dataBind);

          $.each(parents, function(index, value) {
            if (value.id === parentId) {
              if (index > 0) {
                id = parents[index - 1].id;
              }
              return;
            }
          });
        }

        // show minus sign on parent node
        itemHierarchy.setNodeIcon(parentLi.children("span").children("i"), true);

        itemHierarchy.showChildren(url, parentLi, parentId, id, true);
      } else {
        // expand node
        if (!isRoot) {
          // remove siblings
          currentNode.parent().parent().siblings("li").remove();
          currentNode.addClass("last");
        }

        // show plus sign on parent node
        itemHierarchy.setNodeIcon(parentLi.children("span").children("i"), false);

        itemHierarchy.showChildren(url, li, value.id, parentId, true);
      }
    });

    if (value.aggregationEntity) {
      var label = $(document.createElement("span"));

      label.addClass("label" + (isCurrent ? " current-node" : "")
          + (isCurrentPath ? " current-path" : ""));
      label.append(itemHierarchy.truncateTitle(value.label, 350));
      currentNode.append(label);
    } else {
      var leafIndicator = $(document.createElement("div"));
      leafIndicator.addClass("leaf-indicator" + (isCurrentPath ? " current-path" : ""));

      var a = $(document.createElement("a"));
      a.addClass("label" + (isCurrentPath ? " current-path" : ""));
      a.attr("href", value.id);

      if (isCurrent) {
        leafIndicator.addClass("current-node");
        a.addClass("current-node");
      }
      a.append(value.label);
      currentNode.append(leafIndicator);
      currentNode.append(a);
    }
  },

  /*
   * Add the number of siblings to the current node's parent.
   *
   * @param {String} url URL to the item service
   *
   * @param {Element} currentNode current node (ul element)
   *
   * @param {String} parentId id of the parent node in the hierarchy
   */
  addSiblingCount : function(url, currentNode, parentId) {
    var siblingCount = $(document.createElement("span"));
    siblingCount.addClass("sibling-count");

    if (parentId != null) {
      itemHierarchy.getChildren(url, parentId, function(children) {
        var li = currentNode.children("li");

        if (children.length > 1) {
          if (children.length > 500) {
            siblingCount.append(messages.ddbnext.Hierarchy_SiblingCountRestricted_Format(500));
          } else {
            siblingCount.append("+" + (children.length - 1));
          }
          li.addClass("more-hidden");
        } else {
          li.addClass("last");
          itemHierarchy.setNodeIcon(currentNode.parent().children("span").children("i"), true);
        }
      });
    }
    currentNode.children(".sibling-count").remove();
    currentNode.append(siblingCount);
  },

  /*
   * Add the hierarchy type name to the current node.
   *
   * @param {Element} currentNode current node (ul element)
   *
   * @param {String} type hierarchy type name
   *
   * @return {Element} replacement for the "ul" child
   */
  addTypeName : function(currentNode, type) {
    var groupName = $("<span>");

    groupName.addClass("group-name");
    groupName.append(messages.ddbnext["HierarchyType_" + type]);

    var li = $("<li>");

    li.append(groupName);
    currentNode.append(li);

    var hasName = $("<ul>");

    hasName.addClass("has-name");
    li.append(hasName);
    return hasName;
  },

  /*
   * Add a wait image to the current node.
   *
   * @param {Element} currentNode current node (li element)
   */
  addWaitSymbol : function(currentNode) {
    var waitSymbol = document.createElement("img");

    waitSymbol.src = "../images/icons/loaderSmall.gif";
    currentNode.prepend(waitSymbol);
  },

  /*
   * Create the item hierarchy (main function).
   *
   * @param {String} url URL to the item service
   */
  createHierarchy : function(url) {
    itemHierarchy.getParents(url, url.file, function(parents) {
      // check if there is a hierarchy
      if (parents.length > 1 || (parents.length > 0 && !parents[0].leaf)) {
        $(".item-hierarchy").removeClass("off");

        var list = $("<div>");
        var currentNode = list;

        // show parent nodes
        $.each(parents.reverse(), function(index, value) {
          if (index < parents.length - 1) {
            var ul = $("<ul>");
            var hasName = value.type != null;
            var isRoot = index === 0;
            var parentId = null;

            if (!isRoot) {
              parentId = parents[index - 1].id;

              // show hierarchy type
              if (hasName) {
                currentNode.append(ul);
                ul = itemHierarchy.addTypeName(ul, value.type);
              }
            }

            var li = $("<li>");

            li.addClass(isRoot ? "root" : "node");
            li.attr("data-bind", JSON.stringify(parents));

            ul.append(li);
            if (isRoot || !hasName) {
              currentNode.append(ul);
            }
            itemHierarchy.addParentNode(url, li, parentId, value, false, true,
                index === parents.length - 2, true, false, index === parents.length - 2
                    && parents[parents.length - 1].leaf);
            currentNode = li;
          }
        });

        // show this node
        var value = parents[parents.length - 1];

        if (!value.leaf) {
          var ul = $("<ul>");
          var isRoot = parents.length === 1;
          var hasName = !isRoot && value.type != null;
          var parentId = !isRoot ? parents[parents.length - 2].id : null;

          // show hierarchy type
          if (hasName) {
            currentNode.append(ul);
            ul = itemHierarchy.addTypeName(ul, value.type);
          }

          var li = $("<li>");

          li.addClass(parentId == null ? "root" : "node");
          li.attr("data-bind", JSON.stringify(parents));

          ul.append(li);
          if (!hasName) {
            currentNode.append(ul);
          }
          itemHierarchy.addParentNode(url, li, parentId, value, true, true, false, true, false,
              true);
          currentNode = li;
        }

        // show children / siblings
        if (value.leaf) {
          parentId = parents[parents.length - 2].id;
        } else {
          parentId = parents[parents.length - 1].id;
        }

        var currentNodeFound = false;

        itemHierarchy.getChildren(url, parentId, function(children) {
          var ul = $("<ul>");
          var length = children.length;
          var type = null;

          $.each(children, function(index, value) {
            var hasName = value.type != null;
            var isCurrent = value.id === parents[parents.length - 1].id;
            var leafNode = $("<li>");
            var showName = false;

            if (isCurrent) {
              currentNodeFound = true;
            }

            // show hierarchy type
            if (value.type !== type) {
              if (hasName) {
                itemHierarchy.addTypeName(ul, value.type).append(leafNode);
                showName = true;
              }
              type = value.type;
            }

            if (!showName) {
              ul.append(leafNode);
            }
            if (value.leaf) {
              itemHierarchy.addLeafNode(leafNode, value, isCurrent, index === length - 1,
                  length === 501);
            } else {
              leafNode.addClass("node");
              leafNode.attr("data-bind", JSON.stringify(parents));
              itemHierarchy.addParentNode(url, leafNode, parentId, value, false, false,
                  index === length - 1, false, false, false);
            }
          });
          currentNode.append(ul);

          // add current node if it is not within the first 500 children
          if (length === 501) {
            itemHierarchy.addMoreHiddenNode(ul, currentNodeFound, parents[parents.length - 1]);
          }
        });
      }
      $(".item-hierarchy-result").html(list);
    });
  },

  // REST request to get all children of a given item
  getChildren : function(url, id, complete) {
    $.ajax({
      type : "GET",
      dataType : "json",
      async : true,
      url : url.dir + "children/" + id,
      complete : function(data) {
        complete(jQuery.parseJSON(data.responseText));
      }
    });
  },

  // REST request to get all parents of a given item
  getParents : function(url, id, complete) {
    $.ajax({
      type : "GET",
      dataType : "json",
      async : true,
      url : url.dir + "parents/" + id,
      complete : function(data) {
        complete(jQuery.parseJSON(data.responseText));
      }
    });
  },

  parseUrl : function(url) {
    var result = [];
    var lastSlash = url.lastIndexOf("/");

    result.dir = url.substring(0, lastSlash + 1);
    result.file = url.substring(lastSlash + 1);
    return result;
  },

  /*
   * Set the node icon to a plus or a minus symbol
   *
   * @param {Element} currentNode current node of type "i"
   *
   * @param {boolean} setExpanded draw a minus symbol if true, otherwise draw a
   * plus symbol
   */
  setNodeIcon : function(currentNode, setExpanded) {
    if (setExpanded) {
      currentNode.removeClass("collapsed");
      currentNode.addClass("expanded");
    } else {
      currentNode.removeClass("expanded");
      currentNode.addClass("collapsed");
    }
  },

  /*
   * Show all children of the current node.
   *
   * @param {String} url URL to the item service
   *
   * @param {Element} currentNode current node (li element)
   *
   * @param {String} currentId id of the current node in the hierarchy
   *
   * @param {String} parentId id of the parent node in the hierarchy
   *
   * @param {boolean} drawBorder draw a border around the plus sign if true
   */
  showChildren : function(url, currentNode, currentId, parentId, drawBorder) {
    // remove other nodes on the current level and below
    currentNode.siblings().remove();
    currentNode.children("span.group-name").remove();
    currentNode.children("ul").remove();

    // show plus sign on parent node if this is a leaf node
    var isLeaf = currentNode.hasClass("leaf");

    if (isLeaf) {
      itemHierarchy.setNodeIcon(currentNode.parent().parent().children("span.branch-type")
          .children("i"), false);
    } else {
      currentNode.removeClass("last-exited");
    }

    // show hierarchy type if not already visible
    var dataType = currentNode.attr("data-type");
    var hasName = currentNode.parent().hasClass("has-name");

    if (!hasName && dataType != null) {
      var parent = currentNode.parent();

      currentNode.detach();
      itemHierarchy.addTypeName(parent, dataType).append(currentNode);
    }

    // get the id of the child which is on the current path
    var dataBind = currentNode.attr("data-bind");
    var parents = null;
    var id = "";

    if (dataBind != null) {
      parents = JSON.parse(dataBind);
      $.each(parents, function(index, value) {
        if (value.id === currentId && index < parents.length - 1) {
          id = parents[index + 1].id;
          return;
        }
      });
    }

    var ul = $("<ul>");

    currentNode.append(ul);
    currentNode.removeClass("leaf");

    // add sibling count
    itemHierarchy.addSiblingCount(url, currentNode.parent(), parentId);

    // add children
    itemHierarchy.getChildren(url, currentId, function(children) {
      var currentNodeFound = false;
      var length = children.length;
      var type = null;

      $.each(children, function(index, value) {
        var isCurrent = value.id === id;
        var isLast = index === length - 1;
        var li = $(document.createElement("li"));

        if (isCurrent) {
          currentNodeFound = true;
        }

        currentNode = ul;
        li.addClass("node");
        li.attr("data-bind", dataBind);

        // show hierarchy type
        if (value.type !== type) {
          if (value.type != null) {
            currentNode = itemHierarchy.addTypeName(currentNode, value.type);
          }
          type = value.type;
        }

        currentNode.append(li);
        if (value.leaf) {
          itemHierarchy.addLeafNode(li, value, isCurrent, isLast, length === 501);

          // add current node if it is not within the first 500 children
          if (isLast && length === 501) {
            itemHierarchy.addMoreHiddenNode(ul, currentNodeFound, parents[parents.length - 1]);
          }
        } else {
          itemHierarchy.addParentNode(url, li, currentId, value, isCurrent, isCurrent, isLast,
              false, drawBorder, false);
        }
      });
    });
  },

  /*
   * Truncate a label to a given number of characters.
   *
   * @param {String} title the title to be truncated
   *
   * @param {int} length maximum length until the title will be truncated
   */
  truncateTitle : function(title, length) {
    var result = title;

    if (title != null && title.length > length) {
      var lastSpace = title.substring(0, length).lastIndexOf(" ");

      result = title.substring(0, lastSpace) + "...";
    }
    return result;
  }
};

$(document).ready(function() {
  if ($(".item-hierarchy").length > 0) {
    itemHierarchy.addWaitSymbol($(".item-hierarchy-result"));
    itemHierarchy.createHierarchy(itemHierarchy.parseUrl(location.href));
  }
});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(document).ready(
    function() {
      var popupAnchor = $('.page-link-popup-anchor');

      var content = $(document.createElement('input'));
      content.attr('value', window.location.protocol + "//" + window.location.host
          + popupAnchor.attr('href'));
      content.attr('type', 'text');
      var title = $(document.createElement('a'));
      title.addClass('page-link');
      var titleString = $(document.createElement('span'));
      var popupSpan = popupAnchor.children("span");
      if (popupSpan != null && popupSpan.length > 0) {
        titleString.html(popupSpan[0].innerHTML);
      }
      titleString.appendTo(title);
      var popupManager = new PopupManager();
      popupManager.registerPopup(popupAnchor[0], title, content, 162, -31);
    });

// Popup Manager --
PopupManager = function() {
  this.init();
};

$.extend(PopupManager.prototype, {

  init : function() {
  },

  registerPopup : function(anchorTag, title, content, offsetX, offsetY) {

    var closeTitle = messages.ddbnext.Close;
    var popupDialogWrapper = $(document.createElement('div'));
    var popupDialogTitle = $(document.createElement('div'));
    var popupDialogFooter = $(document.createElement('div'));
    var popupDialogCloseImage = $(document.createElement('div'));
    var popupDialogCloseButton = $(document.createElement('a'));
    var popupDialogContent = $(document.createElement('div'));

    popupDialogCloseImage.attr('title', closeTitle);

    popupDialogWrapper.addClass('popup-dialog-wrapper');
    popupDialogFooter.addClass('popup-dialog-footer');
    popupDialogCloseImage.addClass('popup-dialog-close-image');
    popupDialogCloseButton.addClass('popup-dialog-button');
    popupDialogTitle.addClass('popup-dialog-title bb');
    popupDialogContent.addClass('popup-dialog-content');

    if (title) {
      popupDialogTitle.html(title);
    }
    if (content) {
      content.appendTo(popupDialogContent);
    }
    popupDialogCloseButton.attr('href', '#');

    popupDialogCloseImage.appendTo(popupDialogCloseButton);
    popupDialogTitle.appendTo(popupDialogWrapper);
    popupDialogContent.appendTo(popupDialogWrapper);
    popupDialogCloseButton.appendTo(popupDialogWrapper);
    popupDialogFooter.appendTo(popupDialogWrapper);

    popupDialogWrapper.css('margin-top', offsetY + 'px');

    popupDialogWrapper.insertAfter(anchorTag);
    popupDialogWrapper.hide();

    popupDialogCloseButton.click(function() {
      popupDialogWrapper.fadeOut('fast', function() {
      });
    });

    $(anchorTag).click(function(event) {
      if (event.which === 1) {
        event.preventDefault();
        popupDialogWrapper.fadeIn('fast', function() {
          popupDialogWrapper.find('input')[0].select();
        });
      }
    });

    $(document).mouseup(function(event) {
      if (popupDialogWrapper.has(event.target).length === 0) {
        popupDialogWrapper.fadeOut('fast', function() {
        });
      } else {
        popupDialogWrapper.find('input')[0].select();
      }
    });

  }
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document)
    .ready(
        function() {
          if (jsPageName === "staticcontent") {
            var videoDivs = $(".jwplayer-video");
            for ( var i = 0; i < videoDivs.length; i++) {
              var videoDiv = videoDivs[i];
              var id = $(videoDiv).attr("id");
              var width = $(videoDiv).data("jwplayer-width");
              var height = $(videoDiv).data("jwplayer-height");
              var file = $(videoDiv).data("jwplayer-file");
              var image = $(videoDiv).data("jwplayer-image");

              $.initializeJwPlayer(id, file, image, width, height, function() {
              }, function() {
                var playerDiv = $("#mediaspace_wrapper");
                if (playerDiv.length === 0) {
                  playerDiv = $("#mediaspace");
                }
                if (playerDiv.length > 0) {
                  var errorDiv = $(document.createElement('div'));
                  errorDiv.addClass('static-content-viewer-error');
                  errorDiv.css('width', width + 'px');
                  errorDiv.css('height', height + 'px');
                  var errorHeaderDiv = $(document.createElement('div'));
                  errorHeaderDiv.text(messages.ddbnext.We_could_not_play_the_file);
                  errorHeaderDiv.addClass('viewer-error-header');
                  var errorBodyDiv = $(document.createElement('div'));
                  errorBodyDiv.text(messages.ddbnext.You_can_download_or_use_alternative);
                  errorBodyDiv.addClass('viewer-error-body');
                  errorDiv.append(errorHeaderDiv);
                  errorDiv.append(errorBodyDiv);
                  playerDiv.append(errorDiv);
                }
              });
            }
          }

          if (jsPageName === "item") {
            if (navigator.appName.indexOf("Internet Explorer") === -1) {
              if ($(window).width() > 530) {
                mediaQuery = true;
              } else {
                mediaQuery = false;
              }
            }

            var addRedBorder = function(el) {
              $(el).addClass("active");
            };

            var createGallery = function(el) {
              var img = 3;
              var mediaQueryMatches = 1;
              if (navigator.appName.indexOf("Internet Explorer") === -1) {
                mediaQueryMatches = mediaQuery;
              }
              if (!mediaQueryMatches) {
                img = 2;
              }
              el.carouFredSel({
                circular : false,
                infinite : false,
                width : 435,
                align : false,
                height : 96,
                items : {
                  visible : img,
                  minimum : 1
                },
                scroll : {
                  items : img,
                  fx : "fade"
                },
                auto : false,
                prev : ".btn-prev",
                next : ".btn-next"
              });
              if (el.find('li').size() < 4) {
                $(".btn-next").addClass("disabled");
                $(".btn-next").attr("disabled", true);
              } else {
                $(".btn-next").attr("disabled", false);
              }
            };

            var currentTab = function(el) {
              $("p.tab").removeClass("current-tab");
              $(el).addClass("current-tab");
            };

            var jwPlayerSetup = function(content, poster) {
              if ($("#binary-viewer").length === 0) {
                return;
              }
              $(".viewer-icon").parent().addClass("off");
              $("#binary-viewer").append('<div id="jwplayer-container"></div>');
              var w = 440;
              var h = 320;
              var mediaQueryMatches = 1;
              if (navigator.appName.indexOf("Internet Explorer") === -1) {
                mediaQueryMatches = mediaQuery;
              }
              if (!mediaQueryMatches) {
                w = 278;
                h = 200;
              }
              $.initializeJwPlayer("jwplayer-container", content, poster, w, h, function() {
                if ($.browser.msie && this.getRenderingMode() === "html5") {
                  $("#binary-viewer").find("[id*='jwplayer']").each(function() {
                    $(this).attr("unselectable", "on");
                  });
                }
              }, function() {
                if ($("#jwplayer-container")) {
                  $("#jwplayer-container").remove();
                }
                if ($("#jwplayer-container_wrapper")) {
                  $("#jwplayer-container_wrapper").remove();
                }
                if ($("#jwplayer-container").attr("type") === "application/x-shockwave-flash") {
                  $("binary-viewer-flash-upgrade").removeClass("off");
                } else {
                  $("div.binary-viewer-error").removeClass("off");
                }
              });
            };

            var updatePreview = function(gallerydiv) {
              var a = gallerydiv.find("ul").children('li').eq(0).children('a');
              var previewUri = $(a).attr("href");
              var previewHref = $(a).attr("data-content");
              var type = $(a).attr("data-type");
              var title = $(a).attr("title");
              var title_text = title;
              var title_tooltip = title;
              var author = $(a).attr("data-author");
              var rights = $(a).attr("data-rights");

              // DDBNEXT-800 the title can use more than one line but should be
              // limited to 200 characters
              title_text = $.cutoffStringAtSpace(title, 200);

              // The tooltip of the title should be limited to 270 characters
              title_tooltip = $.cutoffStringAtSpace(title, 270);

              // The text and the tooltip of the author should be limited to 270
              // characters
              author = $.cutoffStringAtSpace(author, 270);

              // The text and the tooltip of the rights should be limited to 270
              // characters
              rights = $.cutoffStringAtSpace(rights, 270);

              $.hideErrors();
              if (type === "image") {
                if ($("#jwplayer-container")) {
                  $("#jwplayer-container").remove();
                }
                if ($("#jwplayer-container_wrapper")) {
                  $("#jwplayer-container_wrapper").remove();
                }
                $(".viewer-icon").parent().addClass("off");
                $(".previews").each(function() {
                  if ($(this).attr("href") === previewHref) {
                    $(this).parent().removeClass("off");
                    return false;
                  } else {
                    $(this).parent().appendTo($("#previews-list"));
                  }
                });
                $(".no-previews").each(function() {
                  if ($(this).find("img").attr("src") === previewUri) {
                    $(this).parent().removeClass("off");
                    return false;
                  } else {
                    $(this).parent().appendTo($("#previews-list"));
                  }
                });
                $(".pdf-previews").each(function() {
                  if ($(this).attr("href") === previewHref) {
                    $(this).parent().removeClass("off");
                    return false;
                  } else {
                    $(this).parent().appendTo($("#previews-list"));
                  }
                });
              } else if (type === "video" || type === "audio") {
                jwPlayerSetup(previewHref, previewUri);
              }
              $("div.binary-title span").text(title_text);
              $("div.binary-title").attr("title", title_tooltip);

              $("div.binary-author span").text(author);
              $("div.binary-author").attr("title", author);

              $("div.binary-rights span").text(rights);
              $("div.binary-rights").attr("title", rights);

              addRedBorder($(a).find(".thumbnail"));
            };

            $(function() {
              var totImages = $(".gallery-images li").size();
              var totVideos = $(".gallery-videos li").size();
              var totAudios = $(".gallery-audios li").size();
              var currentGallery = "images";
              if (totImages > 0) {
                currentGallery = "images";
                $("div.tabs").addClass("fix");
              } else if (totVideos > 0) {
                currentGallery = "videos";
                $("div.tabs").addClass("fix");
              } else if (totAudios > 0) {
                currentGallery = "audios";
                $("div.tabs").addClass("fix");
              }
              currentTab($("p."+currentGallery));
              $("div."+currentGallery).show();
              $(".tab").addClass('show-divider');
              updatePreview($("div."+currentGallery));
              createGallery($(".gallery-"+currentGallery));
            });

            var removeRedBorder = function() {
              $(".scroller ul>li>a").find(".thumbnail").removeClass("active");
            };
            $(".btn-prev").click(function() {
              if (!$(this).hasClass("disabled")) {
                $(this).addClass("disabled");
                setTimeout(function() {
                  $(this).removeClass("disabled");
                }, 500);
              }
            });

            var hideMap = function() {
              $(".binary-viewer-container").removeClass("off");
              $("#ddb-map").addClass("off");
              $("div.tabs").addClass("fix");
            };

            $(".btn-next").click(function() {
              if (!$(this).hasClass("disabled")) {
                $(this).addClass("disabled");
                setTimeout(function() {
                  $(this).removeClass("disabled");
                }, 500);
              }
            });

            $("p.images").click(
                function() {
                  var tab = $("div.images");
                  if (tab.find("li").size() === 0) {
                    return false;
                  }
                  currentTab(this);
                  hideMap();
                  $("div.scroller").hide();
                  tab.show();
                  createGallery($(".gallery-images"));
                  removeRedBorder();
                  updatePreview(tab);
                  $("#binary-viewer").addClass("img-binary");
                });

            $("p.videos").click(
                function() {
                  var tab = $("div.videos");
                  if (tab.find("li").size() === 0) {
                    return false;
                  }
                  currentTab(this);
                  hideMap();
                  $("div.scroller").hide();
                  tab.show();
                  createGallery($(".gallery-videos"));
                  removeRedBorder();
                  updatePreview(tab);
                  $("#binary-viewer").removeClass("img-binary");
                });

            $("p.audios").click(
                function() {
                  var tab = $("div.audios");
                  if (tab.find("li").size() === 0) {
                    return false;
                  }
                  currentTab(this);
                  hideMap();
                  $("div.scroller").hide();
                  tab.show();
                  createGallery($(".gallery-audios"));
                  removeRedBorder();
                  updatePreview(tab);
                  $("#binary-viewer").removeClass("img-binary");
                });

            $("p.map").click(
                function() {
                  currentTab(this);
                  $("div.scroller").hide();
                  $(".binary-viewer-container").addClass("off");
                  $("#ddb-map").removeClass("off");
                  if ($("#ddb-map").is(":empty")) {
                    var map = new DDBMap();
                    map.displayMultipolygone({"rootDivId": "ddb-map"});
                  }
                  $("div.tabs").removeClass("fix");
                });

            $(".previews").click(
                    function(e) {
                      e.preventDefault();
                      $.fancybox(
                              $(".previews"),
                              {
                                'padding' : 0,
                                'closeBtn' : false,
                                'overlayShow' : true,
                                'openEffect' : 'fade',
                                'closeEffect' : 'fade',
                                'prevEffect' : 'fade',
                                'nextEffect' : 'fade',
                                'tpl' : {
                                  wrap : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-toolbar">'
                                      + '<span title="' + messages.ddbnext.Close() + '" class="fancybox-toolbar-close" onclick="$.fancybox.close();"></span>'
                                      +'<span class="fancybox-toolbar-title">'
                                      + $("div.binary-title span").text()
                                      + '</span><br><div class="fancybox-pagination"><span></span></div></div>'
                                      + '<div class="fancybox-outer"><div class="fancybox-inner"><div class="fancybox-click-nav" onclick="$.fancybox.prev();"><div class="fancybox-nav"><span title="Previous" class="fancybox-prev" onclick="$.fancybox.prev();"></span></div></div><div class="fancybox-click-nav right" onclick="$.fancybox.next();"><div class="fancybox-nav"><span title="Next" class="fancybox-next" onclick="$.fancybox.next();"></span></div></div></div></div></div></div>',
                                  prev : '',
                                  next : ''
                                },
                                'afterLoad' : function() {
                                  var title = $.cutoffStringAtSpace($(this.element).attr('data-caption'), 150);
                                  var position = $(this.element).attr('data-pos') + ' '
                                      + ($("#previews-list li").size() - $(".no-previews").length);
                                  $("span.fancybox-toolbar-title").text(title);
                                  $("div.fancybox-pagination span").text(position);
                                }
                              });
                      if (($('#previews-list li').size() - $(".no-previews").length) === 1) {
                        $('.fancybox-pagination').addClass("off");
                        $('.fancybox-click-nav').attr('onclick', "");
                        $('.fancybox-nav').remove();
                      }
                      return false;
                    });

            $(".show-lightbox").click(function(e) {
              e.preventDefault();
              $(".previews").trigger( "click" );
              return false;
            });

            $("a.group").click(function(e) {
              e.preventDefault();
              var previewUri = $(this).attr("href");
              var previewHref = $(this).attr("data-content");
              var type = $(this).attr("data-type");
              var title = $(this).attr("title");
              var author = $(this).attr("data-author");
              var rights = $(this).attr("data-rights");

              $.hideErrors();
              removeRedBorder();
              addRedBorder($(this).find(".thumbnail"));

              if (type === "image") {
                if ($("#jwplayer-container")) {
                  $("#jwplayer-container").remove();
                }
                if ($("#jwplayer-container_wrapper")) {
                  $("#jwplayer-container_wrapper").remove();
                }
                $(".viewer-icon").parent().addClass("off");
                $(".previews").each(function() {
                  if ($(this).attr("href") === previewHref) {
                    $(this).parent().removeClass("off");
                    return false;
                  } else {
                    $(this).parent().appendTo($("#previews-list"));
                  }
                });
                $(".no-previews").each(function() {
                  if ($(this).find("img").attr("src") === previewUri) {
                    $(this).parent().removeClass("off");
                    return false;
                  } else {
                    $(this).parent().appendTo($("#previews-list"));
                  }
                });
              } else {
                jwPlayerSetup(previewHref, previewUri);
              }
              // title limited to 200 characters
              var title_text = $.cutoffStringAtSpace(title, 200);
              $("div.binary-title span").text(title_text);
              $("div.binary-title").attr("title", title);
              $("div.binary-author span").text(author);
              $("div.binary-author").attr("title", author);
              $("div.binary-rights span").text(rights);
              $("div.binary-rights").attr("title", rights);
              return false;
            });
          }
        });

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var page = {};
(function($) {
  "use strict";
  page.init = function(root) {
    var searchStateCookie = new LargeCookie('advancedsearch');

    var selectors = {
      groupWidget : ".search-group",
      group : ".search-field-group",
      removeGroupButton : "button.remove-group-button",
      addGroupButtonContainer : ".button-group",
      addGroupButton : "button.add-group-button, .add-group-link",
      row : ".search-field-row",

      removeButton : "button.remove-button",
      addButton : "button.add-button",

      resetButton : "button[type='reset']",
      facet : "select.facet-simple",
      facetDisabled : "select.facet-js",
      operator : "select.operator",
      globalOperator : ".global-operator",
      value : "input.value",
      matchValue : "select.match",
      facetValues : "select.facet-values",
      facetValueIdAttribute : "data-inputid",
      contextualHelp : "span.contextualHelp",
      contextualHelpTooltip : "div.tooltip"
    };

    //switches input text-field <-> select-box dependent on selected facet
    function showFacetValueInput($row) {

      if (!$row) {
        return;
      }

      var $targetEl = getTargetFacetValueElement($row);

      $row.find(selectors.value).hide();
      $row.find(selectors.facetValues).hide();

      $targetEl.show();

      // show/hide the Match selection field - this must be displayed only if the free text value field is displayed.
      var isEnum = $targetEl.filter(selectors.value).length === 0;

      if (isEnum) {
        $(selectors.matchValue, $row).hide();
      } else {
        $(selectors.matchValue, $row).show();
      }
    }

    // Each facet dropdown has an associated text field or a select list.
    // Each option element in the facet select list has a custom data-* attribute which points to the associated input.
    // This improves performance to avoid searching through all fields and selecting it directly
    function getTargetFacetValueElement($row) {
      var facetName = $row.find(selectors.facet).val();

      var $selectedOption = $("option[" + selectors.facetValueIdAttribute + "][value='" + facetName
          + "']", $row);

      // construct jQuery #id selector using option data-* attribute
      var $targetEl = $row.find("#" + $selectedOption.attr(selectors.facetValueIdAttribute));

      return $targetEl;
    }

    // helper to determine if a row has any values entered (Back button support)
    function hasFacetValueBeenEnteredForRow($row) {
      return getTargetFacetValueElement($row).val();
    }

    // helper to determine if a group has any values entered (Back button support)
    function haveFacetValuesBeenEnteredForGroup($group) {
      var ret = false;
      $(selectors.row, $group).each(function() {
        if (hasFacetValueBeenEnteredForRow($(this))) {
          ret = true;
          return false;
        }
      });

      return ret;
    }

    function removeGroup($groupWidget) {
      var $prev = $groupWidget;
      // when removing a group, only the last visible group needs to be reset, and the values copied up

      // shuffle group values up into previous group
      $groupWidget.nextAll(":visible").andSelf().filter(selectors.groupWidget)
          .each(
              function() {
                var $that = $(this), rowInputSelectors = [ selectors.facet, selectors.value,
                    selectors.matchValue, selectors.facetValues ], $prevRows = $(selectors.row,
                    $prev), $currentRows = $(selectors.row, $that);

                // copy the operator value in to the previous group
                var $prevOperator = $(selectors.operator, $prev);
                var $currentOperator = $(selectors.operator, $that);
                $prevOperator.val($currentOperator.val());
                resetFields($currentOperator);

                // for each row, copy the values into the previous groups row
                $prevRows.each(function(rowIndex) {
                  // find the previous group and get the related row by index
                  var $currentRow = $($currentRows.get(rowIndex));
                  var $prevRow = $(this);

                  // for each input, copy the value from the previous row
                  $(rowInputSelectors).each(function(inputIndex, selector) {
                    var $prevElements = $(selector, $prevRow);
                    var $currentElements = $(selector, $currentRow);

                    // use the index to copy current values into the corresponding previous element
                    $prevElements.each(function(index) {
                      var $current = $($currentElements[index]);
                      $(this).val($current.val());
                    });
                  });

                  // make sure the new row is visible if it's copy was also.
                  if ($currentRow.is(":visible")) {
                    $prevRow.show();
                  } else {
                    $prevRow.hide();
                  }
                  // redisplay the correct input depending on the selected facet
                  showFacetValueInput($prevRow);

                  // we are done with the current row, reset it
                  resetRow($currentRow);
                });

                updateRowButtons($prev);
                $prev = $that;
              });

      return $prev.slideUp(100, function() {
        resetGroup($prev);
        updateGroupButtons();
      });
    }

    function showNextGroup() {
      $(selectors.groupWidget, root).filter(":hidden:first").slideDown(100, function() {
        updateGroupButtons();
        updateRowButtons($(selectors.group, this));
      });
    }

    function showNextRow(group) {
      //show the next hidden row
      var $nextRow = $(selectors.row, group).filter(":hidden").first();

      return $nextRow.slideDown(100, function() {
        updateRowButtons(group);

        $(selectors.facet, $(this)).focus();

      });
    }

    function removeRow($row, group) {
      var $prev = $row;

      // shuffle row values up
      $row.nextAll(":visible").andSelf().each(
          function() {
            var $that = $(this), valueSelectors = [ selectors.facet, selectors.value,
                selectors.matchValue, selectors.facetValues ];

            //shift facet related fields up
            $(valueSelectors).each(function(index, selector) {

              var $prevElements = $(selector, $prev);
              var $currentElements = $(selector, $that);

              // use the index to copy current values into the corresponding previous row element
              $prevElements.each(function(idx) {
                var $current = $($currentElements[idx]);
                $(this).val($current.val());
                resetFields($current);
              });
            });

            // redisplay the correct input depending on the selected facet
            showFacetValueInput($prev);
            showFacetValueInput($that);

            $prev = $that;
          });

      return $prev.slideUp(100, function() {
        updateRowButtons(group);
      });
    }

    //handle buttons for add/removal of group
    function updateGroupButtons() {
      var groups = $(selectors.groupWidget, root);

      if (groups.filter(":visible").length > 1) {
        $("#initialAddGroupButtonFieldSet").addClass("off");
      } else {
        $("#initialAddGroupButtonFieldSet").removeClass("off");
      }

      if (groups.filter(":hidden").length === 0) {
        $(selectors.addGroupButton, root).hide();
        $(selectors.removeGroupButton, root).show();
        $(selectors.globalOperator, root).show();
      } else if (groups.filter(":visible").length === 1) {
        $(selectors.addGroupButton, root).show();
        $(selectors.removeGroupButton, root).hide();
        $(selectors.globalOperator, root).hide();
      } else {
        $(selectors.removeGroupButton, groups.filter(":visible")).show();
        $(selectors.addGroupButton, root).show();
        $(selectors.globalOperator, root).show();
      }

      //set the focus on the first element of the new search group
      $("select", groups.filter(':visible:last')).first().focus();

    }

    function updateRowButtons(group) {
      var $rows = $(selectors.row, group);
      var $visibleRows = $rows.filter(":visible");

      //hide all the addButtons
      $(selectors.addButton, $visibleRows).hide();

      // only hide remove button if only one left.
      if ($visibleRows.length <= 1) {
        $(selectors.removeButton, $visibleRows).hide();
      } else {
        $(selectors.removeButton, $visibleRows).show();

      }

      // only show add button if there are more rows...
      if ($visibleRows.length === $rows.length) {
        $(selectors.addButton, group).hide();
      } else {
        //show only the addButton from the last line
        $(selectors.addButton, $visibleRows.last()).show();
      }
    }

    //bring group to initial state (show 2 rows, clear values)
    function resetGroup(group) {
      var rows = $(selectors.row, group);
      rows.first().show();
      rows.next().show();
      rows.slice(2).hide();
      updateRowButtons(group);

      var valueSelectors = [ selectors.operator, selectors.facet, selectors.value,
          selectors.matchValue, selectors.facetValues ];
      // clear values in group, reset select boxes
      $(valueSelectors, group).each(function(index, selector) {
        resetFields($(selector, group));
      });

      rows.each(function() {
        resetRow($(this));
      });
    }

    function resetRow($row) {
      // reset facet values
      var valueSelectors = [ selectors.facet, selectors.value, selectors.matchValue,
          selectors.facetValues ];

      $(valueSelectors).each(function(index, selector) {
        resetFields($(selector, $row));
      });

      // redisplay the correct input depending on the selected facet
      showFacetValueInput($row);
    }

    // Helper: Clearing a field in IE9 using using jQuery $field.val(undefined) will blank out the field rather than selecting the first default item.
    // As a workaround, test if a field is a infact a select list and set the selected index to 0 instead.  For every thing else, use .val(undefined)
    function resetFields($fields) {
      $fields.each(function(index, item) {
        if ($(item).is("select")) {
          if (item.selectedIndex !== 0) {
            item.selectedIndex = 0;
          }
        } else if (item.value) {
          item.value = "";
        }
      });
    }

    //FUNCTIONS TO INITIALIZE

    function upgradeNonJsFacetSelectLists() {
      var $textOnlyFacets = $(selectors.facet, root);
      var $allFacets = $(selectors.facetDisabled, root);

      // remove the non-js and prepare the js facet select list
      $allFacets.each(function(index) {
        var textOnlyFacet = $textOnlyFacets[index];

        $(this).attr("class", textOnlyFacet.className).removeAttr("disabled").show();

        // we don't need the text only facets anymore
        $(textOnlyFacet).attr("class", "").attr("disabled", "disabled").hide();
      });
    }

    //
    function initializeGroups() {
      //bind events to change from input field to controlled select-box for search string
      bindFacetChangeEvents();

      //bind events to add/remove group
      bindGroupButtonEvents();

      //formats groups and rows in groups
      setGroupInitialState();

      //handle buttons for add/removal of group
      updateGroupButtons();
    }

    // bind change event for facets to trigger input reflow
    // change from input field to controlled select-box for search string
    function bindFacetChangeEvents() {
      $(selectors.facet, root).change(function() {
        var $row = $(this).closest(selectors.row);
        showFacetValueInput($row);
      });
    }

    function bindGroupButtonEvents() {
      //bind events for add/removal of group
      $(selectors.removeGroupButton, root).click(function() {
        var $groupWidget = $(this).closest(selectors.groupWidget);
        removeGroup($groupWidget);
        return false;
      });

      $(selectors.addGroupButton, root).click(function() {
        showNextGroup();
        return false;
      });
    }

    //formats groups and rows in groups
    function setGroupInitialState() {
      $(selectors.groupWidget, root).each(function(groupIndex) {
        var $group = $(this);

        if (groupIndex === 0 || haveFacetValuesBeenEnteredForGroup($(this))) {
          $(this).show();
        } else {
          // no need to show this, reset it
          resetGroup($group);
          $group.hide();
        }

        initializeRowsInGroup($group);
      });
    }

    function initializeRowsInGroup(group) {
      setRowsInitialState(group);
      bindRowButtonEvents(group);
    }

    function setRowsInitialState(group) {
      var $last;

      //find last row that has some value. usually this is populated by the browser.
      $(selectors.row, group).each(function(index) {
        var $row = $(this);
        if (index <= 1 || hasFacetValueBeenEnteredForRow($row)) {
          $last = $(this);

          // redisplay the correct input depending on the selected facet
          showFacetValueInput($row);
        } else {
          resetRow($row);
          $row.hide();
        }
      });
      updateRowButtons(group);

    }

    function bindRowButtonEvents(group) {
      //bind events for add/removal of row
      $(selectors.addButton, group).click(function() {
        showNextRow(group);
        return false;
      });

      $(selectors.removeButton, group).click(function() {
        var $row = $(this).closest(selectors.row);
        removeRow($row, group);
        return false;
      });
    }

    //handle click of reset button
    function bindFormButtonEvents() {

      $(selectors.resetButton, root).click(function() {
        searchStateCookie.del();

        $(selectors.group, root).each(function() {
          resetFields($(selectors.globalOperator, root));
          resetGroup(this);
        });

        $(selectors.groupWidget, root).first().show().end().slice(1).hide();

        updateGroupButtons();
      });
    }

    //contextual help
    function bindContextualHelp() {
      var fader;

      $(selectors.contextualHelp, root).removeAttr("title").unbind('mouseover').bind('mouseover',
          function() {
            clearTimeout(fader);

            var tooltip = $(selectors.contextualHelpTooltip, root);
            tooltip.fadeIn();
            tooltip.bind("mouseenter", function() {
              clearTimeout(fader);
            }).bind("mouseleave", function() {
              fader = setTimeout(function() {
                tooltip.fadeOut();
              }, 500);
            });
          }).bind('mouseout', function() {
        fader = setTimeout(function() {
          $(selectors.contextualHelpTooltip, root).fadeOut();
        }, 3000);
      });
    }

    function initializeStateStorage() {
      var pageState = searchStateCookie.get();

      if (pageState) {
        var vals = pageState.split('&');
        for ( var i = 0; i < vals.length; i++) {
          var nameValuePair = vals[i].split('=');
          $('[name="' + nameValuePair[0] + '"]').val(unescape(nameValuePair[1]));
        }
      }

      $("form#advanced-search-form", root).bind('submit', function() {
        // store key value params in cookie
        var selectedValues = [];
        // use regex replace to combine selected values
        $(this).serialize().replace(/([^=&]+)=([^=&]+)/ig, function($0, $1, $2) {
          selectedValues.push($1 + "=" + escape(decodeURIComponent(($2).replace(/\+/g, '%20'))));
          return null;
        });

        searchStateCookie.set(selectedValues.join('&'));
      });
    }

    //switch facet select box to the one with facets-selection
    upgradeNonJsFacetSelectLists();

    //initialize cookie for stored last search query
    initializeStateStorage();

    //format adn hide/display correct groups + rows + buttons
    initializeGroups();

    //handle click of reset button
    bindFormButtonEvents();

    //contextual help
    bindContextualHelp();
  };
}(jQuery));

if ($(".advanced-search")) {
  page.init($('.advanced-search').get(0));
}

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the search results page

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Is called after the DOM has been initialized, the new handler passed in will
 * be executed immediately
 */
$(function() {

  if (jsPageName === "results" || jsPageName === "searchinstitution" || jsPageName === "searchperson") {
    // workaround for ffox + ie click focus - prevents links that load dynamic
    // content to be focussed/active.
    $("a.noclickfocus").live('mouseup', function() {
      $(this).blur();
    });

    // Fix for back-button problem with the searchfield: DDBNEXT-389
    if ($.browser.msie) {
      var queryCache = $("#querycache");
      var queryString = "";
      if (queryCache.length > 0) {
        queryString = queryCache.val();
      }
      $("#form-search-header .query").val(queryString);
    }

    //Callback function for history changes
    var stateManager = function(url) {
      $('#main-container').load(url + ' .search-results-container', function() {
        de.ddb.next.search.searchResultsInitializer();
      });
    };

    de.ddb.common.search.initHistorySupport(stateManager);
    de.ddb.next.search.paginationWidget = new de.ddb.next.PaginationWidget();
    de.ddb.next.search.searchResultsInitializer();

    //Operations on the grid where triggered only once clicked and ignored if the viewtype grid was coming from the URL
    if (typeof de.ddb.common.search.getUrlVar('viewType')!=='undefined' &&
        de.ddb.common.search.getUrlVar('viewType').toString()==='grid' &&
        de.ddb.common.search.historySupport) {
      //In IE9<= creates an infinite loop due that doesn't support pushState.
      $("#view-grid").trigger( "click" );
    }
  }
});

de.ddb.next.search.fetchResultsList = function(url, errorCallback) {
  var divSearchResultsOverlayModal = $(document.createElement('div'));
  divSearchResultsOverlayModal.addClass('search-results-overlay-modal');
  var divSearchResultsOverlayWaiting = $(document.createElement('div'));
  divSearchResultsOverlayWaiting.addClass('search-results-overlay-waiting');
  var divSearchResultsOverlayImg = $(document.createElement('div'));
  divSearchResultsOverlayImg.addClass('small-loader');
  divSearchResultsOverlayWaiting.append(divSearchResultsOverlayImg);

  $('.search-results').append(divSearchResultsOverlayModal);
  $('.search-results').append(divSearchResultsOverlayWaiting);

  $.ajax({
    type : 'GET',
    dataType : 'json',
    async : true,
    url : url + '&reqType=ajax',
    success : function(data) {
      de.ddb.common.search.historyManager(url);
      if (!historySupport) {
        return;
      }

      $('.search-results-list').fadeOut(
          'fast',
          function() {
            var JSONresponse = data;
            if (JSONresponse.numberOfResults === 0) {
              $('.search-noresults-content').removeClass("off");
              $('.search-results-content').addClass("off");
            } else {
              $('.search-noresults-content').addClass("off");
              $('.search-results-content').removeClass("off");
            }
            $('.search-results-list').html(JSONresponse.results);
            $('.results-overall-index').html(JSONresponse.resultsOverallIndex);
            $('.page-input').attr('value', JSONresponse.page);
            $('.page-nonjs').html(JSONresponse.page);

            de.ddb.next.search.paginationWidget.resetNavigationElements(JSONresponse);

            $('.search-results-list').fadeIn('fast');

            divSearchResultsOverlayImg.remove();
            divSearchResultsOverlayWaiting.remove();
            divSearchResultsOverlayModal.remove();

            $(window).trigger('searchChange');
          });
    },
    error : function() {
      divSearchResultsOverlayImg.remove();
      divSearchResultsOverlayWaiting.remove();
      divSearchResultsOverlayModal.remove();

      de.ddb.next.search.showError(messages.ddbnext.An_Error_Occured);

      if (errorCallback) {
        errorCallback();
      }
    }
  });
};

de.ddb.next.search.hideError = function() {
  $('.errors-container').remove();
};

de.ddb.next.search.showError = function(errorHtml) {
  var errorContainer = ($('.search-results-list').find('.errors-container').length > 0) ? $(
      '.search-results-list').find('.errors-container') : $(document.createElement('div'));
  var errorIcon = $(document.createElement('i'));
  errorContainer.addClass('errors-container');
  errorContainer.html(errorHtml);
  errorContainer.prepend(errorIcon);
  $('.search-results-list').prepend(errorContainer);
  var offset = errorContainer.offset();
  $('html, body').animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
  });
};

de.ddb.next.search.initializeFacets = function() {
  var facetsManager = null;

  if (jsPageName === "results") {
    facetsManager = new de.ddb.next.search.FacetsManager(de.ddb.next.search.fetchResultsList, "Kultur", "/facets");
  }
  else if (jsPageName === "searchinstitution") {
    facetsManager = new de.ddb.next.search.FacetsManager(de.ddb.next.search.fetchResultsList, "Institution", "/facets");
  } else if (jsPageName === "searchperson") {
    facetsManager = new de.ddb.next.search.FacetsManager(de.ddb.next.search.fetchResultsList, null, "/entityfacets");
  }

  var fctWidget = new de.ddb.next.search.FlyoutFacetsWidget(facetsManager);
  $('.facets-item a').each(function() {
    $(this).click(function(event) {
      event.preventDefault();
      fctWidget.build($(this));
    });
  });
  fctWidget.manageOutsideClicks(fctWidget);
};

de.ddb.next.search.searchResultsInitializer = function() {
  $(window).on("searchChange", function() {
    setHovercardEvents();
    var compareManager = new de.ddb.next.search.CompareManager();
    compareManager.initComparison();
    checkFavorites();
    checkSavedSearch();
  });

  $('.results-paginator-options').removeClass('off');
  $('.results-paginator-view').removeClass('off');
  $('.page-input').removeClass('off');
  $('.page-nonjs').addClass("off");

  $(window).trigger("searchChange");

  $('#form-search-header button').click(
      function() {
        var searchParameters = de.ddb.common.search.readCookie("searchParameters" + jsContextPath);
        if (searchParameters != null && searchParameters.length > 0) {
          searchParameters = searchParameters.substring(1, searchParameters.length - 1);
          searchParameters = searchParameters.replace(/\\"/g, '"');
          var json = $.parseJSON(searchParameters);
          if (json["rows"]) {
            $(this).append('<input type="hidden" name="rows" value="' + json["rows"] + '"/>');
          }
          if (json["clustered"]) {
            $(this).append(
                '<input type="hidden" name="clustered" value="' + json["clustered"] + '"/>');
          }
          if (json["isThumbnailFiltered"]) {
            $(this).append(
                '<input type="hidden" name="isThumbnailFiltered" value="'
                    + json["isThumbnailFiltered"] + '"/>');
          }
          if (json["viewType"]) {
            $(this).append(
                '<input type="hidden" name="viewType" value="' + json["viewType"] + '"/>');
          }
          if (json["sort"] === 'ALPHA_ASC' || json["sort"] === 'ALPHA_DESC') {
            //Only a_to_z and z_to_a should be considered
            $(this).append('<input type="hidden" name="sort" value="' + json["sort"] + '"/>');
          }
        }
      });
  $('#form-search-header input').keyup(function(e) {
    if (e.keyCode === 13 && $.browser.msie && parseFloat($.browser.version) <= 8.0) {
      $('#form-search-header button').click();
    }
    return false;
  });
  $('#view-list').click(
      function() {
        $('.summary-main .title a').each(
            function(index, value) {
              $(this).closest( "div" ).removeClass("grid-title");
              var newTitle = value.title.toString();
              if (newTitle.length > 100) {
                newTitle = $.trim(newTitle).substring(0, 100).split(" ").slice(0, -1).join(" ")
                    + "...";
              }
              if ($(this).closest('.summary-main').find('.matches li span strong').length === 0
                  && jQuery.trim($(value).find('strong')).length > 0) {
                newTitle = jQuery.trim($(value).html());
              } else {
                var replacementsRegex = new StringBuilder();
                replacementsRegex.append("(");
                $(this).closest('.summary-main').find('.matches li span strong').each(
                    function(sindex, svalue) {
                      var tmpSvalueText = (svalue.innerHTML + '').replace(/([.?*+^$[\]\\(){}|-])/g,
                          "\\$1");
                      if (replacementsRegex.getLength() > 1) {
                        replacementsRegex.append("|");
                      }
                      replacementsRegex.append(tmpSvalueText);
                    });
                replacementsRegex.append(")");
                newTitle = newTitle.replace(new RegExp(replacementsRegex.toString(), 'gi'),
                    "<strong>\$1</strong>");
              }
              value.innerHTML = newTitle;
            });
        $('#view-list').addClass('selected');
        $('#view-list').attr("disabled", "disabled");
        $('#view-grid').removeClass('selected');
        $('#view-grid').removeAttr('disabled');
        $('.search-results').fadeOut(
            'fast',
            function() {
              $('.results-list .summary').addClass('row');
              $('.summary-main-wrapper').not('.summary-main-wrapper-gnd').addClass('span6');
              $('.thumbnail-wrapper').addClass('span3');
              $('.results-list .item-options').not('.entity-list .item-options').addClass('bl');
              $('.results-list .item-options .information').not(
                  '.entity-list .item-options .information').addClass('bb');
              $('.results-list .item-options .compare').not('.entity-list .item-options .compare')
                  .addClass('bb');
              $('.results-list').removeClass("grid");
              $('.search-results').fadeOut('fast');
              $('.summary .thumbnail-wrapper').each(function() {
                $(this).appendTo(this.parentNode);
              });
              $('.search-results').fadeIn('fast');
            });
        var paramsArray = [['viewType', 'list']];
        var newUrl = $.addParamToCurrentUrl(paramsArray);
        $('.page-nav a, .page-nav-mob a').each(function() {
          this.href = $.addParamToCurrentUrl(paramsArray, this.href.split("?")[1]);
        });

        $('.results-list a').each(function() {
          this.href = $.addParamToUrl(null, paramsArray, this.href.split("?")[0], this.href.split("?")[1]);
        });
        $('.clear-filters a').attr('href',
            $('.clear-filters a').attr('href').replace(/viewType=(list|grid)/i, 'viewType=list'));
        de.ddb.common.search.historyManager(newUrl);
        de.ddb.common.search.setSearchCookieParameter(paramsArray);
      });

  de.ddb.next.search.paginationWidget.setPageInputKeyupHandler(
      function(e, element){
        if (e.keyCode === 13) {
          if (/^[0-9]+$/.test(element.value)) {
            var resultPagesCountText = $('.result-pages-count').text();
            var resultPagesCountInt = parseInt(resultPagesCountText.replace(/[^0-9]/g, ''));

            if (parseInt(element.value) <= 0) {
              element.value = 1;
            } else if (parseInt(element.value) > resultPagesCountInt) {
              element.value = $('.result-pages-count').text();
            }
          } else {
            element.value = 1;
          }

          $('.page-input').attr('value', element.value);

          var valueInteger = parseInt(element.value.replace(/[^0-9]/g, ''));
          var filterInteger = parseInt($('.page-filter').find("select").val());
          var offset = (valueInteger - 1) * filterInteger;
          var paramsArray = [['offset', offset]];
          var newUrl = $.addParamToCurrentUrl(paramsArray);
          de.ddb.next.search.fetchResultsList(newUrl);
        }
      }
  );

  de.ddb.next.search.paginationWidget.setNavigatorsClickHandler(
      function(element) {
        de.ddb.next.search.fetchResultsList(element.attr('href'));
        $('html, body').animate({
          scrollTop : 0
        }, 1000);
      }
  );

  de.ddb.next.search.paginationWidget.setPaginatorOptionsHandlers(
      function(sortSelect, rowsSelect, closeButton){
        var paramsArray = [['rows', rowsSelect.val()], ['sort', sortSelect.val()], ['offset', 0]];
        closeButton.trigger('click');
        de.ddb.next.search.fetchResultsList($.addParamToCurrentUrl(paramsArray));

        if($('.clear-filters').attr('href')) {
          $('.clear-filters').attr('href', $('.clear-filters').attr('href').replace(/sort=(RELEVANCE|ALPHA_DESC|ALPHA_ASC)/i, 'sort=' + sortSelect.val()));
          $('.clear-filters').attr('href', $('.clear-filters').attr('href').replace(/rows=\d+/g, 'rows=' + rowsSelect.val()));
        }
        return false;
      }
  );

  $('#thumbnail-filter').click(function() {
    var valueCheck = $(this);
    var paramsArray = [['isThumbnailFiltered', 'false']];

    if (valueCheck.is(':checked')) {
      paramsArray = [['isThumbnailFiltered', 'true']];
    }
    paramsArray.push(['offset', 0]);
    var newUrl = $.addParamToCurrentUrl(paramsArray);
    de.ddb.next.search.fetchResultsList(newUrl);
  });
  $('#view-grid').click(
      function() {
        $('.summary-main .title a').each(
            function(index, value) {
              var newTitle = value.title.toString();
              if ($(this).closest('.summary-main').find('.matches li span strong').length === 0
                  && jQuery.trim($(value).find('strong')).length > 0) {
                newTitle = jQuery.trim($(value).html());
              } else {
                var replacementsRegex = new StringBuilder();
                replacementsRegex.append("(");
                $(this).closest('.summary-main').find('.matches li span strong').each(
                    function(sindex, svalue) {
                      var tmpSvalueText = (svalue.innerHTML + '').replace(/([.?*+^$[\]\\(){}|-])/g,
                          "\\$1");
                      if (replacementsRegex.getLength() > 1) {
                        replacementsRegex.append("|");
                      }
                      replacementsRegex.append(tmpSvalueText);
                    });
                replacementsRegex.append(")");
                newTitle = newTitle.replace(new RegExp(replacementsRegex.toString(), 'gi'),
                    "<strong>\$1</strong>");
              }
              if (newTitle.length > 60) {
                newTitle = $.trim(newTitle).substring(0, 60).split(" ").slice(0, -1).join(" ")
                    + "...";
              }
              $(this).closest( "div" ).addClass("grid-title");
              value.innerHTML = newTitle;
            });
        $('#view-list').removeClass('selected');
        $('#view-list').removeAttr('disabled');
        $('#view-grid').addClass('selected');
        $('#view-grid').attr("disabled", "disabled");
        $('.search-results').fadeOut(
            'fast',
            function() {
              // For no special line view of entity search results in grid ->
              // remove the not() statements again
              $('.results-list .summary').not('.entity-list .summary').removeClass('row');
              $('.results-list .summary-main-wrapper').not('.entity-list .summary-main-wrapper')
                  .removeClass('span6');
              $('.results-list .thumbnail-wrapper').not('.entity-list .thumbnail-wrapper')
                  .removeClass('span3');
              $('.results-list').not('.entity-list').addClass("grid");
              $('.search-results').fadeOut('fast');
              $('.results-list .summary .summary-main-wrapper').not(
                  '.entity-list .summary .summary-main-wrapper').each(function() {
                $(this).appendTo(this.parentNode);
              });
              $('.search-results').fadeIn('fast');
            });
        var paramsArray = [['viewType', 'grid']];
        var newUrl = $.addParamToCurrentUrl(paramsArray);
        $('.page-nav a, .page-nav-mob a').each(function() {
          this.href = $.addParamToCurrentUrl(paramsArray, this.href.split("?")[1]);
        });
        $('.results-list a').each(function() {
          this.href = $.addParamToUrl(null, paramsArray, this.href.split("?")[0], this.href.split("?")[1]);
        });
        $('.clear-filters a').attr('href',
            $('.clear-filters a').attr('href').replace(/viewType=(list|grid)/i, 'viewType=grid'));
        de.ddb.common.search.historyManager(newUrl);
        de.ddb.common.search.setSearchCookieParameter(paramsArray);
        historyedited = true;
      });
  $('#keep-filters').click(function() {
    var valueCheck = $(this);
    var paramsArray = [['keepFilters', 'false']];

    if (valueCheck.is(':checked')) {
      paramsArray = [['keepFilters', 'true']];
    }
    $.addParamToCurrentUrl(paramsArray);
    de.ddb.common.search.setSearchCookieParameter(paramsArray);
  });
  $('.clear-filters').click(function() {
    de.ddb.common.search.removeSearchCookieParameter('facetValues[]');
  });

  $('.type-selection').change(function(){
    var currentQuery = de.ddb.common.search.getUrlVar('query');
    var optionSelected = $('option:selected', this);
    window.location = optionSelected.val()+'?query='+currentQuery;
  });

  de.ddb.next.search.initializeFacets();

  function setHovercardEvents() {
    $('.information').each(function() {
      new de.ddb.next.search.HovercardInfoItem($(this));
    });
  }

  function addToSavedSearches() {
    $.urlParam = function(name) {
      var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results == null) {
        return null;
      } else {
        return results[1] || "";
      }
    };
    $.truncateTitle = function(string) {
      var result = "";
      var words = string.split(/\s+/);
      for ( var index = 0; index < 3 && index < words.length; index++) {
        if (result.length > 0) {
          result += " ";
        }
        result += words[index];
      }
      return result;
    };
    var queryString = decodeURIComponent($.urlParam("query").replace(/\+/g, '%20'));
    // take only the first 3 words as title
    $("#addToSavedSearchesTitle").val($.truncateTitle(queryString));
    $("#addToSavedSearchesModal").modal("show");
    $("#addToSavedSearchesConfirm").unbind("click");
    $("#addToSavedSearchesConfirm").click(function() {
      $("#addToSavedSearchesModal").modal("hide");
      var title = $("#addToSavedSearchesTitle").val();
      if (title.length > 0) {
        de.ddb.next.search.hideError();
        $.ajax({
          type : "PUT",
          contentType : "application/json",
          dataType : "json",
          url : jsContextPath + "/apis/savedsearches",
          data : JSON.stringify({
            query : window.location.search.substring(1),
            title : title,
            type : $("#addToSavedSearches").attr("data-type")
          })
        }).done(function() {
          disableSavedSearch($(".add-to-saved-searches"));
        });
      } else {
        de.ddb.next.search.showError(messages.ddbnext.Savedsearch_Without_Title);
      }
    });
  }

  /**
   * AJAX request to check if a result hit is already stored in the list of favorites.
   *
   * Install a click event handler to add a result hit to the list of favorites.
   */
  function checkFavorites() {
    var itemIds = [];

    // Only perform this check if a user is logged in
    if (jsLoggedIn === "true") {

      // collect all item ids on the page
      $(".search-results .summary-main .persist").each(function() {
        itemIds.push(extractItemId($(this).attr("href")));
      });

      // check if a result hit is already stored in the list of favorites
      $.ajax({
        type : "POST",
        url : jsContextPath + "/apis/favorites/_get",
        contentType : "application/json",
        data : JSON.stringify(itemIds),
        success : function(favoriteItemIds) {
          $.each(itemIds, function(index, itemId) {
            var div = $("[data-itemid='" + itemId + "']");

            if ($.inArray(itemId, favoriteItemIds) >= 0) {
              disableFavorite(div);
            }
            else {
              addFavoriteEvent(div);
            }
          });
        }
      });
    }
  }

  /**
   * Check if the current search string is already stored as a saved search.
   */
  function checkSavedSearch() {
    // Only perform this check if a user is logged in
    if (jsLoggedIn === "true") {

      $.ajax({
        type : "POST",
        contentType : "application/json",
        dataType : "json",
        url : jsContextPath + "/apis/savedsearches/_get",
        data : JSON.stringify({
          query : window.location.search.substring(1),
          type : $("#addToSavedSearches").attr("data-type")
        })
      }).statusCode( {
        200: function() { //SC_OK
          disableSavedSearch($(".add-to-saved-searches"));
        },
        204: function() { //SC_NO_CONTENT
          enableSavedSearch($(".added-to-saved-searches"));
        }
      });
    }
  }

  /**
   * Disable the saved search button.
   *
   * @param div DIV element which handles the saved search event
   */
  function disableSavedSearch(div) {
    $("#addToSavedSearches").unbind("click");
    div.removeClass("add-to-saved-searches");
    div.addClass("added-to-saved-searches");
    $("#addToSavedSearchesAnchor").addClass("off");
    $("#addToSavedSearchesSpan").removeClass("off");
  }

  /**
   * Enable the saved search button.
   *
   * @param div DIV element which handles the saved search event
   */
  function enableSavedSearch(div) {
    $("#addToSavedSearches").unbind("click");
    $("#addToSavedSearches").click(function() {
      addToSavedSearches();
    });
    div.removeClass("added-to-saved-searches");
    div.addClass("add-to-saved-searches");
    $("#addToSavedSearchesSpan").addClass("off");
    $("#addToSavedSearchesAnchor").removeClass("off");
  }

  /**
   * Extract the item id from the given URL.
   *
   * @param url the URL containing the item id
   *
   * @returns item id
   */
  function extractItemId(url) {
    var result = null;
    var parts = url.split("/");

    result = parts[parts.length - 1];

    var queryParameters = result.indexOf("?");

    if (queryParameters >= 0) {
      result = result.substring(0, queryParameters);
    }
    return result;
  }
};

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the search results page
$(function() {

  if (jsPageName === "favorites") {
    var socialMediaManager = new SocialMediaManager();
    socialMediaManager.integrateSocialMedia();
    $("#favoritesCopyDialog select").MultiSelect({css_class_selected: "multiselect-selected-folder"});
    $('.page-input').removeClass('off');
    $('.page-nonjs').addClass("off");
    // workaround for ffox + ie click focus - prevents links that load dynamic
    // content to be focussed/active.
    $("a.noclickfocus").live('mouseup', function() {
      $(this).blur();
    });

    $('.page-filter select').change(function() {
      var url = updateURLParameter(window.location.href, 'rows', this.value);
      var order = getParam("order");
      url = updateURLParameter(url, 'order', order);
      window.location.href = url;
      return false;
    });

    $('#checkall').checkAll('#slaves input:checkbox', {
      reportTo : function() {
        var prefix = this.prop('checked') ? 'un' : '';
        this.next().text(prefix + 'check all');
        $('#slaves').trigger('change');
      }
    });

    //Managing "delete" and "copy" buttons
    $('#slaves').change(function(){
      if($(this).find(':checkbox:checked').length>0){
        $('.delete-btn button').removeClass('disabled');
        $('.options-buttons-container').removeClass('mobile-off');
      }else{
        $('.delete-btn button').addClass('disabled');
        $('.options-buttons-container').addClass('mobile-off');
      }
    });

    $('.delete-btn button').click(function(){
      if($(this).hasClass('disabled')){
        return false;
      }
    });

    updateNavigationUrl();

    $('.page-input').keyup(function(e) {
        if (e.keyCode === 13) {
          if (/^[0-9]+$/.test(this.value)) {
            var resultPagesCountText = $('.total-pages').text();
            var resultPagesCountInt = parseInt(resultPagesCountText.replace(/[^0-9]/g, ''));

            if (parseInt(this.value) <= 0) {
              this.value = 1;
            } else if (parseInt(this.value) > resultPagesCountInt) {
              this.value = $('.total-pages').text();
            }
          } else {
            this.value = 1;
          }
          $('.page-input').attr('value', this.value);

          var paramsArray = [['offset', (this.value - 1) *
          getParamWithDefault("rows", 20)], ['rows', getParamWithDefault("rows", 20)], ['order', getParam("order")]];

          window.location.href = $.addParamToUrl(jsContextPath + "/user/favorites/", paramsArray, null, paramsArray, false);
        }
      });

    /** Delete favorites */
    $('#favorites-remove').submit(function() {
      var selected = [];
      $('#slaves input:checked').each(function() {
        selected.push($(this).attr('value'));
      });
      $('.totalNrSelectedObjects').html(selected.length);
      $('#favoritesDeleteConfirmDialog').modal('show');
      $('#id-confirm').click(function() {
        var selected = [];
        $('#slaves input:checked').each(function() {
          selected.push($(this).attr('value'));
        });
        var folderId = $('#folder-list').attr('data-folder-selected');
        var body = {
          ids : selected,
          folderId : folderId
        };
        jQuery.ajax({
          type : 'POST',
          contentType : "application/json; charset=utf-8",
          traditional : true,
          url : jsContextPath + "/apis/favorites/_delete",
          data : JSON.stringify(body),
          dataType : "json",
          success : function() {
            window.setTimeout('location.reload();', 500);
          }
        });
        $('#slaves input:checked').each(function() {
          selected.push($(this).attr('checked', false));
        });
        $('#favoritesDeleteConfirmDialog').modal('hide');
      });
      return false;
    });

    /** Send email */
    $(".sendbookmarks").click(function(event) {
      event.preventDefault();
      $('#favoritesModal').modal('show');
      return false;
    });

    /** Create folder */
    $('#folder-create').submit(function() {
      $('#folderCreateConfirmDialog').modal('show');
      return false;
    });

    $('#create-confirm').click(function() {
        var title = $('#folder-create-name').val();
        if (title.length > 0) {
          hideError();
          var body = {
          title : title,
          description : $('#folder-create-description').val()
          };
          jQuery.ajax({
            type : 'POST',
            contentType : "application/json; charset=utf-8",
            traditional : true,
            url : jsContextPath + "/apis/favorites/folder/create",
            data : JSON.stringify(body),
            dataType : "json",
            success : function() {
              window.setTimeout('location.reload();', 500);
            }
          });
        } else {
          showError(messages.ddbnext.favorites_list_Title_Required);
      }
      $('#folderCreateConfirmDialog').modal('hide');
      return false;
    });

    /** Delete folder */
    $(".deletefolders").click(function(event) {
      event.preventDefault();
      $('#folderDeleteConfirmDialog').modal('show');

      var folderId = $(this).attr('data-folder-id');

      $('#delete-confirm').click(function() {
        var body = {
          folderId : folderId,
          deleteItems : $('#folder-delete-check').is(':checked')
        };
        jQuery.ajax({
          type : 'POST',
          contentType : "application/json; charset=utf-8",
          traditional : true,
          url : jsContextPath + "/apis/favorites/folder/delete",
          data : JSON.stringify(body),
          dataType : "json",
          success : function() {
            window.setTimeout('location.reload();', 500);
          }
        });
        $('#folderDeleteConfirmDialog').modal('hide');
      });
      return false;

    });

    /** Copy favorites */
    $('#favorites-copy').submit(function() {
      var selected = [];
      $('#slaves input:checked').each(function() {
        selected.push($(this).attr('value'));
      });

      if (selected.length > 0) {
        $('#favoritesCopyDialog').modal('show');
        $('#copy-confirm').click(function() {
          var selected = [];
          $('#slaves input:checked').each(function() {
            selected.push($(this).attr('data-bookmark-id'));
          });

          var selectedFolders = $('.favorites-copy-selection').val();

          var body = {
            ids : selected,
            folders : selectedFolders
          };
          jQuery.ajax({
            type : 'POST',
            contentType : "application/json; charset=utf-8",
            traditional : true,
            url : jsContextPath + "/apis/favorites/copy",
            data : JSON.stringify(body),
            dataType : "json",
            success : function() {
              window.setTimeout('location.reload();', 500);
            }
          });
          $('#slaves input:checked').each(function() {
            selected.push($(this).attr('checked', false));
          });
          $('#favoritesCopyDialog').modal('hide');
        });
      }
      return false;
    });

    /** Edit folder */
    $('.editfolder').click(
        function() {

          var folderId = $(this).attr('data-folder-id');

          // First get current values of the folder
          jQuery.ajax({
            type : 'GET',
            contentType : "application/json; charset=utf-8",
            traditional : true,
            url : jsContextPath + "/apis/favorites/folder/get/" + folderId,
            dataType : "json",
            success : function(data) {

              // Then set the values to the GUI
              var oldFolderTitle = data.title;
              var oldFolderDescription = data.description;
              var isPublic = data.isPublic;
              var publishingName = data.publishingName;
              var isBlocked = data.isBlocked;

              $('#folder-edit-id').val(folderId);
              $('#folder-edit-name').val(oldFolderTitle);
              $('#folder-edit-description').val(oldFolderDescription);
              if (isPublic) {
                $('#folder-edit-privacy-public').attr('checked', 'checked');
              } else {
                $('#folder-edit-privacy-private').attr('checked', 'checked');
              }
              $('#folder-edit-publish-name option[value="' + publishingName + '"]').attr(
                  'selected', 'selected');
              if (isBlocked) {
                $('#folder-edit-privacy-area').addClass('off');
              } else {
                $('#folder-edit-privacy-area').removeClass('off');
              }

              $('#folderEditConfirmDialog').modal('show');

              // Then collect the updated values
              $('#edit-confirm').click(function() {
                var isPublic = false;
                if ($('#folder-edit-privacy-public').is(':checked')) {
                  isPublic = true;
                }

                var title = $('#folder-edit-name').val();
                var body = {
                  id : $('#folder-edit-id').val(),
                  title : title,
                  description : $('#folder-edit-description').val(),
                  isPublic : isPublic,
                  name : $('#folder-edit-publish-name').find(":selected").val()
                };
                if (title.length > 0) {
                    hideError();
                    jQuery.ajax({
                      type : 'POST',
                      contentType : "application/json; charset=utf-8",
                      traditional : true,
                      url : jsContextPath + "/apis/favorites/folder/edit",
                      data : JSON.stringify(body),
                      dataType : "json",
                      success : function() {
                        window.setTimeout('location.reload();', 500);
                      }
                    });
                } else {
                    showError(messages.ddbnext.favorites_list_Title_Required);
                }
                $('#folderEditConfirmDialog').modal('hide');
              });

            }
          });

          return false;
        });

    /** Publish folder */
    $('.publishfolder').click(function() {

      var folderId = $(this).attr('data-folder-id');
      var body = {
        id : folderId
      };

      jQuery.ajax({
        type : 'POST',
        contentType : "application/json; charset=utf-8",
        traditional : true,
        url : jsContextPath + "/apis/favorites/togglePublish",
        data : JSON.stringify(body),
        dataType : "json",
        success : function() {
          window.setTimeout('location.reload();', 500);
        }
      });
      return false;
    });

    /** Open comment favorites */
    $('.comment-text-clickanchor').click(function() {

      var bookmarksId = $(this).attr('data-bookmark-id');
      var textField = $("#comment-text-" + bookmarksId);
      var inputField = $("#comment-input-" + bookmarksId);
      var buttonField = $("#comment-button-" + bookmarksId);

      $(textField).addClass("off");
      $(inputField).removeClass("off");
      $(buttonField).removeClass("off");
      $(inputField).focus();

      inputField.animate({
        height : "100px"
      }, 200, function() {
      });

      return false;
    });

    /** Cancel comment favorites */
    $('.comment-cancel').click(function() {

      var bookmarksId = $(this).attr('data-bookmark-id');
      var textField = $("#comment-text-" + bookmarksId);
      var dynamicTextField = $("#comment-text-dyn-" + bookmarksId);
      var inputField = $("#comment-input-" + bookmarksId);
      var buttonField = $("#comment-button-" + bookmarksId);

      inputField.animate({
        height : "20px"
      }, 200, function() {
        $(textField).removeClass("off");
        $(inputField).addClass("off");
        $(buttonField).addClass("off");
      });

      var originalComment = $(dynamicTextField).text().trim();
      var defaultMessage = messages.ddbnext.Favorites_Comment_Label().trim();
      if (originalComment === defaultMessage) {
        $(inputField).val("");
      } else {
        $(inputField).val(originalComment.trim());
      }

      return false;
    });

    /** Save comment favorites */
    $('.comment-save').click(function() {

      var bookmarksId = $(this).attr('data-bookmark-id');
      var textField = $("#comment-text-" + bookmarksId);
      var dynamicTextField = $("#comment-text-dyn-" + bookmarksId);
      var inputField = $("#comment-input-" + bookmarksId);
      var buttonField = $("#comment-button-" + bookmarksId);

      var body = {
        id : bookmarksId,
        text : $(inputField).val()
      };
      jQuery.ajax({
        type : 'POST',
        contentType : "application/json; charset=utf-8",
        traditional : true,
        url : jsContextPath + "/apis/favorites/comment",
        data : JSON.stringify(body),
        dataType : "json",
        success : function() {

          var newInput = $(inputField).val();
          if (newInput.trim()) {
            $(dynamicTextField).text(newInput);
          } else {
            $(dynamicTextField).text(messages.ddbnext.Favorites_Comment_Label);
          }

          inputField.animate({
            height : "20px"
          }, 200, function() {
            $(textField).removeClass("off");
            $(inputField).addClass("off");
            $(buttonField).addClass("off");

            window.setTimeout('location.reload();', 100);
          });

        }
      });

      return false;
    });

    /* Ranking manager*/
    $('.rank-input').on('change', function(){
      var newPosition = parseInt($(this).val());
      if(newPosition !== "NaN"){
        var parentElement = $(this).parents('.rank-wrapper');
        updateRanking (parentElement.attr('data-bookmark-id'), parentElement.attr('data-folder-id'), newPosition - 1);
      }
    });
    $('.rank-arrows .up, .rank-arrows .down').on('click', function(){
      if(!$(this).parent().hasClass('disabled')){
        var parentElement = $(this).parents('.rank-wrapper');
        var currentPosition = parseInt(parentElement.find('.rank-input').val()) - 1;
        if($(this).hasClass('up') && currentPosition > 0){
          updateRanking (parentElement.attr('data-bookmark-id'), parentElement.attr('data-folder-id'),
                         currentPosition - 1);
        }else if($(this).hasClass('down')){
          updateRanking (parentElement.attr('data-bookmark-id'), parentElement.attr('data-folder-id'),
                         currentPosition + 1);
        }
      }
    });
  }

});

//init the toggle for the mobile accordion
$.toggleElement();

function updateNavigationUrl() {
  $.urlParam = function(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  };
  var offset = getParam('offset');
  if ((offset == null) || (offset < 1)) {
    $(".page-nav .prev-page").addClass("off");
    $(".page-nav .first-page").addClass("off");
  }

  try {
    var offset_endPg = $(".last-page").find('a').attr("href").match(/offset=([0-9]+)/);
    var offset_nextPg = $(".next-page").find('a').attr("href").match(/offset=([0-9]+)/);
    if (offset_endPg && offset_nextPg && parseInt(offset_nextPg[1]) > parseInt(offset_endPg[1])) {
      $(".page-nav .next-page").addClass("off");
      $(".page-nav .last-page").addClass("off");
    }
  } catch (e) {
    // TODO: the endPg / nextPg throws errors on empty favorites list
  }
}

function getParam(name) {
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var tmpURL = window.location.href;
  var results = regex.exec(tmpURL);
  if (results == null) {
    return "";
  } else {
    return results[1];
  }
}

function getParamWithDefault(name, defaultValue) {
  var result = getParam(name);

  if (result === "") {
    result = defaultValue;
  }
  return result;
}

function updateURLParameter(url, param, paramVal) {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] !== param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}

function hideError() {
    $('.errors-container').remove();
}

function showError(errorHtml) {
    var errorContainer = ($('.favorites-results-content').find('.errors-container').length > 0) ? $(
        '.favorites-results-content').find('.errors-container') : $(document.createElement('div'));
    var errorIcon = $(document.createElement('i'));
    errorContainer.addClass('errors-container');
    errorContainer.html(errorHtml);
    errorContainer.prepend(errorIcon);

    $('.favorites-results-content').prepend(errorContainer);
}

function clean() {
  $('#folder-create-name').val("");
  $('#folder-create-description').val("");
}

function updateRanking (bookmarkId, folderId, newPosition){
  var body = {
    folderId : folderId,
    position : newPosition
  };
  $.ajax({
    type: "POST",
    contentType : "application/json; charset=utf-8",
    traditional : true,
    url : jsContextPath + "/apis/favorites/"+bookmarkId+"/_move",
    data : JSON.stringify(body),
    dataType : "json",
    success: function(){
      window.location = window.location;
    },
    error: function(){return false;}
  });
}

$('#alle-listen').click(function(event){
  event.preventDefault();
  var url = jsContextPath + "/user/" +  $(this).attr("data-userId") + "/favorites/allpublicfolders/"+ $(this).attr("data-selectedFolderId");
  $.get(url, function(data) {
    $('#public-folders').empty();
    $('#public-folders').append(data);

    var newUrl = updateURLParameter(window.location.href, 'showLinkAllList', false);
    window.location.href = newUrl;
  });
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  $("#registration-form").validate({

    rules : {
      username : {
        required : true,
        minlength : 2
      // TODO change the minimum if different
      },
      email : {
        required : true,
        email : true
      },
      passwd : {
        required : true,
        minlength : 8
      // TODO change the minimum if different
      },
      conpasswd : {
        required : true,
        equalTo : "#passwd"
      },
      termOfUse : {
        required : true
      },
      errorClass : "help-inline"
    },
    messages : {

      username : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        minlength : $("#error-messages").children('li').eq(1).children('a').text()
      },
      email : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        email : $("#error-messages").children('li').eq(3).children('a').text()
      },
      passwd : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        minlength : $("#error-messages").children('li').eq(2).children('a').text()
      },
      conpasswd : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        equalTo : $("#error-messages").children('li').eq(4).children('a').text()
      },
      termOfUse : {
        required : $("#error-messages").children('li').eq(0).children('a').text()
      }

    },
    errorPlacement: function(error, element) {
      console.log($(element).parent().prev());
      $(element).parent().prev().addClass("label-error");
      error.insertAfter(element);
    }

  });

});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

addFavoriteEvent($(".favorite-add #idFavorite"));

/**
 * This function applies to the favorites in search result page, item detail view and institution detail view.
 */
function addFavoriteEvent(jElemFavorite) {
  jElemFavorite.parent().click(function(event) {
    event.preventDefault();
    changeFavoriteState(jElemFavorite);
    return false;
  });
}

function changeFavoriteState(jElemFavorite) {
  disableFavorite(jElemFavorite.parent());
  var vActn = jElemFavorite.attr("data-actn");
  var objectType=jElemFavorite.attr("data-objecttype");
  if (vActn === "POST") { // Currently only allow to add favorites, not to delete them
    var url = jsContextPath + "/apis/favorites/" + jElemFavorite.attr("data-itemid")
        + '/?reqType=ajax';
    $.ajax({
      type : vActn,
      dataType : 'json',
      async : true,
      url : url + "&reqActn=add&reqObjectType=" + objectType,
      complete : function(data) {
        if (vActn === "POST") {
          addToFavorites(jElemFavorite, data,objectType);
        }
      }
    });
  }
}

function addToFavorites(jElemFavorite, data,objectType) {
  switch (data.status) {
  case 200:
  case 201:
    // -- success
    $("#favorite-confirmation").modal("show");
    $.post(jsContextPath + "/apis/favorites/folders", function(folders) {
      if (folders.length > 1) {
        var itemId = jElemFavorite.attr("data-itemid");

        $("#favorite-folders").empty();
        $.each(folders, function(index, folder) {
          if (!folder.isMainFolder) {
            // show select box with all folder names
            var selectEntry = "<option value=" + folder.folderId + ">"
                + folder.title.charAt(0).toUpperCase() + folder.title.slice(1) + "</option>";

            $("#favorite-folders").append(selectEntry);
          }
        });
        $("#favoriteId").val(itemId);
        $("#addToFavoritesConfirm").click(
            function() {
              $("#favorite-confirmation").modal("hide");
              var folderList = $("#favorite-folders").val();

              if (folderList) {
                $.each(folderList, function(index, value) {
                  $.post(jsContextPath + "/apis/favorites/" + itemId + "?folderId=" + value + "&reqObjectType=" +
                    objectType);
                });
              }

              $("#idFavorite").parent().parent().attr('title',
                  messages.ddbnext.favorites_already_saved);
            });
      } else {
        window.setTimeout(function() {
          $("#favorite-confirmation").modal("hide");
        }, 1500);
      }
    });
    break;
  case 400:
    // -- bad request
    break;
  case 401:
    // -- handle unauthorized
    break;
  case 500:
    // -- internal error
    break;
  default:
    // -- bad response
    break;
  }
}

  /**
   * Disable a favorite button.
   *
   * @param div DIV element which handles the favorite event
   */
  function disableFavorite(div) {
    div.unbind("click");
    div.removeAttr("title");
    div.removeClass("add-to-favorites");
    div.removeClass("favorite-add");
    div.addClass("added-to-favorites");
    div.addClass("favorite-selected");
    div.attr('title', messages.ddbnext.favorites_already_saved);
  }

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  $("#user-profile-form").validate({

    rules : {
      username : {
        required : true,
        minlength : 2
      // TODO change the minimum if different
      },
      email : {
        required : true,
        email : true
      },
      errorClass : "help-inline"
    },
    messages : {

      username : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        minlength : $("#error-messages").children('li').eq(1).children('a').text()
      },
      email : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        email : $("#error-messages").children('li').eq(2).children('a').text()
      }
    },
    errorPlacement: function(error, element) {
      $(element).parent().prev().children().addClass("label-error");
      error.insertAfter(element);
    }

  });

  $('#delete-account').click(function() {
    $('#msDeleteAccount').modal('show');
  });

  $('#delete-account-confirm').click(function() {
    window.location.replace(jsContextPath + "/user/delete");
  });
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  $("#password-change-form").validate({

    rules : {
      oldpassword : {
        required : true
      },
      newpassword : {
        required : true,
        minlength : 8
      // TODO change the minimum if different
      },
      confnewpassword : {
        required : true,
        equalTo : "#newpassword"
      },
      errorClass : "help-inline"
    },
    messages : {

      oldpassword : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        minlength : $("#error-messages").children('li').eq(1).children('a').text()
      },
      newpassword : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        minlength : $("#error-messages").children('li').eq(1).children('a').text()
      },
      confnewpassword : {
        required : $("#error-messages").children('li').eq(0).children('a').text(),
        equalTo : $("#error-messages").children('li').eq(2).children('a').text()
      }

    }

  });

});

window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(
    function() {

      if (jsPageName === "entity") {

        var socialMediaManager = new SocialMediaManager();
        socialMediaManager.integrateSocialMedia();

        var defaultRowCount = 10;

        var allRowCount = 0;

        var windowWidth = 0;

        var carouselWidth = 800;

        var carouselHeight = 180;

        var windowLarge = 1185;

        var windowMediumMax = 965;

        var windowMediumMin = 753;

        var windowSmallMax = 661;

        var windowSmallMin = 451;

        var disableCarouselArrows = function() {
          $("#previous").addClass("disabled");
          $("#previous").off('click');
          $("#next").addClass("disabled");
          $("#next").off('click');
        };

        var getNewSearchResults = function(query, offset, rows, entityid) {
          $.ajax({
            type : 'GET',
            dataType : 'json',
            async : true,
            url : jsContextPath + '/entity/ajax/searchresults?query=' + query + '&offset=' + offset
                + '&rows=' + rows + '&entityid=' + entityid,
            complete : function(data) {
              var jsonResponse = $.parseJSON(data.responseText);
              var items = $.parseHTML(jsonResponse.html);

              if(items) {
                //Adds the items from the search to the carousel. Doing this one by one to avoid problems with the carousel.
                $.each(items, function(index, value) {
                  if (value.tagName === 'DIV') {
                    $("#items").triggerHandler("insertItem", [ value, "end", true ]);
                  }
                });
              }

              allRowCount = jsonResponse.resultCount;

              windowWidth = $(window).width();

              if (($(window).width() >= windowLarge && $("#items > div").size() < 6) ||
                  (((windowWidth >= windowMediumMax && windowWidth < windowLarge) || (windowWidth >= windowSmallMax && windowWidth < windowMediumMin)) && $("#items > div").size() < 4) ||
                  (((windowWidth >= windowMediumMin && windowWidth < windowMediumMax) || (windowWidth >= windowSmallMin && windowWidth < windowSmallMax)) && $("#items > div").size() < 3) ||
                  (windowWidth < windowSmallMin && $("#items > div").size() < 2)
                 ) {
                disableCarouselArrows();
              }

            }
          });

        };

        var initCarousel = function() {
          var carouselItems = $("#items");

          $('div.carousel').show();

          if ($(".item .caption").length > 0) {
            $(".item .caption").dotdotdot({});
          }

          $("#next").click(
              function() {
                carouselItems.trigger("next", 1);

                var currentLoadItems = $(".preview-item");
                var currentVisibleItems = carouselItems.triggerHandler("currentVisible");
                var numberOfVisibleItems = currentVisibleItems.length;
                var currentPosition = carouselItems.triggerHandler("currentPosition");
                var nextVisbleItem = currentPosition + numberOfVisibleItems;

                if ((nextVisbleItem > (currentLoadItems.length - 1))
                    && (currentLoadItems.length < allRowCount)) {
                  var query = $("#entity-title").html();
                  var History = window.History;
                  var urlParameters = "?query=" + query + "&offset=" + currentLoadItems.length
                      + "&rows=" + defaultRowCount;
                  History.pushState("", document.title, decodeURI(urlParameters));

                  // Initialize Search results
                  getNewSearchResults(query, currentLoadItems.length, defaultRowCount, entityid);
                }
              });

          $("#previous").click(function() {
            carouselItems.trigger("prev", 1);
          });

          windowWidth = $(window).width();

          if ((windowWidth >= windowMediumMax && windowWidth < windowLarge) || (windowWidth >= windowSmallMax && windowWidth < windowMediumMin)) {
            carouselWidth = 600;
          } else if ((windowWidth >= windowMediumMin && windowWidth < windowMediumMax) || (windowWidth >= windowSmallMin && windowWidth < windowSmallMax)){
            carouselWidth = 400;
          } else if (windowWidth < windowSmallMin){
            carouselWidth = 200;
          }

          if (carouselItems.length) {
            carouselItems.carouFredSel({
              infinite : false,
              circular: false,
              width : carouselWidth,
              height : carouselHeight,
              align : false,
              auto : false,
              scroll : 1,
              items : {
                  minimum : 1
              },
              prev : {
                button : "#previous"
              },
              next : {
                button : "#next"
              }
            });
          }
        };

        var initPage = function() {
          initCarousel();

          var query = $("#entity-title").html();
          var entityid = $("#entity-id").attr("data-entityid");

          de.ddb.common.search.initHistorySupport(null);

          // Initialize Search results
          getNewSearchResults(query, 0, defaultRowCount, entityid);
        };

        initPage();

        if($("div.external-links ul li.external-link").length > 0) {
          $("div.external-links").removeClass("off");
        }

      }
    });
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  if (jsPageName === "item") {
    var socialMediaManager = new SocialMediaManager();
    de.ddb.common.search.initHistorySupport(null);
    de.ddb.next.search.paginationWidget = new de.ddb.next.PaginationWidget();
    socialMediaManager.integrateSocialMedia();

    //Similar objects
    $(".similar-objects-items").hide();
    $(".similar-objects-header").removeClass("active");

    $(".similar-objects-header").click(function() {
      $(".similar-objects-items").toggle( "slow", function() {
      });

      $(".similar-objects-header").toggleClass("active");
    });

    $('.similar-objects-items').find('li').each(function() {
      new de.ddb.next.search.HovercardInfoItem($(this));
    });

    $('.page-input').removeClass('off');
    $('.page-nonjs').addClass("off");
    de.ddb.next.search.paginationWidget.setPageInputKeyupHandler(
        function(e, element){
          if (e.keyCode === 13) {
            if (/^[0-9]+$/.test(element.value)) {
              var resultPagesCountText = $('.result-pages-count').text();
              var resultPagesCountInt = parseInt(resultPagesCountText.replace(/[^0-9]/g, ''));

              if (parseInt(element.value) <= 0) {
                element.value = 1;
              } else if (parseInt(element.value) > resultPagesCountInt) {
                element.value = $('.result-pages-count').text();
              }
            } else {
              element.value = 1;
            }

            $('.page-input').attr('value', element.value);

            var valueInteger = parseInt(element.value.replace(/[^0-9]/g, ''));
            var paramsArray = [['hitNumber', valueInteger]];
            var newUrl = $.addParamToCurrentUrl(paramsArray);
            window.location = newUrl;
          }
        }
    );
  }

});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  if (jsPageName === "institution") {

    var defaultRowCount = 10;

    var allRowCount = 0;

    var windowWidth = 0;

    var carouselWidth = 1080;

    var carouselHeight = 175;

    var windowLarge = 1185;

    var windowMediumMax = 965;

    var windowMediumMin = 753;

    var windowSmallMax = 661;

    var windowSmallMin = 451;

    var disableCarouselArrows = function() {
      $(".btn-prev").addClass("disabled");
      $(".btn-prev").off('click');
      $(".btn-next").addClass("disabled");
      $(".btn-next").off('click');
    };

    var getNewSearchResults = function(offset, rows, institutionid) {
      $.ajax({
        type : 'GET',
        dataType : 'json',
        async : true,
        url : jsContextPath + '/institution/ajax/highlights?offset=' + offset + '&rows=' + rows + '&institutionid=' + institutionid,
        complete : function(data) {
          var jsonResponse = $.parseJSON(data.responseText);
          var items = $.parseHTML(jsonResponse.html);

          if(items) {
            $(".highlights").removeClass("off");

            //Adds the items from the search to the carousel. Doing this one by one to avoid problems with the carousel.
            $.each(items, function(index, value) {
              if (value.tagName === 'DIV') {
                $("#items").triggerHandler("insertItem", [ value, "end", true ]);
              }
            });
          }

          allRowCount = jsonResponse.resultCount;

          windowWidth = $(window).width();

          if (($(window).width() >= windowLarge && $("#items > div").size() < 6) ||
              (((windowWidth >= windowMediumMax && windowWidth < windowLarge) || (windowWidth >= windowSmallMax && windowWidth < windowMediumMin)) && $("#items > div").size() < 4) ||
              (((windowWidth >= windowMediumMin && windowWidth < windowMediumMax) || (windowWidth >= windowSmallMin && windowWidth < windowSmallMax)) && $("#items > div").size() < 3) ||
              (windowWidth < windowSmallMin && $("#items > div").size() < 2)
             ) {
            disableCarouselArrows();
          }

        }
      });

    };

    var initCarousel = function() {
      $(".btn-prev").removeClass("disabled");
      $(".btn-next").removeClass("disabled");

      var carouselItems = $("#items");

      $('div.carousel').show();

      if ($(".item .caption").length > 0) {
        $(".item .caption").dotdotdot({});
      }

      $(".btn-next").click(
          function() {
            carouselItems.trigger("next", 1);

            var currentLoadItems = $(".preview-item");
            var currentVisibleItems = carouselItems.triggerHandler("currentVisible");
            var numberOfVisibleItems = currentVisibleItems.length;
            var currentPosition = carouselItems.triggerHandler("currentPosition");
            var nextVisbleItem = currentPosition + numberOfVisibleItems;

            if ((nextVisbleItem > (currentLoadItems.length - 1)) && (currentLoadItems.length < allRowCount)) {
              var institutionid = $("#institution-id").data("institutionid");
              //var urlParameters = "?institutionid=" + institutionid + "&offset=" + currentLoadItems.length + "&rows=" + defaultRowCount;
              //var History = window.History;
              //History.pushState("", document.title, decodeURI(urlParameters));

              // Initialize Search results
              getNewSearchResults(currentLoadItems.length, defaultRowCount, institutionid);
            }
          });

      $(".btn-prev").click(function() {
        carouselItems.trigger("prev", 1);
      });

      windowWidth = $(window).width();

      if ((windowWidth >= windowMediumMax && windowWidth < windowLarge) || (windowWidth >= windowSmallMax && windowWidth < windowMediumMin)) {
        carouselWidth = 720;
      } else if ((windowWidth >= windowMediumMin && windowWidth < windowMediumMax) || (windowWidth >= windowSmallMin && windowWidth < windowSmallMax)){
        carouselWidth = 540;
      } else if (windowWidth < windowSmallMin){
        carouselWidth = 180;
      }

      if (carouselItems.length) {
        carouselItems.carouFredSel({
          infinite : false,
          width : carouselWidth,
          height : carouselHeight,
          align : false,
          auto : false,
          scroll : 1,
          items : {
              minimum : 1
          },
          prev : {
            button : ".btn-prev"
          },
          next : {
            button : ".btn-next"
          }
        });
      }
    };

    var initPage = function() {
      var institutionid = $("#institution-id").data("selectedinstitutionid");

      initCarousel();

      // Initialize Search results
      getNewSearchResults(0, defaultRowCount, institutionid);

      var socialMediaManager = new SocialMediaManager();
      de.ddb.common.search.initHistorySupport(null);
      de.ddb.next.search.paginationWidget = new de.ddb.next.PaginationWidget();
      socialMediaManager.integrateSocialMedia();
    };

    initPage();
  };

});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the saved searches page
$(function() {
  if (jsPageName === "savedsearches") {
    $('.page-input').removeClass('off');
    $('.page-nonjs').addClass("off");
    // workaround for ffox + ie click focus - prevents links that load dynamic
    // content to be focussed/active.
    $("a.noclickfocus").live('mouseup', function() {
      $(this).blur();
    });

    $("#send-saved-searches").click(function(event) {
      event.preventDefault();
      $('#sendSavedSearchesModal').modal({
        remote : $(this).attr("href")
      });
    });

    $('.page-filter select').change(function() {
      var url = jsContextPath + "/user/savedsearches?rows=" + this.value;
      var order = getParam("order");
      if (order) {
        url += "&order=" + order;
      }
      window.location.href = url;
      return false;
    });

    $('#checkall').checkAll('#slaves input:checkbox', {
        reportTo : function() {
          var prefix = this.prop('checked') ? 'un' : '';
          this.next().text(prefix + 'check all');
          $('#slaves').trigger('change');
        }
      });

    //Managing "delete" and "copy" buttons
    $('.delete-btn button').addClass('disabled');
    $('#slaves').change(function(){
      if($(this).find(':checkbox:checked').length>0){
        $('.delete-btn button').removeClass('disabled');
      }else{
        $('.delete-btn button').addClass('disabled');
      }
    });

    $('.delete-btn button').click(function(){
      if($(this).hasClass('disabled')){
        return false;
      }
    });

    $('.page-input').keyup(function(e) {
          if (e.keyCode === 13) {
            if (/^[0-9]+$/.test(this.value)) {
              var resultPagesCountText = $('.total-pages').text();
              var resultPagesCountInt = parseInt(resultPagesCountText.replace(/[^0-9]/g, ''));

              if (parseInt(this.value) <= 0) {
                this.value = 1;
              } else if (parseInt(this.value) > resultPagesCountInt) {
                this.value = $('.total-pages').text();
              }
            } else {
              this.value = 1;
            }
            $('.page-input').attr('value', this.value);

            var paramsArray = [['offset', (this.value - 1)
                * getParamWithDefault("rows", 20)], ['rows', getParamWithDefault("rows",
                20)], ['order', getParam("order")]];

            window.location.href = $.addParamToUrl(jsContextPath + "/user/savedsearches/", paramsArray, null, paramsArray, false);
          }
        });

    $('#deleteSavedSearches').submit(function() {
      var selected = [];
      $('#slaves input:checked').each(function() {
        selected.push($(this).val());
      });
      $('#totalNrSelectedObjects').html(selected.length);
      $('#deleteSavedSearchesModal').modal('show');
      $('#id-confirm').click(function() {
        var selected = [];
        $('#slaves input:checked').each(function() {
          selected.push($(this).val());
        });
        var body = {
          ids : selected
        };
        jQuery.ajax({
          type : 'POST',
          contentType : "application/json; charset=utf-8",
          traditional : true,
          url : jsContextPath + "/apis/savedsearches/_delete",
          data : JSON.stringify(body),
          dataType : "json",
          success : function() {
            window.setTimeout('window.location.reload()', 500);
          }
        });
        $('#slaves input:checked').each(function() {
          selected.push($(this).attr('checked', false));
        });
        $('#deleteSavedSearchesModal').modal('hide');
      });
      return false;
    });

    $(".edit-saved-search").click(function() {
      $("#editSavedSearchId").val($(this).attr("id"));
      $("#editSavedSearchTitle").val($(this).attr("data-label"));
      $("#editSavedSearchModal").modal("show");
      $("#editSavedSearchConfirm").click(function() {
        $("#editSavedSearchModal").modal("hide");
        var title = $("#editSavedSearchTitle").val();
        if (title.length > 0) {
          hideError();
          $.ajax({
            type : "PUT",
            contentType : "application/json",
            dataType : "json",
            url : jsContextPath + "/apis/savedsearches/" + $("#editSavedSearchId").val(),
            data : JSON.stringify({
              title : title
            })
          }).done(function() {
          var editAnchor = $("#" + $("#editSavedSearchId").val());
          editAnchor.attr("data-label", title);
          var anchor = editAnchor.prev("a");
          anchor.text(title);
          anchor.attr("title", title);
          });
        } else {
          showError(messages.ddbnext.Savedsearch_Title_Required);
        }
      });
    });
  }
});

function hideError() {
    $('.errors-container').remove();
}

function showError(errorHtml) {
    var errorContainer = ($('.favorites-results-content').find('.errors-container').length > 0) ? $(
        '.favorites-results-content').find('.errors-container') : $(document.createElement('div'));
    var errorIcon = $(document.createElement('i'));
    errorContainer.addClass('errors-container');
    errorContainer.html(errorHtml);
    errorContainer.prepend(errorIcon);

    $('.favorites-results-content').prepend(errorContainer);
}

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  if (jsPageName === "apikey") {

    $("#apikey-delete").click(function(event) {
      event.preventDefault();

      $("#msDeleteApiKey").modal("show");

      $("#delete-apikey-confirm").click(function() {
        $("#msDeleteApiKey").modal("hide");
        $("#apikey-form").submit();
      });

      return false;
    });
  }

});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document)
    .ready(
        function() {

          if (jsPageName === "compare") {

            var socialMediaManager = new SocialMediaManager();
            socialMediaManager.integrateSocialMedia();

            if (navigator.appName.indexOf("Internet Explorer") === -1) {
              if ($(window).width() > 530) {
                mediaQuery = true;
              } else {
                mediaQuery = false;
              }
            }

            var jwPlayerSetup = function(content, poster, firstElement) {
              var w = 440;
              var h = 320;
              var mediaQueryMatches = 1;
              if (firstElement) {
                if ($(".first .binary-viewer").length === 0) {
                  return;
                }
                $(".first .viewer-icon").parent().addClass("off");
                $(".first .binary-viewer").append('<div id="jwplayer-container-first"></div>');

                if (navigator.appName.indexOf("Internet Explorer") === -1) {
                  mediaQueryMatches = mediaQuery;
                }
                if (!mediaQueryMatches) {
                  w = 278;
                  h = 200;
                }
                $.initializeJwPlayer("jwplayer-container-first", content, poster, w, h, function() {
                  if ($.browser.msie && this.getRenderingMode() === "html5") {
                    $(".first .binary-viewer").find("[id*='jwplayer']").each(function() {
                      $(this).attr("unselectable", "on");
                    });
                  }
                }, function() {
                  if ($("#jwplayer-container-first")) {
                    $("#jwplayer-container-first").remove();
                  }
                  if ($(".first #jwplayer-container_wrapper")) {
                    $(".first #jwplayer-container_wrapper").remove();
                  }
                  if ($("#jwplayer-container-first").attr("type") === "application/x-shockwave-flash") {
                    $(".first binary-viewer-flash-upgrade").removeClass("off");
                  } else {
                    $(".first div.binary-viewer-error").removeClass("off");
                  }
                });
              } else {
                if ($(".second .binary-viewer").length === 0) {
                  return;
                }
                $(".second .viewer-icon").parent().addClass("off");
                $(".second .binary-viewer").append('<div id="jwplayer-container-second"></div>');
                if (navigator.appName.indexOf("Internet Explorer") === -1) {
                  mediaQueryMatches = mediaQuery;
                }
                if (!mediaQueryMatches) {
                  w = 278;
                  h = 200;
                }

                $.initializeJwPlayer("jwplayer-container-second", content, poster, w, h, function() {
                  if ($.browser.msie && this.getRenderingMode() === "html5") {
                    $(".second .binary-viewer").find("[id*='jwplayer']").each(function() {
                      $(this).attr("unselectable", "on");
                    });
                  }
                }, function() {
                  if ($("#jwplayer-container-second")) {
                    $("#jwplayer-container-second").remove();
                  }
                  if ($(".second #jwplayer-container_wrapper")) {
                    $(".second #jwplayer-container_wrapper").remove();
                  }
                  if ($("#jwplayer-container-second").attr("type") === "application/x-shockwave-flash") {
                    $(".second binary-viewer-flash-upgrade").removeClass("off");
                  } else {
                    $(".second div.binary-viewer-error").removeClass("off");
                  }
                });
              }
            };

            var updatePreview = function(gallerydiv, position) {
              var a = gallerydiv.find("ul").children('li').eq(0).children('a');
              var previewUri = $(a).attr("href");
              var previewHref = $(a).attr("data-content");
              var type = $(a).attr("data-type");
              var title = $(a).attr("title");
              var title_text = title;
              var title_tooltip = title;
              var author = $(a).attr("data-author");
              var rights = $(a).attr("data-rights");
              var item_title = $(".item-title.first span").text();
              var offset = 0;
              var first = true;
              if (position === "second") {
                first = false;
                item_title = $(".item-title.second span").text();
                offset = $(".first .previews-list li").size();
                $(".second .previews").each(function() {
                  var secondPos = parseInt($(this).siblings().find("a.show-lightbox").attr("data-pos"))+offset;
                  $(this).attr("data-pos", messages.ddbnext.BinaryViewer_ImageCount(secondPos));
                });
              }
              // Title limited to 200 characters
              title_text = $.cutoffStringAtSpace(title, 200);

              // The tooltip of the title should be limited to 270 characters
              title_tooltip = $.cutoffStringAtSpace(title, 270);

              // The text and the tooltip of the author should be limited to 270
              // characters
              author = $.cutoffStringAtSpace(author, 270);

              // The text and the tooltip of the rights should be limited to 270
              // characters
              rights = $.cutoffStringAtSpace(rights, 270);

              // Item title limited to 350 characters
              item_title = $.cutoffStringAtSpace(item_title, 350);

              $.hideErrors();
              if (type === "image") {
                if (first) {
                  $(".first .viewer-icon").parent().addClass("off");
                  $(".first .previews").each(function() {
                    if ($(this).attr("href") === previewHref) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".first .previews-list"));
                    }
                  });
                  $(".first .no-previews").each(function() {
                    if ($(this).find("img").attr("src") === previewUri) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".first .previews-list"));
                    }
                  });
                  $(".first .pdf-previews").each(function() {
                    if ($(this).attr("href") === previewHref) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".first .previews-list"));
                    }
                  });
                } else {
                  $(".second .viewer-icon").parent().addClass("off");
                  $(".second .previews").each(function() {
                    if ($(this).attr("href") === previewHref) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".second .previews-list"));
                    }
                  });
                  $(".second .no-previews").each(function() {
                    if ($(this).find("img").attr("src") === previewUri) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".second .previews-list"));
                    }
                  });
                  $(".second .pdf-previews").each(function() {
                    if ($(this).attr("href") === previewHref) {
                      $(this).parent().removeClass("off");
                      return false;
                    } else {
                      $(this).parent().appendTo($(".second .previews-list"));
                    }
                  });
                }
              } else {
                jwPlayerSetup(previewHref, previewUri, first);
              }
              if (first) {
                $(".first div.binary-title span").text(title_text);
                $(".first div.binary-title").attr("title", title_tooltip);

                $(".first div.binary-author span").text(author);
                $(".first div.binary-author").attr("title", author);

                $(".first div.binary-rights span").text(rights);
                $(".first div.binary-rights").attr("title", rights);

                $(".item-title.first span").text(item_title);
              } else {
                $(".second div.binary-title span").text(title_text);
                $(".second div.binary-title").attr("title", title_tooltip);

                $(".second div.binary-author span").text(author);
                $(".second div.binary-author").attr("title", author);

                $(".second div.binary-rights span").text(rights);
                $(".second div.binary-rights").attr("title", rights);

                $(".item-title.second span").text(item_title);
              }
            };

            $(function() {
              var totImagesFirst = $(".first .gallery-images li").size();
              var totImagesSecond = $(".second .gallery-images li").size();
              var totVideosFirst = $(".first .gallery-videos li").size();
              var totVideosSecond = $(".second .gallery-videos li").size();
              var totAudiosFirst = $(".first .gallery-audios li").size();
              var totAudiosSecond = $(".second .gallery-audios li").size();
              var currentGalleryFirst = "";
              var currentGallerySecond = "";

              if (totImagesFirst > 0) {
                currentGalleryFirst = "images";
              } else if (totVideosFirst > 0) {
                currentGalleryFirst = "videos";
              } else if (totAudiosFirst > 0) {
                currentGalleryFirst = "audios";
              }

              if (totImagesSecond > 0) {
                currentGallerySecond = "images";
              } else if (totVideosSecond > 0) {
                currentGallerySecond = "videos";
              } else if (totAudiosSecond > 0) {
                currentGallerySecond = "audios";
              }
              updatePreview($("div."+currentGalleryFirst+".first"), "first");
              updatePreview($("div."+currentGallerySecond+".second"), "second");
            });

            $(".previews").click(
                    function(e) {
                      e.preventDefault();
                      $.fancybox(
                              $(".previews"),
                              {
                                'padding' : 0,
                                'closeBtn' : false,
                                'overlayShow' : true,
                                'openEffect' : 'fade',
                                'closeEffect' : 'fade',
                                'prevEffect' : 'fade',
                                'nextEffect' : 'fade',
                                'tpl' : {
                                    wrap : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-toolbar">'
                                        + '<span title="' + messages.ddbnext.Close() + '" class="fancybox-toolbar-close" onclick="$.fancybox.close();"></span>'
                                        +'<span class="fancybox-toolbar-title">'
                                        + $("div.binary-title span").text()
                                        + '</span><br><div class="fancybox-pagination"><span></span></div></div>'
                                        + '<div class="fancybox-outer"><div class="fancybox-inner"><div class="fancybox-click-nav" onclick="$.fancybox.prev();"><div class="fancybox-nav"><span title="Previous" class="fancybox-prev" onclick="$.fancybox.prev();"></span></div></div><div class="fancybox-click-nav right" onclick="$.fancybox.next();"><div class="fancybox-nav"><span title="Next" class="fancybox-next" onclick="$.fancybox.next();"></span></div></div></div></div></div></div>',
                                    prev : '',
                                    next : ''
                                },
                                'afterLoad' : function() {
                                  var title = $.cutoffStringAtSpace($(this.element).attr('data-caption'), 150);
                                  var position = $(this.element).attr('data-pos') + ' '
                                      + $(".previews-list li").size();
                                  $("span.fancybox-toolbar-title").text(title);
                                  $("div.fancybox-pagination span").text(position);
                                }
                              });
                      if ($(".previews-list li").size() === 1) {
                        $(".fancybox-pagination").addClass("off");
                        $('.fancybox-click-nav').attr('onclick', "");
                        $('.fancybox-nav').remove();
                      }
                      return false;
                    });
            $(".show-lightbox").click(function(e) {
              e.preventDefault();
              $(".previews").trigger( "click" );
              return false;
            });
          }
        });

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.common.search = de.ddb.common.search || {};

/**
 * Create a json cookie of search parameters to the current context path
 * @param arrayParamVal array of parameters values
 */
de.ddb.common.search.setSearchCookieParameter = function(arrayParamVal) {
  var searchParameters = de.ddb.common.search.readCookie("searchParameters" + jsContextPath);
  var path = '/';

  if (searchParameters != null && searchParameters.length > 0) {
    searchParameters = searchParameters.substring(1, searchParameters.length - 1);
    searchParameters = searchParameters.replace(/\\"/g, '"');
    var json = $.parseJSON(searchParameters);
    $.each(arrayParamVal, function(key, value) {
      if (value[1].constructor === Array) {
        for ( var i = 0; i < value[1].length; i++) {
          if (value[1][i].constructor === String) {
            value[1][i] = encodeURIComponent(value[1][i]).replace(/%20/g, '\+');
          }
        }
      } else if (value[1].constructor === String) {
        value[1] = encodeURIComponent(value[1]).replace(/%20/g, '\+');
      }
      json[value[0]] = value[1];
    });
    document.cookie = "searchParameters" + jsContextPath + "=\"" + JSON.stringify(json).replace(/"/g, '\\"') + "\"" + ';path=' + path;
  }
};

/**
 * Remove a specific value into the search parameter cookie of the current context path.
 * @paramName name of the parameter to remove
 * @value value of the parameter to remove
 */
de.ddb.common.search.removeCookieParameterValue = function(paramName, value) {
  var searchParameters = de.ddb.common.search.readCookie("searchParameters" + jsContextPath);
  var path = '/';
  var valueDecode = decodeURIComponent(value.replace(' ', '+'));

  if (searchParameters != null && searchParameters.length > 0) {
    searchParameters = searchParameters.substring(1, searchParameters.length - 1);
    searchParameters = searchParameters.replace(/\\"/g, '"');
    var json = $.parseJSON(searchParameters);

    $.each(json, function(key, jsonValue) {
      if(key === paramName) {
        if(jsonValue.constructor === Array) {
          $.each(jsonValue, function(arrayKey, arrayValue) {
            if(valueDecode === arrayValue) {
              var index = jsonValue.indexOf(arrayValue);
              jsonValue.splice(index, 1);;
            }
          });
        }else {
          if (decodeURIComponent(value.replace(' ', '+')) === jsonValue) {
            delete json[paramName];
          }
        }
      }
    });
    document.cookie = "searchParameters" + jsContextPath + "=\"" + JSON.stringify(json).replace(/"/g, '\\"') + "\"" + ';path=' + path;
  }
};

/**
 * Remove a whole parameter of the search parameter cookie of the current context path
 * @paramName name of the parameter to remove
 */
de.ddb.common.search.removeSearchCookieParameter = function(paramName) {
  var searchParameters = de.ddb.common.search.readCookie("searchParameters" + jsContextPath);
  var path = '/';
  if (searchParameters != null && searchParameters.length > 0) {
    searchParameters = searchParameters.substring(1, searchParameters.length - 1);
    searchParameters = searchParameters.replace(/\\"/g, '"');
    var json = $.parseJSON(searchParameters);

    //deletes the attribute from the JSON
    delete json[paramName];
    document.cookie = "searchParameters" + jsContextPath + "=\""
        + JSON.stringify(json).replace(/"/g, '\\"') + "\"" + ';path=' + path;
  }
};

/**
 * Return a specific cookie if this exits
 * @name Name of the cookie to read
 */
de.ddb.common.search.readCookie = function(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for ( var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.common.search = de.ddb.common.search || {};

/**
 * Initialize the history support for the search page(s)
 *
 * @param stateManager callback triggered on history state changes
 */
de.ddb.common.search.initHistorySupport = function(stateManager) {
  if (window.history && history.pushState) {
    historyedited = false;
    historySupport = true;
    $(window).bind('popstate', function() {
      if (historyedited) {
        stateManager(location.pathname + location.search);
      }
    });
  } else {
    historySupport = false;
    // Utilized for browser that doesn't supports pushState.
    // It will be used as reference URL for all the ajax actions
    globalUrl = location.search.substring(1);
  }
};

/**
 * Adds new paths to the history
 *
 * @param path the path to add to the history
 */
de.ddb.common.search.historyManager = function(path) {
  if (historySupport) {
    window.history.pushState({
      path : path
    }, '', path);
    historyedited = true;
  } else {
    globalUrl = (path.indexOf('?') > -1) ? path.split('?')[1] : path;
    window.location = path;
  }
};

/**
 * Gets all request params from the window url that starts with facetValues[]
 */
de.ddb.common.search.getFacetValuesFromUrl = function() {
  var facetValuesFromUrl = de.ddb.common.search.getUrlVar('facetValues%5B%5D');
  if (facetValuesFromUrl == null) {
    facetValuesFromUrl = de.ddb.common.search.getUrlVar('facetValues[]');
  }

  return facetValuesFromUrl;
};

/**
 * Adds a new facetValue to the facetValues[] params of the window url.
 * An offset param is added to this list too. So a new search request can be performed based on the updated facetValues[] params
 *
 * Returns an array with request params for a new facet based search
 */
de.ddb.common.search.addFacetValueToParams = function(facetField, facetValue) {
  var paramsFacetValues = de.ddb.common.search.getFacetValuesFromUrl();

  //The facet values will be stored in a two dimensional Array ["facetValues[]",['type_fctyDmediatype_003','time_begin_fct=1014', 'time_end_fct=2014',]]
  var paramsArray = null;

  if (paramsFacetValues) {
    $.each(paramsFacetValues, function(key, value) {
      paramsFacetValues[key] = decodeURIComponent(value.replace(/\+/g, '%20'));
    });
    paramsFacetValues.push(facetField + '=' + facetValue);
    paramsArray = [['facetValues[]', paramsFacetValues]];
  } else {
    paramsArray = [['facetValues[]', facetField + '=' + facetValue]];
  }

  paramsArray.push(['offset', 0]);

  return paramsArray;
};

/**
 * Returns an array with url params that match the given name
 */
de.ddb.common.search.getUrlVar = function(name) {
  return de.ddb.common.search.getUrlVars()[name];
};

/**
 * Returns an array with the url params
 */
de.ddb.common.search.getUrlVars = function() {
  var vars = {}, hash;
  var hashes = (historySupport) ? window.location.href.slice(
      window.location.href.indexOf('?') + 1).split('&') : globalUrl.split('&');
  for ( var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    if (!Object.prototype.hasOwnProperty.call(vars, hash[0])) {
      vars[hash[0]] = [];
    }
    vars[hash[0]].push(hash[1]);
  }
  return vars;
};

de.ddb.common.search.getParameterByName = function (name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

de.ddb.next.search.getLocalizedFacetValue = function(facetField, facetValue) {

  if (facetField === 'affiliate_fct_role' || facetField === 'keywords_fct' || facetField === 'place_fct' || facetField === 'provider_fct' || facetField === 'state_fct') {
    return facetValue.toString();
  }
  else if (facetField === 'person_name_fct' || facetField === 'person_place_fct' || facetField === 'person_occupation_fct') {
    return facetValue.toString();
  }
  else if (facetField === 'person_gender_fct') {
    return messages.ddbnext['person_gender_fct_' + facetValue];
  }
  else if (facetField === 'type_fct') {
    return messages.ddbnext['type_fct_' + facetValue];
  }
  else if (facetField === 'language_fct') {
    return messages.ddbnext['language_fct_' + facetValue];
  }
  else if (facetField === 'sector_fct') {
    return messages.ddbnext['sector_fct_' + facetValue];
  }
  else if (facetField === 'license_group') {
    return messages.ddbnext['license_group_' + facetValue];
  }
  else if (facetField === 'license') {
    //As the language keys for licenses are urls they must be also transformable to valid javascript variable names. So the license keys are url encoded
    var encodedFacetValue = encodeURIComponent(facetValue);
    encodedFacetValue = encodedFacetValue.replace(/\./g,'%2E');//the dot character must be manually URL encoded!
    encodedFacetValue = encodedFacetValue.replace(/%/g,''); // JAWR doesn't like % in a property name
    encodedFacetValue = encodedFacetValue.replace(/-/g,''); // JAWR doesn't like - in a property name
    return messages.ddbnext['license_' + encodedFacetValue];
  }
  return '';
};

de.ddb.next.search.getLocalizedFacetField = function(facetField) {
  return messages.ddbnext['facet_' + facetField];
};
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

//This patter searches for _1_ which is the divider between literal and role
de.ddb.next.search.literalDividerPattern = /_[0-9]+_/;

/**
 * Returns a role without its literal part.
 *
 * If a concrete role looks like this
 * "Cotta_1_affiliate_fct_involved"
 *
 * The method return
 * "_1_affiliate_fct_involved"
 *
 * Roles have the following structure:
 * <Wert des Literals>_<Stufe der Hierarchie der Rolle>_<Name der Facette>_<Name der ersten Rollen-Ebene>_..._<Name der n-ten Rollen-Ebene>
 *
 * If the divider pattern does not match, return <code>null</code>
 */
de.ddb.next.search.getRoleWithoutLiteral = function(role) {
  var roleWithoutLiteral = null;

  //Check if the role value matches the pattern
  var divider = de.ddb.next.search.literalDividerPattern.exec(role);
  if (divider) {
    var indexOfDivider = role.indexOf(divider);
    roleWithoutLiteral = role.substring(indexOfDivider);
  }

  return roleWithoutLiteral;
};

/**
 * Returns the literal part of a role
 *
 * If a concrete role looks like this
 * "Cotta_1_affiliate_fct_involved"
 *
 * The method return
 * "Cotta"
 *
 * Roles have the following structure:
 * <Wert des Literals>_<Stufe der Hierarchie der Rolle>_<Name der Facette>_<Name der ersten Rollen-Ebene>_..._<Name der n-ten Rollen-Ebene>
 *
 * If the divider pattern does not match, return <code>null</code>
 */
de.ddb.next.search.getLiteralFromRole = function(role) {
  var literal = null;

  //Check if the role value matches the pattern
  var divider = de.ddb.next.search.literalDividerPattern.exec(role);
  if (divider) {
    var split = role.split(divider);
    literal = split[0];
  }
  return literal;
};

/**
 * Returns the role without literal and hierarchie number
 *
 * If a concrete role looks like this
 * "Cotta_1_affiliate_fct_involved"
 *
 * The method return
 * "affiliate_fct_involved"
 *
 * Roles have the following structure:
 * <Wert des Literals>_<Stufe der Hierarchie der Rolle>_<Name der Facette>_<Name der ersten Rollen-Ebene>_..._<Name der n-ten Rollen-Ebene>
 *
 * If the divider pattern does not match, return <code>null</code>
 */
de.ddb.next.search.getRoleWithoutLiteralAndHierarchieNumber = function(role) {
  var splittedRole = null;

  //Check if the role value matches the pattern
  var divider = de.ddb.next.search.literalDividerPattern.exec(role);
  if (divider) {
    var split = role.split(divider);
    splittedRole = split[1];
  }
  return splittedRole;
};

/**
 *
 */
de.ddb.next.search.isRole  = function(value) {
  //Check if the role value matches the pattern
  var isRole = de.ddb.next.search.literalDividerPattern.test(value);
  return isRole;
};
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};


//#############################################################################################
//TimeSpan Object
//#############################################################################################
/**
 * TimeSpan Constructor Function
 */
de.ddb.next.search.TimeSpan = function(fromDay,fromMonth, fromYear, tillDay, tillMonth, tillYear) {
  this.fromDay = fromDay;
  this.fromMonth = fromMonth;
  this.fromYear = fromYear;
  this.tillDay = tillDay;
  this.tillMonth = tillMonth;
  this.tillYear = tillYear;
};

$.extend(de.ddb.next.search.TimeSpan.prototype, {
  print : function() {
    var currObjInstance = this;

    console.log("fromDay: " + currObjInstance.fromDay);
    console.log("from-month: " + currObjInstance.fromMonth);
    console.log("fromYear: " + currObjInstance.fromYear);
    console.log("tillDay: " + currObjInstance.tillDay);
    console.log("tillMonth: " + currObjInstance.tillMonth);
    console.log("tillYear: " + currObjInstance.tillYear);
  },

  /**
   * A from date needs at least a value for the year.
   * @returns <code>false<code> if no fromYear is set
   */
  hasFromDate: function(){
    var currObjInstance = this;
    return currObjInstance.fromYear !== null;
  },

  /**
   * A till date needs at least a value for the year.
   * @returns <code>false<code> if no tillYear is set
   */
  hasTillDate: function(){
    var currObjInstance = this;
    return currObjInstance.tillYear !== null;
  },

  /**
   * At least the year must be existing. The method completes missing fromDay and fromMonth values.
   */
  completeFromDate: function(){
    var currObjInstance = this;

    //If no year is set -> return
    if (!currObjInstance.hasFromDate()) {
      return;
    }
    //if no day is set fromDay to 1
    if (currObjInstance.fromDay === null) {
      currObjInstance.fromDay = 1;
    }

    //id no month is set fromMonth to 1
    if (currObjInstance.fromMonth === null) {
      currObjInstance.fromMonth = 1;
    }
  },

  /**
   * At least the year must be existing. The method complete missing tillDay and tillMonth values.
   */
  completeTillDate: function(){
    var currObjInstance = this;

    //If no year is set -> return
    if (!currObjInstance.hasTillDate()) {
      return;
    }

    //id no month is set tillMonth to 12
    if (currObjInstance.tillMonth === null) {
      currObjInstance.tillMonth = 12;
    }

    //if no day is set tillDay to ???
    if (currObjInstance.tillDay === null) {
      var days_in_month = [31,28,31,30,31,30,31,31,30,31,30,31];

      if(currObjInstance.tillYear %4 === 0 && currObjInstance.tillYear !== 1900)
      {
         days_in_month[1]=29;
      }
      currObjInstance.tillDay = days_in_month[currObjInstance.tillMonth-1];
    }

    return true;
  },

  /**
   * Formats the from date in this form:
   * <code>G-yyyy-MM-dd</code>
   *
   * <ul>
   *   <li>G: is the era BC or AD</li>
   *   <li>y: a year digit</li>
   *   <li>M: a month digit</li>
   *   <li>d: a day digit</li>
   * </ul>
   */
  formatFromDate: function(){
    var currObjInstance = this;
    var date = null;

    //If no year is set -> return
    if (!currObjInstance.hasFromDate()) {
      return;
    }

    currObjInstance.completeFromDate();

    if(currObjInstance.fromYear >= 0) {
     date = "AD-" + currObjInstance.fromYear + "-" + currObjInstance.fromMonth + "-" + currObjInstance.fromDay;
    }
    else {
      //For BC we can reuse the minus sign of the number as separator in the date.
      date = "BC" + currObjInstance.fromYear + "-" + currObjInstance.fromMonth + "-" + currObjInstance.fromDay;
    }
    return date;

  },

  /**
   * Formats the till date in this form:
   * <code>G-yyyy-MM-dd</code>
   *
   * <ul>
   *   <li>G: is the era BC or AD</li>
   *   <li>y: a year digit</li>
   *   <li>M: a month digit</li>
   *   <li>d: a day digit</li>
   * </ul>
   */
  formatTillDate: function(){
    var currObjInstance = this;
    var date = null;

    //If no year is set -> return
    if (!currObjInstance.hasTillDate()) {
      return;
    }

    currObjInstance.completeTillDate();

    if(currObjInstance.tillYear >= 0) {
      date = "AD-" + currObjInstance.tillYear + "-" + currObjInstance.tillMonth + "-" + currObjInstance.tillDay;
     }
     else {
       //For BC we can reuse the minus sign of the number as separator in the date.
       date = "BC" + currObjInstance.tillYear + "-" + currObjInstance.tillMonth + "-" + currObjInstance.tillDay;
     }
    return date;

  },

  /**
   * Setter for the from Date
   */
  setFromDate: function(date){
    var currObjInstance = this;

    currObjInstance.fromDay =  date.getDate();
    currObjInstance.fromMonth = date.getMonth() + 1;
    currObjInstance.fromYear = date.getFullYear();
  },

  /**
   * Setter for the from Date
   */
  setTillDate: function(date){
    var currObjInstance = this;

    currObjInstance.tillDay = date.getDate();
    currObjInstance.tillMonth = date.getMonth() + 1;
    currObjInstance.tillYear = date.getFullYear();
  },

  /**
   * Clear parameter from From Date, because it doesn't find in the URL
   */
  clearFromDate: function(){
    this.fromDay = null;
    this.fromMonth = null;
    this.fromYear = null;
  },

  /**
   * Clear parameter from Till Date, because it doesn't find in the URL
   */
  clearTillDate: function(){
    this.tillDay = null;
    this.tillMonth = null;
    this.tillYear = null;
  }

});


//#############################################################################################
//TimeFacet Object
//#############################################################################################
/**
 * TimeFacet Constructor Function
 */
de.ddb.next.search.TimeFacet = function(facetsManager) {
  this.init(facetsManager);
};

/**
 * TimeFacet prototype extension with JQuery
 */
$.extend(de.ddb.next.search.TimeFacet.prototype, {
  /* TimeFacet attributes  */
  facetsManager: null,
  opened: false,
  added: false,
  selectedTimeSpan: null,
  localisation : "unscharf",

  /**
   * Initialize the TimeFacet object
   */
  init : function(facetsManager) {
    var currObjInstance = this;

    currObjInstance.facetsManager = facetsManager;
    currObjInstance.selectedTimeSpan = new de.ddb.next.search.TimeSpan();

    //Remove the off class for Non Javascript
    $(".time-facet").removeClass("off");

    //During initialisation hide the timespan form and disable the form elements
    $("#timespan-form").hide();

    // Click handler for Opening|Closing the time facet
    $(".time-facet a.h3").click(function(event) {
      event.preventDefault();
      currObjInstance.toggleForm();
    });

    // Click handler for adding a new TimeSpan
    $("#add-timespan").click(function(event) {
      event.preventDefault();
      if(!$(this).hasClass('disabled')){
        currObjInstance.assignTimeSpan(true);
      }
    });

    // Click handler for reseting the time facet
    $("#reset-timefacet").click(function(event) {
      event.preventDefault();
      if(!$(this).hasClass('disabled')){
        currObjInstance.reset();
      }
    });

    $("#from-year").change(function(){
      if ($("#from-year").val()) {
        $("#add-timespan").removeClass('disabled');
        $('#reset-timefacet').removeClass('disabled');
        $('#reset-timefacet').addClass('grey');
      }
    });

    $("#till-year").change(function(){
      if ($("#till-year").val()) {
        $("#add-timespan").removeClass('disabled');
        $('#reset-timefacet').removeClass('disabled');
        $('#reset-timefacet').addClass('grey');
      }
    });
  },

  /**
   * This method initialize the TimeFacet widget based on the window url.
   * It search for facetValues[] 'begin_time' and 'end_time'. Contained values will be set into the form.
   */
  initOnLoad: function() {
    var currObjInstance = this;

    //Asynchronously calculate the dates for the form! Continue the initialization in the success part
    currObjInstance.calculateFacetDates();
  },

  /**
   * Converts a string of the form <code>G-yyyy-MM-dd</code> to a Javascript Date object.
   */
  convertServerDateToJsDate: function(serverDate) {
    var date = null;

    if(serverDate) {
      var year = null;
      var dateArray = serverDate.split("-");

      if(dateArray[0].indexOf("BC") !== -1){
        year = "-" + dateArray[1];
      }
      else {
        year = dateArray[1];
      }

      //Months starts in Javascript with 0!
      //To work with years between 1-99
      date = new Date();
      date.setFullYear(year,dateArray[2] -1,dateArray[3]);
    }
    return date;

  },

  /**
  * This method initialize the TimeFacet form based on the given beginDate, endDate and calculation method (excact/fuzzy)
  */
  initFormOnLoad: function(beginDateStr, endDateStr, exact) {
    var currObjInstance = this;

    var beginDate = currObjInstance.convertServerDateToJsDate(beginDateStr);
    var endDate = currObjInstance.convertServerDateToJsDate(endDateStr);

    $(".time-facet").removeClass("off");

    if(exact) {
      $("#limitation-exact").prop("checked", true);
    }
    else {
      $("#limitation-fuzzy").prop("checked", true);
    }

    if (beginDate) {
      currObjInstance.selectedTimeSpan.setFromDate(beginDate);
    } else {
      currObjInstance.selectedTimeSpan.clearFromDate();
    }

    if (endDate) {
      currObjInstance.selectedTimeSpan.setTillDate(endDate);
    } else {
      currObjInstance.selectedTimeSpan.clearTillDate();
    }

    //Initialize the form
    if (beginDate || endDate) {
      currObjInstance.updateTimeSpanForm();
      currObjInstance.openForm();
      $("#add-timespan").removeClass('disabled');
      $('#reset-timefacet').removeClass('disabled');
      $('#reset-timefacet').addClass('grey');
    } else {
      //Close the form if no values has been found.
      currObjInstance.closeForm();
    }
  },

  /**
   * Parses the browser url for time facet values.
   */
   parseWindowsUrl: function() {
     var dividerPattern = /\-?[0-9]+/;
     var beginDays = null;
     var endDays = null;
     var exact = null;

     // Search for time facetValues[] in the window url
     var facetValuesFromUrl = de.ddb.common.search.getFacetValuesFromUrl();

     if (facetValuesFromUrl) {
       $.each(facetValuesFromUrl, function(key) {

         var decodedValue = decodeURIComponent(facetValuesFromUrl[key]);
         if ((facetValuesFromUrl[key].indexOf("begin_time") === 0)) {
           var split = dividerPattern.exec(decodedValue);

           //Unscharf/Fuzzy
           if(decodedValue.substr(12,1) === '*'){
             endDays = split[0];
             exact = false;
           }else {//Genau/Exactly
             beginDays = split[0];
             exact = true;
           }
         }

         if ((facetValuesFromUrl[key].indexOf("end_time") === 0)) {

           //Unscharf/Fuzzy
           if(decodedValue.indexOf('TO+*') !== -1){
             split = dividerPattern.exec(decodedValue);
             beginDays = split[0];
             exact = false;
           }else {//Genau/Exactly
             var indexOfTo = decodedValue.indexOf('TO');
             var endSubstring = decodedValue.substr(indexOfTo);
             split = dividerPattern.exec(endSubstring);
             endDays = split[0];
             exact = true;
           }
         }
       });
     }

     //Return an object containing the parsed information
     return {
       beginDays:beginDays,
       endDays:endDays,
       exact:exact
       };
   },

  /**
   * This method is toggles between the open and closed state of the timefacet form
   */
  toggleForm : function() {
    var currObjInstance = this;

    if (!currObjInstance.opened) {
      currObjInstance.openForm();
    } else {
      //Prevent from closing if a timespan has been selected
      if (!currObjInstance.added) {
        currObjInstance.closeForm();
      }
    }
  },

  /**
   * This method opens the timefacet form
   */
  openForm : function() {
    var currObjInstance = this;
    var timespanFormDiv = $("#timespan-form");
    var timeFacetDiv = $(".time-facet");

    currObjInstance.opened = true;
    timespanFormDiv.fadeIn('fast');
    timeFacetDiv.addClass('active');
  },

  /**
   * This method closes the timefacet form
   */
  closeForm : function() {
    var currObjInstance = this;
    var timespanFormDiv = $("#timespan-form");
    var timeFacetDiv = $(".time-facet");

    currObjInstance.opened = false;
    timespanFormDiv.fadeOut('fast');
    timeFacetDiv.removeClass('active');
  },

  /**
   * Close the time facet form when the user clicks outside of it.
   */
  manageOutsideClicks : function(thisInstance) {
    $(document).mouseup(function(e) {
      var container = $(".time-facet");
      if(!$(e.target).parents(container).is(container) && thisInstance.opened) {
        thisInstance.closeForm();
      }
    });
  },

  /**
   * Checks the values of the form and adds a new timespan.
   */
  assignTimeSpan : function(checkYears) {
    var currObjInstance = this;

    de.ddb.next.search.hideError();

    //Retrieve the values from the timespan form
    var fromDayValue = $("#from-day").val() !== "" ? $("#from-day").val() : null;
    var fromMonthValue = $("#from-month").val() !== "" ? $("#from-month").val() : null;
    var fromYearValue = $("#from-year").val() !== "" ? $("#from-year").val() : null;

    var tillDayValue = $("#till-day").val() !== "" ? $("#till-day").val() : null;
    var tillMonthValue = $("#till-month").val() !== "" ? $("#till-month").val() : null;
    var tillYearValue = $("#till-year").val() !== "" ? $("#till-year").val() : null;

    if (checkYears && fromYearValue === null && tillYearValue === null) {
      de.ddb.next.search.showError("Bitte geben Sie in eines der Zeit-Eingabefelder 'Von' oder 'Bis' eine Jahreszahl ein.");
      return;
    }

    var newTimeSpan = new de.ddb.next.search.TimeSpan(fromDayValue, fromMonthValue, fromYearValue, tillDayValue, tillMonthValue, tillYearValue);
    currObjInstance.selectedTimeSpan = newTimeSpan;
    currObjInstance.added = true;

    currObjInstance.selectedTimeSpan.completeFromDate();
    currObjInstance.selectedTimeSpan.completeTillDate();

    currObjInstance.updateTimeSpanForm();

    currObjInstance.calculateFacetDays();
  },

  /**
   * Resets the input elements of the form.
   * The window URL is reseted by calling assignTimeSpan() which does this implicitly
   */
  reset : function() {
    var currObjInstance = this;

    //Hide error if available
    de.ddb.next.search.hideError();

    //Set an empty TimeSpan
    var newTimeSpan = new de.ddb.next.search.TimeSpan();
    currObjInstance.selectedTimeSpan = newTimeSpan;

    //reset the GUI
    currObjInstance.updateTimeSpanForm();

    //reset buton Apply
    $("#add-timespan").addClass('disabled');
    $('#reset-timefacet').removeClass('grey');
    $('#reset-timefacet').addClass('disabled');

    //asign the timeSpan to reset also the window url etc!
    currObjInstance.assignTimeSpan(false);

    currObjInstance.added = false;
  },

  /**
   * Updates the form fields
   */
  updateTimeSpanForm: function() {
    var currObjInstance = this;

    $("#from-year").val(currObjInstance.selectedTimeSpan.fromYear);
    if($("#from-year").val()) {
      $("#from-day").val(currObjInstance.selectedTimeSpan.fromDay);
      $("#from-month").val(currObjInstance.selectedTimeSpan.fromMonth);
    } else {
      $("#from-day").val(null);
      $("#from-month").val(null);
    }

    $("#till-year").val(currObjInstance.selectedTimeSpan.tillYear);
    if($("#till-year").val()) {
      $("#till-day").val(currObjInstance.selectedTimeSpan.tillDay);
      $("#till-month").val(currObjInstance.selectedTimeSpan.tillMonth);
    } else {
      $("#till-day").val(null);
      $("#till-month").val(null);
    }
  },

  /**
   * Updates the browser URL and performs a new search with the given time facet values.
   */
  updateWindowUrl: function(daysFrom, daysTill) {
    var paramsArray = null;
    var selectedFacetValues = [];

    daysFrom = daysFrom || '*';
    daysTill = daysTill || '*';

    // Update Url (We want to keep the already selected facet values, but throw away the offset etc.)
    var facetValuesFromUrl = de.ddb.common.search.getFacetValuesFromUrl();

    if (facetValuesFromUrl) {
      $.each(facetValuesFromUrl, function(key, value) {
        //Only add facetValues that do not start with "begin_time" or "end_time"
        if ((facetValuesFromUrl[key].indexOf("begin_time") === -1) && (facetValuesFromUrl[key].indexOf("end_time") === -1)) {
          selectedFacetValues.push(decodeURIComponent(value.replace(/\+/g, '%20')));
        }
      });
    }

    //Genau
    if($("#limitation-exact").is(":checked")) {
      if(daysFrom !== '*') {
        selectedFacetValues.push('begin_time=[' + daysFrom + ' TO ' + daysTill + ']');
      }
      if(daysTill !== '*') {
        selectedFacetValues.push('end_time=[' + daysFrom + ' TO ' + daysTill + ']');
      }

    }
    else{//Unscharf
      if(daysTill !== '*') {
        selectedFacetValues.push('begin_time=[* TO '+ daysTill + ']');
      }
      if(daysFrom !== '*') {
        selectedFacetValues.push('end_time=[' + daysFrom + ' TO *]');
      }
    }

    //The facet values will be stored in a two dimensional Array ["facetValues[]",['type_fctyDmediatype_003','time_begin_fct=1014', 'time_end_fct=2014',]]
    paramsArray = [['facetValues[]', selectedFacetValues]];

    //Perform the search with offset 0
    paramsArray.push(['offset', 0]);

    var newUrl = $.addParamToCurrentUrl(paramsArray);

    de.ddb.next.search.fetchResultsList(newUrl, function() {});
  },


  /**
   * Converts the Date representation of the time facet values to a backend related Day represenation.
   * The method works with the formated values of the fromDate and tillDate from the inner model.
   *
   * The calculation itself is performed on the frontsend server and triggered by an AJAX request:
   * http://localhost:8080/ddb-next/facets/calculateTimeFacetDays?dateFrom=AD-1000-1-1&dateTill=AD-2000-12-31
   *
   * After a successful response the window url is updated and a new search is performed.
   *
   * The AJAX call must be async, otherwise the browser might freeze!
   */
  calculateFacetDays: function() {
    var currObjInstance = this;

    var url = jsContextPath + '/facets/calculateTimeFacetDays' + '?';
    if (currObjInstance.selectedTimeSpan.hasFromDate()) {
      url += 'dateFrom='+ currObjInstance.selectedTimeSpan.formatFromDate();
    }

    if (currObjInstance.selectedTimeSpan.hasTillDate()) {
      if (url.indexOf("dateFrom") !== -1) {
        url += "&";
      }

      url += 'dateTill=' + currObjInstance.selectedTimeSpan.formatTillDate();
    }
    $.ajax({
      type : 'GET',
      dataType : 'json',
      async : true,
      url : url,
      complete : function(data) {
        var parsedResponse = jQuery.parseJSON(data.responseText);
        currObjInstance.updateWindowUrl(parsedResponse.daysFrom, parsedResponse.daysTill);
      }
    });
  },

  /**
   * Converts the Day representation of the time facet values (stored in the window url) to Date formates values which has the form:
   * <code>G-yyyy-MM-dd</code>
   *
   * <ul>
   *   <li>G: is the era BC or AD</li>
   *   <li>y: a year jdigit</li>
   *   <li>M: a month digit</li>
   *   <li>d: a day digit</li>
   * </ul>
   *
   * The calculation itself is done on the frontsend server and performed with an AJAX request which looks like the following:
   * http://localhost:8080/ddb-next/facets/calculateTimeFacetDates?beginDays=364884&endDays=730486
   *
   * After a successful response, the time facet form is updated with the response values.
   *
   * The AJAX call must be async, otherwise the browser might freeze!
   */
  calculateFacetDates: function() {
    var currObjInstance = this;

    // Search for time facet parameter in the window url
    var urlValues = currObjInstance.parseWindowsUrl();

    var url = jsContextPath + '/facets/calculateTimeFacetDates' + '?';
    if (urlValues.beginDays) {
      url += 'beginDays='+ urlValues.beginDays;
    }

    if (urlValues.endDays) {
      if (url.indexOf("beginDays") !== -1) {
        url += "&";
      }

      url += 'endDays=' + urlValues.endDays;
    }

    $.ajax({
      type : 'GET',
      dataType : 'json',
      async : true,
      url : url,
      complete : function(data) {
        var parsedResponse = jQuery.parseJSON(data.responseText);

        //Continue with initializing the form
        currObjInstance.initFormOnLoad(parsedResponse.dateFrom, parsedResponse.dateTill, urlValues.exact);
      }
    });
  }

});// End extend TimeFacet prototype

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Facets Manager
 *
 * The main intend of this object is to - retrieving facet data via ajax -
 * handling all events coming from the DOM tree (add/remove facets, show next
 * page etc.) - updating the facets values in the browser url. This is
 * important for navigating with back/next button of the browser - triggering
 * the flyoutWidget to render the facets
 *
 * Do all rendering in the flyoutWidget!
 *
 * Do not make synchronous AJAX calls in this class. Otherwise the GUI might freeze!
 */
de.ddb.next.search.FacetsManager = function(fetchResultsList, category, path) {
  this.fetchResultsList = fetchResultsList;

  //Category is a special facet for defining a document as an Institution ("Institution") or document ("Kultur")
  this.category = category;

  //search and entity facets use different paths
  this.path = path;

  this.init();
};

/**
 * Extend the prototyp of the FacetsManager with jQuery
 */
$.extend(de.ddb.next.search.FacetsManager.prototype, {
  timeFacet: null,
  connectedflyoutWidget : null,
  currentOffset : 0,
  currentRows : -1, // all facets
  currentFacetField : null,
  currentFacetValuesSelected : [],
  currentFacetValuesNotSelected : [],
  allFacets : null,
  currentPage : 1,
  searchFacetValuesTimeout : 0,
  errorCaught : false,
  keyCode : {
    ALT : 18,
    BACKSPACE : 8,
    CAPS_LOCK : 20,
    COMMA : 188,
    CONTROL : 17,
    DELETE : 46,
    DOWN : 40,
    END : 35,
    ENTER : 13,
    ESCAPE : 27,
    HOME : 36,
    INSERT : 45,
    LEFT : 37,
    NUMPAD_ADD : 107,
    NUMPAD_DECIMAL : 110,
    NUMPAD_DIVIDE : 111,
    NUMPAD_ENTER : 108,
    NUMPAD_MULTIPLY : 106,
    NUMPAD_SUBTRACT : 109,
    PAGE_DOWN : 34,
    PAGE_UP : 33,
    PERIOD : 190,
    RIGHT : 39,
    SHIFT : 16,
    SPACE : 32,
    TAB : 9,
    UP : 38
  },

  /**
   * Initialize the new instance.
   */
  init : function() {
    var currObjInstance = this;
    currObjInstance.timeFacet = new de.ddb.next.search.TimeFacet(currObjInstance);

    $(".js.facets-list").removeClass("off");
  },

  /**
   * Makes an AJAX request to fetch the role values for the currently selected facet field and value
   *
   * @param facetValueContainer: The DOM element
   * @param facetValue: The selected (main) facet value
   * @param facetField: The selected facet field. E.g: "affiliate_fct"
   * @param role: A specific role. E.g: "_1_affiliate_fct_involved"
   */
  fetchRoleFacetValues : function(facetValueContainer, facetValue, facetField) {
    var currObjInstance = this;

    var oldParams = de.ddb.common.search.getUrlVars();
    var fctValues = '';
    var isThumbnailFiltered = '';
    var queryParam = '&query=' + facetValue;

    //Looking for existing facetvalues[] in the window url parameters
    if (oldParams['facetValues%5B%5D']) {
      $.each(oldParams['facetValues%5B%5D'], function(key, value) {
        fctValues = (value.indexOf(currObjInstance.currentFacetField) >= 0) ? fctValues : fctValues + '&facetValues%5B%5D=' + value;
      });
    }
    if (oldParams['isThumbnailFiltered'] && String(oldParams['isThumbnailFiltered']) === 'false') {
      isThumbnailFiltered = '&isThumbnailFiltered=false';
    }

    if (this.category) {
      fctValues += '&facetValues%5B%5D=category%3D' + currObjInstance.category;
    }

    var url = jsContextPath + '/rolefacets' + '?name=' + facetField + '&facetValues%5B%5D=' + facetField + "%3D" + facetValue + '&searchQuery='
    + oldParams['query'] + queryParam + fctValues + isThumbnailFiltered
    + '&offset=' + this.currentOffset + '&rows=' + this.currentRows;

    var request = $.ajax({
      type : 'GET',
      dataType : 'json',
      async : true,
      url : url,
      complete : function() {
        var parsedResponse = jQuery.parseJSON(request.responseText);
        if (parsedResponse.values.length > 0) {
          currObjInstance.connectedflyoutWidget.renderRoleValues(facetValueContainer, facetValue, facetField, parsedResponse);
        }
      }
    });
  },

  /**
   * Makes an AJAX request to fetch the facet values for the currently selected facet field
   */
  fetchFacetValues : function(flyoutWidget, facetQuery) {
    if (flyoutWidget != null) {
      this.connectedflyoutWidget = flyoutWidget;
    }
    var oldParams = de.ddb.common.search.getUrlVars();
    var searchQueryParam = '';
    var currObjInstance = this;
    var fctValues = '';
    var isThumbnailFiltered = '';
    var facetQueryParam = '';

    //Looking for existing facetvalues[] in the window url parameters
    if (oldParams['facetValues%5B%5D']) {
      $.each(oldParams['facetValues%5B%5D'], function(key, value) {
        var eachFacetName = value.split('%3D')[0];
        fctValues = (eachFacetName === currObjInstance.currentFacetField) ? fctValues
            : fctValues + '&facetValues%5B%5D=' + value;
      });
    }
    if (oldParams['isThumbnailFiltered'] && String(oldParams['isThumbnailFiltered']) === 'false') {
      isThumbnailFiltered = '&isThumbnailFiltered=false';
    }

    if (oldParams['query']) {
      searchQueryParam = '&searchQuery=' + oldParams['query'];
    }

    if (facetQuery) {
      facetQuery = encodeURIComponent(facetQuery);
      facetQueryParam = '&query=' + facetQuery;
    }

    if (this.category) {
      fctValues += '&facetValues%5B%5D=category%3D' + currObjInstance.category;
    }
    this.connectedflyoutWidget.renderFacetLoader();
    $.ajax({
      type : 'GET',
      dataType : 'json',
      async : true,
      url : jsContextPath + currObjInstance.path + '?name=' + currObjInstance.currentFacetField + searchQueryParam + facetQueryParam + fctValues + isThumbnailFiltered
          + '&offset=' + this.currentOffset + '&rows=' + this.currentRows,
      complete : function(data) {
        var parsedResponse = jQuery.parseJSON(data.responseText);
        // Initialization of currentFacetValuesSelected /
        // currentFacetValuesNotSelected
        currObjInstance.initializeFacetValuesStructures(parsedResponse.values);
        currObjInstance.connectedflyoutWidget.initializeFacetValues(parsedResponse.type,
            currObjInstance.currentFacetValuesNotSelected);
      }
    });
  },

  /**
   * Initialize the structures for the pagination logic inside facets flyoutWidget
   */
  initPagination : function() {
    this.currentPage = 1;
    this.currentOffset = 0;
    var currObjInstance = this;
    if (this.currentFacetValuesNotSelected.length > 10) {
      this.connectedflyoutWidget.paginationLiPrev.click(function(e) {
        e.preventDefault();
        currObjInstance.goPrevPage();
        return false;
      });
      this.connectedflyoutWidget.paginationLiNext.click(function(e) {
        e.preventDefault();
        currObjInstance.goNextPage();
        return false;
      });
      this.connectedflyoutWidget.paginationLiNext.removeClass('off');
    }
    this.connectedflyoutWidget.setFacetValuesPage(this.currentPage);
  },

  /**
   * Initialize the FacetValues structures
   */
  initializeFacetValuesStructures : function(responseFacetValues) {
    // LeftBody will not exists on the first opening of the flyout
    if (this.connectedflyoutWidget.facetLeftContainer) {
      var currObjInstance = this;
      var selectedList = this.connectedflyoutWidget.facetLeftContainer
          .find('.selected-items li');

      this.currentFacetValuesSelected = [];
      this.currentFacetValuesNotSelected = responseFacetValues;

      if (selectedList.length > 0) {
        selectedList.each(function() {
          var tmpFacetValue = decodeURIComponent($(this).attr('data-fctvalue'));
          currObjInstance.currentFacetValuesSelected.push(tmpFacetValue);
          currObjInstance.currentFacetValuesNotSelected = jQuery.grep(
              currObjInstance.currentFacetValuesNotSelected, function(element) {
                return element.value !== tmpFacetValue;
              });
        });
      }
    }
  },

  /**
   * Shows the facet values in the Flyout window for the next page.
   */
  goNextPage : function() {
    this.currentOffset += 10;
    this.currentPage += 1;
    this.connectedflyoutWidget.renderFacetValues(this.currentFacetField,
        this.currentFacetValuesNotSelected.slice(this.currentOffset));
    this.connectedflyoutWidget.setFacetValuesPage(this.currentPage);

    if (this.currentPage + 1 > Math
        .ceil((this.currentFacetValuesNotSelected.length) / 10)) {
      this.connectedflyoutWidget.paginationLiNext.addClass('off');
    }
    this.connectedflyoutWidget.paginationLiPrev.removeClass('off');
  },

  /**
   * Shows the facet values in the Flyout window for the previous page.
   */
  goPrevPage : function() {
    this.currentOffset -= 10;
    this.currentPage -= 1;
    this.connectedflyoutWidget.renderFacetValues(this.currentFacetField,
        this.currentFacetValuesNotSelected.slice(this.currentOffset));
    this.connectedflyoutWidget.setFacetValuesPage(this.currentPage);

    if (this.currentPage - 1 < 1) {
      this.connectedflyoutWidget.paginationLiPrev.addClass('off');
    }
    this.connectedflyoutWidget.paginationLiNext.removeClass('off');
  },

  /**
   * Handles the selection of a facet value in the Flyout window.
   * Update the window url and Triggers a new search request!
   */
  selectFacetValue : function(facetValue, localizedValue) {
    var currObjInstance = this;

    // update selection lists
    this.currentFacetValuesSelected.push(facetValue);
    this.currentFacetValuesNotSelected = jQuery.grep(this.currentFacetValuesNotSelected,
        function(element) {
          return element.value !== facetValue;
        });

    // render the selected facet
    var facetValueContainer = this.connectedflyoutWidget.renderSelectedFacetValue(facetValue, localizedValue);

    // if the facet field contains the string "_role" -> search for role values
    if (currObjInstance.currentFacetField.indexOf("_role") >= 0) {
      currObjInstance.fetchRoleFacetValues(facetValueContainer, facetValue, currObjInstance.currentFacetField);
    }

    // add event listener for removing facet
    facetValueContainer.find('.facet-remove').click(function(event) {
      event.preventDefault();
      currObjInstance.unselectFacetValue(facetValueContainer);
      return false;
    });

    // add event listener for add more facet filters
    if (this.currentFacetValuesSelected.length === 1) {
      this.connectedflyoutWidget.renderAddMoreFiltersButton(currObjInstance.currentFacetField);
      this.connectedflyoutWidget.addMoreFilters.click(function() {
        currObjInstance.connectedflyoutWidget.build($(this));
      });
    }
    this.connectedflyoutWidget.close();

    //Update the search params
    var paramsArray = de.ddb.common.search.addFacetValueToParams(this.currentFacetField, facetValue);

    //Perform a search with the new facet value
    currObjInstance.fetchResultsList($.addParamToCurrentUrl(paramsArray), function() {
      currObjInstance.unselectFacetValue(facetValueContainer, true);
    });

    $('.clear-filters').removeClass('off');
    $('.keep-filters').removeClass('off');

  },

  /**
   * Handles the unselection of a facet value.
   * Update the window url and Triggers a new search request!
   */
  unselectFacetValue : function(element, unselectWithoutFetch) {
    var currObjInstance = this;

    var facetFieldFilter = element.parents('.facets-item');
    var facetValue = decodeURIComponent(element.attr('data-fctvalue'));

    if (this.connectedflyoutWidget.opened) {
      this.connectedflyoutWidget.close();
      this.currentFacetValuesSelected = jQuery.grep(this.currentFacetValuesSelected,
          function(el) {
            return el !== decodeURIComponent(element.attr('data-fctvalue'));
          });
    }
    // if in the list there is only one element means that is the case
    // of the
    // last element that we are going to remove
    if (facetFieldFilter.find('.selected-items li[data-fctvalue]').length === 1) {
      this.connectedflyoutWidget.removeAddMoreFiltersButton(facetFieldFilter,
          facetFieldFilter.find('.add-more-filters'));
    }

    // Remove facet and all role based facets belonging to this facet
    // from the URL
    var facetsToRemove = [];
    facetsToRemove.push(['facetValues[]', facetFieldFilter.find('.h3').attr('data-fctname') + '=' + facetValue]);

    var roleFacets = element.find('span.role-facet-value');
    $.each((roleFacets), function() {
      facetsToRemove.push(['facetValues[]', $(this).attr("facetfield") + '=' + $(this).attr("roleValue")]);
    });

    var newUrl = $.removeParamFromUrl(facetsToRemove);
    if (decodeURIComponent(newUrl).indexOf('facetValues[]') === -1) {
      de.ddb.common.search.removeSearchCookieParameter('facetValues[]');
    }
    if (!unselectWithoutFetch) {
      $.addParamToCurrentUrl([['offset', 0]], newUrl);
      currObjInstance.fetchResultsList(newUrl);
    }
    element.remove();

    if ($('.facets-list').find('li[data-fctvalue]').length === 0) {
      $('.clear-filters').addClass('off');
      $('.keep-filters').addClass('off');
    }
  },

  /**
   * Handles the selection of a role facet.
   * Update the window url and Triggers a new search request!
   */
  selectRoleFacetValue : function(facetField, facetValue) {
    var currObjInstance = this;
    var paramsArray = de.ddb.common.search.addFacetValueToParams(facetField, facetValue);
    currObjInstance.fetchResultsList($.addParamToCurrentUrl(paramsArray));
  },

  /**
   * Handles the unselection of a role facet.
   * Update the window url and Triggers a new search request!
   */
  unselectRoleFacetValue : function(facetField, facetValue) {
    var currObjInstance = this;
    var newUrl = $.removeParamFromUrl([['facetValues[]', facetField + '=' + facetValue]]);

    if (decodeURIComponent(newUrl).indexOf('facetValues[]') === -1) {
      de.ddb.common.search.removeSearchCookieParameter('facetValues[]');
    }

    $.addParamToCurrentUrl([['offset', 0]], newUrl);
    currObjInstance.fetchResultsList(newUrl);
  },

  /**
   * Search handler for facet values.
   * Triggers a facet search and updates the values shown in the flyout window.
   */
  initializeFacetValuesDynamicSearch : function(inputSearchElement) {
    var currObjInstance = this;
    var timer;
    inputSearchElement.keyup(function(e) {
      clearInterval(timer);
      var code = (e.keyCode ? e.keyCode : e.which);
      var inputValue = this.value;
      if (code !== currObjInstance.keyCode.SHIFT
          && code !== currObjInstance.keyCode.CONTROL
          && code !== currObjInstance.keyCode.ALT
          && code !== currObjInstance.keyCode.LEFT && code !== currObjInstance.keyCode.UP
          && code !== currObjInstance.keyCode.RIGHT
          && code !== currObjInstance.keyCode.DOWN
          && code !== currObjInstance.keyCode.ENTER
          && code !== currObjInstance.keyCode.TAB) {
        var d = new Date();
        currObjInstance.searchFacetValuesTimeout = d.getTime();

        timer = setTimeout(function() {
        currObjInstance.connectedflyoutWidget.parentMainElement.find(
            '.flyout-right-container').remove();
        currObjInstance.connectedflyoutWidget.buildStructure();
        currObjInstance.fetchFacetValues(null, inputValue);
        currObjInstance.currentPage = 1;
        currObjInstance.currentOffset = 0;

        }, 500);
      }
    });
  },


  /**
   * Initialize the Flyout widget when the page is loaded in a asynchronic way.
   * It initialize all selected facets and role facets
   */
  initializeOnLoad : function(connectedflyoutWidget) {
    var currObjInstance = this;
    $(".js.facets-list").removeClass("off");

    this.connectedflyoutWidget = connectedflyoutWidget;
    var paramsFacetValues = de.ddb.common.search.getFacetValuesFromUrl();

    if (paramsFacetValues) {
      $('.clear-filters').removeClass('off');

      var selectedFacets = {};
      $.each(paramsFacetValues, function(key, value) {
        var decodedElement = decodeURIComponent(value.replace(/\+/g, '%20')).split('=');
        var fctField = decodedElement[0];
        var fctValue = decodedElement[1];
        if (!selectedFacets[fctField]) {
          selectedFacets[fctField] = [];
        }
        selectedFacets[fctField].push(fctValue);
      });

      // handle selected facets
      $.each(selectedFacets,
              function(fctField, fctValues) {
                  currObjInstance.connectedflyoutWidget.mainElement = $('.facets-list')
                      .find('a[data-fctname="' + fctField + '"]');
                  currObjInstance.connectedflyoutWidget.parentMainElement = currObjInstance.connectedflyoutWidget.mainElement
                      .parent();
                  currObjInstance.currentFacetField = currObjInstance.connectedflyoutWidget.mainElement
                      .attr('data-fctname');
                  currObjInstance.connectedflyoutWidget.buildLeftContainer();
                  currObjInstance.connectedflyoutWidget.parentMainElement.find(
                      '.input-search-fct-container').hide();

                  //set field as active
                  currObjInstance.connectedflyoutWidget.parentMainElement.addClass('active');

                  $.each(fctValues, function() {
                    //Check if the value is a role. They need special handling!
                    var facetValue = this;

                    //Skip if the facetValue is a role
                    if (de.ddb.next.search.isRole(facetValue)) {
                      return;
                    }

                    var localizedValue = de.ddb.next.search.getLocalizedFacetValue(fctField, this);
                    if ( typeof(localizedValue) === 'function') {
                      localizedValue = localizedValue();
                    }

                    var selectedFacetValue = currObjInstance.connectedflyoutWidget.renderSelectedFacetValue(this, localizedValue);

                    if (fctField.indexOf("_role") >= 0) {
                      currObjInstance.fetchRoleFacetValues(selectedFacetValue, facetValue, fctField);
                    }

                    selectedFacetValue.find('.facet-remove').click(function(event) {
                      event.preventDefault();
                      currObjInstance.unselectFacetValue(selectedFacetValue);
                      return false;
                    });
                  });

                  currObjInstance.connectedflyoutWidget
                      .renderAddMoreFiltersButton(fctField);
                  currObjInstance.connectedflyoutWidget.addMoreFilters.click(function() {
                    currObjInstance.connectedflyoutWidget.build($(this));
                  });
              });
    }

    //init TimeFacet
    currObjInstance.timeFacet.initOnLoad();
  }
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Flyout Widget
 *
 * The main intend of this object is to render all content in the context of
 * facets. It's doing this by DOM manipulation triggered by the FacetManager
 * instance.
 * The Flyout Widget contains:
 * <ul>
 * <li>facetLeftContainer: showing the AddMoreFilterButton and the selected facet values</li>
 * <li>facetRightContainer: showing the available facet values</li>
 * </ul>
 *
 * Do not use AJAX calls in this class!
 */
de.ddb.next.search.FlyoutFacetsWidget = function(fctManager) {
  this.fctManager = fctManager;
  this.init();
};

/**
 * Extend the prototyp of the FlyoutFacetsWidget with jQuery
 */
$.extend(de.ddb.next.search.FlyoutFacetsWidget.prototype,{
  mainElement : null,
  parentMainElement : null,
  opened : false,

  facetLeftContainer : null,
  facetRightContainer : null,
  rightBody : null,
  leftBody : null,
  selectedItems : null,
  paginationLiPrev : null,
  paginationLiNext : null,
  paginationLiSeite : null,
  addMoreFilters : null,
  inputSearch : null,

  // i18n variables
  field_MostRelevant : messages.ddbnext.Most_relevant,
  field_NoAvailableValues : messages.ddbnext.No_Available_Values,
  field_AddMoreFiltersButtonTooltip : messages.ddbnext.Add_More_Filters_ButtonTooltip,
  field_SearchResultsFacetValueNext : messages.ddbnext.SearchResultsFacetValue_Next,
  field_SearchResultsFacetValuePrevious : messages.ddbnext.SearchResultsFacetValue_Previous,
  field_Page : messages.ddbnext.Page,
  field_RemoveSelectedItem : messages.ddbnext.Remove_selected_item,
  field_RemoveButton : messages.ddbnext.Remove_Button,

  /**
   * Initialize the new instance.
   */
  init : function() {
    this.cleanNonJsStructures();
    this.fctManager.initializeOnLoad(this);
  },

  /**
   * Is called when the user clicks on the AddMoreFiltersButton or a facet header.
   *
   * Open/Closes the widget which depends on the state and the already selected facet values.
   * Identify the main facet elements for which the flyout widget should be created
   * and triggers the asynchron loading of the associated facet values from the backend.
   *
   * A call of buildStructure() creates the html structure of the facetLeftContainer and the facetRightContainer.
   */
  build : function(element) {
    if ((element.attr('class') === 'h3' && element.parent().find('.selected-items li').length === 0)
        || element.attr('class') === 'add-more-filters') {
      if ((element.attr('data-fctname') !== this.fctManager.currentFacetField || (element
          .attr('data-fctname') === this.fctManager.currentFacetField && !this.opened))) {
        if (this.opened) {
          this.close();
        }
        this.mainElement = element.parents('.facets-item').find('.h3');
        this.parentMainElement = this.mainElement.parent();
        this.fctManager.currentFacetField = this.mainElement.attr('data-fctname');
        if (!this.parentMainElement.hasClass('active')) {
          this.parentMainElement.hide();
          this.parentMainElement.addClass('active');
        }
        this.buildStructure();
        this.fctManager.fetchFacetValues(this);
        this.opened = true;
        this.parentMainElement.find('.input-search-fct').focus();
      } else if (this.opened) {
        this.close();
      }
    } else if (element.attr('class') === 'h3' && this.opened) {
      this.close();
    } else {
      return false;
    }
  },

  /**
   * Creates the mainlayout of the flyout window (facetRightContainer) with the paging elements.
   *
   * A call of buildLeftContainer() will create the html of the left container.
   */
  buildStructure : function() {

    if (this.parentMainElement.find('.flyout-left-container').length > 0) {
      this.facetLeftContainer = this.parentMainElement.find('.flyout-left-container');
      this.selectedItems = this.parentMainElement.find('.selected-items');
      this.inputSearch = this.parentMainElement.find('.input-search-fct');
    } else {
      this.buildLeftContainer();
    }

    this.facetRightContainer = $(document.createElement('div'));
    var rightHead = $(document.createElement('div'));
    this.rightBody = $(document.createElement('div'));
    // pagination structure for facets
    var paginationContainer = $(document.createElement('div'));
    var paginationUl = $(document.createElement('ul'));
    this.paginationLiPrev = $(document.createElement('li'));
    this.paginationLiNext = $(document.createElement('li'));
    this.paginationLiSeite = $(document.createElement('li'));
    var paginationAPrev = $(document.createElement('a'));
    var paginationANext = $(document.createElement('a'));
    var spanSeiteNumber = $(document.createElement('span'));

    this.facetRightContainer.addClass('flyout-right-container');
    this.facetRightContainer.hide();
    rightHead.addClass('flyout-right-head');
    this.rightBody.addClass('flyout-right-body');
    paginationContainer.addClass('flyout-page-nav fr');
    paginationUl.addClass('inline');
    this.paginationLiPrev.addClass('prev-page br off');
    this.paginationLiNext.addClass('next-page bl off');
    this.paginationLiSeite.addClass('pages-overall-index');
    paginationAPrev.attr('href', '');
    paginationANext.attr('href', '');

    this.facetRightContainer.appendTo(this.mainElement.parent());
    rightHead.appendTo(this.facetRightContainer);
    this.rightBody.appendTo(this.facetRightContainer);

    paginationAPrev.html(this.field_SearchResultsFacetValuePrevious);
    paginationANext.html(this.field_SearchResultsFacetValueNext);
    this.paginationLiSeite.html(this.field_Page);

    paginationContainer.appendTo(rightHead);
    paginationUl.appendTo(paginationContainer);
    paginationAPrev.appendTo(this.paginationLiPrev);
    paginationANext.appendTo(this.paginationLiNext);
    spanSeiteNumber.appendTo(this.paginationLiSeite);
    this.paginationLiPrev.appendTo(paginationUl);
    this.paginationLiSeite.appendTo(paginationUl);
    this.paginationLiNext.appendTo(paginationUl);

    this.parentMainElement.fadeIn('fast');
    this.facetRightContainer.fadeIn('fast');
    this.parentMainElement.find('.input-search-fct-container').fadeIn('fast');
  },

  /**
   * Creates the html structure of the leftContainer which shows the selected facets
   * and an inputSearch fiels for filtering the facet values in the right container.
   */
  buildLeftContainer : function() {
    this.facetLeftContainer = $(document.createElement('div'));
    this.selectedItems = $(document.createElement('ul'));
    var inputSearchContainer = $(document.createElement('div'));
    this.inputSearch = $(document.createElement('input'));

    this.facetLeftContainer.addClass('flyout-left-container');
    this.selectedItems.addClass('selected-items unstyled');
    inputSearchContainer.addClass('input-search-fct-container');
    this.inputSearch.attr('type', 'text');
    this.inputSearch.addClass('input-search-fct');

    this.facetLeftContainer.appendTo(this.mainElement.parent());
    this.selectedItems.appendTo(this.facetLeftContainer);
    this.inputSearch.appendTo(inputSearchContainer);
    inputSearchContainer.appendTo(this.facetLeftContainer);
    this.fctManager.initializeFacetValuesDynamicSearch(this.inputSearch);
  },

  /**
   * Creates the layout for the right container of the flyout widget.
   * It defines two columns for presenting the facet values.
   */
  initializeFacetValues : function(field, facetValues) {
    var leftCol = $(document.createElement('ul'));
    var rightCol = $(document.createElement('ul'));

    this.rightBody.empty();

    leftCol.addClass('left-col unstyled');
    rightCol.addClass('right-col unstyled');

    leftCol.appendTo(this.rightBody);
    rightCol.appendTo(this.rightBody);

    this.renderFacetValues(field, facetValues);
    this.fctManager.initPagination();
  },

  /**
   * Creates the html for the facet values in the right flyout container.
   * The values are presented in two columns with a maximum of 5 elements.
   */
  renderFacetValues : function(field, facetValues) {
    var currObjInstance = this;
    var leftCol = this.rightBody.find('.left-col');
    var rightCol = this.rightBody.find('.right-col');
    var flyoutRightHeadTitle;
    if (this.facetRightContainer.find('.flyout-right-head span').length > 0) {
      flyoutRightHeadTitle = $(this.facetRightContainer.find('.flyout-right-head span')[0]);
    } else {
      flyoutRightHeadTitle = $(document.createElement('span'));
    }
    if (field === this.fctManager.currentFacetField && facetValues.length > 0) {
      flyoutRightHeadTitle.html(this.field_MostRelevant);
      if (facetValues.length > 5) {
        this.rightBody.addClass('body-extender');
      } else {
        this.rightBody.removeClass('body-extender');
      }
      this.rightBody.fadeOut('fast', function() {
        leftCol.empty();
        rightCol.empty();

        $.each(facetValues, function(index) {
          if (jQuery.inArray(this.value,
              currObjInstance.fctManager.currentFacetValuesSelected) === -1) {
            var facetValueContainer = $(document.createElement('li'));
            var facetValueAnchor = $(document.createElement('a'));
            var spanCount = $(document.createElement('span'));

            facetValueAnchor.attr('href', '#');

            var facetValue = this.value;
            var localizedValue = this.localizedValue;
            facetValueContainer.click(function() {
              currObjInstance.fctManager.selectFacetValue(decodeURIComponent($(this).attr('data-fctvalue')),
                  localizedValue.replace('<strong>', '').replace('</strong>', ''));
              $(this).remove();
              return false;
            });

            facetValueContainer.attr('data-fctvalue', encodeURIComponent(facetValue));
            spanCount.html('(' + this.count + ')');

            if (index < 5) {
              facetValueContainer.appendTo(leftCol);
            } else if (index < 10) {
              facetValueContainer.appendTo(rightCol);
            }
            facetValueAnchor.appendTo(facetValueContainer);

            //If facet values contains '<' or '>' characters we have to escape them! But we have to keep the strong tags that comes from the server!
            var escapedLocalizedValue = _.escape(localizedValue);
            var escapedAndStrong = escapedLocalizedValue.replace('&lt;strong&gt;', '<strong>').replace('&lt;&#x2F;strong&gt;', '</strong>');
            facetValueAnchor.html(escapedAndStrong);
            spanCount.prependTo(facetValueAnchor);
          }
        });
        currObjInstance.rightBody.fadeIn('fast');
      });
    } else {
      flyoutRightHeadTitle.html(this.field_NoAvailableValues);
    }
    flyoutRightHeadTitle.prependTo(this.facetRightContainer.find('.flyout-right-head'));
  },

  /**
   * Returns a html container for a selected facet value.
   */
  renderSelectedFacetValue : function(facetValue, localizedValue) {
    var facetValueContainer = $(document.createElement('li'));
    var facetValueSpan = $(document.createElement('span'));
    var facetValueRemove = $(document.createElement('a'));

    facetValueContainer.attr('data-fctvalue', encodeURIComponent(facetValue));
    facetValueSpan.attr('title', localizedValue);

    facetValueSpan.html(_.escape(decodeURIComponent(localizedValue)));
    facetValueSpan.addClass('facet-value');

    facetValueRemove.attr('href', '#');
    facetValueRemove.attr('title', this.field_RemoveButton);
    facetValueRemove.addClass('facet-remove fr');

    facetValueSpan.appendTo(facetValueContainer);

    facetValueRemove.appendTo(facetValueContainer);
    facetValueContainer.appendTo(this.selectedItems);
    return facetValueContainer;
  },

  /**
   * Creates the html structure of a selected role value and appends it to the given facetValueContainer.
   */
  renderRoleValues : function(facetValueContainer, facetValue, facetField, roleValues) {
    var currObjInstance = this;

    // Find the span element of the facetvalue
    var facetValueSpan = facetValueContainer.find('.facet-value');

    var newUl = false;
    var roleFacetValueUl = facetValueContainer.find('ul');
    if (roleFacetValueUl.length === 0) {
      newUl = true;
      roleFacetValueUl = $(document.createElement('ul'));
      roleFacetValueUl.addClass('unstyled');
    }

    // Create the role based facets and add them to the container
    $.each(roleValues.values,
        function(index, value) {

      //The parent part of the role must match exactly the facet value!
          if (decodeURIComponent(facetValue.toString()) === de.ddb.next.search.getLiteralFromRole(value.value)) {
            var roleFacetValueLi = $(document.createElement('li'));
            var roleFacetValueSpan = $(document.createElement('span'));
            var roleFacetValueCheckbox = $(document.createElement('input'));
            var roleFieldMessage = messages.ddbnext['facet_' + de.ddb.next.search.getRoleWithoutLiteralAndHierarchieNumber(value.value)];

            roleFacetValueLi.addClass('role-facet');

            roleFacetValueSpan.attr('title', "RoleValue");
            roleFacetValueSpan.attr('facetField', facetField);
            roleFacetValueSpan.attr('roleValue', value.value);
            //roleFacetValueSpan.html(roleFieldMessage() + ' (' + value.count + ')'); //with document count
            roleFacetValueSpan.html(roleFieldMessage());
            roleFacetValueSpan.addClass('role-facet-value');

            roleFacetValueCheckbox.attr('type', "checkbox");
            roleFacetValueCheckbox.addClass('role-facet-checkbox');

            // If renderRoleFacetValue is invoked by initializeSelectedFacetOnLoad
            // we have to find out if the checkbox must be checked
            var paramsFacetValues = de.ddb.common.search.getFacetValuesFromUrl();
            if (paramsFacetValues) {
              var search = facetField + '=' + value.value;
              $.each(paramsFacetValues, function(key, value) {
                paramsFacetValues[key] = decodeURIComponent(value.replace(/\+/g, '%20'));
              });

              if (jQuery.inArray(search, paramsFacetValues) !== -1) {
                roleFacetValueCheckbox.prop('checked', true);
              }
            }

            // add action handler
            roleFacetValueCheckbox
                .click(function() {
                  if (this.checked) {
                    currObjInstance.fctManager.selectRoleFacetValue(facetField, value.value);
                  } else {
                    currObjInstance.fctManager.unselectRoleFacetValue(facetField, value.value);
                  }
                });

            roleFacetValueSpan.appendTo(roleFacetValueLi);
            roleFacetValueCheckbox.appendTo(roleFacetValueLi);
            roleFacetValueLi.appendTo(roleFacetValueUl);
          }
        });

    if (newUl) {
      roleFacetValueUl.insertAfter(facetValueSpan);
    }
  },

  /**
   * Creates the html for the AddMoreFiltersButton and append it to the given facet.
   */
  renderAddMoreFiltersButton : function(facetField) {
    this.addMoreFilters = $(document.createElement('div'));
    var text = $(document.createElement('span'));
    var icon = $(document.createElement('span'));

    this.addMoreFilters.attr('data-fctname', facetField);
    text.html(this.field_AddMoreFiltersButtonTooltip);

    this.addMoreFilters.addClass('add-more-filters');
    icon.addClass('icon');

    text.appendTo(this.addMoreFilters);
    icon.appendTo(this.addMoreFilters);
    this.addMoreFilters.appendTo(this.facetLeftContainer);
    this.facetLeftContainer.find('.input-search-fct-container').appendTo(
        this.facetLeftContainer);

    this.addMoreFilters.click(function() {
      $(this).hide();
    });
  },

  /**
   * Removes the AddMoreFiltersButton from the given facet
   */
  removeAddMoreFiltersButton : function(FacetFieldFilter, addMoreFiltersElement) {
    addMoreFiltersElement.remove();
    this.resetFacetFieldFilter(FacetFieldFilter);
  },

  /**
   * Renders the number of the actual facet value page
   */
  setFacetValuesPage : function(pageNumber) {
    var spanPGNumber = this.paginationLiSeite.find('span');
    if (spanPGNumber.length === 0) {
      ($(document.createElement('span')).html(pageNumber))
          .appendTo(this.paginationLiSeite);
    }
    $(spanPGNumber[0]).html(pageNumber);
  },

  /**
   * Render a progress image when facet values are loaded from the backend
   */
  renderFacetLoader : function() {
    this.rightBody.empty();
    var imgLoader = $(document.createElement('div'));
    imgLoader.addClass('small-loader');
    this.rightBody.prepend(imgLoader);
  },

  /**
   * Closes the facet values container when the user clicks outside of it.
   */
  manageOutsideClicks : function(thisInstance) {
    $(document).mouseup(function(e) {
      var container = $(".facets-item");
      if ((!$(e.target).parents(container).is(container) || $(e.target).parent().attr("id") === "thumbnail-filter-container") &&
        thisInstance.opened) {
        thisInstance.close();
      }
    });
  },

  /**
   * Clean Non Js Structures
   */
  cleanNonJsStructures : function() {
    $('.facets-item >ul').remove();
    $('.clear-filters').addClass('off');
    $('.keep-filters').addClass('off');
  },

  /**
   * Close the facet container and reset all states.
   */
  close : function() {
    var currObjInstance = this;
    var oldParentMainElement = this.parentMainElement;
    oldParentMainElement.find('.input-search-fct-container').hide('100', function() {
      if (oldParentMainElement.find('.flyout-left-container ul li').length > 0) {
        oldParentMainElement.find('.add-more-filters').show('100');
      } else {
        currObjInstance.resetFacetFieldFilter(oldParentMainElement);
      }
    });
    oldParentMainElement.find('.flyout-right-container').hide('100', function() {
      oldParentMainElement.find('.flyout-right-container').remove();
    });
    this.inputSearch.attr('value', '');
    this.fctManager.currentPage = 1;
    this.fctManager.currentOffset = 0;
    this.fctManager.currentFacetValuesSelected = [];
    this.opened = false;
  },

  /**
   * Resets the input in the facets filter text input
   */
  resetFacetFieldFilter : function(element) {
    element.fadeOut('fast', function() {
      element.removeClass('active');
      element.fadeIn('fast');
    });
  }
});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Compare Manager
 * Handles all coparison functionality on the results page
 */
de.ddb.next.search.CompareManager = function() {
};

$.extend(de.ddb.next.search.CompareManager.prototype, {

  /**
   * Initialize the components for the object comparison
   */
  initComparison : function() {
    var currObjInstance = this;

    // Comparison should only works with Javascript. So remove the CSS class
    // 'off' from the compare components
    $('.compare').removeClass("off");
    $('.compare-objects').removeClass("off");

    $('.compare-objects .fancybox-toolbar-close').click(function(event) {
      event.preventDefault();
      // Get the index of the compare-object.
      var index = $(event.target).attr("data-index");
      currObjInstance.removeCompareCookieParameter(index);
      currObjInstance.renderCompareObjects();
    });

    currObjInstance.renderCompareObjects();
  },

  /**
   * This functions selects the item from the result list and try to store some parameters in the comparison cookie.
   */
  selectCompareItem: function(id) {
    var currObjInstance = this;

    var itemId = id;

    // select the thumbnail image of the selected item
    var image = $('#thumbnail-' + itemId + ' img');
    var imageSrc = null;

    if (image.attr("src").indexOf(itemId) !== -1) {
      imageSrc = image.attr("src");
    }

    var text = image.attr("alt");
    if (text.length > 30) {
      text = text.substr(0, 30) + "...";
    }

    currObjInstance.setCompareCookieParameter(itemId, imageSrc, text);

    currObjInstance.renderCompareObjects();
  },

  /**
   * This funtion is responsible for rendering the compare components.
   * There are two compare obejects which can hold either
   * <ul>
   * <li>a default text</li>
   * <li>an image of the item</li>
   * <li>a text of the item</li>
   * </ul>
   *
   * The rendering is based on the item values stored in the comparison cookie.
   *
   */
  renderCompareObjects: function() {
    var currObjInstance = this;

    var cookieVal = currObjInstance.getComparisonCookieVal();

    // Rendering the value for both compare-objects
    $('.compare-object').each(
        function(index) {
          // closure index starts with 0!
          var itemNumber = index + 1;

          // Retrieve the elements via JQuery
          var compareObjectId = '#compare-object' + itemNumber;
          var compareLink = $(compareObjectId + ' .compare-link');
          var compareImage = $(compareObjectId + ' .compare-img');
          var compareText = $(compareObjectId + ' .compare-text');
          var compareDefault = $(compareObjectId + ' .compare-default');
          var compareRemove = $(compareObjectId + ' .fancybox-toolbar-close');
          var compareBgImage = $(compareObjectId + ' .compare-default-pic');

          // Get the associated item id from the cookie
          var cookieId = (cookieVal !== null) ? cookieVal['id' + itemNumber]
              : null;

          // Set default message if no cookie exists or itemId is null
          if (cookieVal === null || cookieId === null) {
            compareDefault.removeClass("off");
            compareBgImage.removeClass("off");
            compareText.addClass("off");
            compareImage.addClass("off");
            compareRemove.addClass("off");
          } else {
            var cookieSrc = cookieVal['src' + itemNumber];
            var cookieText = cookieVal['text' + itemNumber];

            //Hide default message
            compareDefault.addClass("off");
            compareBgImage.addClass("off");
            compareRemove.removeClass("off");

            // be sure to get the latest compare items and url queries (facets etc.) for the anchor reference. So use an click event for this issue
            compareLink.off();
            compareLink.on("click", function() {
              //Update the url of the link
              var urlQuery = window.location.search;
              var url = jsContextPath + '/item/' + cookieId + urlQuery;
              compareLink.attr("href", url);
            });

            // show the item's image or text
            if (cookieSrc !== null && cookieSrc.length !== -1) {
              compareImage.attr("src", cookieSrc);
              compareImage.attr("alt", cookieText);
              compareImage.attr("title", cookieText);

              compareText.addClass("off");
              compareImage.removeClass("off");
            } else {
              compareText.html(cookieText);

              compareText.removeClass("off");
              compareImage.addClass("off");
            }
          }
        });

    currObjInstance.setComparisonButtonState();
    currObjInstance.setItemCompareButtonState();
  },

  /**
   * Try to set an item to the comparison cookie. The cookie has two slots for holding two unequal items. Equalsness is checked via the item id.
   *
   * An item is set to the first free slot found in the cookie.
   *
   * The value of the cookie is in JSON format and can hold the id, src and text of an item.
   */
  setCompareCookieParameter: function(itemId, imgSrc, text) {
    var currObjInstance = this;

    var cookieVal = currObjInstance.getComparisonCookieVal();

    de.ddb.next.search.hideError();

    // if the cookie exists, check if the first or second compare slot is free
    if (cookieVal !== null) {
      if ((cookieVal.id1 !== null) && (cookieVal.id2 !== null)) {
        de.ddb.next.search.showError(messages.ddbnext.SearchResultsCompareItemOnly2);
      } else if ((cookieVal.id1 === itemId) || (cookieVal.id2 === itemId)) {
        de.ddb.next.search.showError(messages.ddbnext.SearchResultsCompareItemAlreadySet);
      } else if (cookieVal.id1 === null) {
        cookieVal.id1 = itemId;
        cookieVal.src1 = imgSrc;
        cookieVal.text1 = text;
        itemAdded = true;
      } else if (cookieVal.id2 === null) {
        cookieVal.id2 = itemId;
        cookieVal.src2 = imgSrc;
        cookieVal.text2 = text;
        itemAdded = true;
      }
    }
    // if the cookie don't exist create a new value and set the item on the
    // first position
    else {
      cookieVal = {
        id1 : itemId,
        src1 : imgSrc,
        text1 : text,
        id2 : null,
        src2 : null,
        text2 : null
      };
    }

    // Set the cookie
    currObjInstance.setComparisonCookieVal(cookieVal);
  },

  /**
   * Removes an comparison item from the cookie.
   * The index parameters can have the values 1 and 2
   */
  removeCompareCookieParameter: function(index) {
    var currObjInstance = this;

    var cookieVal = currObjInstance.getComparisonCookieVal();
    de.ddb.next.search.hideError();

    if (index !== "1" && index !== "2") {
      return;
    }

    if (cookieVal !== null) {
      cookieVal['id' + index] = null;
      cookieVal['src' + index] = null;
      cookieVal['text' + index] = null;

      currObjInstance.setComparisonCookieVal(cookieVal);
    }
  },

  /**
   * Activating and deactivating of the compare icon of each item.
   * The state of the item depends on the item id's stored in the cookie
   */
  setItemCompareButtonState: function() {
    var currObjInstance = this;

    var cookieVal = currObjInstance.getComparisonCookieVal();

    //1) Add functionality for selecting result list items for comparison
    $('.compare').each(function() {
      $(this).removeClass("disabled");

      //remove old click handler
      $(this).off();

      //add new click handler for selecting
      $(this).click(function(event) {
        event.stopPropagation();
        var item = $(event.target);
        var itemId = item.attr('data-iid');
        currObjInstance.selectCompareItem(itemId);
      });
    });

    //2) Add functionality for deselecting result list items from comparison
    var selectedItems = $('.compare').filter(
        function() {
          if (cookieVal) {
            return ($(this).attr('data-iid') === cookieVal.id1 || $(this).attr('data-iid') === cookieVal.id2);
          }
     });

    selectedItems.each(function() {
      $(this).addClass("disabled");

      //remove old click handler
      $(this).off();

      //add new click handler for deselecting
      $(this).click(function(event) {
        event.preventDefault();
        cookieVal = currObjInstance.getComparisonCookieVal();

        // Get the index of the compare-object.
        var index = -1;
        if ($(this).attr('data-iid') === cookieVal.id1) {
          index = 1;
        } else if ($(this).attr('data-iid') === cookieVal.id2) {
          index = 2;
        }

        currObjInstance.removeCompareCookieParameter(index);
        currObjInstance.renderCompareObjects();
        currObjInstance.setItemCompareButtonState();
      });
    });
  },

  /**
   * Enable/Disable the comparison button.
   * For this the selected items id's stored in the cookie are needed.
   *
   * Activate the button if two items are selected. Otherwise disable the button.
   */
  setComparisonButtonState: function() {
    var currObjInstance = this;

    var cookieVal = currObjInstance.getComparisonCookieVal();

    // The compare buton is disabled by default
    var compareButton = $('#compare-button .button');
    compareButton.addClass('disabled');
    compareButton.find('div').removeClass('button');

    // Enable the compare button only if two items are selected for comparison
    if ((cookieVal !== null) && (cookieVal.id1 !== null) && (cookieVal.id2 !== null)) {
      compareButton.removeClass('disabled');
      compareButton.find('div').addClass('button');

      // be sure to get the latest compare items and url queries (facets etc.) for the anchor reference. So use an click event for this issue
      compareButton.off();
      compareButton.on("click", function() {
        var urlQuery = window.location.search;
        var url = jsContextPath + '/compare/' + cookieVal.id1 + '/with/'
            + cookieVal.id2 + urlQuery;
        window.location = url;
      });
    }
  },

  getComparisonCookieVal: function() {
    var cookieName = 'compareParameters' + jsContextPath;
    var cookieVal = $.cookies.get(cookieName);

    return cookieVal;
  },

  setComparisonCookieVal: function(cookieVal) {
    var cookieName = 'compareParameters' + jsContextPath;
    $.cookies.set(cookieName, cookieVal);
  }
});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Hovercard Information Item constructor
 */
de.ddb.next.search.HovercardInfoItem = function(element) {
  this.init(element);
};

$.extend(de.ddb.next.search.HovercardInfoItem.prototype, {

  infoButton : null,
  hovercard : null,
  iid : null,

  opened : false,
  lock : false,

  hoverTime : 0,
  hoverTimeout : 300,

  init : function(element) {
    var currObjInstance = this;
    this.infoButton = element;
    this.hovercard = this.infoButton.find('.hovercard-info-item');
    this.iid = this.hovercard.attr('data-iid');

    this.infoButton.mouseenter(function() {
      var d = new Date();
      currObjInstance.hoverTime = d.getTime();
      currObjInstance.open();
    });
    this.hovercard.mouseenter(function() {
      currObjInstance.lock = true;
    });
    this.hovercard.mouseleave(function() {
      currObjInstance.close();
    });
    this.infoButton.mouseleave(function() {
      setTimeout(
          function() {
            var currentD = new Date();
            if (!currObjInstance.lock
                && currObjInstance.hoverTime + currObjInstance.hoverTimeout - 100 < currentD
                    .getTime()) {
              currObjInstance.close();
            }
          }, currObjInstance.hoverTimeout);
    });
  },
  open : function() {
    if (!this.opened) {
      this.opened = true;
      this.hovercard.fadeIn('fast');
      if (this.hovercard.find('.small-loader').length !== 0) {
        this.fetchInformationItem();
      }
    }
  },
  close : function() {
    this.hovercard.fadeOut('fast');
    this.opened = false;
    this.lock = false;
  },
  fetchInformationItem : function() {
    var currObjInstance = this;
    $.ajax({
      type : 'GET',
      dataType : 'json',
      async : true,
      url : jsContextPath + '/informationitem/' + this.iid,
      complete : function(data) {
        var content = currObjInstance.hovercard.find('ul.unstyled');
        content.empty();
        var JSONresponse = jQuery.parseJSON(data.responseText);

        $.each(JSONresponse, function(key, value) {
          if (key !== 'last_update' && value !== "" && key.indexOf("normdata") === -1 && key.indexOf("fct_role") === -1 && key.indexOf("apd_keywords_fct") === -1) {
            var li = $(document.createElement('li'));
            var fieldName = $(document.createElement('span'));
            var fieldContent = $(document.createElement('span'));

            fieldName.addClass('fieldName');
            fieldContent.addClass('fieldContent');

            facetValues = [];
            for (i = 0; i < value.length; i++) {
              facetValues.push(value[i]);
            }
            fieldName.text(de.ddb.next.search.getLocalizedFacetField(key));
            fieldContent.text(facetValues.join('; '));

            li.append(fieldName);
            li.append(fieldContent);
            content.append(li);
          }
        });
      }
    });
  }
});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(function() {
  if ((jsPageName === "searchperson") || jsPageName === "searchinstitution") {
    checkFavorites();
  }
});
/**
 * AJAX request to check if a result hit is already stored in the list of favorites.
 *
 * Install a click event handler to add a result hit to the list of favorites.
 */
function checkFavorites() {
  var itemIds = [];

  // Only perform this check if a user is logged in
  if (jsLoggedIn === "true") {

    // collect all item ids on the page
    $(".search-results-content .persist").each(function() {
      itemIds.push(extractItemId($(this).attr("href")));
    });

    // check if a result hit is already stored in the list of favorites
    $.ajax({
      type : "POST",
      url : jsContextPath + "/apis/favorites/_get",
      contentType : "application/json",
      data : JSON.stringify(itemIds),

      success : function(favoriteItemIds) {
        $.each(itemIds, function(index, itemId) {
          var div = $("#favorite-" + itemId);

          if ($.inArray(itemId, favoriteItemIds) >= 0) {
            disableFavorite(div);
          } else {
            $(div).click(
                function() {
                  disableFavorite(div);
                  // add a result hit to the list of favorites
                  $.post(jsContextPath + "/apis/favorites/" + itemId, function() {
                    $("#favorite-confirmation").modal("show");
                    $.post(jsContextPath + "/apis/favorites/folders", function(folders) {
                      if (folders.length > 1) {
                        $("#favorite-folders").empty();
                        $.each(folders, function(index, folder) {
                          if (!folder.isMainFolder) {
                            // show select box with all folder names
                            var selectEntry = "<option value=" + folder.folderId + ">"
                            + folder.title.charAt(0).toUpperCase() + folder.title.slice(1)
                            + "</option>";

                            $("#favorite-folders").append(selectEntry);
                          }
                        });
                        $("#favoriteId").val(itemId);
                        $("#addToFavoritesConfirm").click(
                            function() {
                              $("#favorite-confirmation").modal("hide");
                              var folderList = $("#favorite-folders").val();

                              if (folderList) {
                                $.each(folderList, function(index, value) {
                                  $.post(jsContextPath + "/apis/favorites/" + itemId + "?folderId=" + value + "&reqObjectType=" +
                                  objectType);
                                });
                              }
                            });
                      } else {
                        window.setTimeout(function() {
                          $("#favorite-confirmation").modal("hide");
                        }, 1500);
                      }
                    });
                  });
                });
          }
        });
      }
    });
  }
}
/**
 * Extract the item id from the given URL.
 *
 * @param url the URL containing the item id
 *
 * @returns item id
 */
function extractItemId(url) {
  var result = null;
  var parts = url.split("/");
  result = parts[parts.length - 1];
  var queryParameters = result.indexOf("?");
  if (queryParameters >= 0) {
    result = result.substring(0, queryParameters);
  }
  return result;
}

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the search results page

/* Search namespace  */
de.ddb.next.search = de.ddb.next.search || {};

/**
 * Is called after the DOM has been initialized, the new handler passed in will
 * be executed immediately
 */
$(function() {
  if (jsPageName === "searchinstitution") {
    var queryString = decodeURIComponent(de.ddb.common.search.getParameterByName("query").replace(/\+/g, '%20'));
    $("#form-search-header .query").val(queryString);

  }
});


/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the search results page

/* Search Person namespace! Some functionality is also found on searchResults.js  */
$(function() {
  if (jsPageName === "searchperson") {
    var queryString = decodeURIComponent(de.ddb.common.search.getParameterByName("query").replace(/\+/g, '%20'));
    $("#form-search-header .query").val(queryString);
  }
});

/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {

  if (jsPageName === "lists") {
    de.ddb.next.search.paginationWidget = new de.ddb.next.PaginationWidget();

    var socialMediaManager = new SocialMediaManager();
    socialMediaManager.integrateSocialMedia();
  }

});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(function() {
  if (jsPageName === "persons") {
    var randomSeed = $('#var-to-js').attr('data-random-seed');
    var pgTitle = $('#var-to-js').attr('data-pgTitle');
    History.pushState({sort:randomSeed}, pgTitle + " " +randomSeed, "?sort="+randomSeed);
    document.title = pgTitle + " - " + messages.ddbnext.Deutsche_Digitale_Bibliothek();
    var socialMediaManager = new SocialMediaManager();
    socialMediaManager.integrateSocialMedia();


    var container = document.querySelector('#columns');
    imagesLoaded( container, function() {
      new Masonry( container, {
        // options
        isOriginLeft: false,
        columnWidth: 170,
        itemSelector: '.pin'
      });
    });

    $(window).bind("load", function() {
        $('.small-loader').remove();
        $('.persons-overview-overlay-waiting').remove();
        $('.persons-overview-overlay-modal').remove();
      });

  }

});

/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 */

( function( window ) {



// -------------------------- utils -------------------------- //

var slice = Array.prototype.slice;

function noop() {}

// -------------------------- definition -------------------------- //

function defineBridget( $ ) {

// bail if no jQuery
if ( !$ ) {
  return;
}

// -------------------------- addOptionMethod -------------------------- //

/**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
function addOptionMethod( PluginClass ) {
  // don't overwrite original option method
  if ( PluginClass.prototype.option ) {
    return;
  }

  // option setter
  PluginClass.prototype.option = function( opts ) {
    // bail out if not an object
    if ( !$.isPlainObject( opts ) ){
      return;
    }
    this.options = $.extend( true, this.options, opts );
  };
}


// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

/**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
function bridge( namespace, PluginClass ) {
  // add to jQuery fn namespace
  $.fn[ namespace ] = function( options ) {
    if ( typeof options === 'string' ) {
      // call plugin method when first argument is a string
      // get arguments for method
      var args = slice.call( arguments, 1 );

      for ( var i=0, len = this.length; i < len; i++ ) {
        var elem = this[i];
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( "cannot call methods on " + namespace + " prior to initialization; " +
            "attempted to call '" + options + "'" );
          continue;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
          logError( "no such method '" + options + "' for " + namespace + " instance" );
          continue;
        }

        // trigger method with arguments
        var returnValue = instance[ options ].apply( instance, args );

        // break look and return first value if provided
        if ( returnValue !== undefined ) {
          return returnValue;
        }
      }
      // return this if no return value
      return this;
    } else {
      return this.each( function() {
        var instance = $.data( this, namespace );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( this, options );
          $.data( this, namespace, instance );
        }
      });
    }
  };

}

// -------------------------- bridget -------------------------- //

/**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
$.bridget = function( namespace, PluginClass ) {
  addOptionMethod( PluginClass );
  bridge( namespace, PluginClass );
};

return $.bridget;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );
} else {
  // get jquery from browser global
  defineBridget( window.jQuery );
}

})( window );

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false */

( function( window ) {



var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( this );

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (evt instanceof RegExp) {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (evt instanceof RegExp) {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * getStyleProperty v1.0.3
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'get-style-property/get-style-property',[],function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

/**
 * getSize v1.1.7
 * measure size of elements
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- box sizing -------------------------- //

var boxSizingProp = getStyleProperty('boxSizing');
var isBoxSizeOuter;

/**
 * WebKit measures the outer-width on style.width on border-box elems
 * IE & Firefox measures the inner-width
 */
( function() {
  if ( !boxSizingProp ) {
    return;
  }

  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style[ boxSizingProp ] = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  isBoxSizeOuter = getStyleSize( style.width ) === 200;
  body.removeChild( div );
})();


// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

/**
 * matchesSelector helper v1.0.1
 *
 * @name matchesSelector
 *   @param {Element} elem
 *   @param {String} selector
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false */

( function( global, ElemProto ) {

  

  var matchesMethod = ( function() {
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',[],function() {
      return matchesSelector;
    });
  } else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( this, Element.prototype );

/**
 * Outlayer Item
 */

( function( window ) {



// ----- get style ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDash( str ) {
  return str.replace( /([A-Z])/g, function( $1 ){
    return '-' + $1.toLowerCase();
  });
}

// -------------------------- Outlayer definition -------------------------- //

function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  if ( layoutOptions.isOriginLeft ) {
    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
    // reset other property
    style.right = '';
  } else {
    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
    style.left = '';
  }

  if ( layoutOptions.isOriginTop ) {
    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
    style.bottom = '';
  } else {
    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
    style.top = '';
  }

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.on( 'transitionEnd', function() {
    _this.removeElem();
    return true; // bind once
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true
  });
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;
  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: {
      opacity: function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if ( this.isHidden ) {
          this.css({ display: 'none' });
        }
      }
    }
  });
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/item',[
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'get-style-property/get-style-property'
    ],
    outlayerItemDefinition );
} else {
  // browser global
  window.Outlayer = {};
  window.Outlayer.Item = outlayerItemDefinition(
    window.EventEmitter,
    window.getSize,
    window.getStyleProperty
  );
}

})( window );

/*!
 * Outlayer v1.2.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window ) {



// ----- vars ----- //

var document = window.document;
var console = window.console;
var jQuery = window.jQuery;

var noop = function() {};

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}


var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// http://stackoverflow.com/a/384380/182183
var isElement = ( typeof HTMLElement === 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj === 'object' &&
      obj.nodeType === 1 && typeof obj.nodeName === 'string';
  };

// index of helper cause IE8
var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

function removeFrom( obj, ary ) {
  var index = indexOf( ary, obj );
  if ( index !== -1 ) {
    ary.splice( index, 1 );
  }
}

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
function toDashed( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
}


function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  // use element as selector string
  if ( typeof element === 'string' ) {
    element = document.querySelector( element );
  }

  // bail out if not proper element
  if ( !element || !isElement( element ) ) {
    if ( console ) {
      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
    }
    return;
  }

  this.element = element;

  // options
  this.options = extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  // make array of elems
  elems = makeArray( elems );
  var itemSelector = this.options.itemSelector;
  var itemElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have an item selector
    if ( itemSelector ) {
      // filter siblings
      if ( matchesSelector( elem, itemSelector ) ) {
        itemElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( itemSelector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        itemElems.push( childElems[j] );
      }
    } else {
      itemElems.push( elem );
    }
  }

  return itemElems;
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  var _this = this;
  function onItemsLayout() {
    _this.emitEvent( 'layoutComplete', [ _this, items ] );
  }

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    onItemsLayout();
    return;
  }

  // emit layoutComplete when done
  this._itemsOn( items, 'layout', onItemsLayout );

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * trigger a callback for a collection of items events
 * @param {Array} items - Outlayer.Items
 * @param {String} eventName
 * @param {Function} callback
 */
Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
  var doneCount = 0;
  var count = items.length;
  // event callback
  var _this = this;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      callback.call( _this );
    }
    return true; // bind once
  }
  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.on( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    removeFrom( elem, this.stamps );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9

  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  var len = items && items.length;
  if ( !len ) {
    return;
  }
  for ( var i=0; i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  if ( !elems || !elems.length ) {
    return;
  }
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  elems = makeArray( elems );

  var removeItems = this.getItems( elems );
  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  this._itemsOn( removeItems, 'remove', function() {
    this.emitEvent( 'removeComplete', [ this, removeItems ] );
  });

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    removeFrom( item, this.items );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = extend( {}, Outlayer.defaults );
  // apply new options
  extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  /**
   * allow user to initialize Outlayer via .js-namespace class
   * options are parsed from data-namespace-option attribute
   */
  docReady( function() {
    var dashedNamespace = toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new Layout( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'outlayer/outlayer',[
      'eventie/eventie',
      'doc-ready/doc-ready',
      'eventEmitter/EventEmitter',
      'get-size/get-size',
      'matches-selector/matches-selector',
      './item'
    ],
    outlayerDefinition );
} else {
  // browser global
  window.Outlayer = outlayerDefinition(
    window.eventie,
    window.docReady,
    window.EventEmitter,
    window.getSize,
    window.matchesSelector,
    window.Outlayer.Item
  );
}

})( window );

/*!
 * Masonry v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window ) {



// -------------------------- helpers -------------------------- //

var indexOf = Array.prototype.indexOf ?
  function( items, value ) {
    return items.indexOf( value );
  } :
  function ( items, value ) {
    for ( var i=0, len = items.length; i < len; i++ ) {
      var item = items[i];
      if ( item === value ) {
        return i;
      }
    }
    return -1;
  };

// -------------------------- masonryDefinition -------------------------- //

// used for AMD definition and requires
function masonryDefinition( Outlayer, getSize ) {
  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    this.columnWidth += this.gutter;

    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
    this.cols = Math.max( this.cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth !== this.containerWidth;
  };

  return Masonry;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'outlayer/outlayer',
      'get-size/get-size'
    ],
    masonryDefinition );
} else {
  // browser global
  window.Masonry = masonryDefinition(
    window.Outlayer,
    window.getSize
  );
}

})( window );

/*!
 * imagesLoaded PACKAGED v3.1.6
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*
 * Copyright (C) 2014 FIZ Karlsruhe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//IMPORTANT FOR MERGING: This is the main function that has to be called when we are in the saved searches page
$(function() {
  if (jsPageName === "publicFavorites") {

    /** Fade in report-favorites overlay when social icon is clicked * */
    $(".reportfav").mouseover(function() {
      showReportFavoritesOverlay();
    });

    /** Fade out report-favorites overlay when overlay div is leaved * */
    $(".reportfav").mouseleave(function() {
      hideReportFavoritesOverlay();
    });

    $('.page-input').removeClass('off');
    $('.page-nonjs').addClass("off");
    // workaround for ffox + ie click focus - prevents links that load dynamic
    // content to be focussed/active.
    $("a.noclickfocus").live('mouseup', function() {
      $(this).blur();
    });

    $("#favorites-list-send").click(function(event) {
      event.preventDefault();
      $('#sendFavoriteListModal').modal('show');
    });
  }
});

function showReportFavoritesOverlay() {
  $(".reportfav .report-overlay-container").fadeIn(200);
}

function hideReportFavoritesOverlay() {
  window.setTimeout(function() {
    $(".reportfav .report-overlay-container").fadeOut(200);
  }, 200);
}

$(document).ready(function() {
  if (jsPageName === "publicFavorites") {
    var socialMediaManager = new SocialMediaManager();
    socialMediaManager.integrateSocialMedia();
  }
});

