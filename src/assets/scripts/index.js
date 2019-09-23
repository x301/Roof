import "inputmask/dist/min/jquery.inputmask.bundle.min";
import "./modules/gallery.js";
import "./modules/callback.js";
import "./services.js";
import { orderSendBtn } from "./modules/orderSend.js";

//order send
$("#sendOrder").on("click", function() {
  let name = $("#input__order-name").val(),
    phone = $("#input__order-phone")
      .val()
      .trim(),
    $activeBtn = $("#sendOrder"),
    url = "assets/ajax/order.php",
    data = $(".callback__form__service-order").serialize();

  if (name == "") {
    return $("#input__order-name")
      .next("label")
      .addClass("errorInput");
  } else if ((phone = "")) {
    return $("#input__order-phone")
      .next("label")
      .addClass("errorInput");
  }
  orderSendBtn(data, $activeBtn, url);
  
});
//contact form sell
$("#sendContactForm").on("click", function() {
  let name = $("#input__contact-name").val(),
    phone = $("#input__contact-phone")
      .val()
      .trim(),
    $activeBtn = $("#sendContactForm"),
    url = "assets/ajax/contactForm.php",
    data = $(".contacts__content__feedback__form").serialize();

  if (name == "") {
    return $("#input__contact-name")
      .next("label")
      .addClass("errorInput");
  } else if (phone = "") {
    return $("#input__contact-phone")
      .next("label")
      .addClass("errorInput");
  }
  orderSendBtn(data, $activeBtn, url);
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
  $("#input_phone").inputmask("+7 (999)-999-99-99"); //static mask
  // $("#input_phone").inputmask({ mask: "(999) 999-9999" }); //specifying options
  //$("#input_phone").inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
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
