const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
