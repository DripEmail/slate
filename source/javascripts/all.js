//= require ./all_nosearch
//= require ./app/_search

// smooth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});