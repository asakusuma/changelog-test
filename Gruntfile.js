module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    changelog: {
      options: {
        dest: 'changelog.md',
        github: 'asakusuma/changelog-test'
      }
    },
  });


  grunt.loadNpmTasks('grunt-conventional-changelog');

  grunt.registerTask('default', [
    'changelog'
  ]);
};