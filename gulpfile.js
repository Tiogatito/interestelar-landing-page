const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
function styles() { return src('src/styles/main.scss').pipe(sass({style:'compressed'})).pipe(dest('dist/css')); }
function scripts() { return src('src/scripts/*.js').pipe(terser()).pipe(dest('dist/js')); }
function html() { return src('src/*.html').pipe(dest('dist')); }
function fonts() { return src('src/fonts/*', {encoding: false}).pipe(dest('dist/fonts')); }
async function images() {
  async function optimize(folder, output) {
    await fs.mkdir(output,{recursive:true});
    for (const entry of await fs.readdir(folder,{withFileTypes:true})) {
      const from=path.join(folder,entry.name), to=path.join(output,entry.name);
      if(entry.isDirectory()) await optimize(from,to);
      else if(/\.(png|jpe?g)$/i.test(entry.name)) await sharp(from).resize({width:1600,withoutEnlargement:true}).webp({quality:85}).toFile(to.replace(/\.(png|jpe?g)$/i,'.webp'));
      else await fs.copyFile(from,to);
    }
  }
  await optimize('src/images','dist/images');
}
exports.default = parallel(styles,scripts,html,fonts,images);
exports.watch = function() {
  watch('src/styles/**/*.scss',styles); watch('src/scripts/*.js',scripts);
  watch('src/*.html',html); watch('src/images/**/*',images); watch('src/fonts/*',fonts);
};
