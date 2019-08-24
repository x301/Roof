let $callBtn = $(".header-back-call").find("button"),
  $callForm = $(".header__callback-form_hidden");

$callBtn.click(function() {
  console.log($callForm);
  $callForm.show("slow");
});
