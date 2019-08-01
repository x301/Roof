import "../libs/jQuery.mmenu-master/dist/jquery.mmenu.js";
import "../libs/jQuery.mmenu-master/dist/addons/pagescroll/jquery.mmenu.pagescroll.js";
import "../libs/jQuery.mmenu-master/dist/addons/fixedelements/jquery.mmenu.fixedelements.js";
import "inputmask/dist/min/jquery.inputmask.bundle.min";
var $menu = $("#my-menu").mmenu(
  {
    // options
    extensions: [
      "theme-white",
      "listview-justify",
      "border-full",
      "swadow-page",
      "pagedim-black"
    ],
    onClick: {
      preventDefault: true,
      setSelected: false
    },

    navbar: {
      title: "<img src =../../img/Logo-1.png>"
    },
    pageScroll: {
      scroll: false,
      update: false
    }
  },

  {
    // configuration
    classNames: {
      fixedElements: {
        fixed: "sticky"
      }
    },
    offCanvas: {
      pageNodetype: "section"
    },
    clone: true
  }
);

$("body").on("click", 'a[href^="./"]', function() {
  var url = event.target;
  $(location).attr("href", url);
  return false;
});

$(document).ready(function() {
  $(".contact-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $(".contact-form").trigger("reset");
    });
    return false;
  });
});
var $icon = $("#m-icon");
var API = $menu.data("mmenu");
console.log(API);

$icon.on("click", function() {
  API.open();
});

API.bind("open:finish", function() {
  setTimeout(function() {
    $icon.addClass("is-active");
  }, 100);
});
API.bind("close:finish", function() {
  setTimeout(function() {
    $icon.removeClass("is-active");
  }, 100);
});

$(document).ready(function() {
  $("#input_phone").inputmask("+7 (999)-999-99-99"); //static mask
  // $("#input_phone").inputmask({ mask: "(999) 999-9999" }); //specifying options
  //$("#input_phone").inputmask("9-a{1,3}9{1,3}"); //mask with dynamic syntax
});
