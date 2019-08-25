let $callBtn = $(".header-back-call").find("button"),
  $callFormOverlay = $(".callback-form_hidden"),
  $overlayCallback = $(".callback__overlay"),
  $callForm = $(".callback__form__call");

$callBtn.click(function(e) {
  $callFormOverlay.addClass("open");
  setTimeout(function() {
    $callForm.slideToggle("slow");
  }, 500);
});

$(document).on("click", function(e) {
  let target = $(e.target);
  if ($(target).hasClass("open")) {
    setTimeout(function() {
      target.removeClass("open");
    }, 1000);
    $callForm.slideToggle("slow");
  }
});
