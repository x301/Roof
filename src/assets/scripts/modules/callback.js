import { openFormOverlay, closeFormOverlay } from "../index.js";

let $callBtn = $(".header-back-call").find("button"),
  $callFormOverlay = $(".callback-form_hidden"),
  $callForm = $(".callback__form__call");

$callBtn.click(function(e) {
  openFormOverlay($callFormOverlay, $callForm);
});

$(document).on("click", function(e) {
  closeFormOverlay(e, $callForm);
});
