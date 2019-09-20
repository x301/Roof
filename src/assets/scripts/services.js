import "./modules/service-order.js";
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
