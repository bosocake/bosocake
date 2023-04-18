clone()
function clone() {
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('main');
        let elem = parent.querySelector('.product');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
    }
}

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
    var container = document.getElementById("container");
    var header = document.getElementById("header");
    var menu = document.getElementById("menu");
    var menu_buttom = document.getElementById("menu-buttom");
    if (menu.classList.contains('show')) {
        container.style.cssText = 'background: #191919; height: max-content;'
        header.classList.remove('show');
        menu.classList.remove('show');
        menu_buttom.innerHTML = "=";
    } else {
        container.style.cssText = 'background: #19191962; height: 100vh;'
        header.classList.add('show');
        menu.classList.add('show');
        menu_buttom.innerHTML = "X";
    }
}