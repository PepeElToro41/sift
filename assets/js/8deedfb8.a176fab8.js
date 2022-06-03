"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,f=m["".concat(d,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={},d="Changelog",p={type:"mdx",permalink:"/sift/CHANGELOG",source:"@site/pages/CHANGELOG.md"},c=[{value:"0.0.2",id:"002",children:[{value:"Changed",id:"changed",children:[],level:3}],level:2},{value:"0.0.1",id:"001",children:[{value:"Added",id:"added",children:[],level:3},{value:"Changed",id:"changed-1",children:[],level:3}],level:2},{value:"0.0.0",id:"000",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"002"},"[0.0.2]"),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat(Deep)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.merge(Deep)")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.merge")," would not accept holes (",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," values) in their arguments. This would cause the function to stop processing further arguments once it found a ",(0,a.kt)("inlineCode",{parentName:"li"},"nil")," value."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.insert")," would not insert the element at the correct index. An index of ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," will now insert the element at the end of the array. ",(0,a.kt)("inlineCode",{parentName:"li"},"length+1")," will also insert the element at the end of the array. ",(0,a.kt)("inlineCode",{parentName:"li"},"length+2")," (or greater) will be ignored, and the original array will be returned."),(0,a.kt)("li",{parentName:"ul"},"Bumped tooling versions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rojo to v7.1.1"),(0,a.kt)("li",{parentName:"ul"},"stylua to v0.13.1"),(0,a.kt)("li",{parentName:"ul"},"selene to v0.17.0")))),(0,a.kt)("h2",{id:"001"},"[0.0.1]"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic ",(0,a.kt)("strong",{parentName:"li"},"TypeScript (roblox-ts) support")," (no tsdoc yet)! \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},"Implemented ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")),(0,a.kt)("li",{parentName:"ul"},"Added typings to ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")),(0,a.kt)("li",{parentName:"ul"},"Added aliases for ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concat"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.concatDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.push"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.unshift"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.find"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Array.includes"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.join"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.joinDeep"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.fromArray"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.merge"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Set.delete")),(0,a.kt)("li",{parentName:"ul"},"Added doc pages for installation and usage samples")),(0,a.kt)("h3",{id:"changed-1"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exposed ",(0,a.kt)("inlineCode",{parentName:"li"},"isEmpty")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"equalObjects")," from the root module"),(0,a.kt)("li",{parentName:"ul"},"Improved typings for methods accepting predictes"),(0,a.kt)("li",{parentName:"ul"},"Updated documentation for some methods"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"Dictionary.flatten")," being shown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Array")," docs (wrong ",(0,a.kt)("inlineCode",{parentName:"li"},"@within")," tag)")),(0,a.kt)("h2",{id:"000"},"[0.0.0]"),(0,a.kt)("p",null,"Initial development version."))}m.isMDXComponent=!0}}]);