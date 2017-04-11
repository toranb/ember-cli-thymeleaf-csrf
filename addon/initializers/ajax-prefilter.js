import Ember from 'ember';

export default function() {
  Ember.$.ajaxPrefilter(function(options, originalOptions, xhr) {
    xhr.setRequestHeader(
      Ember.$('meta[name=_csrf_header]').attr('content'),
      Ember.$('meta[name=_csrf]').attr('content'));
  });
}
