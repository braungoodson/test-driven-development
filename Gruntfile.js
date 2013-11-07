module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
	});
	grunt.registerTask('karma',['karma:unit']);
	grunt.registerTask('default',[]);
};
