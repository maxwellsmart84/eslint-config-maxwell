module.exports = {
  "globals": {
    "$": true,
    "describe": true,
    "it": true,
    "xit": true,
    "sinon": true,
    "expect": true,
    "before": true,
    "beforeEach": true,
    "after": true,
    "afterEach": true
  },
    "env": {
      "node": true
    },
    "extends": "airbnb-base",
    "ecmaFeatures": {
      "ecmaScript": 8,
      "modules": true
    },
    "rules": {
      "no-use-before-define": [ 2, { "functions": false } ],
      "object-curly-newline": [2, { "multiline": true }],
      "comma-dangle": [2, {"objects": "always-multiline"}],
      "import/prefer-default-export": false
    }
}