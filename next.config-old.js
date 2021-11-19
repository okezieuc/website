const withTM = require("next-transpile-modules")([
  "react-markdown",
  "remark-math",
  "micromark-util-symbol",
  "mdast-util-math",
  "longest-streak",
  "mdast-util-to-markdown",
  "rehype-katex",
  "unist-util-visit",
  "unist-util-is",
  "hast-util-to-text",
  "hast-util-is-element",
  "unist-util-find-after",
  "unified",
  "bail",
  "is-plain-obj",
  "trough",
  "vfile",
]);

module.exports = withTM({});
