function listTrainings(start, end) {
  let value = "";
  blogArray.slice(start, end).forEach(post => {
    value += `<div class="col-xs-12 col-md-6"><a href="${post.link}"><div class="single-price" style="min-height: 540px; margin-bottom: 30px"><h2>${post.title}</h2><img class="img-training" src="${post.image}" alt=""><span class="card-content">${post.content}</span></div></a></div>`;
  });
  $(".blogList").html(value);
}

function scrollToStart() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#blogId").offset().top
    }, 350);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(function() {
    $('#pagination-blog').twbsPagination({
        totalPages: Math.ceil(blogArray.length / 8),
        visiblePages: 5, next: '›', prev: '‹', last: '»', first: '«',
        onPageClick: function (event, page) {
            listTrainings((page-1)*8, page*8);
            scrollToStart();
        }
    });
});
