(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{243:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(412)),o={},i={unversionedId:"os.matchdirs",id:"os.matchdirs",isDocsHomePage:!1,title:"os.matchdirs",description:"Perform a wildcard match to locate one or more directories.",source:"@site/docs/os.matchdirs.md",slug:"/os.matchdirs",permalink:"/docs/os.matchdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/os.matchdirs.md",version:"current",sidebar:"mainSidebar",previous:{title:"os.locate",permalink:"/docs/os.locate"},next:{title:"os.matchfiles",permalink:"/docs/os.matchfiles"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Perform a wildcard match to locate one or more directories."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'matches = os.matchdirs("pattern")\n')),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"pattern")," is the file system path to search. It may contain single (non-recursive) or double (recursive) asterisk wildcard patterns."),Object(c.b)("h3",{id:"return-value"},"Return Value"),Object(c.b)("p",null,"A list of directories which match the specified pattern. May be empty."),Object(c.b)("h3",{id:"availability"},"Availability"),Object(c.b)("p",null,"Premake 4.0 or later."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lua"},'matches = os.matchdirs("src/*")      -- non-recursive match\nmatches = os.matchdirs("src/**")     -- recursive match\n\nmatches = os.matchdirs("src/test*")  -- may also match partial names\n')),Object(c.b)("h3",{id:"see-also"},"See Also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/os.matchfiles"},"os.matchfiles"))))}u.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);