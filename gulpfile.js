global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),
    path:{
        serverDir:'./app/dist',
        tasks: require('./gulp/config/tasks'),
        src:{
            html: './app/src/*.{html,pug,jade}',
            css: './app/src/styles/*.scss',
            js: './app/src/script/*.js',
            font: './app/src/fonts/*.*',
            img: './app/src/images/*.*',
            video: './app/src/videos/*.*'
        },
        build:{
            html: './app/dist/',
            css: './app/dist/styles/',
            js: './app/dist/script/',
            font: './app/dist/fonts/',
            img: './app/dist/images/',
            video: './app/dist/videos/'
        },
        watch:{
            html: ['./app/src/*.{html,pug,jade}', './app/src/views/**/*.{html,pug,jade}'],
            css: ['./app/src/styles/*.scss', './app/src/styles/**/*.scss'],
            js: './app/src/script/*.js',
            font: './app/src/fonts/*.*',
            img: './app/src/images/*.*',
            video: './app/src/videos/*.*'
        }
    }

}
$.path.tasks.forEach(task => require(task)());
$.gulp.task('default', $.gulp.series($.gulp.parallel('html','css','watch','serve','js','font','img','video')))