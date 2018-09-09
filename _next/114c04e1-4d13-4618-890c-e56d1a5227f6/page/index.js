module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([4],{609:function(e,t,n){e.exports=n(610)},610:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),o=p(n(62)),m=p(n(70)),r=p(n(611));function p(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)(function(){return a.default.createElement(m.default,null,a.default.createElement(r.default,null))});t.default=l},611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(0))&&a.__esModule?a:{default:a},m=n(45);function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;r(e,["components"]);return o.default.createElement(m.MDXTag,{name:"wrapper",components:t},o.default.createElement(m.MDXTag,{name:"p",components:t},o.default.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://circleci.com/gh/luk707/components"}},o.default.createElement(m.MDXTag,{name:"img",components:t,parentName:"a",props:{src:"https://circleci.com/gh/luk707/components.svg?style=shield",alt:"CircleCI"}})),o.default.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://cla-assistant.io/luk707/components"}},o.default.createElement(m.MDXTag,{name:"img",components:t,parentName:"a",props:{src:"https://cla-assistant.io/readme/badge/luk707/components",alt:"CLA assistant"}})),o.default.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.com/package/@luk707/components"}},o.default.createElement(m.MDXTag,{name:"img",components:t,parentName:"a",props:{src:"https://badge.fury.io/js/%40luk707%2Fcomponents.svg",alt:"npm version"}}))),o.default.createElement(m.MDXTag,{name:"h1",components:t},"@luk707/components"),o.default.createElement(m.MDXTag,{name:"p",components:t},"A library of themable react components."),o.default.createElement(m.MDXTag,{name:"h2",components:t},"Getting started"),o.default.createElement(m.MDXTag,{name:"p",components:t},"Install ",o.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"@luk707/components")," into your project:"),o.default.createElement(m.MDXTag,{name:"pre",components:t},o.default.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre"},"$ npm i @luk707/components -S\n")),o.default.createElement(m.MDXTag,{name:"p",components:t},"The library depends on emotion for styles. First; install ",o.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"emotion")," and ",o.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"emotion-theming")," into your project:"),o.default.createElement(m.MDXTag,{name:"pre",components:t},o.default.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre"},"$ npm i emotion emotion-theming -S\n")),o.default.createElement(m.MDXTag,{name:"p",components:t},"Once you have these dependencies installed we need to wrapp your application with a theme. All components of this library must be a child of the ",o.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ThemeProvider")," in order to work."),o.default.createElement(m.MDXTag,{name:"p",components:t},"Generate a theme using the ",o.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"createTheme")," method exported from the package. To see how this can be configured see the ",o.default.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"theming"}},"theming")," documentation."),o.default.createElement(m.MDXTag,{name:"pre",components:t},o.default.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},'import React from "react";\nimport { render } from "react-dom";\nimport { ThemeProvider } from "emotion-theming";\nimport createTheme from "@luk707/components/lib/theme/create-theme";\nimport App from "./app";\n\nconst theme = createTheme();\n\nrender(\n  <ThemeProvider theme={theme}>\n    <App />\n  </ThemeProvider>,\n  document.getElementById("app")\n);\n')))}}},[609]).default}});