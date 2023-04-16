// clone()
// function clone() {
//     for (let n=0; n<12; n++) {
//         let parent = document.getElementById('group');
//         let elem = parent.querySelector('.block');
//         let clone = elem.cloneNode(true);
//         clone = parent.appendChild(clone);
//     }
// }

// function button() {
//   var header_buttom = document.getElementById("header_buttom");
//   var header = document.getElementById("header");
//   var header_menu = document.getElementById("header_menu");

//   if (header.style.height != "100vh") {
//     header.style.cssText = 'height: 100vh; align-content: flex-start;';
//     header_menu.style.cssText = 'display: grid; padding: 20px; grid-template-columns: 1fr;';
//   } 
//   else {
//     header.style.cssText = 'height: var(--height);';
//     header_menu.style.cssText = 'display: none; padding: 0; grid-template-columns: none;';
//   }
// }

// window.addEventListener('resize', resize);

// function resize() {
//   var header_buttom = document.getElementById("header_buttom");
//   var header = document.getElementById("header");
//   var header_menu = document.getElementById("header_menu");

//   if (window.innerWidth < 800) {
//     header_menu.style.cssText = 'display: none;'
//     header_buttom.style.cssText = 'display: grid;'
    
//   }else{
//     header.style.cssText = 'var(--height)';
//     header_menu.style.cssText = 'display: flex;'
//     header_buttom.style.cssText = 'display: none;'
//   }
// }

// function button() {
//   if (header.style.height != "100vh") {
//     header.style.cssText = 'height: 100vh; align-content: flex-start;';
//     header_menu.style.cssText = 'display: grid; padding: 20px; grid-template-columns: 1fr;';
//   } 
//   else {
//     header.style.cssText = 'height: var(--height);';
//     header_menu.style.cssText = 'display: none; padding: 0; grid-template-columns: none;';
//   }
// }





function buttom() {
    var header = document.getElementById("header");
    var menu = document.getElementById("menu");
    var menu_buttom = document.getElementById("menu-buttom");
    if (menu.classList.contains('show')) {
        header.classList.remove('show');
        menu.classList.remove('show');
        menu_buttom.innerHTML = "=";
    } else {
        header.classList.add('show');
        menu.classList.add('show');
        menu_buttom.innerHTML = "X";
    }
}