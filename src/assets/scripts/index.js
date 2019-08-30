import "../libs/jQuery.mmenu-master/dist/jquery.mmenu.js";
import "../libs/fullpage/fullpage.js";
import "../libs/jQuery.mmenu-master/dist/addons/pagescroll/jquery.mmenu.pagescroll.js";
import "../libs/jQuery.mmenu-master/dist/addons/fixedelements/jquery.mmenu.fixedelements.js";
import "inputmask/dist/min/jquery.inputmask.bundle.min";
import "./modules/gallery.js";
import "./modules/callback.js";

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
      title: "<img src =../images/Logo-1.png>"
    },
    pageScroll: {
      scroll: true,
      update: true
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
    $.ajax({
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
var $icon = $("#m-icon");
var API = $menu.data("mmenu");

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
