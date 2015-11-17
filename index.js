module.exports = {
  hooks: {
    "page:before": function(page) {
      var md;

      md = this.options.pluginsConfig.include.md;
      page.content = md + page.content;
      return page;
    }
  }
};