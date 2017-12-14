// Rollup plugins.
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

// Import the development configuration.
import config from '../app/dev';
let pkg = require('../../package.json');
let external = Object.keys(pkg.dependencies).concat(
  Object.keys(pkg.peerDependencies)
);
// Inject the production settings.
config.entry = 'src/lib.js';
config.dest = 'build/lib/index.min.js';
config.format = 'cjs';
config.external = external;
config.plugins[3] = replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
config.plugins.push(uglify());

export default config;
