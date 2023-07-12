// Поиск и замена пути
import replace from 'gulp-replace';

// Обработка ошибок
import plumber from 'gulp-plumber';

// Вывод сообщений (подсказок)
import notify from 'gulp-notify';

// Проверка обновления изображения
import newer from 'gulp-newer';

// Условное ветвление
import ifPlugin from 'gulp-if';

// Локальный сервер
import browsersync from 'browser-sync';

// Экспортируемый объект с плагинами
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  newer: newer,
  ifPlugin: ifPlugin,
  browsersync: browsersync,
};
