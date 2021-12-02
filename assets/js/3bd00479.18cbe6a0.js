"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[771],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a={id:"overview",title:"Testing Overview"},s=void 0,c={unversionedId:"Testing/overview",id:"Testing/overview",isDocsHomePage:!1,title:"Testing Overview",description:"When the platform was first developed we only had a few small modules and use cases, and were able to reasonably manage testing via user testing and strict(ish) typescript typings. Those lightweight days didn't last forever however, and it was decided that an initial testing strategy would first focus on end-to-end tests for common user journeys through core modules (e.g. reading and creating howtos, updating user profiles etc.)",source:"@site/docs/Testing/overview.md",sourceDirName:"Testing",slug:"/Testing/overview",permalink:"/community-platform/Testing/overview",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Testing/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Testing Overview"},sidebar:"mainSidebar",previous:{title:"Integrations",permalink:"/community-platform/Backend Development/integrations"},next:{title:"E2E Testing",permalink:"/community-platform/Testing/end-to-end"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When the platform was first developed we only had a few small modules and use cases, and were able to reasonably manage testing via user testing and strict(ish) typescript typings. Those lightweight days didn't last forever however, and it was decided that an initial testing strategy would first focus on end-to-end tests for common user journeys through core modules (e.g. reading and creating howtos, updating user profiles etc.)"),(0,i.kt)("p",null,"Since then we've mostly focused on building out end-to-end tests in cypress, and are yet to implement specific unit or integration testing strategies (although jest is currently supported and some spec files already exist). You can find documentation in the following pages to help get up and running with the existing test suite."),(0,i.kt)("p",null,"If you would be interested in helping us to develop an improved long-term testing strategy feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/discussions"},"Open A Discussion")," on Github"))}p.isMDXComponent=!0}}]);