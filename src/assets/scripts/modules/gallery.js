let $li = $(".img__list").find("> li"),
  $links = $li.find("> a"),
  $lightbox = $(".img__lightbox"),
  $next = $(".next"),
  $prev = $(".prev"),
  $overlay = $(".overlay"),
  liIndex,
  targetImg;

//preload img
var imgSources = [
  "assets/images/projects/img-1-lg.jpg",
  "assets/images/projects/img-2-lg.jpgg",
  "assets/images/projects/img-3-lg.jpg",
  "assets/images/projects/img-4-lg.jpg"
];

var imgs = [];
for (let i = 0; i < imgSources.length; i++) {
  imgs[i] = new Image();
  imgs[i].src = imgSources[i];
}

function getHref(index) {
  return $li
    .eq(index)
    .find(">a")
    .attr("href");
}

function replaceImg(src) {
  $lightbox.find("img").attr("src", src);
}

$links.click(function(event) {
  event.preventDefault();
  liIndex = $(this)
    .parent()
    .index();
  targetImg = $(this).attr("href");
  replaceImg(targetImg);
  $lightbox.fadeIn();
});

$overlay.click(function() {
  $lightbox.fadeOut();
});

$next.click(function() {
  if (liIndex + 1 < $li.length) {
    targetImg = getHref(liIndex + 1);
    liIndex++;
  } else {
    getHref(0);
    liIndex = 0;
  }
  replaceImg(targetImg);
});

$prev.click(function() {
  if (liIndex > 0) {
    targetImg = getHref(liIndex - 1);
    liIndex--;
  } else {
    targetImg = getHref(liIndex - 1);
    liIndex = $li.length - 1;
  }
  replaceImg(targetImg);
});
