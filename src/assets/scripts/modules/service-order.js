import { openFormOverlay, closeFormOverlay } from "../index.js";

let $extraBtn = $(".callback__form__service-order__extra__button"),
  $extraFormHidden = $(".callback__form__service-order__extra"),
  $serviceOrderBtn = $(".button__order"),
  $orderOverlay = $(".order-overlay"),
  $formOrder = $(".callback__form__service-order"),
  $serviceName = $(".service-name").text();

//open overlay and form
$serviceOrderBtn.click(function() {
  openFormOverlay($orderOverlay, $formOrder);
  $formOrder.find(".service-order__name").text($serviceName);
});

//open extra menu
$extraBtn.click(function(e) {
  e.preventDefault();
  $extraFormHidden.slideToggle("slow");
});

//close form and overlay
$(document).on("click", function(e) {
  closeFormOverlay(e, $formOrder);
});
