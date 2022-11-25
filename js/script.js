'use strict';

setEmployee()
setFeedback();

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
function clickMenuItem(burger, menu, block) {
    document.getElementById(burger).classList.remove('menu__active');

    document.getElementById(menu).classList.remove('menu__active');
    document.getElementById(block).scrollIntoView();
}

function burgerAction(element, menu) {
    element.classList.toggle('menu__active')

    document.getElementById(menu).classList.toggle('menu__active');

}
// function serviceForm() {
//     const service__form = document.getElementById('service__form');

//     service__form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const user_name = document.getElementById('user_name').value;
//         const user_phone = document.getElementById('user_phone').value;
    
//         if (!user_name) {
//             alert('Имя не может быть пустым')
//             return ;
//         }
//         else if (!user_phone) {
//             alert('Телефон не может быть пустым')
//             return ;
//         }
//     })
//     // $(function() {
//     //     $('form').submit(function() {
//     //         $.ajax({
//     //             type: 'POST',
//     //             url: 'submit.php',
//     //             data: { username: $(this).name.value, 
//     //                     password: $(this).password.value }
//     //         });
//     //         return false;
//     //     }); 
//     // })
// }

// Set employee
function setEmployee() {
    const employee = []
    const emp_1 = {
        'name': 'Муртазалиев Мурад Магомедрасулович',
        'jobtitle': 'Директор',
        'img': 'emp-1.jpg',
    }
    const emp_2 = {
        'name': 'Хафизов Раис Фанисович',
        'jobtitle': 'Главный врач',
        'img': 'emp-2.jpg',
    }
    const emp_3 = {
        'name': 'Хайруллина Лилия Мансуровна',
        'jobtitle': 'Врач-стоматолог-терапевт',
        'img': 'emp-4.jpg',
    }
    const emp_4 = {
        'name': 'Ханипова Камилла Даниловна',
        'jobtitle': 'Врач',
        'img': 'emp-3.jpg',
    }
    const emp_5 = {
        'name': 'Шахнавазов Сулейман Рабаданович',
        'jobtitle': 'Врач-стоматолог-ортодонт',
        'img': 'emp-5.jpg',
    }
    const emp_7 = {
        'name': 'Сайдазимов Джамал Акмалович',
        'jobtitle': 'Врач-стоматолог-хирург-имплантолог',
        'img': 'emp-7.jpg',
    }
    const emp_6 = {
        'name': 'Шаихов Магомедгаджи Насрутдинович',
        'jobtitle': 'Ассистент стоматолога',
        'img': 'emp-6.jpg',
    }
    const emp_8 = {
        'name': 'Даутова Лейсан Ильясовна',
        'jobtitle': 'Администратор',
        'img': 'emp-8.jpg',
    }
    const emp_9 = {
        'name': 'Менько Екатерина Александровна',
        'jobtitle': 'Администратор',
        'img': 'emp-9.jpg',
    }
    const emp_10 = {
        'name': 'Кутдусова Алиса Ильнуровна',
        'jobtitle': 'Ассистент стоматолога',
        'img': 'emp-10.jpg',
    }
    employee.push(emp_1)
    employee.push(emp_2)
    employee.push(emp_3)
    employee.push(emp_4)
    employee.push(emp_5)
    employee.push(emp_7)
    employee.push(emp_6)
    employee.push(emp_10)
    employee.push(emp_8)
    employee.push(emp_9)

    if (screen.width > 950) {
        setPerSlide('swiper-wrapper__emp', employee, 3, 'emp_photo_wrp')
    }
    else if (screen.width > 550) {
        setPerSlide('swiper-wrapper__emp', employee, 2, 'emp_photo_wrp')
    }
    else {
        setPerSlide('swiper-wrapper__emp', employee, 1, 'emp_photo_wrp')
    }
}
function setFeedback() {
    const feedback = [];
    const feedback_1 = {
        'title': '',
        'text': 'Очень всё понравилось. Клиника чистая и уютная, хороший интерьер. Вежливый и отзывчивый персонал. Лечила зубы и делала чистку. Все прошло без боли. Результатом осталась очень довольна. Рекомендую.',
        'customer': 'Екатерина М.',
    }
    const feedback_2 = {
        'title': '',
        'text': 'Очень понравился врач, сделала все по красоте и качественно. В целом в клинике доброжелательные люди работают!',
        'customer': 'Радик Хабиров',
    }
    const feedback_3 = {
        'title': '',
        'text': 'Выражаю огромную благодарность за профессионализм, доброе отношение врачу и медсестре (к сожалению, не знаю ее имени). От посещения стоматологи, начиная с регистратуры и, заканчивая кабинетом врача, остались очень положительные впечатления!',
        'customer': 'Татьяна'
    }
    feedback.push(feedback_1)
    feedback.push(feedback_2)
    feedback.push(feedback_3);

    if (screen.width > 950) {
        setPerSlide('feedback__swiper', feedback, 3, 'feedback__page')
    }
    else if (screen.width > 550) {
        setPerSlide('feedback__swiper', feedback, 2, 'feedback__page')
    }
    else {
        setPerSlide('feedback__swiper', feedback, 1, 'feedback__page')
    }
}
function setPerSlide(block, employee, separator, className) {
    const swiper = document.getElementById(block);

    let perPage = separator;
    let template = '';
    let page = '';
    let flag = false;
    employee.forEach((item, index) => {
        flag= false;

        if (block == 'swiper-wrapper__emp') {
            template += setEmpBlock(item);
        }
        else {
            template += setFeedbackBlock(item);
        }
        if (index + 1 == separator)  {
            flag = true;
            page += `<div class="swiper-slide ${className}">`
            page += template;
            page += '</div>'
            template = ''

            separator += perPage;
        }
    })
    if (!flag) {
        page += `<div class="swiper-slide ${className}">`
        page += template;
        page += '</div>'
    }
    swiper.innerHTML = page;

}
function setEmpBlock(item) {
    return `
    <div class="emp__block">
        <img src="./img/emp/${item.img}" alt="" class="emp_photo">
        <div class="emp__name">${item.name}</div>
        <div class="emp__jobtitle">${item.jobtitle}</div>
    </div>`;
}
function setFeedbackBlock(item) {
    // <div class="title">Заголовок отзывы</div>
    return `
    <div class="feedback__wrp">
        <div class="feedback__block">
            <div class="text">${item.text}</div>
        </div>
        <div class="feedback__name">${item.customer}</div>
    </div>
    `
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
function goTo(block) {

    document.getElementById(block).scrollIntoView();
}
window.addEventListener('mouseup', (event) => {
    const element = document.getElementById('modal');

    if (event.target == element) {
        closeModal();
    }
})