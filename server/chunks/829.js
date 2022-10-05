"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Projects)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(4644);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ProjectsCard.jsx






const ProjectsCard = ({
  data
}) => {
  return /*#__PURE__*/_jsx(Col, {
    lg: "6",
    children: /*#__PURE__*/_jsx(Fade, {
      bottom: true,
      duration: 2000,
      children: /*#__PURE__*/_jsx(Card, {
        className: "shadow-lg--hover shadow mt-4",
        children: /*#__PURE__*/_jsx(CardBody, {
          children: /*#__PURE__*/_jsx("div", {
            className: "d-flex px-3",
            children: /*#__PURE__*/_jsxs("div", {
              className: "pl-4",
              children: [/*#__PURE__*/_jsx("h3", {
                children: data.name
              }), /*#__PURE__*/_jsx("p", {
                className: "description mt-3",
                children: data.desc
              }), data.github ? /*#__PURE__*/_jsx(Button, {
                className: "btn-icon",
                color: "github",
                href: data.github,
                target: "_blank",
                rel: "noopener",
                "aria-label": "Github",
                children: /*#__PURE__*/_jsx("span", {
                  className: "btn-inner--icon",
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fa fa-github"
                  })
                })
              }) : null, data.link ? /*#__PURE__*/_jsxs(Button, {
                className: "btn-icon",
                color: "success",
                href: data.link,
                target: "_blank",
                rel: "noopener",
                "aria-label": "Twitter",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "btn-inner--icon",
                  children: /*#__PURE__*/_jsx("i", {
                    className: "fa fa-arrow-right mr-2"
                  })
                }), /*#__PURE__*/_jsx("span", {
                  className: "nav-link-inner--text ml-1",
                  children: "Demo"
                })]
              }) : null]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_ProjectsCard = ((/* unused pure expression or super */ null && (ProjectsCard)));
;// CONCATENATED MODULE: ./containers/Projects.jsx








const Projects = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

/* harmony default export */ const containers_Projects = (Projects);

/***/ })

};
;