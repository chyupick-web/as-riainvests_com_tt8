(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{441:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),s=r,h=m["".concat(i,".").concat(s)]||m[s]||b[s]||o;return a?n.a.createElement(h,c(c({ref:t},p),{},{components:a})):n.a.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(441)),i={title:"Community Update #7",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},c={permalink:"/blog/2021/02/24/community-update-7",source:"@site/blog/2021-02-24-community-update-7.md",description:"A quick update this cycle so I can get right back to it: I managed to free up meaningful blocks of time for Premake in February\u2014felt good!\u2014and tackle files and removeFiles, support configuration and platform specific files, and get it all exporting to Visual Studio (\u2026and bulldoze through the rabbit holes along the way). From the user-facing side not a big change, but a hefty commit just the same. The core platform is starting to feel reasonably complete.",date:"2021-02-24T00:00:00.000Z",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],title:"Community Update #7",readingTime:1.845,truncated:!1,nextItem:{title:"Community Update #6",permalink:"/blog/2020/11/02/community-udpate-6"}},l=[{value:"What&#39;s Next",id:"whats-next",children:[]},{value:"Meanwhile in V5",id:"meanwhile-in-v5",children:[]},{value:"Thanks!",id:"thanks",children:[]}],p={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A quick update this cycle so I can get right back to it: I managed to free up meaningful blocks of time for Premake in February\u2014felt good!\u2014and tackle ",Object(o.b)("strong",{parentName:"p"},"files")," and ",Object(o.b)("strong",{parentName:"p"},"removeFiles"),", support configuration and platform specific files, and get it all exporting to Visual Studio (\u2026and bulldoze through the rabbit holes along the way). From the user-facing side not a big change, but ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/commit/f5cb8678a6cc2939faceacbb8143bd9a094709f6"},"a hefty commit")," just the same. The core platform is starting to feel reasonably complete."),Object(o.b)("h3",{id:"whats-next"},"What's Next"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For real this time, first thing: step away from the code and open an RFC on merging the projects. I've never been great at that whole \"stepping away from the code\" thing but I'll do my very best."),Object(o.b)("li",{parentName:"ul"},"Work with ",Object(o.b)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS")," to bring ",Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1587"},"a new & improved documentation system online"),".")),Object(o.b)("p",null,"Longer term: push to get the new code to the point where it can generate its own Visual Studio project files. I've actually done a good chunk of work on this, but wasn't quite able to bring it home this month. Then do the same with Xcode."),Object(o.b)("h3",{id:"meanwhile-in-v5"},"Meanwhile in V5"),Object(o.b)("p",null,"The community making the world a better place\u2026"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1551"},"#1551")," Add NetCore to CLR API (",Object(o.b)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1554"},"#1554")," ","[clang]"," Use ",Object(o.b)("inlineCode",{parentName:"li"},"llvm-ar")," linker when LTO flag is set (",Object(o.b)("a",{parentName:"li",href:"https://github.com/JoelLinn"},"@JoelLinn"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1552"},"#1552")," Fix MSC LTO, runtime, subsystem (",Object(o.b)("a",{parentName:"li",href:"https://github.com/JoelLinn"},"@JoelLinn"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1560"},"#1560")," Add newer shader versions (",Object(o.b)("a",{parentName:"li",href:"https://github.com/dpeter99"},"@dpeter99"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1562"},"#1562")," Remove moduledownloader to avoid RCE (",Object(o.b)("a",{parentName:"li",href:"https://github.com/gibbed"},"@gibbed"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1564"},"#1564")," Improve .NET version check to support net5.0+ (",Object(o.b)("a",{parentName:"li",href:"https://github.com/ClxS"},"@ClxS"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1565"},"#1565")," Move AllowUnsafeBlocks to project level property (",Object(o.b)("a",{parentName:"li",href:"https://github.com/ClxS"},"@ClxS"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1566"},"#1566")," Set execute bit on Bootstrap.bat (",Object(o.b)("a",{parentName:"li",href:"https://github.com/ratzlaff"},"@ratzlaff"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1571"},"#1571")," Add useFullPaths for Visual Studio projects (",Object(o.b)("a",{parentName:"li",href:"https://github.com/public"},"@cos-public"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1576"},"#1576")," Mesh and amplification shader type for Visual Studio (",Object(o.b)("a",{parentName:"li",href:"https://github.com/pkurth"},"@pkurth"),")")),Object(o.b)("h3",{id:"thanks"},"Thanks!"),Object(o.b)("p",null,"Kudos and a call out to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/samsinsane"},"@samsinsane"))," and the contributors listed above, ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," for their continued strong financial support, and to ",Object(o.b)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"all of our monthly backers"),"! Be sure to check out their work and support them back if you can!"),Object(o.b)("p",null,"Lots of big changes happening\u2014I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set to the coding style. You can message or DM me at ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",Object(o.b)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or open an issue on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"the premake-next GitHub project"),"."),Object(o.b)("p",null,"~st."))}u.isMDXComponent=!0}}]);