'use strict';

function clickMenuItem(burger, menu) {
    document.getElementById(burger).classList.remove('menu__active');

    document.getElementById(menu).classList.remove('menu__active');
}

function burgerAction(element, menu) {
    element.classList.toggle('menu__active')

    document.getElementById(menu).classList.toggle('menu__active');

}

function sendEmail(name_id, number_id) {
    const name = document.getElementById(name_id)
    const number = document.getElementById(number_id)

    const name_value = name.value;
    const number_value = number.value;

    name.value = '';
    number.value = '';

    console.log(name_value)
    console.log(number_value)
}
