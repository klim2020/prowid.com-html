const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.html'],
      safelist: ['slick-active', 'slick-arrow', 'slick-next', 'slick-prev','slider__arrow','slider__arrow_left','slider__arrow_right','slider__dot']
    })
  ],
};
