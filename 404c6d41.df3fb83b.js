(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),s=(n(0),n(412)),l={title:"Adding Unit Tests"},o={unversionedId:"Adding-Unit-Tests",id:"Adding-Unit-Tests",isDocsHomePage:!1,title:"Adding Unit Tests",description:"Premake includes an automated testing system that you can use the verify the behavior of your new module.",source:"@site/docs/Adding-Unit-Tests.md",slug:"/Adding-Unit-Tests",permalink:"/docs/Adding-Unit-Tests",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Adding-Unit-Tests.md",version:"current"},i=[{value:"Add your first test",id:"add-your-first-test",children:[]},{value:"Enable the testing module",id:"enable-the-testing-module",children:[]},{value:"Run your test",id:"run-your-test",children:[]},{value:"Passing a test",id:"passing-a-test",children:[]},{value:"Next steps?",id:"next-steps",children:[]}],u={toc:i};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Premake includes an automated testing system that you can use the verify the behavior of your new module."),Object(s.b)("h2",{id:"add-your-first-test"},"Add your first test"),Object(s.b)("p",null,"Within our ",Object(s.b)("a",{parentName:"p",href:"introducing-modules"},"Lucky module")," folder, create a new folder named ",Object(s.b)("inlineCode",{parentName:"p"},"tests"),"."),Object(s.b)("p",null,"Within that folder, create a new file named ",Object(s.b)("inlineCode",{parentName:"p"},"tests/test_lucky_numbers.lua")," with a simple failing test:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lua"},'local suite = test.declare("lucky_numbers")\n\nfunction suite.aFailingTest()\n    test.isequal(2, 3)\nend\n')),Object(s.b)("p",null,"You'll also need a manifest to list all of your test files. Create another file in that same folder named ",Object(s.b)("inlineCode",{parentName:"p"},"_tests.lua"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lua"},"lucky = require('lucky')  -- replace with name of your module, obviously\n\nreturn {\n    \"test_lucky_numbers.lua\",\n}\n")),Object(s.b)("p",null,"When you're all done, your module should now look like:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"lucky/\n|- lucky.lua\n`- tests/\n    |- _tests.lua\n    `- test_lucky_numbers.lua\n")),Object(s.b)("h2",{id:"enable-the-testing-module"},"Enable the testing module"),Object(s.b)("p",null,"Premake's automated testing module is considered an advanced, developer-only feature which is not enabled by default. To enable it, you simply need to add the line ",Object(s.b)("inlineCode",{parentName:"p"},'test = require("self-test")')," somewhere it will be executed before your tests run."),Object(s.b)("p",null,"The best place to put it is in your ",Object(s.b)("a",{parentName:"p",href:"system-scripts"},"system script"),", which will make the testing action available to all of your projects. But if that isn't feasible for you or your users, you can also place it in your project or testing script."),Object(s.b)("p",null,"Premake's own code makes use of the latter approach: its ",Object(s.b)("inlineCode",{parentName:"p"},"premake5.lua"),' script defines a custom action named "test", which in turn enables the built-in testing module:'),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lua"},'newaction {\n    trigger = "test",\n    description = "Run the automated test suite",\n    execute = function ()\n        test = require "self-test"\n        premake.action.call("self-test")\n    end\n    }\n')),Object(s.b)("h2",{id:"run-your-test"},"Run your test"),Object(s.b)("p",null,"Once the testing module is enabled, ",Object(s.b)("inlineCode",{parentName:"p"},"cd")," to your module folder and run the command ",Object(s.b)("inlineCode",{parentName:"p"},"premake5 self-test"),". You should see your simple failing test fail."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ premake5 self-test\nRunning action 'self-test'...\nlucky_numbers.aFailingTest: ...e/Premake/Modules/lucky/tests/test_lucky_numbers.lua:4: expected 2 but was 3\n0 tests passed, 1 failed in 0.00 seconds\n")),Object(s.b)("p",null,"If developing new tests for premake itself, it is often beneficial to run smaller subsets of tests with the command-line option --test-only:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ premake5 --test-only=lucky_numbers test\n")),Object(s.b)("h2",{id:"passing-a-test"},"Passing a test"),Object(s.b)("p",null,"To complete the example, let's replace our failing test with one which actually calls our module."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lua"},'local suite = test.declare("lucky_numbers")\n\nfunction suite.makesEightLucky()\n    local x = lucky.makeNumberLucky(8)\n    test.isequal(56, x)\nend\n')),Object(s.b)("p",null,"And give it a go:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"$ premake5 self-test\nRunning action 'self-test'...\n1 tests passed, 0 failed in 0.00 seconds\n")),Object(s.b)("h2",{id:"next-steps"},"Next steps?"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"tests")," folder in the Premake source code contains over 1,000 tests which you can use as examples. The ones in ",Object(s.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/tree/master/tests/actions/vstudio/vc2010"},Object(s.b)("inlineCode",{parentName:"a"},"tests/actions/vstudio/vc2010"))," tend to be the most frequently updated and maintained, and generally make the best examples."),Object(s.b)("p",null,"You can see the full set of test assertions (",Object(s.b)("inlineCode",{parentName:"p"},"test.isequal()"),", ",Object(s.b)("inlineCode",{parentName:"p"},"test.capture()"),", etc.) in the Premake source code at ",Object(s.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/blob/master/modules/self-test/test_assertions.lua"},Object(s.b)("inlineCode",{parentName:"a"},"modules/self-test/test_assertions.lua")),"."))}c.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||s;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);