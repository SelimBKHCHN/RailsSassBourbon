module.exports = function(grunt) {

  grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'app/assets/stylesheets/application.css': 'app/assets/stylesheets/application.sass',       // 'destination': 'source'
        
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);


};