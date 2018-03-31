// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module'
	},
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		// allow debugger during development
		indent: ['warn', 'tab'],
		'comma-dangle': ['warn'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'always'],
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error']
			}
		],
		'no-inline-comments': ['warn'],
		'no-empty': ['error'],
		'no-useless-escape': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};
