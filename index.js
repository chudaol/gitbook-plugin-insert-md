module.exports = {
  hooks: {
    "page:before": function(page) {
      var md;

      md = this.options.pluginsConfig["insert-md"].md;
      page.content = md + page.content;
      return page;
    }
  }
};