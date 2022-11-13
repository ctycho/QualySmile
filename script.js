'use strict';

serviceForm()

if (screen.width > 880) {
    setMap([55.787960719790775,49.171599589059774], [55.78827968702263,49.17503088230158], 17);
}
else if (screen.width > 600) {
    setMap([55.78798800659105,49.17319031398862], [55.78827968702263,49.17503088230158], 17);
}
else {
    setMap([55.78819958846971,49.174896198922085], [55.78827968702263,49.17503088230158], 16);
}

// Header
function clickMenuItem(burger, menu) {
    document.getElementById(burger).classList.remove('menu__active');

    document.getElementById(menu).classList.remove('menu__active');
}

function burgerAction(element, menu) {
    element.classList.toggle('menu__active')

    document.getElementById(menu).classList.toggle('menu__active');

}

//  Service form
function onlyNumberKey(evt) {       
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode < 48 || ASCIICode > 57) && ASCIICode != 43)
        return false;
    return true;
}
function notNumberKey(evt) {       
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode < 48 || ASCIICode > 57) && ASCIICode != 43)
        return true;
    return false;
}
function serviceForm() {
    const service__form = document.getElementById('service__form');

    service__form.addEventListener('submit', (event) => {
        const user_name = document.getElementById('user_name').value;
        const user_phone = document.getElementById('user_phone').value;
    
        if (!user_name) {
            event.preventDefault();
            alert('Имя не может быть пустым')
        }
        else if (!user_phone) {
            event.preventDefault();
            alert('Телефон не может быть пустым')
        }

        const element = document.getElementById('modal');

        element.classList.add('modal__show')
    })
}

function setMap(center, placemark, zoom) {
    // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: center,
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: zoom
                
            });
            var myPlacemark = new ymaps.Placemark(placemark, {
                // balloonContent: 'цвет <strong>носика Гены</strong>',
                iconCaption: 'Qualy smile'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            });
            myMap.geoObjects.add(myPlacemark, );
        }
        // var 
}

function closeModal() {
    const element = document.getElementById('modal');

    element.classList.remove('modal__show')
}

window.addEventListener('mouseup', (event) => {
    const element = document.getElementById('modal');

    if (event.target == element) {
        closeModal();
    }
})