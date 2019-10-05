import "inputmask/dist/min/jquery.inputmask.bundle.min";
import "./modules/gallery.js";
import "./modules/callback.js";
import "./services.js";
import { orderSendBtn } from "./modules/orderSend.js";

//order send
$(document).ready(function() {
  $("#form-order").submit(function() {
    let $activeForm = $("#form-order"),
      data =
        $("#form-order").serialize() +
        "&serviceName=" +
        $(".service-order__name")
          .text()
          .trim(),
      url = "assets/ajax/tel-order.php";

    orderSendBtn(data, $activeForm, url);
  });
});

//contact form send
$(document).ready(function() {
  $("#feedback__form").submit(function() {
    let $activeForm = $("#feedback__form"),
      data = $("#feedback__form").serialize(),
      url = "assets/ajax/tel-callback.php";

    orderSendBtn(data, $activeForm, url);
  });
});

//callback form send
$(document).ready(function() {
  $("#callback-form").submit(function() {
    let $activeForm = $("#callback-form"),
      data = $("#callback-form").serialize(),
      url = "assets/ajax/tel-callback.php";

    orderSendBtn(data, $activeForm, url);
  });
});
//mobile menu and submenu open and close.
$(".m-menu__btn").on("click", function(e) {
  e.preventDefault();
  $(".m-menu-wrapper").toggleClass("m-menu-wrapper_active");
  $(".content").toggleClass("content_active");
});

$(".submenu__btn").on("click", function(e) {
  e.preventDefault();
  $(".m-menu__main").toggleClass("m-menu__main_hidden");
  $(".submenu").toggleClass("submenu_active");
});
$(".menu_back ").on("click", function(e) {
  e.preventDefault();
  $(".m-menu__main").toggleClass("m-menu__main_hidden");
  $(".submenu").toggleClass("submenu_active");
});

$(".extramenu__btn").on("click", function() {
  $(this).toggleClass("extramenu__btn_active");
  $(this)
    .parent()
    .find(".extramenu")
    .slideToggle();
});

$(window).on("load", function() {
  $(".loaderArea")
    .find("sk-fading-circle")
    .fadeOut()
    .end()
    .delay(400)
    .fadeOut("slow");
});

$(document).ready(function() {
  $("#input__contact-phone").inputmask("+7 (999)-999-99-99"); //contact phone mask
  $("#input__contact-email").inputmask("email"); // email contacts mask
  $("#input__callback-phone").inputmask("+7 (999)-999-99-99"); //callback phone mask
  $("#input__order-phone").inputmask("+7 (999)-999-99-99"); //order phone mask
});

$(document).ready(function() {
  $("#contact_form").submit(function() {
    $ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#contact_form").trigger("reset");
    });
    return false;
  });
});

//open overlay and form

export const openFormOverlay = function(overlay, form) {
  overlay.addClass("open");
  setTimeout(function() {
    form.slideToggle("slow");
  }, 500);
};

//close overlay and form
export const closeFormOverlay = function(e, form) {
  let target = $(e.target);
  if ($(target).hasClass("open")) {
    setTimeout(function() {
      target.removeClass("open");
    }, 1000);
    form.slideToggle("slow");
  }
};
