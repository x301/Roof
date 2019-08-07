//import "./modules/menu__vertical";
$("#menu__vertical ul > li ").click(function(e) {
  if (
    $(this)
      .find("input")
      .prop("checked")
  ) {
    $(this)
      .find("input")
      .attr("checked", false);
  } else {
    $(this)
      .find("input")
      .attr("checked", "checked");
  }

  $(this)
    .find(".submenu")
    .slideToggle();
  e.preventDefault();
});
