import "./modules/service-order.js";
//import "./modules/menu__vertical";
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
    .next(".submenu")
    .slideToggle();
  e.preventDefault();
});
