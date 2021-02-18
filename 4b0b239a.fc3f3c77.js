(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),u=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||r;return n?l.a.createElement(h,o(o({ref:t},c),{},{components:n})):l.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),l=n(8),r=(n(0),n(106)),i={id:"hateful_memes_challenge",title:"Hateful Memes Challenge",sidebar_label:"Hateful Memes Challenge"},o={unversionedId:"challenges/hateful_memes_challenge",id:"challenges/hateful_memes_challenge",isDocsHomePage:!1,title:"Hateful Memes Challenge",description:"The Hateful Memes challenge is available at this link.",source:"@site/docs/challenges/hateful_memes_challenge.md",slug:"/challenges/hateful_memes_challenge",permalink:"/docs/challenges/hateful_memes_challenge",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/challenges/hateful_memes_challenge.md",version:"current",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1601656766,sidebar_label:"Hateful Memes Challenge",sidebar:"docs",previous:{title:"Large Scale Hyperparameter Sweeps on Slurm",permalink:"/docs/tutorials/slurm"},next:{title:"TextVQA Challenge",permalink:"/docs/challenges/textvqa_challenge"}},s=[{value:"Installation and Preparing the dataset",id:"installation-and-preparing-the-dataset",children:[]},{value:"Training and Evaluation",id:"training-and-evaluation",children:[{value:"Training",id:"training",children:[]},{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Predictions for Challenge",id:"predictions-for-challenge",children:[]},{value:"Submission for Challenge",id:"submission-for-challenge",children:[]},{value:"Predicting for Phase 1",id:"predicting-for-phase-1",children:[]},{value:"Building on top of MMF and Open Sourcing your code",id:"building-on-top-of-mmf-and-open-sourcing-your-code",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Hateful Memes challenge is available at ",Object(r.b)("a",{parentName:"p",href:"https://www.drivendata.org/competitions/70/hateful-memes-phase-2/data/"},"this link"),"."),Object(r.b)("p",null,"In MMF, we provide the starter code and baseline pretrained models for this challenge and the configurations used for training the reported baselines. For more details check ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/master/projects/hateful_memes"},"this link"),"."),Object(r.b)("p",null,"In this tutorial, we provide steps for running training and evaluation with MMBT model on hateful memes dataset and generating submission file for the challenge. The same steps can be used for your own models."),Object(r.b)("h2",{id:"installation-and-preparing-the-dataset"},"Installation and Preparing the dataset"),Object(r.b)("p",null,"Follow the prerequisites for installation and dataset ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/master/projects/hateful_memes#prerequisites"},"here"),"."),Object(r.b)("h2",{id:"training-and-evaluation"},"Training and Evaluation"),Object(r.b)("h3",{id:"training"},"Training"),Object(r.b)("p",null,"For running training on train set, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mmf_run config=projects/hateful_memes/configs/mmbt/defaults.yaml \\\n    model=mmbt \\\n    dataset=hateful_memes \\\n    run_type=train_val\n")),Object(r.b)("p",null,"This will train the ",Object(r.b)("inlineCode",{parentName:"p"},"mmbt")," model on the dataset and generate the checkpoints and best trained model (",Object(r.b)("inlineCode",{parentName:"p"},"mmbt_final.pth"),") will be stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"./save")," directory by default."),Object(r.b)("h3",{id:"evaluation"},"Evaluation"),Object(r.b)("p",null,"Next run evaluation on the validation set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mmf_run config=projects/hateful_memes/configs/mmbt/defaults.yaml \\\n    model=mmbt \\\n    dataset=hateful_memes \\\n    run_type=val \\\n    checkpoint.resume_file=./save/mmbt_final.pth \\\n    checkpoint.resume_pretrained=False\n")),Object(r.b)("p",null,"This will give you the performance of your model on the validation set. The metrics are AUROC, ACC, Binary F1 etc."),Object(r.b)("h2",{id:"predictions-for-challenge"},"Predictions for Challenge"),Object(r.b)("p",null,"After we trained the model and evaluated on the validation set, we will generate the predictions on the test set. The prediction file should contain the following three columns:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Meme identification number, ",Object(r.b)("inlineCode",{parentName:"li"},"id")),Object(r.b)("li",{parentName:"ul"},"Probability that the meme is hateful, ",Object(r.b)("inlineCode",{parentName:"li"},"proba")),Object(r.b)("li",{parentName:"ul"},"Binary label that the meme is hateful (1) or non-hateful (0), ",Object(r.b)("inlineCode",{parentName:"li"},"label"))),Object(r.b)("p",null,"With MMF you can directly generate the predictions in the required submission format with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mmf_predict config=projects/hateful_memes/configs/mmbt/defaults.yaml \\\n    model=mmbt \\\n    dataset=hateful_memes \\\n    run_type=test \\\n    checkpoint.resume_pretrained=False\n")),Object(r.b)("p",null,"This command will output where the generated predictions csv file is stored."),Object(r.b)("h2",{id:"submission-for-challenge"},"Submission for Challenge"),Object(r.b)("p",null,"Next you can upload the generated csv file on DrivenData in their ",Object(r.b)("a",{parentName:"p",href:"https://www.drivendata.org/competitions/70/hateful-memes-phase-2/data//submissions/"},"submissions")," page for Hateful Memes."),Object(r.b)("p",null,"More details will be added once the challenge submission phase is live."),Object(r.b)("h2",{id:"predicting-for-phase-1"},"Predicting for Phase 1"),Object(r.b)("p",null,"If you want to submit prediction for phase 1, you will need to use command line opts to override the jsonl files that are loaded. At the end of any command you run, add the following to load seen dev and test splits:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"dataset_config.hateful_memes.annotations.val[0]=hateful_memes/defaults/annotations/dev_seen.jsonl \\\ndataset_config.hateful_memes.annotations.test[0]=hateful_memes/defaults/annotations/test_seen.jsonl\n")),Object(r.b)("p",null,"This will load the phase 1 files for you and evaluate those."),Object(r.b)("h2",{id:"building-on-top-of-mmf-and-open-sourcing-your-code"},"Building on top of MMF and Open Sourcing your code"),Object(r.b)("p",null,"To understand how you build on top of MMF for your own custom models and then open source your code, take a look at this ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apsdehal/hm_example_mmf"},"example"),"."))}u.isMDXComponent=!0}}]);