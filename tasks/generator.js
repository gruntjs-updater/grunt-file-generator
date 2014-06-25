/*
 * grunt-file-generator
 * https://github.com/codefo/grunt-file-generator
 *
 * Copyright (c) 2014 Gleb Pospelov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('generator', 'Grunt task for file generation', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            wrapper: function (s) { return s; },
            template: function (s) { return s; }
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                return options.template(filepath);
            }).join(grunt.util.normalizelf(''));

            // Write the destination file.
            grunt.file.write(f.dest, options.wrapper(src));

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
