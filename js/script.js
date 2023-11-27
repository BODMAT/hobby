"use strict"

// Меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// При скролле
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Дополнительные от меня
const parentItems = document.querySelector(".rigth-service");
const items = document.querySelectorAll(".rigth-service__item");

document.addEventListener("click", function (event) {
    var itemActive;
    for (let itemNum = items.length; itemNum > 0; itemNum--) {
        //Закрытие активной кнопки, при нажимании на любой точке странички
        itemActive = items[itemNum - 1];
        if (event.target !== itemActive) {
            itemActive.classList.remove("_active");
        }
        //Открытие активной кнопки
        if (event.target === itemActive) {

            //При нажатии на другие неактивные кнопки
            let itemNotActive = [items[itemNum], items[itemNum - 2], items[itemNum + 1], items[itemNum - 3]];
            var itemNotActiveFiltered = itemNotActive.filter(x => x !== undefined);
            itemNotActiveFiltered.forEach((element) => element.classList.remove("_active"));

            itemActive.classList.add("_active");
            break;
        }
    }
});

