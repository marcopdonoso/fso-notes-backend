module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
	extends: ['eslint:recommended', 'prettier'],
}
