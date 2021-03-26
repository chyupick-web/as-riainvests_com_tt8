(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{307:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(412)),l={},c={unversionedId:"term.popColor",id:"term.popColor",isDocsHomePage:!1,title:"term.popColor",description:"Returns the current console color setting and restores the previously saved color setting saved by the last call of term.pushColor",source:"@site/docs/term.popColor.md",slug:"/term.popColor",permalink:"/docs/term.popColor",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.popColor.md",version:"current",sidebar:"mainSidebar",previous:{title:"term.getTextColor",permalink:"/docs/term.getTextColor"},next:{title:"term.pushColor",permalink:"/docs/term.pushColor"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Availability",id:"availability",children:[]}],p={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the current console color setting and restores the previously saved color setting saved by the last call of ",Object(a.b)("a",{parentName:"p",href:"/docs/term.pushColor"},"term.pushColor")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},"term.popColor()\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"None"),Object(a.b)("h3",{id:"return-value"},"Return Value"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"nil")," if the color stack is empty.  "),Object(a.b)("li",{parentName:"ul"},"The current color setting. One of the color values listed in ",Object(a.b)("a",{parentName:"li",href:"/docs/term.setTextColor"},"term.setTextColor"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'local currentColor = term.popColor()\nprint("Last color setting was: " .. currentColor)\n')),Object(a.b)("h3",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/term.pushColor"},"term.pushColor")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/term.getTextColor"},"term.getTextColor")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/term.setTextColor"},"term.setTextColor"))),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0.0 alpha 12 or later."))}u.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(l,".").concat(m)]||s[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);