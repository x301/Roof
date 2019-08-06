var menu = document.getElementById("menu__vertical");
menu.onclick = function(event) {
  let target = event.target;
  console.log(target.children);
  if (!target.children.lentgth) {
    if (target.className === "menu__items") {
      target.classList.add("open");
    } else {
      target.classList.remove("open");
    }
  }
};
