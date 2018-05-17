import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

/* postCSS plugins */
import urlInliner from 'postcss-url';

const peerDependencies = Object.keys(require('./package.json').peerDependencies)

export default {
	input: 'src/bootstrap-select-country.js',
	output: {
		file: 'dist/js/bootstrap-select-country.min.js',
		format: 'iife',
		name: 'countrypicker',
		sourcemap: true,
		globals: {
			jquery: 'window.$'
		},
	},

	external: peerDependencies,

	plugins: [
		json(),
		postcss({
			extensions: [ '.css' ],
			plugins: [
				urlInliner({
					url: "inline"
				}),
			],
		}),
		babel(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
		uglify(),
	]
}
