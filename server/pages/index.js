"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(4644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SEO.jsx






function SEO({
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "author",
      content: "Hanzla Tauqeer"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: data.keywords.join(", ")
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "canonical",
      href: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:site_name",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:url",
      content: data.url
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:title",
      content: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:description",
      content: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "twitter:image",
      content: data.image
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "robots",
      content: "Index"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/manifest.json"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "./favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "./favicon.png"
    })]
  });
}

SEO.prototype = {
  data: external_prop_types_default().shape({
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).string,
    image: (external_prop_types_default()).string,
    url: (external_prop_types_default()).string,
    keywords: external_prop_types_default().arrayOf((external_prop_types_default()).string)
  }).isRequired
};
/* harmony default export */ const components_SEO = (SEO);
;// CONCATENATED MODULE: ./pages/index.js


const Navigation = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(426), __webpack_require__.e(664), __webpack_require__.e(990)]).then(__webpack_require__.bind(__webpack_require__, 7271)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7271)],
    modules: ["index.js -> " + "../components/Navigation"]
  }
});
const Greetings = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(794), __webpack_require__.e(185)]).then(__webpack_require__.bind(__webpack_require__, 3185)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3185)],
    modules: ["index.js -> " + "../containers/Greetings"]
  }
});
const Skills = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 688).then(__webpack_require__.bind(__webpack_require__, 5688)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5688)],
    modules: ["index.js -> " + "../containers/Skills"]
  }
}); // const Proficiency = dynamic(() => import("../containers/Proficiency"));

const Education = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 354).then(__webpack_require__.bind(__webpack_require__, 3354)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3354)],
    modules: ["index.js -> " + "../containers/Education"]
  }
});
const Experience = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 974).then(__webpack_require__.bind(__webpack_require__, 3974)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3974)],
    modules: ["index.js -> " + "../containers/Experience"]
  }
});
const Projects = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 829).then(__webpack_require__.bind(__webpack_require__, 4829)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4829)],
    modules: ["index.js -> " + "../containers/Projects"]
  }
}); // const Feedbacks = dynamic(() => import("../containers/Feedbacks"));

const GithubProfileCard = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(426), __webpack_require__.e(675), __webpack_require__.e(794), __webpack_require__.e(551)]).then(__webpack_require__.bind(__webpack_require__, 9551)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9551)],
    modules: ["index.js -> " + "../components/GithubProfileCard"]
  }
});




function Home({
  githubProfileData
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SEO, {
      data: {
        title: "Payal Baldha",
        description: "A passionate Frontend Developer",
        image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
        url: "https://developer-portfolio-1hanzla100.vercel.app",
        keywords: ["Payal", "Baldha", "Frontend Developer", "Angular Developer", "Payal Baldha"]
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Navigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Greetings, {}), /*#__PURE__*/jsx_runtime_.jsx(Skills, {}), /*#__PURE__*/jsx_runtime_.jsx(Education, {}), /*#__PURE__*/jsx_runtime_.jsx(Experience, {}), /*#__PURE__*/jsx_runtime_.jsx(Projects, {}), /*#__PURE__*/jsx_runtime_.jsx(GithubProfileCard, {
      prof: githubProfileData
    })]
  });
}
Home.prototype = {
  githubProfileData: (external_prop_types_default()).object.isRequired
};
async function getStaticProps(_) {
  const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then(res => res.json());
  return {
    props: {
      githubProfileData
    }
  };
}

/***/ }),

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: SkillBars, contact, feedbacks, projects

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.js

