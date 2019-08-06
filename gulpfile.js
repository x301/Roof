const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const del = require("del");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");

const paths = {
  root: "./dist",
  templates: {
    pages: "./src/views/pages/*.pug",
    src: "./src/views/**/*.pug",
    dest: "./dist/"
  },
  styles: {
    main: "./src/assets/styles/main.sass",
    src: "./src/assets/styles/**/*.sass",
    dest: "./dist/assets/styles/"
  },
  scripts: {
    src: "./src/assets/scripts/*.js",
    dest: "./dist/assets/scripts/"
  },
  images: {
    src: "./src/assets/images/**/*.*",
    dest: "./dist/assets/images/"
  },
  icons: {
    src: "./src/assets/fonts/**/*.*",
    dest: "./dist/assets/fonts/"
  }
};

//watcher
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.scripts.src, scripts);
}

//browserSync dist
function browserSyncServer() {
  browserSync.init({
    server: paths.root
  });
  browserSync.watch(paths.root + "/**/**/*.*", browserSync.reload);
}

//clean
function clean() {
  return del(paths.root);
}

//image
function img() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

//pug
function templates() {
  return gulp
    .src(paths.templates.pages)
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest(paths.root));
}

//sass
function styles() {
  return (
    gulp
      .src(paths.styles.main)
      //.pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      //.pipe(sourcemaps.write)
      .pipe(rename("main.min.css"))
      .pipe(autoprefixer())
      .pipe(gulp.dest(paths.styles.dest))
  );
}

//icons
function icons() {
  return gulp.src(paths.icons.src).pipe(gulp.dest(paths.icons.dest));
}

//webpack
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.templates = templates;
exports.scripts = scripts;
exports.styles = styles;
exports.clean = clean;
exports.img = img;
exports.icons = icons;

gulp.task(
  "default",
  gulp.series(
    clean,
    gulp.parallel(img, styles, icons, templates, scripts),
    gulp.parallel(watch, browserSyncServer)
  )
);
