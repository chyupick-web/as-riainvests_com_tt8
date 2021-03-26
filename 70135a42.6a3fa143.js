(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(412)),o={},c={unversionedId:"path.isframework",id:"path.isframework",isDocsHomePage:!1,title:"path.isframework",description:"Returns true if the specified path represents a Cocoa framework bundle, based on its file extension.",source:"@site/docs/path.isframework.md",slug:"/path.isframework",permalink:"/docs/path.isframework",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.isframework.md",version:"current",sidebar:"mainSidebar",previous:{title:"path.iscppheader",permalink:"/docs/path.iscppheader"},next:{title:"path.islinkable",permalink:"/docs/path.islinkable"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns true if the specified path represents a Cocoa framework bundle, based on its file extension."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'path.isframework("path")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)("p",null,"True if the path matches has a ",Object(i.b)("strong",{parentName:"p"},".framework")," extension."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscppfile"},"path.iscppfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.islinkable"},"path.islinkable")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}s.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),f=a,m=b["".concat(o,".").concat(f)]||b[f]||u[f]||i;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);