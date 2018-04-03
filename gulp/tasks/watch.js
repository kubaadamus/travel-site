var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch',function(){

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html',function(){
		browserSync.reload(); //zrestartuj przeglądarke
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});

});

gulp.task('cssInject',['styles'],function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(browserSync.stream());
});