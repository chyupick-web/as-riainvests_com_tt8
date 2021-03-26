(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{407:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(412)),l={},o={unversionedId:"system",id:"system",isDocsHomePage:!1,title:"system",description:"Specifies the target operating system.",source:"@site/docs/system.md",slug:"/system",permalink:"/docs/system",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/system.md",version:"current",sidebar:"mainSidebar",previous:{title:"syslibdirs",permalink:"/docs/syslibdirs"},next:{title:"systemversion",permalink:"/docs/systemversion"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specifies the target operating system."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'system ("value")\n')),Object(i.b)("p",null,"If no system is specified, Premake will identify and target the current operating system. This can be overridden with the ",Object(i.b)("inlineCode",{parentName:"p"},"--os")," command line argument, providing one of the system identifiers below."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"value")," is one of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"aix"),Object(i.b)("li",{parentName:"ul"},"bsd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.haiku-os.org"},"haiku")),Object(i.b)("li",{parentName:"ul"},"linux"),Object(i.b)("li",{parentName:"ul"},"macosx"),Object(i.b)("li",{parentName:"ul"},"solaris"),Object(i.b)("li",{parentName:"ul"},"wii"),Object(i.b)("li",{parentName:"ul"},"windows"),Object(i.b)("li",{parentName:"ul"},"xbox360")),Object(i.b)("p",null,"More values may be added by ",Object(i.b)("a",{parentName:"p",href:"/docs/Modules"},"add-on modules"),"."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"Project configurations."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Premake 5.0 or later."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   system { "Windows", "Unix", "Mac" }\n\n   filter "system:Windows"\n      system "windows"\n\n   filter "system:Unix"\n      system "linux"\n\n   filter "system:Mac"\n      system "macosx"\n')),Object(i.b)("h3",{id:"see-also"},"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/architecture"},"architecture")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/_OS"},"_OS"))))}p.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return r?a.a.createElement(d,o(o({ref:t},c),{},{components:r})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);