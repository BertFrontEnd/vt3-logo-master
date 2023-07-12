import sprite from 'gulp-svg-sprite';

export const svgToSprite = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(
      sprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            example: true, // Создать страницу с перечнем иконок
          },
        },
      }),
    )
    .pipe(app.gulp.dest(`${app.path.build.images}`));
};
