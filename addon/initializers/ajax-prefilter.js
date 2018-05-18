import $ from 'jquery';

export default function() {
  $.ajaxPrefilter(function(options, originalOptions, xhr) {
    xhr.setRequestHeader(
      $('meta[name=_csrf_header]').attr('content'),
      $('meta[name=_csrf]').attr('content'));
  });
}
