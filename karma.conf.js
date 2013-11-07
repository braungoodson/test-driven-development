module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine'],
		files: [
			'app/libraries/jquery.min.js',
			'app/libraries/angular.min.js',
			'app/libraries/angular-mocks.min.js',
			'unit-tests/**/*.js'
		],
		preprocessors: {
			'app/controllers/*.js': ['coverage']
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
		captureTimeout: 20000,
		singleRun: false
	});
};
