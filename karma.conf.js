var webpackConfig = require('./webpack.dev.js');
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './src/**/*.test.js'
        ],
        preprocessors: {
            './src/**/*.test.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: '.coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    });
};
