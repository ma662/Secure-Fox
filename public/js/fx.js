// responsive navbar (changes color on scrolling)
$(window).scroll(function () {
  let height = $(".navbar").height();
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= height) {
    // makes the navbar solid
    $(".navbar").addClass("nav-solid");
  } else {
    // restores the bg transparency
    $(".navbar").removeClass("nav-solid");
  }
});

/* After a certain point on the page When scrolling down, hide the navbar. When scrolling up, show the navbar */
$("#back2Top").hide();
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let scrollTop = $(window).scrollTop();
  let currentScrollPos = window.pageYOffset;
  if (scrollTop < 790) {
    $("#back2Top").hide();
  } else if (scrollTop >= 1090) {
    if (prevScrollpos >=currentScrollPos) {
      $(".navbar").css("top", "0").fadeIn(500);
      $("#back2Top").fadeOut();
    } else {
      $(".navbar").fadeOut(500);
      $("#back2Top").fadeIn();
    }
    prevScrollpos = currentScrollPos;
  }
}

// $("#back2Top").click(() => {
//   $('html, body').animate({scrollTop : 0},800);
// });

