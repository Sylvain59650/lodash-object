var babel = require("gulp-babel");
var gulp = require('gulp');
var concat = require("gulp-concat");
var del = require('del');
var watch = require('gulp-watch');

var umd = require("gulp-umd");
var gutil = require('gulp-util');

var chemins = {
  sources: "./sources/",
  distrib: './distrib/'
};


gulp.task('clean', function() {
  return del([
    chemins.distrib + "/*"
  ]);
});



gulp.task("Array.min.js", () => {
  return gulp.src([
      "sources/Array.js"
    ])
    .pipe(concat("Array.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true
    }))
    //.pipe(uglify())
    //.on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("String.min.js", () => {
  return gulp.src([
      "sources/String.js"
    ])
    .pipe(concat("String.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true
    }))
    //.pipe(uglify())
    //.on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("StringExtension.min.js", () => {
  return gulp.src([
      "sources/StringExtension.js"
    ])
    .pipe(concat("StringExtension.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true
    }))
    // .pipe(uglify())
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("Object.min.js", () => {
  return gulp.src([
      "sources/Object.js"
    ])
    .pipe(concat("Object.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true
    }))
    // .pipe(uglify())
    .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("Math.min.js", () => {
  return gulp.src([
      "sources/Math.js"
    ])
    .pipe(concat("Math.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true
    }))
    //.pipe(uglify())
    //.on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task('watch:Array.min.js', function() {
  watch("./sources/Array.js", function() {
    gulp.run('Array.min.js');
  });
});

gulp.task('watch:String.min.js', function() {
  watch("./sources/String.js", function() {
    gulp.run('String.min.js');
  });
});

gulp.task('watch:StringExtension.min.js', function() {
  watch("./sources/StringExtension.js", function() {
    gulp.run('StringExtension.min.js');
  });
});

gulp.task('watch:Math.min.js', function() {
  watch("./sources/Math.js", function() {
    gulp.run('Math.min.js');
  });
});

gulp.task('watch:Object.min.js', function() {
  watch("./sources/Object.js", function() {
    gulp.run('Object.min.js');
  });
});

gulp.task('default', ['Array.min.js', 'String.min.js', 'StringExtension.min.js', 'Math.min.js']);


gulp.task('all', ['default']);

gulp.task("watch", ["watch:Array.min.js", "watch:String.min.js", "watch:Object.min.js", "watch:StringExtension.min.js", "watch:Math.min.js"]);