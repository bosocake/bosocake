function button() {
  var header_menu = document.getElementById("header_menu");
  var header_menu_botton = document.getElementById("header-menu-botton");

  if (header_menu.classList.contains('show')) {
    header_menu.classList.remove('show');
    header_menu_botton.innerHTML = "=";
  } else {
    header_menu.classList.add('show');
    header_menu.style.cssText = 'background: rgb(25, 25, 25);';
    header_menu_botton.innerHTML = "X";
  }
}

window.addEventListener('resize', myFunction);
function myFunction() {
  var header_menu = document.getElementById("header_menu");
  var header_menu_botton = document.getElementById("header-menu-botton");
  if (window.innerWidth > 800) {
    header_menu.classList.add('show');
    header_menu_botton.innerHTML = "X";
  }else{
    header_menu.classList.remove('show');
    header_menu_botton.innerHTML = "=";
  }
}