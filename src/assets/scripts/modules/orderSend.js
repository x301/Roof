export const orderSendBtn = function(data, btn, url) {
  return $.ajax({
    url: url,
    type: "POST",
    cache: false,
    data: data,
    dataType: "html",
    beforeSend: function() {
      btn.prop("disabled", true);
    },
    success: function() {
      alert("Ваша заявка принята");
      btn.prop("disabled", false);
    }
  });
};
