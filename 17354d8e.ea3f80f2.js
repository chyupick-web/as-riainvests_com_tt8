(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{412:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||c;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(412)),i={},o={unversionedId:"pchheader",id:"pchheader",isDocsHomePage:!1,title:"pchheader",description:"Specifies the #include form of the precompiled header file name.",source:"@site/docs/pchheader.md",slug:"/pchheader",permalink:"/docs/pchheader",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/pchheader.md",version:"current",sidebar:"mainSidebar",previous:{title:"optimize",permalink:"/docs/optimize"},next:{title:"pchsource",permalink:"/docs/pchsource"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Specifies the #include form of the precompiled header file name."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'pchheader ("name.h")\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"/docs/Precompiled-Headers"},"Precompiled Headers")," for more information."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"name.h")," is the name of the precompiled header, as it is specified in the #include statements of the project source code. If your source code includes the header like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'#include "myproject.h"\n')),Object(c.b)("p",null,"...specify the header in your script like this, even if the file itself is located on a different path relative to the project (and presumably found at compile time via the include file search paths):"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'pchheader "myproject.h"\n')),Object(c.b)("h3",{id:"applies-to"},"Applies To"),Object(c.b)("p",null,"Project configurations."),Object(c.b)("h3",{id:"availability"},"Availability"),Object(c.b)("p",null,"Premake 4.0 and up."),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/Precompiled-Headers"},"Precompiled Headers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/pchsource"},"pchsource"))))}u.isMDXComponent=!0}}]);