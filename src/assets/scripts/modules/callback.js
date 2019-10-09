import { openFormOverlay, closeFormOverlay } from "../index.js";

let $callBtn = $(".header__callback").find("button"),
  $mobileCallBtn = $(".m-menu__callback-form").find("button"),
  $callFormOverlay = $(".callback-form"),
  $callForm = $(".callback__form__call");

$callBtn.click(function(e) {
  e.preventDefault();
  openFormOverlay($callFormOverlay, $callForm);
});

$($callFormOverlay).on("click", function(e) {
  closeFormOverlay(e, $callForm);
});

$mobileCallBtn.click(function(e) {
  openFormOverlay($callFormOverlay, $callForm);
  $(".m-menu-wrapper").toggleClass("m-menu-wrapper_active");
  $(".content").toggleClass("content_active");
});
