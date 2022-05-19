"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},p="Changelog",c={type:"mdx",permalink:"/sift/CHANGELOG",source:"@site/pages/CHANGELOG.md"},d=[{value:"0.0.1",id:"001",children:[{value:"Added",id:"added",children:[],level:3},{value:"Changed",id:"changed",children:[],level:3}],level:2},{value:"0.0.0",id:"000",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"001"},"[0.0.1]"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic ",(0,a.kt)("strong",{parentName:"li"},"TypeScript (roblox-ts) support")," (no tsdoc yet)! \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},"Implemented ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")),(0,a.kt)("li",{parentName:"ul"},"Added typings to ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")),(0,a.kt)("li",{parentName:"ul"},"Added aliases for ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concatDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.push"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.unshift"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.find"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.includes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.join"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.joinDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.fromArray"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.merge"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.delete")),(0,a.kt)("li",{parentName:"ul"},"Added doc pages for installation and usage samples")),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exposed ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")," from the root module"),(0,a.kt)("li",{parentName:"ul"},"Improved typings for methods accepting predictes"),(0,a.kt)("li",{parentName:"ul"},"Updated documentation for some methods"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.flatten")," being shown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," docs (wrong ",(0,a.kt)("inlineCode",{parentName:"li"},"@within")," tag)")),(0,a.kt)("h2",{id:"000"},"[0.0.0]"),(0,a.kt)("p",null,"Initial development version."))}m.isMDXComponent=!0}}]);