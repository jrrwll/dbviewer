const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    extends: ["airbnb-typescript-prettier"],
    rules: {
        "semi": OFF, // typescript export default interface will trigger a conflict with no-semi.
        "no-unused-vars": OFF,
        "no-plusplus": OFF,
        "no-param-reassign": OFF,
        "no-continue": OFF,
        "prefer-destructuring": OFF,
        "camelcase": OFF,
        "no-nested-ternary": OFF,
        "import/no-unresolved": OFF, // eslint can't handle alias path without third deps.
        "import/prefer-default-export": WARNING,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        "react/prop-types": OFF,
    },
};
