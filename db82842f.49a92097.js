(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{361:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(412)),c={title:"Adding Source Files"},o={unversionedId:"Adding-Source-Files",id:"Adding-Source-Files",isDocsHomePage:!1,title:"Adding Source Files",description:"You add files\u2014source code, resources, and so on\u2014to your project using the files function.",source:"@site/docs/Adding-Source-Files.md",slug:"/Adding-Source-Files",permalink:"/docs/Adding-Source-Files",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-Source-Files.md",version:"current",sidebar:"mainSidebar",previous:{title:"Scopes & Inheritance",permalink:"/docs/Scopes-and-Inheritance"},next:{title:"Linking",permalink:"/docs/Linking"}},l=[{value:"Excluding Files",id:"excluding-files",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You add files\u2014source code, resources, and so on\u2014to your project using the ",Object(i.b)("a",{parentName:"p",href:"files"},"files")," function."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'files {\n   "hello.h",  -- you can specify exact names\n   "*.c",      -- or use a wildcard...\n   "**.cpp"    -- ...and recurse into subdirectories\n}\n')),Object(i.b)("p",null,"You can use wildcards in the file patterns to match a set of files. The wildcard ","*"," will match files in one directory; the wildcard ","*","*"," will match files in one directory and also recurse down into any subdirectories."),Object(i.b)("p",null,"Files located in other directories should be specified relative to the script file. For example, if the script is located at ",Object(i.b)("inlineCode",{parentName:"p"},"MyProject/build")," and the source files are at ",Object(i.b)("inlineCode",{parentName:"p"},"MyProject/src"),", the files should be specified as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'files { "../src/*.cpp" }\n')),Object(i.b)("p",null,"Paths should always use the forward slash ",Object(i.b)("inlineCode",{parentName:"p"},"/")," as a separator; Premake will translate to the appropriate platform-specific separator as needed."),Object(i.b)("h2",{id:"excluding-files"},"Excluding Files"),Object(i.b)("p",null,"Sometimes you want most, but not all, of the files in a directory. In that case, use the ",Object(i.b)("a",{parentName:"p",href:"removing-values"},"removefiles()")," function to mask out those few exceptions."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'files { "*.c" }\nremovefiles { "a_file.c", "another_file.c" }\n')),Object(i.b)("p",null,"Excludes may also use wildcards."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'files { "**.c" }\nremovefiles { "tests/*.c" }\n')),Object(i.b)("p",null,"Sometimes you may want to exclude all the files in a particular directory, but aren't sure where that directory will fall in the source tree."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'files { "**.c" }\nremovefiles { "**/Win32Specific/**" }\n')))}u.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?a.a.createElement(b,o(o({ref:t},s),{},{components:r})):a.a.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);