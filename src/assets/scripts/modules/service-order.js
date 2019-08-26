import { openFormOverlay, closeFormOverlay } from "../index.js";

let $extraBtn = $(".callback__form__service-order__extra__button"),
  $extraFormHidden = $(".callback__form__service-order__extra"),
  $serviceOrderBtn = $(".button__order"),
  $orderOverlay = $(".order-overlay"),
  $formOrder = $(".callback__form__service-order");

$serviceOrderBtn.click(function() {
  openFormOverlay($orderOverlay, $formOrder);
});

$extraBtn.click(function(e) {
  e.preventDefault();
  $extraFormHidden.slideToggle("slow");
});

$(document).on("click", function(e) {
  closeFormOverlay(e, $formOrder);
});
