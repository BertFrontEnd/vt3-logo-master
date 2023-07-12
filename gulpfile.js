// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передача значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { images } from './gulp/tasks/images.js';
/* import { svgToSprite } from './gulp/tasks/svg-sprite.js'; // Для создания SVG-Sprite */
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Наблюдатель за изменениями в файлах
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.images, images); // Для загрузки сразу на ftp: gulp.series(images, ftp)
  gulp.watch(path.watch.html, html); // Для загрузки сразу на ftp: gulp.series(html, ftp)
  gulp.watch(path.watch.scss, scss); // Для загрузки сразу на ftp: gulp.series(scss, ftp)
  gulp.watch(path.watch.js, js); // Для загрузки сразу на ftp: gulp.series(js, ftp)
};

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Параллельное выполнение задач
const mainTasks = gulp.parallel(copy, images, html, scss, js);
/* const mainTasks = gulp.parallel(copy, svgToSprite, images, html, scss, js); // Для создания SVG-Sprite */
const watcherTasks = gulp.parallel(watcher, server);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, fonts, mainTasks, watcherTasks);
const build = gulp.series(reset, fonts, mainTasks);
const deployZIP = gulp.series(reset, fonts, mainTasks, zip);
const deployFTP = gulp.series(reset, fonts, mainTasks, ftp);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// Выполнение сценария по умолчанию при вызове команды в терминале
gulp.task('default', dev);
