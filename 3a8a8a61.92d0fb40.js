(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{154:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(412)),a={},l={unversionedId:"linkgroups",id:"linkgroups",isDocsHomePage:!1,title:"linkgroups",description:"Turns on/off linkgroups for gcc/clang in the gmake backend.",source:"@site/docs/linkgroups.md",slug:"/linkgroups",permalink:"/docs/linkgroups",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linkgroups.md",version:"current",sidebar:"mainSidebar",previous:{title:"linkbuildoutputs",permalink:"/docs/linkbuildoutputs"},next:{title:"linkoptions",permalink:"/docs/linkoptions"}},c=[{value:"Parameters",id:"parameters",children:[]}],u={toc:c};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Turns on/off linkgroups for gcc/clang in the gmake backend."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'linkgroups ("value")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value"),' is a boolean value, i.e. "On" or "Off".'),Object(i.b)("p",null,"When linking against another projects or libraries gcc/clang by default have order dependent linking, at least with the general default linker. While it is generally beleived to be slower, you can enable order independent linking within a group of libraries by putting them inside of a link-group using the -Wl,--start-group and -Wl,--end-group command line arguments."),Object(i.b)("p",null,"This API turns this grouping on or off (it is off by default), and applies to all libraries specified in the ",Object(i.b)("a",{parentName:"p",href:"/docs/links"},"links")," API."))}p.isMDXComponent=!0},412:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=t,d=s["".concat(a,".").concat(b)]||s[b]||f[b]||i;return r?o.a.createElement(d,l(l({ref:n},u),{},{components:r})):o.a.createElement(d,l({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);