(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(10),o=(r(0),r(173)),i={id:"features",title:"MMF Features",sidebar_label:"MMF Features"},s={id:"getting_started/features",title:"MMF Features",description:"MMF is powered by PyTorch and features:",source:"@site/docs/getting_started/features.md",permalink:"/docs/getting_started/features",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/getting_started/features.md",lastUpdatedBy:"Devi Parikh",lastUpdatedAt:1593475191,sidebar_label:"MMF Features",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting_started/installation"},next:{title:"Quickstart",permalink:"/docs/getting_started/quickstart"}},l=[],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MMF is powered by PyTorch and features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Model Zoo"),": Reference implementations for state-of-the-art vision and language models including ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1908.03557"}),"VisualBERT"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1908.02265"}),"ViLBERT"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1911.06258"}),"M4C")," (SoTA on TextVQA and TextCaps), ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/abs/1807.09956"}),"Pythia")," (VQA 2018 challenge winner), and many others. See the full list of projects in MMF ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/notes/projects"}),"here"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Multi-Tasking"),": Support for training on multiple datasets together."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Datasets"),": Includes built-in support for various datasets including VQA, VizWiz, TextVQA, Visual Dialog and COCO Captioning. Running a single command automatically downloads and sets up the dataset for you."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Modules"),": Provides implementations of many commonly used layers in vision and language."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Distributed"),": Support for distributed training using DistributedDataParallel. With our hyperparameter sweep support, you can scale your model to any number of nodes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Unopinionated"),": Unopinionated about the dataset and model implementations built on top of it."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Customization"),": Custom losses, metrics, scheduling, optimizers, tensorboard; suits all your custom needs.")))}u.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);