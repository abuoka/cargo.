module.exports = ()=>
    $.gulp.task('css', ()=>
        $.gulp.src($.path.src.css)
            .pipe($.gp.sourcemaps.init())
            .pipe($.sass({outputStyle: 'expanded'}))
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.autoprefixer())
            .pipe($.sass({outputStyle: 'compressed'}))
            .pipe($.gp.rename('main.min.css'))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.path.build.css)).on('end', $.bs.reload)
    )