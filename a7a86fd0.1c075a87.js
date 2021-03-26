(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{292:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(412)),i={title:"Using Modules"},s={unversionedId:"Using-Modules",id:"Using-Modules",isDocsHomePage:!1,title:"Using Modules",description:"Premake can be extended through the use of third-party modules. Modules can add support for new toolsets, languages, and frameworks as well as entirely new features. We keep a community-maintained list of modules here on the wiki.",source:"@site/docs/Using-Modules.md",slug:"/Using-Modules",permalink:"/docs/Using-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Using-Modules.md",version:"current",sidebar:"mainSidebar",previous:{title:"Command Line Arguments",permalink:"/docs/Command-Line-Arguments"},next:{title:"More Authoring Topics",permalink:"/docs/Topics"}},u=[{value:"Including a Module With Your Project",id:"including-a-module-with-your-project",children:[]},{value:"System Modules",id:"system-modules",children:[]},{value:"Version Requirements",id:"version-requirements",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Premake can be extended through the use of third-party modules. Modules can add support for new toolsets, languages, and frameworks as well as entirely new features. We keep ",Object(o.b)("a",{parentName:"p",href:"modules"},"a community-maintained list of modules here on the wiki"),"."),Object(o.b)("p",null,"To use a module, download or clone the module's repository to ",Object(o.b)("a",{parentName:"p",href:"locating-scripts"},"one of Premake's search paths"),", making sure that the destination folder has the same name as the module's main script, e.g. ",Object(o.b)("strong",{parentName:"p"},"qt/qt.lua"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ git clone https://github.com/dcourtois/premake-qt qt\n")),Object(o.b)("p",null,"Then simply call ",Object(o.b)("inlineCode",{parentName:"p"},"require()")," from your project or ",Object(o.b)("a",{parentName:"p",href:"system-scripts"},"system script")," to include it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require "qt"\n')),Object(o.b)("h3",{id:"including-a-module-with-your-project"},"Including a Module With Your Project"),Object(o.b)("p",null,"For convenience, you may wish to keep a copy of the modules you require in your project's source tree. In that case you may place them anywhere you wish, and provide the relative path when requiring it. For instance, if your main ",Object(o.b)("strong",{parentName:"p"},"premake5.lua")," is located at the root of your project tree, and your modules are in a folder named ",Object(o.b)("strong",{parentName:"p"},"build"),", you may load it like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require "build/qt"\n')),Object(o.b)("h3",{id:"system-modules"},"System Modules"),Object(o.b)("p",null,"You may also put your modules anywhere on ",Object(o.b)("a",{parentName:"p",href:"locating-scripts"},"Premake's search paths"),", for example in ",Object(o.b)("strong",{parentName:"p"},"~/.premake"),". In this case no path information is needed, and you can simply call:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require "qt"\n')),Object(o.b)("p",null,"If you wish to make a module always available to ",Object(o.b)("em",{parentName:"p"},"all")," of your projects, you may place the call to ",Object(o.b)("inlineCode",{parentName:"p"},"require()")," in your ",Object(o.b)("a",{parentName:"p",href:"system-scripts"},"system script"),". In that case, the module will be automatically loaded each time Premake runs, and all of its features will be available."),Object(o.b)("h2",{id:"version-requirements"},"Version Requirements"),Object(o.b)("p",null,"To ensure compatibility with your project script, it can sometimes be helpful to require a minimum version or range of versions for your module dependencies. Premake includes ",Object(o.b)("a",{parentName:"p",href:"require"},"a modified version Lua's ",Object(o.b)("inlineCode",{parentName:"a"},"require()")," function")," which accepts a version test as its second argument."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("qt", ">=1.1")\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"require"},"the ",Object(o.b)("inlineCode",{parentName:"a"},"require()")," documentation")," for more information and examples."))}l.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?a.a.createElement(b,s(s({ref:t},c),{},{components:r})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);