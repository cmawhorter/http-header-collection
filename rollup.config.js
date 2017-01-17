import babel from 'rollup-plugin-babel';

const moduleFileName  = 'http-header-collection';
const moduleName      = 'HttpHeaders';

export default {
  entry:        'src/index.js',
  sourceMap:    true,
  plugins: [
    babel({
      exclude:  'node_modules/**',
    }),
  ],
  targets: [
    { dest: `dist/${moduleFileName}.umd.js`,      format: 'umd', moduleName: moduleName },
    { dest: `dist/${moduleFileName}.es2015.js`,   format: 'es' },
  ],
};
