'use strict';

module.exports = {
  name: 'ember-cli-thymeleaf-csrf',
  contentFor: function(type) {
    var environment = this.app.env.toString();
    if (type === 'head') {
      if (environment === 'production') {
        return '<meta name="_csrf_header" th:content="${_csrf.headerName}" /><meta name="_csrf" th:content="${_csrf.token}" />';
      } else {
        return '<meta name="_csrf_header" content="abc" /><meta name="_csrf" content="abc" />';
      }
    }
  }
};
