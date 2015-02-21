import ajaxPrefilter from "ember-cli-thymeleaf-csrf/initializers/ajax-prefilter";

export default {
    name: "ajax-prefilter",
    initialize: ajaxPrefilter
};
