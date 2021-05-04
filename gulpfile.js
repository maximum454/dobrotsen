let name_project = 'dobrotsen';
let project = 'build';
let source = 'src';
let fs = require('fs');
let path = {
    build: {
        html: project + '/',
        js: project + '/js/',
        css: project + '/css/',
        img: project + '/img/',
        fonts: project + '/fonts/'
    },
    src: {
        html: [source + '/*.html', '!' + source + '/_*.html'],
        js: source + '/js/' + name_project + '.js',
        css: source + '/scss/' + name_project + '.scss',
        img: source + '/img/**/*.*',
        fonts: source + '/fonts/**/*.*'
    },
    watch: {
        html: source + '/**/*.html',
        js: source + '/js/**/*.js',
        css: source + '/scss/**/*.{scss,css}',
        img: source + '/img/**/*.*'
    },
    clean: './' + project + '/'
};

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    svgSprite = require('gulp-svg-sprite'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter'),
    babel = require('gulp-babel'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream');


function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project + '/'
        },
        host: 'localhost',
        port: 9000,
        notify: false,
        logPrefix: "Frontend_karachyov"
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(babel())
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 3,
                svgoPlugins: [
                    {
                        removeViewBox: false
                    }
                ]
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

gulp.task('svgSprite', function () {
    return gulp.src([source + '/iconsprite/menu/*.svg'])
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: '../icons/menu-sprite.svg',
                        example: false,
                    },
                    css: { // Create a «css» sprite
                        sprite: '../menu/menu-sprite.svg',
                        render: {
                            scss: false
                        }
                    }
                },
            })
        )
        .pipe(dest(path.build.img))
});

gulp.task('svgSocialSprite', function () {
    return gulp.src([source + '/iconsprite/social/*.svg'])
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: '../social/social-sprite.svg',
                        example: true,
                    },
                    css: { // Create a «css» sprite
                        sprite: '../social/social-sprite.svg',
                        render: {
                            scss: true
                        }
                    }
                },
            })
        )
        .pipe(dest(path.build.img))
});

gulp.task('sprite', function () {
    var spriteData = gulp.src([source + '/iconsprite/*.png'])
        .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            })
        );
    return spriteData.pipe(dest(path.build.img))
});

gulp.task('otf2ttf', function () {
    return gulp.src([source + '/fonts/*.otf'])
        .pipe(
            fonter({
                formats: ['ttf']
            })
        )
        .pipe(dest(source + '/fonts/'));
});

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;