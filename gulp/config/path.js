import * as nodePath from 'path';

// Имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());
console.log(rootFolder);
// Имя папки с результатом
const buildFolder = `./dist`;
// Имя папки с исходным кодом
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.pug`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`,
};
