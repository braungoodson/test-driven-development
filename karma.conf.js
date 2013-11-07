module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: ['app/src/**/*.js','unit-tests/**/*.js'],
		preprocessors: {
			'app/src/**/*.js': ['coverage']
		},
		reporters: ['progress','coverage'],
		coverageReporter: {
			type: 'html',
			dir: 'unit-tests/coverage'
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		captureTimeout: 4000,
		singleRun: false
	});
};
