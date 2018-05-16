import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const peerDependencies = Object.keys(require('./package.json').peerDependencies)

export default {
	external: peerDependencies,
	input: 'js/bootstrap-select-country.js',
	output: {
		file: 'dist/js/bootstrap-select-country.min.js',
		format: 'iife',
		name: 'countrypicker',
		sourcemap: true,
	},

	plugins: [
		json(),
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