const greetings = {
  name: "Payal Baldha",
  title: "Hi all, I'm Payal",
  description: "I'm passionate Frontend Developer having an experience of 4+ years. I have experience working with Angular, VueJs, ReactJs and NodeJs.",
  resumeLink: "https://docs.google.com/document/d/1lwE4_TYljbuAfxTqgEgCbEqBjjNCpROpjEk1Xz0sLqU/edit?usp=sharing"
};
const openSource = {
  githubUserName: "payalasodariya"
};
const contact = {};
const socialLinks = {
  // instagram: "https://www.instagram.com/Baldha___",
  twitter: "https://twitter.com/AsodariyaPayal",
  github: "https://github.com/payalasodariya",
  linkedin: "https://www.linkedin.com/in/payalasodariya"
};
const skillsSection = {
  title: "What I do",
  subTitle: "Frontend Development | Backend Development ",
  data: [{
    title: "Frontend Development & Backend Development",
    lottieAnimationFile: "/lottie/skills/fullstack.json",
    // Path of Lottie Animation JSON File
    skills: [external_react_easy_emoji_default()("⚡ Building Reusable Component Based Web Applications"), external_react_easy_emoji_default()("⚡ Building RESTful APIs")],
    softwareSkills: [{
      skillName: "Angular",
      fontAwesomeClassname: "vscode-icons:file-type-angular"
    }, {
      skillName: "Nodejs",
      fontAwesomeClassname: "logos:nodejs"
    }, {
      skillName: "ReactJs",
      fontAwesomeClassname: "vscode-icons:file-type-reactts"
    }, {
      skillName: "ViewJs",
      fontAwesomeClassname: "vscode-icons:file-type-vue"
    }, {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript"
    }, {
      skillName: "NPM",
      fontAwesomeClassname: "logos:npm-icon"
    }, {
      skillName: "Yarn",
      fontAwesomeClassname: "logos:yarn"
    }, {
      skillName: "HTML-5",
      fontAwesomeClassname: "vscode-icons:file-type-html"
    }, {
      skillName: "CSS-3",
      fontAwesomeClassname: "vscode-icons:file-type-css"
    }]
  } // ,
  // {
  // 	title: "Blockchain",
  // 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
  // 	skills: [
  // 		emoji(
  // 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
  // 		),
  // 		emoji(
  // 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
  // 		),
  // 		emoji(
  // 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
  // 		),
  // 		emoji(
  // 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
  // 		),
  // 		emoji(
  // 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
  // 		),
  // 	],
  // 	softwareSkills: [
  // 		{
  // 			skillName: "Ethereum",
  // 			fontAwesomeClassname: "logos:ethereum",
  // 		},
  // 		{
  // 			skillName: "Solidity",
  // 			fontAwesomeClassname: "logos:solidity",
  // 		},
  // 		{
  // 			skillName: "Web3js",
  // 			fontAwesomeClassname: "logos:web3js",
  // 		},
  // 		{
  // 			skillName: "Metamask",
  // 			fontAwesomeClassname: "logos:metamask-icon",
  // 		},
  // 		{
  // 			skillName: "Ganache",
  // 			fontAwesomeClassname: "logos:ganache-icon",
  // 		},
  // 	],
  // },
  ]
};
const SkillBars = (/* unused pure expression or super */ null && ([// {
  // 	Stack: "Frontend/Design", //Insert stack or technology you have experience in
  // 	progressPercentage: "90", //Insert relative proficiency in percentage
  // },
  // {
  // 	Stack: "Backend",
  // 	progressPercentage: "70",
  // },
  // {
  // 	Stack: "Programming",
  // 	progressPercentage: "60",
  // },
]));
const educationInfo = [{
  University: "Gujarat Technological University",
  subHeader: "Bachelor of Engineering in Computer Engineering",
  duration: "Aug 2013 - May 2017",
  desc: "",
  descBullets: ["Completed my graduation by securing 8.5 CGPA"]
}];
const experience = [{
  role: "Application development senior analyst ",
  company: "Accenture",
  companylogo: "/img/icons/common/Accenture-Logo.png",
  date: "Jan 2022 – July 2022",
  desc: "I worked as a Senior Software Developer at Accenture.",
  descBullets: ["Responsible for software development using Angular and maintenance across the codebase", "Migrating codebase and producing maintainable code that respects established standards and best practices", "Contributed to the continuous improvement of the product through agile methodology"]
}, {
  role: "Full stack developer",
  company: "Codeflash Infotech",
  companylogo: "/img/icons/common/codeflash.png",
  date: "Jan 2020 – Dec 2021",
  desc: "Here being a full stack developer, my role was to work with ReactJs, VueJs and NodeJs.",
  descBullets: ["Implemented various pages using react js(typescript) reusable components, used redux and redux-saga for state management", "Integrated payment gateway(Stripe) in ecommerce webapp and used google maps, angular instant search, graphQL and firebase for authentication", "Created architecture for web application", "experience in RESTful web services to integrate between client and server side"]
}, {
  role: "Tech Lead",
  company: "Srkay Consulting Group",
  companylogo: "/img/icons/common/scikey.png",
  date: "June 2017 - Jan 2020",
  desc: "Developed a high-performance web platform for a SaaS product SCIKEY, used by 100+ clients",
  descBullets: ["Designed few feature flows, UI and databases", "Initiated Angular web application base structures and npm packages for future effort minimization", "Worked as a front end developer(Angular 2, 4, 5), Implemented chat bot(Angular, NodeJs, Google Dialog-flow, Socket Programming, mongodb)", "Generated REST APIs and integrated with the front end"]
}];
const projects = (/* unused pure expression or super */ null && ([]));
const feedbacks = (/* unused pure expression or super */ null && ([// {
  // 	name: "John Smith",
  // 	feedback:
  // 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  // },
  // {
  // 	name: "John Smith",
  // 	feedback:
  // 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  // },
]));

/***/ }),

/***/ 7068:
/***/ ((module) => {

module.exports = require("@iconify/react");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9102:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 9356:
/***/ ((module) => {

module.exports = require("react-reveal");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6099:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(1152)));
module.exports = __webpack_exports__;

})();