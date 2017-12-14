// Rollup plugins.
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import json from 'rollup-plugin-json';
//future
let includePathOptions = {
  paths: ['src/common'],
};
export default {
  dest: 'build/app/index.js',
  entry: 'src/app/index.js',
  format: 'iife',
  plugins: [
    includePaths(includePathOptions),

    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),

    cjs({
      sourceMap: false,

      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true,
    }),
  ],
  sourceMap: true,
};
