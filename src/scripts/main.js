$(function () {
  $(".fairy-tail__slider, .our-trip__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev">_____</button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next">_____</button>',
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 6001,
        settings: {
          arrow: false,
        },
      },
    ],
  });

  new WOW().init();
});

$(document).ready(function () {
  $('a[href^="#map"]').bind("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - -10,
        },
        1000
      );
    e.preventDefault();
  });
  return false;
});

$(document).ready(function () {
  $('a[href^="#hotel"]').bind("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - -10,
        },
        2000
      );
    e.preventDefault();
  });
  return false;
});

$(document).ready(function () {
  $('a[href^="#price"]').bind("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - -10,
        },
        3000
      );
    e.preventDefault();
  });
  return false;
});
