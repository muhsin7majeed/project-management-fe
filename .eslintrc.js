/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "warn",
	},
};
