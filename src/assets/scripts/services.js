import "./modules/service-order.js";
//vertical menu toogle
$("#menu__vertical ul > li > .menu ").click(function(e) {
  if (
    $(this)
      .prev("input")
      .prop("checked")
  ) {
    $(this)
      .prev("input")

      .attr("checked", false);
  } else {
    $(this)
      .prev("input")

      .attr("checked", "checked");
  }

  $(this)
    .next(".menu-vertical__submenu")
    .slideToggle();
  e.preventDefault();
});
//license agree
$(".ch-agree").change(function() {
  if (this.checked) {
    $("#btn-agree").prop("disabled", false);
    $(this)
      .parent(".license")
      .find(".license__agree")
      .removeClass("license__agree_unchecked");
  } else {
    $("#btn-agree").prop("disabled", true);
    $(this)
      .parent(".license")
      .find(".license__agree")
      .addClass("license__agree_unchecked");
  }
});
