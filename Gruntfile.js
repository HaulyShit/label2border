module.exports = function( grunt ) {
    var globalConfig = {
        // @formatter:off
        sass : {
            src  : 'assets/scss/',
            dest : 'assets/css/'
        },
        js  : {
            dest   : 'assets/js/dest/',
            libs   : 'assets/js/libs/',
            vendor : 'assets/js/vendor/'
        },
        php : '**/**/**/**/**/'
        // @formatter:on
    };

    grunt.initConfig( {
        globalConfig : globalConfig,
        /******************************************************
         * SASS
         ******************************************************/
        sass : {
            dist : {
                options : {// Target options
                    style : 'nested',
                    precision : 5,
                    update : false
                },
                files : {
                    "<%= globalConfig.sass.dest %>label2border.css" : "<%= globalConfig.sass.src %>/main.scss"
                }
            }
        },
        /******************************************************
         * UGLIFY
         ******************************************************/
        uglify : {
            options : {
                mangle : false,
                beautify : false,
                report : "gzip",
                sourceMap : true
            },
            my_target : {
                files : {
                    //@formatter:off
                    '<%= globalConfig.js.dest %>/label2border.jQuery.min.js' : [
                        // ********** LIBS ********** //
                        '<%= globalConfig.js.libs %>jQuery/jquery-3.3.1.min.js',
                        // ********** VENDOR ********** //
                        '<%= globalConfig.js.vendor %>label2border/label2border.js',
                    ],
                    '<%= globalConfig.js.dest %>/label2border.min.js' : [
                        // ********** VENDOR ********** //
                        '<%= globalConfig.js.vendor %>label2border/label2border.js',
                     ]
                    //@formatter:on
                }
            }
        },
        // /******************************************************
        // * autoprefixer
        // ******************************************************/
        postcss : {
            options : {
                map : true, // inline sourcemaps

                // or
                map : {
                    inline : false, // save all sourcemaps as separate files...
                    annotation : '<%= globalConfig.sass.dest %>/maps/' // ...to the specified
                    // directory
                },

                processors : [ require('pixrem')( ), // add fallbacks for rem
                // units
                require('autoprefixer')( {
                    browsers : 'last 2 versions'
                } ), // add vendor prefixes
                require('cssnano')( ) // minify the result
                ]
            },
            dist : {
                src : '*.css'
            }
        },
        // /******************************************************
        // * SERVER AND WATCH TASKS
        // ******************************************************/
        watch : {
            sass : {
                files : [ '<%= globalConfig.sass.src %>/**/**/**/*.scss' ],
                tasks : [ 'sass', 'postcss' ]
            },
            js : {
                files : [ '<%= globalConfig.js.vendor %>/**/*.js' ],
                tasks : [ 'uglify' ]
            },
            php : {
                files : [ '<%= globalConfig.phtml %>*.php' ],
                tasks : false
            },
            options : {
                livereload : true,
                spawn : true,
                interrupt : false
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-postcss' );

    grunt.registerTask( 'default', [ 'watch' ] );
    grunt.registerTask( 'css', [ 'sass', 'postcss' ] );
}; 