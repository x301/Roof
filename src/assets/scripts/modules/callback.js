let $callBtn = $(".header-back-call").find("button"),
  $callFormOverlay = $(".callback-form_hidden"),
  $overlayCallback = $(".callback__overlay"),
  $callForm = $(".callback__form__call");

$callBtn.click(function(e) {
  setTimeout(function() {
    $callFormOverlay.addClass("open");
  });
});
$(document).on("click", function(e) {
  let target = $(e.target);

  if ($(target).hasClass("open")) target.removeClass("open");
});
