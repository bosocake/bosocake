// clone()
// function clone() {
//     for (let n=0; n<6; n++) {
//         let parent = document.getElementById('header-menu');
//         let elem = parent.querySelector('.header-link');
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





// function buttom() {
//     var container = document.getElementById("container");
//     var header = document.getElementById("header");
//     var menu = document.getElementById("menu");
//     var menu_buttom = document.getElementById("menu-buttom");
//     if (menu.classList.contains('show')) {
//         container.style.cssText = 'background: #191919; height: height: var(--height);;'
//         header.classList.remove('show');
//         menu.classList.remove('show');
//         menu_buttom.innerHTML = "=";
//     } else {
//         container.style.cssText = 'background: #19191962; height: 100vh;'
//         header.classList.add('show');
//         menu.classList.add('show');
//         menu_buttom.innerHTML = "X";
//     }
// }
// const under = document.getElementById('header-case-under');

// const header = document.getElementById('case-header');
// window.addEventListener('scroll', () => { 
//   if (window.scrollY > 40) { 
//     under.style.cssText = 'background: rgb(25, 25, 25, 0.5);';

//     header.style.cssText = 'background: rgb(25, 25, 25, 0.5);';

//   }else{
//     under.style.cssText = 'background: rgb(25, 25, 25);';

//     header.style.cssText = 'background: rgb(25, 25, 25,);';

//   }
// });

// const hover = document.querySelectorAll('.header-link');

// hover.forEach((block) => {
//     const fond = document.getElementById('fond');
//     const under = document.getElementById('header-case-under');

//     block.addEventListener('mouseover', () => {
//         under.classList.add('show');
//         fond.classList.add('show');
//     });

//     fond.addEventListener('mouseover', () => {
//         under.classList.remove('show');
//         fond.classList.remove('show');
//     });
// });


