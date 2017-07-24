module.exports = {
  server: './server/index.js',
  entry: './src/index.js',
  dist: './.dist',
  'prod': './.prod',
  bundle: 'bundle.js',
  port: process.env.PORT || 5000,
  devPublicPath: '/',
  prodPublicPath: '/',
  karma_files: './src/**/*.test.js',
  karma_browsers: ['PhantomJS'],
  karma_coverage_dir: '.coverage/'
};
