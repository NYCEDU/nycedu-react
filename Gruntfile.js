module.exports = function(grunt) {

  grunt.initConfig({
    'sftp-deploy': {
      build: {
        auth: {
          host: 'nycedu.org',
          port: 22,
          authKey: 'key'
        },
        cache: false,
        src: './build',
        dest: '/home/nycedu/public_html/',
        exclusions: [],
        serverSep: '/',
        localSep: '/',
        concurrency: 4,
        progress: true,
        forceVerbose: 'true'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.registerTask('deploy', ['sftp-deploy']);

};