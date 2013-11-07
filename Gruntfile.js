module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('karma-coverage');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
	});
	grunt.registerTask('tdd:unit',['karma:unit']);
	grunt.registerTask('tdd',['tdd:unit']);
	grunt.registerTask('default',[]);
};
