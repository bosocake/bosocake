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

const header = document.querySelectorAll('.header');

header.forEach(header => {
  // Находим элементы "dropdown-trigger" и "dropdown-menu"
  const header_search = document.querySelector(".header-search");
  const header_group = document.querySelector(".header");
  const header_back = document.querySelector(".header-back");

  // Добавляем обработчик клика на "dropdown-header_search"
  header_search.addEventListener('click', () => {
    // Переключаем класс "active" у "dropdown-header_group"
    header_group.classList.toggle('active');

  });
  header_back.addEventListener('click', () => {
    // Переключаем класс "active" у "dropdown-header_group"
    header_group.classList.toggle('active');

  });
});

const menuItems = document.querySelectorAll('.menu-label');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Убираем подсветку со всех пунктов меню
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    // Добавляем класс активности только на выбранный пункт меню
    item.classList.add('active');
    // Заменяем фото на странице на другое фото

  });
});

function qr(){

    const video = document.getElementById('videoElement');

    // запрашиваем доступ к камере и получаем поток мультимедийных данных
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // отображаем видеопоток в теге video
        video.srcObject = stream;
      })
      .catch(error => {
        console.log('Ошибка:', error);
      });
}

const dropdowns = document.querySelectorAll('.recipes-label');

// Добавляем обработчик клика для каждого элемента
dropdowns.forEach(dropdown => {
  // Находим элементы "dropdown-trigger" и "dropdown-menu"
  const trigger = dropdown.querySelector('.recipes-types');
  const menu = dropdown.querySelector('.recipes-menu');
  
  // Добавляем обработчик клика на "dropdown-trigger"
  trigger.addEventListener('click', () => {
    // Переключаем класс "active" у "dropdown-menu"
    menu.classList.toggle('active');
  });
});

// var divs = document.getElementsByClassName("recipes-next");

// for (var i = 0; i < divs.length; i++) {
//   divs[i].onclick = function() {
//     this.style.cssText = "transform: scaleY(0.5) rotate(90deg);";
//   };
// }

const recipes_label = document.querySelectorAll('.recipes-label');

recipes_label.forEach(dropdown => {
  // Находим элементы "dropdown-trigger" и "dropdown-menu"
  const trigger = dropdown.querySelector('.recipes-types');
  const menu = dropdown.querySelector('.recipes-next');
  
  // Добавляем обработчик клика на "dropdown-trigger"
  trigger.addEventListener('click', () => {
    // Переключаем класс "active" у "dropdown-menu"
    menu.classList.toggle('active');
  });
});