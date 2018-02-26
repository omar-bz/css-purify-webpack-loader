const purifyCss = require('purify-css');
module.exports = function(rawCss) {
  var includedFiles = '',
    purifyCssOptions = {
      minify: true,
      info: true,
    };

  if (typeof this.query == 'object') {
    if (this.query.includes) {
      includedFiles = this.query.includes;
    } else {
      console.warn(
        'Purify-Css: no files provided, be sure to pass a array of files that respect the glob pattern through options.includes.'
      );
    }

    if (this.query.purifyCssOptions)
      purifyCssOptions = this.query.purifyCssOptions;
  } else {
    console.warn(
      '\nPurify-Css: no files provided, be sure to pass a array of files that respect the glob pattern through options.includes.'
    );
  }
  this.cacheable && this.cacheable();
  const cond =
    typeof this.query.when === 'boolean'
      ? this.query.when
      : process.env.NODE_ENV === 'production';
  if (cond) {
    const minifiedPurifiedCss = purifyCss(
      includedFiles,
      rawCss,
      purifyCssOptions
    );
    return minifiedPurifiedCss;
  } else return rawCss;
};
