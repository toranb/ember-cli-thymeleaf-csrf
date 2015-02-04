export default function() {
    var csrfHeader = $("meta[name=_csrf_header]").attr("content");
    var csrfToken = $("meta[name=_csrf]").attr("content");
    $.ajaxPrefilter(function(options, originalOptions, xhr) {
        xhr.setRequestHeader(csrfHeader, csrfToken);
    });
};
