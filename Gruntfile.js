module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    beautify: {
      files: ['package.json', 'grunt.js', 'tasks/**/*.js']
    },
    jshint: {
      all: ['package.json', 'grunt.js', 'tasks/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {}
    },
    watch: {
      files: '<%= lint.files %>',
      tasks: 'default'
    },
    beautifier: {
      options: {
        indentSize: 2
      },
      tests: {
        options: {
          indentSize: 4
        }
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-beautify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['beautify', 'jshint']);

};
