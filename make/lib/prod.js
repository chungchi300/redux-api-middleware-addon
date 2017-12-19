// Rollup plugins.
import replace from 'rollup-plugin-replace';
// import uglify from 'rollup-plugin-uglify';

// Import the development configuration.
import config from '../app/dev';
let pkg = require('../../package.json');
let external = Object.keys(pkg.dependencies);
external = external.concat(Object.keys(pkg.peerDependencies));

// Inject the production settings.
config.external = external;
config.entry = 'src/export/lib.js';
config.dest = 'build/lib/index.min.js';
config.format = 'cjs';
config.plugins[3] = replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
});
// config.plugins.push(uglify());

export default config;
