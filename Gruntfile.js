module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'changelog_generate': {
      test: {
        files: {
          src:['test.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-changelog-generate');

  grunt.registerTask('default', [
    'changelog_generate'
  ]);
};