(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(441)),o={},c={unversionedId:"term.setTextColor",id:"term.setTextColor",isDocsHomePage:!1,title:"term.setTextColor",description:"Changes the color of future text printed to the console",source:"@site/docs/term.setTextColor.md",slug:"/term.setTextColor",permalink:"/docs/term.setTextColor",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/term.setTextColor.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1618411052,sidebar:"docs",previous:{title:"term.pushColor",permalink:"/docs/term.pushColor"},next:{title:"zip.extract",permalink:"/docs/zip.extract"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Availability",id:"availability",children:[]}],p={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Changes the color of future text printed to the console"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},"term.setTextColor(color)\n")),Object(l.b)("h3",{id:"parameters"},"Parameters"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"color")," - One of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nil")," (default color)"),Object(l.b)("li",{parentName:"ul"},"term.black"),Object(l.b)("li",{parentName:"ul"},"term.blue"),Object(l.b)("li",{parentName:"ul"},"term.green"),Object(l.b)("li",{parentName:"ul"},"term.cyan"),Object(l.b)("li",{parentName:"ul"},"term.red"),Object(l.b)("li",{parentName:"ul"},"term.purple"),Object(l.b)("li",{parentName:"ul"},"term.brown"),Object(l.b)("li",{parentName:"ul"},"term.lightGray"),Object(l.b)("li",{parentName:"ul"},"term.gray"),Object(l.b)("li",{parentName:"ul"},"term.lightBlue"),Object(l.b)("li",{parentName:"ul"},"term.lightGreen"),Object(l.b)("li",{parentName:"ul"},"term.lightCyan"),Object(l.b)("li",{parentName:"ul"},"term.lightRed"),Object(l.b)("li",{parentName:"ul"},"term.magenta"),Object(l.b)("li",{parentName:"ul"},"term.yellow"),Object(l.b)("li",{parentName:"ul"},"term.white")),Object(l.b)("p",null,"For specific purposes the following can be used/overridden:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"term.warningColor"),Object(l.b)("li",{parentName:"ul"},"term.errorColor"),Object(l.b)("li",{parentName:"ul"},"term.infoColor")),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("p",null,"Print text in green"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'term.setTextColor(term.green)\nprint("Hello World")\n')),Object(l.b)("h3",{id:"see-also"},"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/term.getTextColor"},"term.getTextColor")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/term.pushColor"},"term.pushColor")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/term.popColor"},"term.popColor"))),Object(l.b)("h3",{id:"availability"},"Availability"),Object(l.b)("p",null,"Premake 5.0.0 alpha 12 or later."))}b.isMDXComponent=!0},441:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,O=u["".concat(o,".").concat(s)]||u[s]||m[s]||l;return r?a.a.createElement(O,c(c({ref:t},p),{},{components:r})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);