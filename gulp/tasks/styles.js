var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();
var mixins = require('postcss-mixins');


gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/styles.css')	//złap plik
	.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //zmodyfikuj/przefiltruj
	.on('error',function(errorInfo){						// w razie problemu zrób to:
		console.log(errorInfo.toString()); 					// powiedz mi debugga plx								
		this.emit('end'); //powiedz gulpowi że jest ok i zreturnuj ze SPOKO.
	})
	.pipe(gulp.dest('./app/temp/styles/'));				//wypluj plik
});

