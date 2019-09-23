export const orderSendBtn = function(data, form, url) {
  $.ajax({
    url: url,
    type: "POST",
    cache: false,
    data: data
  }).done(function() {
    $(form)
      .find("input")
      .val("");
    $(form).trigger("reset");
  });
  return false;
};
