function ErrorOnWarningsPlugin() {};

ErrorOnWarningsPlugin.prototype.apply = function(compiler) {
  compiler.plugin('should-emit', function(compilation) {
    if (compilation.warnings && compilation.warnings.length) {
      compilation.errors.push("one or more files: Warnings are not allowed.");
      return false;
    }
  });
};

module.exports = ErrorOnWarningsPlugin;
