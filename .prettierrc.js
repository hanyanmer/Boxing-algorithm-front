// {
//   "printWidth": 80,
//   "singleQuote": true,
//   "trailingComma": "all",
//   "proseWrap": "never",
//   "overrides": [{ "files": ".prettierrc", "options": { "parser": "json" } }],
//   "plugins": ["prettier-plugin-organize-imports", "prettier-plugin-packagejson"]
// }

const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
};
