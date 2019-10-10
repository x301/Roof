export const orderSendBtn = function(data, activeForm, url) {
  $.ajax({
    url: url,
    type: "POST",
    data: data,
    success: function() {},
    complete: function() {
      if ($(activeForm).hasClass("contacts__content__feedback__form")) {
        $(activeForm)
          .parent()
          .css("display", "none");
        $(activeForm)
          .parent()
          .next()
          .addClass("confirmation_active");
        setTimeout(function() {
          $(activeForm)
            .parent()
            .css("display", "block");
          $(activeForm)
            .parent()
            .next()
            .removeClass("confirmation_active");
        }, 2000);
      } else {
        $(activeForm)
          .next()
          .addClass("confirmation_active");
        $(activeForm).css("display", "none");
        setTimeout(function() {
          $(activeForm).css("display", "block");
          $(activeForm)
            .next()
            .removeClass("confirmation_active");
        }, 2000);
      }
      $(activeForm)
        .find("input")
        .val("");
      $(activeForm).trigger("reset");
    }
  });
};
